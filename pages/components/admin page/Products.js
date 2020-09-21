import React, { useState } from "react";
import { Icon, Label, Menu, Table, Button, Popup } from "semantic-ui-react";
import ProductDetails from "./ProductDetails";
import ConfirmRemoval from "./ConfirmRemoval";

const Products = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

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
        <Table.Row textAlign="center">
          <Table.Cell>9990089</Table.Cell>
          <Table.Cell>Cotton</Table.Cell>
          <Table.Cell>99</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>
            <ProductDetails open={open} setOpen={setOpen} />
            <ConfirmRemoval
              confirm={confirm}
              setConfirm={setConfirm}
              content={content}
            />
          </Table.Cell>
          <Table.Cell>
            <Label content="In stock" icon="check circle" color="blue" />
          </Table.Cell>
        </Table.Row>
        <Table.Row textAlign="center">
          <Table.Cell>9990085</Table.Cell>
          <Table.Cell>Silk</Table.Cell>
          <Table.Cell>75</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>
            <ProductDetails open={open} setOpen={setOpen} />
            <ConfirmRemoval
              confirm={confirm}
              setConfirm={setConfirm}
              content={content}
            />
          </Table.Cell>
          <Table.Cell>
            <Label content="Out of stock" icon="cancel" color="red" />
          </Table.Cell>
        </Table.Row>
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
};

export default Products;
