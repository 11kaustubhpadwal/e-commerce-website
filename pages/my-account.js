import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = ({ history }) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <div>My account</div>;
  } else {
    return <div>Please login.</div>;
  }
};

export default MyAccount;
