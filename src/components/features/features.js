import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';

import Main from '../main/main';

import './features.css';

const rocketImiges = {
	'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  other: 'starship',
}

const RELLAX_SPEED = 14;

const Features = (props) => {
	const {
		name,
		height,
		diameter,
		mass,
		payload_weights: payloadWeights,
		description,
	} = props;

  return (
		<>
			<Main rocket = {name}/>
    	<section className="features">
	  		<h2 className="features-title">
	  			{name}<br/>
					Overview
	  		</h2>
	  		<div className="overview">

	  			<table className="table">
	  				<caption className="table-title">
	  					Size
	  				</caption>
	  				<thead>
	  					<tr>
	  						<td className="table-column">HEIGHT</td>
								<td className="table-column">{height.meters} m / {height.feet} ft</td>
	  					</tr>
	  					<tr>
	  						<td className="table-column">DIAMETER</td>
								<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
	  					</tr>
	  					<tr>
	  						<td className="table-column">MASS</td>
	  						<td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
	  					</tr>
							{
								payloadWeights.map((item, i) => {
									return (
										<tr key={i}>
											<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
	  									<td className="table-column">{item.kg} kg / {item.lb} lb</td>
										</tr>
									);
								})
							}
	  				</thead>
	  			</table>
					<RellaxWrapper
						speed = {RELLAX_SPEED}
					>
	  				<img
								src={`./img/${
									rocketImiges.hasOwnProperty(name)
										? rocketImiges[name]
										: rocketImiges.other
								}.png`}
	  						alt="rocket"
	  						className="rocket"
	  						data-rellax-speed="14"
	  				/>
					</RellaxWrapper>
	  			<article>
	  				<h3 className="features-subtitle">DESCRIPTION</h3>
	  				<p className="features-text">
							{description}
	  				</p>
	  			</article>
	  		</div>
	  	</section>
		</>
  );
};

export default Features;
