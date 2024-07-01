import React, { Component } from "react";
import styles from "./LearnTodo.module.css";
export class LearnTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTodo: "",
      toDoArr : [],
      isUpdate : false,
      oldValue : ''
    };
  }
  inputTodoFun(event) {
    this.setState({
        inputTodo : event.target.value
    })
  }
  addTodo = () => {
   if(!this.state.isUpdate) {
    this.setState({
        toDoArr : [...this.state.toDoArr, this.state.inputTodo],
        inputTodo : ''
       })
   } else{
        this.setState({
          inputTodo:"",
          isUpdate:false,
            toDoArr : this.state.toDoArr.map((ele) => {
                if(ele == this.state.oldValue) {
                    return ele = this.state.inputTodo
                } else {
                    return ele
                }
            }),
        })
   }
}
updateTodo =(ele) => {
 this.setState({
    inputTodo : ele,
    oldValue : ele,
    isUpdate : true
 })
}
Delete=(name)=>{
let del=this.state.toDoArr.filter((e)=>{
  return e !=name
})
this.setState({
  toDoArr:del
})
}
  render() {
    return (
      <>
        <div className={styles.mainDiv}>
          <div>
            <input
              type="text"
              placeholder="Enter value"
              value={this.state.inputTodo}
              onChange={(e) => this.inputTodoFun(e)}
            />
            &nbsp; &nbsp;
            <button className="btn btn-primary" onClick={this.addTodo}>{this.state.isUpdate ? 'Update' : 'Add' }</button>
          </div>

          <div>
            <ul>
              {

                this.state.toDoArr.map((ele) => (
                <li>
                {ele}
                <button className="btn btn-success" onClick={() => this.updateTodo(ele)}>Update</button>
                &nbsp;
                <button className="btn btn-danger" onClick={()=> this.Delete(ele)}>delete</button>
              </li>
                ))
              }
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default LearnTodo;
