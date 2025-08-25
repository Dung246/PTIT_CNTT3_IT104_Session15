import React, { Component } from 'react'
type State = {
    date: string,
}
export default class Clock extends Component<{}, State> {
    timerID:any;
    constructor(props: {}) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }


  render() {
    return (
      <div>
        <h3>Thoi gian hien tai: {this.state.date}</h3>
      </div>
    )
  }
}