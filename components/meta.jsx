/* Framework */
import Head from "next/head";

export default function Meta() {
  return (
    <>
      <Head>
        <title>react-social-mongo</title>
        <meta name="title" content="react-social-mongo" />
        <meta
          name="description"
          content="Multi-Page React Application — React, Bootstrap, Next & MongoDB"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://react-social-mongo.vercel.app/"
        />
        <meta property="og:title" content="react-social-mongo" />
        <meta
          property="og:description"
          content="Multi-Page React Application — React, Bootstrap, Next & MongoDB"
        />
        <meta
          property="og:image"
          content="https://react-social-mongo.vercel.app/react-social-mongo_image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://react-social-mongo.vercel.app/"
        />
        <meta property="twitter:title" content="react-social-mongo" />
        <meta
          property="twitter:description"
          content="Multi-Page React Application — React, Bootstrap, Next & MongoDB"
        />
        <meta
          property="twitter:image"
          content="https://react-social-mongo.vercel.app/react-social-mongo_image.png"
        />
      </Head>
    </>
  );
}
