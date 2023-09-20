import { useContext, useEffect, useState } from 'react';

import { useTodosContext } from '../todosContext';

import NewTodoItemForm from './NewTodoItemForm';
import TodosList from './TodosList';

const Todos = () => {
	const {todos, setTodos} = useTodosContext();
	
	useEffect(() => {
		const localStorageSetItem = () => {
			localStorage.setItem('todos', JSON.stringify(todos))
		}

		window.addEventListener('beforeunload', localStorageSetItem);

		return () => window.removeEventListener('beforeunload', localStorageSetItem);
	}, [todos]);

	const handleAddTodoItem = (title) => {
		setTodos([
			...todos,
			{
				id: Date.now(),
				title,
				comments: [],
				isActive: false,
			}
		]);
	}

	const handleRemoveTodoItem = (id) => {
		setTodos([...todos].filter(todo => todo.id !== id));
	}

	const handleActiveTodoItem = (id) => {
		const todosCopy = [...todos];
		const currentTodoItem = todosCopy.map((todo) => {
		
			if (todo.id !== id && todo.isActive) {
				todo.isActive = !todo.isActive;
			} else if (todo.id === id) {
				todo.isActive = !todo.isActive;
			}

			return todo;
		});

		setTodos(currentTodoItem);
	}

	return (
		<div className="todos">
			<h2 className="todos__title">Items</h2>
			<NewTodoItemForm addTodoItem={handleAddTodoItem} />
			<TodosList todos={todos} removeTodoItem={handleRemoveTodoItem} activeTodoItem={handleActiveTodoItem} />
		</div>
	)
}

export default Todos;
