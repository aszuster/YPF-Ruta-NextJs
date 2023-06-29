import Container from 'knex_database/services/Container'
import sqliteOptions from 'knexfile.js'
const articleContainer = new Container(sqliteOptions, 'Articles')

export const create = async (item) => {
  const save = await articleContainer.save(item)
  // Return ID New Item
  return save
}

export const update = async (item) => {
  const edit = await articleContainer.edit(item)
  // Return ID Edit Item
  return edit
}

export const getById = async (id) => {
  const item = await articleContainer.getById(id)
  // Return Item By ID
  return item
}

export const getAll = async (where, whereLike, limit, page, sortBy, sort) => {
  const results = await articleContainer.getAll(
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
  const result = await articleContainer.deleteById(id)
  // Return string msg delete successfully
  return result
}

export const deleteAll = async () => {
  const result = await articleContainer.deleteAll()
  // Return string msg delete successfully
  return result
}
