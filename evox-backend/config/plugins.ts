export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-cloudflare-r2',
      providerOptions: {
        accessKeyId: env('R2_ACCESS_KEY_ID'),
        secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
        region: env('R2_REGION', 'auto'),
        endpoint: env('R2_ENDPOINT'),
        params: {
          Bucket: env('R2_BUCKET'),
        },
        // This should be your public URL for accessing files
        cloudflarePublicAccessUrl: env('R2_PUBLIC_URL'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  
  // Optional: Add other performance plugins
  // 'rest-cache': {
  //   enabled: true,
  //   config: {
  //     provider: {
  //       name: 'memory',
  //       options: {
  //         max: 32767,
  //         maxAge: 3600000, // 1 hour
  //       },
  //     },
  //     strategy: {
  //       enableEtag: true,
  //       logs: true,
  //       clearRelatedCache: true,
  //       maxAge: 3600000,
  //       contentTypes: [
  //         // Add your content types here
  //         'api::article.article',
  //         'api::category.category',
  //       ],
  //     },
  //   },
  // },
});