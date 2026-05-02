const express = require('express');
const router = express.Router();
const {
  getFournisseurs,
  getFournisseurById,
  createFournisseur,
  updateFournisseur,
  deleteFournisseur
} = require('../controllers/fournisseurController');

router.get('/', getFournisseurs);
router.get('/:id', getFournisseurById);
router.post('/', createFournisseur);
router.put('/:id', updateFournisseur);
router.delete('/:id', deleteFournisseur);

module.exports = router;
