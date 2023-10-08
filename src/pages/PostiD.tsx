import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PostData } from "../interfaces/Posts"
import PostDetails from "../components/postDetails"

const PostId = () => {
  // on va dabord typer le params(on peut utiliser Interface,mais le type serait plus abordable)
     type paramsPost = {
       id : string
     }
  const {id}= useParams<paramsPost>()
  //ensuite on utilise usestate
  const[postOne,setPostOne] = useState<PostData | null>(null)

  useEffect(() => {
    const getpost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data : PostData = await response.json()
      setPostOne(data);
     
      }
    getpost()
 },[id])
  
  return (
    <div className="posts-container">
        <h1>Detail of publication</h1>
        <PostDetails postOne ={postOne}/>
    </div>
  )
}

export default PostId