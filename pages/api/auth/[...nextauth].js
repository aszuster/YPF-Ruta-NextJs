import { getUserByUsername } from 'knex_database/controllers/userController'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions = {
  strategy: 'jwt',
  providers: [
    CredentialsProvider({
      name: 'YPF USERS',
      authorize: async (credentials) => {
        const { user, password } = credentials
        try {
          const getUser = await getUserByUsername(user)
          if (!getUser) {
            throw new Error('Usuario o contraseña incorrecta')
          }
          const passwordCorrect = getUser
            ? await bcrypt.compare(password, getUser.password)
            : false
          if (!passwordCorrect) {
            throw new Error('Usuario o contraseña incorrectas')
          }
          return {
            user: getUser.userName,
            role: getUser.role,
            name: getUser.name,
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user.email || user
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SIGNIN_PRIVATE_KEY,
    encryption: true,
  },
  pages: {
    signIn: '/login',
    signOut: '/',
  },
}

export default NextAuth(authOptions)
