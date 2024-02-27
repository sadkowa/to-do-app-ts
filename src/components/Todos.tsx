import React, {useContext} from "react";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

import classes from '../modules/Todos.module.css'

const Todos: React.FC= () => {

	const {items, removeTodo} = useContext(TodosContext)
	console.log(items)

	return (
		<ul className={classes.todos}>
			{items.map((item) => (
				<TodoItem onDelete={removeTodo} key={item.id} item={item} />
			))}
		</ul>
	);
};

export default Todos;
