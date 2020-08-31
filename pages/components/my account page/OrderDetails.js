import React from "react";
import { Button, Header, Label, Modal } from "semantic-ui-react";

const OrderDetails = ({ open, setOpen }) => {
  return (
    <Modal
      centered={false}
      closeIcon
      open={open}
      trigger={
        <Button
          content="Details"
          icon="file text"
          labelPosition="left"
          color="blue"
          style={{ letterSpacing: "2px" }}
        />
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        icon="file text"
        content="Order Number : AN98997ERT"
        style={{ letterSpacing: "2px" }}
      />
      <Modal.Content style={{ letterSpacing: "2px" }}>
        <p>
          Ordered status -{" "}
          <Label content="On going" icon="truck" color="blue" />
        </p>
        <p>Ordered on - 27/09/2020</p>
        <p>Ordered by - John Doe</p>
        <p>Ordered details - 100 sheets Cotton (1m sheet)</p>
        <p>Transaction - Card</p>
      </Modal.Content>
    </Modal>
  );
};

export default OrderDetails;
