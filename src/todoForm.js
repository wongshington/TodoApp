import React from "react";
import Button from "@material-ui/core/Button";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { description: "", complete: false };
		this.handleSubmit = this.props.handleSubmit;
		this.clearField = this.clearField.bind(this);
	}
	update(field) {
		return (e) => this.setState({ [field]: e.target.value });
	}

	clearField() {
		this.setState({ description: "", complete: false });
	}

	handleSubmit(e, newTodo, cb) {
		e.preventDefault();
		if (newTodo.description.length === 0) {
			alert("Description Can't Be Blank");
		} else {
			let newTodoList = this.state.todos.slice();
			newTodoList.push(newTodo);

			this.setState({ todos: newTodoList });

			cb();
			// with the addition of a state management library like Redux,
			// this is definitely something that would be placed as a callback to a promise
			// thus ensuring that it only gets called when the todo has actually been saved or accepted
		}
	}

	render() {
		return (
			<div className="todo-form">
				<input
					className="form-field"
					type="text"
					placeholder="Write your Todo's description here!"
					value={this.state.description}
					onChange={this.update("description")}
				/>
				<Button
					variant="contained"
					color="primary"
					// className="submit-button"
					onClick={(e) => this.handleSubmit(e, this.state, this.clearField)}
				>
					Add Todo
				</Button>
			</div>
		);
	}
}

export default TodoForm;
