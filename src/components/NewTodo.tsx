import React, { FormEvent, useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "../modules/NewTodo.module.css";

const NewTodo: React.FC = () => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const todosContext = useContext(TodosContext)

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();

		const enteredValue = todoTextInputRef.current!.value;

		if (enteredValue.trim().length === 0) {
			return;
		}

		todosContext.addTodo(enteredValue);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodo;
