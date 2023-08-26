import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="navbar-top">
        <nav class="navbar cont navbar-expand-sm navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="javascript:void(0)">
              Logo
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <NavLink to="/" activeclassname="active" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="sportsnews" className="nav-link">
                    Sportsnews
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="football" className="nav-link">
                   Football
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="basketball" className="nav-link">
                    Basketball
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="tennis" className="nav-link">
                   Tennis
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <button className="btn  m-2 btn-primary">
                <NavLink
                  to="login"
                  activeclassname="active"
                  className="nav-link"
                >
                  Login
                </NavLink>
              </button>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
