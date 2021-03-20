import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../src/shared/css/Header.css";
import { logInUser, logOutUser } from "../actions/userActions";
import { useLoginMutation } from "../generated/graphql";
import { RootState } from "../reducers/rootReducers";
import Logo from "./Logo";

export default function Header() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation] = useLoginMutation();
  const data = useSelector((state: RootState) => state.user_information);
  const { token, firstname, lastname } = data
    ? data
    : { token: undefined, firstname: undefined, lastname: undefined };
  const dispatch = useDispatch();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const { data } = await loginMutation({
      variables: { username: email, password: password },
    });
    dispatch(logInUser(data?.login));
  };
  const handleLogOut = (e: any) => {
    dispatch(logOutUser());
    e.preventDefault();
  };
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <Logo />
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
        {token !== undefined ? (
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
                {firstname} {lastname} <b className="caret"></b>
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
                <a className="dropdown-item" onClick={handleLogOut}>
                  <i className="material-icons">&#xE8AC;</i> Logout
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
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
                Sign into Amentaxes <b className="caret"></b>
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </a>
                <a href="#" className="dropdown-item">
                  <input
                    type="password"
                    placeholder="******"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </a>
                <div className="divider dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <button className="btn btn-success" onClick={handleLogin}>
                    Login
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
