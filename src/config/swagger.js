const swaggerJsDoc = require('swagger-jsdoc');
const { PORT } = require('./env');

  definition: {
    openapi: '3.1.0',
    info: {
      title: 'API Gestion Approvisionnement - ESP 221',
      version: '1.0.0',
      description: 'API RESTful pour la gestion des approvisionnements d\'une boutique (Fournisseurs, Produits, Approvisionnements).',
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
        Approvisionnement: {
          type: 'object',
          required: ['id', 'date', 'quantite', 'fournisseurId', 'produitId'],
          properties: {
            id: { type: 'integer' },
            date: { type: 'string', format: 'date-time' },
            quantite: { type: 'integer' },
            fournisseurId: { type: 'integer' },
            produitId: { type: 'integer' }
          }
        },
        ApprovisionnementCreate: {
          type: 'object',
          required: ['fournisseurId', 'produitId', 'quantite'],
          properties: {
            quantite: { type: 'integer' },
            fournisseurId: { type: 'integer' },
            produitId: { type: 'integer' }
          }
        },
        Body_create_produit_api_produits__post: {
          type: 'object',
          required: ['libelle', 'prix'],
          properties: {
            libelle: { type: 'string' },
            prix: { type: 'number' },
            quantiteStock: { type: 'integer' },
            image: { type: 'string', format: 'binary' }
          }
        },
        Body_login_api_auth_login_post: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string' },
            password: { type: 'string' }
          }
        },
        Fournisseur: {
          type: 'object',
          required: ['id', 'nom', 'adresse', 'telephone'],
          properties: {
            id: { type: 'integer' },
            nom: { type: 'string' },
            adresse: { type: 'string' },
            telephone: { type: 'string' }
          }
        },
        FournisseurCreate: {
          type: 'object',
          required: ['nom', 'adresse', 'telephone'],
          properties: {
            nom: { type: 'string' },
            adresse: { type: 'string' },
            telephone: { type: 'string' }
          }
        },
        HTTPValidationError: {
          type: 'object',
          properties: {
            detail: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/ValidationError'
              }
            }
          }
        },
        Produit: {
          type: 'object',
          required: ['id', 'libelle', 'prix'],
          properties: {
            id: { type: 'integer' },
            libelle: { type: 'string' },
            prix: { type: 'number' },
            quantiteStock: { type: 'integer' },
            image: { type: 'string' }
          }
        },
        Token: {
          type: 'object',
          required: ['access_token', 'token_type'],
          properties: {
            access_token: { type: 'string' },
            token_type: { type: 'string' }
          }
        },
        UserCreate: {
          type: 'object',
          required: ['nom', 'email', 'password'],
          properties: {
            nom: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' }
          }
        },
        ValidationError: {
          type: 'object',
          required: ['loc', 'msg', 'type'],
          properties: {
            loc: {
              type: 'array',
              items: { type: 'string' }
            },
            msg: { type: 'string' },
            type: { type: 'string' }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
