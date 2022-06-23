import NavButton from "../components/Nav-Button"

const Header = ({ text }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a href={"/"} className="navbar-brand" >{text}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavButton text={"Home"} linkTO={"/"} />
              <NavButton text={"Blog"} linkTO={"/blogs"} />
              <NavButton text={"Route-Blog"} linkTO={"/routeblogs"} />
              <NavButton text={"Rawdata"} linkTO={"/rawdata"} />

              {/* <li className="nav-item active">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Header.defaultProps = {
  text: "React-Demo"
}

export default Header