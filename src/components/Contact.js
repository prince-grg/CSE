import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
const Contact = ()=>{
    return (
         <>
           <div className="form-container">
           <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  
  
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
           </div>
         </>
    )
}
export default Contact;