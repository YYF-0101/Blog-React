import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PostMediaData from '../components/PostMediaData'
import { rawdata } from '../data'
import DataDetailPage from './DataDetailPage'

const RawDataPage = () => {

  const [mediaData, setMediaData] = useState([])

  console.log(mediaData)

  useEffect(() => {
    rawdata.forEach(data => {
      data.productMedia[0] && setMediaData(arr => [...arr, data])
    })
    console.log('i fire once');
  }, [])


  return (
    <Routes>
      <Route path='/' element={
        <div className='container'>
          <div className='row'>
            {
              mediaData.map(data => <PostMediaData data={data} />)
            }
          </div>
        </div>

      } />


      {rawdata.map(data =>
        <Route path={`/${data.prodId}`} element={<DataDetailPage data={data} />} />
      )}
    </Routes>
  )
}

export default RawDataPage