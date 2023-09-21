import { useTodosContext } from '../todosContext';

const TodoItem = ({ todo }) => {
	const { activeTodo, setActiveTodo, removeTodoItem } = useTodosContext();

	const { id, title, comments } = todo;
	const isActive = activeTodo?.id === id;

	const handleRemoveTodoItem = (e) => {
		e.stopPropagation();
		removeTodoItem(id);
	}

	const handleClick = (todo) => {
		setActiveTodo(todo);
	}

	return (
		<li className={`todos-list__item ${isActive ? 'is-active' : ''}`} onClick={() => handleClick(todo)}>
			<span className="todos-list__item-text">{title}</span>
			<span className="todos-list__item-count">{comments?.length}</span>
			<button className="todos-list__item-button" onClick={handleRemoveTodoItem}>Delete</button>
		</li>
	)
}

export default TodoItem;
