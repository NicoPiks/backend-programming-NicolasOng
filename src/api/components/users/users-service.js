const usersRepository = require('./users-repository');
const bcrypt = require('bcrypt');

async function getUsers({offset, limit}) {
  const users = usersRepository.getUsers(offset, limit)
  return users;
}

async function getUser(id) {
  return usersRepository.getUser(id);
}

async function emailExists(email) {
  const user = await usersRepository.getUserByEmail(email);
  return !!user; // Return true if user exists, false otherwise
}

async function createUser(email, password, fullName) {
  return usersRepository.createUser(email, password, fullName);
}

async function updateUser(id, email, fullName) {
  return usersRepository.updateUser(id, email, fullName);
}

async function deleteUser(id) {
  return usersRepository.deleteUser(id);
}

async function login(email, password){
  const user = usersRepository.getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('INVALID_PASSWORD'); 
  }

  return user; 
}

module.exports = {
  getUsers,
  getUser,
  emailExists,
  createUser,
  updateUser,
  deleteUser,
  login,
};
