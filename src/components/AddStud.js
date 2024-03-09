import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const AddStud = () => {
  useEffect(() => {
    document.title = "Add";
  }, []);

  const { id } = useParams();
  const [student, setStudent] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`${base_url}/students/${id}`)
        .then(response => {
          setStudent(response.data);
        })
        .catch(error => {
          console.log(error);
          toast.error("Error fetching student data");
        });
    }
  }, [id]);

  const handleForm = (e) => {
    postDatatoServer(student);
    e.preventDefault();
  };

  const postDatatoServer = (data) => {
    if (id) {
      axios.put(`${base_url}/students/${id}`, data)
        .then(response => {
          console.log(response);
          navigate('/list-stud');
          toast.success("Student updated");
        })
        .catch(error => {
          console.log(error);
          toast.error("Error updating student");
        });
    } else {
      axios.post(`${base_url}/students`, data)
        .then(response => {
          console.log(response);
          navigate('/list-stud');
          toast.success("Student added");
        })
        .catch(error => {
          console.log(error);
          toast.error("Error adding student");
        });
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="id">stud id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="id"
            id="id"
            value={student.id || ''}
            onChange={(e) => setStudent({ ...student, id: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="name">student name</label>
          <Input
            type="text"
            placeholder="Enter here"
            id="name"
            value={student.name || ''}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="course">student course</label>
          <Input
            type="textarea"
            placeholder="Enter description"
            id="course"
            style={{ height: 100 }}
            value={student.course || ''}
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
          />
        </FormGroup>

        <Container className="text-center mt-3">
          <Button type="submit" color="success">ADD</Button>
          <Button
            type="reset"
            color="warning"
            onClick={(e) => {
              setStudent({});
            }}
          >
            CLEAR
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddStud;
