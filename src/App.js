import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import Person from './Components/Person';
import Cities from './Components/Cities';

import Counter from './Components/Counter';
import Counters from './Components/Counters';
import FunCounter from './Components/FunCounter';
import FunCities from './Components/FunCities';
import Title from './Components/Title';
import Users from './Components/Users';
import UserForm from './Components/UserForm';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import User from './Components/User';
import Dashboard from './screens/Dashboard';
import Login from './screens/LoginPanel';
import LoginPanel from './screens/LoginPanel';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/login" component={LoginPanel} />
				<Route path="/dashboard" component={Dashboard} />

				<Route path="/404" component={NotFound} />
				<Redirect from="/" to="/404" />
			</Switch>
		</div>
	);
}

export default App;
