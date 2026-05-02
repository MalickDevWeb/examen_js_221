const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livre.controller');
const validate = require('../middlewares/validate');
const livreSchema = require('../validations/livre.schema');

router.get('/', livreController.getAllLivres);
router.get('/:id', livreController.getLivreById);
router.post('/', validate(livreSchema), livreController.createLivre);
router.put('/:id', validate(livreSchema), livreController.updateLivre);
router.delete('/:id', livreController.deleteLivre);

module.exports = router;
