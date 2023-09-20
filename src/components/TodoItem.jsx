const TodoItem = ({ title, id, isActive, removeTodo, activeTodo }) => {
	return (
		<li className={`todos-list__item ${isActive ? 'is-active' : '' }`} onClick={() => activeTodo(id)}>
			{title}
			<button className="todos-list__item-button" onClick={() => removeTodo(id)}>Delete</button>
		</li>
	)
}

export default TodoItem;
