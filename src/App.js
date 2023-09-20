import Aside from './components/Aside';
import Main from './components/Main';

import './App.css';
import { TodosContextProvider } from './todosContext';

function App() {
	return (
		<TodosContextProvider>
			<div className="app">
				<div className="app-container">
					<Aside />
					<Main />
				</div>
			</div>
		</TodosContextProvider>
	);
}

export default App;
