import { useState, useEffect } from "react"
import axios from 'axios';
import { ProductUrl } from "../Resource";
import Blogs from "../components/Blogs";

const BlogsPage = () => {
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


  return (
    <div className='blogs'>
      <Blogs blogs={blogs} />
    </div>

  )
}

export default BlogsPage