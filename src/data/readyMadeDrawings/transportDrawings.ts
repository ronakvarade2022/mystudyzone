import { DrawingTemplate } from '../../types';

export const TRANSPORT_DRAWINGS: DrawingTemplate[] = [
  {
    id: 'tra-01',
    title: 'Cars',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A modern family sedan car with glossy windows and sport wheels.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Car Body -->
      <polygon points="80,320 160,320 220,180 380,180 460,260 520,320 80,320" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Lower Chassis -->
      <rect x="60" y="320" width="480" height="60" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Windows -->
      <polygon points="230,195 290,195 290,260 190,260" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="310,195 370,195 430,260 310,260" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Wheels -->
      <circle cx="180" cy="380" r="42" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="180" cy="380" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="420" cy="380" r="42" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="420" cy="380" r="18" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'tra-02',
    title: 'Buses',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A city transit bus carrying passengers through busy avenues.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bus Body -->
      <rect x="80" y="160" width="440" height="200" rx="20" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Windows -->
      <rect x="120" y="190" width="60" height="50" rx="6" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="200" y="190" width="60" height="50" rx="6" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="280" y="190" width="60" height="50" rx="6" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="360" y="190" width="60" height="50" rx="6" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="440" y="190" width="55" height="90" rx="6" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Wheels -->
      <circle cx="180" cy="360" r="40" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="180" cy="360" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="420" cy="360" r="40" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="420" cy="360" r="16" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'tra-03',
    title: 'Trains',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A classic steam locomotive puffing billowing steam over the tracks.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Boiler Tank -->
      <rect x="120" y="220" width="240" height="130" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Cabin -->
      <rect x="360" y="160" width="140" height="190" rx="8" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="385" y="185" width="50" height="50" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Chimney -->
      <polygon points="160,220 150,140 210,140 200,220" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Smoke Puffs -->
      <circle cx="180" cy="95" r="22" fill="none" stroke="#000000" stroke-width="2.5"/>
      <circle cx="230" cy="70" r="28" fill="none" stroke="#000000" stroke-width="2.5"/>
      <!-- Wheels -->
      <circle cx="180" cy="375" r="35" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="270" cy="375" r="35" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="430" cy="365" r="45" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Track -->
      <line x1="50" y1="415" x2="550" y2="415" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-04',
    title: 'Aeroplanes',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A commercial passenger airliner soaring above fluffy white clouds.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Fuselage -->
      <path d="M 100 250 Q 150 200 480 220 Q 520 230 520 260 Q 520 290 480 290 L 160 290 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tail Fin -->
      <polygon points="460,220 530,120 540,225" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Wing -->
      <polygon points="260,260 210,380 320,380 370,260" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Windows -->
      <circle cx="260" cy="245" r="6" fill="#000000"/>
      <circle cx="300" cy="245" r="6" fill="#000000"/>
      <circle cx="340" cy="245" r="6" fill="#000000"/>
      <circle cx="380" cy="245" r="6" fill="#000000"/>
    </svg>`
  },
  {
    id: 'tra-05',
    title: 'Helicopters',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A rescue helicopter with spinning main rotors and tail propeller.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Cabin -->
      <ellipse cx="260" cy="250" rx="110" ry="70" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Windshield -->
      <path d="M 160 250 Q 200 190 260 190 L 260 250 Z" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Tail Boom -->
      <polygon points="360,235 500,210 500,240 360,260" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tail Rotor -->
      <ellipse cx="500" cy="200" rx="8" ry="35" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Main Rotor Mast & Blade -->
      <rect x="250" y="150" width="15" height="35" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="90" y="140" width="340" height="12" rx="4" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Skids -->
      <line x1="180" y1="360" x2="360" y2="360" stroke="#000000" stroke-width="5"/>
      <line x1="220" y1="320" x2="220" y2="360" stroke="#000000" stroke-width="3.5"/>
      <line x1="320" y1="320" x2="320" y2="360" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'tra-06',
    title: 'Ships',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A grand ocean cruise liner sailing with smokestacks and portholes.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Hull -->
      <polygon points="80,290 520,290 440,410 140,410" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Decks -->
      <rect x="160" y="230" width="280" height="60" fill="none" stroke="#000000" stroke-width="3.5"/>
      <rect x="200" y="180" width="200" height="50" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Funnels / Smokestacks -->
      <polygon points="250,180 260,120 280,120 280,180" fill="none" stroke="#000000" stroke-width="3"/>
      <polygon points="320,180 330,120 350,120 350,180" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Ocean Waves -->
      <polygon points="0,410 600,410 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-07',
    title: 'Boats',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A cheerful sailboat gliding across a sunlit lake.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Hull -->
      <polygon points="120,340 480,340 420,420 180,420" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Mast -->
      <rect x="294" y="90" width="12" height="250" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Mainsail (Right) -->
      <polygon points="310,110 440,310 310,310" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Jib Sail (Left) -->
      <polygon points="290,130 180,310 290,310" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-08',
    title: 'Bicycles',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'An eco-friendly pedal bicycle with handlebar, pedals, and spoke wheels.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Wheels -->
      <circle cx="160" cy="340" r="65" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="440" cy="340" r="65" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Frame Triangle -->
      <polygon points="160,340 280,340 360,220" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="280,340 440,340 380,180" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Seat -->
      <polygon points="220,200 270,200 250,220" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Handlebar -->
      <line x1="380" y1="180" x2="410" y2="160" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-09',
    title: 'Motorcycles',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A sleek motorcycle with engine block, gas tank, and exhaust.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Wheels -->
      <circle cx="150" cy="340" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="450" cy="340" r="60" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Gas Tank & Seat -->
      <path d="M 230 220 Q 300 200 370 230 L 320 280 L 220 280 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Engine Block -->
      <rect x="250" y="280" width="100" height="70" rx="8" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Handlebars & Fork -->
      <line x1="450" y1="340" x2="390" y2="180" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-10',
    title: 'Trucks',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A heavy cargo transport truck carrying freight on the highway.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Cabin -->
      <polygon points="100,340 100,240 160,180 230,180 230,340" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="120,240 160,195 210,195 210,240" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Cargo Container -->
      <rect x="240" y="160" width="280" height="180" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Wheels -->
      <circle cx="160" cy="360" r="38" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="340" cy="360" r="38" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="440" cy="360" r="38" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-11',
    title: 'Fire Engines',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A heroic red fire brigade rescue truck with extendable ladder.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Fire Engine Body -->
      <rect x="80" y="200" width="440" height="160" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Windshield -->
      <polygon points="100,280 140,220 180,220 180,280" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Siren on Top -->
      <rect x="130" y="175" width="30" height="25" rx="5" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Ladder on Top -->
      <rect x="220" y="160" width="260" height="25" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Wheels -->
      <circle cx="170" cy="360" r="40" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="430" cy="360" r="40" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-12',
    title: 'Ambulances',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'An emergency medical ambulance with red cross symbol and emergency light.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body -->
      <polygon points="80,330 80,240 140,180 200,180 500,180 500,330" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Red Cross Symbol -->
      <polygon points="330,220 370,220 370,245 395,245 395,285 370,285 370,310 330,310 330,285 305,285 305,245 330,245" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Wheels -->
      <circle cx="170" cy="350" r="40" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="410" cy="350" r="40" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-13',
    title: 'Police Vehicles',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A city police patrol car with flashing roof beacons.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="100,320 180,320 230,200 370,200 440,260 500,320" fill="none" stroke="#000000" stroke-width="4"/>
      <rect x="80" y="320" width="440" height="50" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Siren -->
      <rect x="280" y="175" width="40" height="25" rx="6" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Wheels -->
      <circle cx="180" cy="370" r="40" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="420" cy="370" r="40" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-14',
    title: 'Tractors',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A sturdy farm tractor with massive rear treaded tires.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Engine Hood -->
      <rect x="240" y="240" width="200" height="90" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Cabin Rollbar -->
      <polygon points="140,330 180,180 250,180 240,330" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Huge Rear Wheel -->
      <circle cx="200" cy="350" r="65" fill="none" stroke="#000000" stroke-width="5"/>
      <circle cx="200" cy="350" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <!-- Small Front Wheel -->
      <circle cx="420" cy="375" r="40" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="420" cy="375" r="16" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'tra-15',
    title: 'Rockets',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A futuristic space exploration rocket blasting off towards Mars.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Rocket Nose Cone -->
      <polygon points="250,150 300,50 350,150" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Body Cylinder -->
      <rect x="250" y="150" width="100" height="190" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Porthole Window -->
      <circle cx="300" cy="220" r="28" fill="none" stroke="#000000" stroke-width="3.5"/>
      <circle cx="300" cy="220" r="16" fill="none" stroke="#000000" stroke-width="2.5"/>
      <!-- Booster Fins -->
      <polygon points="250,280 180,360 250,340" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="350,280 420,360 350,340" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Thruster Exhaust Flame -->
      <polygon points="270,340 300,450 330,340" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-16',
    title: 'Construction Vehicles',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A heavy hydraulic excavator digging on a construction site.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Cabin -->
      <rect x="180" y="210" width="120" height="110" rx="8" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Tread Tracks -->
      <rect x="150" y="320" width="180" height="60" rx="25" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Crane Boom -->
      <polygon points="300,240 430,120 450,140 320,260" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Bucket Arm & Scoop -->
      <polygon points="430,120 480,240 460,250 420,140" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="460,250 510,290 470,320 440,280" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'tra-17',
    title: 'School Buses',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A cheerful bright yellow school bus ready to pick up young champions.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Hood & Main Body -->
      <polygon points="80,250 140,250 140,160 480,160 500,340 80,340" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Windows -->
      <rect x="160" y="185" width="55" height="50" rx="5" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="235" y="185" width="55" height="50" rx="5" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="310" y="185" width="55" height="50" rx="5" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="385" y="185" width="55" height="50" rx="5" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Stop Sign -->
      <polygon points="140,230 160,215 160,245" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Wheels -->
      <circle cx="160" cy="355" r="42" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="420" cy="355" r="42" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-18',
    title: 'Submarines',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A deep-sea submarine exploring oceanic trenches with periscope.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Submarine Hull -->
      <ellipse cx="290" cy="260" rx="170" ry="80" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Conning Tower & Periscope -->
      <rect x="260" y="140" width="60" height="50" rx="6" fill="none" stroke="#000000" stroke-width="4"/>
      <polygon points="285,140 285,90 320,90 320,105 295,105 295,140" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Portholes -->
      <circle cx="210" cy="255" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="290" cy="255" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="370" cy="255" r="18" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Propeller -->
      <polygon points="460,240 500,210 490,260 500,310 460,280" fill="none" stroke="#000000" stroke-width="3.5"/>
    </svg>`
  },
  {
    id: 'tra-19',
    title: 'Hot-Air Balloons',
    category: 'Transport',
    classTier: 'Classes 2–3',
    description: 'A giant striped hot-air balloon drifting gently above mountain valleys.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Balloon Envelope -->
      <path d="M 170 190 Q 170 60 300 60 Q 430 60 430 190 Q 430 290 340 330 L 260 330 Q 170 290 170 190 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Vertical Stripes -->
      <path d="M 230 100 Q 210 190 270 330" fill="none" stroke="#000000" stroke-width="3"/>
      <path d="M 370 100 Q 390 190 330 330" fill="none" stroke="#000000" stroke-width="3"/>
      <!-- Basket Cords -->
      <line x1="270" y1="330" x2="275" y2="380" stroke="#000000" stroke-width="3"/>
      <line x1="330" y1="330" x2="325" y2="380" stroke="#000000" stroke-width="3"/>
      <!-- Wicker Basket -->
      <rect x="270" y="380" width="60" height="50" rx="8" fill="none" stroke="#000000" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'tra-20',
    title: 'Traffic Scenes',
    category: 'Transport',
    classTier: 'Classes 4–5',
    description: 'A busy city intersection with traffic signal, zebra crossing, and cars.',
    published: true,
    svgOutline: `<svg viewBox="0 0 600 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="600" height="500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Traffic Light Pole -->
      <rect x="420" y="80" width="65" height="150" rx="10" fill="none" stroke="#000000" stroke-width="4"/>
      <circle cx="452" cy="115" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="452" cy="155" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <circle cx="452" cy="195" r="16" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="447" y="230" width="12" height="170" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Roadway -->
      <polygon points="0,320 600,320 600,500 0,500" fill="none" stroke="#000000" stroke-width="4"/>
      <!-- Zebra Crossing Stripes -->
      <rect x="100" y="360" width="60" height="20" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="200" y="360" width="60" height="20" fill="none" stroke="#000000" stroke-width="3"/>
      <rect x="300" y="360" width="60" height="20" fill="none" stroke="#000000" stroke-width="3"/>
    </svg>`
  }
];
