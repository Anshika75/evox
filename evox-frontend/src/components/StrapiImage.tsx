import { getStrapiURL } from "@/utils/get-strapi-url";
import Image from "next/image";

interface StrapiImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export function StrapiImage({
  src,
  alt,
  className,
  width,
  height,
  fill = false,
  priority = false,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  console.log("img: " + imageUrl);
  
  if (!imageUrl) return null;

  if (fill) {
    return (
      <Image 
        src={imageUrl} 
        alt={alt} 
        className={className}
        fill
        priority={priority}
        style={{ objectFit: 'cover' }}
        {...rest} 
      />
    );
  }


  return (  
    <Image 
      src={imageUrl} 
      alt={alt} 
      className={className}
      width={width}
      height={height}
      priority={priority}
      {...rest} 
    />
  );
}

export function getStrapiMedia(url: string | null): string | null {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStrapiURL() + url;
}