import React from 'react';

const Banner = () => {
	return (
		<div className="banner" noncustom="lol">
			<div className="avatar">
				<img
					src="https://avatars3.githubusercontent.com/u/42055200?s=460&v=4"
					alt="author"
				/>
			</div>
			<div className="intro">
				<h1 className="name focused">Yaroslav Bukhta</h1>
				<h3 className="occupation">
					Aspiring web developer, enthusiastic problem-solver, relentless
					div-flinger
				</h3>
			</div>
			<div className="motto-wrap">
				<p className="motto">
					<span>Best practices</span>
					<span>Cutting-edge tech</span>
					<span>Consistent code for humans</span>
				</p>
			</div>
		</div>
	);
};

export default Banner;
