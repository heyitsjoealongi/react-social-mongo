import React from "react";
import { useCurrentUser } from "@/hooks/index";

import Welcome from "@/components/Welcome";
import Home from "@/components/Home";

const IndexPage = () => {
  const [user] = useCurrentUser();

  return <>{!user ? <Welcome /> : <Home />}</>;
};

export default IndexPage;
