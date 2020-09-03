import React from "react";
import { Grid, Divider } from "semantic-ui-react";

const Custom404 = () => {
  return (
    <Grid padded container centered columns={2}>
      <img src="/images/404.svg" style={{ width: "20%" }}></img>
      <h1 style={{ letterSpacing: "3px", marginBottom: "5rem" }}>
        Page not found.
      </h1>
      <Divider />
    </Grid>
  );
};

export default Custom404;
