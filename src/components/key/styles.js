import styled from 'styled-components';

const StyledKeyContainer = styled.div`
	position: relative;
	width: 100%;
`;

const StyledKey = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	align-items: end;
	justify-content: center;
	width: auto;
	height: ${({ $note }) => ($note.endsWith('#') ? '30px' : '60px')};
	color: ${({ $note }) => ($note.endsWith('#') ? 'white' : 'black')};
	border: 1px solid ${({ $note }) => ($note.endsWith('#') ? 'white' : 'black')};
	background-color: ${({ $note }) => ($note.endsWith('#') ? 'black' : 'white')};
`;

export { StyledKeyContainer, StyledKey };
