import React from "react";
import { Card, Image, Icon, Segment } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

const Item = () => {
  return (
    <Grid padded stackable doubling container style={{ letterSpacing: "2px" }}>
      <Grid.Row centered style={{ marginBottom: "3rem" }}>
        <Header as="h2">
          <Icon name="info circle" color="black" />
          Product information
        </Header>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Card style={{ height: "250px", width: "70%" }} centered>
            <Image
              src="/images/products/1.jpg"
              style={{ height: "185px", objectFit: "cover" }}
            />
            <Card.Content>
              <Card.Header>Cotton</Card.Header>
              <Card.Meta>
                <span className="date">#99AN</span>
              </Card.Meta>
            </Card.Content>
          </Card>
          <Grid columns={2} centered padded doubling stackable>
            <Grid.Column width={6}>
              <Button.Group fluid color="blue">
                <Button icon="minus"></Button>
                <Button style={{ letterSpacing: "2px" }}>Quantity</Button>
                <Button icon="plus"></Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button
                content="Add to cart"
                icon="cart"
                labelPosition="left"
                fluid
                color="blue"
                style={{ letterSpacing: "2px" }}
              />
            </Grid.Column>
          </Grid>
          <p style={{ textAlign: "center", padding: "20px" }}>
            <Icon name="info circle" color="grey" />
            Note : Quantity indicates number of sheets of dimensions 10m X 10m.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Card centered fluid>
            <Card.Content header="Description" />
            <Card.Content>
              <Card.Description style={{ lineHeight: "1.6" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Description>
              <Card.Description style={{ lineHeight: "1.6" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid>
  );
};

export default Item;
