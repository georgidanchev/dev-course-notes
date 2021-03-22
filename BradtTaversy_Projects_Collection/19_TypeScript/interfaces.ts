{
	function showTodo(todo: { title: string; text: string }) {
		console.log(todo.title + ' ' + todo.text);
	}

	const myTodo1 = {
		title: 'Trash',
		text: 'Take out trash',
	};

	// showTodo(myTodo);
}

{
	interface Todo {
		title: string;
		text: string;
	}

	function showTodo(todo: Todo) {
		console.log(todo.title + ' ' + todo.text);
	}

	const myTodo2 = {
		title: 'Trash',
		text: 'Take out trash',
	};

	showTodo(myTodo2);
}
