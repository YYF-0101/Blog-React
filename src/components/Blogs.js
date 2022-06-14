import { Link } from "react-router-dom"

const Blogs = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Link to={"/Blogs/" + blog.id} key={blog.id}  >
          <div className="BlogsBorder">
            <h3>{blog.id}. {blog.title} </h3>
            <span>{blog.body}</span>
          </div>
        </Link>
      ))
      }
    </div >
  )
}

export default Blogs