import { useEffect, useState } from "react"
import PostList from "../components/PostList"
import { PostData } from "../interfaces/Posts"



const Posts : React.FC = () => {
    const[allPosts,setAllpost] = useState<PostData[] | null>(null)
    const[numberOfPost,setNumberOfpost] = useState<number>(5)

    const localStateNumber = () => localStorage.getItem("number") || numberOfPost
    const localStateNum = localStateNumber()

    useEffect(() => {
       const getposts = async () => {
         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localStateNum}`)
         const data : PostData[] = await response.json()
         setAllpost(data);
         }
       getposts()
    },[localStateNum])

    const handlerChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setNumberOfpost(+e.target.value)
        localStorage.setItem("number" ,e.target.value)
    }

  return (
    <div className="post-container">
        <h1>Page Principale </h1>
         <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="posts">Number of publication: {localStateNum} </label>
            <input type="range" min={1} max={20} onChange={handlerChange} defaultValue={localStateNum} />
            <PostList allPosts={allPosts}/>
         </div>
    </div>
  )
}

export default Posts