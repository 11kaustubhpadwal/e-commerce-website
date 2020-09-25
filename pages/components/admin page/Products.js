import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table, Message } from "semantic-ui-react";
import ProductDetails from "./ProductDetails";
import ConfirmRemoval from "./ConfirmRemoval";

const Products = ({ content, getProducts, products, removeProduct }) => {
  const { loading, productsList } = products;

  useEffect(() => {
    getProducts();
  }, []);

  if (productsList.length <= 0) {
    return (
      <Message
        style={{ margin: "30px 0" }}
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
          {productsList.map((item) => {
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
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
};

export default Products;
