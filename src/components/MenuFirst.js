import React from 'react';

import { Link } from "react-router-dom";
function  MenuFirst({name,title})
{
    return (
        <div>
         
         
          <Link to="/reg-stud">SignUp</Link>
          <Link to="/login-stud">Login</Link>
        </div>
      );


}
export default MenuFirst;