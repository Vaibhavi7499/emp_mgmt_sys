import React, { Component } from 'react'
import "./example.css"
class Example extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            a:"",
            count:"",
            b:"",
            count1:"",
            c:"",
            d:""
        }
    }
    CountLetter(name){
this.setState({
    name:name.target.value,
    a:this.state.name.split(" "),
    b:this.state.name.split("")
})
    }

ShowInfo=()=>{
    this.setState({
       count:this.state.a.length,
 count1:this.state.b.length
        })

}
UpperCase=()=>{
    this.setState({
        c:this.state.name.toUpperCase()
    })
}
    LowerCase=()=>{
        this.setState({
            d:this.state.name.toLowerCase()
        })
} 
  render() {

    return (
      <div>
        <textarea className='textArea' value={this.state.name} onChange={(ele)=>{this.CountLetter(ele)}}></textarea>
        <button onClick={this.ShowInfo}>ShowInfo</button>
        <h1>Total letter :{this.state.count}</h1>
        <h1>Total Word :{this.state.count1}</h1>
<button onClick={this.UpperCase}>UpperCase</button>
<h1>LowerCase :{ this.state.c}</h1>
<button onClick={this.LowerCase}>LowerCase</button>
<h1>LowerCase :{ this.state.d}</h1>
      </div>
    )
  }
}

export default Example