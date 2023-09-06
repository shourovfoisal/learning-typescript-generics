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
			handleClick={item => {
				console.log("first");
			}}
			handlePerson={person => {
				console.log(person);
			}}
		/>
	);
}

export default App;
