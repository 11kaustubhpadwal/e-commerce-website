import React, { useState } from "react";
import { Grid, Icon, Search, Button, Modal } from "semantic-ui-react";
import Products from "./Products";
import AddProduct from "./AddProduct";

const Inventory = () => {
  const [open, setOpen] = useState(false);

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
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <Button
                  content="Add new product"
                  icon="plus"
                  labelPosition="left"
                  color="grey"
                  style={{ letterSpacing: "2px" }}
                />
              }
            >
              <Modal.Header style={{ letterSpacing: "2px" }}>
                Enter product details
              </Modal.Header>
              <Modal.Content>
                <AddProduct />
              </Modal.Content>
              <Modal.Actions>
                <Button
                  content="Cancel"
                  icon="cancel"
                  labelPosition="left"
                  color="red"
                  style={{ letterSpacing: "2px" }}
                  onClick={() => setOpen(false)}
                />
                <Button
                  content="Save"
                  icon="save"
                  labelPosition="left"
                  color="blue"
                  style={{ letterSpacing: "2px" }}
                  onClick={() => setOpen(false)}
                />
              </Modal.Actions>
            </Modal>
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
