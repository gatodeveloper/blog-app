import BlogArticles from "@/components/BlogPost/Articles/blog-articles.component"
import { IBlogArticle } from "@/models/blog.model"
import { getArticles } from '@/services/articles.service';
import { useState } from "react";

const BlogPage = async () => {

  const response = await getArticles()    
  const articles = response
  

  return (
    <>
      <section className="hero-banner container">        
        <h1 className="text-center text-5xl text-indigo-700 font-bold p-10">Blog Example</h1>        
      </section>
      <section className="py-10">
        <BlogArticles articles={articles}/>
      </section>
    </>
  )
}

export default BlogPage