const userRepo = require('../repositories/user.repo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class AuthService {
  async register(userData) {
    const existingUser = await userRepo.findByEmail(userData.email);
    if (existingUser) throw new Error('Utilisateur déjà existant');

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await userRepo.create({
      ...userData,
      password: hashedPassword,
    });
  }

  async login(email, password) {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error('Identifiants invalides');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Identifiants invalides');

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );

    return { user, token };
  }
}

module.exports = new AuthService();
