import React from 'react';

type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  inputValue: string;
  isEditing: boolean;
  editId: number | null;
  showModal: boolean;
  deleteId: number | null;
};

class TodoApp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
      isEditing: false,
      editId: null,
      showModal: false,
      deleteId: null,
    };
  }

  componentDidMount() {
    const stored = localStorage.getItem('todos');
    if (stored) {
      this.setState({ todos: JSON.parse(stored) });
    }
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddOrUpdate = () => {
    const { inputValue, todos, isEditing, editId } = this.state;
    const trimmed = inputValue.trim();

    if (!trimmed) {
      alert('Tên công việc không được để trống');
      return;
    }

    const isDuplicate = todos.some(
      (todo) =>
        todo.name.toLowerCase() === trimmed.toLowerCase() &&
        todo.id !== editId
    );
    if (isDuplicate) {
      alert('Tên công việc không được trùng');
      return;
    }

    if (isEditing && editId !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, name: trimmed } : todo
      );
      this.setState({
        todos: updatedTodos,
        inputValue: '',
        isEditing: false,
        editId: null,
      });
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        name: trimmed,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        inputValue: '',
      });
    }
  };

  toggleComplete = (id: number) => {
    const updated = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updated });
  };

  handleDelete = (id: number) => {
    this.setState({ showModal: true, deleteId: id });
  };

  confirmDelete = () => {
    const { todos, deleteId } = this.state;
    if (deleteId !== null) {
      const updated = todos.filter((todo) => todo.id !== deleteId);
      this.setState({ todos: updated, deleteId: null, showModal: false });
    }
  };

  cancelDelete = () => {
    this.setState({ showModal: false, deleteId: null });
  };

  handleEdit = (id: number) => {
    const todo = this.state.todos.find((t) => t.id === id);
    if (todo) {
      this.setState({
        inputValue: todo.name,
        isEditing: true,
        editId: id,
      });
    }
  };

  render() {
    const { todos, inputValue, isEditing, showModal } = this.state;

    return (
      <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
        <h2>Quản lý công việc</h2>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Nhập tên công việc"
            value={inputValue}
            onChange={this.handleInputChange}
            style={{ flex: 1 }}
          />
          <button onClick={this.handleAddOrUpdate}>
            {isEditing ? 'Cập nhật' : 'Thêm'}
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
                borderBottom: '1px solid #ccc',
                paddingBottom: 4,
              }}
            >
              <label style={{ flex: 1 }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => this.toggleComplete(todo.id)}
                />
                <span
                  style={{
                    marginLeft: 8,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.name}
                </span>
              </label>
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => this.handleEdit(todo.id)}>Sửa</button>
                <button onClick={() => this.handleDelete(todo.id)}>Xóa</button>
              </div>
            </li>
          ))}
        </ul>

        {showModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: '#fff',
                padding: 20,
                borderRadius: 4,
                textAlign: 'center',
              }}
            >
              <p>Bạn có chắc chắn muốn xóa công việc này không?</p>
              <button onClick={this.confirmDelete} style={{ marginRight: 10 }}>
                Đồng ý
              </button>
              <button onClick={this.cancelDelete}>Hủy</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TodoApp;
