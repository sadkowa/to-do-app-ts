import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {

  const items = [new Todo("learn React"), new Todo("learn TypeScript")];
	return (
		<div>
			<Todos items={items}/>
		</div>
	);
}

export default App;
