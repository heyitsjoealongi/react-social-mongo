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
        <title>{username}</title>
      </Head>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <img
                  src={profilePicture || defaultProfilePicture(_id)}
                  width="256"
                  height="256"
                  alt={username}
                />
                <div>
                  <h1>{username}</h1>
                  {isCurrentUser && (
                    <Link href="/settings">
                      <button type="button">Edit</button>
                    </Link>
                  )}
                </div>
                Bio
                <p>{bio}</p>
                Email
                <p>{email}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h2>Voids</h2>
                <Posts creatorId={user._id} />
              </div>
            </div>
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
