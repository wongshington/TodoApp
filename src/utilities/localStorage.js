export const save = (key, data) => {
	let storage = window.localStorage;
	let jsonData = JSON.stringify(data);
	storage.setItem(key, jsonData);
};
