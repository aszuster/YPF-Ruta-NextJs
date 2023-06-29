import Container from 'knex_database/services/Container'
import sqliteOptions from 'knexfile.js'
const webinarContainer = new Container(sqliteOptions, 'Webinars')

export const create = async (item) => {
  const save = await webinarContainer.save(item)
  // Return ID New Item
  return save
}

export const update = async (item) => {
  const edit = await webinarContainer.edit(item)
  // Return ID Edit Item
  return edit
}

export const getById = async (id) => {
  const item = await webinarContainer.getById(id)
  // Return Item By ID
  return item
}

export const getAll = async (where, whereLike, limit, sortBy, sort, page) => {
  const results = await webinarContainer.getAll(
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

export const deleteById = async (id) => {
  const result = await webinarContainer.deleteById(id)
  // Return string msg delete successfully
  return result
}

export const deleteAll = async () => {
  const result = await webinarContainer.deleteAll()
  // Return string msg delete successfully
  return result
}
