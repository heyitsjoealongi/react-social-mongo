/* Frameworks */
import React from "react";
import Link from "next/link";

/* System */
import Meta from "../components/functional-components/Meta";

/* Components */
import Navigation from "../components/higher-order-components/Navigation";

/* SVG */
import Brand from "../public/archtyped.svg";

export default function Index() {
  return (
    <>
      <Meta />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome">
              <div className="inside">
                <h1>Welcome to Archtyped</h1>
                <p className="lead">
                  Connecting spectral valances with symmetry through voids.
                </p>
                <div className="button-group">
                  <Link href="https://medium.com/archtypical">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="button button-light"
                    >
                      Learn More
                    </a>
                  </Link>
                  <Link href="https://medium.com/archtypical/newsletters/atypical">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="button button-cta"
                    >
                      Subscribe
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid goodbye">
        <div className="row inside">
          <div className="col-lg-12">
            <hr />
            <p>
              Made with <Brand /> by &nbsp;
              <Link href="https://twitter.com/collectedview">
                <a target="_blank" rel="noreferrer" className="link link-light">
                  @collectedview
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
