import axios from 'axios'
import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Card.css"
import { Context } from './Store/Context'

export const DeleteExpense = (props) => {
  const token=localStorage.getItem("token")
  const {expense,setExpense}=useContext(Context)
  const deletehandler=()=>{
    const newexpense=expense.filter((element)=>(element.id!==props.id))
    axios.delete(`http://3.81.206.128:5000/${props.id}`,{headers:{"Authorization":token}});
  
    setExpense(newexpense)
   console.log(newexpense)
  }
  
  return (
      <>
      
         <li> <Button onClick={deletehandler}>delete</Button></li>
      </>
  )
}
export const Editexpense=(props)=>{
  return(
    <li><NavLink to={`/editexpense/${props.id}`} className=' btn btn-primary'>edit</NavLink></li> 
  )
}

