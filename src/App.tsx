import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	const initItems = [new Todo("learn React"), new Todo("learn TypeScript")];

	const [items, setItems] = useState<Todo[]>([]);

	const addToDoHandler = (item: string) => {
		// setItems([...items, new Todo(item)]);
		setItems(prevItems=> [...prevItems, new Todo(item)]);
	};
	return (
		<div>
			<NewTodo onAddToDo={addToDoHandler} />
			<Todos items={items} />
		</div>
	);
}

export default App;
