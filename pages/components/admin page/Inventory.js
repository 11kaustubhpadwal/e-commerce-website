import React, { useState } from "react";
import { Grid, Icon, Search, Button, Modal } from "semantic-ui-react";
import Products from "./Products";
import AddProduct from "./AddProduct";

const Inventory = ({
  products,
  addProduct,
  getProducts,
  removeProduct,
  search,
}) => {
  const [open, setOpen] = useState(false);

  const { loading, results, value } = search;

  const resultRenderer = ({ products }) => <Label content={products} />;

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
                <AddProduct
                  setOpen={setOpen}
                  products={products}
                  addProduct={addProduct}
                />
              </Modal.Content>
            </Modal>
          </Grid.Column>
          <Grid.Column width="4" textAlign="right">
            <Search
              loading={loading}
              results={results}
              value={value}
              resultRenderer={resultRenderer}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Products
        content="You are about to remove a product from the shop!"
        getProducts={getProducts}
        products={products}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default Inventory;
