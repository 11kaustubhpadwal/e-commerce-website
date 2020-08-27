import React from "react";
import { Header } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

const Information = () => {
  return (
    <div>
      <Header as="h1" style={{ marginBottom: "40px" }}>
        About us
      </Header>
      <Image src="/images/about us/1.jpg" size="large" floated="left" rounded />
      <Header as="p">
        Welcome to Print-Tex, your number one source for buying textiles in
        bulk. We're dedicated to providing you the finest quality fabrics, with
        an emphasis on quality, service and value.
      </Header>
      <Header as="p">
        Founded in 1990 by John Doe, Print-Tex has come a long way from its
        beginnings in Uzbekistan. When John first started out, his passion for
        selling textiles all around Europe drove him to start his own business.
      </Header>
      <Header as="p">
        We hope you enjoy our products as much as we enjoy offering them to you.
        If you have any questions or comments, please don't hesitate to contact
        us.
      </Header>
      <Header as="p">Sincerely, John Doe</Header>
    </div>
  );
};

export default Information;
