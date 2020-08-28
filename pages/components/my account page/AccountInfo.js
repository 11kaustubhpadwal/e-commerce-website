import React from "react";
import { Header } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Segment, Icon, Divider } from "semantic-ui-react";
import Orders from "./Orders";

const AccountInfo = ({ user }) => {
  return (
    <Grid padded stackable doubling container>
      <Grid.Row>
        <Header as="h1">My account</Header>
      </Grid.Row>
      <Grid.Row>
        <Segment raised>
          <Header>
            <Icon name="mail" /> Your email address - {user.email}
          </Header>
        </Segment>
      </Grid.Row>
      <Divider style={{ width: "100%" }} />
      <Grid.Row>
        <Header as="h1">My orders</Header>
      </Grid.Row>
      <Grid.Row>
        <Orders />
      </Grid.Row>
    </Grid>
  );
};

export default AccountInfo;
