import {
  create,
  update,
  getAll,
  deleteById,
} from 'knex_database/services/categories'

export const createCategory = async (req, res) => {
  try {
    await create(req.body)
    return res.status(200).json({ status: 'success' })
  } catch (error) {
    return res.status(501).json({ error: error.message })
  }
}

export const updateCategory = async (req, res) => {
  try {
    const edit = await update(req.body)
    return res.send(edit)
  } catch (error) {
    return res.status(500).send(e)
  }
}

//Delete
export const deleteCategory = async (req, res) => {
  const { id } = req.query
  try {
    const deleteId = await deleteById(id)
    return res.send(deleteId)
  } catch (error) {
    return res.status(500).send(e)
  }
}

export const getAllCategories = async (req, res) => {
  const { limit, page, sortBy, sort } = req.query
  const where = {}
  const whereLike = {}
  try {
    const list = await getAll(where, whereLike, limit, page, sortBy, sort)
    return res.json(list)
  } catch (error) {
    console.log(error)
    return res.status(501).json({ error: error.message })
  }
}
