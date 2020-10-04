import React from "react";
import { Label, Icon, Form, Checkbox } from "semantic-ui-react";

const ConfirmOrder = () => {
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
