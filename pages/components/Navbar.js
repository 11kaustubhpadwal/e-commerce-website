import React from "react";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const loginUser = () => {
    loginWithRedirect();
  };

  const logoutUser = () => {
    logout({ returnTo: "http://localhost:3000/" });
  };

  return (
    <Grid columns={6} padded stackable verticalAlign="middle">
      <Grid.Column width={1}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="Logo" style={{ width: "3rem" }} />
          </a>
        </Link>
      </Grid.Column>
      <Grid.Column width={1}>
        <Link href="/">
          <a>Shop</a>
        </Link>
      </Grid.Column>
      {!isAuthenticated && (
        <Grid.Column width={12}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column width={10}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Grid.Column>
      )}
      <Grid.Column floated="right" width={1}>
        <Button icon="cart" />
      </Grid.Column>
      {!isAuthenticated && (
        <Grid.Column floated="right" width={1}>
          <Link href="#">
            <a onClick={loginUser}>Login</a>
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column floated="right" width={2} textAlign="center">
          <Link href="/my-account">
            <a>My Account</a>
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column floated="right" width={1}>
          <Link href="#">
            <a onClick={logoutUser}>Logout</a>
          </Link>
        </Grid.Column>
      )}
    </Grid>
  );
};

export default Navbar;
