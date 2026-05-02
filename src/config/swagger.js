const swaggerJsDoc = require('swagger-jsdoc');
const { PORT } = require('./env');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gestion Approvisionnement - ESP 221',
      version: '1.0.0',
      description: 'API RESTful pour la gestion des approvisionnements d\'une boutique (Fournisseurs, Produits, Approvisionnements, etc).',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Serveur de développement'
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Auth: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string' },
            password: { type: 'string' }
          }
        },
        User: {
          type: 'object',
          required: ['nom', 'email', 'password'],
          properties: {
            id: { type: 'integer' },
            nom: { type: 'string' },
            email: { type: 'string' }
          }
        },
        Fournisseur: {
          type: 'object',
          required: ['nom', 'adresse', 'telephone'],
          properties: {
            id: { type: 'integer' },
            nom: { type: 'string' },
            adresse: { type: 'string' },
            telephone: { type: 'string' }
          }
        },
        Produit: {
          type: 'object',
          required: ['libelle', 'prix'],
          properties: {
            id: { type: 'integer' },
            libelle: { type: 'string' },
            prix: { type: 'number' },
            quantiteStock: { type: 'integer' },
            image: { type: 'string' }
          }
        },
        Approvisionnement: {
          type: 'object',
          required: ['fournisseurId', 'produitId', 'quantite'],
          properties: {
            id: { type: 'integer' },
            date: { type: 'string', format: 'date-time' },
            quantite: { type: 'integer' },
            fournisseurId: { type: 'integer' },
            produitId: { type: 'integer' }
          }
        },
        Editeur: {
          type: 'object',
          required: ['nom', 'email'],
          properties: {
            id: { type: 'integer' },
            nom: { type: 'string' },
            email: { type: 'string' },
            adresse: { type: 'string' },
            telephone: { type: 'string' }
          }
        },
        Livre: {
          type: 'object',
          required: ['titre', 'isbn', 'prix', 'editeurId'],
          properties: {
            id: { type: 'integer' },
            titre: { type: 'string' },
            isbn: { type: 'string' },
            prix: { type: 'number' },
            stock: { type: 'integer' },
            image: { type: 'string' },
            editeurId: { type: 'integer' }
          }
        },
        Client: {
          type: 'object',
          required: ['nom', 'email'],
          properties: {
            id: { type: 'integer' },
            nom: { type: 'string' },
            email: { type: 'string' },
            telephone: { type: 'string' },
            adresse: { type: 'string' }
          }
        },
        DetailCommande: {
          type: 'object',
          required: ['livreId', 'quantite'],
          properties: {
            livreId: { type: 'integer' },
            quantite: { type: 'integer' }
          }
        },
        Commande: {
          type: 'object',
          required: ['clientId', 'details'],
          properties: {
            id: { type: 'integer' },
            date: { type: 'string', format: 'date-time' },
            clientId: { type: 'integer' },
            details: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/DetailCommande'
              }
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
