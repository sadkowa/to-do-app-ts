import React from "react";
import Todo from "../models/todo";

import classes from '../modules/TodoItem.module.css'

const TodoItem: React.FC<{ item: Todo; onDelete:(id:string)=>void }> = ({ item, onDelete }) => {
	return <li 
	className={classes.item}
	onClick={()=> onDelete(item.id)}
	>{item.text}</li>;
};

export default TodoItem;
