import React from "react";

export default function TweetCard() {
	return (
		<>
			<div className="tweetCard">
				<div className="logoTwitter">
					<img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" alt="twitterlogo"/>
				</div>
				<div className="header">
						<div className="profile-thumbnail">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png"
							alt="imdblogo" />
						</div>
						<div className="profile-name">
							<h3>IMDb</h3>
							<h4>@IMDb</h4>
						</div>

						<div className="option">
							<h3><span>:</span></h3>
						</div>
				</div>

				<div id="inner">
					<h2>Which Stars Were Almost in "Game of Thrones"?</h2>
					<p>Nec semper ut augue gravida rhoncus ligula. Dapibus montes curabitur luctus viverra cubilia.</p>
					<img className="tweetImg" src="https://images.livemint.com/img/2020/12/10/600x338/2827acf644444de8a0924b16bbd69b01-2827acf644444de8a0924b16bbd69b01-0_1607610653899_1607610694235.jpg" alt="image" />
				</div>

			</div>
		</>
		)
}