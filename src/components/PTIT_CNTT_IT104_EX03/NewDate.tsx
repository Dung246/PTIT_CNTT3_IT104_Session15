import React, { Component } from 'react'

export default class NewDate extends Component<{},{date:string}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: ''
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({ date: event.target.value });
  };
  render() {
    return (
      <div>
        <label>
          Ngày sinh {this.state.date}
        </label>
        <br />
        <input type="date" value={this.state.date} onChange={this.handleChange} />
        <br />
        <button>Submit</button>
      </div>
    )
  }
}
