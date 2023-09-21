import NewTodoItemForm from './NewTodoItemForm';
import TodosList from './TodosList';

const Todos = () => {
	return (
		<div className="todos">
			<h2 className="todos__title">Items</h2>
			<NewTodoItemForm />
			<TodosList />
		</div>
	)
}

export default Todos;
