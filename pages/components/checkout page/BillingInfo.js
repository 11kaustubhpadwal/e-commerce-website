import React, { useState } from "react";
import { Image, Input, Form } from "semantic-ui-react";

const BillingInfo = () => {
  const [cardNumber, setCardNumber] = useState();

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  return (
    <Form>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h3>Billing details</h3>
      </Form.Field>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h4>Payment method - Credit/Debit card</h4>
      </Form.Field>
      <Form.Group>
        <Form.Field style={{ margin: "0" }}>
          {cardNumber !== undefined &&
            cardNumber.toString().startsWith("4") && (
              <Image src="/images/payment/visa.svg" style={{ width: "3rem" }} />
            )}
          {cardNumber === undefined ||
            (cardNumber.toString().startsWith("4") === false && (
              <Image
                src="/images/payment/visa.svg"
                style={{ width: "3rem" }}
                disabled
              />
            ))}
        </Form.Field>
        <Form.Field style={{ margin: "0" }}>
          {cardNumber !== undefined &&
            cardNumber.toString().startsWith("5") && (
              <Image
                src="/images/payment/mastercard.svg"
                style={{ width: "3rem" }}
              />
            )}
          {cardNumber === undefined ||
            (cardNumber.toString().startsWith("5") === false && (
              <Image
                src="/images/payment/mastercard.svg"
                style={{ width: "3rem" }}
                disabled
              />
            ))}
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Form.Field required width={5}>
          <label>Card Number</label>
          <input
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </Form.Field>
        <Form.Field required width={5}>
          <label>Cardholder Name</label>
          <input placeholder="Cardholder Name" />
        </Form.Field>
        <Form.Field required>
          <label>Security Code</label>
          <input placeholder="Security Code" />
        </Form.Field>
      </Form.Group>
      <Form.Field required style={{ marginTop: "20px" }}>
        <label>Card Expiry</label>
      </Form.Field>
      <Form.Group widths={8}>
        <Form.Field required>
          <label>Month</label>
          <Input fluid placeholder="Month" type="number" />
        </Form.Field>
        <Form.Field required>
          <label>Year</label>
          <Input fluid placeholder="Year" type="number" />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default BillingInfo;
