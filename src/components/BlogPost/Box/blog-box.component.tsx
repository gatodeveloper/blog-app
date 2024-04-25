import { IBlogArticle } from "@/models/blog.model"
import Link from "next/link"

interface BlogBoxProps{
  article: IBlogArticle
}

const BlogBox = ({article} : BlogBoxProps) => {
  return <>
    <article className="border rounded-xl overflow-hidden">
      <figure className="bg-violet-100 min-h-[150px] bg-cover" style={{backgroundImage: `url(${article.image})`}}></figure>
      <div className="p-4">
        <h3 className="text-xl capitalize font-semibold">{article.title}</h3>
        <p>{article.description}</p>
        <div className="flex justify-end">
          <Link href={`blog/${article.slug}`} className="border px-6 py-2 inline-block hover:text-indigo-50 hover:bg-indigo-700 border-indigo-700 rounded-2xl">Read more</Link>
        </div>
      </div>
    </article>
  </>
}
export default BlogBox