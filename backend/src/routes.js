const express = require('express')
const CustomerController = require('./controllers/CustomerController')
const routes = express.Router()

routes.get('/customers', CustomerController.index)
routes.get('/customers/:id', CustomerController.read)
routes.post('/customers', CustomerController.create)
routes.put('/customers/:id', CustomerController.update)
routes.delete('/customers/:id', CustomerController.delete)

module.exports = routes
