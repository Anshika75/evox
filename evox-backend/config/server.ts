module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['dcdcea0c147eb5bb9c34e7a3a41de6b2066a30fe4c68b98dc40f9867db8dc27d', '4a6acc112dfb9f6ef9d4688d6017177c64eac2afaa113d91ffd01e612a21ca3d']),
  },
});