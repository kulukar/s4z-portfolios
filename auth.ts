import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const password = credentials?.password;

        if (typeof password !== "string") {
          return null;
        }

        const encodedHash = process.env.ADMIN_PASSWORD_HASH_BASE64;

        if (!encodedHash) {
          console.error("ADMIN_PASSWORD_HASH_BASE64 is not configured.");
          return null;
        }

        const passwordHash = Buffer.from(encodedHash, "base64").toString(
          "utf8",
        );

        if (passwordHash.length !== 60 || !passwordHash.startsWith("$2")) {
          console.error("Invalid admin password hash.");
          return null;
        }

        const isValid = await bcrypt.compare(password, passwordHash);

        if (!isValid) {
          return null;
        }

        return {
          id: "admin",
          name: "Admin",
        };
      },
    }),
  ],
});
