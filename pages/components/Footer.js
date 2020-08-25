import React from "react";
import { Header } from "semantic-ui-react";

const Footer = () => {
  return (
    <div
      style={{
        marginBottom: "30px",
        marginTop: "25px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Header as="h4">All rights reserved. Copyright 2020.</Header>
    </div>
  );
};

export default Footer;
