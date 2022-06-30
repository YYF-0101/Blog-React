import axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import './css/HomePage.css'

const HomePage = ({ text }) => {
  const userDefault = [{
    username: 'yang',
    passw: '123'
  }]

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const auth = localStorage.getItem('auth');

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(form.username)
    const userData = userDefault.find((user) => user.username === form.username);
    console.log(form.password)
    if (userData) {
      if (userData.passw !== form.password) {
        console.log("password wrong")
        alert("password wrong")
      } else {
        axios.post('https://jsonplaceholder.typicode.com/posts', { form })
          .then(res => {
            localStorage.setItem('auth', 'isAuthenticated')
            window.location.reload(false)
            console.log(auth)
          })
          .catch(err => {
            console.log(err)
          })
      }
    } else {
      console.log("user name wrong")
      alert("user name wrong")
    }
  }

  const logOut = () => {
    localStorage.setItem('auth', 'isNotAuthenticated')
    window.location.reload(false);
  }
  return (
    <div className='main'>
      {
        auth === 'isAuthenticated' && (
          <div className='nav justify-content-between loggedInBlock'>
            <div>
              You're logged in.
            </div>
            <div className='btn btn-outline-dark'>
              <span onClick={logOut}>Log out</span>
            </div>
          </div>
        )
      }
      <div >
        <h1>{text}</h1>
        {
          auth !== 'isAuthenticated' && (
            <div className='formBlock'>
              <form onSubmit={handleSubmit}>
                <div className='login-formCell'>
                  <label className='login-label'>User Name :</label>
                  <input className="login-input form-control" type="text" placeholder={"User Name"} onChange={(e) => setForm(({ ...form, username: e.target.value }))} />
                </div>
                <div className='login-formCell'>
                  <label className='login-label'>Password :</label>
                  <input className="login-input form-control" type="text" placeholder={"Password"} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>
                <div className='login-formCell'>
                  <input className="submitBtn btn btn-primary" type="submit" />
                </div>

              </form>
            </div>
          )
        }
      </div >
    </div >

  )
}


HomePage.defaultProps = {
  text: "Welcome to React Blogs - Demo"
}

HomePage.propTypes = {
  text: PropTypes.string
}
export default HomePage