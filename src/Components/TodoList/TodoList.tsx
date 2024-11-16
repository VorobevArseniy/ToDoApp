import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const TodoList = async () => {
	const todos = await db.todolist.findMany();
	return (
		<ul>
			{todos.map(todoItem => (
				<li key={todoItem.id}>{todoItem.name}</li>
			))}
		</ul>
	);
};

export default TodoList;
