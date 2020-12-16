import React from "react";
function TweetCard({heading, para, imgUrl}) {
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
					<h2>{heading}</h2>
					<p>{para}</p>
					<img className="tweetImg" src={imgUrl} alt="tweetimage" />
				</div>

			</div>
		</>
		)
}

export default TweetCard;