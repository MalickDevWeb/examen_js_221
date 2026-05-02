const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class ApprovisionnementRepository extends BaseRepository {
  constructor() {
    super(prisma.approvisionnement);
  }

  async findAll(params = {}) {
    return await this.model.findMany({
      ...params,
      include: {
        fournisseur: true,
        produit: true,
      },
    });
  }

  async findById(id) {
    return await this.model.findUnique({
      where: { id: parseInt(id) },
      include: {
        fournisseur: true,
        produit: true,
      },
    });
  }
}

module.exports = new ApprovisionnementRepository();
