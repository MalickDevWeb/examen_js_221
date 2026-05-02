/**
 * @swagger
 * components:
 *   schemas:
 *     Livre:
 *       type: object
 *       required:
 *         - titre
 *         - isbn
 *         - prix
 *         - editeurId
 *       properties:
 *         id:
 *           type: string
 *         titre:
 *           type: string
 *         isbn:
 *           type: string
 *         prix:
 *           type: number
 *         stock:
 *           type: integer
 *         image:
 *           type: string
 *         editeurId:
 *           type: string
 *     Editeur:
 *       type: object
 *       required:
 *         - nom
 *         - email
 *       properties:
 *         id:
 *           type: string
 *         nom:
 *           type: string
 *         email:
 *           type: string
 *         adresse:
 *           type: string
 *         telephone:
 *           type: string
 */
