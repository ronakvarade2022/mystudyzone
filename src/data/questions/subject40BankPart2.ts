import { ClassLevel, QuizLevel, SubjectName } from '../../types';
import { RawQuizSpec } from './subject40BankPart1';

/**
 * Part 2 of the 560-Question Verified Curriculum Bank:
 * Covers the remaining 7 Subjects × 4 Levels × 10 Unique Questions = 280 Unique Questions:
 * 8. History
 * 9. Geography
 * 10. Computer Knowledge
 * 11. Logical Reasoning
 * 12. Environmental Studies
 * 13. Moral Education
 * 14. Vocabulary and Grammar
 */
export function getPart2SubjectQuestions(
  classLevel: ClassLevel,
  subject: SubjectName,
  level: QuizLevel
): RawQuizSpec[] | null {
  const c = parseInt(classLevel.replace('Class ', ''), 10) || 4;

  // ============================================================================
  // 8. HISTORY — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'History') {
    if (level === 1) {
      return [
        {
          text: `On which date did India achieve Independence from British rule?`,
          options: ['26th January 1950', '15th August 1947', '2nd October 1869', '14th November 1947'],
          correctIndex: 1,
          explanation: 'India became an independent nation on 15th August 1947.',
          topic: 'Indian Independence'
        },
        {
          text: `Fill in the blank: Chhatrapati Shivaji Maharaj was born at _____ Fort in Pune district in 1630.`,
          options: ['Raigad', 'Shivneri', 'Purandar', 'Torna'],
          correctIndex: 1,
          explanation: 'Chhatrapati Shivaji Maharaj was born on 19 February 1630 at Shivneri Fort to Rajmata Jijabai and Shahaji Raje.',
          topic: 'Swarajya & Shivaji Maharaj'
        },
        {
          text: `True or False: Early humans discovered fire by striking stones (flint) together, which helped them cook food and stay warm.`,
          options: ['True', 'False', 'They used electric stoves', 'Fire was never discovered'],
          correctIndex: 0,
          explanation: 'The discovery of fire in the Stone Age was a major milestone for warmth, cooking, and protection.',
          topic: 'Early Humans & Stone Age'
        },
        {
          text: `Who gave the famous freedom slogan "Swaraj is my birthright, and I shall have it!"?`,
          options: ['Lala Lajpat Rai', 'Lokmanya Bal Gangadhar Tilak', 'Bipin Chandra Pal', 'Gopal Krishna Gokhale'],
          correctIndex: 1,
          explanation: 'Lokmanya Bal Gangadhar Tilak proclaimed "Swaraj is my birthright and I shall have it!" during the freedom struggle.',
          topic: 'Freedom Fighters of India'
        },
        {
          text: `Which ancient civilization flourished along the banks of the River Indus and featured planned brick cities like Harappa and Mohenjo-daro?`,
          options: ['Roman Civilization', 'Indus Valley (Harappan) Civilization', 'Inca Civilization', 'Mayan Civilization'],
          correctIndex: 1,
          explanation: 'The Indus Valley Civilization (Harappan Civilization) was renowned for urban town planning and drainage systems.',
          topic: 'Indus Valley Civilization'
        },
        {
          text: `Identify the INCORRECT match between a freedom fighter and their popular title:`,
          options: [
            'Subhas Chandra Bose - Netaji',
            'Vallabhbhai Patel - Sardar (Iron Man of India)',
            'Rani Lakshmibai - Manikarnika (Warrior Queen of Jhansi)',
            'Bhagat Singh - Nightingale of India'
          ],
          correctIndex: 3,
          explanation: 'Sarojini Naidu is called the "Nightingale of India"; Bhagat Singh is revered as "Shaheed-e-Azam".',
          topic: 'Leaders of the Freedom Movement'
        },
        {
          text: `Complete the sentence: Emperor Ashoka the Great embraced the path of non-violence (Ahimsa) and Buddhism after witnessing the sorrow of the _____ War.`,
          options: ['Panipat', 'Kalinga', 'Buxar', 'Plassey'],
          correctIndex: 1,
          explanation: 'The Kalinga War (261 BCE) deeply moved Emperor Ashoka, leading him to renounce warfare and spread Dhamma.',
          topic: 'Mauryan Empire & Ashoka'
        },
        {
          text: `Which was the first fort captured by young Shivaji Maharaj at the age of 16 to lay the foundation of Hindavi Swarajya?`,
          options: ['Sindhudurg Fort', 'Torna Fort (Prachandagad)', 'Janjira Fort', 'Panhala Fort'],
          correctIndex: 1,
          explanation: 'In 1646, Shivaji Maharaj captured Torna Fort, marking the beginning of Hindavi Swarajya.',
          topic: 'Foundation of Swarajya'
        },
        {
          text: `Look at the wheel icon 🛞. Which invention of the Neolithic (New Stone) Age revolutionized transport and pottery making?`,
          options: ['The Steam Engine', 'The Wheel', 'The Printing Press', 'The Compass'],
          correctIndex: 1,
          diagramEmoji: '🛞',
          explanation: 'The invention of the wheel transformed human transport, carts, and pottery making.',
          topic: 'Ancient Inventions'
        },
        {
          text: `Chronological Order: Which of these historical eras came FIRST in Indian history?`,
          options: ['The Mughal Period', 'The Indus Valley Civilization', 'The British Raj', 'The Quit India Movement'],
          correctIndex: 1,
          explanation: 'The Indus Valley Civilization (~3300–1300 BCE) is the earliest among these historical periods.',
          topic: 'Historical Timelines'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `At which majestic fort was Chhatrapati Shivaji Maharaj crowned as "Chhatrapati" (Rajyabhishek) on 6th June 1674?`,
          options: ['Pratapgad Fort', 'Raigad Fort', 'Rajgad Fort', 'Vishalgad Fort'],
          correctIndex: 1,
          explanation: 'Chhatrapati Shivaji Maharaj\'s grand coronation took place at Raigad Fort, the capital of Swarajya, in 1674.',
          topic: 'Coronation at Raigad'
        },
        {
          text: `Fill in the blank: Gautama Buddha delivered his first sermon after enlightenment at _____, near Varanasi.`,
          options: ['Lumbini', 'Sarnath', 'Kushinagar', 'Taxila'],
          correctIndex: 1,
          explanation: 'Lord Buddha attained enlightenment at Bodh Gaya and delivered his first sermon (Dharmachakra Pravartana) at Sarnath.',
          topic: 'Buddhism & Jainism'
        },
        {
          text: `True or False: The "Dandi March" (Salt Satyagraha) of 1930 was led by Mahatma Gandhi from Sabarmati Ashram to the coastal village of Dandi.`,
          options: ['True', 'False', 'It was in 1857', 'It started in Kolkata'],
          correctIndex: 0,
          explanation: 'In March–April 1930, Mahatma Gandhi walked 240 miles from Sabarmati Ashram to Dandi to protest the British salt tax.',
          topic: 'Civil Disobedience Movement'
        },
        {
          text: `Match the historical site: The Great Bath, an ancient brick water tank, was excavated at which Indus Valley site?`,
          options: ['Lothal', 'Mohenjo-daro', 'Kalibangan', 'Ropar'],
          correctIndex: 1,
          explanation: 'The Great Bath is one of the most famous structures excavated at Mohenjo-daro.',
          topic: 'Harappan Architecture'
        },
        {
          text: `Which Gupta ruler is celebrated as the "Napoleon of India" for his military conquests and is also depicted playing the Veena on gold coins?`,
          options: ['Chandragupta I', 'Samudragupta', 'Skandagupta', 'Bimbisara'],
          correctIndex: 1,
          explanation: 'Samudragupta of the Gupta dynasty was an undefeated strategist as well as a patron of music and poetry.',
          topic: 'The Golden Age of Guptas'
        },
        {
          text: `Identify the INCORRECT statement about the Revolt of 1857 (First War of Independence):`,
          options: [
            'Mangal Pandey was a brave pioneer of the uprising at Barrackpore',
            'Rani Lakshmibai fought heroically to defend Jhansi',
            'Tatya Tope and Nana Saheb led forces in Kanpur and Gwalior',
            'The Revolt of 1857 was fought using modern jet aircraft'
          ],
          correctIndex: 3,
          explanation: 'Jet aircraft did not exist in 1857; the uprising was fought with traditional cavalry, muskets, and swords.',
          topic: 'First War of Independence 1857'
        },
        {
          text: `Complete the sentence: Netaji Subhas Chandra Bose formed the _____ (INA) to fight for India's liberation and gave the call "Jai Hind" and "Give me blood, and I shall give you freedom!"`,
          options: ['Ghadar Party', 'Azad Hind Fauj (Indian National Army)', 'Swaraj Party', 'Home Rule League'],
          correctIndex: 1,
          explanation: 'Netaji Subhas Chandra Bose led the Azad Hind Fauj (INA) and inspired millions with "Jai Hind" and "Chalo Dilli".',
          topic: 'Azad Hind Fauj'
        },
        {
          text: `Who was the brave Maratha commander who sacrificed his life capturing Kondhana Fort (renamed Sinhagad — "The Lion's Fort") in 1670?`,
          options: ['Baji Prabhu Deshpande', 'Tanaji Malusare', 'Murarbaji Deshpande', 'Kanhoji Angre'],
          correctIndex: 1,
          explanation: 'Subhedar Tanaji Malusare fought valiantly at Kondhana; Shivaji Maharaj paid tribute saying "Gad aala, pan Sinha gela".',
          topic: 'Heroes of Maratha History'
        },
        {
          text: `Look at the fort icon 🏰. What was the council of eight ministers appointed by Chhatrapati Shivaji Maharaj for efficient governance called?`,
          options: ['Navratna', 'Ashtapradhan Mandal', 'Panchayat', 'Mantri Sabha'],
          correctIndex: 1,
          diagramEmoji: '🏰',
          explanation: 'The Ashtapradhan Mandal was Shivaji Maharaj\'s council of eight ministers (including Peshwa, Amatya, Senapati, Nyayadhish).',
          topic: 'Maratha Administration'
        },
        {
          text: `Which social reformer founded the "Satyashodhak Samaj" in Maharashtra in 1873 and worked with his wife Savitribai Phule to pioneer girls' education?`,
          options: ['Raja Ram Mohan Roy', 'Mahatma Jyotirao Phule', 'Swami Dayananda Saraswati', 'Mahadev Govind Ranade'],
          correctIndex: 1,
          explanation: 'Mahatma Jyotirao Phule and Krantijyoti Savitribai Phule opened India\'s first school for girls at Bhide Wada, Pune in 1848.',
          topic: 'Social Reformers of India'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `Which Harappan port city in Gujarat is famous for having the world's earliest known artificial brick dockyard for maritime trade?`,
          options: ['Dholavira', 'Lothal', 'Banawali', 'Alamgirpur'],
          correctIndex: 1,
          explanation: 'Lothal in Gujarat featured an engineered tidal dockyard connecting the Harappan civilization to the Arabian Sea.',
          topic: 'Ancient Maritime Trade'
        },
        {
          text: `Fill in the blank: The famous Chinese Buddhist pilgrim _____ visited India during the reign of Emperor Harshavardhana in the 7th century CE and studied at Nalanda.`,
          options: ['Marco Polo', 'Hiuen Tsang (Xuanzang)', 'Ibn Battuta', 'Megasthenes'],
          correctIndex: 1,
          explanation: 'Hiuen Tsang (Xuanzang) traveled across India during Harshavardhana\'s reign and wrote "Si-Yu-Ki".',
          topic: 'Foreign Travelers in History'
        },
        {
          text: `True or False: The Brihadeeswarar Temple at Thanjavur, a UNESCO World Heritage masterpiece of Dravidian architecture, was built by Chola Emperor Rajaraja Chola I.`,
          options: ['True', 'False', 'It was built by the British', 'It is in Rajasthan'],
          correctIndex: 0,
          explanation: 'Rajaraja Chola I completed the grand Brihadeeswarar Temple in Thanjavur in 1010 CE.',
          topic: 'Chola Dynasty & Architecture'
        },
        {
          text: `In which year did Mahatma Gandhi launch the historic "Quit India Movement" (Bharat Chhodo Andolan) with the call "Do or Die" (Karo ya Maro)?`,
          options: ['1920', '1942 (8th August 1942)', '1930', '1919'],
          correctIndex: 1,
          explanation: 'The Quit India Resolution was passed on 8 August 1942 at Gowalia Tank Maidan (August Kranti Maidan) in Mumbai.',
          topic: 'Quit India Movement'
        },
        {
          text: `Who authored "Discovery of India" while imprisoned at Ahmednagar Fort during the freedom movement?`,
          options: ['Maulana Abul Kalam Azad', 'Pandit Jawaharlal Nehru', 'Dr. Rajendra Prasad', 'C. Rajagopalachari'],
          correctIndex: 1,
          explanation: 'Jawaharlal Nehru wrote "The Discovery of India" in 1942–1946 at Ahmednagar Fort.',
          topic: 'Historical Literature'
        },
        {
          text: `Identify the INCORRECT match between an ancient Indian scholar and their contribution:`,
          options: [
            'Aryabhata - Astronomy, value of Pi, and place-value zero system',
            'Sushruta - Ancient surgical treatise (Sushruta Samhita)',
            'Charaka - Ayurvedic medicine (Charaka Samhita)',
            'Kalidasa - Invented the modern diesel engine'
          ],
          correctIndex: 3,
          explanation: 'Mahakavi Kalidasa was the greatest classical Sanskrit poet and dramatist (Shakuntala, Meghaduta), not a mechanical engineer.',
          topic: 'Science & Literature in Ancient India'
        },
        {
          text: `Complete the sentence: The Vijayanagara Empire, with its grand capital at Hampi on the banks of the Tungabhadra river, was founded in 1336 CE by brothers _____.`,
          options: ['Harihara I and Bukka Raya I', 'Babar and Humayun', 'Ashoka and Bindusara', 'Prithviraj and Jaichand'],
          correctIndex: 0,
          explanation: 'Harihara and Bukka founded the Vijayanagara Empire in 1336 CE; Krishnadevaraya was its most celebrated ruler.',
          topic: 'Vijayanagara Empire'
        },
        {
          text: `Which naval commander and sea fort built by Chhatrapati Shivaji Maharaj earned him the title "Father of the Indian Navy"?`,
          options: [
            'Construction of Sindhudurg & Vijaydurg sea forts and a strong indigenous Maratha naval fleet',
            'Purchasing submarines from Europe',
            'Building only desert forts',
            'Avoiding coastal defense'
          ],
          correctIndex: 0,
          explanation: 'Shivaji Maharaj recognized maritime security early ("Jala jyache, tyache Rajya") and built invincible sea forts like Sindhudurg.',
          topic: 'Maratha Naval Vision'
        },
        {
          text: `Look at the scroll icon 📜. Who was the Greek ambassador sent by Seleucus Nicator to the court of Chandragupta Maurya in Pataliputra, who wrote the book "Indica"?`,
          options: ['Ptolemy', 'Megasthenes', 'Herodotus', 'Pliny'],
          correctIndex: 1,
          diagramEmoji: '📜',
          explanation: 'Megasthenes lived in Pataliputra and documented Mauryan administration and society in his work "Indica".',
          topic: 'Mauryan Historical Sources'
        },
        {
          text: `Which queen of Indore (Malwa) from the Holkar dynasty is revered across India for her wise, peaceful governance, justice, and construction of dharmashalas and temples from Kashi to Rameswaram?`,
          options: ['Rani Chennamma', 'PunyashlokDevi Ahilyabai Holkar', 'Rani Durgavati', 'Chand Bibi'],
          correctIndex: 1,
          explanation: 'Punyashlok Ahilyabai Holkar (1725–1795) was an exemplary philosopher-queen renowned for welfare works and justice.',
          topic: 'Great Rulers of India'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `Which scripts were deciphered by James Prinsep in 1837, unlocking the reading of Emperor Ashoka's rock and pillar edicts?`,
        options: ['Hieroglyphics and Cuneiform', 'Brahmi and Kharosthi scripts', 'Latin and Greek only', 'Runic script'],
        correctIndex: 1,
          explanation: 'In 1837, James Prinsep deciphered the ancient Brahmi and Kharosthi scripts used in Ashoka\'s inscriptions.',
        topic: 'Epigraphy & Inscriptions'
      },
      {
        text: `Fill in the blank: The historic "Poona Pact" of 1932 was signed between Dr. B.R. Ambedkar and _____ to ensure reserved seats for the depressed classes within the general electorate.`,
        options: ['Lord Mountbatten', 'Mahatma Gandhi', 'Muhammad Ali Jinnah', 'Clement Attlee'],
        correctIndex: 1,
        explanation: 'The Poona Pact (September 1932) at Yerwada Central Jail was an agreement between Dr. B.R. Ambedkar and Mahatma Gandhi.',
        topic: 'Constitutional & Modern History'
      },
      {
        text: `True or False: The rock-cut Kailasa Temple (Cave 16) at Ellora in Maharashtra was carved out of a single monolithic basalt rock from top to bottom under Rashtrakuta King Krishna I.`,
        options: ['True', 'False', 'It was built with bricks', 'It was built in 1990'],
        correctIndex: 0,
        explanation: 'The Kailasa temple at Ellora is an engineering marvel carved vertically downward out of a single cliff rock in the 8th century CE.',
        topic: 'Rock-Cut Architecture'
      },
      {
        text: `Match the historical treaty: The "Treaty of Purandar" (June 1665) was signed between Chhatrapati Shivaji Maharaj and which commander representing the Mughal Empire?`,
        options: ['Afzal Khan', 'Mirza Raja Jai Singh I', 'Shaista Khan', 'Dilir Khan'],
        correctIndex: 1,
        explanation: 'The Treaty of Purandar was concluded in June 1665 between Shivaji Maharaj and Rajput general Mirza Raja Jai Singh I.',
        topic: 'Diplomatic History of Swarajya'
      },
      {
        text: `Who presided over the historic Lahore Session of the Indian National Congress in December 1929, where the resolution for "Purna Swaraj" (Complete Independence) was adopted?`,
        options: ['Dadabhai Naoroji', 'Jawaharlal Nehru', 'Lala Lajpat Rai', 'Annie Besant'],
        correctIndex: 1,
        explanation: 'At the 1929 Lahore Congress presided over by Jawaharlal Nehru, "Purna Swaraj" was declared the national goal.',
        topic: 'Purna Swaraj Resolution'
      },
      {
        text: `Identify the INCORRECT statement regarding the Bhakti and Sufi traditions in India:`,
        options: [
          'Sant Dnyaneshwar, Sant Namdev, Sant Eknath, and Sant Tukaram enriched the Warkari movement in Maharashtra',
          'Guru Nanak Dev Ji founded Sikhism emphasizing Ek Onkar, equality, and Langar (community kitchen)',
          'Kabir and Mirabai composed devotional poetry in the language of the common people',
          'The Bhakti movement forbade people from singing devotional songs in regional languages'
        ],
        correctIndex: 3,
        explanation: 'The Bhakti movement championed composing hymns in regional vernacular languages (Marathi, Hindi, Tamil, Kannada, Bengali) accessible to all.',
        topic: 'Bhakti & Cultural Synthesis'
      },
      {
        text: `Complete the sentence: Dadabhai Naoroji, known as the "Grand Old Man of India," wrote the landmark book "Poverty and Un-British Rule in India" propounding the _____ Theory.`,
        options: ['Gravity', 'Drain of Wealth', 'Continental Drift', 'Solar Nebula'],
        correctIndex: 1,
        explanation: 'Dadabhai Naoroji scientifically exposed how colonial policies drained India\'s economic wealth to Britain.',
        topic: 'Economic Critique of Colonialism'
      },
      {
        text: `In the context of Maratha history, why is the Battle of Pavan Khind (July 1660) immortalized?`,
        options: [
          'Veer Baji Prabhu Deshpande and a small band of Mavlas held back Siddi Jauhar\'s massive army at the narrow mountain pass until Shivaji Maharaj safely reached Vishalgad',
          'It was a naval battle in the Bay of Bengal',
          'It was fought in Delhi',
          'No weapons were used'
        ],
        correctIndex: 0,
        explanation: 'Baji Prabhu Deshpande\'s supreme sacrifice at Ghod Khind consecrated the pass as "Pavan Khind" (Sacred Pass).',
        topic: 'Battle of Pavan Khind'
      },
      {
        text: `Look at the Constituent Assembly icon 🏛️. On which date did the Constituent Assembly of India formally adopt and enact the Constitution of India (celebrated as Constitution Day / Samvidhan Divas)?`,
        options: ['15th August 1947', '26th November 1949', '26th January 1952', '2nd October 1950'],
        correctIndex: 1,
        diagramEmoji: '🏛️',
        explanation: 'The Constitution was adopted on 26th November 1949 (Samvidhan Divas) and came into full force on 26th January 1950.',
        topic: 'Framing of the Constitution'
      },
      {
        text: `Which Tripartite Struggle in early medieval India (8th–10th century CE) was fought among the Gurjara-Pratiharas, the Palas, and the Rashtrakutas for control over which strategic imperial city?`,
        options: ['Madurai', 'Kannauj (in the Ganga Valley)', 'Surat', 'Kochi'],
        correctIndex: 1,
        explanation: 'The Pratiharas, Palas, and Rashtrakutas competed for supremacy over the fertile and prestigious city of Kannauj.',
        topic: 'Early Medieval Indian History'
      }
    ];
  }

  // ============================================================================
  // 9. GEOGRAPHY — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Geography') {
    if (level === 1) {
      return [
        {
          text: `In which cardinal direction does the Sun appear to rise every morning?`,
          options: ['West', 'East', 'North', 'South'],
          correctIndex: 1,
          explanation: 'Because the Earth rotates from West to East, the Sun rises in the East and sets in the West.',
          topic: 'Cardinal Directions'
        },
        {
          text: `Fill in the blank: Approximately _____ percent of the Earth's surface is covered by water (oceans, seas, and rivers).`,
          options: ['29%', '71%', '50%', '10%'],
          correctIndex: 1,
          explanation: 'About 71% of Earth\'s surface is covered with water and 29% is land, earning Earth the nickname "Blue Planet".',
          topic: 'Earth: The Blue Planet'
        },
        {
          text: `True or False: The Pacific Ocean is the largest and deepest ocean on Earth.`,
          options: ['True', 'False', 'Arctic Ocean is the largest', 'Indian Ocean is the largest'],
          correctIndex: 0,
          explanation: 'The Pacific Ocean is the largest and deepest of the world\'s five oceans.',
          topic: 'Continents and Oceans'
        },
        {
          text: `Which is the highest mountain peak in the world, located in the Himalayas?`,
          options: ['Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji', 'Mount Alps'],
          correctIndex: 1,
          explanation: 'Mount Everest (8,848.86 metres) in the Mahalangur Himalayas is the highest peak above sea level.',
          topic: 'Major Landforms: Mountains'
        },
        {
          text: `Which is the longest sacred river flowing through India from the Himalayas to the Bay of Bengal?`,
          options: ['River Narmada', 'River Ganga (Ganges)', 'River Tapi', 'River Periyar'],
          correctIndex: 1,
          explanation: 'The River Ganga (~2,525 km) is the longest river flowing within India.',
          topic: 'Rivers of India'
        },
        {
          text: `Identify the INCORRECT match between an Indian state and its capital city:`,
          options: [
            'Maharashtra - Mumbai',
            'Karnataka - Bengaluru',
            'Tamil Nadu - Chennai',
            'Rajasthan - Bhopal'
          ],
          correctIndex: 3,
          explanation: 'The capital of Rajasthan is Jaipur; Bhopal is the capital of Madhya Pradesh.',
          topic: 'Indian States & Capitals'
        },
        {
          text: `Complete the sentence: A piece of land that is completely surrounded by water on all sides is called an _____.`,
          options: ['Peninsula', 'Island', 'Plateau', 'Valley'],
          correctIndex: 1,
          explanation: 'An island (such as Sri Lanka or Andaman) is surrounded by water on all sides; a peninsula is surrounded on three sides.',
          topic: 'Geographical Landforms'
        },
        {
          text: `Which desert, located primarily in Rajasthan, is known as the Great Indian Desert?`,
          options: ['Sahara Desert', 'Thar Desert', 'Gobi Desert', 'Atacama Desert'],
          correctIndex: 1,
          explanation: 'The Thar Desert in northwestern India (Rajasthan) is the Great Indian Desert.',
          topic: 'Physical Divisions of India'
        },
        {
          text: `Look at the magnetic compass icon 🧭. Which direction does a freely suspended magnetic compass needle always point toward?`,
          options: ['East-West', 'North-South', 'Up-Down', 'Randomly'],
          correctIndex: 1,
          diagramEmoji: '🧭',
          explanation: 'Earth\'s magnetic field aligns a compass needle along the North-South axis.',
          topic: 'Navigation & Maps'
        },
        {
          text: `How long does the Earth take to complete one full rotation on its axis, causing day and night?`,
          options: ['365 days', 'Approximately 24 hours (1 day)', '30 days', '12 hours'],
          correctIndex: 1,
          explanation: 'Earth rotates once on its axis every ~24 hours (causing day and night) and revolves around the Sun in ~365.25 days.',
          topic: 'Motions of the Earth'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `What is the imaginary 0° latitude line that circles the middle of the Earth, dividing it into the Northern and Southern Hemispheres?`,
          options: ['Prime Meridian', 'The Equator', 'Arctic Circle', 'International Date Line'],
          correctIndex: 1,
          explanation: 'The Equator (0° latitude) is the longest parallel of latitude dividing Earth into Northern and Southern Hemispheres.',
          topic: 'Latitudes and Longitudes'
        },
        {
          text: `Fill in the blank: The fertile black soil of the Deccan Plateau (Regur soil) is best suited for cultivating the _____ crop.`,
          options: ['Tea', 'Cotton', 'Apples', 'Saffron'],
          correctIndex: 1,
          explanation: 'Black lava soil (Regur) retains moisture well and is famously called "Black Cotton Soil".',
          topic: 'Soils and Crops of India'
        },
        {
          text: `True or False: Peninsular India is bounded by the Arabian Sea in the west, the Bay of Bengal in the east, and the Indian Ocean in the south.`,
          options: ['True', 'False', 'It is surrounded by land only', 'It borders the Arctic Ocean'],
          correctIndex: 0,
          explanation: 'Southern India is a triangular peninsula washed by three major water bodies: Arabian Sea, Bay of Bengal, and Indian Ocean.',
          topic: 'India\'s Coastal Geography'
        },
        {
          text: `Which layer of the Earth's atmosphere is the lowest layer where we live and where almost all weather phenomena (clouds, rain, winds) occur?`,
          options: ['Thermosphere', 'Troposphere', 'Exosphere', 'Mesosphere'],
          correctIndex: 1,
          explanation: 'The Troposphere extends from Earth\'s surface up to ~8–18 km and contains most water vapor and weather activity.',
          topic: 'Layers of the Atmosphere'
        },
        {
          text: `Which two major rivers of Peninsular India flow WESTWARD through rift valleys and drain into the Arabian Sea (instead of the Bay of Bengal)?`,
          options: [
            'Ganga and Yamuna',
            'Narmada and Tapi (Tapti)',
            'Godavari and Krishna',
            'Mahanadi and Kaveri'
          ],
          correctIndex: 1,
          explanation: 'Unlike most peninsular rivers that flow east into the Bay of Bengal, the Narmada and Tapi flow west into the Arabian Sea.',
          topic: 'Drainage Systems of India'
        },
        {
          text: `Identify the INCORRECT statement about the layers of the Earth's interior:`,
          options: [
            'The Crust is the outermost thin solid rocky layer',
            'The Mantle lies beneath the crust and is composed of hot silicate rocks',
            'The Core is the innermost layer rich in Nickel and Iron (Nife)',
            'The center of the Earth is made of frozen ice and snow'
          ],
          correctIndex: 3,
          explanation: 'Earth\'s inner core is extremely hot (~5,000°C+) and composed of dense iron and nickel, not ice.',
          topic: 'Interior of the Earth'
        },
        {
          text: `Complete the sentence: The world's largest delta, formed by the confluence of the Ganga and Brahmaputra rivers, is the _____ Delta.`,
          options: ['Nile', 'Sundarbans (Ganga-Brahmaputra)', 'Amazon', 'Mississippi'],
          correctIndex: 1,
          explanation: 'The Sundarbans Delta in West Bengal and Bangladesh is the largest river delta in the world, famous for mangrove forests and Royal Bengal Tigers.',
          topic: 'Deltas and Estuaries'
        },
        {
          text: `In India, crops sown at the beginning of the Southwest Monsoon (June–July) and harvested in autumn (September–October), such as Paddy (Rice) and Maize, are called:`,
          options: ['Rabi crops', 'Kharif crops', 'Zaid crops', 'Winter wheat crops'],
          correctIndex: 1,
          explanation: 'Kharif crops are monsoon crops (Rice, Maize, Cotton); Rabi crops are winter crops (Wheat, Mustard, Gram).',
          topic: 'Cropping Seasons in India'
        },
        {
          text: `Look at the volcano icon 🌋. Rocks formed by the cooling and solidification of molten magma or lava (such as Basalt and Granite) are classified as:`,
          options: ['Sedimentary rocks', 'Igneous rocks', 'Metamorphic rocks', 'Fossil rocks'],
          correctIndex: 1,
          diagramEmoji: '🌋',
          explanation: 'Igneous rocks ("ignis" = fire) are primary rocks formed when molten magma or lava cools and solidifies.',
          topic: 'Types of Rocks'
        },
        {
          text: `Why does Chennai experience rainfall primarily during October–December while most of India receives rain in June–September?`,
          options: [
            'Because Chennai has no clouds in summer',
            'Because the Coromandel Coast of Tamil Nadu receives rain from the Retreating (Northeast) Monsoon winds picking up moisture over the Bay of Bengal',
            'Because snow melts in Chennai',
            'Because it lies north of the Himalayas'
          ],
          correctIndex: 1,
          explanation: 'During October–December, Northeast (Retreating) Monsoon winds cross the Bay of Bengal and bring winter rains to Tamil Nadu\'s Coromandel Coast.',
          topic: 'Indian Monsoon Mechanism'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `Indian Standard Time (IST) is 5 hours and 30 minutes ahead of GMT/UTC. Which longitude is taken as the Standard Meridian of India, passing through Mirzapur (near Prayagraj)?`,
          options: ['0° Longitude', '82°30\' E (82.5° East)', '23°30\' N', '90°00\' West'],
          correctIndex: 1,
          explanation: '82°30\' E longitude is the Standard Meridian of India; since 1° = 4 minutes, 82.5 × 4 = 330 minutes (+5h 30m).',
          topic: 'Indian Standard Time (IST)'
        },
        {
          text: `Fill in the blank: The ozone layer, which protects living organisms on Earth by absorbing harmful ultraviolet (UV) radiation from the Sun, is located in the _____.`,
          options: ['Troposphere', 'Stratosphere', 'Exosphere', 'Ionosphere'],
          correctIndex: 1,
          explanation: 'The protective Ozone Layer (O₃) is concentrated in the lower portion of the Stratosphere (~15–35 km altitude).',
          topic: 'Atmospheric Structure'
        },
        {
          text: `True or False: The Western Ghats (Sahyadri Hills) run parallel to the western coast of India and are recognized as one of the world's major Biodiversity Hotspots.`,
          options: ['True', 'False', 'They are located in Punjab', 'They have no forests'],
          correctIndex: 0,
          explanation: 'The Western Ghats (Sahyadri) are a UNESCO World Heritage site and a global biodiversity hotspot.',
          topic: 'Physiography of India'
        },
        {
          text: `Match the river and nickname: Which Peninsular river is the longest in South India and is affectionately called the "Dakshin Ganga" (Ganga of the South)?`,
          options: ['Kaveri', 'Godavari', 'Vaigai', 'Mahanadi'],
          correctIndex: 1,
          explanation: 'Originating at Trimbakeshwar in Nashik (Maharashtra), the Godavari (1,465 km) is the largest peninsular river system ("Dakshin Ganga").',
          topic: 'Peninsular River Systems'
        },
        {
          text: `What causes the periodic cycle of Seasons (Summer, Winter, Spring, Autumn) on Earth?`,
          options: [
            'Earth\'s rotation on its axis in 24 hours only',
            'The revolution of the Earth around the Sun combined with the 23.5° tilt of the Earth\'s axis',
            'The Moon blocking the Sun every month',
            'Ocean waves hitting the shore'
          ],
          correctIndex: 1,
          explanation: 'Earth\'s axial tilt (23.5°) as it revolves around the Sun causes different hemispheres to receive varying solar intensity across the year.',
          topic: 'Revolution & Axial Tilt'
        },
        {
          text: `Identify the INCORRECT match between a National Park in India and the state where it is located:`,
          options: [
            'Kaziranga National Park (One-horned Rhino) - Assam',
            'Gir National Park (Asiatic Lion) - Gujarat',
            'Jim Corbett National Park - Uttarakhand',
            'Tadoba-Andhari Tiger Reserve - Himachal Pradesh'
          ],
          correctIndex: 3,
          explanation: 'Tadoba-Andhari Tiger Reserve is located in Chandrapur district of Maharashtra, not Himachal Pradesh.',
          topic: 'National Parks & Wildlife Sanctuaries'
        },
        {
          text: `Complete the sentence: High-speed ocean waves triggered by an underwater earthquake or volcanic eruption on the sea floor are called a _____.`,
          options: ['Drought', 'Tsunami', 'Blizzard', 'Loo'],
          correctIndex: 1,
          explanation: 'A Tsunami ("harbor wave" in Japanese) is a series of powerful ocean waves caused by submarine seismic activity.',
          topic: 'Natural Hazards & Disasters'
        },
        {
          text: `If it is 12:00 Noon at Greenwich (0° Prime Meridian), what is the local time at a place located at 45° East longitude? (Hint: Earth rotates 1° every 4 minutes)`,
          options: ['9:00 AM', '3:00 PM', '1:00 PM', '6:00 PM'],
          correctIndex: 1,
          explanation: '45° × 4 minutes/degree = 180 minutes = 3 hours. Since it is East of Greenwich, time is ahead: 12:00 Noon + 3 hours = 3:00 PM.',
          topic: 'Longitude & Time Calculation'
        },
        {
          text: `Look at the map scale icon 🗺️. On a physical relief map, which color is universally used to represent deep oceans and water bodies?`,
          options: ['Brown', 'Blue', 'Green', 'Yellow'],
          correctIndex: 1,
          diagramEmoji: '🗺️',
          explanation: 'Conventional cartographic colors use Blue for water bodies, Green for plains, Yellow for plateaus, and Brown for mountains.',
          topic: 'Cartography & Map Reading'
        },
        {
          text: `Why does the Leeward (Eastern) side of the Western Ghats in Maharashtra (the Rain-Shadow region) receive much less rainfall than the Konkan coast?`,
          options: [
            'Because clouds never form over the Arabian Sea',
            'Because moisture-laden winds shed most of their rain on the windward coastal slope and become dry as they descend the leeward slope',
            'Because the eastern side is below sea level',
            'Because rivers absorb all the clouds'
          ],
          correctIndex: 1,
          explanation: 'In orographic rainfall, moist winds rise up the windward slope causing heavy rain on the coast, leaving the leeward side in a dry rain-shadow zone.',
          topic: 'Orographic Rainfall & Rain Shadow'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `The Himalayas are classified geologically as which type of mountains, formed by the tectonic collision of the Indian Plate with the Eurasian Plate?`,
        options: ['Volcanic Mountains', 'Young Fold Mountains', 'Block (Fault) Mountains', 'Residual Mountains'],
        correctIndex: 1,
          explanation: 'The Himalayas are Young Fold Mountains formed by the folding of Tethys sea sediments due to tectonic plate convergence.',
        topic: 'Plate Tectonics & Orogeny'
      },
      {
        text: `Fill in the blank: The narrow strip of water that separates India from Sri Lanka and connects the Bay of Bengal with the Gulf of Mannar is the _____ Strait.`,
        options: ['Bering', 'Palk', 'Gibraltar', 'Malacca'],
        correctIndex: 1,
        explanation: 'The Palk Strait lies between Tamil Nadu (India) and the Northern Province of Sri Lanka.',
        topic: 'Straits and Channels'
      },
      {
        text: `True or False: On 21st June (Summer Solstice in the Northern Hemisphere), the Sun's rays fall vertically overhead on the Tropic of Cancer (23.5° N), giving the Northern Hemisphere its longest day.`,
        options: ['True', 'False', 'It is the shortest day', 'Rays fall on the South Pole'],
        correctIndex: 0,
        explanation: 'June 21 is the Summer Solstice in the Northern Hemisphere when the Sun is directly overhead at the Tropic of Cancer.',
        topic: 'Solstices and Equinoxes'
      },
      {
        text: `Which unique crater lake in Buldhana district of Maharashtra was formed by a hypervelocity meteor impact in basaltic rock?`,
        options: ['Vembanad Lake', 'Lonar Crater Lake', 'Sambhar Salt Lake', 'Pulicat Lake'],
        correctIndex: 1,
        explanation: 'Lonar Lake in Maharashtra is a notified National Geo-Heritage Monument and Ramsar site formed by a meteorite impact.',
        topic: 'Geography of Maharashtra & India'
      },
      {
        text: `Which ocean current is a WARM ocean current that keeps the ports of Western Europe ice-free even during winter?`,
        options: ['Labrador Current', 'Gulf Stream / North Atlantic Drift', 'Oyashio Current', 'Peru (Humboldt) Current'],
        correctIndex: 1,
        explanation: 'The warm Gulf Stream and North Atlantic Drift carry tropical warmth toward Western Europe.',
        topic: 'Oceanography & Currents'
      },
      {
        text: `Identify the INCORRECT statement regarding forest types and vegetation:`,
        options: [
          'Tropical Evergreen Forests occur in heavy rainfall areas like the Western Ghats and Andaman & Nicobar Islands',
          'Tropical Deciduous (Monsoon) Forests shed their leaves during the dry season to conserve water (e.g., Teak, Sal)',
          'Mangrove Forests thrive in coastal tidal deltas with salt-tolerant aerial roots (Pneumatophores)',
          'Alpine Tundra vegetation consists of dense tall mahogany and rubber trees in hot deserts'
        ],
        correctIndex: 3,
        explanation: 'Alpine Tundra vegetation grows in cold high-altitude mountains and consists of mosses, lichens, and dwarf shrubs, not tropical trees.',
        topic: 'Natural Vegetation & Biomes'
      },
      {
        text: `Complete the sentence: Lines drawn on a weather map connecting places that have the exact same atmospheric pressure reduced to sea level are called _____.`,
        options: ['Isotherms', 'Isobars', 'Isohyets', 'Contours'],
        correctIndex: 1,
        explanation: 'Isobars connect points of equal atmospheric pressure (Isotherms = equal temperature, Isohyets = equal rainfall).',
        topic: 'Meteorology & Weather Maps'
      },
      {
        text: `Which group of Indian islands in the Arabian Sea is composed entirely of coral atolls and reefs?`,
        options: ['Andaman and Nicobar Islands', 'Lakshadweep Islands', 'Majuli Island', 'Wheeler Island'],
        correctIndex: 1,
        explanation: 'Lakshadweep (capital: Kavaratti) in the Arabian Sea is an archipelago of coral atolls.',
        topic: 'Island Groups of India'
      },
      {
        text: `Look at the dam/reservoir icon 🏞️. Across which river is the Hirakud Dam, the longest earthen dam in the world (in Odisha), constructed?`,
        options: ['River Sutlej', 'River Mahanadi', 'River Narmada', 'River Bhagirathi'],
        correctIndex: 1,
        diagramEmoji: '🏞️',
        explanation: 'Hirakud Dam is built across the Mahanadi River near Sambalpur in Odisha.',
        topic: 'Multi-Purpose River Valley Projects'
      },
      {
        text: `Why does the diurnal (day-night) range of temperature remain very small in coastal cities like Mumbai and Chennai compared to interior cities like Delhi or Nagpur?`,
        options: [
          'Because coastal cities are higher than mountains',
          'Because the sea heats up and cools down much more slowly than land, creating a moderating maritime influence via land and sea breezes',
          'Because the Sun does not shine on the coast',
          'Because coastal cities have no wind'
        ],
        correctIndex: 1,
        explanation: 'Water has a high specific heat capacity; land and sea breezes moderate coastal temperatures throughout the year (equable climate).',
        topic: 'Climatology: Continental vs Maritime'
      }
    ];
  }

  // ============================================================================
  // 10. COMPUTER KNOWLEDGE — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Computer Knowledge') {
    if (level === 1) {
      return [
        {
          text: `Which component is known as the "Brain of the Computer"?`,
          options: ['Monitor', 'CPU (Central Processing Unit)', 'Mouse', 'Keyboard'],
          correctIndex: 1,
          explanation: 'The CPU (Central Processing Unit) processes all instructions and calculations, acting as the computer\'s brain.',
          topic: 'Computer Hardware Basics'
        },
        {
          text: `Fill in the blank: A computer _____ is a handheld pointing device used to move the cursor and click icons on the screen.`,
          options: ['Speaker', 'Mouse', 'Printer', 'Scanner'],
          correctIndex: 1,
          explanation: 'The computer mouse controls the on-screen pointer (cursor).',
          topic: 'Input Peripherals'
        },
        {
          text: `True or False: A keyboard is an input device used to type letters, numbers, and symbols into a computer.`,
          options: ['True', 'False', 'It is an output speaker', 'It only prints paper'],
          correctIndex: 0,
          explanation: 'The keyboard is the primary text and numeric input device.',
          topic: 'Input vs Output Devices'
        },
        {
          text: `Which key on the keyboard is the longest key and is used to insert a blank space between words?`,
          options: ['Enter Key', 'Spacebar', 'Shift Key', 'Backspace Key'],
          correctIndex: 1,
          explanation: 'The Spacebar at the bottom row of the keyboard is the longest key and inserts spaces.',
          topic: 'Keyboard Keys'
        },
        {
          text: `Which device is used to print digital documents and pictures onto physical paper?`,
          options: ['Microphone', 'Printer', 'Webcam', 'Joystick'],
          correctIndex: 1,
          explanation: 'A printer is an output device that produces hard copies on paper.',
          topic: 'Output Peripherals'
        },
        {
          text: `Identify the device that is an OUTPUT device (not an input device):`,
          options: ['Keyboard', 'Monitor (Screen)', 'Microphone', 'Scanner'],
          correctIndex: 1,
          explanation: 'A Monitor displays visual output from the computer; Keyboard, Microphone, and Scanner are input devices.',
          topic: 'Hardware Classification'
        },
        {
          text: `Complete the sentence: To erase a letter typed just to the left of the blinking cursor, we press the _____ key.`,
          options: ['Caps Lock', 'Backspace', 'Tab', 'Escape'],
          correctIndex: 1,
          explanation: 'The Backspace key deletes the character immediately to the left of the cursor.',
          topic: 'Text Editing Basics'
        },
        {
          text: `If you want to type all letters in CAPITAL (UPPERCASE) without holding down Shift, which key should you turn ON?`,
          options: ['Num Lock', 'Caps Lock', 'Scroll Lock', 'Ctrl'],
          correctIndex: 1,
          explanation: 'Caps Lock toggles uppercase letter typing on and off.',
          topic: 'Special Keyboard Keys'
        },
        {
          text: `Look at the speaker icon 🔊. What type of output do computer speakers and headphones provide?`,
          options: ['Printed paper output', 'Audio (Sound) output', 'Scanned image input', 'Text typing input'],
          correctIndex: 1,
          diagramEmoji: '🔊',
          explanation: 'Speakers and headphones convert digital audio signals into audible sound waves.',
          topic: 'Multimedia Devices'
        },
        {
          text: `What is the fundamental 3-step working cycle of every computer system?`,
          options: [
            'Print -> Type -> Close',
            'Input -> Process -> Output (IPO Cycle)',
            'Output -> Input -> Delete',
            'Sleep -> Wake -> Shut down'
          ],
          correctIndex: 1,
          explanation: 'Every computer takes Input, Processes it in the CPU, and produces Output (IPO Cycle).',
          topic: 'The IPO Cycle'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `Which keyboard shortcut is universally used to SAVE a document or file?`,
          options: ['Ctrl + P', 'Ctrl + S', 'Ctrl + Z', 'Ctrl + X'],
          correctIndex: 1,
          explanation: 'Ctrl + S saves the current file; Ctrl + P prints, Ctrl + Z undoes, and Ctrl + X cuts.',
          topic: 'Essential Keyboard Shortcuts'
        },
        {
          text: `Fill in the blank: In computer memory, 1 Byte is equal to _____ Bits (Binary Digits).`,
          options: ['4 bits', '8 bits', '10 bits', '100 bits'],
          correctIndex: 1,
          explanation: 'A bit is a 0 or 1, and 8 bits grouped together form 1 Byte.',
          topic: 'Units of Computer Memory'
        },
        {
          text: `True or False: RAM (Random Access Memory) is volatile memory, meaning its contents are erased when the computer is turned off.`,
          options: ['True', 'False', 'RAM stores files permanently without power', 'RAM is a printer'],
          correctIndex: 0,
          explanation: 'RAM is temporary working memory that requires continuous power; Hard Drives/SSDs store files permanently.',
          topic: 'RAM vs ROM'
        },
        {
          text: `Match the software type: Microsoft Windows, macOS, Linux, and Android are examples of what kind of software?`,
          options: ['Web Browsers', 'Operating Systems (System Software)', 'Drawing Tools', 'Spreadsheet Games'],
          correctIndex: 1,
          explanation: 'An Operating System (OS) manages computer hardware and provides a platform for applications to run.',
          topic: 'Operating Systems'
        },
        {
          text: `What does "WWW" stand for in website addresses on the Internet?`,
          options: [
            'World Wide Windows',
            'World Wide Web',
            'Western World Web',
            'Wide Wireless Work'
          ],
          correctIndex: 1,
          explanation: 'WWW stands for the World Wide Web, invented by Sir Tim Berners-Lee in 1989.',
          topic: 'Internet Fundamentals'
        },
        {
          text: `Identify the item that is a Web Browser (used to visit websites) rather than a Hardware component:`,
          options: ['Motherboard', 'Google Chrome', 'Hard Disk Drive', 'RAM Module'],
          correctIndex: 1,
          explanation: 'Google Chrome (along with Firefox, Safari, and Edge) is a software web browser.',
          topic: 'Web Browsers'
        },
        {
          text: `Complete the sentence: If you accidentally delete a sentence while typing, pressing _____ (Undo) immediately brings it back.`,
          options: ['Ctrl + C', 'Ctrl + Z', 'Alt + F4', 'Ctrl + B'],
          correctIndex: 1,
          explanation: 'Ctrl + Z is the universal shortcut for Undo.',
          topic: 'Document Editing'
        },
        {
          text: `In Microsoft Excel or Google Sheets, every formula or calculation must always begin with which symbol?`,
          options: ['# (Hash)', '= (Equals sign)', '@ (At sign)', '$ (Dollar sign)'],
          correctIndex: 1,
          explanation: 'All spreadsheet formulas (such as =SUM(A1:A5)) begin with an equals sign (=).',
          topic: 'Spreadsheets & Excel'
        },
        {
          text: `Look at the folder icon 📁. Which file extension typically indicates an image or photograph file?`,
          options: ['.mp3', '.jpg or .png', '.exe', '.txt'],
          correctIndex: 1,
          diagramEmoji: '📁',
          explanation: '.jpg (.jpeg) and .png are standard image formats (.mp3 is audio, .txt is plain text).',
          topic: 'File Extensions'
        },
        {
          text: `Which cyber safety rule should every student strictly follow while using the Internet?`,
          options: [
            'Post your home address and passwords publicly',
            'Never share OTPs, passwords, or private family details with strangers online',
            'Click on every unknown prize link',
            'Use "12345" as your password everywhere'
          ],
          correctIndex: 1,
          explanation: 'Keeping passwords, OTPs, and personal information private is essential for online safety.',
          topic: 'Cyber Safety & Digital Citizenship'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `What is a finite, step-by-step logical procedure written to solve a computational problem called?`,
          options: ['Motherboard', 'Algorithm', 'Modem', 'Pixel'],
          correctIndex: 1,
          explanation: 'An algorithm is an ordered, unambiguous sequence of steps designed to solve a problem or perform a calculation.',
          topic: 'Algorithms & Flowcharts'
        },
        {
          text: `Fill in the blank: In a flowchart, a diamond-shaped box (◇) is used to represent a _____ (Yes/No or True/False condition).`,
          options: ['Start/Stop terminal', 'Decision / Conditional branch', 'Simple addition', 'Printer output'],
          correctIndex: 1,
          explanation: 'In standard flowchart symbols, an oval is Start/Stop, a rectangle is Process, a parallelogram is I/O, and a diamond is Decision.',
          topic: 'Flowchart Symbols'
        },
        {
          text: `True or False: In Websites, "HTTPS" is more secure than "HTTP" because the "S" stands for Secure (encrypted communication).`,
          options: ['True', 'False', 'HTTP is more secure', 'HTTPS means Slow'],
          correctIndex: 0,
          explanation: 'HTTPS (HyperText Transfer Protocol Secure) encrypts data between your browser and the web server.',
          topic: 'Network Security Protocols'
        },
        {
          text: `What is the full form of "URL" in web browsing?`,
          options: [
            'Universal Radio Link',
            'Uniform Resource Locator',
            'Unified RAM Loader',
            'User Remote Line'
          ],
          correctIndex: 1,
          explanation: 'URL stands for Uniform Resource Locator (the web address of a page or file on the internet).',
          topic: 'Web Addressing'
        },
        {
          text: `In computer networking, what is the difference between a LAN and a WAN?`,
          options: [
            'LAN covers a small local area (like a school computer lab or home), while WAN spans a large geographical area (like the Internet)',
            'LAN is wireless only, WAN is wired only',
            'LAN has no computers, WAN has one computer',
            'There is no difference'
          ],
          correctIndex: 0,
          explanation: 'LAN = Local Area Network (within a building/campus); WAN = Wide Area Network (across cities and countries).',
          topic: 'Computer Networks (LAN vs WAN)'
        },
        {
          text: `Identify the INCORRECT statement about computer storage capacities:`,
          options: [
            '1 Kilobyte (KB) = 1,024 Bytes',
            '1 Megabyte (MB) = 1,024 KB',
            '1 Gigabyte (GB) = 1,024 MB',
            '1 Byte is larger than 1 Terabyte (TB)'
          ],
          correctIndex: 3,
          explanation: '1 Terabyte (TB) is approximately 1 trillion bytes (1,024 GB), whereas 1 Byte is just 8 bits.',
          topic: 'Memory Hierarchy'
        },
        {
          text: `Complete the sentence: Fraudulent emails or fake websites designed to trick users into revealing passwords or bank details are called _____ attacks.`,
          options: ['Debugging', 'Phishing', 'Formatting', 'Compiling'],
          correctIndex: 1,
          explanation: 'Phishing is a cyber-attack that impersonates trusted organizations to steal sensitive credentials.',
          topic: 'Cybersecurity & Phishing'
        },
        {
          text: `In HTML (HyperText Markup Language), which tag is used to create the largest main heading on a webpage?`,
          options: ['<h6>', '<h1>', '<p>', '<br>'],
          correctIndex: 1,
          explanation: '<h1> defines the largest top-level heading in HTML, while <h6> defines the smallest heading and <p> defines a paragraph.',
          topic: 'HTML & Web Design'
        },
        {
          text: `Look at the microchip icon 💾. Compared to a traditional spinning Hard Disk Drive (HDD), why is a Solid State Drive (SSD) much faster?`,
          options: [
            'Because SSDs use paper tape',
            'Because SSDs use flash memory microchips with no moving mechanical parts',
            'Because SSDs spin at 100,000 RPM',
            'Because SSDs cannot store folders'
          ],
          correctIndex: 1,
          diagramEmoji: '💾',
          explanation: 'SSDs store data electronically on NAND flash chips with zero moving parts, enabling near-instant data access.',
          topic: 'Modern Storage Technology'
        },
        {
          text: `Convert the 4-bit binary number 1101₂ into its equivalent decimal (base-10) number:`,
          options: ['11', '13', '14', '15'],
          correctIndex: 1,
          explanation: '1101₂ = (1 × 8) + (1 × 4) + (0 × 2) + (1 × 1) = 8 + 4 + 0 + 1 = 13.',
          topic: 'Binary Number System'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `What will be the output of the following Python code snippet?\nx = 10\ny = 3\nprint(x // y, x % y)`,
        options: ['3.33  0', '3  1', '3  3', '1  3'],
        correctIndex: 1,
        explanation: 'In Python, "//" is floor (integer) division (10 // 3 = 3) and "%" is the modulo/remainder operator (10 % 3 = 1).',
        topic: 'Python Programming & Operators'
      },
      {
        text: `Fill in the blank: The network service that automatically translates human-friendly domain names (like www.google.com) into numeric IP addresses is called _____.`,
          options: ['USB', 'DNS (Domain Name System)', 'BIOS', 'PDF'],
        correctIndex: 1,
        explanation: 'DNS (Domain Name System) acts as the phonebook of the Internet, resolving domain names to IP addresses.',
        topic: 'Internet Architecture (DNS & IP)'
      },
      {
        text: `True or False: Open-Source Software (such as Linux or Python) allows users to inspect, modify, and distribute its source code under an open license.`,
        options: ['True', 'False', 'Source code is always hidden', 'Open-source cannot run on laptops'],
        correctIndex: 0,
        explanation: 'Open-source software makes its source code freely available for collaboration, study, and improvement.',
        topic: 'Open-Source vs Proprietary Software'
      },
      {
        text: `In computer science and data structures, which principle does a "Stack" (like the Undo history in an editor) follow?`,
        options: [
          'FIFO (First In, First Out)',
          'LIFO (Last In, First Out)',
          'Random deletion',
          'Alphabetical sorting only'
        ],
        correctIndex: 1,
        explanation: 'A Stack operates on LIFO (Last In, First Out)—the most recently added item is the first one popped off.',
        topic: 'Data Structures & Logic'
      },
      {
        text: `What is the role of a "Compiler" in programming languages like C++ or Java?`,
        options: [
          'It cleans dust from the keyboard',
          'It translates high-level human-readable source code into machine code (or bytecode) that the processor can execute',
          'It increases screen brightness',
          'It connects the mouse to Wi-Fi'
        ],
        correctIndex: 1,
        explanation: 'A compiler translates high-level programming code into low-level machine instructions and checks for syntax errors.',
        topic: 'Compilers and Interpreters'
      },
      {
        text: `Identify the INCORRECT statement about Artificial Intelligence (AI) and Machine Learning:`,
        options: [
          'Machine Learning algorithms learn patterns from training data',
          'Computer Vision enables machines to recognize objects in images and videos',
          'Natural Language Processing (NLP) helps computers understand human speech and text',
          'AI systems have biological human hearts and lungs'
        ],
        correctIndex: 3,
        explanation: 'AI is software running on silicon processors and servers; it does not possess biological organs.',
        topic: 'Artificial Intelligence Concepts'
      },
      {
        text: `Complete the sentence: A hardware or software security barrier that monitors and filters incoming and outgoing network traffic based on security rules is called a _____.`,
        options: ['Spreadsheet', 'Firewall', 'Plotter', 'Joystick'],
        correctIndex: 1,
        explanation: 'A firewall protects a computer or network by blocking unauthorized network access while permitting legitimate traffic.',
        topic: 'Network Firewalls'
      },
      {
        text: `Trace the loop: If "total = 0", and we add i to total for i = 1, 2, 3, 4, 5, what is the final value of "total"?`,
        options: ['10', '15', '20', '25'],
        correctIndex: 1,
        explanation: '1 + 2 + 3 + 4 + 5 = 15.',
        topic: 'Algorithmic Loop Tracing'
      },
      {
        text: `Look at the database icon 🗄️. In relational databases, what does "SQL" stand for?`,
        options: [
          'Simple Quick Line',
          'Structured Query Language',
          'System Quality Loader',
          'Serial Quantum Link'
        ],
        correctIndex: 1,
        diagramEmoji: '🗄️',
        explanation: 'SQL stands for Structured Query Language, the standard language for managing relational databases.',
        topic: 'Databases & SQL'
      },
      {
        text: `In Boolean Logic, if Input A = TRUE (1) and Input B = FALSE (0), what are the outputs of (A AND B) and (A OR B) respectively?`,
        options: [
          'AND = TRUE, OR = FALSE',
          'AND = FALSE (0), OR = TRUE (1)',
          'Both are TRUE',
          'Both are FALSE'
        ],
        correctIndex: 1,
        explanation: 'In Boolean algebra, AND requires both inputs to be True (1 AND 0 = 0), while OR requires at least one True input (1 OR 0 = 1).',
        topic: 'Boolean Logic Gates'
      }
    ];
  }

  // ============================================================================
  // 11. LOGICAL REASONING — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Logical Reasoning') {
    if (level === 1) {
      return [
        {
          text: `Find the next number in the pattern: 2, 4, 6, 8, 10, ___`,
          options: ['11', '12', '14', '16'],
          correctIndex: 1,
          explanation: 'This is the sequence of consecutive even numbers (+2 each step): 10 + 2 = 12.',
          topic: 'Number Series'
        },
        {
          text: `Fill in the blank: Find the odd one out among Apple, Mango, Banana, and Potato.`,
          options: ['Apple', 'Potato', 'Mango', 'Banana'],
          correctIndex: 1,
          explanation: 'Apple, Mango, and Banana are fruits, whereas Potato is an underground stem vegetable (tuber).',
          topic: 'Odd One Out (Classification)'
        },
        {
          text: `True or False: If today is Monday, the day immediately after tomorrow will be Wednesday.`,
          options: ['True', 'False', 'It will be Friday', 'It will be Sunday'],
          correctIndex: 0,
          explanation: 'If today is Monday, tomorrow is Tuesday, and the day after tomorrow is Wednesday.',
          topic: 'Calendar & Days Logic'
        },
        {
          text: `Analogy: Hand is to Glove as Foot is to _____`,
          options: ['Hat', 'Shoe (or Sock)', 'Shirt', 'Watch'],
          correctIndex: 1,
          explanation: 'A glove is worn on the hand; a shoe or sock is worn on the foot.',
          topic: 'Logical Analogies'
        },
        {
          text: `Complete the alphabet sequence: A, C, E, G, ___`,
          options: ['H', 'I', 'J', 'K'],
          correctIndex: 1,
          explanation: 'Skipping one letter each time: A, (B), C, (D), E, (F), G, (H), I.',
          topic: 'Alphabet Series'
        },
        {
          text: `Which item does NOT belong to the group of stationery items?`,
          options: ['Pencil', 'Eraser', 'Notebook', 'Refrigerator'],
          correctIndex: 3,
          explanation: 'Pencil, Eraser, and Notebook are school stationery items; a Refrigerator is a kitchen appliance.',
          topic: 'Logical Grouping'
        },
        {
          text: `Complete the sentence: If Rohan is taller than Kabir, and Kabir is taller than Dev, then the tallest boy among the three is _____.`,
          options: ['Dev', 'Rohan', 'Kabir', 'All are equal'],
          correctIndex: 1,
          explanation: 'Rohan > Kabir > Dev, so Rohan is the tallest.',
          topic: 'Comparison & Ranking'
        },
        {
          text: `In a secret code, if A = 1, B = 2, and C = 3, what is the sum of the letters in the word "CAB"?`,
          options: ['5', '6', '7', '8'],
          correctIndex: 1,
          explanation: 'C (3) + A (1) + B (2) = 6.',
          topic: 'Basic Coding-Decoding'
        },
        {
          text: `Look at the shapes pattern: 🔺 🔵 🔺 🔵 🔺 ___. Which shape comes next?`,
          options: ['🔺 (Triangle)', '🔵 (Blue Circle)', '🟩 (Green Square)', '⭐ (Star)'],
          correctIndex: 1,
          diagramEmoji: '🔵',
          explanation: 'The alternating pattern is Triangle, Circle, Triangle, Circle, Triangle -> Circle (🔵).',
          topic: 'Visual Pattern Completion'
        },
        {
          text: `A farmer has 8 sheep on a field. All but 5 sheep run into the barn. How many sheep are still left on the field with the farmer?`,
          options: ['3 sheep', '5 sheep', '8 sheep', '0 sheep'],
          correctIndex: 1,
          explanation: '"All but 5" means 5 sheep did NOT run away and are still there!',
          topic: 'Brain Teasers'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `Find the missing number in the series: 5, 11, 17, 23, 29, ___`,
          options: ['33', '35', '36', '37'],
          correctIndex: 1,
          explanation: 'A constant difference of +6 is added each time: 29 + 6 = 35.',
          topic: 'Arithmetic Progression Series'
        },
        {
          text: `Fill in the blank: If "CAT" is coded as "DBU" (shifting each letter forward by +1), then "DOG" is coded as _____.`,
          options: ['CPF', 'EPH', 'ENH', 'FQI'],
          correctIndex: 1,
          explanation: 'D + 1 = E, O + 1 = P, G + 1 = H -> "EPH".',
          topic: 'Letter Shift Coding'
        },
        {
          text: `True or False: If Ananya is facing North and turns 90° clockwise (to her right), she will now be facing East.`,
          options: ['True', 'False', 'She will face West', 'She will face South'],
          correctIndex: 0,
          explanation: 'On a standard compass, 90° clockwise (right) from North is East.',
          topic: 'Direction Sense Test'
        },
        {
          text: `In a single row of students, Vivaan is 8th from the left end and 12th from the right end. How many students are standing in the row in total?`,
          options: ['20 students', '19 students', '21 students', '18 students'],
          correctIndex: 1,
          explanation: 'Total = (Left position + Right position) - 1 = (8 + 12) - 1 = 19 students (subtract 1 because Vivaan is counted twice).',
          topic: 'Order and Ranking'
        },
        {
          text: `Choose the odd number out from the set: 16, 25, 36, 42, 49`,
          options: ['16', '25', '42', '49'],
          correctIndex: 2,
          explanation: '16 (4²), 25 (5²), 36 (6²), and 49 (7²) are perfect squares; 42 is NOT a perfect square.',
          topic: 'Number Classification'
        },
        {
          text: `Identify the INCORRECT letter-pair in the alphabetical opposite/step pattern:`,
          options: ['AB - CD', 'EF - GH', 'IJ - KL', 'MN - PQ'],
          correctIndex: 3,
          explanation: 'Following consecutive pairs (MN - OP), "MN - PQ" skips "OP".',
          topic: 'Alphabetical Pairs'
        },
        {
          text: `Complete the blood relation: The brother of your mother is your _____.`,
          options: ['Paternal Uncle', 'Maternal Uncle (Mama)', 'Grandfather', 'Cousin'],
          correctIndex: 1,
          explanation: 'Your mother\'s brother is your Maternal Uncle.',
          topic: 'Blood Relations'
        },
        {
          text: `If "+" means "×", and "-" means "+", then what is the value of: 6 + 4 - 5?`,
          options: ['15', '29', '19', '24'],
          correctIndex: 1,
          explanation: 'Replacing the symbols: 6 × 4 + 5 = 24 + 5 = 29.',
          topic: 'Mathematical Symbol Substitution'
        },
        {
          text: `Look at the mirror icon 🪞. Which of these capital English letters looks IDENTICAL in a vertical mirror reflection (Left-Right symmetry)?`,
          options: ['R', 'A', 'P', 'G'],
          correctIndex: 1,
          diagramEmoji: '🪞',
          explanation: 'The capital letter "A" has vertical line symmetry, so its left-right mirror image looks identical.',
          topic: 'Mirror Images & Symmetry'
        },
        {
          text: `Arrange the words in a meaningful natural sequence: 1. Fruit  2. Seed  3. Plant  4. Flower  5. Tree`,
          options: [
            '2 -> 3 -> 5 -> 4 -> 1 (Seed -> Plant -> Tree -> Flower -> Fruit)',
            '1 -> 2 -> 3 -> 4 -> 5',
            '5 -> 4 -> 3 -> 2 -> 1',
            '4 -> 1 -> 2 -> 5 -> 3'
          ],
          correctIndex: 0,
          explanation: 'A Seed (2) sprouts into a young Plant (3), grows into a Tree (5), blooms a Flower (4), and bears Fruit (1).',
          topic: 'Logical Sequence of Words'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `Find the missing number in the Fibonacci-style pattern: 2, 3, 5, 8, 13, 21, ___`,
          options: ['29', '34', '32', '35'],
          correctIndex: 1,
          explanation: 'Each term is the sum of the two preceding terms: 13 + 21 = 34.',
          topic: 'Fibonacci & Recursive Series'
        },
        {
          text: `Fill in the blank: Arjun walks 3 km North, then turns right and walks 4 km East. His shortest straight-line distance from the starting point is _____ km.`,
          options: ['7 km', '5 km', '6 km', '12 km'],
          correctIndex: 1,
          explanation: 'The path forms a right-angled triangle with legs 3 km and 4 km. By Pythagoras Theorem, √(3² + 4²) = √(9 + 16) = 5 km.',
          topic: 'Direction & Distance (Pythagoras)'
        },
        {
          text: `True or False: In a Venn Diagram representing "Birds", "Parrots", and "Living Beings", the circle for "Parrots" lies completely inside "Birds", which lies completely inside "Living Beings".`,
          options: ['True', 'False', 'Parrots are outside Birds', 'None overlap'],
          correctIndex: 0,
          explanation: 'Every parrot is a bird, and every bird is a living being, forming three concentric circles.',
          topic: 'Venn Diagrams'
        },
        {
          text: `In a certain code language, "MIND" is written as "DNIM" and "GAME" is written as "EMAG". How is "STAR" written in that code?`,
          options: ['TSRA', 'RATS', 'ARTS', 'SRAT'],
          correctIndex: 1,
          explanation: 'The letters of the word are written in exact reverse order: S-T-A-R becomes R-A-T-S.',
          topic: 'Reversal Coding'
        },
        {
          text: `Pointing to a photograph, Neha said, "He is the only son of my grandfather." (Assuming Neha has no paternal aunts/uncles). How is the man in the photograph related to Neha?`,
          options: ['Brother', 'Father', 'Cousin', 'Nephew'],
          correctIndex: 1,
          explanation: 'The only son of Neha\'s grandfather is Neha\'s father.',
          topic: 'Blood Relation Puzzles'
        },
        {
          text: `Which number is the WRONG term in the series: 2, 6, 12, 20, 30, 44?`,
          options: ['12', '20', '30', '44'],
          correctIndex: 3,
          explanation: 'The differences are +4, +6, +8, +10, +12. So after 30, the next term should be 30 + 12 = 42, making 44 the wrong term.',
          topic: 'Spotting Wrong Term in Series'
        },
        {
          text: `Complete the analogy: Doctor : Stethoscope :: Astronomer : _____`,
          options: ['Microscope', 'Telescope', 'Periscope', 'Kaleidoscope'],
          correctIndex: 1,
          explanation: 'A doctor uses a stethoscope; an astronomer uses a telescope to observe celestial bodies.',
          topic: 'Instrument Analogies'
        },
        {
          text: `At 6:00 PM on an analog clock, what is the exact angle between the hour hand and the minute hand?`,
          options: ['90°', '180°', '120°', '0°'],
          correctIndex: 1,
          explanation: 'At 6:00, the minute hand points to 12 and the hour hand points to 6, forming a straight line of 180°.',
          topic: 'Clock Reasoning'
        },
        {
          text: `Look at the dice icon 🎲. On a standard six-sided die where opposite faces always add up to 7, which number is on the face directly opposite to 2?`,
          options: ['4', '5', '6', '3'],
          correctIndex: 1,
          diagramEmoji: '🎲',
          explanation: 'On a standard die, opposite faces sum to 7: 7 - 2 = 5.',
          topic: 'Cubes and Dice Logic'
        },
        {
          text: `If 1st January of a non-leap year is a Tuesday, what day of the week will 8th January of the same year be?`,
          options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          correctIndex: 1,
          explanation: 'Days of the week repeat every 7 days: 1 + 7 = 8th January will also be a Tuesday.',
          topic: 'Calendar Reasoning'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `Find the next term in the alphanumeric series: A1, C4, E9, G16, I25, ___`,
        options: ['J30', 'K36', 'L36', 'K49'],
        correctIndex: 1,
        explanation: 'Letters skip +2 (A, C, E, G, I -> K) and numbers are consecutive squares (1², 2², 3², 4², 5² -> 6² = 36). Thus, K36.',
        topic: 'Alphanumeric Series'
      },
      {
        text: `Fill in the blank: A solid wooden cube is painted red on all 6 faces and then cut into 27 smaller equal cubes (3×3×3). How many of the small cubes have ZERO faces painted?`,
        options: ['0 cubes', '1 cube (the innermost center cube)', '6 cubes', '8 cubes'],
        correctIndex: 1,
        explanation: 'For an n×n×n painted cube, the number of unpainted inner cubes is (n - 2)³. For n = 3, (3 - 2)³ = 1³ = 1.',
        topic: 'Painted Cube Cutting Logic'
      },
      {
        text: `True or False: Deductive Syllogism — Statements: "All mangoes are fruits. All fruits are nutritious." Conclusion: "Therefore, all mangoes are nutritious."`,
        options: ['True (Logically Valid)', 'False (Invalid)', 'Only some mangoes', 'Mangoes are vegetables'],
        correctIndex: 0,
        explanation: 'Since Mangoes ⊂ Fruits and Fruits ⊂ Nutritious, it logically follows that All Mangoes are Nutritious.',
        topic: 'Syllogisms & Deductive Logic'
      },
      {
        text: `In a class of 50 students, 30 play Cricket, 25 play Football, and 10 play BOTH Cricket and Football. How many students play at least one of these two sports?`,
        options: ['55', '45', '35', '40'],
        correctIndex: 1,
        explanation: 'By Inclusion-Exclusion (n(A ∪ B) = n(A) + n(B) - n(A ∩ B)): 30 + 25 - 10 = 45 students.',
        topic: 'Set Theory & Venn Word Problems'
      },
      {
        text: `Five friends (P, Q, R, S, T) are sitting in a row facing North. R is at the exact center. P is to the immediate left of R, and Q is at the extreme right end. If T is between R and Q, who is at the extreme left end?`,
        options: ['P', 'S', 'T', 'R'],
        correctIndex: 1,
        explanation: 'With R in position 3 (center), P at 2 (immediate left of R), T at 4 (between R and Q), and Q at 5 (right end), position 1 (extreme left) must be S (Order: S, P, R, T, Q).',
        topic: 'Seating Arrangement'
      },
      {
        text: `Identify the odd pair that breaks the numerical relationship followed by the other three pairs:`,
        options: [
          '4 : 64',
          '5 : 125',
          '6 : 216',
          '7 : 300'
        ],
        correctIndex: 3,
        explanation: 'In each pair, the second number is the cube of the first (4³=64, 5³=125, 6³=216), whereas 7³ = 343, not 300.',
        topic: 'Number Pair Classification'
      },
      {
        text: `Complete the coding puzzle: If "EARTH" is coded as 5-1-18-20-8 (using alphabetical positions A=1..Z=26), what is the code for "MARS"?`,
        options: ['12-1-17-18', '13-1-18-19', '14-2-18-20', '13-1-19-18'],
        correctIndex: 1,
        explanation: 'M = 13th letter, A = 1st, R = 18th, S = 19th -> 13-1-18-19.',
        topic: 'Alphanumeric Positional Coding'
      },
      {
        text: `In a knockout badminton tournament with 16 single players (where the loser of each match is eliminated and there are no ties), how many total matches must be played to determine the 1 champion?`,
        options: ['8 matches', '15 matches', '16 matches', '32 matches'],
        correctIndex: 1,
        explanation: 'Every match eliminates exactly 1 player. To eliminate 15 of the 16 players and leave 1 champion, 16 - 1 = 15 matches are required (8 + 4 + 2 + 1).',
        topic: 'Tournament Combinatorics'
      },
      {
        text: `Look at the balance scale icon ⚖️. You have 9 identical-looking gold coins, but 1 coin is slightly lighter than the others. Using a two-pan balance scale, what is the MINIMUM number of weighings needed to guarantee finding the lighter coin?`,
        options: ['1 weighing', '2 weighings', '4 weighings', '8 weighings'],
        correctIndex: 1,
        diagramEmoji: '⚖️',
        explanation: 'Divide the 9 coins into three groups of 3 (3, 3, 3). Weighing 1 identifies which group of 3 has the lighter coin; Weighing 2 compares two coins from that group to pinpoint the exact coin!',
        topic: 'Logical Weighing Puzzles'
      },
      {
        text: `A lily pad in a pond doubles in size every day. If it completely covers the entire pond on Day 20, on which day did it cover exactly HALF of the pond?`,
        options: ['Day 10', 'Day 19', 'Day 15', 'Day 18'],
        correctIndex: 1,
        explanation: 'Since the lily pad doubles every single day, it must have been half the size of the pond just one day before Day 20—which is Day 19!',
        topic: 'Lateral & Analytical Reasoning'
      }
    ];
  }

  // ============================================================================
  // 12. ENVIRONMENTAL STUDIES — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Environmental Studies') {
    if (level === 1) {
      return [
        {
          text: `On which date is "World Environment Day" celebrated globally every year?`,
          options: ['1st January', '5th June', '25th December', '15th August'],
          correctIndex: 1,
          explanation: 'World Environment Day is observed every year on 5th June to encourage awareness and action for environmental protection.',
          topic: 'Environmental Awareness'
        },
        {
          text: `Fill in the blank: In the famous environmental motto "The 3 Rs", the three Rs stand for Reduce, Reuse, and _____.`,
          options: ['Remove', 'Recycle', 'Repeat', 'Refuse'],
          correctIndex: 1,
          explanation: 'Reduce, Reuse, and Recycle are the three core principles of sustainable waste management.',
          topic: 'The 3 Rs of Waste Management'
        },
        {
          text: `True or False: Turning off lights and fans when leaving an empty room helps conserve electricity and reduce carbon emissions.`,
          options: ['True', 'False', 'It wastes electricity', 'Lights should stay on 24/7'],
          correctIndex: 0,
          explanation: 'Switching off unused electrical appliances saves energy and reduces fossil fuel consumption at power plants.',
          topic: 'Energy Conservation'
        },
        {
          text: `Which colored dustbin is standardly used in Indian cities for collecting "Wet / Biodegradable Kitchen Waste" (like fruit and vegetable peels)?`,
          options: ['Red Dustbin', 'Green Dustbin', 'Blue Dustbin', 'Black Dustbin'],
          correctIndex: 1,
          explanation: 'Under Swachh Bharat waste segregation rules, the Green bin is for wet biodegradable waste and the Blue bin is for dry recyclable waste.',
          topic: 'Waste Segregation'
        },
        {
          text: `Which of the following is a clean, RENEWABLE source of energy that does not cause air pollution?`,
          options: ['Burning Coal', 'Solar Energy (from the Sun)', 'Diesel Generator', 'Kerosene'],
          correctIndex: 1,
          explanation: 'Solar energy, wind energy, and hydro energy are clean, renewable sources that do not emit smoke or greenhouse gases.',
          topic: 'Renewable Energy'
        },
        {
          text: `Identify the item that is NON-BIODEGRADABLE (does not rot naturally in soil for hundreds of years):`,
          options: ['Banana peel', 'Single-use plastic bag', 'Fallen dry leaves', 'Cotton cloth'],
          correctIndex: 1,
          explanation: 'Single-use plastics are synthetic polymers that persist in the environment for centuries.',
          topic: 'Biodegradable vs Non-Biodegradable'
        },
        {
          text: `Complete the sentence: Trees are called the "Green Lungs of the Earth" because they absorb carbon dioxide and release life-giving _____.`,
          options: ['Smoke', 'Oxygen', 'Methane', 'Dust'],
          correctIndex: 1,
          explanation: 'During photosynthesis, trees absorb CO₂ and release oxygen into the atmosphere.',
          topic: 'Importance of Trees'
        },
        {
          text: `When going to the market to buy vegetables and groceries, what should you carry from home to protect the environment?`,
          options: [
            'Disposable thin plastic bags',
            'A reusable cloth or jute bag',
            'Polystyrene foam boxes',
            'Nothing'
          ],
          correctIndex: 1,
          explanation: 'Carrying reusable cloth or jute bags eliminates single-use plastic pollution.',
          topic: 'Eco-Friendly Habits'
        },
        {
          text: `Look at the water droplet icon 💧. What is the practice of collecting and storing rainwater from rooftops for future use and groundwater recharge called?`,
          options: ['Water Flooding', 'Rainwater Harvesting', 'Cloud Seeding', 'Deforestation'],
          correctIndex: 1,
          diagramEmoji: '💧',
          explanation: 'Rainwater Harvesting captures roof runoff in tanks or percolation pits, conserving precious freshwater.',
          topic: 'Water Conservation'
        },
        {
          text: `In a simple grassland food chain: Grass -> Deer -> Tiger, what role does the Grass play?`,
          options: ['Carnivore', 'Producer (Autotroph)', 'Secondary Consumer', 'Decomposer'],
          correctIndex: 1,
          explanation: 'Green plants (Grass) synthesize their own food using sunlight and form the base of the food chain as Producers.',
          topic: 'Food Chains & Ecosystems'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `What is the process of converting organic kitchen waste and dry leaves into nutrient-rich natural fertilizer using earthworms called?`,
          options: ['Incineration', 'Vermicomposting', 'Pasteurization', 'Chlorination'],
          correctIndex: 1,
          explanation: 'Vermicomposting uses earthworms ("farmer\'s friends") to turn organic waste into rich bio-fertilizer.',
          topic: 'Composting & Soil Health'
        },
        {
          text: `Fill in the blank: Large-scale planting of trees in barren areas to restore forest cover is called _____.`,
          options: ['Deforestation', 'Afforestation (and Reforestation)', 'Soil Erosion', 'Overgrazing'],
          correctIndex: 1,
          explanation: 'Afforestation is the planting of trees to create forests, preventing soil erosion and purifying air.',
          topic: 'Forest Conservation'
        },
        {
          text: `True or False: Honeybees, butterflies, and birds play an essential ecological role in pollinating flowers so that plants can produce fruits and seeds.`,
          options: ['True', 'False', 'Bees destroy flowers', 'Plants never need pollination'],
          correctIndex: 0,
          explanation: 'Pollinators transfer pollen between flowers, enabling fertilization and global food crop production.',
          topic: 'Pollination & Biodiversity'
        },
        {
          text: `Match the environmental movement: Which famous 1973 movement in Uttarakhand saw villagers (especially women) hug trees to prevent them from being cut down?`,
          options: ['Silent Valley Movement', 'Chipko Movement', 'Narmada Bachao Andolan', 'Appiko Movement'],
          correctIndex: 1,
          explanation: 'In the Chipko Movement ("chipko" = to hug/embrace), villagers led by Sunderlal Bahuguna and Gaura Devi embraced trees to save forests.',
          topic: 'Environmental Movements in India'
        },
        {
          text: `Which gas is the primary contributor to the enhanced Greenhouse Effect and Global Warming when fossil fuels (coal, petrol, diesel) are burned?`,
          options: ['Oxygen (O₂)', 'Carbon Dioxide (CO₂)', 'Argon (Ar)', 'Helium (He)'],
          correctIndex: 1,
          explanation: 'Excess Carbon Dioxide (CO₂) traps outgoing infrared heat in the atmosphere, driving global warming.',
          topic: 'Greenhouse Effect & Climate Change'
        },
        {
          text: `Identify the activity that causes WATER pollution:`,
          options: [
            'Treating sewage before releasing it',
            'Discharging untreated factory chemicals and plastic waste into rivers',
            'Using drip irrigation in farms',
            'Planting trees along riverbanks'
          ],
          correctIndex: 1,
          explanation: 'Dumping untreated industrial effluents and plastics contaminates rivers and harms aquatic life.',
          topic: 'Types of Pollution'
        },
        {
          text: `Complete the sentence: Organisms like fungi and bacteria that break down dead plants and animals and return nutrients to the soil are called _____.`,
          options: ['Herbivores', 'Decomposers (Saprotrophs)', 'Predators', 'Apex consumers'],
          correctIndex: 1,
          explanation: 'Decomposers are nature\'s recyclers, breaking down dead organic matter into humus and minerals.',
          topic: 'Nutrient Cycling'
        },
        {
          text: `Which irrigation method delivers water drop-by-drop directly to the roots of plants, saving up to 60% of water in dry regions?`,
          options: ['Flood irrigation', 'Drip irrigation', 'Canal overflow', 'Bucket dumping'],
          correctIndex: 1,
          explanation: 'Drip irrigation minimizes evaporation and runoff by delivering water directly to the root zone.',
          topic: 'Sustainable Agriculture'
        },
        {
          text: `Look at the tiger icon 🐅. In which year did the Government of India launch "Project Tiger" to protect the endangered Bengal Tiger and its habitats?`,
          options: ['1947', '1973', '2005', '1999'],
          correctIndex: 1,
          diagramEmoji: '🐅',
          explanation: 'Project Tiger was launched in April 1973 to conserve India\'s national animal and its forest ecosystems.',
          topic: 'Wildlife Conservation Projects'
        },
        {
          text: `Why is loud honking near hospitals and schools restricted by "No Horn / Silence Zone" signs?`,
          options: [
            'To save car battery',
            'To prevent Noise Pollution that disturbs patients\' recovery and students\' concentration',
            'Because roads are closed',
            'To make cars drive faster'
          ],
          correctIndex: 1,
          explanation: 'Excessive noise (measured in decibels, dB) causes stress, hearing damage, and sleep disturbance.',
          topic: 'Noise Pollution Control'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `What does "AQI" stand for when weather reports measure the cleanliness or pollution level of the air we breathe?`,
          options: [
            'Aquatic Quality Indicator',
            'Air Quality Index',
            'Atmospheric Quantity Instrument',
            'Acid Quota Index'
          ],
          correctIndex: 1,
          explanation: 'Air Quality Index (AQI) reports daily air pollution levels (such as PM2.5 and PM10) and associated health impacts.',
          topic: 'Air Quality Monitoring'
        },
        {
          text: `Fill in the blank: Acid rain is caused mainly when sulfur dioxide (SO₂) and _____ oxides released by factories and vehicles dissolve in rainwater.`,
          options: ['Calcium', 'Nitrogen (NOₓ)', 'Sodium', 'Iron'],
          correctIndex: 1,
          explanation: 'Sulfur dioxide (SO₂) and Nitrogen oxides (NOₓ) react with water vapor to form sulfuric and nitric acids in acid rain.',
          topic: 'Acid Rain & Monument Protection'
        },
        {
          text: `True or False: "Earth Day" is observed worldwide every year on 22nd April to demonstrate support for environmental protection.`,
          options: ['True', 'False', 'It is on 1st May', 'It is only once every 10 years'],
          correctIndex: 0,
          explanation: 'World Earth Day is celebrated annually on 22nd April across more than 190 countries.',
          topic: 'Global Environmental Days'
        },
        {
          text: `Match the conservation category: Species of plants and animals that are found exclusively in one specific geographical region and nowhere else in the world are called:`,
          options: ['Invasive species', 'Endemic species', 'Extinct species', 'Domestic species'],
          correctIndex: 1,
          explanation: 'Endemic species (like the Lion-tailed Macaque in the Western Ghats) are native and restricted to a single defined region.',
          topic: 'Endemic & Endangered Species'
        },
        {
          text: `What is "E-Waste" (Electronic Waste) and why must it be recycled at authorized centers?`,
          options: [
            'Emails deleted from an inbox',
            'Discarded electronic devices (old phones, batteries, circuit boards) containing hazardous heavy metals like lead and mercury as well as recoverable precious metals',
            'Paper notebooks',
            'Vegetable peels'
          ],
          correctIndex: 1,
          explanation: 'E-waste contains toxic substances (lead, cadmium, mercury) that leach into soil/groundwater if dumped, so it requires specialized recycling.',
          topic: 'E-Waste Management'
        },
        {
          text: `Identify the INCORRECT statement about wetlands and mangroves:`,
          options: [
            'Wetlands act as natural sponges that absorb floodwaters and recharge groundwater',
            'Coastal mangrove forests act as a natural bio-shield against cyclones and tsunamis',
            'World Wetlands Day is observed on 2nd February (marking the Ramsar Convention)',
            'Draining and filling all wetlands with concrete improves biodiversity'
          ],
          correctIndex: 3,
          explanation: 'Destroying wetlands causes urban flooding, loss of migratory bird habitats, and groundwater depletion.',
          topic: 'Wetland Ecosystems'
        },
        {
          text: `Complete the sentence: Compressed Natural Gas (CNG) is preferred over diesel in public transport buses because it burns much more cleanly and consists primarily of _____.`,
          options: ['Lead', 'Methane (CH₄)', 'Coal tar', 'Sulfur'],
          correctIndex: 1,
          explanation: 'CNG is mainly methane (CH₄) and produces significantly lower particulate matter and smoke emissions than diesel.',
          topic: 'Cleaner Fuels & Transport'
        },
        {
          text: `What happens during "Eutrophication" (Algal Bloom) in a freshwater lake?`,
          options: [
            'The lake freezes into clean ice',
            'Excessive chemical fertilizers and sewage runoff cause dense algal growth, which depletes dissolved oxygen and suffocates fish',
            'Fish multiply rapidly',
            'The water becomes distilled'
          ],
          correctIndex: 1,
          explanation: 'Nutrient runoff (nitrates/phosphates) triggers algal blooms that block sunlight and consume dissolved oxygen when bacteria decompose them.',
          topic: 'Water Ecology & Eutrophication'
        },
        {
          text: `Look at the recycling symbol ♻️. Which international organization publishes the "Red List of Threatened Species" to assess the conservation status of species worldwide?`,
          options: [
            'FIFA',
            'IUCN (International Union for Conservation of Nature)',
            'WTO',
            'IMF'
          ],
          correctIndex: 1,
          diagramEmoji: '♻️',
          explanation: 'The IUCN Red List categorizes species into Extinct, Critically Endangered, Endangered, Vulnerable, and Least Concern.',
          topic: 'IUCN Red List & Conservation'
        },
        {
          text: `According to the 10% Law of Energy Transfer in an ecological pyramid (Lindeman's Law), if Producer plants capture 10,000 Joules of solar energy, how much energy is transferred to Primary Consumers (Herbivores)?`,
          options: ['9,000 Joules', '1,000 Joules (10%)', '100 Joules', '10,000 Joules'],
          correctIndex: 1,
          explanation: 'Only about 10% of energy is passed from one trophic level to the next (10% of 10,000 J = 1,000 J); 90% is lost as metabolic heat.',
          topic: 'Energy Flow in Ecosystems'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `Which landmark international treaty signed in 1987 successfully phased out Ozone-Depleting Substances like Chlorofluorocarbons (CFCs) to heal the Antarctic Ozone Hole?`,
        options: ['The Kyoto Protocol', 'The Montreal Protocol', 'The Versailles Treaty', 'The Geneva Convention'],
        correctIndex: 1,
        explanation: 'The Montreal Protocol (1987) is universally ratified and successfully phased out CFCs to protect the stratospheric ozone layer.',
        topic: 'Global Environmental Treaties'
      },
      {
        text: `Fill in the blank: The progressive accumulation and increasing concentration of non-biodegradable toxic chemicals (such as DDT or Mercury) at higher levels of a food chain is called _____.`,
        options: ['Photosynthesis', 'Biomagnification (Biological Magnification)', 'Transpiration', 'Nitrification'],
        correctIndex: 1,
        explanation: 'Biomagnification causes apex predators (like fish-eating birds or humans) to accumulate the highest concentration of persistent toxins.',
        topic: 'Biomagnification'
      },
      {
        text: `True or False: "In-situ conservation" means protecting endangered plants and animals within their natural habitats (such as National Parks, Wildlife Sanctuaries, and Biosphere Reserves).`,
        options: ['True', 'False', 'It means keeping them in a laboratory jar', 'It means cutting forests'],
        correctIndex: 0,
        explanation: 'In-situ conservation protects species in their natural ecosystems, whereas Ex-situ conservation takes place outside (e.g., seed banks, botanical gardens).',
        topic: 'In-situ vs Ex-situ Conservation'
      },
      {
        text: `What is the "Carbon Footprint" of an individual, product, or organization?`,
        options: [
          'A shoe print made with charcoal on paper',
          'The total amount of greenhouse gases (expressed as CO₂ equivalent) emitted directly and indirectly by human activities',
          'The weight of coal in a mine',
          'The size of a forest leaf'
        ],
        correctIndex: 1,
        explanation: 'Reducing our carbon footprint (through energy efficiency, cycling, solar power, and tree planting) helps mitigate climate change.',
        topic: 'Carbon Footprint & Sustainability'
      },
      {
        text: `Which bacterial process in the Nitrogen Cycle converts atmospheric nitrogen gas (N₂) into ammonia and nitrates that plant roots can absorb (often found in root nodules of leguminous plants like peas and pulses)?`,
        options: [
          'Denitrification',
          'Biological Nitrogen Fixation (by Rhizobium bacteria)',
          'Combustion',
          'Fermentation'
        ],
        correctIndex: 1,
        explanation: 'Symbiotic Rhizobium bacteria in the root nodules of legumes fix atmospheric nitrogen into plant-usable nitrogen compounds.',
        topic: 'Biogeochemical Cycles (Nitrogen Cycle)'
      },
      {
        text: `Identify the INCORRECT statement regarding India's Renewable Energy & Climate initiatives:`,
        options: [
          'India co-founded the International Solar Alliance (ISA), headquartered in Gurugram',
          'Mission LiFE (Lifestyle for Environment) promotes mindful and deliberate utilization of resources instead of wasteful consumption',
          'Bhadla Solar Park in Rajasthan is among the largest solar power parks in the world',
          'Solar panels require burning heavy coal inside the glass panel to generate electricity'
        ],
        correctIndex: 3,
        explanation: 'Photovoltaic (PV) solar cells convert sunlight directly into electricity using semiconductor silicon without burning any fuel.',
        topic: 'Clean Energy Transitions'
      },
      {
        text: `Complete the sentence: Symbiotic organisms formed by a mutually beneficial partnership between an alga (which makes food) and a fungus (which provides shelter/water), which also serve as natural bio-indicators of sulfur dioxide air pollution, are _____.`,
        options: ['Mosquitoes', 'Lichens', 'Cacti', 'Earthworms'],
        correctIndex: 1,
        explanation: 'Lichens are sensitive to sulfur dioxide (SO₂) and do not grow in polluted industrial air, making them reliable bio-indicators.',
        topic: 'Bio-Indicators & Symbiosis'
      },
      {
        text: `Why is the melting of polar ice caps and glaciers a double threat to global climate stability (Ice-Albedo Feedback)?`,
        options: [
          'Because ice reflects sunlight (high albedo); when white ice melts into dark ocean water, the ocean absorbs more heat, accelerating further warming and sea-level rise',
          'Because melting ice lowers sea levels',
          'Because glaciers absorb carbon dioxide and release smoke',
          'Because oceans freeze when ice melts'
        ],
        correctIndex: 0,
        explanation: 'Snow and ice have high albedo (reflectivity). Loss of ice exposes darker water/land that absorbs more solar radiation, amplifying warming.',
        topic: 'Climate Feedback Loops'
      },
      {
        text: `Look at the seedling icon 🌱. How many Sustainable Development Goals (SDGs) were adopted by all United Nations Member States in 2015 as a universal blueprint for peace and prosperity by 2030?`,
        options: ['5 Goals', '17 Sustainable Development Goals (SDGs)', '50 Goals', '3 Goals'],
        correctIndex: 1,
        diagramEmoji: '🌱',
        explanation: 'The UN 2030 Agenda comprises 17 Sustainable Development Goals (including Quality Education, Clean Water, Climate Action, and Life on Land).',
        topic: 'UN 17 Sustainable Development Goals'
      },
      {
        text: `Which Indian Biosphere Reserve located in the Nilgiri Hills (spanning Tamil Nadu, Kerala, and Karnataka) was the FIRST Biosphere Reserve established in India in 1986?`,
        options: [
          'Nanda Devi Biosphere Reserve',
          'Nilgiri Biosphere Reserve',
          'Gulf of Mannar Biosphere Reserve',
          'Pachmarhi Biosphere Reserve'
        ],
        correctIndex: 1,
        explanation: 'The Nilgiri Biosphere Reserve in the Western Ghats was established in 1986 as India\'s first Biosphere Reserve under UNESCO\'s MAB programme.',
        topic: 'Biosphere Reserves of India'
      }
    ];
  }

  // ============================================================================
  // 13. MORAL EDUCATION — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Moral Education') {
    if (level === 1) {
      return [
        {
          text: `When someone helps you or gives you something, what is the polite magic word you should say?`,
          options: ['Go away', 'Thank You', 'Hurry up', 'Give me more'],
          correctIndex: 1,
          explanation: 'Saying "Thank You" expresses gratitude and appreciation for others\' kindness.',
          topic: 'Good Manners & Courtesy'
        },
        {
          text: `Fill in the blank: The famous moral proverb states that "_____ is the best policy."`,
          options: ['Anger', 'Honesty', 'Laziness', 'Greed'],
          correctIndex: 1,
          explanation: '"Honesty is the best policy" teaches us that truthfulness builds lasting trust and respect.',
          topic: 'Honesty and Truthfulness'
        },
        {
          text: `True or False: If you accidentally bump into a classmate or make a mistake, you should sincerely say "I am sorry" (Excuse me).`,
          options: ['True', 'False', 'Blame someone else', 'Run away'],
          correctIndex: 0,
          explanation: 'Apologizing sincerely when we make a mistake shows humility, responsibility, and respect.',
          topic: 'Accountability & Politeness'
        },
        {
          text: `If you find a lost pencil box or wallet on the school playground, what is the right thing to do?`,
          options: [
            'Hide it in your bag',
            'Hand it over to the class teacher or school office so it can be returned to its owner',
            'Throw it in the bin',
            'Sell it to a friend'
          ],
          correctIndex: 1,
          explanation: 'Returning lost items to their rightful owner is a hallmark of integrity and honesty.',
          topic: 'Integrity in Daily Life'
        },
        {
          text: `How should we treat elderly grandparents and senior citizens at home and in public?`,
          options: [
            'Ignore them when they speak',
            'Treat them with love, patience, respect, and offer them a seat or helping hand',
            'Speak rudely to them',
            'Hide their spectacles'
          ],
          correctIndex: 1,
          explanation: 'Respecting and caring for elders honors their wisdom and strengthens family bonds.',
          topic: 'Respect for Elders'
        },
        {
          text: `Identify the habit that is NOT a good classroom value:`,
          options: [
            'Listening attentively when the teacher or a classmate is speaking',
            'Sharing crayons and helping a new student feel welcome',
            'Mocking or bullying a classmate who made an error',
            'Keeping the classroom desk neat and clean'
          ],
          correctIndex: 2,
          explanation: 'Bullying or mocking others hurts their feelings; true champions encourage and uplift classmates.',
          topic: 'Kindness vs Bullying'
        },
        {
          text: `Complete the sentence: Waiting patiently for your turn in the school bus queue shows _____ and fairness.`,
          options: ['selfishness', 'self-discipline', 'carelessness', 'fear'],
          correctIndex: 1,
          explanation: 'Following queues patiently demonstrates self-discipline and respect for everyone\'s time and safety.',
          topic: 'Self-Discipline'
        },
        {
          text: `You see an injured bird or a thirsty stray puppy near your porch in summer. What is the compassionate action to take?`,
          options: [
            'Throw stones at it',
            'Place a bowl of clean water in the shade and inform an adult or animal care helper',
            'Scare it away with loud noises',
            'Lock it in a dark box'
          ],
          correctIndex: 1,
          explanation: 'Compassion toward animals (Jeev Daya) is a noble human virtue.',
          topic: 'Compassion for Living Beings'
        },
        {
          text: `Look at the handshake icon 🤝. What is the best way to resolve a small disagreement with your friend during a game?`,
          options: [
            'Shout and stop talking forever',
            'Listen calmly to each other, compromise fairly, and shake hands',
            'Break the game board',
            'Spread rumors'
          ],
          correctIndex: 1,
          diagramEmoji: '🤝',
          explanation: 'Calm communication, fairness, and forgiveness resolve conflicts peacefully.',
          topic: 'Friendship & Conflict Resolution'
        },
        {
          text: `In the classic moral story of "The Hare and the Tortoise", why did the slow Tortoise win the race?`,
          options: [
            'Because the Tortoise took a taxi',
            'Because the Tortoise practiced steady perseverance without giving up, while the Hare was overconfident',
            'Because the track was downhill',
            'Because the Hare forgot the way'
          ],
          correctIndex: 1,
          explanation: '"Slow and steady wins the race" — consistent effort and humility overcome arrogance.',
          topic: 'Perseverance & Humility'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `What is the difference between "Sympathy" and "Empathy"?`,
          options: [
            'They mean being angry at others',
            'Empathy is the ability to put yourself in another person\'s shoes and genuinely understand their feelings',
            'Empathy means ignoring others\' problems',
            'Sympathy means laughing at mistakes'
          ],
          correctIndex: 1,
          explanation: 'Empathy is deeply understanding and sharing the feelings of another person from their perspective.',
          topic: 'Empathy and Emotional Intelligence'
        },
        {
          text: `Fill in the blank: Accepting defeat gracefully and congratulating the winning team with a smile is the true spirit of _____.`,
          options: ['jealousy', 'sportsmanship', 'revenge', 'laziness'],
          correctIndex: 1,
          explanation: 'True sportsmanship values fair play, effort, and mutual respect whether winning or losing.',
          topic: 'Sportsmanship & Fair Play'
        },
        {
          text: `True or False: Punctuality (arriving on time and completing tasks on schedule) shows that you value both your own time and other people's time.`,
          options: ['True', 'False', 'Being late is always better', 'Time does not matter'],
          correctIndex: 0,
          explanation: 'Punctuality builds reliability, reduces stress, and demonstrates respect for others.',
          topic: 'Punctuality & Time Management'
        },
        {
          text: `During a group science project, one teammate is shy and hasn't spoken yet. What should a good team leader do?`,
          options: [
            'Do all the work alone and ignore the teammate',
            'Warmly invite the shy teammate to share their ideas and assign everyone a meaningful role',
            'Scold the teammate in front of the class',
            'Cancel the project'
          ],
          correctIndex: 1,
          explanation: 'Inclusive leadership ensures every team member feels valued, heard, and encouraged to contribute.',
          topic: 'Teamwork & Inclusive Leadership'
        },
        {
          text: `Why should we never waste food on our plate at home, in school canteens, or at weddings?`,
          options: [
            'Because plates are small',
            'Because every grain of food takes immense hard work by farmers and precious natural resources (water, soil), and millions of people need nourishment',
            'Because food is inedible',
            'Because spoons are heavy'
          ],
          correctIndex: 1,
          explanation: 'Taking only as much food as we can eat honors the hard work of farmers (Annadata) and prevents waste.',
          topic: 'Gratitude & Preventing Food Waste'
        },
        {
          text: `Identify the statement that reflects a GROWTH MINDSET rather than giving up:`,
          options: [
            '"I made a mistake in math, so I will never be good at math."',
            '"Mistakes help me learn where to improve; with practice and guidance, I can master this topic!"',
            '"If something is hard, I should copy from someone else."',
            '"I don\'t need to try at all."'
          ],
          correctIndex: 1,
          explanation: 'A growth mindset views challenges and mistakes as opportunities to learn, practice, and grow stronger.',
          topic: 'Growth Mindset & Resilience'
        },
        {
          text: `Complete the Sanskrit moral maxim: "Vasudhaiva Kutumbakam" means "The whole _____ is one single family."`,
          options: ['neighborhood', 'world (Earth)', 'building', 'classroom'],
          correctIndex: 1,
          explanation: 'From the Maha Upanishad, "Vasudhaiva Kutumbakam" ("Vasudha" = Earth, "Kutumbakam" = family) teaches universal brotherhood and global harmony.',
          topic: 'Universal Human Values'
        },
        {
          text: `Your friend asks you to let them copy your answers during a class test. What is the ethically right response?`,
          options: [
            'Let them copy everything secretly',
            'Politely refuse to cheat during the test, and offer to help them study and understand the chapter after class',
            'Give them wrong answers on purpose',
            'Tear your own answer sheet'
          ],
          correctIndex: 1,
          explanation: 'True friendship upholds academic honesty during exams while genuinely helping friends learn and prepare fairly.',
          topic: 'Academic Integrity'
        },
        {
          text: `Look at the dove icon 🕊️. Which quality helps us let go of anger and resentment when someone apologizes for a mistake?`,
          options: ['Bitterness', 'Forgiveness', 'Arrogance', 'Stubbornness'],
          correctIndex: 1,
          diagramEmoji: '🕊️',
          explanation: 'As Mahatma Gandhi said, "The weak can never forgive. Forgiveness is the attribute of the strong."',
          topic: 'The Power of Forgiveness'
        },
        {
          text: `In the story of young George Washington (or the woodcutter and the golden axe), why was the protagonist rewarded?`,
          options: [
            'For hiding the truth',
            'For speaking the honest truth without greed or fear',
            'For running away from responsibility',
            'For taking what did not belong to him'
          ],
          correctIndex: 1,
          explanation: 'In the Honest Woodcutter story, he refused the silver and gold axes because they were not his, and was rewarded for his incorruptible honesty.',
          topic: 'Contentment & Truthfulness'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `How is "Integrity" best defined in moral character education?`,
          options: [
            'Doing the right thing only when teachers or parents are watching',
            'Doing the right and honest thing even when no one is watching',
            'Winning prizes by any means',
            'Agreeing with whatever is popular'
          ],
          correctIndex: 1,
          explanation: 'Integrity is the consistency of moral character—being honest and upright even when nobody is watching.',
          topic: 'Moral Integrity'
        },
        {
          text: `Fill in the blank: Standing up calmly and constructively to protect a classmate who is being unfairly teased or excluded requires _____ courage.`,
          options: ['reckless', 'moral', 'selfish', 'careless'],
          correctIndex: 1,
          explanation: 'Moral courage is the bravery to stand up for fairness, truth, and kindness even when it is difficult.',
          topic: 'Moral Courage (Upstander vs Bystander)'
        },
        {
          text: `True or False: Digital Ethics (Netiquette) means treating people online with the same respect, honesty, and kindness that we practice face-to-face.`,
          options: ['True', 'False', 'Being rude online is acceptable', 'Rumors should be forwarded immediately'],
          correctIndex: 0,
          explanation: 'Responsible digital citizenship requires kindness, verifying facts before sharing, and zero cyberbullying.',
          topic: 'Digital Ethics & Netiquette'
        },
        {
          text: `What should you do BEFORE forwarding an alarming or sensational message on WhatsApp or social media?`,
          options: [
            'Forward it to 50 groups immediately',
            'Verify whether it is true from reliable, official sources so you do not spread misinformation or panic',
            'Add more dramatic words to it',
            'Assume everything on the internet is true'
          ],
          correctIndex: 1,
          explanation: 'Checking facts before sharing prevents the spread of fake news and protects community trust.',
          topic: 'Truthfulness in the Digital Age'
        },
        {
          text: `When Chhatrapati Shivaji Maharaj ensured that captured women, places of worship, and holy books of all faiths were treated with the highest honor and safety, which timeless leadership value did he exemplify?`,
          options: [
            'Chivalry, respect for women\'s dignity, and ethical conduct even in warfare',
            'Intolerance',
            'Neglect of justice',
            'Greed for plunder'
          ],
          correctIndex: 0,
          explanation: 'Shivaji Maharaj\'s strict ethical code honored women as mothers/sisters and respected all faiths and innocent civilians.',
          topic: 'Ethical Leadership from History'
        },
        {
          text: `Identify the behavior that demonstrates POOR emotional self-control:`,
          options: [
            'Taking three deep breaths when feeling frustrated',
            'Expressing feelings calmly using respectful words',
            'Lashing out in anger, breaking things, or using hurtful language when things don\'t go your way',
            'Asking a mentor or parent for advice when overwhelmed'
          ],
          correctIndex: 2,
          explanation: 'Emotional maturity means managing anger constructively rather than hurting others or damaging property.',
          topic: 'Anger Management & Self-Regulation'
        },
        {
          text: `Complete the quote by Swami Vivekananda: "Arise, awake, and stop not till the _____ is reached."`,
          options: ['playground', 'goal', 'sunset', 'market'],
          correctIndex: 1,
          explanation: 'Swami Vivekananda inspired youth with the call from the Katha Upanishad: "Arise, awake, and stop not till the goal is reached."',
          topic: 'Teachings of Great Thinkers'
        },
        {
          text: `You accidentally scratch a neighbor's parked bicycle while riding yours, and nobody saw it happen. What does personal responsibility require?`,
          options: [
            'Ride away quickly and pretend someone else did it',
            'Inform your parents and the neighbor honestly, apologize, and help get it repaired',
            'Hide your bicycle for a month',
            'Blame a stray dog'
          ],
          correctIndex: 1,
          explanation: 'Owning up to our mistakes when no one saw us is the truest test of conscience and character.',
          topic: 'Conscience & Responsibility'
        },
        {
          text: `Look at the lantern/light icon 🏮. What does "Seva" (Selfless Community Service) mean?`,
          options: [
            'Helping others only when paid a large reward',
            'Serving the community, the needy, and nature out of genuine compassion without expecting personal praise or reward',
            'Boasting about yourself',
            'Avoiding teamwork'
          ],
          correctIndex: 1,
          diagramEmoji: '🏮',
          explanation: 'Selfless service (Nishkama Seva) uplifts society and brings deep inner joy and humility.',
          topic: 'Selfless Service (Seva)'
        },
        {
          text: `Why is "Active Listening" important in building strong relationships at home and school?`,
          options: [
            'It allows you to interrupt the speaker faster',
            'It shows genuine respect by giving full attention to understand the speaker before responding',
            'It means looking at a mobile screen while someone talks',
            'It means only talking about yourself'
          ],
          correctIndex: 1,
          explanation: 'Listening with full attention and eye contact makes others feel respected and prevents misunderstandings.',
          topic: 'Respectful Communication'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `What is the core ethical principle behind the "Golden Rule" found across world philosophies and moral traditions?`,
        options: [
          'Whoever has the most gold makes the rules',
          'Treat others with the same fairness, kindness, and respect with which you wish to be treated yourself',
          'Only help people who are richer than you',
          'Rules apply only to others'
        ],
        correctIndex: 1,
        explanation: 'The Golden Rule of reciprocity ("Treat others as you would like to be treated") is the universal foundation of human ethics.',
          topic: 'Universal Ethical Principles'
      },
      {
        text: `Fill in the blank: The constitutional and moral value of _____ means recognizing that every human being possesses equal inherent worth and deserves to be treated without discrimination of caste, gender, or status.`,
        options: ['Nepotism', 'Human Dignity and Equality (Fraternity)', 'Prejudice', 'Arrogance'],
        correctIndex: 1,
        explanation: 'The Preamble of India\'s Constitution links Fraternity with assuring the dignity of every individual.',
        topic: 'Dignity of the Individual'
      },
      {
        text: `True or False: "Dignity of Labour" means respecting all types of honest work and workers—whether a sanitation worker, farmer, carpenter, teacher, or scientist—as equally honorable and vital to society.`,
        options: ['True', 'False', 'Only office desk jobs deserve respect', 'Manual work should be looked down upon'],
        correctIndex: 0,
        explanation: 'Every honest profession contributes to society\'s well-being; respecting all workers is the essence of Dignity of Labour.',
        topic: 'Dignity of Labour'
      },
      {
        text: `When using Artificial Intelligence tools or the Internet for school assignments, what is the ethical way to use them?`,
        options: [
          'Copy-paste entire essays without reading and claim you wrote every word yourself (Plagiarism)',
          'Use technology as a learning aid to understand concepts and brainstorm, while writing your own original work and crediting sources honestly',
          'Use AI to generate fake rumours about classmates',
          'Never read books again'
        ],
        correctIndex: 1,
        explanation: 'Avoiding plagiarism and using technology ethically to enhance—not replace—your own thinking builds genuine competence and integrity.',
        topic: 'Ethics in Technology & AI'
      },
      {
        text: `What does Mahatma Gandhi's principle of "Ahimsa" encompass at its deepest level?`,
        options: [
          'Only avoiding physical fights while speaking harshly',
          'Non-injury and compassion in thought, word, and deed toward all living beings',
          'Passive cowardice in the face of injustice',
          'Avoiding exercise'
        ],
        correctIndex: 1,
        explanation: 'Ahimsa is positive, courageous compassion and non-violence in thought (Manasa), word (Vacha), and action (Karmana).',
        topic: 'Philosophy of Ahimsa'
      },
      {
        text: `Identify the statement that represents a logical and ethical fallacy ("Peer Pressure"):`,
        options: [
          '"Everyone in the group is breaking the park lamps, so it must be okay for me to do it too."',
          '"Even if my friends want to skip class or break a rule, I will stand by my values and advise them against it."',
          '"True friends respect my boundaries and ethical choices."',
          '"I am responsible for the consequences of my own actions."'
        ],
        correctIndex: 0,
        explanation: 'A wrong action does not become right just because many people are doing it; resisting negative peer pressure is a sign of strong character.',
        topic: 'Overcoming Peer Pressure'
      },
      {
        text: `Complete the teaching of Dr. A.P.J. Abdul Kalam: "Where there is righteousness in the heart, there is beauty in the _____."`,
        options: ['mirror', 'character', 'shoes', 'wallet'],
        correctIndex: 1,
        explanation: 'Dr. Kalam\'s famous prayer states: "Where there is righteousness in the heart, there is beauty in the character; when there is beauty in the character, there is harmony in the home..."',
        topic: 'Character Building & Nation Building'
      },
      {
        text: `In an ethical dilemma where keeping a secret for a friend would put that friend's health or safety in serious danger, what is the most responsible moral choice?`,
        options: [
          'Stay silent even if the friend gets seriously hurt',
          'Prioritize your friend\'s safety and well-being by seeking help from a trusted parent, counselor, or teacher',
          'Gossip about it to strangers',
          'Laugh it off'
        ],
        correctIndex: 1,
        explanation: 'Protecting life and safety takes moral precedence; seeking timely help from a trusted adult is an act of true care.',
        topic: 'Ethical Decision Making'
      },
      {
        text: `Look at the地球/stewardship icon 🌍. What does "Intergenerational Equity" mean in environmental and moral philosophy?`,
        options: [
          'Using up all natural resources today and leaving nothing for the future',
          'Our moral duty as custodians of the Earth to pass on a healthy planet, clean water, and rich biodiversity to future generations',
          'Only caring about the past',
          'Ignoring climate change'
        ],
        correctIndex: 1,
        diagramEmoji: '🌍',
        explanation: 'As the proverb says, "We do not inherit the Earth from our ancestors; we borrow it from our children."',
        topic: 'Environmental Stewardship'
      },
      {
        text: `How do "Humility" and "Gratitude" work together in a true Champion's life?`,
        options: [
          'They make a person boastful and arrogant after winning',
          'Gratitude acknowledges the support of parents, teachers, and teammates, while humility keeps the learner curious and respectful no matter how high they rise',
          'They stop a student from setting high goals',
          'They mean never celebrating achievements'
        ],
        correctIndex: 1,
        explanation: 'Like a fruit-laden tree that bows low, true champions combine high achievement with deep gratitude and lifelong humility.',
        topic: 'The Heart of a True Champion'
      }
    ];
  }

  // ============================================================================
  // 14. VOCABULARY AND GRAMMAR — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Vocabulary and Grammar') {
    if (level === 1) {
      return [
        {
          text: `Choose the correct verb to complete the sentence: "The little bird _____ high in the blue sky."`,
          options: ['fly', 'flies', 'flying', 'flown'],
          correctIndex: 1,
          explanation: 'The singular subject "The little bird" takes the singular present verb "flies".',
          topic: 'Subject-Verb Concord'
        },
        {
          text: `Fill in the blank with the correct possessive determiner: "The dog wagged _____ tail happily."`,
          options: ["it's", "its", "there", "they're"],
          correctIndex: 1,
          explanation: '"Its" (without an apostrophe) is the possessive pronoun; "it\'s" is a contraction for "it is".',
          topic: 'Possessive Determiners'
        },
        {
          text: `True or False: The words "Ancient" and "Modern" are antonyms (opposites) of each other.`,
          options: ['True', 'False', 'They are synonyms', 'They are rhyming words'],
          correctIndex: 0,
          explanation: '"Ancient" means very old, while "Modern" means relating to the present time.',
          topic: 'Antonyms Builder'
        },
        {
          text: `Which word is a SYNONYM (similar meaning) of the word "Enormous"?`,
          options: ['Tiny', 'Huge (Gigantic)', 'Weak', 'Narrow'],
          correctIndex: 1,
          explanation: '"Enormous" means extremely large, synonymous with "Huge" or "Gigantic".',
          topic: 'Synonyms Builder'
        },
        {
          text: `Identify the compound word formed by joining two complete nouns:`,
          options: ['Running', 'Sunflower (Sun + Flower)', 'Beautiful', 'Quickly'],
          correctIndex: 1,
          explanation: '"Sun" + "Flower" combine to form the closed compound noun "Sunflower".',
          topic: 'Compound Words'
        },
        {
          text: `Spot the sentence where the apostrophe is used INCORRECTLY:`,
          options: [
            "This is Rohan's bicycle.",
            "Don't forget to bring your water bottle.",
            "The apple's are very sweet today.",
            "She's the captain of the quiz team."
          ],
          correctIndex: 2,
          explanation: 'Simple plural nouns ("apples") never take an apostrophe.',
          topic: 'Apostrophe Usage'
        },
        {
          text: `Complete the sentence with the correct homophone: "Please _____ here until I return with the books."`,
          options: ['weight', 'wait', 'wate', 'wet'],
          correctIndex: 1,
          explanation: '"Wait" means to stay in expectation; "Weight" measures how heavy something is.',
          topic: 'Confusing Homophones'
        },
        {
          text: `Which suffix can be added to the noun "Care" to mean "full of care / cautious"?`,
          options: ['-less', '-ful (Careful)', '-ness', '-ment'],
          correctIndex: 1,
          explanation: 'Adding "-ful" forms "Careful" (full of care), whereas "-less" forms its opposite, "Careless".',
          topic: 'Suffixes (-ful vs -less)'
        },
        {
          text: `Look at the exclamation icon ❗. What type of sentence is: "What a magnificent rainbow that is!"?`,
          options: [
            'Interrogative sentence',
            'Exclamatory sentence',
            'Imperative sentence',
            'Negative sentence'
          ],
          correctIndex: 1,
          diagramEmoji: '❗',
          explanation: 'Sentences expressing strong emotion or wonder and ending with an exclamation mark (!) are Exclamatory sentences.',
          topic: 'Four Types of Sentences'
        },
        {
          text: `Choose the correct alphabetical (dictionary) order for these four words: 1. Grasp  2. Grain  3. Grape  4. Grass`,
          options: [
            'Grain, Grape, Grasp, Grass',
            'Grass, Grasp, Grape, Grain',
            'Grape, Grain, Grass, Grasp',
            'Grain, Grasp, Grape, Grass'
          ],
          correctIndex: 0,
          explanation: 'Comparing the 4th and 5th letters after "Gra-": Gra-i-n, Gra-p-e, Gra-s-p, Gra-s-s.',
          topic: 'Dictionary & Alphabetical Skills'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `Identify the Abstract Noun in the sentence: "King Vikramaditya was famous for his wisdom and justice."`,
          options: ['King', 'Wisdom (and Justice)', 'Vikramaditya', 'Famous'],
          correctIndex: 1,
          explanation: '"Wisdom" and "justice" name qualities or ideas that cannot be touched physically, making them Abstract Nouns.',
          topic: 'Concrete vs Abstract Nouns'
        },
        {
          text: `Fill in the blank with the correct modal auxiliary expressing polite permission: "_____ I borrow your atlas for a few minutes, please?"`,
          options: ['Must', 'May', 'Ought', 'Need'],
          correctIndex: 1,
          explanation: '"May" is the standard modal verb used to ask for polite permission.',
          topic: 'Modal Auxiliaries'
        },
        {
          text: `True or False: Countable nouns (like coins, chairs) can take "many" or "fewer", while Uncountable nouns (like water, milk, information) take "much" or "less".`,
          options: ['True', 'False', 'We say "many waters"', 'Information is countable'],
          correctIndex: 0,
          explanation: 'Countable plurals pair with "many/fewer", while uncountable nouns pair with "much/less".',
          topic: 'Countable & Uncountable Quantifiers'
        },
        {
          text: `What is the meaning of the phrasal verb "Look after" in: "Priya looks after her younger brother when her parents are busy."?`,
          options: [
            'To stare at someone from behind',
            'To take care of / protect someone',
            'To search for a lost key',
            'To read a dictionary'
          ],
          correctIndex: 1,
          explanation: 'The phrasal verb "look after" means to take care of or be responsible for someone or something.',
          topic: 'Phrasal Verbs'
        },
        {
          text: `Choose the correct Past Perfect Tense form to complete: "The train _____ already _____ before we reached the station."`,
          options: [
            'has, leave',
            'had, left',
            'was, leaving',
            'will, leave'
          ],
          correctIndex: 1,
          explanation: 'For an action completed before another past action, we use the Past Perfect Tense: "had + past participle" ("had left").',
          topic: 'Perfect Tenses'
        },
        {
          text: `Identify the word that is spelled INCORRECTLY:`,
          options: ['Necessary', 'Accommodate', 'Environment', 'Seperate'],
          correctIndex: 3,
          explanation: 'The correct spelling has an "a" in the middle: "Separate" (not "Seperate").',
          topic: 'Tricky Spellings'
        },
        {
          text: `Complete the sentence: A person who looks on the bright, hopeful side of things is called an _____.`,
          options: ['Pessimist', 'Optimist', 'Atheist', 'Botanist'],
          correctIndex: 1,
          explanation: 'An optimist expects positive outcomes, whereas a pessimist expects the worst.',
          topic: 'Vocabulary: Personality Traits'
        },
        {
          text: `Identify the Transitive Verb in the sentence: "The archer shot the arrow accurately."`,
          options: ['Archer', 'Shot (with direct object "the arrow")', 'Accurately', 'The'],
          correctIndex: 1,
          explanation: '"Shot" is a transitive verb because its action passes directly to the object "the arrow".',
          topic: 'Transitive and Intransitive Verbs'
        },
        {
          text: `Look at themagnifying glass icon 🔍. In the word "Submarine", what does the Latin prefix "Sub-" mean?`,
          options: ['Above / Over', 'Under / Below', 'Across', 'Twice'],
          correctIndex: 1,
          diagramEmoji: '🔍',
          explanation: 'The prefix "sub-" means under or below (a submarine travels under the sea).',
          topic: 'Greek & Latin Prefixes'
        },
        {
          text: `Choose the correct pair of words to fill in the blanks: "The school _____ reminded us to follow the _____ of honesty."`,
          options: [
            'principle, principal',
            'principal, principle',
            'principal, principal',
            'principle, principle'
          ],
          correctIndex: 1,
          explanation: '"Principal" is the head of a school; "Principle" is a fundamental moral rule or truth.',
          topic: 'Homonyms & Confusable Words'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `Choose the correct preposition: "Kavita is very fond _____ classical music and proficient _____ playing the sitar."`,
          options: ['for, on', 'of, in (or at)', 'with, by', 'to, from'],
          correctIndex: 1,
          explanation: 'The adjective "fond" always takes the preposition "of" ("fond of"), and "proficient" takes "in" or "at".',
          topic: 'Fixed Prepositional Phrases'
        },
        {
          text: `Fill in the blank: "Neither the teacher nor the students _____ informed about the sudden holiday."`,
          options: ['was', 'were', 'is', 'has'],
          correctIndex: 1,
          explanation: 'By the Rule of Proximity in "neither... nor", the verb agrees with the nearer subject ("students" -> plural "were").',
          topic: 'Proximity Rule in Concord'
        },
        {
          text: `True or False: In the sentence "To err is human, to forgive divine," the phrase "To err" is a To-Infinitive acting as the subject.`,
          options: ['True', 'False', 'It is a past participle', 'It is a preposition'],
          correctIndex: 0,
          explanation: '"To + base verb" ("To err", "To forgive") is a non-finite Infinitive functioning as a noun subject.',
          topic: 'Non-Finite Verbs: Infinitives'
        },
        {
          text: `What does the idiom "To hit the nail on the head" mean?`,
          options: [
            'To build a wooden chair with a hammer',
            'To describe or identify the exact truth or core point of a situation accurately',
            'To make a painful mistake',
            'To avoid answering a question'
          ],
          correctIndex: 1,
          explanation: '"Hitting the nail on the head" means stating or doing something that is 100% accurate and to the point.',
          topic: 'Idiomatic Expressions'
        },
        {
          text: `Choose the word that is closest in meaning (Synonym) to "Meticulous":`,
          options: [
            'Careless and hasty',
            'Extremely careful, thorough, and precise about small details',
            'Angry and loud',
            'Forgetful'
          ],
          correctIndex: 1,
          explanation: '"Meticulous" means showing great attention to detail; very careful and precise.',
          topic: 'High-School Vocabulary'
        },
        {
          text: `Identify the sentence that uses "fewer" and "less" INCORRECTLY:`,
          options: [
            'There are fewer cars on the road on Sunday mornings.',
            'We should drink less sugary soda and more water.',
            'This express checkout lane is for customers with ten items or less.',
            'Fewer mistakes were made in the final draft.'
          ],
          correctIndex: 2,
          explanation: 'Since "items" is a countable plural noun, standard grammar requires "ten items or FEWER", not "less".',
          topic: 'Precision in Determiners'
        },
        {
          text: `Complete the one-word substitution: A medicine or substance given to counteract a particular poison is called an _____.`,
          options: ['Antibiotic', 'Antidote', 'Antiseptic', 'Anesthetic'],
          correctIndex: 1,
          explanation: 'An antidote counteracts a poison; an antiseptic prevents infection on skin; an antibiotic fights bacterial infections.',
          topic: 'Scientific & Medical Vocabulary'
        },
        {
          text: `Rewrite using "Unless": "If you do not practice regularly, you will not master the piano."`,
          options: [
            'Unless you do not practice regularly, you will master the piano.',
            'Unless you practice regularly, you will not master the piano.',
            'Unless you practiced, you will master.',
            'You will master the piano unless you practice.'
          ],
          correctIndex: 1,
          explanation: 'Since "Unless" already means "If... not", we drop "do not" in the first clause: "Unless you practice regularly...".',
          topic: 'Sentence Transformation (Unless / If)'
        },
        {
          text: `Look at the book/root icon 📘. The English words "Chronology", "Chronicle", and "Synchronize" all share the Greek root "Chron-". What does "Chron-" mean?`,
          options: ['Color', 'Time', 'Water', 'Sound'],
          correctIndex: 1,
          diagramEmoji: '📘',
          explanation: 'The Greek root "chronos" means Time (chronological order = time order; synchronize = happen at the same time).',
          topic: 'Etymology & Greek Roots'
        },
        {
          text: `Which punctuation mark is used to join two closely related independent clauses when no coordinating conjunction (and, but, so) is used?`,
          options: ['Apostrophe (\')', 'Semicolon (;)', 'Hyphen (-)', 'Question mark (?)'],
          correctIndex: 1,
          explanation: 'A semicolon (;) links two closely related independent clauses (e.g., "The rain stopped; the sun came out.").',
          topic: 'Advanced Punctuation'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `Identify the grammatical structure of the sentence: "Although the mountain trail was steep and rocky, the trekkers reached the summit before sunset, and they celebrated joyfully."`,
        options: [
          'Simple Sentence',
          'Compound-Complex Sentence',
          'Imperative Sentence',
          'Phrase Fragment'
        ],
        correctIndex: 1,
        explanation: 'It contains one subordinate clause ("Although...") and two independent clauses joined by "and", making it a Compound-Complex sentence.',
        topic: 'Sentence Structure Classification'
      },
      {
        text: `Fill in the blank with the correct inverted verb structure: "Seldom _____ such a breathtaking display of northern lights."`,
        options: [
          'we have witnessed',
          'have we witnessed',
          'we witnessed have',
          'did witnessed we'
        ],
        correctIndex: 1,
        explanation: 'When a sentence begins with a negative or restrictive adverb like "Seldom", "Never", or "Rarely", subject-auxiliary inversion is required ("have we witnessed").',
        topic: 'Subject-Auxiliary Inversion'
      },
      {
        text: `True or False: The word "Ubiquitous" means "present, appearing, or found everywhere at the same time" (omnipresent).`,
        options: ['True', 'False', 'It means extremely rare', 'It means invisible'],
        correctIndex: 0,
        explanation: '"Ubiquitous" means found everywhere (e.g., "Smartphones have become ubiquitous in modern life"). Its antonym is "rare" or "scarce".',
        topic: 'Advanced Academic Vocabulary'
      },
      {
        text: `Choose the exact antonym of the word "Mitigate" (as in "planting trees helps mitigate the effects of urban heat"):`,
        options: ['Alleviate and lessen', 'Aggravate and intensify', 'Measure', 'Ignore'],
        correctIndex: 1,
        explanation: '"Mitigate" means to make less severe or painful; its opposite is "Aggravate" or "Exacerbate" (to make worse).',
        topic: 'Academic Antonyms'
      },
      {
        text: `Select the sentence in which "Who" vs "Whom" is used with 100% grammatical accuracy:`,
        options: [
          'Whom is the captain of the debating society?',
          'The scientist to whom the award was presented thanked her research team.',
          'Who did you give the invitation card to?',
          'The boy whom won the race is my cousin.'
        ],
        correctIndex: 1,
        explanation: '"Whom" is the objective case pronoun required after the preposition "to" ("to whom the award was presented").',
        topic: 'Relative Pronouns (Who vs Whom)'
      },
      {
        text: `Identify the sentence that contains a "Redundancy" (pleonasm / unnecessary repetition of meaning):`,
        options: [
          'The two companies merged together to form a single corporation.',
          'The orchestra performed Beethoven\'s Fifth Symphony.',
          'Please submit your application before Friday.',
          'Water boils at 100 degrees Celsius at standard pressure.'
        ],
        correctIndex: 0,
        explanation: '"Merged" already means joined together; adding "together" ("merged together", like "past history" or "free gift") is redundant.',
        topic: 'Conciseness & Avoiding Redundancy'
      },
      {
        text: `Complete the sentence: A person who is indifferent to pleasure or pain and endures hardship without complaining is called a _____.`,
        options: ['Hedonist', 'Stoic', 'Cynic', 'Novice'],
        correctIndex: 1,
        explanation: 'A "Stoic" endures pain or adversity with calm resilience and without display of complaint.',
        topic: 'Philosophical & Literary Vocabulary'
      },
      {
        text: `Change into a Complex Sentence containing a Noun Clause: "Everyone knows his honesty."`,
        options: [
          'He is honest and everyone knows it.',
          'Everyone knows that he is honest.',
          'Knowing his honesty, everyone praised him.',
          'Everyone knows him to be honest.'
        ],
        correctIndex: 1,
        explanation: '"That he is honest" is a subordinate Noun Clause acting as the direct object of the verb "knows".',
        topic: 'Noun Clauses & Transformation'
      },
      {
        text: `Look at the speech bubble icon 💬. What is a mild or indirect word or expression substituted for one considered too harsh or blunt (e.g., saying "passed away" instead of "died") called?`,
        options: ['Malapropism', 'Euphemism', 'Hyperbole', 'Palindrome'],
        correctIndex: 1,
        diagramEmoji: '💬',
        explanation: 'A "Euphemism" ("eu-" = good, "pheme" = speech) is a polite, gentle expression used in place of a harsh one.',
        topic: 'Rhetorical & Figurative Terms'
      },
      {
        text: `Verbal Analogy: Loquacious : Talkative :: Taciturn : _____`,
        options: ['Boisterous', 'Reserved / Silent (Speaking very little)', 'Generous', 'Careless'],
        correctIndex: 1,
        explanation: '"Loquacious" means very talkative; "Taciturn" means habitually reserved and uncommunicative in speech.',
        topic: 'Advanced Verbal Reasoning'
      }
    ];
  }

  return null;
}
