import path from "path";
import { getAllDocPaths } from "@/utils/folderBased/getAllDocPaths";

export async function generateStaticParamsForDocs(
    bigRoute: string
  ): Promise<{  slug: string[] }[]> {
  
  const result: { slug: string[] }[] = []
  const folderDir = path.join(process.cwd(), `src/content/${bigRoute}`)
  const paths = await getAllDocPaths(folderDir) // [[Animals, Fish, Carp], ...]
  
  for (const pathArray of paths) {
    result.push({  slug: pathArray })
  }
  return result
}









