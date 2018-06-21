import React, { Component } from 'react';

class ProfilePage extends Component {
	render() {
		return(
			<div id="top">
				<div className="topbar clearfix">
					<a href="index.html">
						<ul className="brands clearfix">
							<li className="insta-logo"></li>
							<li className="insta-logo-type"></li>
						</ul>
					</a>
					<input type="text" className="text-field search" placeholder="Search"/>
					<ul className="links">
						<li className="link explore-icon explore"></li>
						<li className="link notifications">
							<div className="like-icon"></div>
						</li>
						<a href="profilepage.html"><li className="link user-icon profile"></li></a>
					</ul>
				</div>
			</div>
		);
	}
}

export default ProfilePage;