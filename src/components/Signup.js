import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import base_url from "./../api/bootapi";
import { Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Row,Label,Button,Form } from 'reactstrap';
import MenuFirst from './MenuFirst';

import { useNavigate } from 'react-router-dom';
const Signup = () => {
    useEffect(() => {
        document.title = "Add";
      }, []);
    
      
      const [employee, setEmployee] = useState({});
    
      const navigate = useNavigate();
    
      
      const handleForm = (e) => {
        postDatatoServer(employee);
        e.preventDefault();
      };
    
      const postDatatoServer = (data) => {
        
          axios.post(`${base_url}/employees`, data)
            .then(response => {
              console.log(response);
              navigate('/login-stud');
              //toast.success("Student added");
            })
            .catch(error => {
              console.log(error);
             // toast.error("Error adding student");
            });
        
      };
    
      return (
       
    
   
        <Fragment>
        
          <h1 className="text-center mt-3">Fill Course Details</h1>
          <Form onSubmit={handleForm}>
            <FormGroup>
              <label htmlFor="employeeid">stud id</label>
              <Input
                type="text"
                placeholder="Enter here"
                name="employeeid"
                id="employeeid"
                value={employee.employeeid || ''}
                onChange={(e) => setEmployee({ ...employee, employeeid: e.target.value })}
              />
            </FormGroup>
    
            <FormGroup>
              <label htmlFor="employeeid">student name</label>
              <Input
                type="text"
                placeholder="Enter here"
                id="employeename"
                value={employee.employeename || ''}
                onChange={(e) => setEmployee({ ...employee, employeename: e.target.value })}
              />
            </FormGroup>
    
            <FormGroup>
              <label htmlFor=" email">student course</label>
              <Input
                type="textarea"
                placeholder="Enter description"
                id=" email"
                style={{ height: 100 }}
                value={employee.email|| ''}
                onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor=" password">student course</label>
              <Input
                type="password"
                placeholder="Enter description"
                id=" password"
                style={{ height: 100 }}
                value={employee.password|| ''}
                onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
              />
            </FormGroup>
    
            <Container className="text-center mt-3">
              <Button type="submit" color="success">ADD</Button>
              <Button
                type="reset"
                color="warning"
                onClick={(e) => {
                  setEmployee({});
                }}
              >
                CLEAR
              </Button>
            </Container>
          </Form>
        </Fragment>
      );
    };


export default Signup;