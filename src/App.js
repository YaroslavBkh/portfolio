import React from 'react';
import Navbar from './layout/Navbar';
import Bio from './layout/Bio';
import Experience from './layout/Experience';
import Projects from './layout/projects/Projects';
import Tech from './layout/Tech';
import Footer from './layout/Footer';

function App() {
	return (
		<div className="appWrapper">
			<Navbar />
			<Bio />
			<Experience />
			<Projects />
			<Tech />
			<Footer />
		</div>
	);
}

export default App;
