// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const TodoItem = ({ todo, deleteTodo, handleComplete, index }) => {
	// for such a basic component like this we could alternatively use a functional component
	// and defer all prop management to the parent
	let completedVar = todo.complete ? "Completed" : "Mark Complete?";
	let disabled = todo.complete ? "disabled" : "";
	// add the class for disabled if a todo is marked as complete
	// const classes = useStyles();
	return (
		<Card variant="outlined" className="todo-item">
			<Typography color="textPrimary" className="item-header">
				{todo.description}
			</Typography>
			{/* <div className="item-buttons"> */}
			<Button
				variant="outlined"
				size="medium"
				color="primary"
				className={"button" + ` ${disabled}`}
				onClick={(e) => handleComplete(e, todo.description, index)}
			>
				{completedVar}
			</Button>
			<Button
				variant="outlined"
				size="medium"
				color="secondary"
				className="button"
				onClick={(e) => deleteTodo(e, todo.description, index)}
			>
				Delete?
			</Button>
			{/* </div> */}
		</Card>
	);
};

export default TodoItem;
