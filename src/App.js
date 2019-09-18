import React from 'react';
import Navbar from './layout/Navbar';
import Banner from './layout/Banner';
import Bio from './layout/Bio';
import Projects from './layout/projects/Projects';
import Tech from './layout/Tech';
import Footer from './layout/Footer';

function App() {
	return (
		<div className="appWrapper">
			<Navbar />
			<Banner />
			<Bio />
			{/* <Projects />
			<Tech />
			<Footer /> */}
		</div>
	);
}

export default App;
