import React from 'react';
import { Card, CardBody } from 'reactstrap';
function Header({name,title})
{
    return (
        <div style={{background:"blue" ,padding:20,width:1000}}>
<Card className="my-2 bg-warning">
    <CardBody>
    <h1 className="text-center my-2">WELCOME TO MY APPLICATION</h1>
    </CardBody>
</Card>



        </div>

    );
   
}
export default Header;