"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  console.log("Access Token:", accessToken);

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  console.log("Response:", result);

  return result;
};