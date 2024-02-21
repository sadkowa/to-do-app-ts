import React from "react";

const NewTodo = () => {
	return (
		<form>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" />
			<button type="submit"></button>
		</form>
	);
};

export default NewTodo;
