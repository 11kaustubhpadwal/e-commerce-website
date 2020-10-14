import React, { useEffect, useState, Fragment } from "react";
import { Card, Image, Icon, Message } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductGuest } from "../../redux/actions/guestActions";
import { addToCart } from "../../redux/actions/cartActions";
import PageInfo from "../../components/PageInfo";

const Item = ({ getProductGuest, guest, addToCart, cart }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getProductGuest(id);
  }, [id]);

  const { error, product } = guest;
  const { loading } = cart;

  // Product quantity
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (error) {
    return (
      <Fragment>
        <PageInfo />
        <Message error icon="cancel" header={error.msg} />
      </Fragment>
    );
  } else {
    return (
      <Grid
        padded
        stackable
        doubling
        container
        style={{ letterSpacing: "2px" }}
      >
        <PageInfo />
        <Grid.Row centered style={{ marginBottom: "3rem" }}>
          <Header as="h2">
            <Icon name="info circle" color="black" />
            Product information
          </Header>
        </Grid.Row>
        {product !== null && (
          <Grid.Row columns={2}>
            <Grid.Column>
              <Card style={{ height: "250px", width: "70%" }} centered>
                <Image
                  src={`/images/products/${product.name}.jpg`}
                  style={{ height: "185px", objectFit: "cover" }}
                />
                <Card.Content>
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">{product.productID}</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Grid columns={2} centered padded doubling stackable>
                <Grid.Column width={6}>
                  <Button.Group fluid color="blue">
                    {loading && (
                      <Button
                        disabled
                        icon="minus"
                        onClick={decreaseQuantity}
                      ></Button>
                    )}
                    {!loading && (
                      <Button icon="minus" onClick={decreaseQuantity}></Button>
                    )}
                    {quantity <= 1 && (
                      <Button style={{ letterSpacing: "2px" }}>Quantity</Button>
                    )}
                    {quantity > 1 && (
                      <Button style={{ letterSpacing: "2px" }}>
                        {quantity}
                      </Button>
                    )}
                    {loading && (
                      <Button
                        disabled
                        icon="plus"
                        onClick={increaseQuantity}
                      ></Button>
                    )}
                    {!loading && (
                      <Button icon="plus" onClick={increaseQuantity}></Button>
                    )}
                  </Button.Group>
                </Grid.Column>
                <Grid.Column width={6}>
                  {loading && (
                    <Button
                      loading
                      content="Add to cart"
                      icon="cart"
                      labelPosition="left"
                      fluid
                      color="blue"
                      style={{ letterSpacing: "2px" }}
                      onClick={handleAddToCart}
                    />
                  )}
                  {!loading && (
                    <Button
                      content="Add to cart"
                      icon="cart"
                      labelPosition="left"
                      fluid
                      color="blue"
                      style={{ letterSpacing: "2px" }}
                      onClick={handleAddToCart}
                    />
                  )}
                </Grid.Column>
              </Grid>
              <p style={{ textAlign: "center", padding: "20px" }}>
                <Icon name="info circle" color="grey" />
                Note : Quantity indicates number of sheets of dimensions 10m X
                10m.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Card centered fluid>
                <Card.Content header="Description" />
                <Card.Content>
                  <Card.Description style={{ lineHeight: "1.6" }}>
                    {product.description}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        )}
        <Divider />
      </Grid>
    );
  }
};

Item.propTypes = {
  guest: PropTypes.object.isRequired,
  getProductGuest: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guest: state.guest,
  cart: state.cart,
});

export default connect(mapStateToProps, {
  getProductGuest,
  addToCart,
})(Item);
