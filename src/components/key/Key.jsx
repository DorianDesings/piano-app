import { StyledKey, StyledKeyContainer } from './styles';

const Key = ({ note }) => {
	return (
		<StyledKeyContainer>
			<StyledKey $note={note}>{note}</StyledKey>
		</StyledKeyContainer>
	);
};

export default Key;
