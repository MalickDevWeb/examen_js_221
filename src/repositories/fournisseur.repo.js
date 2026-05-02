const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class FournisseurRepository extends BaseRepository {
  constructor() {
    super(prisma.fournisseur);
  }
}

module.exports = new FournisseurRepository();
