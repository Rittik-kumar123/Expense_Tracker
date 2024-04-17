const router = require('express').Router()
const {addIncome, getIncomes, deleteIncomes} = require('../controllers/income')

router.post('/add-income',addIncome)
    .get('/get-incomes',getIncomes)
    .delete('/delete-income/:id',deleteIncomes)

module.exports = router