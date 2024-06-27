import React, { Component } from "react";
import "./ExpenseTracker.css";
export class ExpenseTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenseName: "",
      Amount: "",
      addExpense: [],
      total: "",
    };
  }

  setExpenseName(e) {
    this.setState({
      expenseName: e.target.value,
    });
  }

  setAmount(e) {
    this.setState({
      Amount: e.target.value,
    });
  }

  addExpenseFun = () => {
    if(this.state.expenseName == '' || this.state.Amount == '') {
      return alert('please enter expense and amount')
    } else {
      let sum = this.state.total;
      this.setState({
        addExpense: [
          ...this.state.addExpense,
          {
            expenseName: this.state.expenseName,
            amount: this.state.Amount,
          },
        ],
        expenseName: "",
        Amount: "",
        total: Number(sum) + Number(this.state.Amount),
      });
    }
  };

  deleteExpense(e) {
    this.setState({
      addExpense: this.state.addExpense.filter((ele) => {
        if (ele.expenseName === e.expenseName && ele.amount == e.amount) {
        } else {
          return ele;
        }
      }),
      total: this.state.total,
    });
  }
  render() {
    return (
      <div className="text-center container">
        <div>
          <h1>Expense Tracker</h1>
          <input
            type="text"
            placeholder="Expense Name"
            value={this.state.expenseName}
            onChange={(e) => this.setExpenseName(e)}
          />
          <input
            type="number"
            placeholder="Amount ₹"
            value={this.state.Amount}
            onChange={(e) => this.setAmount(e)}
          />
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-primary" onClick={this.addExpenseFun}>
            Add Expense
          </button>
        </div>
        <table className="table table-light  table-bordered mt-2">
          <thead>
            <tr>
              <th scope="col">Expense Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.addExpense.length ? (
              this.state.addExpense.map((ele) => (
                <tr>
                  <td>{ele.expenseName}</td>
                  <td>{ele.amount}₹</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteExpense(ele)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Expense Found</td>
              </tr>
            )}
          </tbody>
          {this.state.addExpense.length && (
            <tfoot>
              <tr id="totals-row">
                <th>Total</th>
                <th id="total-price">{this.state.total}₹</th>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    );
  }
}

export default ExpenseTracker;
