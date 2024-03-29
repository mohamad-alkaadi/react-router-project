const TodoItem = ({ id, completed, title }) => {
  return (
    <li key={id} className={completed ? "strike-through" : null}>
      {title}
    </li>
  )
}
export default TodoItem
