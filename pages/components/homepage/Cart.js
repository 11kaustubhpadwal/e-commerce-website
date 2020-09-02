import React, { Fragment } from "react";
import { Modal, Button } from "semantic-ui-react";

const Cart = ({ setOpen }) => {
  return (
    <Fragment>
      {" "}
      <Modal.Header style={{ letterSpacing: "2px" }}>
        Shopping Cart
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description style={{ letterSpacing: "2px" }}>
          <p>Your shopping cart is currently empty.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Close"
          labelPosition="left"
          icon="cancel"
          color="black"
          style={{ letterSpacing: "2px" }}
          onClick={() => setOpen(false)}
        ></Button>
        {/* <Button
          content="Checkout"
          labelPosition="right"
          icon="chevron circle right"
          onClick={() => setOpen(false)}
          color="blue"
        /> */}
      </Modal.Actions>
    </Fragment>
  );
};

export default Cart;
