import React from "react";
import Todo from "../models/todo";
import Item from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
			{/* {items.map(item=> <li key={item.id}>{item.text}</li>)} */}
		</ul>
	);
};

export default Todos;
