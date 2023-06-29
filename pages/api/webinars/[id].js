import {
  updateWebinar,
  deleteWebinar,
  getWebinarById,
} from 'knex_database/controllers/webinarController'
import { getToken } from 'next-auth/jwt'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

const deleteFile = (path) => {
  fs.unlink(`./public/uploads/${path}`, (err) => {
    if (err) console.log(err)
  })
}

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  const session = await unstable_getServerSession(req, res, authOptions)

  // Get by ID
  if (req.method === 'GET') {
    return getWebinarById(req, res)
  }
  if (token && session.user.role.toLowerCase() === 'administrador') {
    //Update
    if (req.method === 'PUT') {
      const { img_path } = req.query //imagen anterior

      // validamos que venga una imagen anterior y una imagen nueva
      if (img_path && req.body.picture) {
        deleteFile(img_path)
      }
      updateWebinar(req, res)
    }

    //Delete
    if (req.method === 'DELETE') {
      const { img_path } = req.query //imagen anterior
      if (img_path) {
        //valido que venga una imagen
        deleteFile(img_path)
      }
      deleteWebinar(req, res)
    }
  }
}
