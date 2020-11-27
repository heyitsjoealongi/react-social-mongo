/* Framework */
import React from "react";
import Layout from "@/components/layout";

/* System */
import Meta from "@/components/meta";

/* Packaged Styles */
import "bootstrap/dist/css/bootstrap.min.css";

/* Styles */
import "../styles/css/main.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Meta />
      <Component {...pageProps} />
    </Layout>
  );
}
