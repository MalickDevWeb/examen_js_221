const express = require('express');
const router = express.Router();

router.use('/editeurs', require('./editeur.routes'));
router.use('/livres', require('./livre.routes'));
router.use('/clients', require('./client.routes'));
router.use('/commandes', require('./commande.routes'));

module.exports = router;
