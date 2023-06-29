import {
  updateArticle,
  deleteArticle,
  getArticleById,
} from 'knex_database/controllers/articleController'
import { getToken } from 'next-auth/jwt'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import fs from 'fs'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

const deleteFile = (path) => {
  fs.unlink(`./public/uploads/${path}`, (err) => {
    if (err) console.log(err)
  })
}

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  const session = await unstable_getServerSession(req, res, authOptions)
  if (req.method === 'GET') {
    return getArticleById(req, res)
  }
  if (token && session.user.role.toLowerCase() === 'administrador') {
    //Update
    if (req.method === 'PUT') {
      const { img_path } = req.query
      if (img_path && req.body.picture) {
        deleteFile(img_path)
      }
      return updateArticle(req, res)
    }
    // Delete
    if (req.method === 'DELETE') {
      const { img_path } = req.query
      if (img_path) {
        deleteFile(img_path)
      }
      return deleteArticle(req, res)
    }
  }
}
