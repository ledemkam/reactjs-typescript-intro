import { PostData } from "../interfaces/Posts"
interface onePostProps {
    postOne : PostData | null
}

const PostDetails : React.FC <onePostProps> = ({postOne}) => {
  return (
    <div className="posti">
        <h1>Publication of one Post : {postOne?.id}</h1>
        <h2>Titel : {postOne?.title}</h2>
        <p>{postOne?.body}</p>
    </div>
  )
}

export default PostDetails