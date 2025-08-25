import React, { Component } from 'react'

type State = {
    Email: string,
}
export default class EmailForm extends Component <{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            Email: '',
        };
    }
    render() {
        return (
            <div>
                <h2>Form</h2>
                <form>
                    <label>Email:</label>
                    <input type="text" value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value })} />
                    <button type="submit" onClick={() => console.log(this.state.Email)}>Submit</button>
                </form>
                <div>
                    <h3>Submitted Email:</h3>
                </div>

            </div>
    )
  }
}