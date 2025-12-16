const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

async function refreshSession() {
  const res = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Refresh failed");
  }
}

export async function apiFetch(
  path: string,
  options: RequestInit = {},
  retry = true,
) {
  const res = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (res.status === 401 && retry) {
    try {
      await refreshSession();
      return apiFetch(path, options, false);
    } catch {
      window.location.href = "/login";
      throw new Error("Session expired");
    }
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Something went wrong");
  }

  return res.json();
}
