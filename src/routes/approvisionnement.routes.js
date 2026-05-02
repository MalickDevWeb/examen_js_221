const express = require('express');
const router = express.Router();
const approvisionnementController = require('../controllers/approvisionnement.controller');
const validate = require('../middlewares/validate');
const approvisionnementSchema = require('../validations/approvisionnement.schema');
const { protect } = require('../middlewares/auth.middleware');

router.use(protect);

/**
 * @swagger
 * tags:
 *   name: Approvisionnements
 *   description: Approvisionnement management
 */

/**
 * @swagger
 * /api/approvisionnements:
 *   get:
 *     summary: Get all approvisionnements
 *     tags: [Approvisionnements]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of approvisionnements
 */
router.get('/', approvisionnementController.getAllApprovisionnements);

/**
 * @swagger
 * /api/approvisionnements/{id}:
 *   get:
 *     summary: Get approvisionnement by ID
 *     tags: [Approvisionnements]
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
 *         description: Approvisionnement details
 *       404:
 *         description: Approvisionnement not found
 */
router.get('/:id', approvisionnementController.getApprovisionnementById);

/**
 * @swagger
 * /api/approvisionnements:
 *   post:
 *     summary: Create an approvisionnement
 *     tags: [Approvisionnements]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Approvisionnement'
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', validate(approvisionnementSchema), approvisionnementController.createApprovisionnement);

/**
 * @swagger
 * /api/approvisionnements/{id}:
 *   delete:
 *     summary: Delete an approvisionnement
 *     tags: [Approvisionnements]
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
router.delete('/:id', approvisionnementController.deleteApprovisionnement);

module.exports = router;
