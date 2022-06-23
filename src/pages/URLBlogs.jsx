import { useState, useEffect } from "react"
import axios from 'axios';
import { ProductUrl } from "../Resource";
import PostBlogsToUrl from "../components/PostBlogsToUrl.jsx";

const URLBlogs = () => {
  useEffect(() => {
    axios.get(`${ProductUrl}`)
      .then(response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []
  )

  const [blogs, setBlogs] = useState([])


  const onDelet = (id) => {
    console.log("delet" + id)
    setBlogs(blogs.filter((blog) =>
      blog.id !== id
    ))
  }

  return (
    <div className="container">

      <div className=" row row-cols-1 row-cols-lg-3">
        {blogs.map(blog => <PostBlogsToUrl blog={blog} onDelet={onDelet} />)}
      </div>
    </div >

  )
}

export default URLBlogs