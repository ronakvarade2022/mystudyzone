import { DrawingTemplate } from '../../types';

export const ANIMAL_DRAWINGS: DrawingTemplate[] = [
  {
    id: 'ani-01',
    title: 'Lion',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'The king of the jungle with a grand mane and royal crown.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Grand Mane Outer Circle -->
      <circle cx="300" cy="220" r="130" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Face Circle -->
      <circle cx="300" cy="220" r="75" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Ears -->
      <circle cx="235" cy="155" r="22" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="365" cy="155" r="22" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Eyes -->
      <circle cx="270" cy="205" r="8" fill="#000000"/>
      <circle cx="330" cy="205" r="8" fill="#000000"/>
      <!-- Nose & Mouth -->
      <polygon points="285,230 315,230 300,250" fill="none" stroke="#000000" stroke-width="3"/>
      <line x1="300" y1="250" x2="300" y2="265" stroke="#000000" stroke-width="3"/>
      <path d="M 280 265 Q 300 280 320 265" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Body & Paws -->
      <polygon points="210,340 390,340 430,480 170,480" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="230" cy="460" r="25" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="370" cy="460" r="25" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'ani-02',
    title: 'Elephant',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A friendly elephant with large ears and a swinging trunk.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <circle cx="360" cy="280" r="120" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="220" cy="230" r="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ear -->
      <ellipse cx="270" cy="220" rx="45" ry="60" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Trunk -->
      <path d="M 180 260 Q 140 330 180 380 Q 200 370 190 350 Q 170 320 200 280 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Eye -->
      <circle cx="205" cy="210" r="7" fill="#000000"/>
      <!-- Legs -->
      <rect x="290" y="370" width="38" height="110" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="390" y="370" width="38" height="110" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tusk -->
      <polygon points="190,280 150,295 190,290" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'ani-03',
    title: 'Tiger',
    category: 'Animals',
    classTier: 'Classes 4–5',
    description: 'India’s magnificent national animal with bold stripes.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="220" r="100" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ears -->
      <polygon points="215,160 240,110 270,140" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="385,160 360,110 330,140" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Stripes -->
      <polygon points="210,210 240,215 215,225" fill="#000000"/>
      <polygon points="390,210 360,215 385,225" fill="#000000"/>
      <polygon points="290,130 300,165 310,130" fill="#000000"/>
      <!-- Eyes -->
      <ellipse cx="260" cy="205" rx="10" ry="6" fill="#000000"/>
      <ellipse cx="340" cy="205" rx="10" ry="6" fill="#000000"/>
      <!-- Snout -->
      <ellipse cx="300" cy="260" rx="35" ry="25" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="290,245 310,245 300,258" fill="#000000"/>
      <!-- Body base -->
      <polygon points="200,310 400,310 450,470 150,470" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'ani-04',
    title: 'Giraffe',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A tall gentle giraffe reaching high for delicious tree leaves.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Long Neck -->
      <polygon points="250,110 295,110 330,360 260,360" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <ellipse cx="240" cy="90" rx="45" ry="28" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Horns (Ossicones) -->
      <line x1="240" y1="65" x2="235" y2="40" stroke="#000000" stroke-width="3.5"/>
      <circle cx="235" cy="38" r="6" fill="#000000"/>
      <line x1="260" y1="68" x2="260" y2="43" stroke="#000000" stroke-width="3.5"/>
      <circle cx="260" cy="41" r="6" fill="#000000"/>
      <!-- Eye -->
      <circle cx="235" cy="85" r="6" fill="#000000"/>
      <!-- Spots -->
      <circle cx="275" cy="170" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="290" cy="240" r="20" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="280" cy="310" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Body & Legs -->
      <polygon points="240,360 420,360 400,480 370,480 360,400 300,400 290,480 260,480" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'ani-05',
    title: 'Zebra',
    category: 'Animals',
    classTier: 'Classes 4–5',
    description: 'A striking wild zebra with high-contrast pattern stripes.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <ellipse cx="320" cy="300" rx="140" ry="75" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Neck & Head -->
      <polygon points="210,270 170,160 210,130 270,240" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head Snout -->
      <ellipse cx="160" cy="150" rx="35" ry="22" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Ears -->
      <polygon points="190,125 185,90 205,115" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Eye -->
      <circle cx="180" cy="140" r="6" fill="#000000"/>
      <!-- Legs -->
      <rect x="220" y="360" width="22" height="120" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="265" y="360" width="22" height="120" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="360" y="360" width="22" height="120" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="410" y="360" width="22" height="120" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Stripes -->
      <polygon points="280,240 300,240 280,330" fill="#000000"/>
      <polygon points="330,230 350,230 330,340" fill="#000000"/>
      <polygon points="380,240 400,240 380,330" fill="#000000"/>
    </svg>`
  },
  {
    id: 'ani-06',
    title: 'Deer',
    category: 'Animals',
    classTier: 'Classes 4–5',
    description: 'A graceful spotted deer standing in a peaceful meadow.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <ellipse cx="340" cy="290" rx="120" ry="60" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Neck -->
      <polygon points="240,270 200,160 235,140 280,250" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Head -->
      <ellipse cx="195" cy="150" rx="35" ry="20" transform="rotate(-15 195 150)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Antlers -->
      <path d="M 215 130 L 210 70 L 195 50 M 210 70 L 230 50" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Eye -->
      <circle cx="190" cy="145" r="5" fill="#000000"/>
      <!-- Spots -->
      <circle cx="310" cy="270" r="6" fill="none" stroke="#000000" stroke-width="2"/>
      <circle cx="340" cy="265" r="6" fill="none" stroke="#000000" stroke-width="2"/>
      <circle cx="370" cy="275" r="6" fill="none" stroke="#000000" stroke-width="2"/>
      <!-- Legs -->
      <rect x="250" y="340" width="16" height="140" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="400" y="340" width="16" height="140" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-07',
    title: 'Rabbit',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A cute fluffy bunny with long ears and a crunchy carrot.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <ellipse cx="300" cy="340" rx="85" ry="95" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="210" r="65" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ears -->
      <ellipse cx="265" cy="95" rx="18" ry="60" transform="rotate(-10 265 95)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="335" cy="95" rx="18" ry="60" transform="rotate(10 335 95)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Eyes -->
      <circle cx="275" cy="200" r="7" fill="#000000"/>
      <circle cx="325" cy="200" r="7" fill="#000000"/>
      <!-- Nose & Mouth -->
      <polygon points="295,220 305,220 300,230" fill="#000000"/>
      <!-- Paws -->
      <ellipse cx="250" cy="425" rx="28" ry="16" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="350" cy="425" rx="28" ry="16" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-08',
    title: 'Monkey',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A cheerful monkey swinging from a tree with a tasty banana.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="180" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Face Mask -->
      <ellipse cx="300" cy="190" rx="42" ry="32" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Ears -->
      <circle cx="235" cy="175" r="20" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="365" cy="175" r="20" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Eyes & Smile -->
      <circle cx="285" cy="180" r="6" fill="#000000"/>
      <circle cx="315" cy="180" r="6" fill="#000000"/>
      <path d="M 285 205 Q 300 220 315 205" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Body -->
      <ellipse cx="300" cy="320" rx="65" ry="80" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Curly Tail -->
      <path d="M 365 340 Q 440 330 430 260 Q 410 240 395 270" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Feet -->
      <ellipse cx="260" cy="405" rx="25" ry="14" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="340" cy="405" rx="25" ry="14" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-09',
    title: 'Bear',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A cozy friendly brown bear sitting with a pot of sweet honey.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="190" r="75" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ears -->
      <circle cx="235" cy="130" r="24" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="365" cy="130" r="24" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Snout -->
      <ellipse cx="300" cy="215" rx="32" ry="24" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="290,205 310,205 300,218" fill="#000000"/>
      <!-- Eyes -->
      <circle cx="270" cy="180" r="6" fill="#000000"/>
      <circle cx="330" cy="180" r="6" fill="#000000"/>
      <!-- Body -->
      <ellipse cx="300" cy="350" rx="100" ry="110" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Paws -->
      <circle cx="210" cy="430" r="32" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="390" cy="430" r="32" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-10',
    title: 'Dog',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A loyal puppy wagging its tail happily.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="270" cy="190" r="65" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Floppy Ear -->
      <ellipse cx="210" cy="190" rx="20" ry="48" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Snout -->
      <ellipse cx="295" cy="205" rx="25" ry="20" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="305" cy="198" r="7" fill="#000000"/>
      <circle cx="265" cy="175" r="6" fill="#000000"/>
      <!-- Body -->
      <ellipse cx="360" cy="310" rx="90" ry="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tail -->
      <path d="M 445 280 Q 480 250 470 230" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Legs -->
      <rect x="290" y="370" width="22" height="90" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="400" y="370" width="22" height="90" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-11',
    title: 'Cat',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A playful domestic kitten with cute whiskers.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="200" r="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Pointy Ears -->
      <polygon points="235,160 225,95 270,135" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="365,160 375,95 330,135" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Eyes -->
      <ellipse cx="270" cy="195" rx="8" ry="12" fill="#000000"/>
      <ellipse cx="330" cy="195" rx="8" ry="12" fill="#000000"/>
      <!-- Nose & Whiskers -->
      <polygon points="295,215 305,215 300,225" fill="#000000"/>
      <line x1="260" y1="220" x2="200" y2="215" stroke="#000000" stroke-width="2.5"/>
      <line x1="260" y1="228" x2="200" y2="235" stroke="#000000" stroke-width="2.5"/>
      <line x1="340" y1="220" x2="400" y2="215" stroke="#000000" stroke-width="2.5"/>
      <line x1="340" y1="228" x2="400" y2="235" stroke="#000000" stroke-width="2.5"/>
      <!-- Body -->
      <ellipse cx="300" cy="350" rx="80" ry="90" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'ani-12',
    title: 'Cow',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A gentle dairy cow resting in a green farm pasture.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <ellipse cx="340" cy="300" rx="140" ry="80" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="180" cy="220" r="55" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Snout -->
      <ellipse cx="150" cy="245" rx="35" ry="24" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Horns -->
      <path d="M 170 170 Q 160 130 145 135" fill="none" stroke="#000000" stroke-width="3.5"/>
      <path d="M 195 170 Q 205 130 220 135" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Eye -->
      <circle cx="180" cy="205" r="6" fill="#000000"/>
      <!-- Spots -->
      <circle cx="310" cy="270" r="28" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="390" cy="320" r="24" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Legs -->
      <rect x="240" y="370" width="25" height="100" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="410" y="370" width="25" height="100" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-13',
    title: 'Horse',
    category: 'Animals',
    classTier: 'Classes 4–5',
    description: 'A majestic galloping stallion with flowing mane.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <ellipse cx="320" cy="290" rx="130" ry="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Neck -->
      <polygon points="220,260 170,140 225,120 280,240" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <ellipse cx="160" cy="140" rx="42" ry="22" transform="rotate(-25 160 140)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Ears -->
      <polygon points="190,110 190,75 210,105" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Mane -->
      <polygon points="220,120 250,110 230,170 260,160 240,220" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Legs -->
      <rect x="230" y="350" width="20" height="130" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="380" y="350" width="20" height="130" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-14',
    title: 'Peacock',
    category: 'Animals',
    classTier: 'Classes 4–5',
    description: 'India’s magnificent national bird displaying its iridescent plumage.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Fan of Feathers -->
      <ellipse cx="300" cy="250" rx="200" ry="170" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Feather eyes -->
      <circle cx="200" cy="150" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="300" cy="110" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="400" cy="150" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="150" cy="240" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="450" cy="240" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Peacock Body -->
      <ellipse cx="300" cy="340" rx="35" ry="55" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Neck & Head -->
      <path d="M 290 300 Q 280 230 300 200" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="300" cy="190" r="18" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="315,190 330,195 315,200" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Crown Feathers -->
      <line x1="300" y1="172" x2="300" y2="150" stroke="#000000" stroke-width="2.5"/>
      <circle cx="300" cy="148" r="4" fill="#000000"/>
    </svg>`
  },
  {
    id: 'ani-15',
    title: 'Parrot',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A vibrant green parrot with a red beak sitting on a branch.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Branch -->
      <polygon points="0,380 600,340 600,370 0,410" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <ellipse cx="300" cy="260" rx="55" ry="90" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="150" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Curved Beak -->
      <path d="M 335 140 Q 370 155 350 185 Q 330 170 335 140 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Eye -->
      <circle cx="310" cy="140" r="7" fill="#000000"/>
      <!-- Long Tail -->
      <polygon points="280,340 260,480 300,480 320,340" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-16',
    title: 'Fish',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A cheerful goldfish swimming in clear underwater bubbles.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <ellipse cx="280" cy="250" rx="140" ry="90" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tail -->
      <polygon points="410,250 510,170 480,250 510,330" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Eye -->
      <circle cx="200" cy="230" r="12" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="196" cy="228" r="6" fill="#000000"/>
      <!-- Fins -->
      <polygon points="260,160 330,120 310,165" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="260,340 330,380 310,335" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Bubbles -->
      <circle cx="150" cy="170" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="120" cy="120" r="22" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'ani-17',
    title: 'Turtle',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'A sea turtle paddling calmly through the coral reef.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Shell Dome -->
      <ellipse cx="300" cy="250" rx="130" ry="100" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Shell Pattern Hexagons -->
      <circle cx="300" cy="250" r="40" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="230" cy="250" r="25" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="370" cy="250" r="25" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Head -->
      <ellipse cx="150" cy="250" rx="35" ry="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="140" cy="245" r="5" fill="#000000"/>
      <!-- Flippers -->
      <polygon points="240,160 200,80 280,150" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="240,340 200,420 280,350" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'ani-18',
    title: 'Dolphin',
    category: 'Animals',
    classTier: 'Classes 4–5',
    description: 'A playful dolphin leaping high out of sparkling ocean waves.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Leaping Body Arc -->
      <path d="M 120 320 Q 250 100 480 260 Q 380 200 240 320 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Snout -->
      <polygon points="120,320 80,340 130,345" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Dorsal Fin -->
      <polygon points="270,160 300,90 320,165" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Tail Flukes -->
      <polygon points="480,260 540,230 520,280 550,310" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Waves -->
      <polygon points="0,380 600,380 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'ani-19',
    title: 'Penguin',
    category: 'Animals',
    classTier: 'Classes 2–3',
    description: 'An Emperor penguin standing proudly on an Antarctic iceberg.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body Outer -->
      <ellipse cx="300" cy="270" rx="90" ry="140" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- White Belly Oval -->
      <ellipse cx="300" cy="290" rx="60" ry="105" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Beak -->
      <polygon points="285,160 315,160 300,185" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Eyes -->
      <circle cx="275" cy="150" r="5" fill="#000000"/>
      <circle cx="325" cy="150" r="5" fill="#000000"/>
      <!-- Wings -->
      <polygon points="210,240 160,320 220,330" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="390,240 440,320 380,330" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Iceberg -->
      <polygon points="120,440 480,440 420,490 180,490" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'ani-20',
    title: 'Jungle Animals',
    category: 'Animals',
    classTier: 'Classes 6–8',
    description: 'A vibrant safari gathering of wildlife under the jungle canopy.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Backdrop Hills -->
      <polygon points="0,280 200,170 400,280" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="250,280 450,150 600,280" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Lion Silhouette Left -->
      <circle cx="180" cy="330" r="45" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="140" y="370" width="80" height="60" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Elephant Silhouette Right -->
      <circle cx="420" cy="330" r="55" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="370" y="380" width="100" height="70" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Ground -->
      <polygon points="0,430 600,430 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  }
];
