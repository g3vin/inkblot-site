/**
 * places.ts — the place registry (SITE_PLAN.md → "Registries: one place to swap assets").
 * Everything on the site refers to a place by id; swapping an image or clip means
 * editing its entry here.
 *
 * Only the landing hero exists so far. The feature places (open field, coastline,
 * night sky, …) are added in stage 4.
 */
export interface Place {
  id: string
  /** A slow, seamless loop (H.264, under 3 MB for the hero), or null for a still. */
  video: string | null
  /** The same loop as VP9 WebM, about half the size; used where the browser plays it. */
  videoWebm?: string
  /** The still: the video's poster, and what reduced motion shows. */
  image: string
  /** WebP posters by width, for srcset. The first entry is the smallest. */
  posters?: { src: string; width: number }[]
  alt: string
  /** The Courier Prime caption line. */
  caption: string
  /** Where the eye should land when the frame is cropped (CSS object-position). */
  focus: string
  credit: { title: string; author: string; licence: string; source: string; changes: string }
}

export const PLACES: Record<string, Place> = {
  // The landing hero: "Write." over backlit summer leaves moving slowly in the wind.
  // Alternates, in order, if it is ever swapped: poplars against the sky (Molgreen,
  // CC BY-SA 4.0), an autumn canopy (Oakley413, CC BY-SA 4.0), the drawn leaf shadows.
  'leaves-summer': {
    id: 'leaves-summer',
    video: '/media/places/leaves-summer.mp4',
    videoWebm: '/media/places/leaves-summer.webm',
    image: '/media/places/leaves-summer.jpg',
    posters: [
      { src: '/media/places/leaves-summer-720.webp', width: 720 },
      { src: '/media/places/leaves-summer-1280.webp', width: 1280 },
    ],
    alt: 'Backlit green leaves drifting slowly in a summer breeze.',
    caption: 'Fig. 1 · Leaves, close, midsummer',
    focus: '50% 45%',
    credit: {
      title: 'Leaves in summer',
      author: 'Joaquim Baeta',
      licence: 'CC BY 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Leaves_in_summer.webm',
      changes: '14 s excerpt, slowed to 0.7×, cropped to 16:9 at 1280×720, looped with a 1.5 s crossfade',
    },
  },
}
