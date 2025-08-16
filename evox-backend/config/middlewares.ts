// export default [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
  
// ];

export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            env('R2_PUBLIC_URL') ? env('R2_PUBLIC_URL').replace(/^https?:\/\//, '') : 'cdn.evoxsolution.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            env('R2_PUBLIC_URL') ? env('R2_PUBLIC_URL').replace(/^https?:\/\//, '') : 'cdn.evoxsolution.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
];