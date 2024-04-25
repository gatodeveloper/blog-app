import { IBlogArticle } from "@/models/blog.model"
import BlogBox from "../Box/blog-box.component";

interface BlogArticlesProps {
  articles: IBlogArticle[];
}

const BlogArticles : React.FC<BlogArticlesProps> = ({articles}) => {
  return <>
    <section className="blog-posts grid grid-cols-2 gap-5">
      {
        articles.map((article, index) => <BlogBox article={article} key={index}/>)
      }
    </section>
  </>
}
export default BlogArticles