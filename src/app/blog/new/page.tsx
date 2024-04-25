'use client'
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import { createArticle } from "@/services/articles.service";
import { INIT_ARTICLE } from "@/services/contants";
import { IBlogArticle } from "@/models/blog.model";

const NewArticlePage = () => {
  const initForm :IBlogArticle = INIT_ARTICLE
  const [formData, setFormData] = useState<IBlogArticle>(initForm);
  const { push } = useRouter();

  const handleInputText = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;    
    
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('formData', formData)
    if(formData.title.length == 0) return 
    createNewArticle(formData)
  }

  const createNewArticle = async (payload: IBlogArticle) => {
    const response = await createArticle(payload)
    push(`/blog/${response.slug}`);
  }

  return (
    <section className="container mx-auto p-4 border rounded-3xl max-w-[400px] mt-20">
      <h2 className="text-center font-bold text-2xl py-5">Create a new Article</h2>
      <form onSubmit={onSubmit}>
        <div className="py-2">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleInputText} required className="flex w-full h-full border rounded-lg focus:outline-none focus:border-indigo-300 p-2" autoComplete='off'/>
        </div>
        <div className="py-2">
          <label htmlFor="title">Desciption:</label>
          <input type="text" id="title" name="description" value={formData.description} onChange={handleInputText} required className="flex w-full h-full border rounded-lg focus:outline-none focus:border-indigo-300 p-2" autoComplete='off'/>
        </div>
        <div className="py-2">
          <label htmlFor="title">Image Url:</label>
          <input type="text" id="title" name="image" value={formData.image} onChange={handleInputText} required className="flex w-full h-full border rounded-lg focus:outline-none focus:border-indigo-300 p-2" autoComplete='off'/>
        </div>
        <div className="py-2">
          <label htmlFor="title">Content:</label>
          <textarea id="title" name="content" value={formData.content} onChange={handleInputText} className="flex w-full h-full border rounded-lg focus:outline-none focus:border-indigo-300 p-2" autoComplete='off'/>
        </div>
        <button className="flex items-center justify-center bg-indigo-700 hover:bg-indigo-600 rounded-xl text-white h-full px-4 py-1 w-full flex-shrink-0" type='submit'>
          <span className="lnr-paper-plane text-lg">Publish</span>
        </button>
      </form>
    </section>
  )
}

export default NewArticlePage