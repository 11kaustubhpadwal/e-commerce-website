import React from "react";
import { Button, Header, Label, Modal, Image } from "semantic-ui-react";

const ProductDetails = ({ open, setOpen }) => {
  return (
    <Modal
      centered={false}
      closeIcon
      open={open}
      trigger={
        <Button icon="file alternate" color="black" style={{ margin: "5px" }} />
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        icon="file text"
        content="Product Id : #99AN"
        style={{ letterSpacing: "2px" }}
      />
      <Modal.Content style={{ letterSpacing: "2px" }}>
        <p># Product Image - </p>
        <Image
          src="/images/products/1.jpg"
          rounded
          size="medium"
          style={{ marginBottom: "20px" }}
        />
        <p>
          # Availability -{" "}
          <Label content="In stock" icon="check circle" color="blue" />
        </p>
        <p># Product Name - Cotton</p>
        <p># Product Cost - 99 PLN</p>
        <p># Total Quantity - 136</p>
        <p># Product Description -</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal.Content>
    </Modal>
  );
};

export default ProductDetails;
