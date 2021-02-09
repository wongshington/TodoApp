import { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import ToolBar from "@material-ui/core/ToolBar";

import { save } from "../utilities/localStorage";
import TodoList from "./todoList";
import TodoForm from "./todoForm";

// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

// matrix creates the right amount of list components
const TodoMatrix = (props) => {
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

	function setupStorage() {
		let storage = window.localStorage;

		let todos = storage.getItem("todos");
		todos = JSON.parse(todos);

		// let lists = storage.getItem("lists");
		// lists = JSON.parse(lists);
	}
	// useEffect(() => {
	// 	// comp did mount
	// 	// setupStorage();
	// 	() => {
	// 		console.log("Unmounting...");
	// 	};
	// }, []);

	useEffect(() => {
		console.log("todos", todos);
	}, [todos]);

	function validTodo(tod) {
		let errs = [];
		if (tod.description.trim().length < 1) {
			errs.push("Don't forget to name your todo!");
		}
		if (!tod.listId) {
			tod.listId = 1;
		}
		return errs;
	}

	function saveTodos(newTodo) {
		let newObj = JSON.parse(JSON.stringify(todos));
		const errs = validTodo(newTodo);

		if (errs.length == 0) {
			// save todo into todos

			newObj[newTodo.listId].push(newTodo);
		} else {
			console.log("these are the todo errors...", errs);
		}

		save("todos", newObj);
		setTodos(newObj);

		console.log("Saved...");
	}

	let todoLists = Object.values(lists).map((list) => (
		<Grid key={`id: ${todos[list.id]}`} item className="list">
			<TodoList todos={todos[list.id]} name={list.name} color={list.color} />
		</Grid>
	));

	return (
		<div className="matrix">
			<ToolBar />
			<div>
				<Grid
					container
					direction="row"
					justify="center"
					spacing={2}
					className="matrix"
				>
					{todoLists}
				</Grid>

				<TodoForm handleSubmit={saveTodos} />
			</div>
		</div>
	);
};

export default TodoMatrix;

/* ToolBar positioning per Material docs: https://material-ui.com/components/app-bar/ */
