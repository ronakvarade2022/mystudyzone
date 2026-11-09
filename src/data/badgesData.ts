import { AchievementBadge } from '../types';

export const ALL_BADGES: AchievementBadge[] = [
  {
    id: 'badge-first-quiz',
    name: 'First Step Champion',
    description: 'Completed your very first 10-question subject quiz with flying colors!',
    icon: 'Trophy',
    category: 'quiz',
    pointsRequirement: 50
  },
  {
    id: 'badge-accuracy-master',
    name: 'Bullseye Scholar',
    description: 'Scored 100% accuracy (10/10 correct) in any subject quiz.',
    icon: 'Target',
    category: 'quiz',
    pointsRequirement: 100
  },
  {
    id: 'badge-streak-3',
    name: 'Flame Keeper',
    description: 'Maintained a 3-day consecutive learning streak.',
    icon: 'Flame',
    category: 'streak',
    pointsRequirement: 150
  },
  {
    id: 'badge-story-worm',
    name: 'Bookworm Champion',
    description: 'Read and listened to 5 captivating stories in Story World.',
    icon: 'BookOpen',
    category: 'story',
    pointsRequirement: 200
  },
  {
    id: 'badge-artist-pro',
    name: 'Master Piccolo',
    description: 'Created and saved 3 vibrant drawings in Drawing Champions.',
    icon: 'Palette',
    category: 'drawing',
    pointsRequirement: 120
  },
  {
    id: 'badge-colouring-star',
    name: 'Colouring Star',
    description: 'Coloured ready-made outlines with vibrant accuracy in the Colouring Studio.',
    icon: 'Sparkles',
    category: 'drawing',
    pointsRequirement: 150
  },
  {
    id: 'badge-nature-artist',
    name: 'Nature Artist',
    description: 'Completed beautiful nature, garden, or scenery drawings.',
    icon: 'Palette',
    category: 'drawing',
    pointsRequirement: 180
  },
  {
    id: 'badge-creative-champion',
    name: 'Creative Champion',
    description: 'Created an original masterpiece from imagination on a blank canvas in My Own Drawing Studio.',
    icon: 'Sparkles',
    category: 'drawing',
    pointsRequirement: 220
  },
  {
    id: 'badge-young-artist',
    name: 'Young Artist',
    description: 'Completed 5 drawings across Colouring Studio and My Own Drawing Studio.',
    icon: 'Award',
    category: 'drawing',
    pointsRequirement: 260
  },
  {
    id: 'badge-master-painter',
    name: 'Master Painter',
    description: 'Mastered drawing challenges and unlocked prestigious artistic achievements.',
    icon: 'Trophy',
    category: 'drawing',
    pointsRequirement: 350
  },
  {
    id: 'badge-puzzle-genius',
    name: 'Brainiac Master',
    description: 'Cracked 5 challenging puzzles in Puzzle Champions.',
    icon: 'Sparkles',
    category: 'puzzle',
    pointsRequirement: 180
  },
  {
    id: 'badge-speedster',
    name: 'Lightning Solver',
    description: 'Finished a 10-question quiz in under 90 seconds with over 80% accuracy.',
    icon: 'Zap',
    category: 'quiz',
    pointsRequirement: 250
  },
  {
    id: 'badge-math-whiz',
    name: 'Math Wizard',
    description: 'Mastered 3 Mathematics quizzes with zero repeated questions.',
    icon: 'Calculator',
    category: 'quiz',
    pointsRequirement: 300
  },
  {
    id: 'badge-linguist',
    name: 'Polyglot Explorer',
    description: 'Explored stories in all three languages: English, Hindi, and Marathi.',
    icon: 'Globe',
    category: 'story',
    pointsRequirement: 350
  },
  {
    id: 'badge-champion-premium',
    name: 'VIP Champion Club',
    description: 'Activated Champion membership with verified proof of payment.',
    icon: 'Crown',
    category: 'membership',
    pointsRequirement: 0
  }
];

export const LEVEL_NAMES = [
  'Level 1: Beginner Champion',
  'Level 2: Smart Champion',
  'Level 3: Super Champion',
  'Level 4: Master Champion',
  'Level 5: Ultimate Champion'
];

export function calculateLevel(points: number): { level: number; name: string; nextThreshold: number; currentThreshold: number } {
  if (points < 200) {
    return { level: 1, name: LEVEL_NAMES[0], currentThreshold: 0, nextThreshold: 200 };
  } else if (points < 500) {
    return { level: 2, name: LEVEL_NAMES[1], currentThreshold: 200, nextThreshold: 500 };
  } else if (points < 1000) {
    return { level: 3, name: LEVEL_NAMES[2], currentThreshold: 500, nextThreshold: 1000 };
  } else if (points < 2000) {
    return { level: 4, name: LEVEL_NAMES[3], currentThreshold: 1000, nextThreshold: 2000 };
  } else {
    return { level: 5, name: LEVEL_NAMES[4], currentThreshold: 2000, nextThreshold: 5000 };
  }
}
