import { Link } from "react-router-dom"


const PostBlogsToUrl = ({ blog, onDelet }) => {

  return (
    <div className="col blog-block">
      <div className="d-flex justify-content-between ">
        <div>{blog.id}</div>
        <div onClick={() => onDelet(blog.id)}>
          <i className="bi bi-x-lg" />
        </div>
      </div>
      <div className="blogBlock-top ">
        <Link to={`/blogs/${blog.id}`} key={blog.id}  >
          <h3> {blog.title} </h3>
          <div className="texthide">{blog.body}</div>
        </Link >
      </div>

    </div >
  )
}

export default PostBlogsToUrl