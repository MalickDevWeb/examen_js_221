const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');
const validate = require('../middlewares/validate');
const clientSchema = require('../validations/client.schema');

router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.post('/', validate(clientSchema), clientController.createClient);
router.put('/:id', validate(clientSchema), clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
