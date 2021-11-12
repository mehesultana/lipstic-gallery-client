import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';

const Dashboard = () => {
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
						<NavLink exact to="/order" activeClassName="activeClicked">
							<CDBSidebarMenuItem>
								<BiShoppingBag /> My Orders
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/payment" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="table">Payment</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/profile" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="star">Review</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/analytics" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="user">Analytics</CDBSidebarMenuItem>
						</NavLink>
					</CDBSidebarMenu>
				</CDBSidebarContent>
			</CDBSidebar>
		</div>
	);
};

export default Dashboard;
