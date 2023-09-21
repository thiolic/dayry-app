import { useState } from 'react';
import { useTodosContext } from '../todosContext';

const CommentsForm = () => {
	const { activeTodo, addComment } = useTodosContext();
	const [commentText, setCommentText] = useState('');
	const [commentColor, setCommentColor] = useState('#000000');

	const handleChangeCommentColor = ({ target: { value } }) => {
		setCommentColor(value);
	}

	const handleChangeCommentText = ({ target: { value } }) => {
		setCommentText(value);
	}

	const handleCommentSubmit = (e) => {
		e.preventDefault();

		addComment(activeTodo.id, {
			id: Date.now(),
			text: commentText,
			color: commentColor,
		});

		setCommentText('');
		setCommentColor('#000000');
	}

	return (
		<form className="comments__form" onSubmit={handleCommentSubmit}>
			<input onChange={handleChangeCommentColor} type="color" className="comments__form-color" value={commentColor} />
			<textarea placeholder="Type comment here..." required className="comments__form-field" onChange={handleChangeCommentText} value={commentText} />
			<button className="comments__form-button">Add New</button>
		</form>
	)
}

export default CommentsForm;
