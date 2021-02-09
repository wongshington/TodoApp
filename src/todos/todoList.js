import React from "react";
import "./todo.css";

import Grid from "@material-ui/core/Grid";

import TodoItem from "./todoItem.js";
// import TodoForm from "./todoForm.js";

// list gets their own list info from storage
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props; // don't do this

		this.deleteTodo = this.deleteTodo.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
		//  add this line to ensure that the delete/handleComplete function has access to the state of the parent
	}

	componentWillReceiveProps(nextProps) {
		console.log("nextProps", nextProps);
		if (nextProps.todos) {
			this.setState(nextProps);
		}
	}

	deleteTodo(e, idx) {
		e.preventDefault();
		console.log("delete");

		let newTodos = [...this.state.todos];
		newTodos.splice(idx, 1);
		console.log(newTodos);

		this.setState({ todos: newTodos });
	}

	handleComplete(e, idx) {
		e.preventDefault();
		console.log("toggle complete");
		let newTodos = this.state.todos.slice();
		// copy todos

		newTodos[idx].complete = !newTodos[idx].complete;
		// we can avoid iterating over the array of todos if we pass the index in
		// and we no longer need the description argument

		// newTodos = newTodos.reduce((acc, curr)=> {

		//     if (curr.description === description){
		//       curr.completed = !(curr.completed)
		//     }
		//     acc.push(curr)
		//     return acc
		// }, [] )

		this.setState({ todos: newTodos });
	}

	// handleSubmit(e, newTodo, cb) {
	// 	e.preventDefault();
	// 	if (newTodo.description.length === 0) {
	// 		alert("Description Can't Be Blank");
	// 	} else {
	// 		let newTodoList = this.state.todos.slice();
	// 		newTodoList.push(newTodo);

	// 		this.setState({ todos: newTodoList });

	// 		cb();
	// 		// with the addition of a state management library like Redux,
	// 		// this is definitely something that would be placed as a callback to a promise
	// 		// thus ensuring that it only gets called when the todo has actually been saved or accepted
	// 	}
	// }

	render() {
		let todos = [];
		if (this.state.todos) {
			todos = this.state.todos.map((todo, i) => (
				<Grid key={todo.description} item>
					<TodoItem
						index={i}
						deleteTodo={this.deleteTodo}
						handleComplete={this.handleComplete}
						todo={todo}
					/>
				</Grid>
			));
		}

		return (
			<div>
				<h3 className="header">{this.props.name}</h3>
				<Grid container className="list-items">
					{todos}
				</Grid>
			</div>
		);
	}
}

export default TodoList;
