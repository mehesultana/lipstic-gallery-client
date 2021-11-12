import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import Order from '../../Order/Order';
import Payment from '../../Payment/Payment';
import Profile from '../Profile/Profile';
import Review from '../Review/Review';

const Dashboard = () => {
	let { path } = useRouteMatch();
	return (
		<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
			<CDBSidebar textColor="#fff" backgroundColor="#333">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
						Menu
					</a>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
						<NavLink exact to="/dashboard/order" activeClassName="activeClicked">
							<CDBSidebarMenuItem>
								<BiShoppingBag /> My Orders
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/dashboard/payment" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="table">Payment</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/dashboard/review" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="star">Review</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/dashboard/profile" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
						</NavLink>
					</CDBSidebarMenu>
				</CDBSidebarContent>
			</CDBSidebar>
			<div>
				<Switch>
					<Route exact path={path}>
						<DashboardHome></DashboardHome>
					</Route>
					<Order path={`${path}/order`}>
						<Order></Order>
					</Order>
					<Payment path={`${path}/payment`}>
						<Payment></Payment>
					</Payment>
					<Profile path={`${path}/profile`}>
						<Profile></Profile>
					</Profile>
					<Review path={`${path}/review`}>
						<Review></Review>
					</Review>
				</Switch>
			</div>
		</div>
	);
};

export default Dashboard;
