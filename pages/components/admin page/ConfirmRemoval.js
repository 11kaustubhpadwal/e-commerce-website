import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const ConfirmRemoval = ({ confirm, setConfirm, content }) => {
  return (
    <Modal
      open={confirm}
      trigger={
        <Button
          icon="cancel"
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
        <Button
          content="No"
          icon="cancel"
          labelPosition="left"
          color="black"
          style={{ letterSpacing: "2px" }}
          onClick={() => setConfirm(false)}
        />
        <Button
          content="Yes"
          icon="checkmark"
          labelPosition="left"
          color="red"
          style={{ letterSpacing: "2px" }}
          onClick={() => setConfirm(false)}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmRemoval;
