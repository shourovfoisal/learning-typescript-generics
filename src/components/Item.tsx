type Props<T, P> = {
	item: T;
	person: P;
	handleClick: (item: T) => T;
	handlePerson: (person: P) => P;
};

// arrow function version
export const Item = <T, P>({ item, person }: Props<T, P>) => {
	return (
		<div>
			Item: {JSON.stringify(item)} | Person: {JSON.stringify(person)}
		</div>
	);
};

// regular function version
// export function Item<T, P>({ item, handleClick }: Props<T, P>) {
// 	return (
// 		<Fragment>
// 			{JSON.stringify(item)}
// 			<button onClick={() => handleClick(item)}>Hello</button>
// 		</Fragment>
// 	);
// }
