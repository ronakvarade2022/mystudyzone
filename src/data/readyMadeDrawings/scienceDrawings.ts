import { DrawingTemplate } from '../../types';

export const SCIENCE_DRAWINGS: DrawingTemplate[] = [
  {
    id: 'sci-01',
    title: 'Solar System',
    category: 'Education and Science',
    classTier: 'Classes 4–5',
    description: 'The glowing Sun and orbiting planets Mercury, Venus, Earth, Mars, and Jupiter.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sun Arc Left -->
      <path d="M 0 50 Q 120 250 0 450 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Orbit 1 & Mercury -->
      <ellipse cx="0" cy="250" rx="160" ry="160" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="6 4"/>
      <circle cx="160" cy="250" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Orbit 2 & Venus -->
      <ellipse cx="0" cy="250" rx="230" ry="230" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="6 4"/>
      <circle cx="210" cy="180" r="20" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Orbit 3 & Earth -->
      <ellipse cx="0" cy="250" rx="320" ry="320" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="6 4"/>
      <circle cx="280" cy="360" r="24" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Orbit 4 & Saturn with Rings -->
      <ellipse cx="0" cy="250" rx="440" ry="440" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="6 4"/>
      <circle cx="440" cy="250" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="440" cy="250" rx="58" ry="12" transform="rotate(-20 440 250)" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'sci-02',
    title: 'Planets',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'A ringed planet floating amidst twinkling cosmic stars.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Big Planet Body -->
      <circle cx="300" cy="250" r="100" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Planetary Rings -->
      <ellipse cx="300" cy="250" rx="210" ry="45" transform="rotate(-15 300 250)" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Nearby Moon -->
      <circle cx="460" cy="130" r="24" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Twinkling Stars -->
      <polygon points="140,110 145,122 158,122 148,130 152,142 140,134 128,142 132,130 122,122 135,122" fill="none" stroke="#000000" stroke-width="2.5"/>
      <polygon points="440,380 445,392 458,392 448,400 452,412 440,404 428,412 432,400 422,392 435,392" fill="none" stroke="#000000" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'sci-03',
    title: 'Earth',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'Our blue planet Earth with oceans, continents, and green land.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Globe Outer Boundary -->
      <circle cx="300" cy="250" r="160" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Continent 1 (Asia/India) -->
      <path d="M 280 180 Q 320 150 360 190 Q 380 240 330 260 Q 300 290 280 240 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Continent 2 (Africa) -->
      <path d="M 230 220 Q 260 210 250 290 Q 230 330 200 280 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Continent 3 (Americas) -->
      <path d="M 160 160 Q 200 170 180 230 Q 150 250 140 190 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'sci-04',
    title: 'Human Body',
    category: 'Education and Science',
    classTier: 'Classes 4–5',
    description: 'Anatomical diagram outline of the human figure for science learning.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="90" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Torso Box -->
      <polygon points="250,140 350,140 330,300 270,300" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Heart Symbol Inside -->
      <path d="M 290 190 A 10 10 0 0 0 280 175 A 10 10 0 0 0 270 190 Q 270 205 280 215 L 290 190 Z" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Arms -->
      <rect x="160" y="150" width="85" height="24" rx="8" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="355" y="150" width="85" height="24" rx="8" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Legs -->
      <rect x="260" y="300" width="30" height="150" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="310" y="300" width="30" height="150" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'sci-05',
    title: 'Parts of a Flower',
    category: 'Education and Science',
    classTier: 'Classes 4–5',
    description: 'Scientific cross-section of a flower showing petals, sepal, stamen, and pistil.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Stem -->
      <rect x="292" y="270" width="16" height="180" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Receptacle / Sepal -->
      <polygon points="260,270 340,270 320,310 280,310" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Central Pistil -->
      <ellipse cx="300" cy="180" rx="20" ry="60" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Left Petal -->
      <path d="M 280 270 Q 160 220 200 120 Q 280 180 280 270 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Right Petal -->
      <path d="M 320 270 Q 440 220 400 120 Q 320 180 320 270 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Leaf -->
      <ellipse cx="230" cy="360" rx="45" ry="18" transform="rotate(-25 230 360)" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'sci-06',
    title: 'Water Cycle',
    category: 'Education and Science',
    classTier: 'Classes 6–8',
    description: 'Evaporation, condensation, cloud formation, precipitation, and rivers.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sun (Evaporation heat) -->
      <circle cx="100" cy="90" r="40" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Condensation Cloud -->
      <ellipse cx="440" cy="120" rx="70" ry="35" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Rain Precipitation -->
      <line x1="400" y1="170" x2="390" y2="210" stroke="#000000" stroke-width="3"/>
      <line x1="440" y1="170" x2="430" y2="210" stroke="#000000" stroke-width="3"/>
      <line x1="480" y1="170" x2="470" y2="210" stroke="#000000" stroke-width="3"/>
      <!-- Mountain & River -->
      <polygon points="260,340 400,180 540,340" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="0,340 600,340 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ocean Reservoir -->
      <polygon points="0,400 240,400 220,500 0,500" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'sci-07',
    title: 'Science Laboratory',
    category: 'Education and Science',
    classTier: 'Classes 6–8',
    description: 'A chemistry lab bench with beakers, test tubes, and bunsen burner.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Lab Bench Table -->
      <rect x="60" y="320" width="480" height="40" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="90" y="360" width="25" height="100" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="485" y="360" width="25" height="100" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Conical Flask (Center) -->
      <polygon points="260,320 340,320 310,200 290,200" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="285" y="180" width="30" height="20" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Beaker (Left) -->
      <rect x="140" y="220" width="70" height="100" rx="5" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Microscope (Right) -->
      <rect x="410" y="240" width="20" height="80" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="420" cy="220" r="16" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'sci-08',
    title: 'Science Equipment',
    category: 'Education and Science',
    classTier: 'Classes 4–5',
    description: 'Magnifying glass, microscope, and test tubes with measurement ticks.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Giant Magnifying Glass -->
      <circle cx="260" cy="220" r="110" fill="none" stroke="#000000" stroke-width="6"/>
      <circle cx="260" cy="220" r="85" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="340,300 460,420 420,450 310,330" fill="none" stroke="#000000" stroke-width="5"/>
    </svg>`
  },
  {
    id: 'sci-09',
    title: 'School Classroom',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'Blackboard with ABC 123, teacher desk, globe, and student bench.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Blackboard -->
      <rect x="120" y="80" width="360" height="190" rx="8" fill="none" stroke="#000000" stroke-width="5"/>
      <rect x="140" y="100" width="320" height="150" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Teacher Desk -->
      <polygon points="180,360 420,360 460,450 140,450" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'sci-10',
    title: 'Books',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'An open encyclopedia of knowledge with pages turning.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Open Book Spine -->
      <polygon points="300,160 300,380 290,390 290,170" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Left Page -->
      <path d="M 300 160 Q 180 140 100 170 L 100 370 Q 180 340 300 380 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Right Page -->
      <path d="M 300 160 Q 420 140 500 170 L 500 370 Q 420 340 300 380 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bookmarks -->
      <polygon points="290,160 310,160 300,230" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'sci-11',
    title: 'Alphabets',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'Chunky block letters A, B, and C with playful patterns.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Letter A -->
      <polygon points="120,360 160,180 200,180 240,360 195,360 180,300 145,300 135,360" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="160,240 170,200 175,240" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Letter B -->
      <path d="M 280 180 L 340 180 Q 380 180 380 220 Q 380 250 340 250 Q 390 250 390 300 Q 390 360 340 360 L 280 360 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Letter C -->
      <path d="M 500 220 Q 430 180 430 270 Q 430 360 500 320" fill="none" stroke="#000000" stroke-width="6"/>
    </svg>`
  },
  {
    id: 'sci-12',
    title: 'Numbers',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'Fun numbers 1, 2, and 3 with smiling faces and party hats.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Number 1 -->
      <polygon points="130,220 170,180 170,360 130,360 210,360 210,330 170,330 170,210 130,230" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Number 2 -->
      <path d="M 270 210 Q 320 160 360 210 Q 370 260 280 360 L 380 360 L 380 330 L 310 330" fill="none" stroke="#000000" stroke-width="5"/>
      <!-- Number 3 -->
      <path d="M 440 190 Q 500 180 500 230 Q 500 260 460 265 Q 510 275 510 320 Q 510 370 440 360" fill="none" stroke="#000000" stroke-width="5"/>
    </svg>`
  },
  {
    id: 'sci-13',
    title: 'Shapes',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'Fundamental geometric shapes: circle, square, triangle, and star.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Circle -->
      <circle cx="200" cy="180" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Square -->
      <rect x="340" y="120" width="120" height="120" rx="8" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Triangle -->
      <polygon points="200,280 130,400 270,400" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Star -->
      <polygon points="400,280 415,320 455,320 422,345 435,385 400,360 365,385 378,345 345,320 385,320" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'sci-14',
    title: 'Mathematics Symbols',
    category: 'Education and Science',
    classTier: 'Classes 4–5',
    description: 'Plus, minus, multiply, divide, and equals math symbols.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Plus Symbol -->
      <polygon points="160,110 200,110 200,150 240,150 240,190 200,190 200,230 160,230 160,190 120,190 120,150 160,150" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Multiply Symbol -->
      <polygon points="360,110 400,150 440,110 470,140 430,180 470,220 440,250 400,210 360,250 330,220 370,180 330,140" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Minus -->
      <rect x="120" y="320" width="120" height="40" rx="8" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Divide -->
      <rect x="350" y="330" width="120" height="25" rx="6" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="410" cy="290" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="410" cy="390" r="14" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'sci-15',
    title: 'Geometrical Patterns',
    category: 'Education and Science',
    classTier: 'Classes 6–8',
    description: 'Interlocking hexagons and kaleidoscope sacred geometry.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Central Hexagon -->
      <polygon points="300,170 370,210 370,290 300,330 230,290 230,210" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Surrounding Hexagons -->
      <polygon points="300,90 370,130 370,170 300,210 230,170 230,130" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="370,130 440,170 440,250 370,290 370,210 300,170" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="160,170 230,130 300,170 230,210 230,290 160,250" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'sci-16',
    title: 'Space Exploration',
    category: 'Education and Science',
    classTier: 'Classes 6–8',
    description: 'An astronaut floating in zero-gravity tethered to a space shuttle.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Astronaut Helmet -->
      <circle cx="300" cy="180" r="55" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Visor -->
      <ellipse cx="300" cy="180" rx="38" ry="24" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Spacesuit Body -->
      <rect x="240" y="235" width="120" height="130" rx="15" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Oxygen Backpack -->
      <rect x="215" y="240" width="25" height="110" rx="6" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="360" y="240" width="25" height="110" rx="6" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Suit Legs -->
      <rect x="250" y="365" width="40" height="90" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="310" y="365" width="40" height="90" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'sci-17',
    title: 'Volcano',
    category: 'Education and Science',
    classTier: 'Classes 4–5',
    description: 'An active volcanic mountain erupting with magma and ash clouds.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ash Cloud on Top -->
      <ellipse cx="300" cy="110" rx="100" ry="45" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Volcano Slopes -->
      <polygon points="260,190 340,190 480,440 120,440" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Crater Rim -->
      <ellipse cx="300" cy="190" rx="40" ry="12" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Lava Flow Rivers -->
      <path d="M 290 190 Q 270 290 230 440" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 310 190 Q 340 290 380 440" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ground Base -->
      <polygon points="0,440 600,440 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'sci-18',
    title: 'Dinosaur Fossils',
    category: 'Education and Science',
    classTier: 'Classes 6–8',
    description: 'An excavated prehistoric dinosaur skeleton fossil in amber rock.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Skull -->
      <polygon points="160,200 240,170 240,240 180,250" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="215" cy="195" r="10" fill="#000000"/>
      <!-- Spine Vertebrae Line -->
      <path d="M 240 200 Q 360 210 460 270" fill="none" stroke="#000000" stroke-width="5"/>
      <!-- Ribs -->
      <line x1="280" y1="205" x2="270" y2="280" stroke="#000000" stroke-width="4"/>
      <line x1="310" y1="210" x2="300" y2="285" stroke="#000000" stroke-width="4"/>
      <line x1="340" y1="215" x2="330" y2="285" stroke="#000000" stroke-width="4"/>
      <line x1="370" y1="225" x2="360" y2="280" stroke="#000000" stroke-width="4"/>
      <!-- Leg Bones -->
      <polygon points="350,260 365,390 340,390" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'sci-19',
    title: 'Environment',
    category: 'Education and Science',
    classTier: 'Classes 4–5',
    description: 'Clean energy landscape with solar panels and wind turbines.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sun -->
      <circle cx="100" cy="100" r="40" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Wind Turbine Tower -->
      <polygon points="230,360 240,140 250,140 260,360" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="245" cy="140" r="12" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Blades -->
      <line x1="245" y1="140" x2="245" y2="60" stroke="#000000" stroke-width="4"/>
      <line x1="245" y1="140" x2="180" y2="180" stroke="#000000" stroke-width="4"/>
      <line x1="245" y1="140" x2="310" y2="180" stroke="#000000" stroke-width="4"/>
      <!-- Solar Panels -->
      <polygon points="360,290 480,260 490,340 370,370" fill="none" stroke="#000000" stroke-width="4"/>
      <line x1="420" y1="275" x2="430" y2="355" stroke="#000000" stroke-width="3"/>
      <!-- Rolling Hills Ground -->
      <polygon points="0,360 600,360 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'sci-20',
    title: 'Save Water',
    category: 'Education and Science',
    classTier: 'Classes 2–3',
    description: 'A crystal clear water droplet dripping from a tap into a green leaf.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Water Tap Spigot -->
      <rect x="220" y="80" width="160" height="40" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="260,120 340,120 330,170 270,170" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Big Water Droplet -->
      <path d="M 300 210 Q 370 300 370 340 A 70 70 0 1 1 230 340 Q 230 300 300 210 Z" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Droplet Highlight -->
      <ellipse cx="270" cy="330" rx="14" ry="24" transform="rotate(-20 270 330)" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Basin / Water Surface -->
      <polygon points="100,430 500,430 460,490 140,490" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  }
];
