exports.up = function (knex) {
  return knex.schema
    .createTable('users', (tbl) => {
      tbl.increments()
      tbl.string('name')
      tbl.string('email')
      tbl.string('userName')
      tbl.string('password')
      tbl.string('role')
      tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
    .createTable('articles', (tbl) => {
      tbl.increments()
      tbl.string('picture')
      tbl.string('title')
      tbl.string('subtitle')
      tbl.string('category')
      tbl.string('subCategory')
      tbl.string('body')
      tbl.integer('state')
      tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
    .createTable('webinars', (tbl) => {
      tbl.increments()
      tbl.string('picture')
      tbl.string('title')
      tbl.string('videoUrl')
      tbl.string('videoProvider')
      tbl.integer('state')
      tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
    .createTable('logs', (tbl) => {
      tbl.increments()
      tbl.string('userId')
      tbl.string('action')
      tbl.string('description')
      tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('articles').dropTableIfExists('webinars').dropTableIfExists('logs')
}
