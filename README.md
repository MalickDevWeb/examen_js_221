# 📦 API REST - Gestion d'Approvisionnement (Node.js / Express)

Une API complète et robuste construite avec **Node.js**, **Express**, et **Prisma (PostgreSQL)** en respectant la séparation des responsabilités. Cette API permet de gérer les fournisseurs, les produits (avec upload d'image via Cloudinary), et les approvisionnements avec une gestion dynamique des stocks.

---

## 🚀 Fonctionnalités Principales

- **Architecture Organisée** : Séparation stricte en Modèles (Prisma), Contrôleurs, Routes et Middlewares.
- **ORM Prisma** : Connexion à la base de données PostgreSQL de manière sécurisée et typée.
- **Gestion Automatique des Stocks** : Lors d'un approvisionnement, le stock du produit augmente automatiquement.
- **Upload d'Images** : Support natif du `multipart/form-data` directement connecté à **Cloudinary** via Multer.
- **Sécurité (JWT)** : Authentification robuste par jeton JWT. Les routes sensibles sont protégées.
- **Documentation OpenAPI (Swagger)** : Documentation Swagger UI auto-générée avec OpenAPI 3.1.0, accessible publiquement, testable directement depuis le navigateur.

---

## 🛠️ Prérequis et Installation

1. **Ouvrir le projet** :
   Placez-vous dans le dossier du projet (`examen_js`).

2. **Installer les dépendances** :
   Assurez-vous d'avoir Node.js installé, puis exécutez :
   ```bash
   npm install
   ```

3. **Configurer l'environnement** :
   Copiez le fichier `.env.exemple` (ou créez un fichier `.env`) :
   ```bash
   cp .env.exemple .env
   ```
   Remplissez ensuite ce fichier `.env` avec :
   - `PORT=5000`
   - L'URL de votre base PostgreSQL (`DATABASE_URL="postgresql://..."`)
   - Votre clé `JWT_SECRET`
   - Vos accès Cloudinary (`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`)

4. **Générer le client Prisma et synchroniser la BDD** :
   ```bash
   npx prisma generate
   npx prisma db push
   ```

---

## 🖥️ Lancer l'Application

Une fois l'installation et la configuration terminées, démarrez le serveur :

**En mode développement (avec Nodemon) :**
```bash
npm run dev
```

**En mode production :**
```bash
npm start
```
*(Le serveur s'exécutera sur le port 5000 par défaut).*

---

## 🔗 URLs et Accès Rapides

- 🟢 **Test d'activité** : [http://localhost:5000/](http://localhost:5000/) *(Message : "Supply Management API is running...")*
- 📚 **Documentation Swagger (UI)** : [http://localhost:5000/api-docs/](http://localhost:5000/api-docs/) *(Interface visuelle pour tester l'API - TRÈS RECOMMANDÉ)*

---

## 💡 Comment utiliser l'API via Swagger (/api-docs) ?

L'interface **Swagger** est l'outil principal pour comprendre, configurer et tester l'API.

### Étape 1 : Créer un compte & Récupérer un Token
1. Dans Swagger, ouvrez la section **Authentification**.
2. Cliquez sur `POST /api/auth/register`, remplissez le nom, email et mot de passe, puis cliquez sur **"Execute"**.
3. Cliquez ensuite sur `POST /api/auth/login`. Remplissez l'email et le mot de passe.
4. Dans la réponse, copiez la chaîne de texte du **token** généré.

### Étape 2 : S'authentifier globalement
1. Tout en haut de la page Swagger, cliquez sur le bouton vert **"Authorize"** (avec le cadenas).
2. Dans la boîte qui s'ouvre, saisissez **`Bearer ` suivi d'un espace puis collez votre token** (ex: `Bearer eyJh...`).
3. Cliquez sur "Authorize". Désormais, vous avez accès à toutes les routes de l'API.

### Étape 3 : Tester le flux métier
1. **Créer un Fournisseur** (`POST /api/fournisseurs/`) : Indiquez son nom, adresse et téléphone.
2. **Créer un Produit** (`POST /api/produits/`) : Joignez une image (via Cloudinary) et définissez le prix et libellé.
3. **Approvisionner** (`POST /api/approvisionnements/`) : Liez l'ID du fournisseur, l'ID du produit, et indiquez une quantité. **Le stock du produit s'incrémentera automatiquement !**

---

## 📁 Structure du Code

```text
examen_js/
 ├── prisma/              # Schémas de base de données (schema.prisma)
 ├── src/
 │    ├── config/         # Variables d'environnement, configuration Swagger et Cloudinary
 │    ├── controllers/    # Points d'entrée (Requête -> Service -> Réponse)
 │    ├── middlewares/    # Protection JWT (auth.middleware) et gestion d'erreurs
 │    ├── routes/         # Définition des endpoints et injections des commentaires Swagger
 │    ├── utils/          # Outils et formatage des réponses
 │    ├── validations/    # Validation des données avec Joi (Schémas)
 │    └── index.js        # Point d'entrée principal de l'application
 ├── .env                 # Secrets et configurations
 ├── package.json         # Dépendances Node.js et scripts NPM
 └── README.md            # Ce fichier
```
