import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ExpenseNavbar from './ExpenseNavbar'

const Leaderboard = () => {
    const[lexoense,setLexpense]=useState([])
    useEffect(()=>{
        axios.get("http://3.81.206.128:5000/premium").then((res)=>{
            setLexpense(res.data)
          console.log(res)
        })
    },[])
   const leaderboard=lexoense.map((element)=>(<div className='card mb-2'><ul><li>{element.name}</li><li>{element.totalamount}</li></ul></div>))
  return (
    <>
    <ExpenseNavbar/><br/>
     <Container>
      <h1>leaderboard</h1>
    {leaderboard}
</Container></>
   
  )
}

export default Leaderboard