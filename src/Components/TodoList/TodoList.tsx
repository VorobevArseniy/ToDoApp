import { PrismaClient } from "@prisma/client";
import TodoListStyles from "./TodoListStyles.module.scss";

const test = [
  { id: "0", content: "Do smthin" },
  { id: "1", content: "Do smthin else" },
];

const db = new PrismaClient();

const TodoList = async () => {
  const todos = await db.todolist.findMany();
  return (
    <ul className={TodoListStyles.TodoList}>
      {todos.map((todoItem) => (
        <li key={todoItem.id} className={TodoListStyles.TodoList_Item}>
          {todoItem.name}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
