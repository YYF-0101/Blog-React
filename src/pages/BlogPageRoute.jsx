import { useState, useEffect } from "react"
import axios from 'axios';
import { ProductUrl } from "../Resource";
import { Routes, Route } from "react-router-dom";
import RouteBlogs from "../components/RouteBlogs";
import DetailBlog from "../components/DetailBlog";

const BlogPageRoute = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get(`${ProductUrl}`)
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h2>Blog</h2>
          {blogs.map(post => <RouteBlogs blog={post} key={post.id} />)}
        </div>
      } />

      {blogs.map(post =>
        <Route path={`/${post.id}`} element={<DetailBlog text={post.title} body={post.body} key={post.id} />} />
      )}
    </Routes>
  )
}

export default BlogPageRoute