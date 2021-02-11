import React from "react";
import "./todo.css";

import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

import TodoItem from "./todoItem.js";

// list gets their own list info from storage
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
		this.deleteTodo = this.deleteTodo.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}

	componentDidMount() {
		this.setState(this.props);
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

	updateListName(e) {
		//
		console.log("edit list name", e.target.value);
	}

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
				<h3 className="header">
					<Input
						defaultValue={this.props.name}
						onChange={(e) => this.updateListName(e)}
					/>
				</h3>
				<Grid container className="list-items">
					{todos}
				</Grid>
			</div>
		);
	}
}

export default TodoList;
