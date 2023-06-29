import {
  updateCategory,
  deleteCategory,
} from 'knex_database/controllers/categoryController'
import { getToken } from 'next-auth/jwt'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  const session = await unstable_getServerSession(req, res, authOptions)
  if (token && session.user.role.toLowerCase() === 'administrador') {
    // Update
    if (req.method === 'PUT') {
      return updateCategory(req, res)
    }
    // Delete
    if (req.method === 'DELETE') {
      return deleteCategory(req, res)
    }
  }
}
