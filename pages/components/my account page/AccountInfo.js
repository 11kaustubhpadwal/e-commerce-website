import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Segment, Icon, Divider } from "semantic-ui-react";
import Orders from "./Orders";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getUserOrders,
  cancelOrder,
} from "../../../redux/actions/orderActions";

const AccountInfo = ({ user, getUserOrders, orders, cancelOrder }) => {
  const { email } = user;

  useEffect(() => {
    getUserOrders(email);
  }, []);

  return (
    <Grid padded stackable doubling container style={{ letterSpacing: "2px" }}>
      <Grid.Row>
        <Icon name="user" color="black" size="big" />
        <span style={{ paddingLeft: "10px" }}>
          <Header as="h1">My account</Header>
        </span>
      </Grid.Row>
      <Grid.Row>
        <Segment raised>
          <Header>
            <Icon name="mail" color="grey" /> Your email address - {user.email}
          </Header>
        </Segment>
      </Grid.Row>
      <Divider style={{ width: "100%" }} />
      <Grid.Row>
        <Icon name="box" color="brown" size="big" />
        <span style={{ paddingLeft: "10px" }}>
          <Header as="h1">My orders</Header>
        </span>
      </Grid.Row>
      <Grid.Row>
        <Orders
          content="You are about to cancel your order!"
          orders={orders}
          cancelOrder={cancelOrder}
        />
      </Grid.Row>
    </Grid>
  );
};

AccountInfo.propTypes = {
  orders: PropTypes.object.isRequired,
  getUserOrders: PropTypes.func.isRequired,
  cancelOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps, { getUserOrders, cancelOrder })(
  AccountInfo
);
