const connection = require('../database/connection')

module.exports = {
  async create (request, response) {
    const { name } = request.body 
    return response.json({
      created_ids: await connection('customers').insert({
          name
        })
    })
  },
  async listAll (request, response) {
    return response.json(await connection('customers').select('*'))
  },
  async update (request, response) {
    const id = request.params.id
    const { name } = request.body
    return response.json({
      rows_affected: await connection('customers')
        .where('id', '=', id)
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