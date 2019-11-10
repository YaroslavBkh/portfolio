import React, { useState } from 'react';
import expand from './assets/icons/expand.png';
import collapse from './assets/icons/collapse.png';
import Navbar from './layout/Navbar';
import Banner from './layout/Banner';
import Bio from './layout/Bio';
import Projects from './layout/projects/Projects';
import Tech from './layout/Tech';
import Footer from './layout/Footer';

function App() {
	const [dropdown, setDropdown] = useState({
		story: false,
		tech: false,
		projects: false
	});

	const toggleDropdown = event => {
		// If there's target has custom identifier property set,
		// toggle corresponding value in state to eventually
		// toggle target's visibility
		const togglable = event.target.attributes.custom;

		// Could't find a good way to turn string string value
		// into dot notation to keep it DRY.
		// Swith will have to do for now
		const toggle = togglable => {
			switch (togglable.value) {
				case 'story':
					dropdown.story
						? setDropdown({ ...dropdown, story: false })
						: setDropdown({ ...dropdown, story: true });
					break;
				case 'tech':
					dropdown.tech
						? setDropdown({ ...dropdown, tech: false })
						: setDropdown({ ...dropdown, tech: true });
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

	const props = {
		dropdown: dropdown,
		toggleDropdown: toggleDropdown,
		expand: expand,
		collapse: collapse
	};

	return (
		<div className="appWrapper">
			<Navbar />
			<Banner />
			<div className="content">
				<Bio {...props} />
				<Projects {...props} />
				<Tech {...props} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
