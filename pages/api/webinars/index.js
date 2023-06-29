import {
  createWebinar,
  getAllWebinars,
  updateWebinar,
  deleteWebinar,
} from 'knex_database/controllers/webinarController'
import { getToken } from 'next-auth/jwt'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  const session = await unstable_getServerSession(req, res, authOptions)
  // Create
  if (token && session.user.role.toLowerCase() === 'administrador') {
    if (req.method === 'POST') {
      createWebinar(req, res)
    }
  }

  // Read
  if (req.method === 'GET') {
    getAllWebinars(req, res)
  }
}
