import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const Reg = () => {
  useEffect(() => {
    document.title = "Reg";
  }, []);

  const { idnew } = useParams();
  const [registration, setReg] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (idnew) {
      axios.get(`${base_url}/registraions/${idnew}`)
        .then(response => {
          setReg(response.data);
        })
        .catch(error => {
          console.log(error);
          toast.error("Error fetching student data");
        });
    }
  }, [idnew]);

  const handleForm = (e) => {
    postDatatoServer(registration);
    e.preventDefault();
  };

  const postDatatoServer = (data) => {
  
      axios.post(`${base_url}/registrations`, data)
        .then(response => {
          console.log(response);
          navigate('/login-stud');
          toast.success("Student added");
        })
        .catch(error => {
          console.log(error);
          toast.error("Error adding student");
        });
    
  };

  return (
    <Fragment>
      <h1 className="text-center mt-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="idnew">stud id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="idnew"
            id="idnew"
            value={registration.idnew || ''}
            onChange={(e) => setReg({ ...registration, idnew: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="username">student name</label>
          <Input
            type="text"
            placeholder="Enter here"
            id="username"
            value={registration.username || ''}
            onChange={(e) => setReg({ ...registration, username: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="passwor">student course</label>
          <Input
            type="textarea"
            placeholder="Enter description"
            id="passwor"
            style={{ height: 100 }}
            value={registration.passwor || ''}
            onChange={(e) => setReg({ ...registration, passwor: e.target.value })}
          />
        </FormGroup>

        <Container className="text-center mt-3">
          <Button type="submit" color="success">ADD</Button>
          <Button
            type="reset"
            color="warning"
            onClick={(e) => {
              setReg({});
            }}
          >
            CLEAR
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default Reg;
