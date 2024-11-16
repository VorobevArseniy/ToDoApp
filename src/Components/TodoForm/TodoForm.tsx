"use client";

import Form from "next/form";
import TodoFormStyles from "./TodoFormStyles.module.scss";
import { addTodo } from "@/actions/addTodoAction";

const TodoForm = () => {
  return (
    <Form
      action={async (formData) => await addTodo(formData)}
      className={TodoFormStyles.content}
    >
      <input
        type="text"
        name="content"
        placeholder="Write your todo..."
        required
      />
      <button>Add</button>
    </Form>
  );
};

export default TodoForm;
