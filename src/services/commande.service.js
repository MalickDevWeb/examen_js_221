const commandeRepo = require('../repositories/commande.repo');
const livreRepo = require('../repositories/livre.repo');

class CommandeService {
  async getAllCommandes() {
    return await commandeRepo.findAll();
  }

  async getCommandeById(id) {
    return await commandeRepo.findById(id);
  }

  async createCommande(data) {
    let montantTotal = 0;
    
    // Calculate total and check stock
    for (const item of data.livres) {
      const livre = await livreRepo.findById(item.livre);
      if (!livre) throw new Error(`Livre with id ${item.livre} not found`);
      if (livre.stock < item.quantite) throw new Error(`Insufficient stock for ${livre.titre}`);
      
      montantTotal += livre.prix * item.quantite;
    }

    data.montantTotal = montantTotal;
    const commande = await commandeRepo.create(data);

    // Update stock
    for (const item of data.livres) {
      const livre = await livreRepo.findById(item.livre);
      await livreRepo.update(item.livre, { stock: livre.stock - item.quantite });
    }

    return await commandeRepo.findById(commande._id);
  }

  async deleteCommande(id) {
    // Optionally restore stock before deleting
    return await commandeRepo.delete(id);
  }
}

module.exports = new CommandeService();
