import React from 'react';

const Card = ({ src, name, powers }) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={src} alt='' />
			<h2>{name}</h2>
			<p>{powers}</p>
		</div>
	);
};

export default Card;
