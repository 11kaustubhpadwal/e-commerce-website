import React, { useState, useEffect } from "react";
import { Grid, Button, Header, Divider } from "semantic-ui-react";
import { Icon, Step, Message } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import PersonalDetails from "./components/checkout page/PersonalDetails";
import ShippingInfo from "./components/checkout page/ShippingInfo";
import BillingInfo from "./components/checkout page/BillingInfo";
import ConfirmOrder from "./components/checkout page/ConfirmOrder";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setFirstName,
  setLastName,
  setDeliveryAddress,
  setDeliveryMethod,
  setCardHolderName,
  setCardNumber,
  setExpiryMonth,
  setExpiryYear,
  setSecurityCode,
  setTotalCost,
  setTCAgreement,
  clearCheckout,
} from "../redux/actions/checkoutActions";
import { clearCart } from "../redux/actions/cartActions";
import {
  checkStep1Details,
  checkStep2Details,
  checkStep3Details,
} from "../redux/actions/formValidationActions";
import { placeOrder } from "../redux/actions/orderActions";

const Checkout = ({
  cart,
  setFirstName,
  setLastName,
  setDeliveryAddress,
  setDeliveryMethod,
  setCardHolderName,
  setCardNumber,
  setExpiryMonth,
  setExpiryYear,
  setSecurityCode,
  setTotalCost,
  setTCAgreement,
  clearCheckout,
  clearCart,
  checkout,
  checkStep1Details,
  checkStep2Details,
  checkStep3Details,
  validator,
  placeOrder,
}) => {
  const steps = ["Shipping", "Billing", "ConfirmOrder"];

  const [activeStep, setActiveStep] = useState(steps[0]);

  const { isAuthenticated, user, isLoading } = useAuth0();

  const { cartItems } = cart;
  const { error, loading } = validator;

  // Go to next step
  const handleNext = () => {
    if (error === null) {
      setActiveStep(steps[steps.indexOf(activeStep) + 1]);

      checkStep2Details(checkout);
    }

    if (error === null && activeStep === "ConfirmOrder") {
      checkStep3Details(checkout);
    }
  };

  // Go to previous step
  const handleBack = () => {
    setActiveStep(steps[steps.indexOf(activeStep) - 1]);
  };

  // Place order
  const handlePlaceOrder = () => {
    if (error === null) {
      const {
        firstName,
        lastName,
        deliveryAddress,
        deliveryMethod,
        totalCost,
      } = checkout;

      let orderItems = cartItems;
      let paymentMethod = "Credit/Debit card";
      let email = user.email;

      let data = {
        firstName,
        lastName,
        deliveryAddress,
        deliveryMethod,
        orderItems,
        paymentMethod,
        totalCost,
        email,
      };

      placeOrder(data);

      window.location.pathname = "/my-account";

      clearCheckout();

      clearCart();
    }
  };

  // Validation check
  useEffect(() => {
    if (activeStep === "Shipping") {
      checkStep1Details(checkout);
    } else if (activeStep === "Billing") {
      checkStep2Details(checkout);
    } else if (activeStep === "ConfirmOrder") {
      checkStep3Details(checkout);
    } else {
      return;
    }
  }, [checkout]);

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
            {error && (
              <Message
                warning
                style={{
                  width: "100%",
                  margin: "0 10px 25px",
                  letterSpacing: "2px",
                }}
                icon="warning"
                header={error}
              ></Message>
            )}
            <Grid.Column>
              <PersonalDetails
                user={user}
                setFirstName={setFirstName}
                setLastName={setLastName}
                checkout={checkout}
              />
            </Grid.Column>
            <Grid.Column>
              <ShippingInfo
                setDeliveryAddress={setDeliveryAddress}
                setDeliveryMethod={setDeliveryMethod}
                checkout={checkout}
              />
            </Grid.Column>
          </Grid.Row>
        )}
        {activeStep === "Billing" && (
          <Grid.Row columns={1}>
            {error && (
              <Message
                warning
                style={{
                  width: "100%",
                  margin: "0 10px 25px",
                  letterSpacing: "2px",
                }}
                icon="warning"
                header={error}
              ></Message>
            )}
            <Grid.Column>
              <BillingInfo
                setCardHolderName={setCardHolderName}
                setCardNumber={setCardNumber}
                setExpiryMonth={setExpiryMonth}
                setExpiryYear={setExpiryYear}
                setSecurityCode={setSecurityCode}
              />
            </Grid.Column>
          </Grid.Row>
        )}
        {activeStep === "ConfirmOrder" && (
          <Grid.Row columns={1}>
            {error && (
              <Message
                warning
                style={{
                  width: "100%",
                  margin: "0 10px 25px",
                  letterSpacing: "2px",
                }}
                icon="warning"
                header={error}
              ></Message>
            )}
            <Grid.Column>
              <ConfirmOrder
                cartItems={cartItems}
                checkout={checkout}
                setTotalCost={setTotalCost}
                setTCAgreement={setTCAgreement}
              />
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
            {loading && (
              <Button
                loading
                content="Next"
                icon="right arrow"
                labelPosition="right"
                color="blue"
                onClick={handleNext}
              />
            )}
            {!loading && error === null && (
              <Button
                content="Next"
                icon="right arrow"
                labelPosition="right"
                color="blue"
                onClick={handleNext}
              />
            )}
            {!loading && error !== null && (
              <Button
                disabled
                content="Next"
                icon="right arrow"
                labelPosition="right"
                color="blue"
                onClick={handleNext}
              />
            )}
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
            {!loading && error === null && (
              <Button
                content="Place Order & Pay"
                icon="check"
                labelPosition="right"
                color="blue"
                onClick={handlePlaceOrder}
              />
            )}
            {!loading && error !== null && (
              <Button
                disabled
                content="Place Order & Pay"
                icon="check"
                labelPosition="right"
                color="blue"
                onClick={handlePlaceOrder}
              />
            )}
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
  checkout: PropTypes.object.isRequired,
  validator: PropTypes.object.isRequired,
  orders: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  checkout: state.checkout,
  validator: state.validator,
  orders: state.orders,
});

export default connect(mapStateToProps, {
  setFirstName,
  setLastName,
  setDeliveryAddress,
  setDeliveryMethod,
  setCardHolderName,
  setCardNumber,
  setExpiryMonth,
  setExpiryYear,
  setSecurityCode,
  setTotalCost,
  setTCAgreement,
  clearCheckout,
  clearCart,
  checkStep1Details,
  checkStep2Details,
  checkStep3Details,
  placeOrder,
})(Checkout);
