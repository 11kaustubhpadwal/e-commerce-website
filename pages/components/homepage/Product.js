import React from "react";
import { Card, Image } from "semantic-ui-react";

const Product = ({ source, productLink, productName, productID }) => {
  return (
    <Card href={productLink} style={{ height: "235px" }}>
      <Image src={source} style={{ height: "175px", objectFit: "cover" }} />
      <Card.Content>
        <Card.Header>{productName}</Card.Header>
        <Card.Meta>{productID}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default Product;
