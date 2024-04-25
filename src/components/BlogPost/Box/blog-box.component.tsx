import { IBlogArticle } from "@/models/blog.model"
import Link from "next/link"

interface BlogBoxProps{
  article: IBlogArticle
}

const BlogBox = ({article} : BlogBoxProps) => {
  return <>
    <article className="border rounded-xl overflow-hidden">
      <figure className="bg-violet-700 min-h-[150px]"></figure>
      <div className="p-4">
        <h3 className="text-xl">{article.title}</h3>
        <p>{article.description}</p>
        <Link href={`blog/${article.slug}`} className="underline">Read more</Link>
      </div>
    </article>
  </>
}
export default BlogBox