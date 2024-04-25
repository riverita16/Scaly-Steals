// only ufl sso in final product
// google for testing
// fix nextauth trying to sign up instead of login and failing

import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/User";
import { mongooseConnect } from '@/lib/mongoose';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

      async profile(profile) {
        await mongooseConnect();

        const email = profile.email;
        const name = profile.name;
        const image = profile.picture;

        const exist_user = await User.findOne({ email });
        if (!exist_user) User.create({ email, name, image });

        return {
          id: profile.sub,
          name,
          email,
          image,
        };
      },
    }),

    // With CustomCredentials NEEDS IMPLEMENTING
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await mongooseConnect();

        // check user existance
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw Error("Email or Password doesn't match!");

        // check password
        const matchedPassword = await argon.verify(
          user?.password,
          credentials?.password
        );

        if (!matchedPassword || user.email !== credentials.email)
          throw Error("Email or Password doesn't match!");

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
});