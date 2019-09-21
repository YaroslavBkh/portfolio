import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => {
	const { name, description, tech, liveLink, screenUrl } = project;

	return (
		<div className="project-item">
			{/* Set border color based on project name */}
			<h3 className={`project-name border-${name}`}>
				<a href={liveLink}>{name}</a>
				<a className="project-github">GitHub</a>
			</h3>
			<h4 className="project-descr">{description}</h4>
			<div className="project-tech">
				<p>Tech used: {tech.join(', ')}</p>
			</div>
			<img src={screenUrl} className="project-scr" />
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
