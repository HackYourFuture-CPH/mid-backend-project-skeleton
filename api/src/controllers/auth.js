import bcrypt from 'bcrypt';
import db from '../configs/database.js';

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Scramble the password so it's secure
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    const [newUser] = await db('app_user')
      .insert({
        name,
        email,
        password_hash,
        role: 'user'
      })
      .returning(['id', 'name', 'email', 'role']);

    res.status(201).json(newUser);
  } catch (error) {

    if (error.code === '23505') { 
      return res.status(400).json({ error: "Email already registered" });
    }
    res.status(500).json({ error: "Signup failed" });
  }
};