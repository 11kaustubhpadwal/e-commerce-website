import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Message } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import AccountInfo from "./components/my account page/AccountInfo";

const MyAccount = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isAuthenticated && !isLoading) {
    return <AccountInfo user={user} />;
  } else if (isLoading) {
    return (
      <div>
        <img
          src="/images/loading-dots.gif"
          style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}
        ></img>
        <h2
          style={{
            letterSpacing: "2px",
            textAlign: "center",
            width: "100%",
            marginBottom: "300px",
          }}
        >
          Loading
        </h2>
      </div>
    );
  } else {
    return (
      <Grid
        container
        padded
        doubling
        stackable
        style={{ letterSpacing: "2px" }}
      >
        <Message
          warning
          style={{ width: "100%" }}
          icon="warning sign"
          header="Please login!"
          content="Click the login button in the top right corner and try again."
        ></Message>
      </Grid>
    );
  }
};

export default MyAccount;
