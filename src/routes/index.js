const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/fournisseurs', require('./fournisseur.routes'));
router.use('/produits', require('./produit.routes'));
router.use('/approvisionnements', require('./approvisionnement.routes'));
router.use('/editeurs', require('./editeur.routes'));
router.use('/livres', require('./livre.routes'));
router.use('/clients', require('./client.routes'));
router.use('/commandes', require('./commande.routes'));



module.exports = router;
