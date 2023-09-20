import Todos from './Todos';
import Comments from './Comments';

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
