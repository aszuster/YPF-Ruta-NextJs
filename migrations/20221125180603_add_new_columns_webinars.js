exports.up = function (knex) {
  return knex.schema.alterTable('webinars', function (table) {
    table.string('category')
    table.string('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('webinars')
}
