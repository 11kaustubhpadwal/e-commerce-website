import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Message } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

const MyAccount = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <div>My account</div>;
  } else {
    return (
      <Grid container padded doubling stackable>
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
