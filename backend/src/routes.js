const express = require('express')
const CustomerController = require('./controllers/CustomerController')
const routes = express.Router()

routes.post('/customers', CustomerController.create)
routes.get('/customers', CustomerController.listAll)
routes.put('/customers/:id', CustomerController.update)
routes.delete('/customers/:id', CustomerController.delete)

module.exports = routes
