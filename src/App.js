import Home from './pages/Home/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Lipsticks from './pages/Home/Lipsticks/Lipsticks';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import AddReview from './pages/Home/AddReview/AddReview';
import NotFound from './pages/NotFound/NotFound';
import Signup from './pages/Signup/Signup';
import PrivateRoute from '../src/pages/Login/PrivateRoute/PrivateRoute';

function App() {
	return (
		<div>
			<AuthProvider>
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
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/signup">
							<Signup />
						</Route>
						<PrivateRoute path="/addreview">
							<AddReview />
						</PrivateRoute>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
