const express = require('express');
const Survivors = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Survivors.getSurvivors()
    .then(survivors => {
      res.status(200).json(survivors)
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Survivors.getSurvivorById(req.params.id)
    .then(survivor => {
      res.status(200).json(survivor)
    })
    .catch(next);
})


module.exports = router;