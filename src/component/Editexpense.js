import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import {  useNavigate, useNavigation, useParams } from 'react-router';
import { Context } from './Store/Context';

const Editexpense = () => {
    const navgate=useNavigation()
    const expensedate=useRef();
    const expenseamount=useRef();
    const expensecategory=useRef();
    const expensedescription=useRef();
    const {id}=useParams();
    const navigate=useNavigate()
   const{expense,setExpense}=useContext(Context)
   const edit=expense.find(item=>item.id==id);
   
    
   useEffect(()=>{
    
    expensecategory.current.value=edit.expensecategory
    expenseamount.current.value=edit.expenseamount
    expensedescription.current.value=edit.expenseDescription
    expensedate.current.value=edit.expenseDate
  },[])
  
   
   
   
   console.log(expense)

    
  
    const submithandler=(e)=>{
        e.preventDefault()
        const updatedexpense={
            expensedate:expensedate.current.value,
            expenseamount:expenseamount.current.value,
            expensecategory:expensecategory.current.value,
            expensedescription:expensedescription.current.value
          }
          axios.put(`http://3.81.206.128:5000/api/${id}`,updatedexpense).then(()=>{
            navigate("/")
          })

          
    }
  return (
    <div>
         <Container>
      <Form onSubmit={submithandler}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Expense date</Form.Label>
        <Form.Control type="date" ref={expensedate}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Expense amount</Form.Label>
        <Form.Control type="number" ref={expenseamount}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Expense category</Form.Label>
        <Form.Control type="text"ref={expensecategory} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Expense description</Form.Label>
        <Form.Control type="text" ref={expensedescription}required />
      </Form.Group>
      <Button type='submit'>Update</Button>
      <Button onClick={()=>{navigate('/')}}>cancel</Button>
    </Form>
    </Container>
    </div>
  )
}

export default Editexpense