"use client";

import { Todo } from "@prisma/client";

interface TodosComponentListInterface {
  optimisticTodos: Todo[];
  setTodo: (text: string) => void;
}

const TodosComponentList = ({
  optimisticTodos,
  setTodo,
}: TodosComponentListInterface) => {
  // const [isPending, startTransition] = useTransition();
  return (
    <ul>
      {optimisticTodos.map((todoItem) => (
        <li key={todoItem.id}>
          {todoItem.name}
          <button onClick={() => setTodo(todoItem.text as string)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodosComponentList;
