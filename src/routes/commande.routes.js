const express = require('express');
const router = express.Router();
const {
  getAllCommandes,
  getCommandeById,
  createCommande,
  deleteCommande,
} = require('../controllers/commande.controller');
const validate = require('../middlewares/validate');
const commandeSchema = require('../validations/commande.schema');
const { protect } = require('../middlewares/auth.middleware');

router.use(protect); // Secure routes

/**
 * @swagger
 * tags:
 *   name: Commandes
 *   description: Commande management
 */

/**
 * @swagger
 * /api/commandes:
 *   get:
 *     summary: Get all commandes
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of commandes
 */
router.get('/', getAllCommandes);

/**
 * @swagger
 * /api/commandes/{id}:
 *   get:
 *     summary: Get commande by ID
 *     tags: [Commandes]
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
 *         description: Commande details
 *       404:
 *         description: Commande not found
 */
router.get('/:id', getCommandeById);

/**
 * @swagger
 * /api/commandes:
 *   post:
 *     summary: Create a new commande
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commande'
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', validate(commandeSchema), createCommande);

/**
 * @swagger
 * /api/commandes/{id}:
 *   delete:
 *     summary: Delete a commande
 *     tags: [Commandes]
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
router.delete('/:id', deleteCommande);

module.exports = router;
