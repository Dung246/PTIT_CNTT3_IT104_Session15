import React, { Component } from 'react'

export default class TypeRange extends Component<{}, { progress: string, submitted: boolean }> {
    constructor(props: {}) {
        super(props)
        this.state = {
            progress: "0",
            submitted: false
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ progress: event.target.value, submitted: false });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ submitted: true });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="input">
                    Tiến độ hoàn thành: 
                    {this.state.submitted && <span>{this.state.progress} %</span>} 
                </label>
                <br />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={this.state.progress}
                    onChange={this.handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
