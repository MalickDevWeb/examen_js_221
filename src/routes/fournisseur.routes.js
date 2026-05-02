const express = require('express');
const router = express.Router();
const fournisseurController = require('../controllers/fournisseur.controller');
const validate = require('../middlewares/validate');
const fournisseurSchema = require('../validations/fournisseur.schema');
const { protect } = require('../middlewares/auth.middleware');

router.use(protect); // All routes protected

/**
 * @swagger
 * tags:
 *   name: Fournisseurs
 *   description: Fournisseur management
 */

/**
 * @swagger
 * /api/fournisseurs:
 *   get:
 *     summary: Get all fournisseurs
 *     tags: [Fournisseurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of fournisseurs
 */
router.get('/', fournisseurController.getAllFournisseurs);

/**
 * @swagger
 * /api/fournisseurs/{id}:
 *   get:
 *     summary: Get fournisseur by ID
 *     tags: [Fournisseurs]
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
 *         description: Fournisseur details
 *       404:
 *         description: Fournisseur not found
 */
router.get('/:id', fournisseurController.getFournisseurById);

/**
 * @swagger
 * /api/fournisseurs:
 *   post:
 *     summary: Create a new fournisseur
 *     tags: [Fournisseurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FournisseurCreate'
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', validate(fournisseurSchema), fournisseurController.createFournisseur);

/**
 * @swagger
 * /api/fournisseurs/{id}:
 *   put:
 *     summary: Update a fournisseur
 *     tags: [Fournisseurs]
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
 *             $ref: '#/components/schemas/FournisseurCreate'
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', validate(fournisseurSchema), fournisseurController.updateFournisseur);

/**
 * @swagger
 * /api/fournisseurs/{id}:
 *   delete:
 *     summary: Delete a fournisseur
 *     tags: [Fournisseurs]
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
router.delete('/:id', fournisseurController.deleteFournisseur);

module.exports = router;
