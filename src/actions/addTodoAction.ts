"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const db = new PrismaClient();

export const addTodo = async (formData: FormData) => {
  const content = formData.get("content");
  await db.todolist.create({ data: { name: content as string } });

  revalidatePath("/");
};
