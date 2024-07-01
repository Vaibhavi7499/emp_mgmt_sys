import React, { Component } from 'react'
import styles from "./whether.module.css"
 class Whether extends Component {
    constructor(props) {
      super(props)
      this.state = {
         cityName:[],
         city:"",
         todaysDate:""
      }
    }
    accessCity(c){
this.setState({
    city:c.target.value
})
    }
    ShowWhether=()=>{
this.setState({
    cityName:[
      ...this.state.cityName, 
      {
       name: this.state.city,
       todaysDate:new Date
}
],
    city:"",
})
    }
  render() {
      return (
      <div className={styles.maincontainer}>
        <input type='text' value={this.state.city} placeholder='enter city' onChange={(e)=>{this.accessCity(e)}}></input>
        <button onClick={this.ShowWhether} className={styles.whether}>show whether</button>
     {
        this.state.cityName.map((e)=>(
          <>
              <h3>{e.name}</h3>
              <h3>{e.todaysDate}</h3>
</>
        ))
  }
      </div>
    )
  }
}

export default Whether