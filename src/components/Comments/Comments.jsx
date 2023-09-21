import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';

import { useTodosContext } from '../../todosContext';

const Comments = () => {
	const { activeTodo } = useTodosContext();

	return (
		<div className="comments">
			<h2 className="comments__title">Comments #{activeTodo?.id}</h2>
			<CommentsList />
			<CommentsForm />
		</div>
	)
}

export default Comments;
