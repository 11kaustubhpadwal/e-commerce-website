import React, { useState } from "react";
import { Grid, Button, Header, Divider } from "semantic-ui-react";
import { Icon, Step, Message } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import PersonalDetails from "./components/checkout page/PersonalDetails";
import ShippingInfo from "./components/checkout page/ShippingInfo";
import BillingInfo from "./components/checkout page/BillingInfo";
import ConfirmOrder from "./components/checkout page/ConfirmOrder";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Checkout = ({ cart }) => {
  const steps = ["Shipping", "Billing", "ConfirmOrder"];

  const [activeStep, setActiveStep] = useState(steps[0]);

  const { isAuthenticated, user, isLoading } = useAuth0();

  const { cartItems } = cart;

  // Go to next step
  const handleNext = () => {
    setActiveStep(steps[steps.indexOf(activeStep) + 1]);
  };

  // Go to previous step
  const handleBack = () => {
    setActiveStep(steps[steps.indexOf(activeStep) - 1]);
  };

  // Place order
  const handlePlaceOrder = () => {
    window.location.pathname = "/my-account";
  };

  if (
    isAuthenticated &&
    !isLoading &&
    user.email !== "admin@print-tex.com" &&
    cartItems.length <= 0
  ) {
    return (
      <Grid
        container
        padded
        doubling
        stackable
        style={{ letterSpacing: "2px" }}
      >
        <Message
          info
          style={{ width: "100%" }}
          icon="info"
          header="Your shopping cart is empty!"
          content="Please add some products to your shopping cart and then try to checkout."
        ></Message>
      </Grid>
    );
  } else if (
    isAuthenticated &&
    !isLoading &&
    user.email !== "admin@print-tex.com"
  ) {
    return (
      <Grid container padded>
        <Grid.Row style={{ letterSpacing: "2px" }}>
          <Header as="h1">Checkout</Header>
        </Grid.Row>
        <Divider />
        {activeStep === "Shipping" && (
          <Grid.Row columns={2}>
            <Grid.Column>
              <PersonalDetails user={user} />
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
            {activeStep !== "Shipping" && (
              <Button
                style={{ margin: "0 20px" }}
                content="Back"
                icon="left arrow"
                labelPosition="left"
                color="black"
                onClick={handleBack}
              />
            )}
            <Button
              content="Next"
              icon="right arrow"
              labelPosition="right"
              color="blue"
              onClick={handleNext}
            />
          </Grid.Row>
        )}
        {activeStep === "ConfirmOrder" && (
          <Grid.Row centered style={{ margin: "20px 0" }}>
            {activeStep !== "Shipping" && (
              <Button
                style={{ margin: "0 20px" }}
                content="Back"
                icon="left arrow"
                labelPosition="left"
                color="black"
                onClick={handleBack}
              />
            )}
            <Button
              content="Place Order & Pay"
              icon="check"
              labelPosition="right"
              color="blue"
              onClick={handlePlaceOrder}
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
        <Divider style={{ margin: "50px 20px 0" }} />
      </Grid>
    );
  } else if (isLoading) {
    return (
      <div>
        <img
          src="/images/loading-dots.gif"
          style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}
        ></img>
        <h2
          style={{
            letterSpacing: "2px",
            textAlign: "center",
            width: "100%",
            marginBottom: "300px",
          }}
        >
          Loading
        </h2>
      </div>
    );
  } else if (
    isAuthenticated &&
    !isLoading &&
    user.email === "admin@print-tex.com"
  ) {
    window.location.pathname = "/administrator";
  } else {
    return (
      <Grid
        container
        padded
        doubling
        stackable
        style={{ letterSpacing: "2px" }}
      >
        <Message
          warning
          style={{ width: "100%" }}
          icon="warning sign"
          header="Please login!"
          content="Click the login button in the top right corner and try again."
        ></Message>
      </Grid>
    );
  }
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Checkout);
