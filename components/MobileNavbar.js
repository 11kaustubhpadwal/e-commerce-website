import React, { useState } from "react";
import Link from "next/link";
import { Grid, Accordion, Icon } from "semantic-ui-react";
import { Button, Label, Modal } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "./homepage/Cart";

const MobileNavbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const loginUser = () => {
    loginWithRedirect();
    handleClick();
  };

  const logoutUser = () => {
    if (process.env.NODE_ENV !== "development") {
      logout({ returnTo: "https://print-tex.vercel.app/" });
    } else {
      logout({ returnTo: "http://localhost:3000/" });
    }
    handleClick();
  };

  const handleClick = () => {
    if (openMenu === true) {
      setOpenMenu(false);
    } else if (openMenu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  const handleClickLogo = () => {
    if (openMenu === true) {
      setOpenMenu(false);
    }
  };

  return (
    <Grid columns={2} padded>
      <Grid.Column>
        <Link href="/">
          <a>
            <img
              src="/images/logo.svg"
              alt="Logo"
              style={{ width: "3rem" }}
              onClick={handleClickLogo}
            />
          </a>
        </Link>
      </Grid.Column>
      <Grid.Column textAlign="right">
        <Accordion>
          <Accordion.Title active={openMenu}>
            <img
              src="/images/menu.svg"
              alt="Logo"
              style={{ width: "3rem" }}
              onClick={handleClick}
            />
          </Accordion.Title>
          <Accordion.Content active={openMenu}>
            <Grid padded>
              <Grid.Row>
                <Link href="/">
                  <a style={{ marginLeft: "auto" }}>
                    <Button
                      content="Shop"
                      icon="shop"
                      labelPosition="left"
                      color="blue"
                      style={{ letterSpacing: "2px" }}
                      onClick={handleClick}
                    />
                  </a>
                </Link>
              </Grid.Row>
              <Grid.Row>
                <Link href="/about">
                  <a style={{ marginLeft: "auto" }}>
                    <Button
                      content="About"
                      icon="info circle"
                      labelPosition="left"
                      color="blue"
                      style={{ letterSpacing: "2px" }}
                      onClick={handleClick}
                    />
                  </a>
                </Link>
              </Grid.Row>
              <Grid.Row>
                <Modal
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={
                    <Button
                      icon="cart"
                      color="blue"
                      style={{ marginLeft: "auto" }}
                      onClick={handleClick}
                    />
                  }
                >
                  <Cart setOpen={setOpen} />
                </Modal>
                <Label color="black" size="small" attached="top right" circular>
                  0
                </Label>
              </Grid.Row>
              {!isAuthenticated && (
                <Grid.Row>
                  <Button
                    content="Login"
                    icon="user"
                    labelPosition="left"
                    onClick={loginUser}
                    color="grey"
                    style={{ letterSpacing: "2px", marginLeft: "auto" }}
                  />
                </Grid.Row>
              )}
              {isAuthenticated && user.email !== "admin@print-tex.com" && (
                <Grid.Row>
                  <Link href="/my-account">
                    <Button
                      content="My account"
                      icon="user outline"
                      labelPosition="left"
                      color="blue"
                      style={{ letterSpacing: "2px", marginLeft: "auto" }}
                      onClick={handleClick}
                    />
                  </Link>
                </Grid.Row>
              )}
              {isAuthenticated && user.email === "admin@print-tex.com" && (
                <Grid.Row>
                  <Link href="/administrator">
                    <Button
                      content="Administrator"
                      icon="user outline"
                      labelPosition="left"
                      color="blue"
                      style={{ letterSpacing: "2px", marginLeft: "auto" }}
                      onClick={handleClick}
                    />
                  </Link>
                </Grid.Row>
              )}
              {isAuthenticated && (
                <Grid.Row>
                  <Button
                    content="Logout"
                    icon="log out"
                    labelPosition="left"
                    onClick={logoutUser}
                    color="grey"
                    style={{ letterSpacing: "2px", marginLeft: "auto" }}
                    floated="right"
                  />
                </Grid.Row>
              )}
            </Grid>
          </Accordion.Content>
        </Accordion>
      </Grid.Column>
    </Grid>
  );
};

export default MobileNavbar;
