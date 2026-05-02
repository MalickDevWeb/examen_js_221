const express = require('express');
const router = express.Router();
const {
  getAllEditeurs,
  getEditeurById,
  createEditeur,
  updateEditeur,
  deleteEditeur,
} = require('../controllers/editeur.controller');
const validate = require('../middlewares/validate');
const editeurSchema = require('../validations/editeur.schema');
const { protect } = require('../middlewares/auth.middleware');

router.use(protect);

/**
 * @swagger
 * tags:
 *   name: Editeurs
 *   description: Editeur management
 */

/**
 * @swagger
 * /api/editeurs:
 *   get:
 *     summary: Get all editeurs
 *     tags: [Editeurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of editeurs
 */
router.get('/', getAllEditeurs);

/**
 * @swagger
 * /api/editeurs/{id}:
 *   get:
 *     summary: Get editeur by ID
 *     tags: [Editeurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editeur details
 *       404:
 *         description: Editeur not found
 */
router.get('/:id', getEditeurById);

/**
 * @swagger
 * /api/editeurs:
 *   post:
 *     summary: Create a new editeur
 *     tags: [Editeurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Editeur'
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', validate(editeurSchema), createEditeur);

/**
 * @swagger
 * /api/editeurs/{id}:
 *   put:
 *     summary: Update an editeur
 *     tags: [Editeurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Editeur'
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', validate(editeurSchema), updateEditeur);

/**
 * @swagger
 * /api/editeurs/{id}:
 *   delete:
 *     summary: Delete an editeur
 *     tags: [Editeurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete('/:id', deleteEditeur);

module.exports = router;
