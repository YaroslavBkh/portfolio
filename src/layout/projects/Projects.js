import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../../assets/projects';

const Projects = () => {
	return (
		<div>
			<h2>Things I have built so far</h2>
			{projects.map(project => (
				<ProjectItem project={project} key={project.name} />
			))}
		</div>
	);
};

export default Projects;
