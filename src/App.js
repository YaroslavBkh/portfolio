import React from 'react';
import Navbar from './layout/Navbar';
import Bio from './layout/Bio';
import Projects from './layout/projects/Projects';
import ProjectItem from './layout/projects/ProjectItem';

function App() {
	return (
		<div className="appWrapper">
			<Navbar />
			<Bio />
			<Projects />
			<ProjectItem />
		</div>
	);
}

export default App;
