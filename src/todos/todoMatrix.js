import { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";

import TodoList from "./todoList";
import TodoForm from "./todoForm";

// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

const TodoMatrix = (props) => {
	let sampleTod = { complete: false, description: "Walk the Dog", listId: 1 };
	const [todos, setTodos] = useState({ 1: [sampleTod] });
	// const [todos, setTodos] = useState([
	// 	sampleTod,
	// 	{ ...sampleTod, description: "Talk on the phone" },
	// ]);

	function setupStorage() {
		let storage = window.localStorage;

		let todos = storage.getItem("todos");
		todos = JSON.parse(todos);

		// let lists = storage.getItem("lists");
		// lists = JSON.parse(lists);
	}
	useEffect(() => {
		// comp did mount
		setupStorage();
	}, []);
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

	function saveTodos(e, newTodo) {
		e.preventDefault();

		let newObj;

		let errs = validTodo(newTodo);
		if (errs.length == 0) {
			// save todo into todos
			newObj = { ...todos };
			newObj[newTodo.listId] = [...todos[newTodo.listId]].push(newTodo);
		} else {
			console.log("these are the todo errors...", errs);
		}

		let storage = window.localStorage;

		let jsonTodos = JSON.stringify(todos);
		storage.setItem("todos", jsonTodos);
		setTodos(newObj);

		console.log("Saved...");
	}

	let todoLists = Object.values(todos).map((list) => (
		<Grid key={`id: ${todos[list[0].listId]}`} item className="list">
			<TodoList todos={list} />
		</Grid>
	));

	return (
		<div className="matrix">
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
