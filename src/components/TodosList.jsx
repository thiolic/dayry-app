import { useState } from 'react';

import TodoItem from './TodoItem';

const TodosList = ({ todos, removeTodoItem, activeTodoItem }) => {
	return (
		<>
			{todos.length === 0 && <p>No Todos</p>}
			{todos.length > 0 &&
				<ul className="todos-list">
					{todos.map(todo => <TodoItem key={todo.id} {...todo} removeTodo={removeTodoItem} activeTodo={activeTodoItem} />)}
				</ul>
			}
		</>
	)
}

export default TodosList;
