import React from 'react'
import { Link } from 'react-router-dom'
import './css/NotFound.css';

const NotFound = () => {
  return (
    <div className='container block'>
      <div className='title'>
        <span >PAGE NOT FOUND</span>
      </div>
      <div className='button'>
        <Link to={"/"}>
          <button className='btn btn-outline-info'>Back to Main Page?</button>
        </Link>
      </div>

    </div>
  )
}

export default NotFound