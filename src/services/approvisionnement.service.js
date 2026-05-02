const approvisionnementRepo = require('../repositories/approvisionnement.repo');
const { prisma } = require('../config/db');

class ApprovisionnementService {
  async getAllApprovisionnements() {
    return await approvisionnementRepo.findAll();
  }

  async getApprovisionnementById(id) {
    return await approvisionnementRepo.findById(id);
  }

  async createApprovisionnement(data) {
    const quantite = parseInt(data.quantite);
    const produitId = parseInt(data.produitId);
    const fournisseurId = parseInt(data.fournisseurId);

    // sequential operations as a workaround for transaction issue
    const approvisionnement = await prisma.approvisionnement.create({
      data: {
        quantite: quantite,
        date: data.date ? new Date(data.date) : new Date(),
        fournisseur: { connect: { id: fournisseurId } },
        produit: { connect: { id: produitId } },
      },
      include: {
        fournisseur: true,
        produit: true,
      }
    });

    await prisma.produit.update({
      where: { id: produitId },
      data: { quantiteStock: { increment: quantite } },
    });

    return approvisionnement;
  }

  async deleteApprovisionnement(id) {
    const approvisionnement = await prisma.approvisionnement.findUnique({
      where: { id: parseInt(id) }
    });

    if (!approvisionnement) {
      const error = new Error('Approvisionnement non trouvé');
      error.statusCode = 404;
      throw error;
    }

    await prisma.produit.update({
      where: { id: approvisionnement.produitId },
      data: { quantiteStock: { decrement: approvisionnement.quantite } },
    });

    return await prisma.approvisionnement.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = new ApprovisionnementService();
