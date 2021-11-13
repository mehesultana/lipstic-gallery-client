import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, CDBBtn } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';

import Payment from '../../Payment/Payment';
import Profile from '../Profile/Profile';
import Review from '../Review/Review';
import Orders from '../Orders/Orders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddLipstick from '../AddLipstick/AddLipstick';
import ManageLipsticks from '../ManageLipsticks/ManageLipsticks';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
	let { path } = useRouteMatch();
	const { logout } = useAuth();

	return (
		<Container className="dashboard">
			<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
				<CDBSidebar textColor="#fff" backgroundColor="#333">
					<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
						<a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
							Menu
						</a>
					</CDBSidebarHeader>

					<CDBSidebarContent className="sidebar-content">
						<CDBSidebarMenu>
							<NavLink exact to="/dashboard/profile" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/dashboard/orders" activeClassName="activeClicked">
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
							<NavLink exact to="/dashboard/add" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="plus">Add Lipstick</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/dashboard/manage" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="plus">Manage Product</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/dashboard/makeadmin" activeClassName="activeClicked">
								<CDBSidebarMenuItem icon="plus">Make Admin</CDBSidebarMenuItem>
							</NavLink>
							<CDBBtn color="warning" circle onClick={logout} variant="light">
								Logout
							</CDBBtn>
						</CDBSidebarMenu>
					</CDBSidebarContent>
				</CDBSidebar>
				<div>
					<Switch>
						<Route exact path={path}>
							<DashboardHome></DashboardHome>
						</Route>
						<Route path={`${path}/orders`}>
							<Orders></Orders>
						</Route>
						<Route path={`${path}/payment`}>
							<Payment></Payment>
						</Route>
						<Route path={`${path}/profile`}>
							<Profile></Profile>
						</Route>
						<Route path={`${path}/review`}>
							<Review></Review>
						</Route>
						<Route path={`${path}/add`}>
							<AddLipstick></AddLipstick>
						</Route>
						<Route path={`${path}/manage`}>
							<ManageLipsticks></ManageLipsticks>
						</Route>
						<Route path={`${path}/makeadmin`}>
							<MakeAdmin></MakeAdmin>
						</Route>
					</Switch>
				</div>
			</div>
		</Container>
	);
};

export default Dashboard;
