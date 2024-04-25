import { IBlogAuthor } from "@/models/blog.model"

interface BlogAuthorProps {
  author: IBlogAuthor
}

const BlogAuthor : React.FC<BlogAuthorProps> = ({author}) => {
  return (
    <div className="flex items-end">
      <div className="avatar shadow w-[60px] h-[60px] bg-indigo-50 rounded-full"></div>
      <p className="text-xs pl-2">{ author.name }</p>
    </div>
  )      
}
export default BlogAuthor