import { PrismaClient } from "@prisma/client";
import TodoListStyles from "./TodoListStyles.module.scss";

const db = new PrismaClient();

const TodoList = async () => {
	const todos = await db.todolist.findMany();
	return (
		<ul className={TodoListStyles.TodoList}>
			{todos.map(todoItem => (
				<li key={todoItem.id} className={TodoListStyles.TodoList_Item}>
					{todoItem.name}
				</li>
			))}
		</ul>
	);
};

export default TodoList;
