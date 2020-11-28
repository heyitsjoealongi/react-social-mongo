/* Framework */
import Head from "next/head";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="inside">
                  <h1>Welcome to Archtyped</h1>
                  <p className="lead">
                    Connecting spectral valances with symmetry through voids.
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
