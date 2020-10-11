import React, { useState, useEffect } from "react";
import { Pagination, Label, Table, Message } from "semantic-ui-react";
import OrderDetails from "./OrderDetails";
import ConfirmAction from "./ConfirmAction";

const Orders = ({ content, orders, cancelOrder }) => {
  // Number of pages in the table
  let numberOfPages = Math.ceil(orders.orders.length / 5);

  // Starting index of array to be sliced
  const setEndingIndex = (currentPage) => {
    let index = currentPage * 5;
    return index;
  };

  // Final index of array to be sliced
  const setStartingIndex = (currentPage) => {
    let index = currentPage * 5 - 5;
    return index;
  };

  const [activePage, setActivePage] = useState(1);
  const [activePageItems, setActivePageItems] = useState(
    orders.orders.slice(
      setStartingIndex(activePage),
      setEndingIndex(activePage)
    )
  );

  // Set table items to prevent empty table from being rendered
  useEffect(() => {
    setActivePageItems(
      orders.orders.slice(
        setStartingIndex(activePage),
        setEndingIndex(activePage)
      )
    );
  }, [orders.orders]);

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
    setActivePageItems(
      orders.orders.slice(
        setStartingIndex(activePage),
        setEndingIndex(activePage)
      )
    );
  };

  if (orders.orders.length <= 0) {
    return (
      <Message
        style={{ margin: "15px 0", letterSpacing: "2px", width: "100%" }}
        header="No orders found."
        content="Place an order to manage it from here."
        floating
      />
    );
  } else if (orders.error !== null) {
    return (
      <Message
        style={{ margin: "15px 0", letterSpacing: "2px", width: "100%" }}
        header="An error occured."
        content={orders.error.msg}
        floating
        error
      />
    );
  } else {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row textAlign="center" style={{ letterSpacing: "2px" }}>
            <Table.HeaderCell>Order Date</Table.HeaderCell>
            <Table.HeaderCell>Order Status</Table.HeaderCell>
            <Table.HeaderCell>Order Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body style={{ letterSpacing: "2px" }}>
          {activePageItems.map((item) => {
            return (
              <Table.Row textAlign="center">
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>
                  {item.status === "On going" && (
                    <Label content="On going" icon="truck" color="blue" />
                  )}
                  {item.status === "Cancelled" && (
                    <Label content="Cancelled" icon="cancel" color="red" />
                  )}
                  {item.status === "Delivered" && (
                    <Label
                      content="Delivered"
                      icon="checkmark"
                      color="violet"
                    />
                  )}
                </Table.Cell>
                <Table.Cell>
                  <OrderDetails order={item} orderItems={item.orderItems} />
                  <span style={{ padding: "10px" }}> </span>
                  {item.status === "On going" && (
                    <ConfirmAction
                      content={content}
                      cancelOrder={cancelOrder}
                      orderNumber={item.orderNumber}
                      orders={orders}
                      email={item.email}
                    />
                  )}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6" textAlign="right">
              <Pagination
                boundaryRange={0}
                activePage={activePage}
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                ellipsisItem={null}
                siblingRange={1}
                onPageChange={handlePageChange}
                totalPages={numberOfPages}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
};

export default Orders;
