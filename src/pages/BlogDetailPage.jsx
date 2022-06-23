import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios';
import { OrigUrl } from "../Resource";
import DetailBlog from "../components/DetailBlog";
import UpdateBlog from "../components/UpdateBlog";
import './css/BlogDetail.css';

const BlogDetailPage = () => {
  const { id } = useParams()
  console.log(id)
  console.log(`${OrigUrl}?id=${id}`)

  useEffect(() => {
    axios.get(`${OrigUrl}?id=${id}`)
      .then(response => {
        setBlog(response.data[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [id]
  )
  const [blog, setBlog] = useState('')

  const [showUpdate, setShowUpdate] = useState(false)

  const showForm = () => {
    setShowUpdate(!showUpdate)
  }

  const onUpdate = (bl) => {
    console.log(bl)
    console.log(blog)
    setBlog({ ...blog, title: bl.title, body: bl.body })

    axios.put(`${OrigUrl}?id=${id}`,
      { blog }
    )

    showForm()
  }

  console.log(blog)
  return (
    <>
      {showUpdate && <UpdateBlog closeForm={showForm} onUpdate={onUpdate} />}
      <DetailBlog key={blog.id} text={blog.title} body={blog.body} showForm={showForm} />
    </>
  )
}

export default BlogDetailPage