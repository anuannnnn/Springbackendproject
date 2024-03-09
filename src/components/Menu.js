import React from 'react';
import { Link } from "react-router-dom";
function  Menu({name,title})
{
    return (
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/list-stud">List Of Students</Link>
          <Link to="/add-stud">Add Student</Link>
        
        </div>
      );


}
export default Menu;