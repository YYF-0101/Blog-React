import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const NavButton = ({ text, linkTO }) => {
  return (

    <li className="nav-item">
      <Link to={linkTO} className="nav-link" >
        {text}
      </Link>
    </li>
  )
}

NavButton.defaultProps = {
  text: "Sample",
  linkTO: "/",
}

NavButton.propTypes = {
  text: PropTypes.string,
  linkTO: PropTypes.string,
}

export default NavButton