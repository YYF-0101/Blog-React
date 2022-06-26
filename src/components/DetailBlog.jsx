import { useNavigate } from "react-router-dom"

const DetailBlog = ({ text, body, showForm }) => {

  const navigate = useNavigate()
  return (
    <div>
      <div className='blogs'>
        <div className='BlogDetailTitle'> {text} </div>
        <div className='blogDetailTxt'><span>{body}</span></div>
        <div className="d-grid gap-2 col-6 mx-auto ">
          <button className="btn btn-primary" type="button" onClick={showForm}>
            Update
          </button>
        </div>
      </div>
      <i className="bi bi-backspace-fill i-back" onClick={() => navigate("/blogs")} />
    </div >

  )

}

export default DetailBlog