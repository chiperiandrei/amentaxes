import React from "react";
import "../../src/shared/css/Header.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <Logo/>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search here..."
            />
            <span className="input-group-addon">
              <i className="material-icons">&#xE8B6;</i>
            </span>
          </div>
        </form>
        <div className="navbar-nav ml-auto">
          <a href="#" className="nav-item nav-link active">
            <i className="fa fa-home"></i>
            <span>Home</span>
          </a>
          <a href="#" className="nav-item nav-link">
            <i className="fa fa-gears"></i>
            <span>Projects</span>
          </a>
          <a href="#" className="nav-item nav-link">
            <i className="fa fa-users"></i>
            <span>Team</span>
          </a>
          <a href="#" className="nav-item nav-link">
            <i className="fa fa-pie-chart"></i>
            <span>Reports</span>
          </a>
          <a href="#" className="nav-item nav-link">
            <i className="fa fa-briefcase"></i>
            <span>Careers</span>
          </a>
          <a href="#" className="nav-item nav-link">
            <i className="fa fa-envelope"></i>
            <span>Messages</span>
          </a>
          <a href="#" className="nav-item nav-link">
            <i className="fa fa-bell"></i>
            <span>Notifications</span>
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-item nav-link dropdown-toggle user-action"
            >
              <img
                src={process.env.PUBLIC_URL + "chiperi.png"}
                className="avatar"
                alt="Avatar"
              />
              Andrei Chiperi <b className="caret"></b>
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <i className="fa fa-user-o"></i> Profile
              </a>
              <a href="#" className="dropdown-item">
                <i className="fa fa-calendar-o"></i> Calendar
              </a>
              <a href="#" className="dropdown-item">
                <i className="fa fa-sliders"></i> Settings
              </a>
              <div className="divider dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="material-icons">&#xE8AC;</i> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
