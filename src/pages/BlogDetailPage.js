import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios';
import { OrigUrl } from "../Resource";
import DetailBlog from "../components/DetailBlog";


const BlogDetailPage = () => {
  const { id } = useParams()
  console.log(`${OrigUrl}?id=${id}`)

  useEffect(() => {
    axios.get(`${OrigUrl}?id=${id}`)
      .then(response => {
        setBlog(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id]
  )
  const [blog, setBlog] = useState([])


  console.log(blog)
  return (
    <>
      {blog.map((b) => (
        <DetailBlog key={b.id} text={b.title} body={b.body} />
      ))
      }
    </>
  )
}

export default BlogDetailPage