import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions= {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "enter your password"
                }
            },
            async authorize(credentials) {
                const user = {id: "23", name: "Dave", password: "pass1234"}
                if(credentials?.username=== user.name && credentials?.password === user.password){
                    return user;
                }else {
                    return null;
                }
            }
        }),
    ],
    callbacks: {
    async redirect({ url, baseUrl }) {
      return "/news"; // 🚀 Redirect to /news after login
    },
  },

  pages: {
    signIn: "/auth/signin", // only if you use a custom sign-in UI
  },
}