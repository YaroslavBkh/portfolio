import React from 'react';

const Bio = ({ dropdown, toggleDropdown, expand, collapse }) => {
	return (
		<div custom="story" className="bio" onClick={toggleDropdown}>
			<span custom="story" className="dropdown-text">
				My story
			</span>
			{
				<img
					className="toggle-icon"
					custom="story"
					src={dropdown.story ? collapse : expand}
					alt="expand"
				/>
			}
			{dropdown.story && (
				<div className="narrative">
					<p>
						Hello and thanks for stopping by! Allow me to share the story of my
						journey with you. My first GitHub commit dates back to August 2018.
						I've had my ups and downs since then, but nothing to stop me from
						letting you read this. <br />
						Back when I was a full-time English tutor at{' '}
						<a href="https://skyeng.ru">Skyeng,</a> the largest online English
						school in CIS countries, one of my students, a DevOps professional,
						inspired me to try learning the web. Greatest career choice so far!
						The very fact that all the knowledge I needed to get started was so
						easily accessible sparked even more enthusiasm inside me. There are
						so many ideas still waiting to be brought to life, and the Web is
						the most efficient way I know so far to let it happen. This is why
						am taking this journey.
					</p>
					<h4>Experience</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
						dolorum. Et dolorum facere odit veritatis! Expedita provident ea
						facere tempore hic repellat, qui odio voluptas dignissimos a
						excepturi aut impedit! Ex, itaque molestiae hic cumque sed libero
						iste sequi error iusto natus at, dicta aspernatur odit culpa. Aut
						itaque perspiciatis eius quisquam fugit delectus optio laboriosam,
						quas voluptas! Ipsum, et. Omnis dicta recusandae quaerat quidem quo
						quas natus quisquam, at numquam rerum voluptate sapiente illum
						beatae voluptatibus animi autem laudantium doloribus quasi optio.
						Aliquid expedita eius, odit placeat sequi voluptate. Illum, atque
						tempora. Facere rerum sed omnis molestiae voluptatum aliquam in et!
						Quidem odit soluta rerum inventore eius veritatis quis alias. Porro
						maxime, quia quidem quas distinctio eveniet cum eligendi! Saepe
						error repellat quaerat odio minima ut nihil dolorum officia, minus
						tenetur est? Expedita doloremque beatae quis fugiat earum
						voluptatibus rerum. Provident sint ratione cupiditate et eveniet sed
						dolores. Soluta?
					</p>
				</div>
			)}
		</div>
	);
};

export default Bio;
