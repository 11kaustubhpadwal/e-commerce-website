import React, { useState } from "react";
import { Button, Header, Label, Modal, Grid, Image } from "semantic-ui-react";

const OrderDetails = ({ order, orderItems }) => {
  const [open, setOpen] = useState(false);

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
        content={`Order Number : ${order.orderNumber}`}
        style={{ letterSpacing: "2px" }}
      />
      <Modal.Content style={{ letterSpacing: "2px" }}>
        <p style={{ marginBottom: "30px" }}>
          Ordered status -{" "}
          {order.status === "On going" && (
            <Label content="On going" icon="truck" color="blue" />
          )}{" "}
          {order.status === "Cancelled" && (
            <Label content="Cancelled" icon="cancel" color="red" />
          )}
          {order.status === "Delivered" && (
            <Label content="Delivered" icon="checkmark" color="violet" />
          )}
        </p>
        <p>{`Ordered on - ${order.date}`}</p>
        <p>{`Ordered by - ${order.firstName} ${order.lastName}`}</p>
        <p
          style={{ marginTop: "30px" }}
        >{`Delivery address - ${order.deliveryAddress}`}</p>
        <p>{`Delivery method - ${order.deliveryMethod}`}</p>
        <p
          style={{ marginTop: "30px" }}
        >{`Payment method - ${order.paymentMethod}`}</p>
        <p>{`Total cost - ${order.totalCost} PLN`}</p>
        <p style={{ margin: "30px 0" }}>Order details -</p>
        {orderItems.map((item, index) => {
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
                <Grid.Column style={{ letterSpacing: "2px" }}>
                  <Header># {index / 2 + 1}</Header>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    size="tiny"
                    src={`/images/products/${item.name}.jpg`}
                    wrapped
                  />
                </Grid.Column>
                <Grid.Column style={{ letterSpacing: "2px" }}>
                  <Header>{item.name}</Header>
                </Grid.Column>
                <Grid.Column style={{ letterSpacing: "2px" }}>
                  {orderItems[index + 1].quantity === 1 && (
                    <Header>{orderItems[index + 1].quantity} sheet</Header>
                  )}
                  {orderItems[index + 1].quantity > 1 && (
                    <Header>{orderItems[index + 1].quantity} sheets</Header>
                  )}
                </Grid.Column>
                <Grid.Column style={{ letterSpacing: "2px" }}>
                  {orderItems[index + 1].quantity === 1 && (
                    <Header>{item.cost} PLN</Header>
                  )}
                  {orderItems[index + 1].quantity > 1 && (
                    <Header>
                      {orderItems[index + 1].quantity * item.cost} PLN
                    </Header>
                  )}
                </Grid.Column>
              </Grid>
            );
          }
        })}
      </Modal.Content>
    </Modal>
  );
};

export default OrderDetails;
