import React from "react";
import { Grid } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import Promotional from "./components/homepage/Promotional";
import Product from "./components/homepage/Product";
import Contact from "./components/homepage/Contact";

const Home = () => {
  return (
    <Grid padded>
      <Grid.Row>
        <Promotional />
      </Grid.Row>
      <Grid.Row>
        <Header as="h1">Welcome to Print-Tex!</Header>
      </Grid.Row>
      <Grid.Row>
        <Header as="h3">
          Choose from our wide variety of fine quality fabrics.
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Grid columns={5} doubling stackable padded>
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
          <Grid.Column>
            <Product
              source={"/images/products/5.jpg"}
              productLink={"#"}
              productName={"Cotton"}
              productID={"#99AN"}
            />
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Header as="h1">Contact us</Header>
      </Grid.Row>
      <Grid.Row>
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
