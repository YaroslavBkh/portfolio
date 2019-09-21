import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => {
	const { name, description, tech, liveLink, screenUrl } = project;

	return (
		<div className="project-item">
			{/* Set border color based on project name */}
			<div className={`project-name border-${name}`}>
				<h3>
					<a href={liveLink}>{name}</a>
				</h3>
				<a
					href={`https://github.com/CodeAgony/${name}`}
					alt={`to GitHub repository of the ${name} project`}
					className="project-github"
				>
					GitHub
				</a>
			</div>
			<h4 className="project-descr">{description}</h4>
			<div className="project-tech">
				<p>Tech used: {tech.join(', ')}</p>
			</div>
			<img
				src={screenUrl}
				className={`project-scr border-${name} border-${name}-img `}
				alt="project screenshot"
			/>
		</div>
	);
};

ProjectItem.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		liveLink: PropTypes.string.isRequired,
		tech: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
		screenUrl: PropTypes.string.isRequired
	}).isRequired
};

export default ProjectItem;
