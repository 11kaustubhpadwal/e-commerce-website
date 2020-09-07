import React from "react";
import { Grid, Icon, Divider } from "semantic-ui-react";
import Contact from "../homepage/Contact";
import Orders from "./Orders";
import Inventory from "./Inventory";

const AdminInfo = () => {
  return (
    <Grid padded stackable doubling container>
      <Grid.Row>
        <Icon name="users" size="big" style={{ paddingTop: "2.5px" }} />
        <span style={{ letterSpacing: "2px", paddingLeft: "20px" }}>
          <h1>Administrator Panel</h1>
        </span>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid stackable doubling container padded columns={2} centered>
          <Grid.Column
            textAlign="center"
            width={5}
            style={{ letterSpacing: "2px" }}
          >
            <Contact
              source="/images/admin/order.svg"
              title="Orders"
              description="View and manage all orders."
              href="#orders"
            />
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            width={5}
            style={{ letterSpacing: "2px" }}
          >
            <Contact
              source="/images/admin/shelf.svg"
              title="Products"
              description="View and manage all products in the shop."
              href="#products"
            />
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid doubling stackable padded columns={1}>
          <Grid.Column>
            <Orders content="You are about to cancel an order!" />
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid doubling stackable padded columns={1}>
          <Grid.Column>
            <Inventory />
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Divider />
    </Grid>
  );
};

export default AdminInfo;
