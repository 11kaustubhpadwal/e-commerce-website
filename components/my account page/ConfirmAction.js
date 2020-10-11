import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const ConfirmAction = ({
  content,
  cancelOrder,
  orderNumber,
  orders,
  email,
}) => {
  const [confirm, setConfirm] = useState(false);

  const handleOrderCancel = () => {
    cancelOrder(orderNumber, setConfirm, email);
  };

  return (
    <Modal
      open={confirm}
      trigger={
        <Button
          content="Cancel"
          icon="cancel"
          labelPosition="left"
          color="red"
          onClick={() => setConfirm(true)}
          style={{ letterSpacing: "2px" }}
        />
      }
      onClose={() => setConfirm(false)}
      onOpen={() => setConfirm(true)}
    >
      <Header
        icon="warning sign"
        content={content}
        style={{ letterSpacing: "2px" }}
      />
      <Modal.Content style={{ letterSpacing: "2px" }}>
        <p>Are you sure?</p>
      </Modal.Content>
      <Modal.Actions>
        {!orders.loading && (
          <Button
            content="No"
            icon="cancel"
            labelPosition="left"
            color="black"
            style={{ letterSpacing: "2px" }}
            onClick={() => setConfirm(false)}
          />
        )}
        {orders.loading && (
          <Button
            disabled
            content="No"
            icon="cancel"
            labelPosition="left"
            color="black"
            style={{ letterSpacing: "2px" }}
            onClick={() => setConfirm(false)}
          />
        )}
        {!orders.loading && (
          <Button
            content="Yes"
            icon="checkmark"
            labelPosition="left"
            color="red"
            style={{ letterSpacing: "2px" }}
            onClick={handleOrderCancel}
          />
        )}
        {orders.loading && (
          <Button
            loading
            content="Yes"
            icon="checkmark"
            labelPosition="left"
            color="red"
            style={{ letterSpacing: "2px" }}
            onClick={handleOrderCancel}
          />
        )}
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmAction;
