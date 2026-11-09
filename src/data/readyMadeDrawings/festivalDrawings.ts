import { DrawingTemplate } from '../../types';

export const FESTIVAL_DRAWINGS: DrawingTemplate[] = [
  {
    id: 'fes-01',
    title: 'Diwali Celebration',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'Traditional celebration with glowing oil diyas, sparkles, and sweets.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Main Diya Base -->
      <path d="M 160 300 Q 300 420 440 300 Q 300 330 160 300 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Outer Flame -->
      <path d="M 300 120 Q 360 210 300 290 Q 240 210 300 120 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Inner Flame Core -->
      <path d="M 300 180 Q 330 230 300 280 Q 270 230 300 180 Z" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Sparks -->
      <line x1="300" y1="100" x2="300" y2="70" stroke="#000000" stroke-width="3"/>
      <line x1="220" y1="150" x2="190" y2="130" stroke="#000000" stroke-width="3"/>
      <line x1="380" y1="150" x2="410" y2="130" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-02',
    title: 'Ganesh Chaturthi',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'Beloved Lord Ganesha with crown, modak sweet, and blessing hand.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Crown Mukut -->
      <polygon points="250,150 300,70 350,150" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Head -->
      <circle cx="300" cy="200" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ears -->
      <ellipse cx="220" cy="200" rx="35" ry="45" fill="none" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="380" cy="200" rx="35" ry="45" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Trunk with Modak -->
      <path d="M 290 230 Q 280 320 330 320 Q 350 320 340 300 Q 310 300 310 230 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Modak Bowl Base -->
      <circle cx="350" cy="310" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Body & Dhoti -->
      <ellipse cx="300" cy="380" rx="100" ry="80" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'fes-03',
    title: 'Holi',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'The festival of colours with pichkari water guns and gulal powder bowls.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Pichkari Water Gun -->
      <polygon points="120,220 380,140 390,170 130,250" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="120,220 80,235 130,250" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="385" y="145" width="80" height="20" transform="rotate(-17 425 155)" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Gulal Bowls -->
      <ellipse cx="230" cy="360" rx="70" ry="30" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 160 360 Q 230 420 300 360" fill="none" stroke="#000000" stroke-width="4"/>
      <ellipse cx="390" cy="360" rx="70" ry="30" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 320 360 Q 390 420 460 360" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'fes-04',
    title: 'Christmas Tree',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'A pine tree adorned with stars, bauble ornaments, and gift boxes.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Top Star -->
      <polygon points="300,50 310,75 335,75 315,90 325,115 300,100 275,115 285,90 265,75 290,75" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Tree Tiers -->
      <polygon points="300,100 220,180 380,180" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="300,170 180,270 420,270" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="300,250 140,370 460,370" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Trunk -->
      <rect x="270" y="370" width="60" height="60" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bauble Ornaments -->
      <circle cx="270" cy="220" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="340" cy="240" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="230" cy="320" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="370" cy="320" r="14" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-05',
    title: 'Raksha Bandhan',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'A beautiful decorative Rakhi thread symbolizing sibling love.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Horizontal Thread Ribbon -->
      <polygon points="0,230 600,230 600,270 0,270" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Outer Dial -->
      <circle cx="300" cy="250" r="110" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Middle Floral Ring -->
      <circle cx="300" cy="250" r="75" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Central Gem -->
      <circle cx="300" cy="250" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Petals around central ring -->
      <circle cx="300" cy="160" r="15" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="300" cy="340" r="15" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="210" cy="250" r="15" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="390" cy="250" r="15" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-06',
    title: 'Independence Day',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'The Indian National Tricolour flag waving proudly with the Ashoka Chakra.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Flagpole -->
      <rect x="100" y="60" width="16" height="400" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="108" cy="50" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Flag Saffron Band -->
      <rect x="116" y="80" width="360" height="70" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Flag White Band -->
      <rect x="116" y="150" width="360" height="70" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Flag Green Band -->
      <rect x="116" y="220" width="360" height="70" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Ashoka Chakra -->
      <circle cx="296" cy="185" r="28" fill="none" stroke="#000000" stroke-width="3"/>
      <line x1="296" y1="157" x2="296" y2="213" stroke="#000000" stroke-width="2"/>
      <line x1="268" y1="185" x2="324" y2="185" stroke="#000000" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'fes-07',
    title: 'Republic Day',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'India Gate monument illuminated for national celebrations.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- India Gate Structure -->
      <polygon points="180,120 420,120 440,160 160,160" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="160" y="160" width="280" height="240" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Archway -->
      <path d="M 240 400 L 240 260 Q 300 200 360 260 L 360 400 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Base Plinth -->
      <polygon points="120,400 480,400 500,450 100,450" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'fes-08',
    title: 'Navratri',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'Festive Dandiya sticks and vibrant Garba celebration rhythms.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Crossed Dandiya Stick 1 -->
      <rect x="180" y="235" width="260" height="25" rx="10" transform="rotate(-35 310 247)" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Crossed Dandiya Stick 2 -->
      <rect x="180" y="235" width="260" height="25" rx="10" transform="rotate(35 310 247)" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bells & Ribbons -->
      <circle cx="210" cy="110" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="410" cy="110" r="14" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="310" cy="400" r="45" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'fes-09',
    title: 'Dussehra',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'Victory of good over evil with bow, arrow, and celebration fire.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bow Arc -->
      <path d="M 180 120 Q 280 250 180 380" fill="none" stroke="#000000" stroke-width="6"/>
      <line x1="180" y1="120" x2="180" y2="380" stroke="#000000" stroke-width="3"/>
      <!-- Arrow -->
      <line x1="140" y1="250" x2="420" y2="250" stroke="#000000" stroke-width="4"/>
      <polygon points="420,240 460,250 420,260" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Quiver Base -->
      <rect x="360" y="320" width="70" height="130" rx="15" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'fes-10',
    title: 'Eid Celebration',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'A crescent moon shining over a magnificent domed minaret.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Crescent Moon -->
      <path d="M 180 120 A 70 70 0 1 0 280 220 A 55 55 0 1 1 180 120 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Star -->
      <polygon points="280,130 285,142 298,142 288,150 292,162 280,154 268,162 272,150 262,142 275,142" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Mosque Dome -->
      <path d="M 200 420 L 200 320 Q 300 180 400 320 L 400 420 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Minaret Arch -->
      <polygon points="0,420 600,420 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'fes-11',
    title: 'Rangoli',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'A symmetrical traditional geometric floor rangoli pattern.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Central Ring -->
      <circle cx="300" cy="250" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- 8 Surrounding Flower Petals -->
      <circle cx="300" cy="150" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="300" cy="350" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="200" cy="250" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="400" cy="250" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="230" cy="180" r="30" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="370" cy="180" r="30" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="230" cy="320" r="30" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="370" cy="320" r="30" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-12',
    title: 'Decorative Diyas',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'A pair of ornate earthen festival lamps radiating warm light.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Left Diya -->
      <path d="M 100 320 Q 200 420 300 320 Q 200 345 100 320 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 200 170 Q 240 240 200 310 Q 160 240 200 170 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Right Diya -->
      <path d="M 320 320 Q 420 420 520 320 Q 420 345 320 320 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 420 170 Q 460 240 420 310 Q 380 240 420 170 Z" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'fes-13',
    title: 'Ganpati Decoration',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'An elegant festival pandal with flower toran and decorative arch.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Decorative Canopy Arch -->
      <polygon points="100,100 500,100 460,160 140,160" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 140 160 Q 300 80 460 160" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Side Pillars -->
      <rect x="120" y="160" width="40" height="260" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="440" y="160" width="40" height="260" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Altar Plinth -->
      <polygon points="80,420 520,420 500,480 100,480" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'fes-14',
    title: 'Festival Balloons',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'A bunch of festive party balloons floating in celebration.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Center Balloon -->
      <circle cx="300" cy="180" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Left Balloon -->
      <circle cx="210" cy="210" r="55" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Right Balloon -->
      <circle cx="390" cy="210" r="55" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Strings -->
      <line x1="300" y1="240" x2="300" y2="440" stroke="#000000" stroke-width="3"/>
      <line x1="210" y1="265" x2="290" y2="440" stroke="#000000" stroke-width="3"/>
      <line x1="390" y1="265" x2="310" y2="440" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-15',
    title: 'Celebration Scenes',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'Fireworks bursting across the night sky above joyous homes.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Sky Fireworks Burst -->
      <circle cx="300" cy="140" r="40" fill="none" stroke="#000000" stroke-width="3.5"/>
      <line x1="300" y1="60" x2="300" y2="90" stroke="#000000" stroke-width="3"/>
      <line x1="300" y1="190" x2="300" y2="220" stroke="#000000" stroke-width="3"/>
      <line x1="220" y1="140" x2="250" y2="140" stroke="#000000" stroke-width="3"/>
      <line x1="350" y1="140" x2="380" y2="140" stroke="#000000" stroke-width="3"/>
      <!-- Houses Below -->
      <polygon points="120,380 200,320 280,380" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="140" y="380" width="120" height="80" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="320,380 400,310 480,380" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="340" y="380" width="120" height="80" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'fes-16',
    title: 'Traditional Decorations',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'A welcoming marigold flower garland (Toran) hung across a doorway.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Doorframe -->
      <polygon points="80,80 520,80 520,480 440,480 440,160 160,160 160,480 80,480" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Toran Swag -->
      <path d="M 160 160 Q 300 240 440 160" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Mango Leaves along Toran -->
      <ellipse cx="230" cy="190" rx="12" ry="24" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="300" cy="205" rx="12" ry="24" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="370" cy="190" rx="12" ry="24" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-17',
    title: 'Festival Sweets',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'A thali tray loaded with festive laddoos, barfi, and jalebis.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Silver Thali Platter -->
      <ellipse cx="300" cy="330" rx="220" ry="90" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Laddoos -->
      <circle cx="240" cy="310" r="32" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="360" cy="310" r="32" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="300" cy="270" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Barfi Diamond -->
      <polygon points="300,330 330,350 300,370 270,350" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-18',
    title: 'Greeting Cards',
    category: 'Festivals',
    classTier: 'Classes 2–3',
    description: 'A handmade festive greeting card with ribbons and flowers.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Folded Card Body -->
      <rect x="140" y="90" width="320" height="340" rx="15" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Ribbon Cross -->
      <line x1="140" y1="260" x2="460" y2="260" stroke="#000000" stroke-width="4"/>
      <line x1="300" y1="90" x2="300" y2="430" stroke="#000000" stroke-width="4"/>
      <!-- Ribbon Bow -->
      <ellipse cx="270" cy="260" rx="25" ry="16" fill="none" stroke="#000000" stroke-width="3"/>
      <ellipse cx="330" cy="260" rx="25" ry="16" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="300" cy="260" r="10" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-19',
    title: 'Decorative Lanterns',
    category: 'Festivals',
    classTier: 'Classes 4–5',
    description: 'An Indian Diwali Akash Kandil lantern with festive hanging frills.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Hanging Cord -->
      <line x1="300" y1="20" x2="300" y2="100" stroke="#000000" stroke-width="3"/>
      <!-- Central Diamond Lantern -->
      <polygon points="300,100 420,220 300,340 180,220" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Inner Square -->
      <polygon points="300,160 360,220 300,280 240,220" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Hanging Paper Frills -->
      <polygon points="210,340 230,460 250,340" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="260,340 280,480 300,340" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="310,340 330,460 350,340" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'fes-20',
    title: 'Festival Family Celebration',
    category: 'Festivals',
    classTier: 'Classes 6–8',
    description: 'A warm family gathering wearing traditional festive attire.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Parent 1 (Left) -->
      <circle cx="210" cy="180" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="170,220 250,220 270,440 150,440" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Parent 2 (Right) -->
      <circle cx="390" cy="180" r="35" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="350,220 430,220 450,440 330,440" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Child (Center) -->
      <circle cx="300" cy="280" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <polygon points="270,310 330,310 345,450 255,450" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  }
];
