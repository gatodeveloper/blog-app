import { IBlogAuthor } from "@/models/blog.model"

interface BlogAuthorProps {
  author: IBlogAuthor
}

const BlogAuthor : React.FC<BlogAuthorProps> = ({author}) => {
  return (
    <div className="flex items-end">
      <div className="avatar shadow w-[80px] h-[80px] bg-indigo-50 rounded-xl">
        <figure className="bg-violet-700 min-h-full rounded-xl bg-cover" style={{backgroundImage: `url(${author.avatar})`}}></figure>
      </div>
      <p className="text-sm pl-2">{ author.name }</p>
    </div>
  )      
}
export default BlogAuthor