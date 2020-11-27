import React from "react";
import { useCurrentUser } from "@/hooks/index";

import Welcome from "@/components/welcome";
import Home from "@/components/Home";

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
      <div className="container">
        <div className="row">{!user ? <Welcome /> : <Home />}</div>
      </div>
    </>
  );
};

export default IndexPage;
