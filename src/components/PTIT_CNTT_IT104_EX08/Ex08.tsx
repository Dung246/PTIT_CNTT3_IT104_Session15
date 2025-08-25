import React, { Component } from 'react'

type State = {
  count: number
}

export default class Ex08 extends Component<{}, State> {
    id:any;
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount(): void {
    this.id = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
        }, 1000);
        if (this.state.count === 10) {
          this.id = 0;
        }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}