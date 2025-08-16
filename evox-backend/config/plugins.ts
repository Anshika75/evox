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
        // This is the public URL where files will be accessible
        cloudflarePublicAccessUrl: env('R2_PUBLIC_URL'),
      },
      actionOptions: {
        upload: {
          ACL: 'public-read',
        },
        uploadStream: {
          ACL: 'public-read',
        },
        delete: {},
      },
    },
  },
});