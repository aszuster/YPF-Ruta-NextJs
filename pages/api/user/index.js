import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from 'knex_database/controllers/userController'
import { getToken } from 'next-auth/jwt'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  const session = await unstable_getServerSession(req, res, authOptions)
  if (token && session.user.role.toLowerCase() === 'administrador') {
    if (req.method === 'GET') {
      return getAllUsers(req, res)
    }
    // Create
    if (req.method === 'POST') {
      return createUser(req, res)
    }
    // Read

    // Update
    if (req.method === 'PUT') {
      return updateUser(req, res)
    }
    // Delete
    if (req.method === 'DELETE') {
      return deleteUser(req, res)
    }
  }
}
