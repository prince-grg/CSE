import React from "react";
import HOD from '../images/hod_sangal.jpg'
import Card from  'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import {FacultyData} from '../FacultyData'
const Faculty =()=>{
    return (
         <>

               <h1 style={{letterSpacing:2,margin:'auto',color:"white",
               textAlign:"center",backgroundColor:"#f2a3b1",marginTop:30 }}>Faculty</h1>
         <div className="container flx-box">
         {
             FacultyData.map((data, key) => {
           return (


             <Card  className="flx-item" style={{ width: '18rem',color:'black' }}>
             <Card.Img variant="top" src={data.profile} />
             <Card.Body>
               <Card.Title>{data.name}</Card.Title>
               <Card.Text>
            {data.Designation + " \n "+data.email}
               </Card.Text>
               <Button variant="primary">Contact</Button>
             </Card.Body>
           </Card>
           );
         })}
       </div>
         </>
    )
}
export default Faculty;