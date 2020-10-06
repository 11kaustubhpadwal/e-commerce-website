import React, { Fragment, useState } from "react";
import { Modal, Button, Image, Header, Grid } from "semantic-ui-react";
import Link from "next/link";

const Cart = ({ setOpen, cartItems, removeFromCart }) => {
  return (
    <Fragment>
      <Modal.Header style={{ letterSpacing: "2px" }}>
        Shopping Cart
      </Modal.Header>
      {cartItems.length <= 0 && (
        <Modal.Content>
          <Modal.Description style={{ letterSpacing: "2px" }}>
            <p>Your shopping cart is currently empty.</p>
          </Modal.Description>
        </Modal.Content>
      )}
      {cartItems.map((item, index) => {
        if ("name" in item === false) {
          return;
        } else {
          return (
            <Grid
              padded
              columns={5}
              container
              textAlign="center"
              verticalAlign="middle"
            >
              <Grid.Column>
                <Image
                  size="tiny"
                  src={`/images/products/${item.name}.jpg`}
                  wrapped
                />
              </Grid.Column>
              <Grid.Column>
                <Header>{item.name}</Header>
              </Grid.Column>
              <Grid.Column>
                {cartItems[index + 1].quantity === 1 && (
                  <Header>{cartItems[index + 1].quantity} sheet</Header>
                )}
                {cartItems[index + 1].quantity > 1 && (
                  <Header>{cartItems[index + 1].quantity} sheets</Header>
                )}
              </Grid.Column>
              <Grid.Column>
                {cartItems[index + 1].quantity === 1 && (
                  <Header>{item.cost} PLN</Header>
                )}
                {cartItems[index + 1].quantity > 1 && (
                  <Header>
                    {cartItems[index + 1].quantity * item.cost} PLN
                  </Header>
                )}
              </Grid.Column>
              <Grid.Column>
                <Button
                  icon="cancel"
                  color="red"
                  onClick={() => {
                    removeFromCart(item.productID);
                  }}
                />
              </Grid.Column>
            </Grid>
          );
        }
      })}
      <Modal.Actions>
        <Button
          content="Close"
          labelPosition="left"
          icon="cancel"
          color="black"
          style={{ letterSpacing: "2px" }}
          onClick={() => setOpen(false)}
        ></Button>
        {cartItems.length > 0 && (
          <Link href="/checkout">
            <Button
              content="Checkout"
              labelPosition="right"
              icon="chevron circle right"
              onClick={() => setOpen(false)}
              color="blue"
            />
          </Link>
        )}
      </Modal.Actions>
    </Fragment>
  );
};

export default Cart;
