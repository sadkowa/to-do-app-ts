import "./App.css";
import Todos from "./components/Todos";

function App() {

  const items = ['learn React', 'learn TypeScript']
	return (
		<div>
			<Todos items={items}/>
		</div>
	);
}

export default App;
