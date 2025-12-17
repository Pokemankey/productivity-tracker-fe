"use server";

import { revalidatePath } from "next/cache";
import { apiServerFetch } from "./api.actions";
import { TaskFormData } from "@/components/modals/CreateTaskModal";

export async function createTaskAction(data: TaskFormData) {
  await apiServerFetch("/task", {
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidatePath("/dashboard");
}
