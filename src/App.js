import React from 'react';
import Navbar from './layout/Navbar';
import Bio from './layout/Bio';
import Projects from './layout/projects/Projects';

function App() {
	return (
		<div className="appWrapper">
			<Navbar />
			<Bio />
			<Projects />
		</div>
	);
}

export default App;
