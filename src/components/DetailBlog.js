import React from 'react'

const DetailBlog = ({ text, body }) => {
  return (
    <div className='blogs' >
      <h3> {text} </h3>
      <div>{body}</div>
    </div>
  )

}

export default DetailBlog