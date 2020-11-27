import React from "react";
import { useCurrentUser } from "@/hooks/index";
import PostEditor from "@/components/post/editor";
import Posts from "@/components/post/posts";

export default function Welcome() {
  const [user] = useCurrentUser();
  return (
    <>
      <div className="col-lg-4">
        <h4>
          Hello,
          {user ? user.name : "stranger"}
        </h4>
      </div>
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
    </>
  );
}
