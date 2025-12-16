import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const cookieHeader = () => cookieStore.toString();

  let res = await fetch(`${API_URL}/auth/me`, {
    headers: { Cookie: cookieHeader() },
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
