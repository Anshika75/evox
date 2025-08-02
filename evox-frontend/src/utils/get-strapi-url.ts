export function getStrapiURL(): string {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
  console.log("Environment STRAPI_URL:", process.env.NEXT_PUBLIC_STRAPI_URL);
  console.log("Returning Strapi URL:", strapiUrl);
  return strapiUrl;
}