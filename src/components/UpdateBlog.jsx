import { useState } from "react"


const UpdateBlog = ({ closeForm, onUpdate }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const update = (e) => {
    e.preventDefault()

    onUpdate({ title, body })

    setTitle("")
    setBody("")
  }


  return (
    <div className="updateForm">
      <div className="close" onClick={closeForm}>
        <i className="bi bi-x-lg" />
      </div>
      <form onSubmit={update} >
        <div>
          <label>Title :</label>
          <textarea className="form-input" type="text" placeholder={"Change Title"} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body :</label>
          <textarea className="form-input" type="text" placeholder={"Change Body"} onChange={(e) => setBody(e.target.value)} />
        </div>
        <div className="submitBtn" ><input type="submit" /></div>
      </form>
    </div>
  )
}

export default UpdateBlog