exports.up = function (knex) {
  knex.schema.alterTable('articles', function (table) {
    table.string('featured')
  })
    .createTable('categories', (tbl) => {
      tbl.increments()
      tbl.string('name')
      tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
    .createTable('subCategories', (tbl) => {
      tbl.increments()
      tbl.string('categoryId')
      tbl.string('name')
      tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('articles').dropTableIfExists('categories').dropTableIfExists('subCategories')
}
