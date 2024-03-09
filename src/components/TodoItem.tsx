import React from "react";
import Todo from "../models/todo";

import classes from '../modules/TodoItem.module.css'

const TodoItem: React.FC<{ item: Todo; onDelete:(id:string)=>void }> = ({ item, onDelete }) => {
	return (
		<div className={classes.box}>
			<li className={classes.item} >
				{item.text}
			</li>
			<button className={classes.button} onClick={() => onDelete(item.id)}>X</button>
		</div>
	);

};

export default TodoItem;
