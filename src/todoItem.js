const TodoItem = ({ todo, deleteTodo, handleComplete, index }) => {
	// for such a basic component like this we could alternatively use a functional component
	// and defer all prop management to the parent
	let completedVar = todo.complete ? "Completed" : "Mark Complete?";
	let disabled = todo.complete ? "disabled" : "";
	// add the class for disabled if a todo is marked as complete

	return (
		<div className="todo-item">
			<h2 className="item-header">{todo.description}</h2>
			<div className="item-buttons">
				<input
					className={"button" + ` ${disabled}`}
					type="submit"
					value={completedVar}
					onClick={(e) => handleComplete(e, todo.description, index)}
				/>
				<input
					className="button"
					type="submit"
					value="Delete?"
					onClick={(e) => deleteTodo(e, todo.description, index)}
				/>
			</div>
		</div>
	);
};

export default TodoItem;
