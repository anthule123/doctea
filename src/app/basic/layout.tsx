
import PanelLayout2 from "@/components/folderBased/panelLayout2";
import { getContentTree } from "@/utils/folderBased/getContentTree";

type LayoutProps = {
    children: React.ReactNode
  }
  
export default async function BlogLayout(
    { children }: LayoutProps
){ 
    const tree = getContentTree(
        {
           
            bigRoute: 'basic',
        }
    );
    return (
        <div className=''>
            <PanelLayout2
            tree = {tree}
           >{children} </PanelLayout2>
         
        </div>
        
    )
}