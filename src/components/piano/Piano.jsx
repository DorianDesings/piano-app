import { useState } from 'react';
import { KEYS } from '../../constants/keys';
import Key from '../key/Key';
import { StyledPiano } from './styles';

const Piano = ({ showNotes }) => {
	console.log(KEYS.length);
	return (
		<StyledPiano>
			{KEYS.map(key => (
				<Key key={key.id} {...key} />
			))}
		</StyledPiano>
	);
};

export default Piano;
