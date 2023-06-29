import {
  deleteUser,
  getUserById,
  updateUser,
} from 'knex_database/controllers/userController'
import { getToken } from 'next-auth/jwt'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  if (token) {
    if (req.method === 'GET') {
      getUserById(req, res)
    }
    // Update
    if (req.method === 'PUT') {
      updateUser(req, res)
    }

    // Delete
    if (req.method === 'DELETE') {
      deleteUser(req, res)
    }
  } else {
    res.status(401)
  }
}
