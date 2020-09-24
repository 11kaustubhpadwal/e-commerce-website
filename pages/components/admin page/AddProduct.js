import React, { useState } from "react";
import { Grid, Form, Button } from "semantic-ui-react";

const AddProduct = ({ setOpen, addProduct, products }) => {
  const { loading } = products;

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(1);
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");

  const clearForm = () => {
    setName("");
    setQuantity(1);
    setCost(1);
    setDescription("");
    setProductImage("");
  };

  const getImage = (e) => {
    let image = e.target.files[0];

    setProductImage(image);
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(loading);

    const formDataText = { name, quantity, cost, description };

    addProduct(formDataText, productImage);

    clearForm();
  };

  return (
    <Form>
      <Grid padded style={{ letterSpacing: "2px" }}>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <Form.Group>
              <Form.Field required>
                <label>Product Name</label>
                <input
                  placeholder="e.g. Cotton"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </Form.Field>
              <Form.Field required>
                <label>Product Quantity</label>
                <input
                  placeholder="e.g. 12"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  defaultValue={quantity}
                  value={quantity}
                />
              </Form.Field>
              <Form.Field required>
                <label>Product Cost (PLN)</label>
                <input
                  placeholder="e.g. 34"
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                  defaultValue={cost}
                  value={cost}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field required>
              <label>Product Description </label>
              <textarea
                placeholder="e.g. Best quality Silk from Uzbekistan."
                rows="4"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column width={6}>
            <Form.Field required>
              <label>Product Image</label>
            </Form.Field>
            <Form.Field required>
              <input id="image-upload" type="file" onChange={getImage} />
            </Form.Field>
            {!loading && (
              <Button
                fluid
                content="Cancel"
                icon="cancel"
                labelPosition="left"
                color="red"
                style={{ letterSpacing: "2px", margin: "20px 0" }}
                onClick={() => setOpen(false)}
              />
            )}
            {!loading && (
              <Button
                fluid
                content="Save"
                icon="save"
                labelPosition="left"
                color="blue"
                style={{ letterSpacing: "2px" }}
                onClick={submitForm}
              />
            )}
            {loading && (
              <Button
                disabled
                fluid
                content="Cancel"
                icon="cancel"
                labelPosition="left"
                color="red"
                style={{ letterSpacing: "2px", margin: "20px 0" }}
                onClick={() => setOpen(false)}
              />
            )}
            {loading && (
              <Button
                loading
                fluid
                content="Save"
                icon="save"
                labelPosition="left"
                color="blue"
                style={{ letterSpacing: "2px" }}
                onClick={submitForm}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default AddProduct;
