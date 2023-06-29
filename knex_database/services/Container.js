import knex from 'knex'

class Container {
  constructor(config, table) {
    this.table = table
    this.conexion = knex(config)
  }

  // Guardar un nuevo item
  async save(item) {
    try {
      const [id] = await this.conexion(this.table).insert(item)
      return id
    } catch (error) {
      return error
    }
  }

  // Editar un item
  async edit(item) {
    try {
      const data = await this.conexion(this.table)
        .where({ id: item.id }) //comprabar el id del item
        .update(item)
      return data.id
    } catch (error) {
      return error
    }
  }

  // Devolver un item especifico
  async getById(id) {
    try {
      const data = await this.conexion
        .from(this.table)
        .select('*') // select -> trae todo
        .where('id', '=', id) //dependiendo el id
      if (data.length === 0) {
        return null
      } else {
        return data[0]
      }
    } catch (error) {
      return error
    }
  }

  // Devolver todos los items
  async getAll(
    where,
    whereLike,
    limit = 20,
    page = 1,
    sortBy = 'id',
    sort = 'desc'
  ) {
    // Calcular offset
    const offset = Math.ceil((+page - 1) * limit)

    // Contador de registros
    const totalRegisters = await this.conexion
      .count('id as CNT')
      .first()
      .from(this.table)

    // Calcular total de páginas
    const pages = Math.ceil(totalRegisters.CNT / limit)

    // Lanzar error
    if (page < 1) {
      throw function ThrowError(res) {
        return res.status(400).json({ error: 'La página debe ser mayor a 0' })
      }
    }

    // Llamada a base de datos
    try {
      // Traer datos filtrados
      const data = await this.conexion
        .from(this.table)
        .select('*')
        .rowNumber('alias_name', function () {
          this.orderBy(sortBy, sort)
        })
        .limit(limit)
        .offset(offset)
        .modify(function (queryBuilder) {
          if (Object.keys(where).length !== 0) {
            queryBuilder.where(where)
          }
          if (Object.keys(whereLike).length !== 0) {
            queryBuilder.whereLike(whereLike.key, `%${whereLike.value}%`)
          }
        })

      return {
        currentPage: +page,
        pages: pages,
        limit: +limit,
        registers: totalRegisters.CNT,
        response: data,
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  // Borrar item especifico
  async deleteById(id) {
    try {
      await this.conexion(this.table).where({ id: id }).del()
      return 'Eliminado correctamente.'
    } catch (error) {
      return error
    }
  }

  // Borrar todos los items
  async deleteAll() {
    try {
      await this.conexion(this.table).del()
      return 'Eliminado correctamente.'
    } catch (error) {
      return error
    }
  }
}

export default Container
