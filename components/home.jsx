/* Framework */
import React from "react";
import Head from "next/head";

/* Components */
import PostEditor from "@/components/post/editor";
import Posts from "@/components/post/posts";

import { useCurrentUser } from "@/hooks/index";

export default function Content() {
  const [user] = useCurrentUser();
  return (
    <>
      <Head>
        <title>react-social-mongo | home</title>
      </Head>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="welcome-message">
                <h2>
                  Hello,&nbsp;
                  {user ? user.username : "Archtyper"}
                </h2>
                <p>Say what you think, see, are, whichever you would like.</p>
              </div>
            </div>
          </div>
          <PostEditor />
          <Posts />
        </div>
      </section>
    </>
  );
}
