import React from 'react';

const Bio = ({ dropdown, toggleDropdown, expand, collapse }) => {
	const controls = (
		<img
			className="toggle-icon"
			custom="story"
			src={dropdown.story ? collapse : expand}
			alt="expand"
		/>
	);

	return (
		<div
			className="section bio"
			onClick={toggleDropdown}
			id="bio"
			custom="story"
		>
			<h3 className="dropdown-text" custom="story">
				My story
			</h3>
			{!dropdown.story && controls}
			{dropdown.story && (
				<div className="narrative">
					<p>
						Hello and thanks for stopping by! Allow me to share the story of my
						journey with you. My first GitHub commit dates back to August 2018.
						I've had my ups and downs since then, but nothing to stop me from
						letting you read this. <br />
						Back when I was a full-time English tutor at{' '}
						<a href="https://skyeng.ru">Skyeng,</a> the largest online English
						school in CIS countries, one of my students, a DevOps professional,
						inspired me to try learning the web. Greatest career choice so far!
						The very fact that all the knowledge I needed to get started was so
						easily accessible throught the Web itself sparked even more
						enthusiasm inside me. There are so many ideas still waiting to be
						brought to life, and the Web is the most efficient way I know so far
						to let it happen. This is why am taking this journey.
					</p>
					<h4>What I have learned</h4>
					<div>
						<p>
							On my way so far, I have been drawing on the knowledge received
							from such great mentors as{' '}
							<a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/#instructor-1">
								Andrei Neagoie,
							</a>{' '}
							<a href="https://www.udemy.com/modern-react-front-to-back/#instructor-1">
								Brad Traversy,
							</a>{' '}
							<a href="https://github.com/getify/You-Dont-Know-JS">
								Kyle Simpson,
							</a>{' '}
							<a href="https://www.udemy.com/user/47fd83f6-5e4a-4e87-a0f0-519ac51f91b6/">
								Shaun Pelling,
							</a>{' '}
							known as{' '}
							<a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg">
								The Net Ninja.
							</a>{' '}
							All those people and others gave me a solid understanding of how
							things are happening on the web, enough to build things which I am
							proud of myself. Throughout the journey, I've tried to keep track
							of recent changes in technologies I use, which led to the need to
							recently re-learn React to put the hooks functionality under my
							belt. Honestly, I feel lucky to have chosen 2018 as the year to
							start. ES2017 with all the good stuff, embracing Node as a backend
							platform even further with MERN; Flexbox and Grid in full swing,
							mobile-friendly development and many great trends I might have
							missed. While adopting those, I try to keep basic principles in
							mind, such as:
						</p>
						<blockquote>
							<ul>
								<li>
									<strong>Clean, consistent code</strong> — ESLint + popular
									configs
								</li>
								<li>
									<strong>DRY</strong> — by stiving to make solutions flexible
									and dynamic
								</li>
								<li>
									<strong>KISS</strong> — no one benefits from overly
									complicated code, really
								</li>
								<li>
									<strong>Thinking ahead</strong> — the way I am told to build
									things may not be final
								</li>
								<li>
									<strong>Coding for humans</strong> — all above
								</li>
								<li>
									<strong>
										And, most importantly, <i>it's always about the user</i>
									</strong>{' '}
									— they don't see the code. They see the result. No amount of
									beautifully-written code under the hood can make it look
									attractive on the outside (unless it's proper CSS, of course)
								</li>
							</ul>
						</blockquote>
					</div>
				</div>
			)}
			{dropdown.story && controls}
		</div>
	);
};

export default Bio;
