
import { getAllDocPaths } from "@/utils/folderBased/getAllDocPaths";
import { ArticleMetadata } from "@/utils/types/ArticleMetadata";
import Link from "next/link";
type Card = {
    metadata: ArticleMetadata,
    path: string
}

export default async function TimelineList(
    {
        bigRoute
    }:{
        bigRoute: string,
    }
){
    
    const nodes = await getAllDocPaths(`src/content/${bigRoute}`);
    const cards = [];
    for (const node of nodes){
        const slugPath = node.map(decodeURIComponent).join('/');
        const { metadata} = await import(`@/content/${bigRoute}/${slugPath}.mdx`) 
        
        const card = {} as Card;
        card.metadata = metadata;
        card.path = `/${bigRoute}/${slugPath}`
        cards.push(card)
        console.log('card', card)
    }
    cards.sort((a, b) => {
        const dateA = a.metadata?.date ?? '';
        const dateB = b.metadata?.date ?? '';
        return dateB.localeCompare(dateA);
        });
   
    return (
        <div>
           {IntroSentence(cards.length)}
                    {cards.map((card, index) => (
                        <div 
                        className="card" key = {`${index}`}>
                            <Link href= {`${card.path}`}><h3>{card.metadata?.title}</h3>
                            </Link>
                            {card.metadata?.date}

                        </div>
                    ))}
            </div>
                )
            
}
function IntroSentence(cardsLength: number){
    if(cardsLength<2) return `There is ${cardsLength} article.`
    return `There are ${cardsLength} articles.`
}
