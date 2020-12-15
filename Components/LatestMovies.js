import React from "react";

export default function LatestMovies() {
	return (
		<>
			<div className="accordian">
				<div className="accor-image">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMvd0dse_ewVSHOKPkZlYC0p-b4C-aABAJQ&usqp=CAU" alt="Image" />
				</div>

				<div className="accor">
					<div className="head">
						<h2>Opening This Week</h2>
					</div>
				</div>

				<div className="accor">
					<div className="head">
						<h2>Now Playing</h2>
					</div>

					<div className="body">
						<div className="body-image">
							<img src="https://cdn.vox-cdn.com/thumbor/83lO8PRxbVy8-Y37oAZUBtTvFG0=/0x0:4096x2160/1400x1050/filters:focal(1416x380:2070x1034):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64749197/The_Lion_King_dt1_still_1__1_.0.jpg" />
						</div>
						<div className="movie-profile">
							<h3 className="movie-name">The Lion King</h3>
							<h4 className="revenue">$537.7M</h4>
						</div>
						<div className="rating">
							<h4><span>7.8</span></h4>
						</div>
					</div>

					<div className="body">
						<div className="body-image">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMvd0dse_ewVSHOKPkZlYC0p-b4C-aABAJQ&usqp=CAU" />
						</div>
						<div className="movie-profile">
							<h3 className="movie-name">It Chapter Two</h3>
							<h4 className="revenue">$17.0M</h4>
						</div>
						<div className="rating">
							<h4><span>7.0</span></h4>
						</div>
					</div>

					<div className="body">
						<div className="body-image">
							<img src="https://upload.wikimedia.org/wikipedia/en/b/b1/Rambo_-_Last_Blood_official_theatrical_poster.jpg" />
						</div>
						<div className="movie-profile">
							<h3 className="movie-name">Rambo Last Blood</h3>
							<h4 className="revenue">$64.7M</h4>
						</div>
						<div className="rating">
							<h4><span>7.8</span></h4>
						</div>
					</div>

					<div className="body">
						<div className="body-image">
							<img src="https://movieposters2.com/images/1641648-b.jpg" />
						</div>
						<div className="movie-profile">
							<h3 className="movie-name">Hustlers</h3>
							<h4 className="revenue">$16.8M</h4>
						</div>
						<div className="rating">
							<h4><span>6.8</span></h4>
						</div>
					</div>

					<div className="body">
						<div className="body-image">
							<img src="https://images.immediate.co.uk/production/volatile/sites/3/2019/09/DowntonAbbey-clean_S06-KA-fafe982.jpg?quality=90&resize=620,413" />
						</div>
						<div className="movie-profile">
							<h3 className="movie-name">Downtown Abbey</h3>
							<h4 className="revenue">$31.0M</h4>
						</div>
						<div className="rating">
							<h4><span>7.8</span></h4>
						</div>
					</div>

					<h2>More Results</h2>
				
				</div>

				<div className="accor">
					<div className="head">
						<h2>Coming Soon</h2>
					</div>
				</div>

				<div className="accor">
						<div className="head">
							<h2>Around The Web</h2>
						</div>
				</div>
			</div>

			

		</>
		)
}