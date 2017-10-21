import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="http://bulma.io">
						<img
							src="http://bulma.io/images/bulma-logo.png"
							alt="Bulma: a modern CSS framework based on Flexbox"
							width="112"
							height="28"
						/>
					</a>
					{/* <a className="navbar-item">Home</a>
					<a className="navbar-item">Workouts</a> */}
				</div>
				<a className="navbar-item">Home</a>
				<a className="navbar-item">Workouts</a>
				<a className="navbar-item">Workouts</a>

				<nav className="navbar-end">
					<a className="navbar-item">Register</a>
				</nav>
			</nav>
		);
	}
}

export default Header;
