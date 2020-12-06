/* Framework */
import Head from "next/head";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>react-social-mongo | welcome</title>
      </Head>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="inside">
                  <h1>Welcome to React Social Mongo</h1>
                  <p className="lead">
                    Multi-Page React Application — React, Bootstrap, Next &
                    MongoDB
                  </p>
                  <div className="button-group">
                    <Link href="/login">
                      <a className="button button-light">Login</a>
                    </Link>
                    <Link href="/signup">
                      <a className="button button-cta">Sign Up</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
