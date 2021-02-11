export const save = (key, data) => {
	let storage = window.localStorage;
	let jsonData = JSON.stringify(data);
	storage.setItem(key, jsonData);
};

export const get = (key) => {
	let storage = window.localStorage;
	let jsonData = storage.getItem(key);
	let data = JSON.parse(jsonData);
	return data;
};
