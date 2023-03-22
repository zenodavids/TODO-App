const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const handleCheckboxChange = () => {
    onUpdate({ ...todo, completed: !todo.completed })
  }

  const handleDeleteClick = () => {
    onDelete(todo)
  }

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default TodoItem
