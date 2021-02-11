import React from "react";
import "./todo.css";

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
		console.log(lists);
		let listOptions = Object.values(lists).map((list) => (
			<MenuItem value={list.id}>{list.name}</MenuItem>
		));
		return (
			<div className="todo-form">
				{/* <Grid container justify="center" spacing={2}>
					<Grid item xs={12}> */}

				<TextField
					// label="New Todo"
					variant="outlined"
					color="secondary"
					placeholder="Write your Todo's description here!"
					value={this.state.description}
					onChange={this.update("description")}
				/>
				{/* </Grid>
					<Grid item> */}
				<Select
					value={this.state.listId}
					onChange={this.update("listId")}
					input={<Input />}
				>
					<MenuItem value={0}>New List?</MenuItem>
					{listOptions}
				</Select>
				{/* </Grid>
				</Grid> */}
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
