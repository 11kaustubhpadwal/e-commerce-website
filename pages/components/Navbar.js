import React from "react";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import { Button, Label } from "semantic-ui-react";
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
      <Grid.Column width={2}>
        <Link href="/">
          <a>
            <Button
              content="Shop"
              icon="shop"
              labelPosition="left"
              color="blue"
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
              />
            </a>
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column width={7}>
          <Link href="/about">
            <a>
              <Button
                content="About"
                icon="info circle"
                labelPosition="left"
                color="blue"
              />
            </a>
          </Link>
        </Grid.Column>
      )}
      <Grid.Column floated="right" width={1}>
        <Button icon="cart" color="blue" />
        <Label color="black" size="medium" attached="top right" circular>
          0
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
          />
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column floated="right" width={3} textAlign="center">
          <Link href="/my-account">
            <Button
              content="My account"
              icon="user outline"
              labelPosition="left"
              color="blue"
            />
          </Link>
        </Grid.Column>
      )}
      {isAuthenticated && (
        <Grid.Column floated="right" width={2}>
          <Button
            content="Logout"
            icon="log out"
            labelPosition="left"
            onClick={logoutUser}
            color="grey"
          />
        </Grid.Column>
      )}
    </Grid>
  );
};

export default Navbar;
