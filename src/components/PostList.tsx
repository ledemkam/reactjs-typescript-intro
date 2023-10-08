import { useNavigate } from "react-router-dom"
import { PostData } from "../interfaces/Posts"

interface PostlistProps {
  allPosts : PostData[] | null
}
const PostList : React.FC <PostlistProps>= ({allPosts}) => {
  const postId = useNavigate()
  return (
    <ul className="postlist">
       {allPosts?.map(post =>(
        <li key={post.id} onClick={() => postId(`/${post.id}`)}>
           <h2>{post.title}</h2>
           <p>{post.body}</p>
        </li>
       ))

       }
    </ul>
  )
}

export default PostList