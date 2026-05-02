const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produit.controller');
const validate = require('../middlewares/validate');
const produitSchema = require('../validations/produit.schema');
const { protect } = require('../middlewares/auth.middleware');
const { upload } = require('../config/cloudinary');

router.use(protect);

/**
 * @swagger
 * tags:
 *   name: Produits
 *   description: Produit management
 */

/**
 * @swagger
 * /api/produits:
 *   get:
 *     summary: Get all produits
 *     tags: [Produits]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of produits
 */
router.get('/', produitController.getAllProduits);

/**
 * @swagger
 * /api/produits/{id}:
 *   get:
 *     summary: Get produit by ID
 *     tags: [Produits]
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
 *         description: Produit details
 *       404:
 *         description: Produit not found
 */
router.get('/:id', produitController.getProduitById);

/**
 * @swagger
 * /api/produits:
 *   post:
 *     summary: Create a new produit with image upload
 *     tags: [Produits]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - libelle
 *               - prix
 *             properties:
 *               libelle:
 *                 type: string
 *               prix:
 *                 type: number
 *               quantiteStock:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', upload.single('image'), validate(produitSchema), produitController.createProduit);

/**
 * @swagger
 * /api/produits/{id}:
 *   put:
 *     summary: Update a produit with image upload
 *     tags: [Produits]
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               libelle:
 *                 type: string
 *               prix:
 *                 type: number
 *               quantiteStock:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', upload.single('image'), validate(produitSchema), produitController.updateProduit);

/**
 * @swagger
 * /api/produits/{id}:
 *   delete:
 *     summary: Delete a produit
 *     tags: [Produits]
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
router.delete('/:id', produitController.deleteProduit);

/**
 * @swagger
 * /api/produits/{id}/increment:
 *   patch:
 *     summary: Increment stock of a produit
 *     tags: [Produits]
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
 *         description: Stock incremented successfully
 */
router.patch('/:id/increment', produitController.incrementStock);

/**
 * @swagger
 * /api/produits/{id}/decrement:
 *   patch:
 *     summary: Decrement stock of a produit
 *     tags: [Produits]
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
 *         description: Stock decremented successfully
 */
router.patch('/:id/decrement', produitController.decrementStock);

module.exports = router;
