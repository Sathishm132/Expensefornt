
import { useRef } from 'react';
import {Form,Container,Button } from 'react-bootstrap'
import ExpenseNavbar from './ExpenseNavbar';
import axios from 'axios'
import Allexpense from './Allexpense';
import { redirect, useNavigate } from 'react-router';

const Addexpense = () => {
    const expensedate=useRef();
    const expenseamount=useRef();
    const expensecategory=useRef();
    const expensedescription=useRef();
    const navigate=useNavigate()
    const token=localStorage.getItem("token")
  const submithandler=(event)=>{
    event.preventDefault();
    const expense={
      expensedate:expensedate.current.value,
      expenseamount:expenseamount.current.value,
      expensecategory:expensecategory.current.value,
      expensedescription:expensedescription.current.value
    }
    axios.post("http://3.81.206.128:5000/api",expense,{headers:{"Authorization":token}}).then(()=>{
        expensedate.current.value=null;
        expenseamount.current.value=null;
        expensecategory.current.value=null;
        expensedescription.current.value=null;
    }).then(()=>{navigate("/")}).catch((err)=>{
        console.log(err)
    })

  }
  return (
    <div>
        <ExpenseNavbar/><br/>
              <Container>
      <Form onSubmit={submithandler}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Expense date</Form.Label>
        <Form.Control type="date" ref={expensedate} required placeholder="Enter expense title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Expense amount</Form.Label>
        <Form.Control type="number" ref={expenseamount} required placeholder="enter amount" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Expense category</Form.Label>
        <Form.Select ref={expensecategory}>
        <option>Default select</option>
        <option>fuel</option>
        <option>grocerry</option>
        <option>Entertainment</option>
        <option>vacations</option>
        <option>Bills</option>
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Expense description</Form.Label>
        <Form.Control type="text" ref={expensedescription}required placeholder="enter description" />
      </Form.Group>
      <Button type='submit'>Add expense</Button>
    </Form>
    </Container>
   
    </div>
  )
}

export default Addexpense