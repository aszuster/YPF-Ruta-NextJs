import { getToken } from 'next-auth/jwt'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import formidable from 'formidable'
const secret = process.env.JWT_SIGNIN_PRIVATE_KEY

export const config = {
  api: {
    bodyParser: false,
  },
}

const readFile = (req) => {
  const options = {}
  options.uploadDir = './public/uploads'
  options.filename = (name, ext, path, form) => {
    return Date.now().toString() + '_' + path.originalFilename
  }

  const form = new formidable.IncomingForm(options)
  form
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve({ fields, files })
    })
  })
}

export default async function handler(req, res) {
  const token = await getToken({ req, secret })
  const session = await unstable_getServerSession(req, res, authOptions)
  if (token && session.user.role.toLowerCase() === 'administrador') {
    if (req.method === 'GET') {
      //   return getAllArticles(req, res)
    }
    // Create
    if (req.method === 'POST') {
      const files = await readFile(req)
      res.json({ file: files.files.myImage.newFilename })
    }
  }
}
