import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const ConfirmRemoval = ({
  content,
  removeProduct,
  productID,
  imageName,
  loading,
}) => {
  const [confirm, setConfirm] = useState(false);

  const handleClick = () =>
    removeProduct(productID, imageName, () => {
      setConfirm(false);
    });

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
        {!loading && (
          <Button
            content="No"
            icon="cancel"
            labelPosition="left"
            color="black"
            style={{ letterSpacing: "2px" }}
            onClick={() => setConfirm(false)}
          />
        )}
        {!loading && (
          <Button
            content="Yes"
            icon="checkmark"
            labelPosition="left"
            color="red"
            style={{ letterSpacing: "2px" }}
            onClick={handleClick}
          />
        )}
        {loading && (
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
        {loading && (
          <Button
            loading
            content="Yes"
            icon="checkmark"
            labelPosition="left"
            color="red"
            style={{ letterSpacing: "2px" }}
            onClick={handleClick}
          />
        )}
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmRemoval;
