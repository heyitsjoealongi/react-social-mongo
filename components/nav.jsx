import React, { Component } from "react";
import Link from "next/link";

/* SVG */
import Brand from "../public/react-social-mongo.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light navigation navigation-one">
              <Link href="/">
                <a className="navbar-brand">
                  <Brand />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {!user ? (
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item"></li>
                  </ul>
                ) : (
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Voids
                      </a>
                    </li>
                  </ul>
                )}
                <span>
                  {!props.user ? (
                    <>
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <Link href="/login">
                            <a>Login</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/signup">
                            <a>Sign Up</a>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <Link href={`/user/${user._id}`}>
                            <a>Profile</a>
                          </Link>
                        </li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li className="nav-item">
                          <a tabIndex={0} role="button" onClick={handleLogout}>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </>
                  )}
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
