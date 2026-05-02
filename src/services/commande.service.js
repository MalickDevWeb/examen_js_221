const commandeRepo = require('../repositories/commande.repo');
const livreRepo = require('../repositories/livre.repo');
const { prisma } = require('../config/db');

class CommandeService {
  async getAllCommandes() {
    return await commandeRepo.findAllWithDetails();
  }

  async getCommandeById(id) {
    return await commandeRepo.findById(id);
  }

  async createCommande(data) {
    const { clientId, livres } = data;

    return await prisma.$transaction(async (tx) => {
      // 1. Create the Commande
      const commande = await tx.commande.create({
        data: {
          client: { connect: { id: parseInt(clientId) } },
        }
      });

      // 2. Process each book in the order
      for (const item of livres) {
        const { livreId, quantite } = item;
        
        // Check stock
        const livre = await tx.livre.findUnique({
          where: { id: parseInt(livreId) }
        });

        if (!livre) throw new Error(`Livre avec ID ${livreId} non trouvé`);
        if (livre.stock < quantite) throw new Error(`Stock insuffisant pour le livre: ${livre.titre}`);

        // Create DetailCommande
        await tx.detailCommande.create({
          data: {
            quantite: parseInt(quantite),
            prix: livre.prix,
            commande: { connect: { id: commande.id } },
            livre: { connect: { id: parseInt(livreId) } },
          }
        });

        // Decrement stock
        await tx.livre.update({
          where: { id: parseInt(livreId) },
          data: { stock: { decrement: parseInt(quantite) } }
        });
      }

      // Return the completed order with details
      return await tx.commande.findUnique({
        where: { id: commande.id },
        include: {
          client: true,
          detailsCommande: {
            include: { livre: true }
          }
        }
      });
    });
  }

  async deleteCommande(id) {
    return await prisma.$transaction(async (tx) => {
      const commande = await tx.commande.findUnique({
        where: { id: parseInt(id) },
        include: { detailsCommande: true }
      });

      if (!commande) throw new Error('Commande non trouvée');

      // Restore stock for each book in the order
      for (const detail of commande.detailsCommande) {
        await tx.livre.update({
          where: { id: detail.livreId },
          data: { stock: { increment: detail.quantite } }
        });
      }

      // Delete the order (DetailCommande will be deleted via Cascade)
      return await tx.commande.delete({
        where: { id: parseInt(id) }
      });
    });
  }
}

module.exports = new CommandeService();
