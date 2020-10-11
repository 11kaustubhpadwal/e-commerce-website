import React, { useState } from "react";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import { Button, Label, Modal } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "./homepage/Cart";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

const Navbar = ({ cart, removeFromCart }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [open, setOpen] = useState(false);

  const loginUser = () => {
    loginWithRedirect();
  };

  const logoutUser = () => {
    logout({ returnTo: "http://localhost:3000/" });
  };

  const { cartItems } = cart;

  return (
    <Grid columns={6} padded stackable verticalAlign="middle">
      <Grid.Column width={1}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="Logo" style={{ width: "3rem" }} />
          </a>
        </Link>
      </Grid.Column>
      <Grid.Column width={2}>
        <Link href="/">
          <a>
            <Button
              content="Shop"
              icon="shop"
              labelPosition="left"
              color="blue"
              style={{ letterSpacing: "2px" }}
            />
          </a>
        </Link>
      </Grid.Column>
      {!isAuthenticated && (
        <Grid.Column width={10}>
          <Link href="/about">
            <a>
              <Button
                content="About"
                icon="info circle"
                labelPosition="left"
                color="blue"
                style={{ letterSpacing: "2px" }}
              />
            </a>
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column width={6}>
          <Link href="/about">
            <a>
              <Button
                content="About"
                icon="info circle"
                labelPosition="left"
                color="blue"
                style={{ letterSpacing: "2px" }}
              />
            </a>
          </Link>
        </Grid.Column>
      )}
      <Grid.Column floated="right" width={1}>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button icon="cart" color="blue" />}
        >
          <Cart
            setOpen={setOpen}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        </Modal>
        <Label color="black" size="medium" attached="top right" circular>
          {cartItems.length > 0 ? cartItems.length - cartItems.length / 2 : 0}
        </Label>
      </Grid.Column>
      {!isAuthenticated && (
        <Grid.Column floated="right" width={2}>
          <Button
            content="Login"
            icon="user"
            labelPosition="left"
            onClick={loginUser}
            color="grey"
            style={{ letterSpacing: "2px" }}
          />
        </Grid.Column>
      )}
      {isAuthenticated && user.email !== "admin@print-tex.com" && (
        <Grid.Column floated="right" width={3} textAlign="center">
          <Link href="/my-account">
            <Button
              content="My account"
              icon="user outline"
              labelPosition="left"
              color="blue"
              style={{ letterSpacing: "2px" }}
            />
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && user.email === "admin@print-tex.com" && (
        <Grid.Column floated="right" width={3} textAlign="center">
          <Link href="/administrator">
            <Button
              content="Administrator"
              icon="user outline"
              labelPosition="left"
              color="blue"
              style={{ letterSpacing: "2px" }}
            />
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column floated="right" width={3}>
          <Button
            content="Logout"
            icon="log out"
            labelPosition="left"
            onClick={logoutUser}
            color="grey"
            style={{ letterSpacing: "2px" }}
            floated="right"
          />
        </Grid.Column>
      )}
    </Grid>
  );
};

Navbar.propTypes = {
  cart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart })(Navbar);
