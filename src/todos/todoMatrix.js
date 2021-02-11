import { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import ToolBar from "@material-ui/core/ToolBar";

import { save, get } from "../utilities/localStorage";
import TodoList from "./todoList";
import TodoForm from "./todoForm";

// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

// matrix creates the right amount of list components
const TodoMatrix = (props) => {
	// let storedTodos = get("todos");
	// console.log(stuff);
	// let sampleTod = { complete: false, description: "Walk the Dog", listId: 1 };
	// let sampleTod2 = { complete: false, description: "Dalk the Wog", listId: 2 };
	// let sampleTod3 = { complete: false, description: "Talk dhe Wog", listId: 3 };
	const [todos, setTodos] = useState({});

	let sampleList = { id: 1, name: "List #1", color: "green" };
	let sampleList2 = { id: 2, name: "List #2", color: "purple" };
	let sampleList3 = { id: 3, name: "List #3", color: "cyan" };
	const [lists, setLists] = useState({
		1: sampleList,
		2: sampleList2,
		3: sampleList3,
	});

	useEffect(() => {
		// comp did mount
		let storedTodos = get("todos");
		// debugger;
		setTodos(storedTodos);
		return () => {
			console.log("Unmounting...");
		};
	}, []);

	useEffect(() => {
		// console.log("todos - did mount", todos);
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

		setTodos(newObj);
		save("todos", newObj);

		console.log("Saved...");
	}

	function saveLists(newList) {
		let newObj = JSON.parse(JSON.stringify(lists));
		if (!newObj) newObj = { ...lists, [newList.id]: newList };

		newObj[newList.id] = newList;

		setLists(newObj);
		save("lists", newObj);
	}

	let todoLists = Object.values(lists).map((list, i) => (
		<Grid key={`id: ${i /*todos[list.id].name*/}`} item className="list">
			<TodoList
				todos={todos[list.id]}
				list={list}
				color={list.color}
				editList={(newList) => saveLists(newList)}
			/>
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
					spacing={4}
					className="matrix"
				>
					{todoLists}
				</Grid>

				<TodoForm handleSubmit={saveTodos} lists={lists} />
			</div>
		</div>
	);
};

export default TodoMatrix;

/* ToolBar positioning per Material docs: https://material-ui.com/components/app-bar/ */
