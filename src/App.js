import Aside from './components/Aside';
import Main from './components/Main';

import './App.css';

function App() {
	return (
		<div className="app">
			<div className="app-container">
				<Aside />
				<Main />
			</div>
		</div>
	);
}

export default App;
