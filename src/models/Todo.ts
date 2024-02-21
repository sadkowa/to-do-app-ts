class Todo {
	id: string;
	text: string;

	constructor(text: string) {
		this.id = Math.random().toString();
		this.text = text;
	}
}

// type Todo = {
// 	id: string;
// 	text: string;
// };
// interface Todo {
// 	id: string;
// 	text: string;
// };

export default Todo;
