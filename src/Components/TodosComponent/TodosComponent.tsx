"use client";

import React from "react";
import Form from "next/form";
import { addTodo } from "@/actions/addTodoAction";
import Button from "../Button/Button";
import TodosComponentList from "./TodosComponentList";
import TodosComponentStyles from "./TodosComponent.module.scss";
import TodoComponentText from "./TodoComponentText";
import { Todo } from "@prisma/client";

interface TodosComponentInterface {
  todos: Todo[];
}

const TodosComponent = ({ todos }: TodosComponentInterface) => {
  const [optimisticTodos, addOptimisticTodo] = React.useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    },
  );

  const [selectedTodo, setSelectedTodo] = React.useState<string | undefined>(
    undefined,
  );

  const formDataHandler = async (formData: FormData) => {
    const content = formData.get("content");
    addOptimisticTodo({
      group_id: Math.random(),
      id: Math.random(),
      name: content as string,
      text: todos
        .filter((todoName) => todoName.name === selectedTodo)
        .toString(),
    });
    await addTodo(formData);
  };

  return (
    <div className={TodosComponentStyles.Todo}>
      <div className={TodosComponentStyles.Todo_list}>
        <TodosComponentList
          setTodo={setSelectedTodo}
          optimisticTodos={optimisticTodos}
        />
      </div>
      <TodoComponentText text={selectedTodo} />
      <div className={TodosComponentStyles.Todo_form}>
        <Form
          action={formDataHandler}
          className={TodosComponentStyles.Todo_form_inner}
        >
          <input
            type="text"
            name="content"
            placeholder="Write your todo..."
            required
          />
          <Button />
        </Form>
      </div>
    </div>
  );
};

export default TodosComponent;
