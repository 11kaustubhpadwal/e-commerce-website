import React from "react";
import { Grid, Icon, Search, Button } from "semantic-ui-react";
import Products from "./Products";

const Inventory = () => {
  return (
    <div id="products">
      <Grid padded stackable doubling>
        <Grid.Row columns={2}>
          <Grid.Column width="1">
            <Icon name="edit" size="big" style={{ paddingTop: "2.5px" }} />
          </Grid.Column>
          <Grid.Column width="7">
            <h1 style={{ letterSpacing: "2px" }}>Manage Products</h1>
          </Grid.Column>
          <Grid.Column width="4" textAlign="right">
            <Button
              content="Add new product"
              icon="plus"
              labelPosition="left"
              color="grey"
              style={{ letterSpacing: "2px" }}
            />
          </Grid.Column>
          <Grid.Column width="4" textAlign="right">
            <Search />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Products />
    </div>
  );
};

export default Inventory;
