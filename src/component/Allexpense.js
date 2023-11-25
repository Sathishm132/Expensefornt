import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { DeleteExpense, Editexpense } from './Expensecard'
import "./tabble.css"
import ExpenseNavbar from './ExpenseNavbar'

import { Context } from './Store/Context'
import { useParams } from 'react-router'

const Allexpense = () => {
  const [output,setOutput]=useState([])
  const [page,setPage]=useState(1);
  let[limit,setLimit]=useState(2)
    const {expense,setExpense}=useContext(Context)
    const token=localStorage.getItem("token")
    useEffect(()=>{
      
        axios.get(`http://3.81.206.128:5000/api?limit=${limit}&page=${page}`,{headers:{"Authorization":token}}).then((res)=>{
            setOutput(res.data.allexpenses)
            
           
        })
        
    },[limit])

  
   
  
   
    const downloadhahdler=()=>{
      axios.get("http://localhost:5000/premium/download",{headers:{"Authorization":token}}).then((response)=>{
        console.log(response.data.Url)
        const link = document.createElement('a');
    link.href = response.data.Url;
    link.target = '_blank'; // Opens the link in a new tab
    link.download = 'expense.csv'; // Set the download attribute with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
      })
    }
  return (
    <div>
      <ExpenseNavbar/><br/>
      <button onClick={downloadhahdler}> download</button>
      <Container className='mt-3'>
        <ul><li></li></ul><br/>
        <div className=''>
        
        <table >
          
        <thead >
          <tr className='page'>
            <td className="settings"colSpan={5}>
              <div className='topbox'>
              <div>
                settings
              </div>
              <div>
                <button onClick={()=>{setLimit(limit+1)}}>+</button>
                <p >+</p>
              </div>
              </div>
             
            </td>
          </tr>
          <tr>
            <th>date</th>
            <th>expense amount</th>
            <th>expense catregory</th>
            <th>expense description</th>
            <th>actons</th>
          </tr>
        </thead>
        <tbody>
          {output.map((item) => (
            <tr key={item.expenseDate}>
              <td >{item.expenseDate}</td>
              <td >{item.expenseamount}</td>
              <td >{item.expensecategory}</td>
              <td >{item.expenseDescription}</td>
              <td ><DeleteExpense id={item.id}/><Editexpense id={item.id}/></td>
            </tr>
            
          ))}
        </tbody>
      </table>
      </div>
        </Container></div>
  )
}

export default Allexpense