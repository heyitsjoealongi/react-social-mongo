/* Framework */
import React, { useState } from "react";
import Link from "next/link";

/* System */
import Meta from "@/components/meta";

/* SVG */
import Brand from "../public/react-social-mongo.svg";

import { useCurrentUser } from "@/hooks/index";

export default function Layout({ children }) {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch("/api/auth", {
      method: "DELETE",
    });
    mutate(null);
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <Meta />

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
                className="custom-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
                id="navbar"
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
                <div>
                  {!user ? (
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
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <main>{children}</main>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="inside">
                <hr />
                <p>
                  Made with <Brand /> by &nbsp;
                  <Link href="https://twitter.com/collectedview">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="link link-light"
                    >
                      @collectedview
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
