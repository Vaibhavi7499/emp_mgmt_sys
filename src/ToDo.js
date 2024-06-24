import React, { Component } from "react";
import "./todo.css";
class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      addName: [],
      isupdate: false,
      oldValue: "",
    };
  }
  AccessName(item) {
    this.setState({
      name: item.target.value,
    });
  }
  AddItem = () => {
    if(this.state.name == ""){
        return alert("Please enter the string!!!!")
    }else{
    if (this.state.isupdate) {
      this.setState({
        name: "",
        isupdate: false,
        addName: this.state.addName.map((ele) => {
          if (ele == this.state.oldValue) {
            return (ele = this.state.name);
          } else {
            return ele;
          }
        }),
      });
    } else {
      this.setState({
        addName: [...this.state.addName, this.state.name],
        name: "",
      });
    }
}
  };
  DeleteBtn(n) {
    let del = this.state.addName.filter((ele) => {
      return ele != n;
    });
    this.setState({
      addName: del,
    });
  }
  UpdateItem(n) {
    this.setState({
      isupdate: true,
      name: n,
      oldValue: n,
    });
  }
  render() {
    return (
      <div className="maincontainer">
        <h1>TODO List</h1>
        <label>Enter String :</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.AccessName(e);
          }}
        ></input>
        <button className="add" onClick={this.AddItem}>
          {this.state.isupdate ? "Update Item" : "Add Item"}
        </button>
        <ol>
          {this.state.addName.length == 0 ? (
            <h4>ToDo list is Empty</h4>
          ) : (
            this.state.addName.map((e) => (
              <li>
                {e}
                <button
                  className="btn1"
                  onClick={() => {
                    this.DeleteBtn(e);
                  }}
                >
                  *
                </button>
                <button
                  className="btn2"
                  onClick={() => {
                    this.UpdateItem(e);
                  }}
                >
                  update
                </button>
              </li>
            ))
          )}
        </ol>
      </div>
    );
  }
}

export default ToDo;
