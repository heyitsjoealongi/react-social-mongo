import React from "react";
import Head from "next/head";
import Link from "next/link";
import Error from "next/error";
import { all } from "@/middleware/index";
import { useCurrentUser } from "@/hooks/index";
import Posts from "@/components/post/posts";
import { extractUser } from "@/lib/api-helpers";
import { findUserById } from "@/db/index";
import { defaultProfilePicture } from "@/lib/default";

export default function UserPage({ user }) {
  if (!user) return <Error statusCode={404} />;
  const { username, email, bio, profilePicture, _id } = user || {};
  const [currentUser] = useCurrentUser();
  const isCurrentUser = currentUser?._id === user._id;
  return (
    <>
      <Head>
        <title>
          {username} [#{username}]
        </title>
      </Head>
      <section>
        <div className="container">
          <div className="person">
            <div className="inside">
              <div className="row">
                <div className="col-lg-12">
                  <div className="person-picture">
                    <img
                      src={profilePicture || defaultProfilePicture(_id)}
                      alt={username}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="person-username">
                    <h2>{username}</h2>
                    <div className="person-handle">
                      <Link href={`/user/${user._id}`}>
                        <a className="link-simple link-simple-light">
                          #{username}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="person-bio">
                    <p className="lead">{bio}</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  {isCurrentUser && (
                    <Link href="/settings">
                      <button
                        type="button"
                        className="button button-dark person-button"
                      >
                        Edit Profile
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <h4 className="text-center">Voids</h4>
            <Posts creatorId={user._id} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  await all.run(context.req, context.res);
  const user = extractUser(
    await findUserById(context.req.db, context.params.userId)
  );
  if (!user) context.res.statusCode = 404;
  return { props: { user } };
}
