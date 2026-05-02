const express = require('express');
const router = express.Router();
const { 
  getProduits, 
  getProduitById, 
  createProduit, 
  updateProduit, 
  deleteProduit 
} = require('../controllers/produitController');
const { upload } = require('../config/cloudinary');

router.get('/', getProduits);
router.get('/:id', getProduitById);
router.post('/', upload.single('image'), createProduit);
router.put('/:id', upload.single('image'), updateProduit);
router.delete('/:id', deleteProduit);

module.exports = router;
