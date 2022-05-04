import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
			<div className="container">
				<ul className="navbar-nav mr-auto">
					<NavLink className="navbar-brand" hrefLang="https://henok.us" to="/">
						Henok
					</NavLink>
					<li className="nav-item">
						<NavLink className="nav-link" activeClassName="active" to="/">
							Home
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink className="nav-link" activeClassName="active" to="/cruds">
							CRUDs
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeClassName="active"
							to="/cruds/new"
						>
							Create
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeClassName="active"
							to="/cruds/grid-view"
						>
							Grid View
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeClassName="active"
							to="/cruds/list-view"
						>
							List View
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
