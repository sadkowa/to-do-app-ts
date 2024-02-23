import React from "react";
import Todo from "../models/todo";

import classes from '../modules/TodoItem.module.css'

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
	return <li className={classes.item}>{item.text}</li>;
};

export default TodoItem;
