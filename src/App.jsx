import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Piano from './components/piano/Piano';

const App = () => {
	const [showNotes, setShowNotes] = useState(true);
	return (
		<>
			<GlobalStyles />
			<Piano showNotes={showNotes} />
		</>
	);
};

export default App;
