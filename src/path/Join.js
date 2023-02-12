import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Join() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const changeId = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  }

  const changePw = (e) => {
    e.preventDefault();
    setUserPw(e.target.value);
  }

  const loginSubmit = (e) => {
    alert(userId);

    axios.post('http://localhost:4000/login',{
        userId : userId,
        userPw : userPw,
      }).then(function(data){
        if(data.data.result === 1){
          return(
            <Navigate to="./Main"></Navigate>
          )
        } else {
          alert("로그인 정보가 없습니다.");
        }
    })
  }

  return (
    <Container className="p-3">
      <h1>Login</h1>
      <Form className="p-3">
        <Form.Group className="mb-3" controlId="userId">
          <Form.Label>Your ID</Form.Label>
          <Form.Control type="text" value={userId} onChange={changeId} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userPw">
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" value={userPw} onChange={changePw} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={loginSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Join;
