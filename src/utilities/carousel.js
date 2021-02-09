import { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import ToolBar from "@material-ui/core/ToolBar";

// import { save } from "../utilities/localStorage";
import TodoList from "../todos/todoList";
// import TodoForm from "./todoForm";

const Carousel = (props) => {
	//

	let sampleTod = { complete: false, description: "Walk the Dog", listId: 1 };
	let sampleTod2 = { complete: false, description: "Dalk the Wog", listId: 2 };
	let sampleTod3 = { complete: false, description: "Talk dhe Wog", listId: 3 };
	const [todos, setTodos] = useState({
		1: [sampleTod],
		2: [sampleTod2],
		3: [sampleTod3],
	});

	let sampleList = { id: 1, name: "List #1", color: "green" };
	let sampleList2 = { id: 2, name: "List #2", color: "purple" };
	let sampleList3 = { id: 3, name: "List #3", color: "cyan" };
	const [lists, setLists] = useState({
		1: sampleList,
		2: sampleList2,
		3: sampleList3,
	});

	let todoLists = Object.values(lists).map((list) => (
		<Grid key={`id: ${todos[list.id]}`} item className="list">
			<TodoList todos={todos[list.id]} name={list.name} color={list.color} />
		</Grid>
	));

	return (
		<div>
			<ToolBar />
			<div className="carousel">{todoLists}</div>
		</div>
	);
};

export default Carousel;
