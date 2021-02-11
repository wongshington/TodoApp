export const nextListId = (lists) => {
	let newId = 1;
	let arr = Object.keys(lists).sort((a, b) => a - b);

	arr.forEach((id) => {
		if (id >= newId) newId = id + 1;
	});
	return newId;
};
