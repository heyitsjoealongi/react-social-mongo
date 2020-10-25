/* Frameworks */
import React from "react";
import Link from "next/link";

/* System */
import Meta from "../components/Meta";

/* Components */
import Navigation from "../components/higher-order-components/Navigation";

export default function Home() {
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

      <div className="container welcome">
        <div className="row">
          <div className="col-lg-12">
            <div className="inside">
              <h1>Welcome to Archtyped</h1>
              <p className="lead">Connecting spectral valances with symmetry through voids.</p>
              <Link href="https://medium.com/archtypical">
                <button target="_blank" rel="noreferrer" className="button button-light">
                  Learn More
                </button>
              </Link>
              <Link href="https://medium.com/archtypical/newsletters/atypical">
                <button target="_blank" rel="noreferrer" className="button button-cta">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container goodbye">
        <div className="row">
          <div className="col-lg-12">
            <div className="inside">
              <hr/>
              <p>Made with 🍕 by &nbsp;
              <Link href="https://twitter.com/collectedview">
                <a target="_blank" rel="noreferrer">
                  collectedview
                </a>
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
