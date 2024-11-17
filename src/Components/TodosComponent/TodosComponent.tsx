"use client";

import TodosComponentStyles from "./TodosComponentStyles.module.scss";
import Form from "next/form";
import { addTodo } from "@/actions/addTodoAction";
import { useOptimistic } from "react";
import Button from "../Button/Button";

interface Todo {
	id: number;
	name: string;
}

interface TodosComponentInterface {
	todos: Todo[];
}

const TodosComponent = ({ todos }: TodosComponentInterface) => {
	const [optimisticTodos, addOptimisticTodo] = useOptimistic(
		todos,
		(state, newTodo: Todo) => {
			return [...state, newTodo];
		}
	);

	const formDataHandler = async (formData: FormData) => {
		const content = formData.get("content");
		addOptimisticTodo({
			id: Math.random(),
			name: content as string,
		});
		await addTodo(formData);
	};

	return (
		<>
			<Form action={formDataHandler} className={TodosComponentStyles.TodoForm}>
				<input
					type="text"
					name="content"
					placeholder="Write your todo..."
					required
				/>
				<Button />
			</Form>

			<ul className={TodosComponentStyles.TodoList}>
				{optimisticTodos.map(todoItem => (
					<li key={todoItem.id} className={TodosComponentStyles.TodoList_Item}>
						{todoItem.name}
						{/* <button>X</button> */}
					</li>
				))}
			</ul>
		</>
	);
};

export default TodosComponent;
