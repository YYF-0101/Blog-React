import React from 'react'
import { Link } from 'react-router-dom'

const PostMediaData = ({ data }) => {

  const mediaUrl = `https://storage.googleapis.com/luxe_media/wwwroot/${data.productMedia[0].url}`


  return (
    <div className='col' >
      <Link to={`${data.prodId}`}>
        <div className='card' style={{ width: 300 }}>
          <div className='imgBlock'><img src={mediaUrl} className="card-img-top" alt="..." /></div>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
      </Link>
    </div >
  )
}

export default PostMediaData