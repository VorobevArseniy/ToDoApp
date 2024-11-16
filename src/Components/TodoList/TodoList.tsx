import { PrismaClient } from "@prisma/client";

const test = [
  { id: "0", content: "Do smthin" },
  { id: "1", content: "Do smthin else" },
];

const db = new PrismaClient();

const TodoList = async () => {
  const todos = await db.todolist.findMany();
  return (
    <ul>
      {todos.map((todoItem) => (
        <li key={todoItem.id}>{todoItem.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
