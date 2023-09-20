const TodoItem = ({ title, id, removeTodo }) => {
	return (
		<li className="todos-list__item">
			{title}
			<button className="todos-list__item-button" onClick={() => removeTodo(id)}>Delete</button>
		</li>
	)
}

export default TodoItem;
