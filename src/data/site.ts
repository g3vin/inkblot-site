/**
 * site.ts — facts about Inkblot that more than one part of the site repeats.
 */
export const SITE = {
  name: 'Inkblot',
  url: 'https://inkblotwriting.studio',
  title: 'Inkblot: Write.',
  description:
    'Inkblot is a free, open-source writing app. Write beside your canvas and map, keep notes on the words they are about, and set it all as a book. No AI writing for you.',
  tagline: 'Start with a sentence. Finish with a book.',
  source: 'https://github.com/g3vin/inkblot',
  support: 'https://opencollective.com/inkblot',
  licence: { name: 'Apache 2.0', url: 'https://www.apache.org/licenses/LICENSE-2.0' },
  /** Placeholder until the owner confirms the legal name. */
  owner: '[Soupy Orange Cats Co-op]',
  /** Shown in the head as the browser's chrome colour over the hero. */
  themeColor: '#1d2a1f',
  ogImage: '/og.jpg' as string | null,
}

/** The price, said once, at the end of the home page (PriceSection). */
export const PRICE = {
  title: 'Free.',
  line: 'Every feature, on every device, for everyone. Forever.',
  body: 'No ads, no card, nothing held back. Open source under Apache 2.0, with no CLA, so no one can take it private.',
  note: 'Sync through your own folders is free.',
}
