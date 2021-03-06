import React from "react";
import Information from "../components/about page/Information";
import PageInfo from "../components/PageInfo";
import { Grid } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

const About = () => {
  return (
    <Grid container padded style={{ letterSpacing: "2px" }}>
      <PageInfo />
      <Grid.Row>
        <Information />
      </Grid.Row>
      <Divider />
    </Grid>
  );
};

export default About;
