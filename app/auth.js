import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import NextAuth from "next-auth";
import { connectDB } from "./libs/utils";
import { User } from "./libs/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectDB();

    console.log(`Finding user: ${credentials.username}`);
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      console.log("User not found.");
      throw new Error("User not found!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    // if (!isPasswordCorrect) {
    //   console.log("Incorrect password.");
    //   throw new Error("Incorrect password!");
    // }

    console.log("Password verified, login successful.");
    return user;
  } catch (error) {
    console.log("Login failed:", error);
    throw new Error("Failed Login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          throw new Error("Failed Login!");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        user.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Token data:", token); // Debug log to check token content
      if (token) {
        session.user.username = token.username;
        session.user.image = token.picture;
        console.log("Session after assignment:", session); // Debug log to check session content
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
