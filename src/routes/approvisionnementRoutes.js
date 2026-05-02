const express = require('express');
const router = express.Router();
const {
  getApprovisionnements,
  createApprovisionnement,
  getApprovisionnementById
} = require('../controllers/approvisionnementController');

router.get('/', getApprovisionnements);
router.post('/', createApprovisionnement);
router.get('/:id', getApprovisionnementById);

module.exports = router;
