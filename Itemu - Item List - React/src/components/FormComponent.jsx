import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button, Form, FloatingLabel } from "react-bootstrap";

const FormComponent = ({
  name,
  description,
  price,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <>
      <div className="mt-5">
        <Row>
          <Col>
            <h4>{id ? "Edit Data" : "Add Data"}</h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="name">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Label>Description</Form.Label>
              <FloatingLabel className="mb-2" controlId="description">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  name="description"
                  value={description}
                  onChange={(event) => handleChange(event)}
                />
              </FloatingLabel>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={price}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormComponent;
