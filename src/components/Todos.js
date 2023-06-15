import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Todos = () => {
  const [todo, setTodo] = useState("");
  console.log("🚀 ~ file: Todos.js:5 ~ Todos ~ todo:", todo);

  return (
    <Container>
      <Row className="justify-content-center" fluid>
        <Col xs={10} sm={8} md={6}>
          <Form>
            <Form.Group controlId="formTodo">
              <Form.Label className="App-label">Add Todo</Form.Label>
              <Form.Control
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add Todo"
                required
              />
            </Form.Group>
            <Button
              xs={10}
              sm={8}
              md={6}
              variant="success"
              type="submit"
              className="App-btn"
            >
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
