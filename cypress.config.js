const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080/',
    video: true, // Gravar vídeos dos testes
    setupNodeEvents(on, config) {
      // você pode configurar plugins aqui se precisar
    },
  },
});



