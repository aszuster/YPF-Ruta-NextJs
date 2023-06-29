import Container from 'knex_database/services/Container'
import mysqlOptions from 'knexfile.js'
const categoriesContainer = new Container(mysqlOptions, 'Categories')

export const create = async (item) => {
  const save = await categoriesContainer.save(item)
  // Return ID New Item
  return save
}

export const update = async (item) => {
  const edit = await categoriesContainer.edit(item)
  // Return ID Edit Item
  return edit
}
export const deleteById = async (id) => {
  const result = await categoriesContainer.deleteById(id)
  // Return string msg delete successfully
  return result
}
export const getAll = async (where, whereLike, limit, page, sortBy, sort) => {
  const results = await categoriesContainer.getAll(
    where,
    whereLike,
    limit,
    page,
    sortBy,
    sort
  )
  // Return Array Items By Filters
  return results
}
