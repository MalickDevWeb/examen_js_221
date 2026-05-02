const express = require('express');
const router = express.Router();
const editeurController = require('../controllers/editeur.controller');
const validate = require('../middlewares/validate');
const editeurSchema = require('../validations/editeur.schema');

router.get('/', editeurController.getAllEditeurs);
router.get('/:id', editeurController.getEditeurById);
router.post('/', validate(editeurSchema), editeurController.createEditeur);
router.put('/:id', validate(editeurSchema), editeurController.updateEditeur);
router.delete('/:id', editeurController.deleteEditeur);

module.exports = router;
