const express = require('express');
const router = express.Router();
const {
  getAllLivres,
  getLivreById,
  createLivre,
  updateLivre,
  deleteLivre,
} = require('../controllers/livre.controller');
const { upload } = require('../config/cloudinary');
const validate = require('../middlewares/validate');
const livreSchema = require('../validations/livre.schema');
const { protect } = require('../middlewares/auth.middleware');

router.use(protect);

/**
 * @swagger
 * tags:
 *   name: Livres
 *   description: Livre management
 */

/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Get all livres
 *     tags: [Livres]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of livres
 */
router.get('/', getAllLivres);

/**
 * @swagger
 * /api/livres/{id}:
 *   get:
 *     summary: Get livre by ID
 *     tags: [Livres]
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
 *         description: Livre details
 *       404:
 *         description: Livre not found
 */
router.get('/:id', getLivreById);

/**
 * @swagger
 * /api/livres:
 *   post:
 *     summary: Create a new livre
 *     tags: [Livres]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - titre
 *               - isbn
 *               - prix
 *               - editeurId
 *             properties:
 *               titre:
 *                 type: string
 *               isbn:
 *                 type: string
 *               prix:
 *                 type: number
 *               stock:
 *                 type: integer
 *               editeurId:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', upload.single('image'), validate(livreSchema), createLivre);

/**
 * @swagger
 * /api/livres/{id}:
 *   put:
 *     summary: Update a livre
 *     tags: [Livres]
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
 *               titre:
 *                 type: string
 *               isbn:
 *                 type: string
 *               prix:
 *                 type: number
 *               stock:
 *                 type: integer
 *               editeurId:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', upload.single('image'), validate(livreSchema), updateLivre);

/**
 * @swagger
 * /api/livres/{id}:
 *   delete:
 *     summary: Delete a livre
 *     tags: [Livres]
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
router.delete('/:id', deleteLivre);

module.exports = router;
