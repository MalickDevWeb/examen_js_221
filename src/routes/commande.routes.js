const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commande.controller');
const validate = require('../middlewares/validate');
const commandeSchema = require('../validations/commande.schema');

router.get('/', commandeController.getAllCommandes);
router.get('/:id', commandeController.getCommandeById);
router.post('/', validate(commandeSchema), commandeController.createCommande);
router.delete('/:id', commandeController.deleteCommande);

module.exports = router;
