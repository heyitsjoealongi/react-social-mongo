import React from "react";
import { useCurrentUser } from "@/hooks/index";

import Welcome from "@/components/welcome";
import Home from "@/components/home";

const IndexPage = () => {
  const [user] = useCurrentUser();

  return <>{!user ? <Welcome /> : <Home />}</>;
};

export default IndexPage;
