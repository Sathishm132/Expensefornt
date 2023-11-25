import axios from 'axios';
import React from 'react'
import {Button, Container,Nav,Navbar,}from 'react-bootstrap';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import useRazorpay from "react-razorpay";



const ExpenseNavbar = () => {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")
  const premium=localStorage.getItem("premium")
  const Razorpay=useRazorpay()
  const logout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("premium")
    navigate("/signin")
  }
  console.log(premium)
  const clickhandler=async(e)=>{
    e.preventDefault()
   const respone= await  axios.get("http://3.81.206.128:5000/payment",{headers:{"Authorization":token}})
   const options={
    "key":respone.data.key_id,
    "order_id":respone.data.order.id,
    "handler":async(resp)=>{
await axios.post("http://3.81.206.128:5000/payment",{"order_id":options.order_id,
"payment_id":resp.razorpay_payment_id,},
{headers:{"Authorization":token}})
await localStorage.setItem("premium",true)
await alert("you are now premium")

    }
   }
const rzp= await new Razorpay(options)
rzp.open()
e.preventDefault()
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Expense tracker</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to="/" className="nav-link">Expenses</NavLink>
            <NavLink to="/addexpense" className="nav-link">Addexpense</NavLink>
            {premium && <NavLink to="/leaderboard" className='nav-link' >leader board</NavLink>}
          </Nav>
        
          <Nav className='justify-content-around' >
         {!premium &&<Button  onClick={clickhandler} className="nav-link">add premium</Button>} 
       
         {premium &&  <Navbar.Brand >premium</Navbar.Brand>}
           {token&&<button className='nav-link'  onClick={logout}>logout</button>}
   
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default ExpenseNavbar