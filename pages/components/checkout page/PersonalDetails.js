import React from "react";
import { Form, Label } from "semantic-ui-react";

const PersonalDetails = ({ user, setFirstName, setLastName, checkout }) => {
  const { firstName, lastName } = checkout;

  const handleFirstNameChange = (e) => {
    setFirstName(e);
  };

  const handleLastNameChange = (e) => {
    setLastName(e);
  };

  return (
    <Form>
      <Form.Field style={{ margin: "0  0 25px" }}>
        <h3>Personal details</h3>
      </Form.Field>
      <Form.Field required>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={handleFirstNameChange}
          value={firstName}
        />
      </Form.Field>
      <Form.Field required>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={handleLastNameChange}
          value={lastName}
        />
      </Form.Field>
      <Form.Field>
        <h4>
          Email address
          <Label color="black" style={{ marginLeft: "10px" }}>
            {user.email}
          </Label>
        </h4>
      </Form.Field>
    </Form>
  );
};

export default PersonalDetails;
