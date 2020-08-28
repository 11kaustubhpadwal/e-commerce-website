import React from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";

const Orders = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row textAlign="center">
          <Table.HeaderCell>Order Date</Table.HeaderCell>
          <Table.HeaderCell>Order Status</Table.HeaderCell>
          <Table.HeaderCell>Order Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row textAlign="center">
          <Table.Cell>19/08/2020</Table.Cell>
          <Table.Cell>
            <Label content="On going" icon="truck" color="blue" />
          </Table.Cell>
          <Table.Cell>
            <Button
              content="Details"
              icon="file text"
              labelPosition="left"
              color="blue"
            />
            <span style={{ padding: "10px" }}> </span>
            <Button
              content="Cancel"
              icon="cancel"
              labelPosition="left"
              color="red"
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row textAlign="center">
          <Table.Cell>08/08/2020</Table.Cell>
          <Table.Cell>
            <Label content="Delivered" icon="checkmark" color="violet" />
          </Table.Cell>
          <Table.Cell>
            <Button
              content="Details"
              icon="file text"
              labelPosition="left"
              color="blue"
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row textAlign="center">
          <Table.Cell>13/08/2020</Table.Cell>
          <Table.Cell>
            <Label content="Cancelled" icon="cancel" color="red" />
          </Table.Cell>
          <Table.Cell>
            <Button
              content="Details"
              icon="file text"
              labelPosition="left"
              color="blue"
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
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

export default Orders;
