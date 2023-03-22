const express = require('express')
const router = express.Router()

const { getStates, getState, addState, updateState, removeState } = require('../controllers/states.controller')


router.route('/')
  .get(getStates)
  .post(addState)

router.route('/:id')
  .get(getState)
  .put(updateState)
  .delete(removeState)


module.exports = router