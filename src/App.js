import React, { useState } from 'react';
import Navbar from './layout/Navbar';
import Banner from './layout/Banner';
import Bio from './layout/Bio';
import Projects from './layout/projects/Projects';
import Tech from './layout/Tech';
import Footer from './layout/Footer';

function App() {
	const [dropdown, setDropdown] = useState({
		story: false,
		experience: false,
		projects: false
	});

	const toggleDropdown = event => {
		// If there's target has custom identifier property set,
		// toggle corresponding value in state to eventually
		// toggle target's visibility
		const togglable = event.target.attributes.custom;
		const toggle = togglable => {
			switch (togglable.value) {
				case 'story':
					dropdown.story
						? setDropdown({ ...dropdown, story: false })
						: setDropdown({ ...dropdown, story: true });
					break;
				case 'experience':
					dropdown.experience
						? setDropdown({ ...dropdown, experience: false })
						: setDropdown({ ...dropdown, experience: true });
					break;
				case 'projects':
					dropdown.projects
						? setDropdown({ ...dropdown, projects: false })
						: setDropdown({ ...dropdown, projects: true });
					break;
				default:
					break;
			}
		};

		togglable && toggle(togglable);
	};

	return (
		<div className="appWrapper">
			<Navbar />
			<Banner />
			<Bio dropdown={dropdown} toggleDropdown={toggleDropdown} />
			{/* <Projects /> */}
			{/*<Tech />
			<Footer /> */}
		</div>
	);
}

export default App;
