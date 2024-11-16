import TodoForm from "@/Components/TodoForm/TodoForm";
import content from "./page.module.scss";
import TodoList from "@/Components/TodoList/TodoList";

const Home = () => {
  return (
    <main className={content.content}>
      <h1>Todos page</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
};

export default Home;
