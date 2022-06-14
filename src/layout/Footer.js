import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start ">
      <div className="text-center p-3 container-fluid d-flex justify-content-between" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2022 Copyright
        <Link to="/about" className="text-dark" >About</Link>
      </div>
    </footer >
  )
}

export default Footer