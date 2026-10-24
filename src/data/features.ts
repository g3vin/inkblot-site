/**
 * features.ts — the landing page's roster. One entry per row; adding a feature adds a
 * row. When the row is cut open it shows `shot`, the app's own capture, or for a feature
 * not built yet the sketch `scene` names (src/scripts/featureScenes.ts).
 */
export interface Feature {
  id: string
  name: string
  /** Three to seven words: what the feature does for the writer. */
  benefit: string
  /** The feature page, once stage 4 builds it. */
  href: string
  scene: string
  /** The app's capture of it at work (screens.ts), shown in the cut in place of the drawing. */
  shot?: string
}

// The signature features (one window, anchored notes, ownership) and typesetting have
// sections of their own, so the roster is everything else, most-asked first.
export const FEATURES: Feature[] = [
  { id: 'timeline', name: 'Timeline', benefit: 'Who was where, and when.', href: '/#features', scene: 'timeline', shot: 'timeline' },
  { id: 'history', name: 'Version history', benefit: 'Name it, compare it, bring it back.', href: '/#features', scene: 'history', shot: 'history' },
  { id: 'language', name: 'Language tools', benefit: 'Synonyms, rhymes and dictation, on your device.', href: '/#features', scene: 'dictation', shot: 'language' },
  { id: 'bubble', name: 'Bubble editor', benefit: 'Move a sentence word by word.', href: '/#features', scene: 'dictation', shot: 'bubble' },
  { id: 'orbit', name: 'Orbit', benefit: 'Ideas drifting together until they make sense.', href: '/#features', scene: 'orbit' },
  { id: 'flowcharts', name: 'Flowcharts', benefit: 'Branching stories, mapped and played through.', href: '/#features', scene: 'flowcharts' },
  { id: 'screenplays', name: 'Screenplays', benefit: 'Industry format as you type.', href: '/#features', scene: 'screenplays', shot: 'screenplays' },
  { id: 'references', name: 'References', benefit: 'APA, MLA and Chicago, from a DOI.', href: '/#features', scene: 'references', shot: 'references' },
  { id: 'review', name: 'Review mode', benefit: 'Suggest changes, the way editors do.', href: '/#features', scene: 'review' },
  { id: 'cowriting', name: 'Co-writing', benefit: 'Write together, live.', href: '/#features', scene: 'cowriting' },
  { id: 'readers', name: 'Reader copies', benefit: "Beta readers' notes, back in yours.", href: '/#features', scene: 'readers' },
  { id: 'publish', name: 'Publish', benefit: 'Post to AO3, WordPress, Ghost, Substack.', href: '/#features', scene: 'publish' },
]
