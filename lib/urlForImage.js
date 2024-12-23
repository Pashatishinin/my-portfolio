import { useSanityClient, createImageBuilder} from "astro-sanity"

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
    return imageBuilder.image(source);
}