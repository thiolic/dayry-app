import { createContext, useContext, useState } from 'react';

const initialTodos = [
	{
		id: 1,
		title: 'Test',
		comments: [
			{
				id: Date.now(),
				text: 'I am comment',
			}
		],
		isActive: true,
	},
	{
		id: 2,
		title: 'Test 2',
		comments: [],
		isActive: false,
	}
];

export const TodosContext = createContext([]);

export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState(() => {
		const localTodos = localStorage.getItem('todos');
		const localTodosArray = JSON.parse(localTodos);

		return localTodosArray || initialTodos;
	});

	return (
		<TodosContext.Provider value={{ todos, setTodos }}>
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
