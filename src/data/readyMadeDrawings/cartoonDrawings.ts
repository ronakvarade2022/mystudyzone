import { DrawingTemplate } from '../../types';

export const CARTOON_DRAWINGS: DrawingTemplate[] = [
  {
    id: 'car-01',
    title: 'Cartoon Animals',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A cute smiling cartoon animal with big eyes and round paws.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="190" r="85" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Big Cute Eyes -->
      <circle cx="265" cy="175" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="268" cy="172" r="8" fill="#000000"/>
      <circle cx="335" cy="175" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="338" cy="172" r="8" fill="#000000"/>
      <!-- Smiling Snout -->
      <ellipse cx="300" cy="210" rx="25" ry="16" fill="none" stroke="#000000" stroke-width="3"/>
      <path d="M 285 220 Q 300 235 315 220" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Round Ears -->
      <circle cx="225" cy="120" r="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="375" cy="120" r="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Body & Belly -->
      <ellipse cx="300" cy="350" rx="90" ry="100" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="300" cy="360" rx="55" ry="65" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'car-02',
    title: 'Teddy Bear',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A huggable plush teddy bear with a bow tie and stitched heart.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="180" r="75" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ears -->
      <circle cx="230" cy="125" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="370" cy="125" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Snout -->
      <ellipse cx="300" cy="205" rx="30" ry="20" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="292,198 308,198 300,208" fill="#000000"/>
      <!-- Eyes -->
      <circle cx="270" cy="170" r="7" fill="#000000"/>
      <circle cx="330" cy="170" r="7" fill="#000000"/>
      <!-- Bow Tie -->
      <polygon points="270,250 300,265 270,280" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="330,250 300,265 330,280" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="300" cy="265" r="8" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Body -->
      <ellipse cx="300" cy="360" rx="95" ry="100" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'car-03',
    title: 'Smiling Faces',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A giant cheerful smiley emoji radiating happiness and sunshine.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Big Face Circle -->
      <circle cx="300" cy="250" r="160" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Winking Eye Left -->
      <path d="M 210 200 Q 240 180 270 200" fill="none" stroke="#000000" stroke-width="6"/>
      <!-- Star Eye Right -->
      <circle cx="360" cy="200" r="22" fill="#000000"/>
      <!-- Big Laughing Mouth -->
      <path d="M 210 270 Q 300 370 390 270 Z" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Rosy Cheeks -->
      <circle cx="200" cy="260" r="20" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="400" cy="260" r="20" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'car-04',
    title: 'Superheroes',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A brave superhero soaring through the skies with a fluttering cape.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Flying Cape -->
      <polygon points="260,180 120,380 220,380 300,240" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head & Mask -->
      <circle cx="330" cy="150" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="300" y="140" width="60" height="20" rx="6" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Chest with Emblem -->
      <polygon points="280,195 380,195 350,330 310,330" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Diamond Emblem -->
      <polygon points="330,225 350,245 330,265 310,245" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Fists & Legs -->
      <rect x="370" y="140" width="90" height="30" rx="15" transform="rotate(-30 415 155)" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="300,330 330,480 360,480 340,330" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'car-05',
    title: 'Princess',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A royal fairy princess with sparkling tiara and bell gown.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tiara Crown -->
      <polygon points="260,110 270,75 285,95 300,70 315,95 330,75 340,110" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Face -->
      <circle cx="300" cy="150" r="45" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Hair Curls -->
      <ellipse cx="245" cy="180" rx="20" ry="45" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="355" cy="180" rx="20" ry="45" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Bodice -->
      <polygon points="275,195 325,195 315,260 285,260" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Gown Skirt -->
      <path d="M 285 260 L 315 260 L 460 460 L 140 460 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Magic Wand -->
      <line x1="360" y1="230" x2="430" y2="180" stroke="#000000" stroke-width="3"/>
      <polygon points="430,170 435,182 448,182 438,190 442,202 430,194 418,202 422,190 412,182 425,182" fill="none" stroke="#000000" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'car-06',
    title: 'Robots',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A friendly retro tin robot with dials, meters, and antennae.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Antenna -->
      <line x1="300" y1="100" x2="300" y2="50" stroke="#000000" stroke-width="4"/>
      <circle cx="300" cy="45" r="12" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Head Box -->
      <rect x="220" y="100" width="160" height="110" rx="15" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Eye Screens -->
      <circle cx="265" cy="145" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="335" cy="145" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Mouth Grid -->
      <rect x="255" y="180" width="90" height="15" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Torso Box -->
      <rect x="200" y="225" width="200" height="160" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Chest Meter -->
      <circle cx="300" cy="285" r="35" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Arms -->
      <rect x="130" y="240" width="70" height="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="400" y="240" width="70" height="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Legs -->
      <rect x="240" y="385" width="40" height="85" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="320" y="385" width="40" height="85" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'car-07',
    title: 'Dinosaurs',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A cute smiling baby T-Rex with playful cartoon spots.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head with Big Smile -->
      <ellipse cx="230" cy="180" rx="75" ry="50" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="210" cy="160" r="10" fill="#000000"/>
      <!-- Body -->
      <ellipse cx="320" cy="310" rx="110" ry="100" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tail -->
      <polygon points="420,310 540,290 420,380" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Back Spikes -->
      <polygon points="260,210 270,180 280,215" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="300,215 315,185 330,220" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="350,225 365,195 380,235" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Feet -->
      <rect x="270" y="390" width="35" height="75" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="345" y="390" width="35" height="75" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'car-08',
    title: 'Funny Monsters',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A fuzzy one-eyed friendly monster giving a happy wave.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Round Fluffy Monster Body -->
      <circle cx="300" cy="270" r="140" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Single Giant Eye -->
      <circle cx="300" cy="220" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="305" cy="220" r="20" fill="#000000"/>
      <!-- Cute Monster Horns -->
      <polygon points="210,180 190,110 240,150" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="390,180 410,110 360,150" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Wide Smile with 2 Teeth -->
      <path d="M 230 300 Q 300 360 370 300 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="270,305 285,305 278,325" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="315,305 330,305 322,325" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'car-09',
    title: 'Cartoon House',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A whimsical fairytale cottage with chimney and flower garden.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Chimney with Smoke -->
      <rect x="360" y="100" width="40" height="80" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="380" cy="70" r="14" fill="none" stroke="#000000" stroke-width="2.5"/>
      <!-- Triangular Roof -->
      <polygon points="120,220 300,100 480,220" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Walls -->
      <rect x="150" y="220" width="300" height="180" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Rounded Door -->
      <path d="M 265 400 L 265 310 Q 300 270 335 310 L 335 400 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Windows -->
      <circle cx="210" cy="275" r="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="390" cy="275" r="30" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'car-10',
    title: 'Balloons',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A soaring rainbow bunch of cartoon party balloons.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="230" cy="180" rx="50" ry="65" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="300" cy="140" rx="55" ry="70" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="370" cy="180" rx="50" ry="65" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="300" cy="230" rx="55" ry="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Strings Tie -->
      <polygon points="290,440 310,440 300,470" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'car-11',
    title: 'Toys',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A playroom collection with rocking horse, spinning top, and blocks.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Toy Blocks -->
      <rect x="120" y="280" width="90" height="90" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="120" y="190" width="90" height="90" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Spinning Top -->
      <polygon points="340,180 440,180 390,340" fill="none" stroke="#000000" stroke-width="4"/>
      <line x1="390" y1="130" x2="390" y2="180" stroke="#000000" stroke-width="4"/>
      <!-- Toy Car -->
      <polygon points="260,380 480,380 450,440 230,440" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="280" cy="445" r="22" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="430" cy="445" r="22" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'car-12',
    title: 'Clowns',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A jolly circus clown with curly hair, polka-dot hat, and red ball nose.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="240" r="85" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Pointy Hat with Pom-pom -->
      <polygon points="230,170 300,50 370,170" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="300" cy="40" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Big Round Nose -->
      <circle cx="300" cy="240" r="24" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Giant Smile -->
      <path d="M 240 270 Q 300 330 360 270 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Curly Hair Balls -->
      <circle cx="205" cy="230" r="30" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="395" cy="230" r="30" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'car-13',
    title: 'Fairy Scenes',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A magical woodland fairy sprinkling stardust over a giant mushroom.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Mushroom Cap -->
      <path d="M 120 340 Q 300 160 480 340 Z" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Mushroom Spots -->
      <circle cx="230" cy="260" r="24" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="350" cy="240" r="28" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Stem -->
      <polygon points="240,340 360,340 380,480 220,480" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Fairy Wand Stars -->
      <polygon points="450,110 455,122 468,122 458,130 462,142 450,134 438,142 442,130 432,122 445,122" fill="none" stroke="#000000" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'car-14',
    title: 'Magic Castle',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A dreamy kingdom castle with spires, turrets, and battlements.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Center Tower -->
      <rect x="250" y="160" width="100" height="260" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="230,160 300,70 370,160" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Left Tower -->
      <rect x="120" y="220" width="80" height="200" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="110,220 160,130 210,220" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Right Tower -->
      <rect x="400" y="220" width="80" height="200" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="390,220 440,130 490,220" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Gate -->
      <path d="M 275 420 L 275 340 Q 300 310 325 340 L 325 420 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'car-15',
    title: 'Cartoon Vehicles',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A cute cartoon jalopy car with spinning eyes and a smiling bumper.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Car Body -->
      <path d="M 100 330 Q 150 220 280 200 Q 400 190 480 270 L 510 330 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Big Wheels -->
      <circle cx="200" cy="350" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="200" cy="350" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="410" cy="350" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="410" cy="350" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Window Eyes -->
      <circle cx="260" cy="240" r="22" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="340" cy="240" r="22" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'car-16',
    title: 'Funny Birds',
    category: 'Cartoon and Fun',
    classTier: 'Classes 2–3',
    description: 'A goofy round cartoon bird perched on a fence pole.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Round Ball Body -->
      <circle cx="300" cy="240" r="110" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Giant Googly Eyes -->
      <circle cx="250" cy="180" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="255" cy="180" r="10" fill="#000000"/>
      <circle cx="320" cy="180" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="315" cy="180" r="10" fill="#000000"/>
      <!-- Beak -->
      <polygon points="270,225 310,225 290,265" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Top Feathers -->
      <polygon points="285,130 295,80 305,130" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Stick Legs -->
      <line x1="260" y1="350" x2="260" y2="440" stroke="#000000" stroke-width="4"/>
      <line x1="340" y1="350" x2="340" y2="440" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'car-17',
    title: 'Cartoon Family',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A happy cartoon family smiling together for a group photo.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Dad -->
      <circle cx="200" cy="180" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="160" y="225" width="80" height="180" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Mom -->
      <circle cx="400" cy="190" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="360,235 440,235 460,405 340,405" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Kid -->
      <circle cx="300" cy="270" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="275" y="305" width="50" height="100" rx="8" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'car-18',
    title: 'Space Characters',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A cute alien in a flying saucer hovercraft waving with three antennas.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Glass Dome -->
      <path d="M 200 240 Q 300 100 400 240 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Alien Inside -->
      <circle cx="300" cy="190" r="32" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="300" cy="185" r="8" fill="#000000"/>
      <!-- Flying Saucer Disc -->
      <ellipse cx="300" cy="270" rx="190" ry="50" fill="none" stroke="#000000" stroke-width="4.5"/>
      <!-- Saucer Lights -->
      <circle cx="180" cy="275" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="260" cy="285" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="340" cy="285" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="420" cy="275" r="14" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'car-19',
    title: 'Fantasy Characters',
    category: 'Cartoon and Fun',
    classTier: 'Classes 4–5',
    description: 'A mythical baby dragon blowing tiny heart-shaped smoke rings.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="260" cy="180" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="210,130 200,90 235,125" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Body -->
      <ellipse cx="320" cy="310" rx="80" ry="100" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Little Wings -->
      <polygon points="340,240 430,170 380,260" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="350,260 450,230 380,290" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Tail with Arrow -->
      <path d="M 400 350 Q 480 380 470 310" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="450,300 480,290 490,320" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'car-20',
    title: 'Cute Cartoon Scenes',
    category: 'Cartoon and Fun',
    classTier: 'Classes 6–8',
    description: 'An enchanted picnic with cartoon animals enjoying cupcakes in a meadow.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Picnic Blanket -->
      <polygon points="120,380 480,380 540,460 60,460" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Cupcake Basket -->
      <polygon points="250,330 350,330 340,390 260,390" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="300" cy="305" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Trees in Background -->
      <polygon points="0,320 600,320 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="150" cy="220" r="55" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="450" cy="220" r="55" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  }
];
