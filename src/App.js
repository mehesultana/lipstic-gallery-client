import Home from './pages/Home/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/shared/Header/Header';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route>
						<Home path="/" />
					</Route>
					<Route>
						<Home path="/home" />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
