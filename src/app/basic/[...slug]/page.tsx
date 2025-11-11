
import { generateStaticParamsForDocs } from '@/utils/slugSolve/slugDocs';
import SlugPageDocs from '@/utils/slugSolve/SlugPageDocs';



export async function generateStaticParams() {
    return generateStaticParamsForDocs('basic')
}

export default async function BlogPage(
    props: {params: Promise<{
        slug: string[] }>}
) {
    return SlugPageDocs({
        bigRoute: 'basic',
        params: props.params
    })
}

