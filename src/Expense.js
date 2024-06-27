import React, { Component } from 'react'
import "./expense.css"
 class Expense extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         expenseName:"",
         expenseAmount:"",
         tblExpense:[],
          sum:[]
       // tblAmount:[]
      }
    }
    AccessExpense(name){
this.setState({
    expenseName:name.target.value
})
    }
    AccessAmount(amount){
        this.setState({
            expenseAmount:amount.target.value
        })
    }
    AddExpense=()=>{
        this.setState({
            tblExpense:[
              ...this.state.tblExpense,
              {
                name:this.state.expenseName,
                amount:this.state.expenseAmount,
              }
            ],
            expenseName:"",
            expenseAmount:""
        })
       
    }
    Delete=(obj)=>{
let del=this.state.tblExpense.filter((ele)=>{
return ele!=obj
})
this.setState({
  tblExpense:del
})
    }
    Total=()=>{
      let a=this.state.tblExpense.forEach((ele)=>{
      this.setState(prevstate=>({
        sum:[prevstate.sum+ele.amount]
                }) )  
                })  
    }
  render() {
    console.log(this.state.sum)
     return (
      <div>
        <h1>Expense Tracker</h1>
        <input type='text' placeholder='Expense Name' value={this.state.expenseName} onChange={(e)=>{this.AccessExpense(e)}}></input>
        <input type='number' className='inpt' placeholder='Amount'  value={this.state.expenseAmount} onChange={(e)=>{this.AccessAmount(e)}}></input>
        <button onClick={this.AddExpense} className='expense'>Add Expense</button>
        <table class="table table-light table-bordered">
          <thead>
            <tr>
              <th scope="col">Expense Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
             </tr>
          </thead>
        
          <tbody>
            { 
            !this.state.tblExpense.length == 0 ? (
              this.state.tblExpense.map((e)=>(
                <tr>
                  <td>{e.name}</td>
                  <td>{e.amount}</td>
                  <td><button className='btn1' onClick={()=>{this.Delete(e)}}>delete</button></td>            
                </tr>
              )) ):
              (
              <h6 className='heading'>No expense found</h6>
             
              )
            }  
                {/* <tr><td className='total'>Total</td></tr> */}

           </tbody>

          <tfoot>
            <tr id="totals-row">
                <th><button onClick={this.Total}>Total</button></th>
                <th>{this.state.sum}</th>
            </tr>
        </tfoot> 
        </table>
      </div>
    )
  }
}

export default Expense