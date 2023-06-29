exports.up = function (knex) {
  return knex.schema.alterTable('articles', function (table) {
    table.date('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('articles')
}
