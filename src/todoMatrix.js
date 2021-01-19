import TodoList from "./todoList";
import TodoForm from "./todoForm";
import { useState, useEffect } from "react";

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
				<TodoList todos={todos} />
				<TodoList />
				<div className="save-button" onClick={saveTodos}>
					Save Button
				</div>
				<TodoForm />
			</div>
		</div>
	);
};

export default TodoMatrix;
