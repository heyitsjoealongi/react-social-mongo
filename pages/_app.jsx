/* Framework */
import React from "react";
import Layout from "@/components/layout";

/* Packaged Styles */
import "bootstrap/dist/css/bootstrap.css";

/* Styles */
import "../styles/css/main.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
