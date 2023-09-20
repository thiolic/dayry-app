import { useState } from 'react';

const NewTodoItemForm = ({ addTodoItem }) => {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		addTodoItem(title);

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
