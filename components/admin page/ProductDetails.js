import React, { useState } from "react";
import { Button, Header, Label, Modal, Image } from "semantic-ui-react";

const ProductDetails = ({ item }) => {
  const [open, setOpen] = useState(false);

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
        content={`Product Id : ${item.productID}`}
        style={{ letterSpacing: "2px" }}
      />
      <Modal.Content style={{ letterSpacing: "2px" }}>
        <p># Product Image - </p>
        <Image
          src={item.imageUrl}
          rounded
          size="medium"
          style={{ marginBottom: "20px" }}
        />
        <p>
          # Availability -{" "}
          {item.quantity > 0 && (
            <Label content="In stock" icon="check circle" color="blue" />
          )}
          {item.quantity <= 0 && (
            <Label content="Out of stock" icon="cancel" color="red" />
          )}
        </p>
        <p># Product Name - {item.name}</p>
        <p># Product Cost - {item.cost} PLN</p>
        <p># Total Quantity - {item.quantity}</p>
        <p># Product Description -</p>
        <p>{item.description}</p>
      </Modal.Content>
    </Modal>
  );
};

export default ProductDetails;
