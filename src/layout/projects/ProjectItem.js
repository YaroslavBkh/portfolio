import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => {
	const { name, description, tech, liveLink, screenUrl } = project;

	return (
		<div className="project-item">
			{/* Set border color based on project name */}
			<div className={`project-name border-${name}`}>
				<div className="tooltip">
					<h4>
						<a href={liveLink}>{name}</a>
					</h4>
					<span className="project-descr tooltiptext">{description}</span>
				</div>
				<h4 className="tooltip tooltip-tech" data-tip={tech}>
					Tech
					<span className="tooltiptext tooltiptext-tech">
						{tech.join(', ')}
					</span>
				</h4>
				<h4>
					<a
						href={`https://github.com/CodeAgony/${name}`}
						alt={`to GitHub repository of the ${name} project`}
						className="project-github"
					>
						GitHub
					</a>
				</h4>
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
