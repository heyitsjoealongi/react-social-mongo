/* Framework */
import React from "react";
import Head from "next/head";

/* Components */
import PostEditor from "@/components/post/editor";
import Posts from "@/components/post/posts";

import { useCurrentUser } from "@/hooks/index";

export default function content() {
  const [user] = useCurrentUser();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h4>
                Hello,
                {user ? user.name : "stranger"}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4>
                All posts from the Web{" "}
                <span role="img" aria-label="Earth">
                  🌎
                </span>
              </h4>
              <PostEditor />
              <Posts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
