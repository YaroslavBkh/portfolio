import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => {
	const { name, description, tech, liveLink, screenUrl } = project;

	return (
				<h4>Tech used:</h4>
				<ul>
					{tech.map(i => (
						<li key={i}>{i}</li>
					))}
				</ul>
		</div>
	);
};

ProjectItem.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		liveLink: PropTypes.string.isRequired,
		tech: PropTypes.string.isRequired,
		screenUrl: PropTypes.string.isRequired
	}).isRequired
};

export default ProjectItem;
