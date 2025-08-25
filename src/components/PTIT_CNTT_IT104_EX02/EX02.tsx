import React, { Component } from 'react'
type State = {
    color: string,
    chooseColor: string,
}
export default class Color extends Component <{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: '',
            chooseColor: '#000000',
        };
    }

    setStage = (stage: string, e: React.FormEvent) => {
        e.preventDefault();
        this.setState({ chooseColor: stage });
    }

    setColor = (e: React.FormEvent) => {
        e.preventDefault();
        this.setState({ color: this.state.chooseColor });
    }

    render() {
        return (
            <div>
                <h3>Color:{this.state.color.slice(1)}</h3>
                <form onSubmit={this.setColor}>
                    <label style= {{ marginBottom : '50px'}}>Form</label>
                    <br /><input type="color" value={this.state.chooseColor} onChange={(e) => this.setState({ chooseColor: e.target.value })} />
                    <br /><button type="submit">Submit</button>
                </form>
                <div>
                    <h3>Submitted Color:</h3>
                </div>

            </div>
        )
    }
}