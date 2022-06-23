
const DataDetailPage = ({ data }) => {

  const mediaUrl = `https://storage.googleapis.com/luxe_media/wwwroot/${data.productMedia[0].url}`

  return (
    <div className="container">
      <div className='imgBlock'>
        <img src={mediaUrl} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{data.title} </h5>
        <p>Price: {data.price}</p>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  )
}

export default DataDetailPage