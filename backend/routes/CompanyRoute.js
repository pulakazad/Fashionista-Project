module.exports = function (app) {

    var companies = require('../controllers/CompanyController.js')

    app.get('/api/companies', companies.findAll);

    app.get('/api/companies/:id', companies.findById);

    app.post('/api/companies/storeCompany', companies.addCompany);

    app.put('/api/companies/:id', companies.updateById);

    app.delete('/api/companies/:id', companies.removeById);

}