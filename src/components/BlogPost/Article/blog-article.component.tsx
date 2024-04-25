'use client'
import { IBlogArticle } from "@/models/blog.model"
import * as marked from 'marked';
import { useEffect, useState } from "react";

interface BlogArticleProps {
  article: IBlogArticle;
}

const markdownToHtml = (markdownContent: string): Promise<string> => {
  return Promise.resolve(marked.parse(markdownContent));
};

const BlogArticle : React.FC<BlogArticleProps> = ({article}) => {

  const [htmlContent, setHtmlContent] = useState<string>('');
  const markdownContent = article.content || ''  

  useEffect(() => {
    markdownToHtml(markdownContent)
      .then((html) => setHtmlContent(html))
      .catch((error) => console.error('Error converting Markdown to HTML:', error));
  }, [markdownContent]);

  return <div className="px-6">
    <h1 className="text-3xl py-2 capitalize pb-8">{article.title}</h1>    
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />        
  </div>
}
export default BlogArticle