export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'https://admin.evoxsolution.com'), // Add this line
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    cors: {
      enabled: true,
      credentials: true,
      origin: [
        'https://evoxsolution.com',
        'https://admin.evoxsolution.com',
        'http://localhost:1337', // For development
      ],
    },
  },
});