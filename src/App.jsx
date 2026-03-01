import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [stats, setStats] = useState({ total: 0, completed: 0 })

  const addTodo = () => {
    if (input) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="app-container">
      <h1>📝 My Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="新しいTodoを入力..."
        />
        <button onClick={addTodo}>追加</button>
      </div>

      <div className="stats">
        <p>全体: {stats.total} | 完了: {stats.completed}</p>
      </div>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty-message">Todoはまだありません</li>
        ) : (
          todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={false}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>削除</button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default App
