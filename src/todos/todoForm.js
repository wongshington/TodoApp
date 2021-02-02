import React from "react";
import Button from "@material-ui/core/Button";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { description: "", complete: false };
	}

	update(field) {
		return (e) => this.setState({ [field]: e.target.value });
	}

	clearField() {
		this.setState({ description: "", complete: false, listId: 1 });
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
