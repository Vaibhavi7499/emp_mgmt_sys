import React, { Component } from 'react'

export class Age extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        DOB : '',
        current : '',
        ageCount : '',
        isClick : false
      }
    }

    DOBFun(e) {
        this.setState({
            DOB : e.target.value
        }) 
    }

    CurrentDateFun(e) {
        this.setState({
            current : e.target.value
        }) 
    }

    ageCal = () => {
        let DOB = new Date(this.state.DOB).getFullYear();
        let current = new Date(this.state.current).getFullYear();
       this.setState({
        isClick : true,
        ageCount : current-DOB
       })
    }
  render() {
    return (
      <div>
        <div className="text-center container">
            <h1>Age Calculator</h1>
        <div>
        <label>DOB</label>
        <input type="date" id="birthday" name="birthday" value={this.state.DOB}  onChange={(e) => this.DOBFun(e)}/>
        </div>

        <div>
        <label>Current Date</label>
        <input type="date" id="birthday" name="birthday" value={this.state.current} onChange={(e) => this.CurrentDateFun(e)}/>
        </div>

        <div className='mt-2'>
            <button className='btn btn-primary' onClick={this.ageCal}>Age Calculate</button>
        </div>

        <div className='mt-3'>
            {
                this.state.isClick ? <h3>Your Age is {this.state.ageCount}</h3> : ''
            }
        </div>
        </div>
      </div>
    )
  }
}

export default Age