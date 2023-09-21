import { createContext, useContext, useState } from 'react';

const initialTodos = [
	{
		id: 1,
		title: 'Test',
		comments: [
			{
				id: Date.now(),
				text: 'It is a comment',
				color: '#67c14b',
			},
		]
	}
];

export const TodosContext = createContext([]);

export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState(initialTodos);
	const [activeTodo, setActiveTodo] = useState(initialTodos[0]);

	const addTodoItem = (todo) => {
		if (!activeTodo) {
			setActiveTodo(todo);
		}

		setTodos([...todos, todo]);
	}

	const removeTodoItem = (todoId) => {
		setTodos([...todos].filter(todo => todo.id !== todoId));

		if (activeTodo && activeTodo.id === todoId) {
			setActiveTodo(todos.find(todo => todo.id !== todoId) || null);
		}
	}

	const addComment = (todoId, comment) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === todoId) {
				return {
					...todo,
					comments: [...todo.comments, comment],
				}
			}

			return todo;
		})

		setTodos(newTodos);
		setActiveTodo(newTodos.find(todo => todo.id === activeTodo.id));
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos,
				activeTodo,
				setActiveTodo,
				addTodoItem,
				removeTodoItem,
				addComment,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
}

export const useTodosContext = () => {
	const context = useContext(TodosContext);

	if (!context) {
		throw new Error('useTodosContext must be used within a TodosContextProvider');
	}

	return context;
}
