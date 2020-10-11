import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Message } from "semantic-ui-react";
import AdminInfo from "./components/admin page/AdminInfo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addProduct,
  getProducts,
  removeProduct,
} from "../redux/actions/productsActions";
import { cancelOrder, getAllOrders } from "../redux/actions/orderActions";

const Administrator = ({
  products,
  addProduct,
  getProducts,
  removeProduct,
  orders,
  cancelOrder,
  getAllOrders,
}) => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  useEffect(() => {
    getAllOrders();
  }, [orders.orders.length]);

  if (isAuthenticated && !isLoading && user.email !== "admin@print-tex.com") {
    window.location.pathname = "/my-account";
  } else if (isLoading) {
    return (
      <div>
        <img
          src="/images/loading-dots.gif"
          style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}
        ></img>
        <h2
          style={{
            letterSpacing: "2px",
            textAlign: "center",
            width: "100%",
            marginBottom: "300px",
          }}
        >
          Loading
        </h2>
      </div>
    );
  } else if (
    isAuthenticated &&
    !isLoading &&
    user.email === "admin@print-tex.com"
  ) {
    return (
      <AdminInfo
        products={products}
        addProduct={addProduct}
        getProducts={getProducts}
        removeProduct={removeProduct}
        orders={orders}
        cancelOrder={cancelOrder}
      />
    );
  } else {
    return (
      <Grid
        container
        padded
        doubling
        stackable
        style={{ letterSpacing: "2px" }}
      >
        <Message
          warning
          style={{ width: "100%" }}
          icon="warning sign"
          header="Please login!"
          content="Click the login button in the top right corner and try again."
        ></Message>
      </Grid>
    );
  }
};

Administrator.propTypes = {
  products: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired,
  cancelOrder: PropTypes.func.isRequired,
  getAllOrders: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
  orders: state.orders,
});

export default connect(mapStateToProps, {
  addProduct,
  getProducts,
  removeProduct,
  cancelOrder,
  getAllOrders,
})(Administrator);
