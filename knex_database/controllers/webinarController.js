import {
  create,
  update,
  getById,
  getAll,
  deleteById,
} from 'knex_database/services/webinars'

// Create
export const createWebinar = async (req, res) => {
  try {
    const save = await create(req.body)
    return res.send(save)
  } catch (e) {
    return res.status(500).send(e)
  }
}

// Read
export const getAllWebinars = async (req, res) => {
  const { q, category, tag, limit, sortBy, sort, page } = req.query
  const where = {}
  const whereLike = {}
  if (category) {
    where.category = category
  }
  if (tag) {
    where.tag = tag
  }
  if (q) {
    whereLike.key = 'title'
    whereLike.value = q
  }
  try {
    const list = await getAll(where, whereLike, limit, sortBy, sort, page)
    return res.json(list)
  } catch (error) {
    return res.status(500).send(error)
  }
}
export const getWebinarById = async (req, res) => {
  const { id } = req.query
  try {
    const item = await getById(id)
    return res.status(200).json(item)
  } catch (error) {
    return res.status(500).send(error)
  }
}

// Update
export const updateWebinar = async (req, res) => {
  try {
    const edit = await update(req.body)
    return res.send(edit)
  } catch (error) {
    return res.status(500).send(e)
  }
}

//Delete
export const deleteWebinar = async (req, res) => {
  const { id } = req.query
  try {
    const deleteId = await deleteById(id)
    return res.send(deleteId)
  } catch (error) {
    return res.status(500).send(e)
  }
}
