import { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";

import TodoList from "./todoList";
import TodoForm from "./todoForm";

// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

const TodoMatrix = (props) => {
	//
	const [todos, setTodos] = useState([]);

	function setupStorage() {
		let storage = window.localStorage;

		let todos = storage.getItem("todos");
		todos = JSON.parse(todos);

		setTodos(todos);

		// let lists = storage.getItem("lists");
		// lists = JSON.parse(lists);
	}
	useEffect(() => {
		setupStorage();
		console.log("sfdsf");
	}, []);
	useEffect(() => {
		console.log(todos);
	}, [todos]);

	function saveTodos() {
		let storage = window.localStorage;

		let jsonTodos = JSON.stringify(todos);
		storage.setItem("todos", jsonTodos);
		console.log("Saved...");
	}

	return (
		<div className="matrix">
			<div>
				<Grid
					container
					direction="row"
					// alignItems="center"
					justify="center"
					spacing={2}
					className="matrix"
				>
					<Grid item className="list">
						<TodoList todos={todos} />
					</Grid>
					<Grid item>
						<TodoList todos={todos} />
					</Grid>
				</Grid>
				<div className="save-button" onClick={saveTodos}>
					Save Button
				</div>

				<TodoForm />
			</div>
		</div>
	);
};

export default TodoMatrix;
