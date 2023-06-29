import {
  createArticle,
  getAllArticles,
} from 'knex_database/controllers/articleController'
import { getToken } from 'next-auth/jwt'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  const session = await unstable_getServerSession(req, res, authOptions)
  if (req.method === 'GET') {
    return getAllArticles(req, res)
  }
  if (token && session.user.role.toLowerCase() === 'administrador') {
    // Create
    if (req.method === 'POST') {
      return createArticle(req, res)
    }
  }
}
