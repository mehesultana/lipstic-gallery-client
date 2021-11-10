import Home from './pages/Home/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Lipsticks from './pages/Home/Lipsticks/Lipsticks';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/lipsticks">
						<Lipsticks />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
