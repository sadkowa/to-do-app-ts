import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	const items = [new Todo("learn React"), new Todo("learn TypeScript")];
	return (
		<div>
			<NewTodo />
			<Todos items={items} />
		</div>
	);
}

export default App;
