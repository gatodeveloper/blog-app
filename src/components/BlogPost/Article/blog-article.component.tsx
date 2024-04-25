import { IBlogArticle } from "@/models/blog.model"
import BlogBox from "../Box/blog-box.component";

interface BlogArticleProps {
  article: IBlogArticle;
}

const BlogArticle : React.FC<BlogArticleProps> = ({article}) => {
  return <>
    <h1 className="text-3xl py-2">{article.title}</h1>
    <p className="py-2">{article.description}</p>
  </>
}
export default BlogArticle