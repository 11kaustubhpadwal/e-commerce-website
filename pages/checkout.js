import React, { useState } from "react";
import { Grid, Button, Header, Divider } from "semantic-ui-react";
import { Icon, Step } from "semantic-ui-react";
import PersonalDetails from "./components/checkout page/PersonalDetails";
import ShippingInfo from "./components/checkout page/ShippingInfo";
import BillingInfo from "./components/checkout page/BillingInfo";
import ConfirmOrder from "./components/checkout page/ConfirmOrder";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState("Shipping");

  return (
    <Grid container padded>
      <Grid.Row style={{ letterSpacing: "2px" }}>
        <Header as="h1">Checkout</Header>
      </Grid.Row>
      <Divider />
      {activeStep === "Shipping" && (
        <Grid.Row columns={2}>
          <Grid.Column>
            <PersonalDetails />
          </Grid.Column>
          <Grid.Column>
            <ShippingInfo />
          </Grid.Column>
        </Grid.Row>
      )}
      {activeStep === "Billing" && (
        <Grid.Row columns={1}>
          <Grid.Column>
            <BillingInfo />
          </Grid.Column>
        </Grid.Row>
      )}
      {activeStep === "ConfirmOrder" && (
        <Grid.Row columns={1}>
          <Grid.Column>
            <ConfirmOrder />
          </Grid.Column>
        </Grid.Row>
      )}
      {activeStep !== "ConfirmOrder" && (
        <Grid.Row centered style={{ margin: "20px 0" }}>
          <Button
            style={{ margin: "0 20px" }}
            content="Cancel"
            icon="cancel"
            labelPosition="left"
            color="red"
          />
          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            color="blue"
          />
        </Grid.Row>
      )}
      {activeStep === "ConfirmOrder" && (
        <Grid.Row centered style={{ margin: "20px 0" }}>
          <Button
            style={{ margin: "0 20px" }}
            content="Cancel"
            icon="cancel"
            labelPosition="left"
            color="red"
          />
          <Button
            content="Place Order & Pay"
            icon="check"
            labelPosition="right"
            color="blue"
          />
        </Grid.Row>
      )}
      <Grid.Row>
        <Step.Group fluid>
          {activeStep === "Shipping" ? (
            <Step active>
              <Icon name="truck" />
              <Step.Content>
                <Step.Title>Shipping</Step.Title>
                <Step.Description>
                  Choose your shipping options
                </Step.Description>
              </Step.Content>
            </Step>
          ) : (
            <Step disabled>
              <Icon name="truck" />
              <Step.Content>
                <Step.Title>Shipping</Step.Title>
                <Step.Description>
                  Choose your shipping options
                </Step.Description>
              </Step.Content>
            </Step>
          )}

          {activeStep === "Billing" ? (
            <Step active>
              <Icon name="payment" />
              <Step.Content>
                <Step.Title>Billing</Step.Title>
                <Step.Description>Enter billing information</Step.Description>
              </Step.Content>
            </Step>
          ) : (
            <Step disabled>
              <Icon name="payment" />
              <Step.Content>
                <Step.Title>Billing</Step.Title>
                <Step.Description>Enter billing information</Step.Description>
              </Step.Content>
            </Step>
          )}

          {activeStep === "ConfirmOrder" ? (
            <Step active>
              <Icon name="info" />
              <Step.Content>
                <Step.Title>Confirm Order</Step.Title>
              </Step.Content>
            </Step>
          ) : (
            <Step disabled>
              <Icon name="info" />
              <Step.Content>
                <Step.Title>Confirm Order</Step.Title>
              </Step.Content>
            </Step>
          )}
        </Step.Group>
      </Grid.Row>
      <Divider style={{ margin: "50px 0" }} />
    </Grid>
  );
};

export default Checkout;
