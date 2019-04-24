import React, { Component } from 'react';

const SmurfsList = (props) => {
	console.log('SMRF LIST', props);
	return (
		<div className="smurfsList">
			<h1>Village Residents</h1>
			<ul>
				{props.smurfs.map((smurf) => {
					return (
						<div className="Smurf" key={smurf.id}>
							<h3>{smurf.name}</h3>
							<strong>{smurf.height} tall</strong>
							<p>{smurf.age} smurf years old</p>
							<button onClick={() => props.deleteSmurf(smurf.id)}>Delete</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default SmurfsList;
