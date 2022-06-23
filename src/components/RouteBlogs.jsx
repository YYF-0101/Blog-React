import { useNavigate } from 'react-router-dom';

const RouteBlogs = ({ blog }) => {

  const Navigate = useNavigate()

  // const handleClick = () => {
  //   Navigate(`/routeblogs/${blog.id}`)
  // }

  return (
    <>
      <a className='BlogsBorder' href={`/routeblogs/${blog.id}`}>
        <h3>{blog.id}. {blog.title} </h3>
        <div ><span >{blog.body}</span></div>
      </a>
      <hr />
    </>
  )
}

export default RouteBlogs

