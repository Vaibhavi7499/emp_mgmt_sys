import React, { Component } from "react";

export class StringWordCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stringName: "",
      countWord: "",
      countLetter: "",
      lowerCaseString: "",
      upperCaseString: "",
    };
  }
  countString = (e) => {
    this.setState({
      stringName: e.target.value,
    });
  };

  countWordLetter = () => {
    let countW = this.state.stringName.split(" ").length;
    let countL = this.state.stringName.replaceAll(" ", "").split("").length;
    this.setState({
      countWord: countW,
      countLetter: countL,
    });
  };

  LowerCaseString = () => {
    this.setState({
      lowerCaseString: this.state.stringName.toLowerCase(),
    });
  };

  UpperCaseString = () => {
    this.setState({
      upperCaseString: this.state.stringName.toUpperCase(),
    });
  };

  render() {
    return (
      <div className="mt-3">
        <div className="text-center">
          <h1>Words and Letters Counter</h1>
          <label>Enter the String</label>
          <div>
            <textarea
              value={this.state.stringName}
              onChange={(e) => this.countString(e)}
              rows="4"
              cols="50"
              maxLength="200"
            />
            <div>
              <button
                className="btn btn-primary"
                onClick={this.countWordLetter}
              >
                Find
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-secondary"
                onClick={this.LowerCaseString}
              >
                LowerCaseString
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-success"
                onClick={this.UpperCaseString}
              >
                UpperCaseString
              </button>
            </div>
            <div>
              <p>Word Count: {this.state.countWord}</p>
              <p>Letter Count: {this.state.countLetter}</p>
              <p>Lower case string: {this.state.lowerCaseString}</p>
              <p>Upper case string: {this.state.upperCaseString}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StringWordCount;
