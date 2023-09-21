import { useEffect } from 'react';

import TodoItem from './TodoItem';

import { useTodosContext } from '../../todosContext';

const TodosList = () => {
	const { todos, setTodos, activeTodo, setActiveTodo } = useTodosContext();

	useEffect(() => {
		const localStorageSetItem = () => {
			localStorage.setItem('todos', JSON.stringify(todos));
			localStorage.setItem('activeTodo', JSON.stringify(activeTodo));
		}

		window.addEventListener('beforeunload', localStorageSetItem);

		return () => window.removeEventListener('beforeunload', localStorageSetItem);
	}, [todos, activeTodo]);

	/* eslint-disable */
	useEffect(() => {
		const localTodos = localStorage.getItem('todos');
		const localActiveTodo = localStorage.getItem('activeTodo');

		if (localTodos && JSON.parse(localTodos).length) {
			setTodos(JSON.parse(localTodos));
		}

		if (localActiveTodo && JSON.parse(localActiveTodo)) {
			setActiveTodo(JSON.parse(localActiveTodo));
		}
	}, []);
	/* eslint-enable */

	return (
		<>
			{todos.length === 0 && <p>No Todos</p>}
			{todos.length > 0 &&
				<ul className="todos-list">
					{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
				</ul>
			}
		</>
	)
}

export default TodosList;
