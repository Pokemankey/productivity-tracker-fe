"use server";

import { cookies } from "next/headers";

const API_URL = "http://localhost:3000";

async function refreshSession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.toString();

  const res = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: { cookie },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Refresh failed");
  }

  const setCookieHeaders = res.headers.getSetCookie();

  setCookieHeaders.forEach((cookieString) => {
    const [nameValue, ...attributes] = cookieString.split("; ");
    const [name, value] = nameValue.split("=");

    const options: any = {};
    attributes.forEach((attr) => {
      const [key, val] = attr.split("=");
      const lowerKey = key.toLowerCase();

      if (lowerKey === "max-age") options.maxAge = parseInt(val);
      else if (lowerKey === "expires") options.expires = new Date(val);
      else if (lowerKey === "path") options.path = val;
      else if (lowerKey === "domain") options.domain = val;
      else if (lowerKey === "secure") options.secure = true;
      else if (lowerKey === "httponly") options.httpOnly = true;
      else if (lowerKey === "samesite") options.sameSite = val as any;
    });

    cookieStore.set(name, value, options);
  });
}

export async function apiServerFetch(
  path: string,
  options: RequestInit = {},
  retry = true,
) {
  const cookieStore = await cookies();
  const cookie = cookieStore.toString();

  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      cookie,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
    ...options,
  });

  if (res.status === 401 && retry) {
    try {
      await refreshSession();
      return apiServerFetch(path, options, false);
    } catch {
      throw new Error("Session expired");
    }
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Something went wrong");
  }

  const setCookieHeaders = res.headers.getSetCookie();
  if (setCookieHeaders.length > 0) {
    setCookieHeaders.forEach((cookieString) => {
      const [nameValue, ...attributes] = cookieString.split("; ");
      const [name, value] = nameValue.split("=");

      const options: any = {};
      attributes.forEach((attr) => {
        const [key, val] = attr.split("=");
        const lowerKey = key.toLowerCase();

        if (lowerKey === "max-age") options.maxAge = parseInt(val);
        else if (lowerKey === "expires") options.expires = new Date(val);
        else if (lowerKey === "path") options.path = val;
        else if (lowerKey === "domain") options.domain = val;
        else if (lowerKey === "secure") options.secure = true;
        else if (lowerKey === "httponly") options.httpOnly = true;
        else if (lowerKey === "samesite") options.sameSite = val as any;
      });

      cookieStore.set(name, value, options);
    });
  }

  return res.json();
}
