const { registerUser, checkCredentials } = require('./mockDatabase');

const AuthService = {
  register: (username, password) => {
    registerUser(username, password);
    console.log(`Usuário ${username} registrado com sucesso.`);
  },
  login: (username, password) => {
    const isAuthenticated = checkCredentials(username, password);
    if (isAuthenticated) {
      console.log(`Usuário ${username} autenticado com sucesso.`);
    } else {
      console.log('Credenciais inválidas.');
    }
    return isAuthenticated;
  }
};

module.exports = AuthService;
