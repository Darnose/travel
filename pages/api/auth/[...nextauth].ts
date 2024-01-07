import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { auth } from "../../../src/Firebase/firebase";
import Credentials from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth"; 

export const authOptions : AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(auth, (credentials as any).email!, (credentials as any).password!)
          .then(userCredential => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
}
export default NextAuth(authOptions);