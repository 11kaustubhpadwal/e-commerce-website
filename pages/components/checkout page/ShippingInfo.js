import React from "react";
import { Checkbox, Form } from "semantic-ui-react";

const ShippingInfo = () => {
  return (
    <Form>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h3>Shipping details</h3>
      </Form.Field>
      <Form.Field required>
        <label>Delivery address</label>
        <textarea rows={5} placeholder="Delivery address" />
      </Form.Field>
      <Form.Field required>
        <label>Delivery method</label>
      </Form.Field>
      <Form.Field>
        <Checkbox label="Standard - 10 PLN (Delivered in 6-7 business days.)" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="Express - 25 PLN (Delivered in 2-3 business days.)" />
      </Form.Field>
    </Form>
  );
};

export default ShippingInfo;
