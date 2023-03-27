import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";


export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Ecommerce',
            credentials: {},
            async authorize(credentials) {
                const authResponse = await fetch("/user/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                });
                if (!authResponse.ok) {
                    return null;
                }
                const user = await authResponse.json();

                return user;
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        }
    },
    debug: process.env.NODE_ENV === 'development'
});
