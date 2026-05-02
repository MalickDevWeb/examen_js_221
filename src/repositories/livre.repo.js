const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class LivreRepository extends BaseRepository {
  constructor() {
    super(prisma.livre);
  }

  async findByIsbn(isbn) {
    return await this.model.findUnique({
      where: { isbn },
      include: { editeur: true }
    });
  }

  async incrementStock(id, quantity) {
    return await this.model.update({
      where: { id: parseInt(id) },
      data: { stock: { increment: quantity } },
    });
  }

  async decrementStock(id, quantity) {
    return await this.model.update({
      where: { id: parseInt(id) },
      data: { stock: { decrement: quantity } },
    });
  }
}

module.exports = new LivreRepository();
