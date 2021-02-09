import "./todo.css";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const TodoItem = ({ todo, deleteTodo, handleComplete, index }) => {
	// for such a basic component like this we could alternatively use a functional component
	// and defer all prop management to the parent
	let completedVar = todo.complete ? "Completed" : "Mark Complete?";
	// let disabled = todo.complete;
	// add the class for disabled if a todo is marked as complete
	// const classes = useStyles();
	return (
		<Card variant="outlined" className="todo-item">
			<Typography color="textPrimary" className="item-header">
				{todo.description}
			</Typography>

			<div className="todo-button-group">
				<IconButton
					color="primary"
					size="medium"
					variant="contained"
					disabled={todo.complete}
					onClick={(e) => handleComplete(e, index)}
				>
					{todo.complete ? (
						<CheckBoxIcon aria-label="undo to do" />
					) : (
						<CheckBoxOutlineBlankIcon aria-label="complete to do" />
					)}
				</IconButton>
				<IconButton
					color="secondary"
					size="medium"
					variant="contained"
					onClick={(e) => deleteTodo(e, index)}
				>
					<DeleteIcon aria-label="delete to do" />
				</IconButton>
			</div>
		</Card>
	);
};

export default TodoItem;
