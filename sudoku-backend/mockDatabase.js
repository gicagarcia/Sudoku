const users = {};

const registerUser = (username, password) => {
  if (users[username]) {
    throw new Error('O usuário já está registrado.');
  }
  users[username] = { username, password };
};

const checkCredentials = (username, password) => {
  const user = users[username];
  if (!user || user.password !== password) {
    return false;
  }
  return true;
};

module.exports = { registerUser, checkCredentials };
