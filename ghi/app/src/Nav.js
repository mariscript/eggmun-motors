import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src="https://cdn.dribbble.com/users/2245289/screenshots/6835230/dribbble.gif" width="100" height="60" /> </NavLink>
        <NavLink className="navbar-brand" to="/">EggMun Motors</NavLink>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="dropdown">
  <li className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </li>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li>
      <a className="dropdown-item" href="#">Another action</a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Submenu
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item" href="#">Submenu item 1</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 2</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 3 </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="#">Multi level 1</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Multi level 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 4</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Submenu item 5</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
              </a>
              <ul className="dropdown-menu">
                {/* <li><NavLink className="dropdown-item" to="/services">Service Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/services/history">Service History</NavLink></li>
                <li><NavLink className="dropdown-item" to="/services/new">Create Appointment</NavLink></li> */}
                <li><NavLink className="dropdown-item" to="/technician/new">Create Technician</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  )
}

export default Nav;
