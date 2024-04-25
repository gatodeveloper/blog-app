import BlogArticle from "@/components/BlogPost/Article/blog-article.component";
import BlogAuthor from "@/components/BlogPost/Author/author.component";
import { getArticle } from "@/services/articles.service";
import { DEFAULT_AUTHOR } from "@/services/contants";
import type { ParsedUrlQuery } from 'querystring';

export interface RafflesPageQuery extends ParsedUrlQuery {
  slug: string
}

const BlogPostDetail = async ({ params: { slug }} : { params: RafflesPageQuery})  => {      
  const author = DEFAULT_AUTHOR
  const article = await getArticle(slug)

  return (
    <section className="wrapper-page container mx-auto max-w-[700px]">
      <section className="article-hero pb-4xl">        
        <figure className="bg-violet-700 min-h-[250px] rounded-xl bg-cover" style={{backgroundImage: `url(${article.image})`}}></figure>
        <div className="relative bottom-[40px] left-[20px]">
          <BlogAuthor author={author}/>
        </div>
      </section>
      <section>
        { Boolean(article) && <BlogArticle article={article}/>}
      </section>
    </section>
  )
}

export default BlogPostDetail