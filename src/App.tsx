import { BrowserRouter, Route, Routes } from "react-router-dom"
import Posts from "./pages/Posts"
import Post from "./pages/PostiD"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts/>} />
          <Route path="/:id" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
