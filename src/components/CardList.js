import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
	return (
		<div>
			{characters.map((user, i) => {
				return (
					<Card
						key={i}
						id={characters[i].id}
						src={characters[i].src}
						name={characters[i].name}
						powers={characters[i].powers}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
