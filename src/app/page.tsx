import TodosComponent from "@/Components/TodosComponent/TodosComponent";
import page from "./page.module.scss";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const Home = async () => {
	const todos = await db.todolist.findMany();
	return (
		<main className={page.content}>
			<h1>Todos page</h1>
			<TodosComponent todos={todos} />
		</main>
	);
};

export default Home;
