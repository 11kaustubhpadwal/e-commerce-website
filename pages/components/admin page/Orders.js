import React from "react";
import OrdersTable from "../my account page/Orders";
import { Grid, Icon, Search } from "semantic-ui-react";

const Orders = ({ content, orders, cancelOrder }) => {
  return (
    <div id="orders">
      <Grid padded stackable doubling>
        <Grid.Row columns={2}>
          <Grid.Column width="1">
            <Icon name="edit" size="big" style={{ paddingTop: "2.5px" }} />
          </Grid.Column>
          <Grid.Column width="9">
            <h1 style={{ letterSpacing: "2px" }}>Manage Orders</h1>
          </Grid.Column>
          <Grid.Column width="6" textAlign="right">
            <Search />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <OrdersTable
        content={content}
        orders={orders}
        cancelOrder={cancelOrder}
        emptyMessage={
          "Once your customers start placing orders, you can manage them directly from here."
        }
      />
    </div>
  );
};

export default Orders;
