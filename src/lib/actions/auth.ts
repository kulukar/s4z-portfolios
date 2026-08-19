"use server";

import { AuthError } from "next-auth";

import { signIn, signOut } from "../../../auth";

export async function loginAdmin(
  _previousState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      password: formData.get("password"),
      redirectTo: "/admin",
    });

    return undefined;
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return "Password salah.";
      }

      return "Gagal melakukan login.";
    }

    throw error;
  }
}

export async function logoutAdmin() {
  await signOut({
    redirectTo: "/admin/login",
  });
}
