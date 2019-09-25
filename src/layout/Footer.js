import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<a
				href="https://github.com/CodeAgony/portfolio"
				className="portfolio-repo"
			>
				See the code
			</a>
			<div className="contacts">
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/yaroslav-bukhta-3a508a122/">
							<img
								src="https://img.icons8.com/color/48/000000/linkedin.png"
								alt="linkedin profile"
								className="footer-icon"
							/>
						</a>
					</li>
					<li>
						<a href="mailto:yaroslav.bkh@gmail.com?subject=Job offer">
							<img
								src="https://img.icons8.com/color/48/000000/gmail.png"
								className="footer-icon"
								alt="write me an email"
							/>
						</a>
					</li>
					<li>
						<a href="https://github.com/CodeAgony">
							<img
								src="https://img.icons8.com/material/48/000000/github.png"
								alt="github profile"
								className="footer-icon"
							/>
						</a>
					</li>
				</ul>
			</div>
			<ul />
		</div>
	);
};

export default Footer;
