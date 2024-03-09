// Home.js
import React, { useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, useHistory,Link } from 'react-router-dom';

import Menu from '../components/Menu'; // Adjust the path accordingly

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
   <div>
          <Link to="/Home">Home</Link>
          <Link to="/list-stud">List Of Students</Link>
          <Link to="/add-stud">Add Student</Link>
          <Link to="/sign-out">Signout Student</Link>
        
        </div>
      <Container className="text-center" color="bg-primary">
        <h1>Learncode Ancy</h1>
        <p>
          added 3 packages, and audited 1545 packages in 48s. 248 packages are looking for funding added 3 packages, and
          audited 1545 packages in 48s 248 packages are looking for funding
        </p>
        <Button color="warning" outline>
          Start
        </Button>
      </Container>
    </div>
  );
};

export default Home;
