import Home from './pages/Home/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route>
						<Home exact path="/" />
					</Route>
					<Route>
						<Home path="/home" />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
