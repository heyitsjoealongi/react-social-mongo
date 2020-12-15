/* Framework */
import React from "react";

/* Components */
import Welcome from "@/components/welcome";
import Home from "@/components/home";

import { useCurrentUser } from "@/hooks/index";

const IndexPage = () => {
  const [user] = useCurrentUser();

  return <>{!user ? <Welcome /> : <Home />}</>;
};

export default IndexPage;
