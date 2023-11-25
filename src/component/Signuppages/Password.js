import axios from 'axios'
import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Password = () => {
    const email=useRef()
    const submithandler=(e)=>{
        e.preventDefault()
        axios.post("http://3.81.206.128:5000/password",{email:email.current.value})

    }
  return (
    <div className="cover">
      <div className='form'>
          
        
        
          <Form onSubmit={submithandler}>
          <h2>Reset password</h2>
         
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"ref={email} required  placeholder="Enter email" />
      </Form.Group>
      
      <Button type='submit'>send mail</Button>
    </Form>
    </div>
   
    </div>
  )
}

export default Password