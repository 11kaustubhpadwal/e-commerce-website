import React from "react";
import { Grid, Form } from "semantic-ui-react";

const AddProduct = () => {
  return (
    <Grid padded style={{ letterSpacing: "2px" }}>
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <Form>
            <Form.Group>
              <Form.Field required>
                <label>Product Name</label>
                <input placeholder="e.g. Cotton" />
              </Form.Field>
              <Form.Field required>
                <label>Product Quantity</label>
                <input placeholder="e.g. 12" />
              </Form.Field>
              <Form.Field required>
                <label>Product Cost (PLN)</label>
                <input placeholder="e.g. 34" />
              </Form.Field>
            </Form.Group>
            <Form.Field required>
              <label>Product Description </label>
              <textarea
                placeholder="e.g. Best quality Silk from Uzbekistan."
                rows="4"
              />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={6}>
          <Form>
            <Form.Field required>
              <label>Product Image</label>
            </Form.Field>
            <Form.Field required>
              <input id="image-upload" type="file" />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddProduct;
