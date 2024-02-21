class Todo {
    id: string;
    text: string;

    constructor(text: string) {
        this.id = new Date().toDateString();
        this.text = text
    }

}

export default Todo