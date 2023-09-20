import Todos from './Todos';
import Comments from './Comments';

function Main() {
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
