import TodosComponent from "@/Components/TodosComponent/TodosComponent";
import page from "./page.module.css";
import { PrismaClient, Todo } from "@prisma/client";

const db = new PrismaClient();

const Home = async () => {
  const todos: Todo[] = await db.todo.findMany();
  return (
    <main className={page.container}>
      <TodosComponent todos={todos} />
    </main>
  );
};

export default Home;
