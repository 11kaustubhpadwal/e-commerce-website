import React from "react";
import { Label, Icon, Form, Checkbox } from "semantic-ui-react";

const ConfirmOrder = ({ cartItems }) => {
  // Calculate total cost including shipping
  const calculateTotalCost = () => {
    let total = 0;
    let rates = [];
    let quantity = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (i % 2 === 0) {
        rates.push(cartItems[i].cost);
      }
    }

    for (let i = 0; i < cartItems.length; i++) {
      if (i % 2 !== 0) {
        quantity.push(cartItems[i].quantity);
      }
    }

    for (let i = 0; i < rates.length; i++) {
      total += rates[i] * quantity[i];
    }
  };

  return (
    <Form>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h3>Confirm Order</h3>
      </Form.Field>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h4>
          Order details
          <Label style={{ marginLeft: "20px" }} color="black">
            <Icon name="warning" /> Please check your shopping cart to view the
            order details.
          </Label>
        </h4>
      </Form.Field>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h4>
          Payment method
          <Label style={{ marginLeft: "20px" }} color="black">
            Credit/Debit card
          </Label>
        </h4>
      </Form.Field>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h4>
          Total cost
          <Label style={{ marginLeft: "20px" }} color="black">
            90 PLN
          </Label>
        </h4>
      </Form.Field>
      <Form.Field style={{ margin: "0  0 25px" }} required>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
    </Form>
  );
};

export default ConfirmOrder;
