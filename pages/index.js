import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { Header, Icon } from "semantic-ui-react";
import { Divider, Message, Dimmer, Loader } from "semantic-ui-react";
import Promotional from "../components/homepage/Promotional";
import Product from "../components/homepage/Product";
import Contact from "../components/homepage/Contact";
import PageInfo from "../components/PageInfo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductsGuest } from "../redux/actions/guestActions";

const Home = ({ getProductsGuest, guest }) => {
  const { loading, error, productsList } = guest;

  // Final array of items per row to be displayed
  const [rowItems, setRowItems] = useState([]);

  useEffect(() => {
    getProductsGuest();
  }, []);

  // Number of rows
  let numberOfRows = Math.ceil(productsList.length / 4);

  // Starting index of array to be sliced
  const setEndingIndex = (currentRow) => {
    let index = currentRow * 4;
    return index;
  };

  // Final index of array to be sliced
  const setStartingIndex = (currentRow) => {
    let index = currentRow * 4 - 4;
    return index;
  };

  // Array of rows
  let itemsPerRow = [];

  // Split items into rows of 4 items per row
  useEffect(() => {
    for (let i = 1; i <= numberOfRows; i++) {
      itemsPerRow.push(
        productsList.slice(setStartingIndex(i), setEndingIndex(i))
      );
    }

    setRowItems(itemsPerRow);
  }, [productsList]);

  if (loading) {
    return (
      <Dimmer active>
        <PageInfo />
        <Loader content="Loading ... Please wait ..." />
      </Dimmer>
    );
  } else {
    return (
      <Grid padded centered>
        <PageInfo />
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
        {error && (
          <Message
            style={{
              margin: "30px 0",
              letterSpacing: "2px",
              textAlign: "left",
            }}
            error
            icon="cancel"
            header={error}
          />
        )}
        {rowItems.length <= 0 && (
          <Message
            style={{
              margin: "30px 0",
              letterSpacing: "2px",
            }}
            info
            header={"Website is still under construction ..."}
          />
        )}
        {rowItems.map((row) => {
          return (
            <Grid.Row>
              <Grid
                columns={row.length}
                doubling
                stackable
                padded
                style={{ letterSpacing: "2px" }}
              >
                {row.map((item) => {
                  return (
                    <Grid.Column>
                      <Product
                        source={item.imageUrl}
                        productLink={`/items/${item.productID.slice(1, 5)}`}
                        productName={item.name}
                        productID={item.productID}
                      />
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Grid.Row>
          );
        })}
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
  }
};

Home.propTypes = {
  guest: PropTypes.object.isRequired,
  getProductsGuest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guest: state.guest,
});

export default connect(mapStateToProps, {
  getProductsGuest,
})(Home);
