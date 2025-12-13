"use server";

import { revalidatePath } from "next/cache";
import { apiServerFetch } from "./api.actions";
import type { GoalFormData } from "@/components/modals/CreateGoalModal";

export async function createGoalAction(data: GoalFormData) {
  await apiServerFetch("/goal", {
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidatePath("/dashboard");
}
