/* Frameworks */
import React from "react";

/* Components */
import Headers from "../Headers";
import ContentStreamContainer from "../functional-components/ContentStreamContainer";
import Signup from "../Signup";
import ContentStreamingContainer from "../functional-components/ContentStreamingContainer";

const StreamingContainer = (props) => {
  return (
    <>
      <Headers />
      <ContentStreamContainer />
      <Signup />
      <ContentStreamingContainer />
    </>
  );
};

export default StreamingContainer;
