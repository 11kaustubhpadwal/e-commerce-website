import React from "react";
import Link from "next/link";
import { Grid } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Grid columns={5} padded stackable verticalAlign="middle">
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
      <Grid.Column width={12}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Grid.Column>
      <Grid.Column floated="right" width={1}>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </Grid.Column>
      <Grid.Column floated="right" width={1}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Grid.Column>
    </Grid>
  );
};

export default Navbar;
