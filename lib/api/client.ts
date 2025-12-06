
export async function apiFetch(path: string, options: RequestInit = {}) {
    const baseUrl = "http://localhost:3000";

    const accessToken = typeof window !== "undefined"
        ? localStorage.getItem("access_token")
        : null;

    const headers = {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}`}: {}),
        ...options.headers,
    };

    const res = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers,
    });

    
}