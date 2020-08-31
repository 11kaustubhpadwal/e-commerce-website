import React from "react";
import { Grid } from "semantic-ui-react";
import { Header, Icon } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import Promotional from "./components/homepage/Promotional";
import Product from "./components/homepage/Product";
import Contact from "./components/homepage/Contact";

const Home = () => {
  return (
    <Grid padded centered>
      <Grid.Row>
        <Promotional />
      </Grid.Row>
      <Grid.Row>
        <Header as="h1" style={{ letterSpacing: "5px" }}>
          <span>
            <Icon name="ellipsis horizontal" style={{ margin: "20px" }} />
            WELCOME TO PRINT-TEX!
            <Icon name="ellipsis horizontal" style={{ margin: "20px" }} />
          </span>
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Header as="h3" style={{ letterSpacing: "2px" }}>
          Choose from our wide variety of fine quality fabrics.
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Grid
          columns={4}
          doubling
          stackable
          padded
          style={{ letterSpacing: "2px" }}
        >
          <Grid.Column>
            <Product
              source={"/images/products/1.jpg"}
              productLink={"/items/abcd"}
              productName={"Jute"}
              productID={"#99AN"}
            />
          </Grid.Column>
          <Grid.Column>
            <Product
              source={"/images/products/2.jpg"}
              productLink={"#"}
              productName={"Jean"}
              productID={"#99AN"}
            />
          </Grid.Column>
          <Grid.Column>
            <Product
              source={"/images/products/3.jpg"}
              productLink={"#"}
              productName={"Polyester"}
              productID={"#99AN"}
            />
          </Grid.Column>
          <Grid.Column>
            <Product
              source={"/images/products/4.jpg"}
              productLink={"#"}
              productName={"Linen"}
              productID={"#99AN"}
            />
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Header as="h1" style={{ letterSpacing: "2px" }}>
          Contact us
        </Header>
      </Grid.Row>
      <Grid.Row style={{ letterSpacing: "2px" }}>
        <Grid columns={3} doubling stackable padded textAlign="center">
          <Grid.Column width={4}>
            <Contact
              source={"/images/contact/address.svg"}
              title={"Address"}
              description={"USTA SHIRIN, 1-1, Almazar, Tashkent, Uzbekistan."}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Contact
              source={"/images/contact/phone.svg"}
              title={"Phone"}
              description={"(+99895) 1991180/2445636 "}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Contact
              source={"/images/contact/mail.svg"}
              title={"Email"}
              description={"info@print-tex.com"}
            />
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Divider />
    </Grid>
  );
};

export default Home;
