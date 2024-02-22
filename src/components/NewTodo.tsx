import React, { FormEvent, useRef } from "react";

const NewTodo: React.FC<{onAddToDo: (text:string)=> void}> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
	
        const enteredValue = todoTextInputRef.current!.value

        if (enteredValue.trim().length === 0) {
            return
        }

        props.onAddToDo(enteredValue)

	};
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodo;
