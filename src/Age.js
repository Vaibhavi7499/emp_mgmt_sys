import React, { Component } from 'react'
import styles from "./age.module.css";

 class Age extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        dateofBirth:"",
        currentDate:"",
        year:"",
        isDate:false
      }
    }
    AccessBirth(birth){
this.setState({
    dateofBirth:birth.target.value
})
    }
    AccessCurrentDate(date){
this.setState({
        currentDate:date.target.value
})
    }
    CalculateAge=()=>{
        let a=this.state.currentDate.slice(0,4) - this.state.dateofBirth.slice(0,4)
        if(this.state.dateofBirth == ""){
            alert("Oops! could not Calculate age!")
        }else{
this.setState({
    year:a,
    isDate:true
})}
    }
  render() {
    //console.log(this.state.dateofBirth)
    //console.log(this.state.currentDate)

    return (
      <div className={styles.mainContainer}>
        <h1>AGE CALCULATOR</h1>
        <label>Enter your Date of Birth</label>
        <input type="date" value={this.state.dateofBirth} onChange={(e)=>{this.AccessBirth(e)}}></input><br></br>
        <label>Current Date</label>
        <input type='date'  value={this.state.currentDate} onChange={(e)=>{this.AccessCurrentDate(e)}}></input>
        <button onClick={this.CalculateAge}>Calculate age</button>
        {
            this.state.isDate ?
        <h2>Your age is {this.state.year}</h2> :""

        }
                </div>
    )
  }
}

export default Age