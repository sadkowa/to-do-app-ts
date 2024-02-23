import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	const initItems = [new Todo("learn React"), new Todo("learn TypeScript")];

	const [items, setItems] = useState<Todo[]>([]);

	const addTodoHandler = (item: string) => {
		// setItems([...items, new Todo(item)]);
		setItems((prevItems) => [...prevItems, new Todo(item)]);
	};

	const deleteTodoHandler = (id: string) => {
		setItems((prevItems) => {
			const newItems = prevItems.filter((item) => item.id !== id);

			return newItems;
		});
	};
	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos onDelete={deleteTodoHandler} items={items} />
		</div>
	);
}

export default App;
