import "./App.css";
import { Item } from "./components/Item";

function App() {
	type Item = {
		size: number;
		weight: number;
	};

	const item: Item = {
		size: 10,
		weight: 20,
	};

	const person = "Shourov";

	return (
		<Item<Item, string>
			item={item}
			person={person}
			handleClick={item => item}
			handlePerson={person => person}
		/>
	);
}

export default App;
