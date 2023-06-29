import Container from 'knex_database/services/Container'
import mysqlOptions from 'knexfile.js'
const usersContainer = new Container(mysqlOptions, 'Users')

export const create = async (item) => {
  const save = await usersContainer.save(item)
  // Return ID New Item
  return save
}

export const update = async (item) => {
  const edit = await usersContainer.edit(item)
  // Return ID Edit Item
  return edit
}

export const getAll = async (where, whereLike, offset, limit, sortBy, sort) => {
  const results = await usersContainer.getAll(
    where,
    whereLike,
    offset,
    limit,
    sortBy,
    sort
  )
  // Return Array Items By Filters
  return results
}

export const getById = async (id) => {
  const item = await usersContainer.getById(id)
  // Return Item By ID
  return item
}
export const deleteById = async (id) => {
  const result = await usersContainer.deleteById(id)
  // Return string msg delete successfully
  return result
}
