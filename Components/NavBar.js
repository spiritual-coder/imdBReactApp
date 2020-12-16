import React from "react";

export default function NavBar() {
	return (
		<>
			<div className="navigation">
				<div className="logo">
					<img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
					alt="logo"
					/>
				</div>
				<div className="navigation-links">
					<h2 className="navItem">Movies & TV Shows <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span></h2>
					<h2 className="navItem">Events & Photos <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span></h2>
					<h2 className="navItem">News & Community <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span></h2>
				</div>
			</div>
		</>
		)
}