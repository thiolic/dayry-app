import { useEffect, useState } from 'react';

import NewTodoItemForm from './NewTodoItemForm';
import TodosList from './TodosList';

const initialTodos = [
	{
		id: 1,
		title: 'Test',
		comments: [],
	},
	{
		id: 2,
		title: 'Test 2',
		comments: []
	}
];

const Todos = () => {
	const [todos, setTodos] = useState(() => {
		const localTodos = localStorage.getItem('todos');
		const localTodosArray = JSON.parse(localTodos);

		return localTodosArray || initialTodos;
	});

	useEffect(() => {
		return localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleAddTodoItem = (title) => {
		setTodos([
			...todos,
			{
				id: Date.now(),
				title,
				comments: [],
			}
		]);
	}

	const handleRemoveTodoItem = (id) => {
		setTodos([...todos].filter(todo => todo.id !== id));
	}

	return (
		<div className="todos">
			<h2 className="todos__title">Items</h2>
			<NewTodoItemForm addTodoItem={handleAddTodoItem} />
			<TodosList todos={todos} removeTodoItem={handleRemoveTodoItem} />
		</div>
	)
}

export default Todos;
