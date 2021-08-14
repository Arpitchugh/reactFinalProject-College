import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Siderbar';
import Users from '../Components/Users';
import './dashboard.css';
import Products from '../Components/Products';
import Transaction from '../Components/Transaction';
import Categories from '../Components/Categories';
import Orders from '../Components/Orders';
import UserForm from '../Components/UserForm';
import DashboardPanel from '../Components/DashboardPanel';
import ProductForm from '../Components/ProductForm';

function Dashboard(props) {
	return (
		<div class="m-dashboard">
			<div className="d-top-nav">
				<Header />
			</div>
			<div className="content-wrap">
				<div className="d-sidebar">
					<Sidebar />
				</div>
				<div className="d-main">
					<Switch>
						<Route
							path={`${props.match.path}/users/new`}
							component={UserForm}
						/>
						<Route
							path={`${props.match.path}/users/update/:id`}
							component={UserForm}
						/>
						<Route path={`${props.match.path}/users`} component={Users} />
						<Route
							path={`${props.match.path}/products/new`}
							component={ProductForm}
						/>
						<Route path={`${props.match.path}/products`} component={Products} />
						<Route
							path={`${props.match.path}/transactions`}
							component={Transaction}
						/>
						<Route
							path={`${props.match.path}/categories`}
							component={Categories}
						/>
						<Route path={`${props.match.path}/orders`} component={Orders} />
						<Route path={`${props.match.path}/`} component={DashboardPanel} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
