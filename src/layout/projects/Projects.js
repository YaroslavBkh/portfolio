import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../../assets/projects';

const Projects = ({ dropdown, toggleDropdown, expand, collapse }) => {
	const controls = (
		<img
			className="toggle-icon"
			custom="projects"
			src={dropdown.projects ? collapse : expand}
			alt="expand"
		/>
	);

	return (
		<div
			custom="projects"
			className="section projects"
			onClick={toggleDropdown}
		>
			<h3 custom="projects" className="dropdown-text">
				Things I have built so far
			</h3>
			{!dropdown.projects && controls}
			{dropdown.projects &&
				projects.map(project => (
					<ProjectItem project={project} key={project.name} />
				))}
			{dropdown.projects && controls}
		</div>
	);
};

export default Projects;
