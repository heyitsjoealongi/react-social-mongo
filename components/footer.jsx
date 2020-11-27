/* Framework */
import Link from "next/link";

/* SVG */
import Brand from "../public/archtyped.svg";

export default function Footer() {
  return (
    <>
      <div className="container goodbye">
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
