import { useState } from 'react';
import { useTodosContext } from '../todosContext';

const NewTodoItemForm = () => {
	const [title, setTitle] = useState('');
	const { addTodoItem } = useTodosContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		addTodoItem({
			id: `${Math.floor(Math.random() * 900000000 + 100000000)}`,
			title,
			comments: [],
		});

		setTitle('');
	}

	const handleChange = ({ target }) => {
		setTitle(target.value);
	}

	return (
		<form className="todos__form form" onSubmit={handleSubmit}>
			<input onChange={handleChange} className="form__input" type="text" placeholder="Type name here..." required value={title} />
			<button className="form__button">Add New</button>
		</form>
	)
}

export default NewTodoItemForm;
