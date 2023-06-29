import {
  create,
  update,
  getAll,
  deleteById,
  getById,
} from 'knex_database/services/users'
import bcrypt from 'bcrypt'
// Create
export const createUser = async (req, res) => {
  try {
    const data = req.body
    const hashPass = await bcrypt.hashSync(data.password, 10)
    data.password = hashPass
    const save = await create(data)
    return res.send(save)
  } catch (e) {
    return res.status(500).send(e)
  }
}

// Read
export const getAllUsers = async (req, res) => {
  const { username } = req.query
  const where = {}
  const whereLike = {}
  if (username) {
    whereLike.key = 'username'
    whereLike.value = username
  }
  try {
    const list = await getAll(where, whereLike)
    return res.json(list)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export const getUserById = async (req, res) => {
  const { id } = req.query
  try {
    const item = await getById(id)
    return res.json(item)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export const getUserByUsername = async (username) => {
  const where = {}
  const whereLike = {}
  if (username) {
    whereLike.key = 'username'
    whereLike.value = username
  }
  try {
    const list = await getAll(where, whereLike)
    return list.response[0]
  } catch (error) {
    return error
  }
}
// Update
export const updateUser = async (req, res) => {
  try {
    const data = req.body
    const hashPass = await bcrypt.hashSync(data.password, 10)
    data.password = hashPass
    const edit = await update(data)
    return res.send(edit)
  } catch (error) {
    return res.status(500).send(error)
  }
}

//Delete
export const deleteUser = async (req, res) => {
  const { id } = req.query
  try {
    const deleteId = await deleteById(id)
    return res.send(deleteId)
  } catch (error) {
    return res.status(500).send(e)
  }
}
