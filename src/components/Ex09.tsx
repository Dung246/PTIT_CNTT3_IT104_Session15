import React, { Component } from "react";

type Todo = {
  text: string;
  done: boolean;
};

type State = {
  todos: Todo[];
};

export default class Works extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTask = () => {
    const text = prompt("Nhập công việc:") || "";
    const newText = text.trim();
    if (!newText) return;
    
    const isDuplicate = this.state.todos.some(
      (todo) => todo.text.toLowerCase() === newText.toLowerCase()
    );
    if (isDuplicate) {
      alert("Công việc này đã tồn tại");
      return;
    }

    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: newText, done: false }],
    }));
  };

  toggleTask = (index: number) => {
    const newTodos = [...this.state.todos];
    newTodos[index].done = !newTodos[index].done;
    this.setState({ todos: newTodos });
  };

  removeTask = (index: number) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <button onClick={this.addTask}>Them cong viec</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              <div>
                {todo.done ? todo.text : <s>{todo.text}</s>}
              </div>
              <button onClick={() => this.toggleTask(index)}>
                {todo.done ? "Hoàn tác" : "Hoàn thành"}
              </button>
              <button onClick={() => this.removeTask(index)}>Xoá</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}