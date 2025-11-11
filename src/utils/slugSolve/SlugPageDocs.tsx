import style from '@/css/components/Article.module.css';
import Article from '@/components/Article';

export default async function SlugPageDocs({
    bigRoute,
    params,
  }: {
    bigRoute: string,
    params: Promise<{ slug: string[] }>;
  }) {
    try {
      const { slug } = await params; // assuming params is a promise resolving to an object
      if(!Array.isArray(slug)){
        return <div>Error</div>
      }
      const path = slug.join('/');  
       const decodedSlug = decodeURI(path); // join the slug array and decode the URI component 
        const { default: Post, metadata } = await import(`@/content/${bigRoute}/${decodedSlug}.mdx`
      );
      return (
        <div>
          <Article className={style.article}>
            <Post />
          </Article>
        </div>
      );
    } catch (error) {
      console.error('❌ Error loading blog post:', error);
      return (
        <div className="">
          <h1>Error</h1>
          <p>Sorry, there was an error loading this blog post.</p>
        </div>
      );
    }
}