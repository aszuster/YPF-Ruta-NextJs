import {
  create,
  update,
  getById,
  getAll,
  deleteById,
} from 'knex_database/services/articles'

// Create
export const createArticle = async (req, res) => {
  try {
    await create(req.body)
    return res.status(200).json({ status: 'success' })
  } catch (error) {
    return res.status(501).json({ error: error.message })
  }
}

// Read
export const getAllArticles = async (req, res) => {
  const { q, category, tag, limit, page, sortBy, sort } = req.query
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
    const list = await getAll(where, whereLike, limit, page, sortBy, sort)
    return res.json(list)
  } catch (error) {
    // return error
    console.log(error)
  }
}
export const getArticleById = async (req, res) => {
  const { id } = req.query
  try {
    const item = await getById(id)
    return res.status(200).json(item)
  } catch (error) {
    return res.status(500).send(error)
  }
}

// Update
export const updateArticle = async (req, res) => {
  try {
    const edit = await update(req.body)
    return res.send(edit)
  } catch (error) {
    return res.status(500).send(error)
  }
}

//Delete
export const deleteArticle = async (req, res) => {
  const { id } = req.query
  try {
    const deleteId = await deleteById(id)
    return res.send(deleteId)
  } catch (error) {
    return res.status(500).send(e)
  }
}
