import React, { useState, useEffect } from "react";
import { Pagination, Label, Table, Message } from "semantic-ui-react";
import ProductDetails from "./ProductDetails";
import ConfirmRemoval from "./ConfirmRemoval";

const Products = ({ content, getProducts, products, removeProduct }) => {
  const { loading, productsList } = products;

  useEffect(() => {
    getProducts();
  }, []);

  // Number of pages in the table
  let numberOfPages = Math.ceil(productsList.length / 5);

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
    productsList.slice(setStartingIndex(activePage), setEndingIndex(activePage))
  );

  // Set table items to prevent empty table from being rendered
  useEffect(() => {
    setActivePageItems(
      productsList.slice(
        setStartingIndex(activePage),
        setEndingIndex(activePage)
      )
    );
  }, [productsList]);

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
    setActivePageItems(
      productsList.slice(
        setStartingIndex(activePage),
        setEndingIndex(activePage)
      )
    );
  };

  if (productsList.length <= 0) {
    return (
      <Message
        style={{ margin: "30px 0", letterSpacing: "2px" }}
        header="No products found."
        content="Add a new products to manage them from here."
      />
    );
  } else {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row textAlign="center" style={{ letterSpacing: "2px" }}>
            <Table.HeaderCell>Product Id</Table.HeaderCell>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Cost (PLN)</Table.HeaderCell>
            <Table.HeaderCell>Total Quantity (sheets)</Table.HeaderCell>
            <Table.HeaderCell>Product Actions</Table.HeaderCell>
            <Table.HeaderCell>Availability</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body style={{ letterSpacing: "2px" }}>
          {activePageItems.map((item) => {
            return (
              <Table.Row textAlign="center">
                <Table.Cell>{item.productID}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.cost}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell>
                  <ProductDetails item={item} />
                  <ConfirmRemoval
                    content={content}
                    removeProduct={removeProduct}
                    productID={item.productID}
                    imageName={item.name}
                    loading={loading}
                  />
                </Table.Cell>
                <Table.Cell>
                  {item.quantity <= 0 && (
                    <Label content="Out of stock" icon="cancel" color="red" />
                  )}
                  {item.quantity > 0 && (
                    <Label
                      content="In stock"
                      icon="check circle"
                      color="blue"
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

export default Products;
