import Comments from './Comments/Comments';
import Todos from './Todos/Todos';

const Main = () => {
	return (
		<main className="app-main">
			<div className="app-main__container">
				<Todos />
				<Comments />
			</div>
		</main>
	)
}

export default Main;
