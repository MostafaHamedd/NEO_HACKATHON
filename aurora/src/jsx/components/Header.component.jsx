import React from "react";
import { Link } from "react-router-dom"
import { URL_ROUTES } from "../URL_ROUTES.routes"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href={URL_ROUTES.HOME_PAGE}>
          UM Aurora
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="d-flex-inline flex-center nav-link rounded-pill active"
                to={URL_ROUTES.HOME_PAGE}
              >
                Home <ion-icon name="home-outline"></ion-icon>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="d-flex-inline flex-center nav-link rounded-pill active"
                to={URL_ROUTES.SCHEDULE_PAGE}
              >
                Schedule <ion-icon name="school-outline"></ion-icon>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="d-flex-inline flex-center nav-link rounded-pill active"
                to={URL_ROUTES.REGISTRATION_PAGE}
              >
                Register <ion-icon name="book-outline"></ion-icon>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

