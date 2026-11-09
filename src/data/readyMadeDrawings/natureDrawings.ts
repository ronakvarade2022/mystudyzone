import { DrawingTemplate } from '../../types';

export const NATURE_DRAWINGS: DrawingTemplate[] = [
  {
    id: 'nat-01',
    title: 'Beautiful Garden',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A charming garden with a sun, picket fence, flowers, and fluttering butterflies.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="100" cy="90" r="45" fill="none" stroke="#000000" stroke-width="3"/>
      <line x1="100" y1="30" x2="100" y2="10" stroke="#000000" stroke-width="3"/>
      <line x1="100" y1="150" x2="100" y2="170" stroke="#000000" stroke-width="3"/>
      <line x1="40" y1="90" x2="20" y2="90" stroke="#000000" stroke-width="3"/>
      <line x1="160" y1="90" x2="180" y2="90" stroke="#000000" stroke-width="3"/>
      <line x1="55" y1="45" x2="40" y2="30" stroke="#000000" stroke-width="3"/>
      <line x1="145" y1="45" x2="160" y2="30" stroke="#000000" stroke-width="3"/>
      <!-- Ground -->
      <polygon points="0,380 600,380 600,500 0,500" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Flower 1 -->
      <circle cx="200" cy="300" r="22" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="200" cy="260" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="235" cy="285" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="230" cy="325" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="170" cy="325" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="165" cy="285" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <line x1="200" y1="322" x2="200" y2="380" stroke="#000000" stroke-width="5"/>
      <ellipse cx="230" cy="355" rx="20" ry="10" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Flower 2 -->
      <circle cx="400" cy="290" r="24" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="400" cy="250" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="435" cy="275" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="430" cy="315" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="370" cy="315" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="365" cy="275" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <line x1="400" y1="314" x2="400" y2="380" stroke="#000000" stroke-width="5"/>
      <ellipse cx="370" cy="350" rx="20" ry="10" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Fence pickets -->
      <polygon points="50,380 50,320 65,300 80,320 80,380" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="90,380 90,320 105,300 120,320 120,380" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="480,380 480,320 495,300 510,320 510,380" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="520,380 520,320 535,300 550,320 550,380" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-02',
    title: 'Flowers',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A cheerful blooming flower with multiple distinct petals, leaves, and stem.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Center disc -->
      <circle cx="300" cy="200" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Petals around center -->
      <circle cx="300" cy="115" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="370" cy="140" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="385" cy="210" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="355" cy="275" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="285" cy="285" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="225" cy="250" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="215" cy="175" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Stem -->
      <rect x="294" y="245" width="12" height="200" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Left Leaf -->
      <ellipse cx="230" cy="340" rx="55" ry="25" transform="rotate(-25 230 340)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Right Leaf -->
      <ellipse cx="370" cy="370" rx="55" ry="25" transform="rotate(25 370 370)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Pot / Ground -->
      <polygon points="220,445 380,445 360,490 240,490" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'nat-03',
    title: 'Trees',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A grand shady tree with lush foliage crowns, sturdy trunk, and sweet apples.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ground -->
      <polygon points="0,420 600,420 600,500 0,500" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Trunk -->
      <polygon points="260,240 340,240 360,420 240,420" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Foliage Lobes -->
      <circle cx="300" cy="140" r="75" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="210" cy="190" r="65" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="390" cy="190" r="65" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="270" cy="230" r="55" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="330" cy="230" r="55" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Apples -->
      <circle cx="260" cy="140" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="340" cy="130" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="210" cy="200" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="380" cy="210" r="14" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-04',
    title: 'Rainbow',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A magical rainbow spanning between fluffy clouds above green rolling hills.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Concentric Rainbow Arcs -->
      <path d="M 80 340 A 220 220 0 0 1 520 340" fill="none" stroke="#000000" stroke-width="14"/>
      <path d="M 100 340 A 200 200 0 0 1 500 340" fill="none" stroke="#000000" stroke-width="14"/>
      <path d="M 120 340 A 180 180 0 0 1 480 340" fill="none" stroke="#000000" stroke-width="14"/>
      <path d="M 140 340 A 160 160 0 0 1 460 340" fill="none" stroke="#000000" stroke-width="14"/>
      <path d="M 160 340 A 140 140 0 0 1 440 340" fill="none" stroke="#000000" stroke-width="14"/>
      <path d="M 180 340 A 120 120 0 0 1 420 340" fill="none" stroke="#000000" stroke-width="14"/>
      <!-- Left Cloud -->
      <ellipse cx="90" cy="350" rx="45" ry="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="70" cy="330" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="110" cy="330" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Right Cloud -->
      <ellipse cx="510" cy="350" rx="45" ry="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="490" cy="330" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="530" cy="330" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Hills -->
      <polygon points="0,420 300,380 600,420 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'nat-05',
    title: 'Mountains',
    category: 'Nature',
    classTier: 'Classes 4–5',
    description: 'Majestic snowy mountain peaks with soaring eagles and an alpine river.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sun -->
      <circle cx="300" cy="110" r="38" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Main Center Peak -->
      <polygon points="120,380 300,120 480,380" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="260,180 300,120 340,180 320,195 300,185 280,195" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Left Peak -->
      <polygon points="20,400 160,180 300,400" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="130,230 160,180 190,230 175,240 160,235 145,240" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Right Peak -->
      <polygon points="320,400 460,200 590,400" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- River -->
      <polygon points="270,380 330,380 400,500 200,500" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'nat-06',
    title: 'Waterfall',
    category: 'Nature',
    classTier: 'Classes 4–5',
    description: 'A rushing natural waterfall cascading between rocky cliffs into a cool pool.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="0,0 220,0 200,280 0,340" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="380,0 600,0 600,340 400,280" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Falls Stream -->
      <polygon points="220,0 380,0 390,320 210,320" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="250,50 270,50 270,280 250,280" fill="none" stroke="#000000" stroke-width="2"/>
      <polygon points="330,50 350,50 350,280 330,280" fill="none" stroke="#000000" stroke-width="2"/>
      <!-- Pool -->
      <ellipse cx="300" cy="380" rx="200" ry="60" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="0,440 600,440 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'nat-07',
    title: 'River Scenery',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A tranquil river flowing past a cozy cottage with hills in the background.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="0,200 180,90 360,200" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="280,200 440,110 600,200" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="0,200 600,200 600,500 0,500" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- River Path -->
      <polygon points="240,200 360,200 500,500 120,500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Boat -->
      <polygon points="280,330 360,330 345,360 295,360" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="320,290 320,330 355,330" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-08',
    title: 'Sun and Clouds',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A smiling morning sun surrounded by drifting clouds and soaring birds.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="300" cy="220" r="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Smiling Face -->
      <circle cx="275" cy="205" r="8" fill="#000000"/>
      <circle cx="325" cy="205" r="8" fill="#000000"/>
      <path d="M 270 235 Q 300 265 330 235" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Rays -->
      <line x1="300" y1="130" x2="300" y2="90" stroke="#000000" stroke-width="4"/>
      <line x1="300" y1="310" x2="300" y2="350" stroke="#000000" stroke-width="4"/>
      <line x1="210" y1="220" x2="170" y2="220" stroke="#000000" stroke-width="4"/>
      <line x1="390" y1="220" x2="430" y2="220" stroke="#000000" stroke-width="4"/>
      <!-- Clouds -->
      <ellipse cx="140" cy="140" rx="55" ry="32" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="115" cy="120" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="165" cy="120" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="460" cy="160" rx="55" ry="32" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="435" cy="140" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="485" cy="140" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'nat-09',
    title: 'Birds on Trees',
    category: 'Nature',
    classTier: 'Classes 4–5',
    description: 'Two songbirds perched cheerfully on a blooming branch.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tree Branch -->
      <polygon points="0,320 600,280 600,320 0,360" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bird 1 (Left) -->
      <ellipse cx="200" cy="240" rx="45" ry="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="160" cy="215" r="22" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="140,215 125,220 140,225" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="155" cy="210" r="4" fill="#000000"/>
      <polygon points="240,230 290,210 250,255" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Bird 2 (Right) -->
      <ellipse cx="400" cy="230" rx="45" ry="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="440" cy="205" r="22" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="460,205 475,210 460,215" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="445" cy="200" r="4" fill="#000000"/>
      <polygon points="360,220 310,200 350,245" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Leaves -->
      <ellipse cx="120" cy="300" rx="25" ry="12" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="480" cy="265" rx="25" ry="12" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-10',
    title: 'Butterfly Garden',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A beautiful monarch butterfly landing on a garden flower.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Butterfly Body -->
      <ellipse cx="300" cy="240" rx="10" ry="55" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="300" cy="175" r="14" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Antennae -->
      <line x1="295" y1="165" x2="275" y2="135" stroke="#000000" stroke-width="3"/>
      <circle cx="275" cy="135" r="4" fill="#000000"/>
      <line x1="305" y1="165" x2="325" y2="135" stroke="#000000" stroke-width="3"/>
      <circle cx="325" cy="135" r="4" fill="#000000"/>
      <!-- Wings Left -->
      <ellipse cx="210" cy="190" rx="80" ry="55" transform="rotate(-20 210 190)" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="230" cy="275" rx="60" ry="40" transform="rotate(15 230 275)" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="210" cy="190" r="20" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Wings Right -->
      <ellipse cx="390" cy="190" rx="80" ry="55" transform="rotate(20 390 190)" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="370" cy="275" rx="60" ry="40" transform="rotate(-15 370 275)" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="390" cy="190" r="20" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Ground Flowers -->
      <circle cx="150" cy="430" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="450" cy="430" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'nat-11',
    title: 'Village Scenery',
    category: 'Nature',
    classTier: 'Classes 4–5',
    description: 'A traditional Indian village with thatched hut, coconut palm, and well.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Hut Roof -->
      <polygon points="120,240 230,150 340,240" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Hut Wall -->
      <rect x="140" y="240" width="180" height="130" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Door -->
      <rect x="205" y="290" width="50" height="80" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Window -->
      <rect x="155" y="260" width="35" height="35" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Palm Tree Trunk -->
      <polygon points="460,170 480,170 500,420 460,420" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Palm Fronds -->
      <ellipse cx="430" cy="140" rx="55" ry="18" transform="rotate(-30 430 140)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="510" cy="140" rx="55" ry="18" transform="rotate(30 510 140)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="470" cy="115" rx="50" ry="18" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Ground -->
      <polygon points="0,370 600,370 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'nat-12',
    title: 'Forest',
    category: 'Nature',
    classTier: 'Classes 6–8',
    description: 'A dense evergreen pine forest with winding pathway and mountain backdrop.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tree 1 -->
      <polygon points="120,180 80,240 160,240" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="120,220 70,290 170,290" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="120,270 50,360 190,360" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="110" y="360" width="20" height="60" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Tree 2 (Center) -->
      <polygon points="300,140 250,210 350,210" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="300,190 230,270 370,270" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="300,250 210,350 390,350" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="290" y="350" width="20" height="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tree 3 -->
      <polygon points="480,180 440,240 520,240" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="480,220 430,290 530,290" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="480,270 410,360 550,360" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="470" y="360" width="20" height="60" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Ground Path -->
      <polygon points="0,420 600,420 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="260,420 340,420 400,500 200,500" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-13',
    title: 'Beach',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A sunny ocean beach with gentle waves, sandcastles, and coconut tree.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sun -->
      <circle cx="120" cy="110" r="45" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Sea Horizon -->
      <polygon points="0,240 600,240 600,340 0,340" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sandy Shore -->
      <polygon points="0,340 600,340 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Beach Umbrella -->
      <polygon points="380,260 480,260 430,190" fill="none" stroke="#000000" stroke-width="4"/>
      <line x1="430" y1="260" x2="430" y2="380" stroke="#000000" stroke-width="4"/>
      <!-- Sandcastle -->
      <rect x="180" y="380" width="80" height="50" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="170,380 220,330 270,380" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Beach Ball -->
      <circle cx="310" cy="420" r="24" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-14',
    title: 'Fruits',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A delicious assortment of apple, banana, and juicy orange.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Apple -->
      <circle cx="210" cy="270" r="65" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="206" y="180" width="8" height="30" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="230" cy="190" rx="20" ry="10" transform="rotate(-20 230 190)" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Orange -->
      <circle cx="390" cy="280" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="390" cy="225" r="5" fill="#000000"/>
      <!-- Banana -->
      <path d="M 220 380 Q 300 450 420 380 Q 300 400 220 380 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bowl Base -->
      <polygon points="120,360 480,360 420,460 180,460" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'nat-15',
    title: 'Vegetables',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'Healthy farm vegetables: crisp carrot, round tomato, and purple brinjal.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Carrot (Center) -->
      <polygon points="280,180 320,180 300,380" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="290,140 300,180 310,140" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Tomato (Left) -->
      <circle cx="180" cy="300" r="55" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="160,240 180,250 200,240 180,230" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Brinjal (Right) -->
      <ellipse cx="420" cy="280" rx="45" ry="65" transform="rotate(15 420 280)" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="400,210 430,210 420,180" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-16',
    title: 'Plants',
    category: 'Nature',
    classTier: 'Classes 2–3',
    description: 'A young green sprout emerging from the fertile soil towards the light.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ground -->
      <polygon points="0,380 600,380 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Stem -->
      <rect x="293" y="180" width="14" height="200" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Top Leaves -->
      <ellipse cx="250" cy="180" rx="45" ry="20" transform="rotate(-30 250 180)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="350" cy="180" rx="45" ry="20" transform="rotate(30 350 180)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Middle Leaves -->
      <ellipse cx="230" cy="270" rx="55" ry="24" transform="rotate(-25 230 270)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="370" cy="270" rx="55" ry="24" transform="rotate(25 370 270)" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'nat-17',
    title: 'Flower Pots',
    category: 'Nature',
    classTier: 'Classes 4–5',
    description: 'An ornate clay flower pot blooming with vibrant spring blossoms.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Pot Rim -->
      <rect x="180" y="280" width="240" height="35" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Pot Body -->
      <polygon points="200,315 400,315 360,460 240,460" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Flowers -->
      <circle cx="300" cy="180" r="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="230" cy="210" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="370" cy="210" r="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="300" cy="130" r="20" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="240" cy="150" r="20" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="360" cy="150" r="20" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-18',
    title: 'Nature Landscape',
    category: 'Nature',
    classTier: 'Classes 6–8',
    description: 'A panoramic valley with mountain ridges, pine trees, and a sunlit lake.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="0,260 160,110 320,260" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="260,260 420,90 580,260" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Lake -->
      <polygon points="0,320 600,320 600,430 0,430" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Foreground -->
      <polygon points="0,430 600,430 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sun -->
      <circle cx="300" cy="80" r="30" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'nat-19',
    title: 'Seasons',
    category: 'Nature',
    classTier: 'Classes 4–5',
    description: 'Representation of the seasons with warm summer sun and gentle rain clouds.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <line x1="300" y1="0" x2="300" y2="500" stroke="#000000" stroke-width="3" stroke-dasharray="8 6"/>
      <!-- Summer Side (Left) -->
      <circle cx="150" cy="140" r="50" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="70,380 230,380 200,470 100,470" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="150" cy="320" r="40" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Monsoon / Winter Side (Right) -->
      <ellipse cx="450" cy="140" rx="60" ry="35" fill="none" stroke="#000000" stroke-width="4"/>
      <line x1="420" y1="190" x2="410" y2="230" stroke="#000000" stroke-width="3"/>
      <line x1="450" y1="190" x2="440" y2="230" stroke="#000000" stroke-width="3"/>
      <line x1="480" y1="190" x2="470" y2="230" stroke="#000000" stroke-width="3"/>
      <!-- Umbrella -->
      <path d="M 380 380 A 70 70 0 0 1 520 380 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <line x1="450" y1="380" x2="450" y2="460" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'nat-20',
    title: 'Save Nature',
    category: 'Nature',
    classTier: 'Classes 4–5',
    description: 'Nurturing hands holding planet Earth and a sapling to protect our planet.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Globe -->
      <circle cx="300" cy="230" r="110" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Continents -->
      <circle cx="260" cy="200" r="35" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="340" cy="240" r="40" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Sapling on Top -->
      <rect x="296" y="80" width="8" height="45" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="275" cy="75" rx="20" ry="10" transform="rotate(-30 275 75)" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="325" cy="75" rx="20" ry="10" transform="rotate(30 325 75)" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Caring Hands Base -->
      <path d="M 160 380 Q 230 460 300 460 Q 370 460 440 380 Q 370 420 300 420 Q 230 420 160 380 Z" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  }
];
