import React from "react";
import { Card, Image } from "semantic-ui-react";

const Contact = ({ source, title, description, href }) => {
  return (
    <div>
      <Card href={href} style={{ height: "240px" }}>
        <Image src={source} style={{ height: "100px", padding: "10px" }} />
        <Card.Content>
          <Card.Header style={{ marginTop: "5px", marginBottom: "20px" }}>
            {title}
          </Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Contact;
