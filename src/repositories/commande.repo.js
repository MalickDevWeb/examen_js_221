const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class CommandeRepository extends BaseRepository {
  constructor() {
    super(prisma.commande);
  }

  async findById(id) {
    return await this.model.findUnique({
      where: { id: parseInt(id) },
      include: {
        client: true,
        detailsCommande: {
          include: { livre: true }
        }
      }
    });
  }

  async findAllWithDetails() {
    return await this.model.findMany({
      include: {
        client: true,
        detailsCommande: {
          include: { livre: true }
        }
      }
    });
  }
}

module.exports = new CommandeRepository();
