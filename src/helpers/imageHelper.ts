import { client } from '../sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import type { SanityAsset } from '@sanity/image-url/lib/types/types';

export const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}