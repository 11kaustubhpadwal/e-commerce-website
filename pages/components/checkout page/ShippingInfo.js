import React, { useState } from "react";
import { Checkbox, Form } from "semantic-ui-react";

const ShippingInfo = ({ checkout, setDeliveryAddress, setDeliveryMethod }) => {
  const { deliveryAddress, deliveryMethod } = checkout;

  const [stdDelivery, setStdDelivery] = useState(false);
  const [expDelivery, setExpDelivery] = useState(false);

  const handleDeliveryAddressChange = (e) => {
    setDeliveryAddress(e);
  };

  const handleStdDelivery = () => {
    if (!stdDelivery && !expDelivery) {
      setStdDelivery(true);
      setDeliveryMethod("Standard");
    } else {
      setStdDelivery(false);
      if (deliveryMethod === "Standard") {
        setDeliveryMethod(null);
      }
    }
  };

  const handleExpDelivery = () => {
    if (!expDelivery && !stdDelivery) {
      setExpDelivery(true);
      setDeliveryMethod("Express");
    } else {
      setExpDelivery(false);
      if (deliveryMethod === "Express") {
        setDeliveryMethod(null);
      }
    }
  };

  return (
    <Form>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h3>Shipping details</h3>
      </Form.Field>
      <Form.Field required>
        <label>Delivery address</label>
        <textarea
          rows={5}
          placeholder="Delivery address"
          onChange={handleDeliveryAddressChange}
          value={deliveryAddress}
        />
      </Form.Field>
      <Form.Field required>
        <label>Delivery method</label>
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Standard - 10 PLN (Delivered in 6-7 business days.)"
          onChange={handleStdDelivery}
          checked={stdDelivery}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Express - 25 PLN (Delivered in 2-3 business days.)"
          onChange={handleExpDelivery}
          checked={expDelivery}
        />
      </Form.Field>
    </Form>
  );
};

export default ShippingInfo;
