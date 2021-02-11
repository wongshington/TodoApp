import React from "react";
import "./todo.css";
import { nextListId } from "../utilities/todoHelper";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { description: "", complete: false, listId: 1 };
	}

	update(field) {
		return (e) => this.setState({ [field]: e.target.value });
	}

	clearField() {
		this.setState({ description: "", complete: false, listId: 1 });
	}

	render() {
		let { lists } = this.props;
		let listOptions = Object.values(lists).map((list) => (
			<MenuItem key={list.name + list.id} value={list.id}>
				{list.name}
			</MenuItem>
		));

		let newListId = nextListId(lists);

		return (
			<div className="todo-form">
				<TextField
					// label="New Todo"
					variant="outlined"
					color="secondary"
					placeholder="Write your Todo's description here!"
					value={this.state.description}
					onChange={this.update("description")}
				/>

				<Select
					value={this.state.listId}
					onChange={this.update("listId")}
					input={<Input />}
					className="list-select"
				>
					<MenuItem key={"NewList0"} value={newListId}>
						New List?
					</MenuItem>
					{listOptions}
				</Select>

				<Button
					variant="contained"
					color="primary"
					// className="submit-button"
					onClick={(e) => {
						e.preventDefault();
						this.props.handleSubmit(this.state);
						this.clearField();
					}}
				>
					Add Todo
				</Button>
			</div>
		);
	}
}

export default TodoForm;
