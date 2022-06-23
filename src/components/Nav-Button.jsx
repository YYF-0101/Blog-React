import PropTypes from 'prop-types'

const NavButton = ({ text, linkTO }) => {
  return (

    <li className="nav-item">
      <a href={linkTO} className="nav-link" >
        {text}
      </a>
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