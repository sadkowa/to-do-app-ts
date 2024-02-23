import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from '../modules/Todos.module.css'

const Todos: React.FC<{
	items: Todo[];
	onDelete: (id: string) => void;
}> = ({ items, onDelete }) => {
	return (
		<ul className={classes.todos}>
			{items.map((item) => (
				<TodoItem onDelete={onDelete} key={item.id} item={item} />
			))}
		</ul>
	);
};

export default Todos;
