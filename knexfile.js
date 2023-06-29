// Updated with your config settings.
// module.exports = {
//   client: 'sqlite3',
//   connection: {
//     filename: './knex_database/db/ypf-ruta.sqlite3',
//   },
//   useNullAsDefault: true,
// }

module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'devdhnn2022',
    database: 'YpfRutaDev',
  },
  pool: { min: 0, max: 10 },
}
