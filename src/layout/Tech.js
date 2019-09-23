import React from 'react';

const Tech = () => {
	return (
		<div className="techlist">
			<h3 className="dropdown-text">How I do things</h3>
			<div>
				<h4 className="techlist-header">Frontend</h4>
				<ul className="techlist-item">
					<li>JavaScript(ES2015+)</li>
					<li>React 16+</li>
					<li>HTML5/JSX</li>
					<li>CSS3/SCSS</li>
					<li>Responsive layout</li>
				</ul>
			</div>
			<div>
				<h4 className="techlist-header">Backend (WIP)</h4>
				<ul className="techlist-item">
					<li>Node</li>
					<li>Express</li>
					<li>MongoDB</li>
					<li>JWT</li>
				</ul>
			</div>
			<div>
				<h4 className="techlist-header">Workflow</h4>
				<ul className="techlist-item">
					<li>Windows/Linux</li>
					<li>Git</li>
					<li>VSCode</li>
					<li>Devtools</li>
					<li>Google. Lots of it</li>
				</ul>
			</div>
			<div>
				<h4 className="techlist-header">Code quality</h4>
				<ul className="techlist-item">
					<li>ESLint</li>
					<li>Prettier</li>
					<li>Documenting</li>
					<li>Standards</li>
					<li>Mentor reviews</li>
				</ul>
			</div>
			<div>
				<h4 className="techlist-header">Teamwork</h4>
				<ul className="techlist-item">
					<li>Code reviews</li>
					<li>Agile</li>
					<li>ZenHub</li>
					<li>Git PR</li>
					<li>We don't push to master</li>
				</ul>
			</div>
		</div>
	);
};

export default Tech;
