import PropTypes from 'prop-types'
import './css/HomePage.css'

const HomePage = ({ text }) => {
  return (
    <div >
      <h1>{text}</h1>
      <div className='formBlock'>
        <form>
          <div className='login-formCell'>
            <label className='login-label'>Email :</label>
            <input className="login-input" type="text" placeholder={"Email"} onChange={(text) => { console.log(text.target.value) }} />
          </div>
          <div className='login-formCell'>
            <label className='login-label'>Password :</label>
            <input className="login-input" type="text" placeholder={"Password"} />
          </div>
          <div className="submitBtn" ><input type="submit" /></div>
        </form>
      </div>
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