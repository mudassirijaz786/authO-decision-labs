import React from "react";
import { Button } from "reactstrap";
import { useAuth0 } from "../../react-auth0-spa";

const Regions = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="text-center hero my-5">
      {isAuthenticated && (
          <h1>You are going to select regions</h1> 
      )}
      <hr />
    </div>
  );
};

export default Regions;
