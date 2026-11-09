import { DrawingCategory, DrawingTemplate, DrawingChallenge } from '../types';
import { NATURE_DRAWINGS } from './readyMadeDrawings/natureDrawings';
import { ANIMAL_DRAWINGS } from './readyMadeDrawings/animalDrawings';
import { FESTIVAL_DRAWINGS } from './readyMadeDrawings/festivalDrawings';
import { CARTOON_DRAWINGS } from './readyMadeDrawings/cartoonDrawings';
import { TRANSPORT_DRAWINGS } from './readyMadeDrawings/transportDrawings';
import { SCIENCE_DRAWINGS } from './readyMadeDrawings/scienceDrawings';

export interface CategoryInfo {
  id: DrawingCategory;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export const DRAWING_CATEGORIES: CategoryInfo[] = [
  {
    id: 'Nature',
    name: 'Nature',
    icon: '🏞️',
    description: 'Gardens, flowers, trees, rainbows, mountains, waterfalls, rivers, beaches, fruits and veggies.',
    count: NATURE_DRAWINGS.length
  },
  {
    id: 'Animals',
    name: 'Animals',
    icon: '🦁',
    description: 'Lions, elephants, tigers, giraffes, zebras, deer, rabbits, peacocks, fish, turtles, and dolphins.',
    count: ANIMAL_DRAWINGS.length
  },
  {
    id: 'Festivals',
    name: 'Festivals',
    icon: '🪔',
    description: 'Diwali diyas, Ganesh Chaturthi, Holi, Christmas, Raksha Bandhan, Independence Day, and Rangoli.',
    count: FESTIVAL_DRAWINGS.length
  },
  {
    id: 'Cartoon and Fun',
    name: 'Cartoon and Fun',
    icon: '🎨',
    description: 'Cartoon animals, teddy bears, smiley faces, superheroes, princesses, robots, dinosaurs, and castles.',
    count: CARTOON_DRAWINGS.length
  },
  {
    id: 'Transport',
    name: 'Transport',
    icon: '🚀',
    description: 'Cars, buses, steam trains, aeroplanes, helicopters, ships, bicycles, fire engines, and rockets.',
    count: TRANSPORT_DRAWINGS.length
  },
  {
    id: 'Education and Science',
    name: 'Education and Science',
    icon: '🔬',
    description: 'Solar system, planets, Earth, human body, parts of a flower, water cycle, lab equipment, and books.',
    count: SCIENCE_DRAWINGS.length
  }
];

export const READY_MADE_DRAWING_TEMPLATES: DrawingTemplate[] = [
  ...NATURE_DRAWINGS,
  ...ANIMAL_DRAWINGS,
  ...FESTIVAL_DRAWINGS,
  ...CARTOON_DRAWINGS,
  ...TRANSPORT_DRAWINGS,
  ...SCIENCE_DRAWINGS
];

export const ACTIVE_DRAWING_CHALLENGES: DrawingChallenge[] = [
  {
    id: 'ch-daily-colour',
    title: 'Daily Colouring Challenge',
    type: 'daily',
    theme: 'Flowers in Bloom',
    description: 'Colour today’s flower drawing using at least 4 distinct vibrant shades.',
    rewardPoints: 30,
    badgeId: 'badge-colouring-star',
    badgeName: 'Colouring Star',
    endsIn: 'Today 11:59 PM'
  },
  {
    id: 'ch-weekly-nature',
    title: 'Weekly Nature Drawing Challenge',
    type: 'nature',
    theme: 'Mountains and Alpine River',
    description: 'Paint a scenic landscape with mountains, rising sun, and a sparkling blue river.',
    rewardPoints: 50,
    badgeId: 'badge-nature-artist',
    badgeName: 'Nature Artist',
    endsIn: '5 Days Left'
  },
  {
    id: 'ch-festival-comp',
    title: 'Festival Drawing Competition',
    type: 'festival',
    theme: 'Diwali Celebration of Lights',
    description: 'Celebrate our festival with golden diya flames, colourful rangoli, and fireworks.',
    rewardPoints: 75,
    badgeId: 'badge-creative-champion',
    badgeName: 'Creative Champion',
    endsIn: 'Sunday 8:00 PM'
  },
  {
    id: 'ch-imagination-fest',
    title: 'Creative Imagination Challenge',
    type: 'creative',
    theme: 'My Dream Flying Machine',
    description: 'Create an original invention on the blank canvas using custom shapes and vibrant brushes.',
    rewardPoints: 60,
    badgeId: 'badge-master-painter',
    badgeName: 'Master Painter',
    endsIn: 'Ongoing'
  }
];
