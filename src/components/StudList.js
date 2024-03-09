import React, { useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardText, Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button } from "reactstrap";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
function StudList({name,title})
{
    const [student,setStudent]=useState([]);
    useEffect(()=>{
        getAllCoursesFromServer();
        },[]
        );
        const getAllCoursesFromServer = () => {
            axios.get(`${base_url}/students`).then(
              (response) => {
                console.log(response.data); // Assuming the courses are in response.data
                
                toast.success("sucess");
                setStudent(response.data);
              },
              (error) => {
                console.log(error);
                toast.success("error");
              }
            );
          };
          const  deleteEmployee = (id) => {
            axios.delete(`${base_url}/students/${id}`).then(
                (response) => {
                    console.log(response);
                    toast.success("course deleted");
                   
                    setStudent((prevStudents) =>
                    prevStudents.filter((student) => student.id !== id)
                  );
                },
                (error) => {
                    console.log(error);
                    toast.error("course not added");
                }
            );
        };
          return (
            
            <div className = "container">

                <h2 className = "text-center"> List Employees </h2>
                  <Link to="/add-stud">ADD</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th> Student Id </th>
                        <th> Student Name </th>
                      
                        <th> Student Course </th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                            
                            student.map(
                                employee =>
                                <tr key = {employee.id}> 
                                    <td> {employee.id} </td>
                                    <td> {employee.name} </td>
                                    <td>{employee.course}</td>
                                    <td>
                                    <Link className="btn btn-info" to={`/edit-student/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    
    export default StudList;
    