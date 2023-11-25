import React, { useRef } from 'react'
import { Button, Container, Form, NavItem } from 'react-bootstrap'
import './Signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
  const name=useRef()
  const email=useRef()
  const password=useRef()
    const submithandler=(e)=>{
      e.preventDefault()
      const user={
        name:name.current.value,
        email:email.current.value,
        password:password.current.value,

      }
      axios.post("http://3.81.206.128:5000/user",user).then(()=>{

      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div className="cover">
      <div className='form'>
          
        
        
          <Form onSubmit={submithandler}>
          <h2>Sign up</h2>
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text"ref={name} required  placeholder="Enter name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"ref={email} required  placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required  ref={password} placeholder="Password" />
       
      </Form.Group>
      <p>Alreay have an account?<Link to="/signin">login</Link></p>
      <Button type='submit'>Signup</Button>
    </Form>
    </div>
   
    </div>
  )
}

export default Signup