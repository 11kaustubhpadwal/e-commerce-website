import React from "react";
import { Card, Image } from "semantic-ui-react";

const Contact = ({ source, title, description }) => {
  return (
    <div>
      <Card href="#" style={{ height: "200px" }}>
        <Image src={source} style={{ height: "100px", padding: "10px" }} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Contact;
