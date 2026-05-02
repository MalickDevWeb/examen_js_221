const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class ProduitRepository extends BaseRepository {
  constructor() {
    super(prisma.produit);
  }

  async incrementStock(id, quantity) {
    return await this.model.update({
      where: { id: parseInt(id) },
      data: { quantiteStock: { increment: quantity } },
    });
  }

  async decrementStock(id, quantity) {
    // We'll check the stock level in the service
    return await this.model.update({
      where: { id: parseInt(id) },
      data: { quantiteStock: { decrement: quantity } },
    });
  }
}

module.exports = new ProduitRepository();
