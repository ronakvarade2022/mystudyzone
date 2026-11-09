import { StoryItem } from '../types';
import { ENGLISH_STORIES } from './storiesEnglish';
import { HINDI_STORIES } from './storiesHindi';
import { MARATHI_STORIES } from './storiesMarathi';

export const ALL_45_STORIES: StoryItem[] = [
  ...ENGLISH_STORIES,
  ...HINDI_STORIES,
  ...MARATHI_STORIES
];

export { ENGLISH_STORIES, HINDI_STORIES, MARATHI_STORIES };
