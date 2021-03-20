import React from "react";

export default function Login() {
  return (
    <form className="form-signin">
      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <label htmlFor="inputPassword">Password</label>
      </div>

      <div className="custom-control custom-checkbox mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember password
        </label>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Sign in
      </button>
      <hr className="my-4" />
      <button
        className="btn btn-lg btn-google btn-block text-uppercase"
        type="submit"
      >
        <i className="fab fa-google mr-2"></i> Sign in with Google
      </button>
      <button
        className="btn btn-lg btn-facebook btn-block text-uppercase"
        type="submit"
      >
        <i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook
      </button>
    </form>
  );
}