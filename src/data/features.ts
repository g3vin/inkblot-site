/**
 * features.ts — the landing page's roster. One entry per row; adding a feature adds a
 * row. `scene` picks the sketch shown when the row is cut open (src/scripts/featureScenes.ts)
 * until real screenshots exist.
 */
export interface Feature {
  id: string
  name: string
  /** Three to seven words: what the feature does for the writer. */
  benefit: string
  /** The feature page, once stage 4 builds it. */
  href: string
  scene: string
}

// The signature features (one window, anchored notes, ownership) and typesetting have
// sections of their own, so the roster is everything else, most-asked first.
export const FEATURES: Feature[] = [
  { id: 'timeline', name: 'Timeline', benefit: 'Who was where, and when.', href: '/#features', scene: 'timeline' },
  { id: 'history', name: 'Version history', benefit: 'Name it, compare it, bring it back.', href: '/#features', scene: 'history' },
  { id: 'language', name: 'Language tools', benefit: 'Synonyms, rhymes and dictation, on your device.', href: '/#features', scene: 'dictation' },
  // Reuses the dictation sketch until a Bubble editor scene exists.
  { id: 'bubble', name: 'Bubble editor', benefit: 'Move a sentence word by word.', href: '/#features', scene: 'dictation' },
  { id: 'orbit', name: 'Orbit', benefit: 'Ideas drifting together until they make sense.', href: '/#features', scene: 'orbit' },
  { id: 'flowcharts', name: 'Flowcharts', benefit: 'Branching stories, mapped and played through.', href: '/#features', scene: 'flowcharts' },
  { id: 'screenplays', name: 'Screenplays', benefit: 'Industry format as you type.', href: '/#features', scene: 'screenplays' },
  { id: 'references', name: 'References', benefit: 'APA, MLA and Chicago, from a DOI.', href: '/#features', scene: 'references' },
  { id: 'review', name: 'Review mode', benefit: 'Suggest changes, the way editors do.', href: '/#features', scene: 'review' },
  { id: 'cowriting', name: 'Co-writing', benefit: 'Write together, live.', href: '/#features', scene: 'cowriting' },
  { id: 'readers', name: 'Reader copies', benefit: "Beta readers' notes, back in yours.", href: '/#features', scene: 'readers' },
  { id: 'publish', name: 'Publish', benefit: 'Post to AO3, WordPress, Ghost, Substack.', href: '/#features', scene: 'publish' },
]
