import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const ConfirmAction = ({ confirm, setConfirm }) => {
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
        />
      }
      onClose={() => setConfirm(false)}
      onOpen={() => setConfirm(true)}
    >
      <Header
        icon="warning sign"
        content="You are about to cancel your order!"
      />
      <Modal.Content>
        <p>Are you sure?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="No"
          icon="cancel"
          labelPosition="left"
          color="black"
          onClick={() => setConfirm(false)}
        />
        <Button
          content="Yes"
          icon="checkmark"
          labelPosition="left"
          color="red"
          onClick={() => setConfirm(false)}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmAction;