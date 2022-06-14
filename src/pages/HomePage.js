import PropTypes from 'prop-types'

const HomePage = ({ text }) => {
  return (
    <div className='main'>
      <h1>{text}</h1>
    </div>
  )
}


HomePage.defaultProps = {
  text: "Welcome to React Blogs - Demo"
}

HomePage.propTypes = {
  text: PropTypes.string
}
export default HomePage