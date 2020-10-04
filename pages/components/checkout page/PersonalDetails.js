import React from "react";
import { Button, Input, Form } from "semantic-ui-react";

const PersonalDetails = () => {
  return (
    <Form>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h3>Personal details</h3>
      </Form.Field>
      <Form.Field required>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field required>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <h4>Email address - read only</h4>
      </Form.Field>
    </Form>
  );
};

export default PersonalDetails;
