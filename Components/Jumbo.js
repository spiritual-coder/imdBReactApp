import React from "react";


export default function Featured() {

	return (
		<>
			<div className="jumboBox">
				<div className="mainvideo">
					<iframe title="mvid" width="560" height="340" src="https://www.youtube.com/embed/7TavVZMewpY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div className="followus">
					<h2><span><i className="fa fa-facebook" aria-hidden="true"></i></span></h2>
					<h3>Follow us on Facebook</h3>
				</div>
				<div className="snapshot">
					<h2><span><i className="fa fa-smile-o" aria-hidden="true"></i></span></h2>
					<h3>IMDb Snapshot</h3>
				</div>
				<div className="othervideo">
					<iframe title="ovid" width="560" height="315" src="https://www.youtube.com/embed/WHXxVmeGQUc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div className="viewall">
					<h3>VIEW ALL</h3>
				</div>
				<div className="iMDb">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png" alt="imdbicon" />
				</div>
			</div>
		</>
		)
}