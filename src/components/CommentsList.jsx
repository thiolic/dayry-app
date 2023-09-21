import { useTodosContext } from '../todosContext';
import CommentsItem from './CommentsItem'

const CommentsList = () => {
	const { activeTodo } = useTodosContext();

	return (
		<>
			{!activeTodo && <p>There are no comments</p>}
			{activeTodo &&
				<ul className="comments__list">
					{activeTodo.comments.map(comment => <CommentsItem {...comment} key={comment.id} />)}
				</ul>
			}
		</>
	)
}

export default CommentsList;
