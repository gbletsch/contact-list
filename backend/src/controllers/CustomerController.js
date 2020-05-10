const connection = require('../database/connection')

module.exports = {
  async index (request, response) {
    const { page = 1 } = request.params
    const customersByPage = 20

    return response.json(await connection('customers')
      .limit(customersByPage)
      .offset((page - 1) * customersByPage)
      .select('*'))
  },
  async read (request, response) {
    const { id } = request.params
    customer = await connection('customers')
      .where({ id })
      .select('*')
      .first()
    response.json(customer)
  },
  async create (request, response) {
    const { name } = request.body 
    return response.json({
      created_ids: await connection('customers').insert({
          name
        })
    })
  },
  async update (request, response) {
    const id = request.params.id
    const { name } = request.body
    return response.json({
      rows_affected: await connection('customers')
        .where({ id })
        .update({
          name
        })
    })
  },
  async delete (request, response) {
    const id = request.params.id
    return response.json({
      rows_affected: await connection('customers')
            .where({ id })
            .del()
    })
  }
}