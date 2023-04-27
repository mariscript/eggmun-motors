import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gray-900">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://cdn.dribbble.com/users/2245289/screenshots/6835230/dribbble.gif"
            width="100"
            height="60"
            alt="bumping car"
          />{" "}
        </NavLink>
        <NavLink className="navbar-brand" to="/">
          EggMun mOtOrs
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="/#"
              >
                Inventory
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers">
                    Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models">
                    Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles">
                    Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/manufacturer/new">
                    Create Manufacturer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models/new">
                    Create A Model
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/new">
                    Create An Automobile
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/#"
                >
                  Service
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/appointments">
                      Appointments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/appointments/history"
                    >
                      Service History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/appointments/new">
                      Create Appointment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/technician/new">
                      Create Technician
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/#"
                  >
                    Sales
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/customers">
                        Customers
                      </NavLink>
                    </li>
  
                    <li>
                      <NavLink className="dropdown-item" to="/salespersons/">
                        Sales Persons
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/salesrecords/">
                        Sales Records
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/saleshistory/">
                        Sales History
                      </NavLink>
                    </li>

                    <li>
                     <NavLink className="dropdown-item" to="/customer/new">
                        Create a Customer
                      </NavLink>
                    </li> 
                    <li>
                      <NavLink className="dropdown-item" to="/salesperson/new">
                        Create a Sales Person
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/salesrecord/new">
                        Create a Sales Record
                      </NavLink>
                    </li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
