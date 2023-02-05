import React from 'react';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Join() {
  return (
    <Container className="p-3 w-25">
        <h1 className='m-5'>Login</h1>
        <InputGroup className="inputGroup">
        <InputGroup.Text id="basic-addon1" className="w-25">ID</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        </InputGroup>
        <InputGroup className="inputGroup">
        <InputGroup.Text id="basic-addon2" className="w-25">PW</InputGroup.Text>
        <Form.Control
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
        </InputGroup>
        <Button className="w-30 m-3" variant="outline-secondary">Join</Button>{' '}
    </Container>
  );
}

export default Join;
