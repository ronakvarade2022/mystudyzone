import { StoryItem } from '../types';

export const ENGLISH_STORIES: StoryItem[] = [
  {
    id: 'ENG-01',
    title: 'The Whispering Banyan Tree',
    language: 'English',
    themeColor: 'from-emerald-500 to-teal-700',
    category: 'Nature & Wisdom',
    classRecommendation: 'Classes 2–4',
    summary: 'Little Aarav learns why the ancient banyan tree shelters birds, squirrels, and weary travelers without asking for anything in return.',
    content: [
      'At the edge of Sundarpur village stood a magnificent banyan tree with branches that spread like giant green wings. Children loved to swing on its aerial roots every afternoon after school. Aarav, a curious seven-year-old boy, noticed that birds nested quietly in its highest branches, while stray puppies napped under its cool shade.',
      'One sweltering summer afternoon, while resting against the rough trunk, Aarav wondered aloud, "Grandfather Banyan, you provide sweet figs to the parakeets, shelter from fierce rain to farmers, and joyful swings to us children. Do you ever get tired of giving?"',
      'A gentle breeze stirred the emerald leaves, and a soft rustle sounded just like a whisper: "Dear child, true strength lies not in gathering treasures for oneself, but in enriching the lives around you. When my shade cools a tired wanderer, my own heart feels refreshed."',
      'From that day onward, Aarav pledged to share his water bottle with thirsty classmates and planted five new saplings in the village schoolyard.'
    ],
    moral: 'Selfless generosity and kindness make the world a joyful haven for everyone.',
    vocabulary: [
      { word: 'Magnificent', meaning: 'Extremely beautiful, grand, and impressive.' },
      { word: 'Sweltering', meaning: 'Uncomfortably hot and humid.' },
      { word: 'Wanderer', meaning: 'A person who travels casually without a fixed destination.' },
      { word: 'Sapling', meaning: 'A young and tender growing tree.' }
    ],
    questions: [
      {
        id: 'ENG-01-Q1',
        question: 'Where was the great banyan tree located?',
        options: ['At the edge of Sundarpur village', 'In the center of a busy city', 'On top of a snowy mountain', 'Inside a deep dark cave'],
        correctIndex: 0,
        explanation: 'The banyan tree stood at the serene edge of Sundarpur village.'
      },
      {
        id: 'ENG-01-Q2',
        question: 'What did the children love to do on the tree after school?',
        options: ['Carve their names on trunk', 'Swing from its aerial roots', 'Throw stones at birds', 'Cut its green branches'],
        correctIndex: 1,
        explanation: 'Children delighted in swinging happily from the aerial roots.'
      },
      {
        id: 'ENG-01-Q3',
        question: 'What question did Aarav ask the banyan tree?',
        options: ['Why are your leaves so dark green?', 'Do you ever get tired of giving?', 'Can you teach me how to fly?', 'Where do you hide your gold?'],
        correctIndex: 1,
        explanation: 'Aarav asked if the tree ever felt exhausted from constantly giving shade, shelter, and fruits.'
      },
      {
        id: 'ENG-01-Q4',
        question: 'According to the whispering tree, where does true strength lie?',
        options: ['In hoarding rare treasures', 'In defeating others in battle', 'In enriching the lives of those around you', 'In growing taller than everyone else'],
        correctIndex: 2,
        explanation: 'The tree taught that true power lies in bringing comfort and joy to others.'
      },
      {
        id: 'ENG-01-Q5',
        question: 'What noble action did Aarav take after his conversation with the tree?',
        options: ['He built a wooden fence', 'He planted five new saplings', 'He moved to another village', 'He stopped going to school'],
        correctIndex: 1,
        explanation: 'Aarav shared his water and planted five fresh saplings in his schoolyard.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'At the edge of Sundarpur village stood a magnificent banyan tree with branches that spread like giant green wings...'
  },
  {
    id: 'ENG-02',
    title: 'Riya and the Flying Solar Kite',
    language: 'English',
    themeColor: 'from-amber-500 to-orange-600',
    category: 'Science & Invention',
    classRecommendation: 'Classes 4–6',
    summary: 'Riya designs a lightweight kite fitted with miniature solar sensors to forecast evening monsoon showers for local farmers.',
    content: [
      'During the sunny harvest holiday, ten-year-old Riya observed that unpredicted evening cloudbursts often spoiled the drying grain harvested by village farmers. Instead of flying an ordinary paper kite during the kite festival, she decided to engineer something useful.',
      'Using flexible bamboo strips, recycled mylar film, and two tiny solar hygrometer chips from her science kit, Riya crafted the "Sun-Sky Explorer". Her elder brother initially chuckled, claiming a kite was merely a playground toy.',
      'Undeterred, Riya launched her invention into the thermal updrafts. High in the troposphere, the solar sensors transmitted a rhythmic buzz to her handheld receiver, warning that humidity had spiked by 80 percent.',
      'Riya promptly alerted the village council. Farmers quickly gathered the wheat sacks into dry granaries moments before a torrential downpour began. The village head praised Riya\'s resourcefulness, proving that young minds can solve real community challenges.'
    ],
    moral: 'Curiosity combined with scientific thinking can solve everyday community challenges.',
    vocabulary: [
      { word: 'Cloudburst', meaning: 'A sudden, heavy, and intense fall of rain.' },
      { word: 'Hygrometer', meaning: 'An instrument used for measuring humidity and water vapor.' },
      { word: 'Updraft', meaning: 'An upward current of warm air.' },
      { word: 'Resourcefulness', meaning: 'The ability to find quick and clever ways to overcome difficulties.' }
    ],
    questions: [
      {
        id: 'ENG-02-Q1',
        question: 'What problem were the village farmers facing during harvest season?',
        options: ['Extreme frost in fields', 'Sudden evening cloudbursts spoiling drying grain', 'A shortage of drinking water', 'Locust swarms eating crops'],
        correctIndex: 1,
        explanation: 'Sudden rain was dampening harvested grains laid out under the sun.'
      },
      {
        id: 'ENG-02-Q2',
        question: 'What special items did Riya attach to her kite?',
        options: ['Decorative gold ribbons', 'Miniature solar hygrometer chips', 'Heavy iron weights', 'A loud electric megaphone'],
        correctIndex: 1,
        explanation: 'She attached solar hygrometer sensors to measure atmospheric moisture.'
      },
      {
        id: 'ENG-02-Q3',
        question: 'How did Riya\'s elder brother initially react?',
        options: ['He was deeply amazed', 'He chuckled and called it merely a toy', 'He refused to let her leave home', 'He broke her bamboo strips'],
        correctIndex: 1,
        explanation: 'Her brother initially believed kites were simple playthings with no serious utility.'
      },
      {
        id: 'ENG-02-Q4',
        question: 'What warning signal did the receiver give Riya?',
        options: ['A rhythmic buzz indicating an 80% humidity spike', 'A blue flashing light indicating calm winds', 'A voice command to land', 'No signal at all'],
        correctIndex: 0,
        explanation: 'The buzz warned of rapid moisture accumulation in the sky.'
      },
      {
        id: 'ENG-02-Q5',
        question: 'What happened before the torrential downpour hit the village?',
        options: ['The crops washed away completely', 'Farmers safely stored the wheat sacks into granaries', 'All power lines broke down', 'The kite was struck by lightning'],
        correctIndex: 1,
        explanation: 'Farmers gathered their grain safely thanks to Riya’s early alert.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'During the sunny harvest holiday, ten-year-old Riya observed that unpredicted evening cloudbursts...'
  },
  {
    id: 'ENG-03',
    title: 'The Brave Little Firefly',
    language: 'English',
    themeColor: 'from-yellow-400 to-amber-600',
    category: 'Courage & Hope',
    classRecommendation: 'Classes 2–4',
    summary: 'Pip, the smallest firefly in the Whispering Grove, proves that even the tiniest light can dispel deep darkness.',
    content: [
      'Deep inside the Whispering Grove lived thousands of glowing fireflies. Every evening they performed glittering aerial dances. Little Pip had only a faint green flicker compared to his older cousins, who shone like golden beacons.',
      'One foggy night, an adventurous baby owl named Ollie tumbled out of his nest and got lost among thick bramble bushes. The dense fog made it impossible for larger fireflies to fly close to the thorny brambles without tearing their delicate wings.',
      'Pip did not hesitate. Because of his compact size, he navigated safely through the narrow bramble branches, blinking his light in steady rhythmic pulses to show Ollie the path home.',
      'Following Pip\'s brave beacon, Ollie hopped safely back into Mother Owl\'s embrace. The whole grove celebrated Pip, learning that bravery and agility matter far more than mere size.'
    ],
    moral: 'No matter how small you feel, your courage can light the way for someone in need.',
    vocabulary: [
      { word: 'Bramble', meaning: 'A prickly, tangled shrub or thorny bush.' },
      { word: 'Delicate', meaning: 'Fragile, easily broken or damaged.' },
      { word: 'Navigated', meaning: 'Carefully guided or found one’s way through.' },
      { word: 'Agility', meaning: 'The ability to move quickly and easily.' }
    ],
    questions: [
      {
        id: 'ENG-03-Q1',
        question: 'How was Pip different from his older cousins?',
        options: ['He could not fly at all', 'He had only a faint flicker instead of a bright beacon', 'He had six wings', 'He lived in a hollow rock'],
        correctIndex: 1,
        explanation: 'Pip had a smaller light compared to the bright glow of his cousins.'
      },
      {
        id: 'ENG-03-Q2',
        question: 'Who tumbled out of the nest and needed rescue?',
        options: ['A baby owl named Ollie', 'A hungry caterpillar', 'A bluebird chick', 'A young squirrel'],
        correctIndex: 0,
        explanation: 'Ollie, the young owl, had fallen among the prickly brambles.'
      },
      {
        id: 'ENG-03-Q3',
        question: 'Why couldn’t the bigger fireflies help in the brambles?',
        options: ['They were too sleepy', 'Their wings risked tearing on the sharp thorns', 'They were afraid of the dark', 'Their lights had gone out'],
        correctIndex: 1,
        explanation: 'Their broad wings could easily snag on dense thorns in the fog.'
      },
      {
        id: 'ENG-03-Q4',
        question: 'How did Pip guide Ollie back safely?',
        options: ['By shouting loudly', 'By blinking his light in steady rhythmic pulses', 'By pulling Ollie’s feathers', 'By building a bridge of leaves'],
        correctIndex: 1,
        explanation: 'Pip pulsed his rhythmic light through the tangled branches.'
      },
      {
        id: 'ENG-03-Q5',
        question: 'What important lesson did the grove learn from Pip?',
        options: ['Small insects should never fly at night', 'Bravery and agility matter more than physical size', 'Owls are dangerous to fireflies', 'Fog cannot be penetrated'],
        correctIndex: 1,
        explanation: 'Courage and heart outweigh physical stature.'
      }
    ],
    estimatedReadMinutes: 3,
    audioSampleScript: 'Deep inside the Whispering Grove lived thousands of glowing fireflies...'
  },
  {
    id: 'ENG-04',
    title: 'The Secret of the Chessboard',
    language: 'English',
    themeColor: 'from-indigo-600 to-purple-800',
    category: 'Mind & Strategy',
    classRecommendation: 'Classes 5–8',
    summary: 'Arjun learns from his grandmother that in chess and in life, patience and respecting every piece leads to triumph.',
    content: [
      'Twelve-year-old Arjun was eager to win every blitz chess match in under twenty moves. His hurried aggression, however, often resulted in trapped knights and exposed kings. Noticing his frustration, his grandmother Dadi summoned him to the veranda.',
      'Dadi set up an ivory board and asked Arjun, "Which piece on this board holds the most potential?" Arjun instantly tapped the regal Queen. Dadi smiled gently and pointed to a modest front-row pawn.',
      '"A pawn advances with quiet patience," Dadi explained. "It cannot leap backward in panic, and it takes one measured step at a time. Yet if it perseveres across the board, it transforms into the most powerful piece."',
      'During the regional inter-school championship that weekend, Arjun resisted the urge to launch an impulsive attack. By methodically coordinating his pawns and guarding his flanks, he outplayed his overconfident rival, earning the gold medal.'
    ],
    moral: 'Patience, disciplined planning, and humility overcome impulsive haste.',
    vocabulary: [
      { word: 'Aggression', meaning: 'Forceful and hasty action without adequate caution.' },
      { word: 'Perseveres', meaning: 'Continues steadily in an action despite difficulty or delay.' },
      { word: 'Flank', meaning: 'The side of an army or game position.' },
      { word: 'Impulsive', meaning: 'Acting suddenly on a whim without forethought.' }
    ],
    questions: [
      {
        id: 'ENG-04-Q1',
        question: 'What mistake was Arjun repeatedly making in his chess games?',
        options: ['Refusing to use his rooks', 'Playing too slowly and losing on time', 'Hurried aggression leading to trapped pieces', 'Forgetting the rules of castling'],
        correctIndex: 2,
        explanation: 'Arjun rushed impulsively to win quickly, making costly tactical blunders.'
      },
      {
        id: 'ENG-04-Q2',
        question: 'Which piece did Arjun think was the most important?',
        options: ['The Pawn', 'The Queen', 'The Bishop', 'The Rook'],
        correctIndex: 1,
        explanation: 'He initially pointed straight to the Queen.'
      },
      {
        id: 'ENG-04-Q3',
        question: 'What special virtue of the humble pawn did Dadi highlight?',
        options: ['It can move backwards', 'It advances with quiet patience and can promote to greatness', 'It jumps over any obstacle', 'It is worth ten points'],
        correctIndex: 1,
        explanation: 'The pawn never retreats, steps deliberately, and can transform through perseverance.'
      },
      {
        id: 'ENG-04-Q4',
        question: 'How did Arjun play in the regional championship?',
        options: ['He quit after five minutes', 'He attacked recklessly again', 'He resisted impulsive urges and played methodically', 'He copied his opponent’s moves blindly'],
        correctIndex: 2,
        explanation: 'He exercised discipline and coordinated his defenses calmly.'
      },
      {
        id: 'ENG-04-Q5',
        question: 'What award did Arjun earn through his thoughtful play?',
        options: ['A consolation prize', 'The championship gold medal', 'A new wooden board', 'A coaching certificate'],
        correctIndex: 1,
        explanation: 'He won the prestigious gold medal.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'Twelve-year-old Arjun was eager to win every blitz chess match in under twenty moves...'
  },
  {
    id: 'ENG-05',
    title: 'The River That Learned to Sing',
    language: 'English',
    themeColor: 'from-cyan-500 to-blue-700',
    category: 'Perseverance',
    classRecommendation: 'Classes 3–5',
    summary: 'A fast mountain stream discovers that boulders in its path do not halt its journey—they turn its flow into musical melodies.',
    content: [
      'High in the Himalayan peaks, a sparkling stream named Tarang bubbled joyously across smooth granite pebbles. One morning, a giant landslide tumbled down, dumping jagged boulders right across the riverbed.',
      'Tarang halted in despair. "My clear passage is ruined!" wept the little river. "These sharp rocks will bruise my waters and block me from reaching the distant ocean."',
      'An old mountain eagle swooped down and perched atop the tallest boulder. "Do not fight the rocks, little stream," spoke the eagle. "Embrace the obstacle. Flow around, over, and through the crevices with gladness."',
      'Tarang took a deep breath, gathered momentum, and cascaded over the jagged stones. Instead of silence, a delightful, rhythmic melody burst forth—a splashing song that made mountain flowers bloom along the banks.'
    ],
    moral: 'Obstacles do not stop our journey; they give us our unique character and music.',
    vocabulary: [
      { word: 'Granite', meaning: 'A very hard, granular rock.' },
      { word: 'Crevice', meaning: 'A narrow opening or crack in a rock.' },
      { word: 'Cascaded', meaning: 'Poured or fell down rapidly in large quantities.' },
      { word: 'Momentum', meaning: 'The quantity of motion or driving force of a moving body.' }
    ],
    questions: [
      {
        id: 'ENG-05-Q1',
        question: 'What disrupted Tarang’s clear passage in the mountains?',
        options: ['A freezing blizzard', 'A landslide dumping jagged boulders', 'A concrete dam', 'A thirsty herd of elephants'],
        correctIndex: 1,
        explanation: 'A sudden rockslide covered the stream bed with heavy boulders.'
      },
      {
        id: 'ENG-05-Q2',
        question: 'What was Tarang afraid of when she saw the rocks?',
        options: ['That her water would turn salty', 'That she would be blocked from reaching the ocean', 'That humans would catch her fish', 'That she would evaporate immediately'],
        correctIndex: 1,
        explanation: 'She feared the boulders would trap her and prevent her from reaching the ocean.'
      },
      {
        id: 'ENG-05-Q3',
        question: 'Who advised Tarang to embrace the obstacles?',
        options: ['A mountain eagle', 'A friendly trout', 'A pine tree', 'A shepherd boy'],
        correctIndex: 0,
        explanation: 'An old mountain eagle offered Tarang wise counsel.'
      },
      {
        id: 'ENG-05-Q4',
        question: 'What wonderful sound occurred when Tarang flowed over the rocks?',
        options: ['Loud frightening thunder', 'A delightful rhythmic splashing song', 'Complete silent stillness', 'An engine whistle'],
        correctIndex: 1,
        explanation: 'The rushing water against the stones created musical melodies.'
      },
      {
        id: 'ENG-05-Q5',
        question: 'What is the moral of the story?',
        options: ['Avoid rocks at all costs', 'Rivers should stay in high mountains', 'Obstacles can bring out our strength and unique beauty', 'Eagles know more than rivers'],
        correctIndex: 2,
        explanation: 'Difficulties develop our character and create harmony.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'High in the Himalayan peaks, a sparkling stream named Tarang bubbled joyously...'
  },
  {
    id: 'ENG-06',
    title: 'The Great Clay Pot Relay',
    language: 'English',
    themeColor: 'from-amber-600 to-red-600',
    category: 'Teamwork',
    classRecommendation: 'Classes 3–6',
    summary: 'Four classmates with vastly different talents discover that winning the village sports day requires trust and synergy.',
    content: [
      'In Greenfield Middle School, the annual sports carnival featured the tricky "Clay Pot Relay." Each team of four had to carry water in a fragile terracotta pot across balance beams, hurdles, and sand pits without spilling a single drop.',
      'Team Blue had Kabir who was the fastest sprinter, Meera who had the steadiest hands, Rohan who was tall and strong, and Priya who possessed sharp analytical focus. At first, Kabir insisted on sprinting the entire course alone, but almost dropped the pot.',
      '"We are not four individual runners," Priya pointed out with a stopwatch. "Kabir, you sprint the straight track. Rohan, you lift the heavy pot over the tall wooden fence. Meera, navigate the narrow balance beam with your steady balance. And I will coordinate our handoffs."',
      'By honoring each other\'s strengths rather than competing for personal glory, Team Blue crossed the finish line with a brimming pot of water, setting a brand new school record.'
    ],
    moral: 'True victory is achieved when individual strengths are united with trust and collaboration.',
    vocabulary: [
      { word: 'Terracotta', meaning: 'Hard, brownish-red baked clay used for pottery.' },
      { word: 'Synergy', meaning: 'The combined interaction producing a greater effect than the sum of separate parts.' },
      { word: 'Navigate', meaning: 'To plan, direct, or manage a path through difficulty.' },
      { word: 'Brimming', meaning: 'Filled to the very top edge.' }
    ],
    questions: [
      {
        id: 'ENG-06-Q1',
        question: 'What special condition made the Clay Pot Relay tricky?',
        options: ['Runners had to run backwards', 'Teams had to carry water without spilling or breaking the pot', 'Only one shoe was allowed', 'It took place in midnight'],
        correctIndex: 1,
        explanation: 'The fragile clay pot held water that could not be spilled.'
      },
      {
        id: 'ENG-06-Q2',
        question: 'Why did Kabir’s initial solo sprint almost fail?',
        options: ['He forgot where the finish line was', 'He ran too fast and almost dropped the fragile pot', 'He tripped on his laces', 'His pot was stolen'],
        correctIndex: 1,
        explanation: 'Speed alone without balance risked smashing the pot.'
      },
      {
        id: 'ENG-06-Q3',
        question: 'Who proposed assigning specific roles based on personal strengths?',
        options: ['The sports coach', 'Priya', 'Rohan', 'The referee'],
        correctIndex: 1,
        explanation: 'Priya analyzed the course and divided tasks to fit everyone’s talents.'
      },
      {
        id: 'ENG-06-Q4',
        question: 'Which obstacle did Meera handle with her steady hands?',
        options: ['The tall fence', 'The sand pit', 'The narrow balance beam', 'The sprint track'],
        correctIndex: 2,
        explanation: 'Meera’s poise made her ideal for crossing the narrow beam safely.'
      },
      {
        id: 'ENG-06-Q5',
        question: 'What record did Team Blue achieve by working as a cohesive team?',
        options: ['They set a brand new school record', 'They won the most stylish uniform', 'They finished second place', 'They spilled the least sand'],
        correctIndex: 0,
        explanation: 'They set a school record with a brimming pot of water.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'In Greenfield Middle School, the annual sports carnival featured the tricky Clay Pot Relay...'
  },
  {
    id: 'ENG-07',
    title: 'The Whispering Flute of Malhar',
    language: 'English',
    themeColor: 'from-blue-600 to-indigo-900',
    category: 'Art & Harmony',
    classRecommendation: 'Classes 5–8',
    summary: 'A shepherd boy carves a bamboo flute and discovers that music can soothe tense tempers and reconcile quarreling neighbors.',
    content: [
      'In the arid valley of Malhar, two neighboring farming families had engaged in a bitter feud over boundary stones for decades. Young Dev, who tended sheep along the dry canal, often heard angry shouts carrying across the dust.',
      'One quiet evening, Dev selected a hollow bamboo reed dried by the sun. With patient care, he burned six clean finger holes using a glowing iron needle, fashioning a rustic bansuri.',
      'As dusk fell and tensions rose over an irrigation gate, Dev placed the flute to his lips. He played Raag Yaman—notes so pure, melodious, and tranquil that birds paused their chirping and the hot desert wind seemed to soften.',
      'The quarreling elders stopped mid-argument. The soothing melody melted their longstanding bitterness. Before the stars appeared, the two farmers shook hands and agreed to share the canal water equally.'
    ],
    moral: 'Gentleness and art can dissolve conflicts where anger and arguments fail.',
    vocabulary: [
      { word: 'Feud', meaning: 'A prolonged and bitter quarrel or dispute between families.' },
      { word: 'Irrigation', meaning: 'The artificial supply of water to land or crops to help growth.' },
      { word: 'Tranquil', meaning: 'Calm, peaceful, and free from disturbance.' },
      { word: 'Reconcile', meaning: 'To restore friendly relations between opposing parties.' }
    ],
    questions: [
      {
        id: 'ENG-07-Q1',
        question: 'Why were the two neighboring families quarreling?',
        options: ['Over a stolen flock of sheep', 'Over boundary stones and irrigation water', 'Over the price of wheat', 'Over a lost dog'],
        correctIndex: 1,
        explanation: 'They had argued for years over land boundaries and water channels.'
      },
      {
        id: 'ENG-07-Q2',
        question: 'What instrument did Dev craft with dried bamboo?',
        options: ['A wooden drum', 'A rustic bansuri (flute)', 'A stringed sitar', 'A copper bell'],
        correctIndex: 1,
        explanation: 'Dev fashioned a flute by burning clean finger holes in a hollow reed.'
      },
      {
        id: 'ENG-07-Q3',
        question: 'Which classical melody did Dev perform at dusk?',
        options: ['Raag Yaman', 'Raag Bhairav', 'A marching tune', 'A lullaby for horses'],
        correctIndex: 0,
        explanation: 'Dev played the serene, tranquil notes of Raag Yaman.'
      },
      {
        id: 'ENG-07-Q4',
        question: 'What effect did the music have on the quarreling elders?',
        options: ['They shouted even louder', 'They chased Dev away', 'The melody softened their anger and led to a handshake', 'They ignored the sound'],
        correctIndex: 2,
        explanation: 'The melody melted away their long-standing grudges.'
      },
      {
        id: 'ENG-07-Q5',
        question: 'What peaceful agreement did the farmers reach?',
        options: ['To sell both farms', 'To share the canal water equally', 'To build a tall brick wall', 'To fight in court'],
        correctIndex: 1,
        explanation: 'They agreed to share the vital canal water cooperatively.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'In the arid valley of Malhar, two neighboring farming families had engaged in a bitter feud...'
  },
  {
    id: 'ENG-08',
    title: 'Kavya and the Lost Library Book',
    language: 'English',
    themeColor: 'from-purple-600 to-pink-700',
    category: 'Honesty & Integrity',
    classRecommendation: 'Classes 2–5',
    summary: 'When a rare storybook gets slightly rain-splashed, Kavya chooses transparency and repairs it with bookbinder skills.',
    content: [
      'Kavya loved books more than toys. When her school librarian, Mrs. Fernandes, entrusted her with the century-old illustrated edition of "Fables of the Deccan," Kavya treated it like pure gold.',
      'However, on her walk home, an unexpected gust blew her umbrella sideways, allowing several fat raindrops to speckle the cover and warp three corner pages. Kavya\'s stomach fluttered with anxiety.',
      'A friend advised, "Just slip it onto the return shelf quietly when the teacher is busy; no one will know it was you." But Kavya shook her head firmly. "Hiding an accident is the same as telling a lie," she said.',
      'The next morning, Kavya carried the book straight to Mrs. Fernandes, explained what occurred, and brought along rice paper and flat pressing boards. Touched by Kavya\'s honesty and initiative, the librarian taught her the delicate art of vintage book conservation.'
    ],
    moral: 'Admitting a mistake with honesty and offering a solution earns deep respect and trust.',
    vocabulary: [
      { word: 'Entrusted', meaning: 'Assigned the responsibility for something valuable to someone.' },
      { word: 'Warp', meaning: 'Become bent or twisted out of shape as a result of dampness.' },
      { word: 'Anxiety', meaning: 'A feeling of worry, nervousness, or unease.' },
      { word: 'Conservation', meaning: 'The preservation and careful repair of precious objects.' }
    ],
    questions: [
      {
        id: 'ENG-08-Q1',
        question: 'Which rare book was Kavya entrusted with by the librarian?',
        options: ['A modern comic book', 'A century-old illustrated edition of Fables of the Deccan', 'A math textbook', 'A foreign dictionary'],
        correctIndex: 1,
        explanation: 'She was lent a vintage copy of Deccan fables.'
      },
      {
        id: 'ENG-08-Q2',
        question: 'How did the book get damaged?',
        options: ['A glass of milk spilled on it', 'A puppy chewed the spine', 'Wind blew the umbrella and raindrops warped the pages', 'It was dropped in a mud puddle'],
        correctIndex: 2,
        explanation: 'Sudden rain-splashes dampened the corner pages.'
      },
      {
        id: 'ENG-08-Q3',
        question: 'What dishonest advice did Kavya’s friend offer?',
        options: ['To throw the book away', 'To slip it secretly onto the shelf so no one notices', 'To blame another classmate', 'To buy a counterfeit copy'],
        correctIndex: 1,
        explanation: 'Her friend suggested returning it secretly without confessing.'
      },
      {
        id: 'ENG-08-Q4',
        question: 'What reason did Kavya give for refusing to hide the damage?',
        options: ['She feared getting expelled', 'Hiding an accident is the same as telling a lie', 'She wanted an award', 'Her parents would find out'],
        correctIndex: 1,
        explanation: 'Kavya believed hiding truth is equal to deception.'
      },
      {
        id: 'ENG-08-Q5',
        question: 'What positive reward did Mrs. Fernandes give Kavya for her honesty?',
        options: ['A full refund of school fees', 'She taught Kavya the art of vintage book conservation', 'She appointed her class monitor', 'She excused all homework'],
        correctIndex: 1,
        explanation: 'The librarian rewarded her integrity by teaching her book restoration techniques.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'Kavya loved books more than toys. When her school librarian, Mrs. Fernandes, entrusted her...'
  },
  {
    id: 'ENG-09',
    title: 'The Robot with a Gardener’s Heart',
    language: 'English',
    themeColor: 'from-emerald-600 to-green-900',
    category: 'Technology & Compassion',
    classRecommendation: 'Classes 4–7',
    summary: 'Model-X, a recycling robot in a bustling metropolis, discovers that nurturing delicate seedlings creates joy that no factory can build.',
    content: [
      'In Neo-City, the automated sanitation robot Model-X spent ten hours a day compressing discarded cans and aluminum foils. Programmed strictly for mechanical sorting, it never looked up at the grey sky.',
      'One morning, while sorting through a bin of rubble near an old demolition site, its optical sensor detected a tiny green sprout pushing its way through cracked asphalt. A small daisy was struggling for sunlight.',
      'Instead of pulverizing the sprout as debris, Model-X reprogrammed its subroutines. Every day at sunrise, it tilted its moisture-collection valve to sprinkle fresh dew over the flower and shielded it from harsh exhaust fumes with its metallic forearm.',
      'Within months, neighboring birds brought seeds, and the lonely concrete lot transformed into an urban oasis. Citizens paused their rush to admire the garden, reminded by a robot that kindness is the greatest algorithm of all.'
    ],
    moral: 'Caring for living nature brings beauty and purpose to even the most mechanical lives.',
    vocabulary: [
      { word: 'Metropolis', meaning: 'A very large, busy capital or city.' },
      { word: 'Pulverizing', meaning: 'Reducing to fine particles or completely crushing.' },
      { word: 'Subroutines', meaning: 'Specific sets of computer instructions within a larger program.' },
      { word: 'Oasis', meaning: 'A fertile, peaceful spot in an otherwise barren landscape.' }
    ],
    questions: [
      {
        id: 'ENG-09-Q1',
        question: 'What was Model-X\'s standard daily duty in Neo-City?',
        options: ['Flying passenger drones', 'Compressing discarded cans and sorting scrap metal', 'Cooking meals in restaurants', 'Directing highway traffic'],
        correctIndex: 1,
        explanation: 'Model-X was a municipal scrap sorting robot.'
      },
      {
        id: 'ENG-09-Q2',
        question: 'What did Model-X discover pushing through the cracked asphalt?',
        options: ['A buried gold coin', 'A tiny living green sprout of a daisy', 'A broken circuit board', 'An underground water pipe'],
        correctIndex: 1,
        explanation: 'It detected a brave little flower seedling growing in the concrete.'
      },
      {
        id: 'ENG-09-Q3',
        question: 'How did Model-X care for the little flower?',
        options: ['By digging it up and putting it in a box', 'By sprinkling dew and shielding it from toxic exhaust fumes', 'By painting it green', 'By taking it to a laboratory'],
        correctIndex: 1,
        explanation: 'It used its condensation valve to water it and sheltered it with its arm.'
      },
      {
        id: 'ENG-09-Q4',
        question: 'What did the lonely demolition lot eventually become?',
        options: ['A parking lot for trucks', 'A lush urban oasis with flowers and birds', 'A giant battery factory', 'A garbage dump'],
        correctIndex: 1,
        explanation: 'It blossomed into a green garden sanctuary.'
      },
      {
        id: 'ENG-09-Q5',
        question: 'What lesson did the citizens of Neo-City take from the robot?',
        options: ['Robots should never be repaired', 'Kindness and nurturing nature are the highest virtues', 'Metal is stronger than plants', 'Concrete lots should be demolished'],
        correctIndex: 1,
        explanation: 'The robot showed that compassion and nature bring true purpose to life.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'In Neo-City, the automated sanitation robot Model-X spent ten hours a day...'
  },
  {
    id: 'ENG-10',
    title: 'The Young Astronomer of Ladakh',
    language: 'English',
    themeColor: 'from-blue-900 to-slate-900',
    category: 'Space & Exploration',
    classRecommendation: 'Classes 5–8',
    summary: 'Tenzing uses the crystal-clear night skies of Hanle to map a new asteroid, proving perseverance from remote areas can touch the stars.',
    content: [
      'In the high-altitude village of Hanle in Ladakh, the air is thin, crisp, and so pollution-free that the Milky Way looks like a glittering silver river poured across indigo velvet. Fourteen-year-old Tenzing spent his nights peering through a second-hand telescope given by a visiting scientist.',
      'Every night, while wrapping himself in warm yak-wool blankets against sub-zero winds, Tenzing meticulously sketched star coordinates in his gridded logbook. While classmates slept, he tracked planetary orbits and occultations.',
      'On a freezing October night, Tenzing spotted a faint pinpoint of light that was not listed on any sky atlas. Over seven consecutive nights, he calculated its velocity and verified that it moved against the background stars.',
      'He mailed his mathematical coordinates to the Indian Space Research Organisation observatory. Two weeks later, official confirmation arrived: Tenzing had successfully tracked a previously unrecorded near-Earth asteroid. His story inspired youth across the Himalayas to gaze upward and aim for the cosmos.'
    ],
    moral: 'Unwavering passion and meticulous dedication can achieve extraordinary discoveries anywhere on Earth.',
    vocabulary: [
      { word: 'High-altitude', meaning: 'Located at a great height above sea level.' },
      { word: 'Meticulously', meaning: 'Showing great attention to detail; very careful and precise.' },
      { word: 'Occultation', meaning: 'An event where one celestial body passes in front of another.' },
      { word: 'Asteroid', meaning: 'A small rocky body orbiting the Sun.' }
    ],
    questions: [
      {
        id: 'ENG-10-Q1',
        question: 'Why are the skies of Hanle in Ladakh ideal for astronomy?',
        options: ['Because it rains all year', 'The air is thin, crisp, and free from light pollution', 'Because it has the hottest weather', 'Because clouds block the sun during the day'],
        correctIndex: 1,
        explanation: 'High elevation and clean atmosphere make Hanle one of the best stargazing sites on Earth.'
      },
      {
        id: 'ENG-10-Q2',
        question: 'What instrument did Tenzing use for his observations?',
        options: ['A camera phone', 'A second-hand telescope gifted by a scientist', 'A pair of swimming goggles', 'A radar dish'],
        correctIndex: 1,
        explanation: 'He observed through a gifted optical telescope.'
      },
      {
        id: 'ENG-10-Q3',
        question: 'How did Tenzing confirm that the faint light was moving?',
        options: ['By asking his neighbors', 'By tracking its coordinates over seven consecutive nights', 'By guessing its color', 'By checking a television news report'],
        correctIndex: 1,
        explanation: 'He mapped its shifting position relative to static stars over a week.'
      },
      {
        id: 'ENG-10-Q4',
        question: 'To which organization did Tenzing send his calculated coordinates?',
        options: ['The local police station', 'The space research observatory', 'A movie production studio', 'A toy store'],
        correctIndex: 1,
        explanation: 'He forwarded the astronomical coordinates to the professional space observatory.'
      },
      {
        id: 'ENG-10-Q5',
        question: 'What did the observatory officially verify?',
        options: ['That it was a passing airplane', 'That Tenzing discovered a previously unrecorded asteroid', 'That the telescope lens was cracked', 'That it was a shooting star'],
        correctIndex: 1,
        explanation: 'They verified his discovery of an uncataloged asteroid.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'In the high-altitude village of Hanle in Ladakh, the air is thin, crisp, and pure...'
  },
  {
    id: 'ENG-11',
    title: 'The Baker of Cinnamon Smiles',
    language: 'English',
    themeColor: 'from-amber-700 to-yellow-800',
    category: 'Kindness & Community',
    classRecommendation: 'Classes 2–4',
    summary: 'Grandpa Peter bakes round cinnamon buns with warm smiling faces to lift the spirits of anyone having a dreary morning.',
    content: [
      'Every morning at dawn, the scent of caramelized cinnamon and baked wheat drifted from the bakery at the corner of Maple Lane. Grandpa Peter didn\'t just bake bread; he baked encouragement.',
      'Whenever he saw someone walking with slumped shoulders—whether a student nervous about exams or a postal carrier drenched in rain—Peter would hand them a warm, golden cinnamon bun with two raisin eyes and a happy frosting smile.',
      '"Eat this warm," Peter would whisper with a twinkle in his eye. "A warm meal and a sincere smile can melt away the heaviest morning cloud."',
      'Years later, when Peter fell ill, he awoke one chilly morning to a knock on the bakery door. The entire neighborhood had gathered outside, bearing homemade soups, fresh flowers, and thousands of little paper smiles to nurse him back to health.'
    ],
    moral: 'The love and compassion you pour into your community will always return to you multiplied.',
    vocabulary: [
      { word: 'Caramelized', meaning: 'Sugar heated until it turns golden-brown and sweet.' },
      { word: 'Slumped', meaning: 'Drooping or slouching with low energy or sadness.' },
      { word: 'Sincere', meaning: 'Genuine, honest, and truly felt from the heart.' },
      { word: 'Multiply', meaning: 'To increase greatly in number or quantity.' }
    ],
    questions: [
      {
        id: 'ENG-11-Q1',
        question: 'What special touch did Grandpa Peter put on his cinnamon buns?',
        options: ['Chocolate chips in the shape of cars', 'Two raisin eyes and a frosting smile', 'Hot chili pepper flakes', 'Silver edible glitter'],
        correctIndex: 1,
        explanation: 'He decorated the buns with raisin eyes and happy frosting smiles.'
      },
      {
        id: 'ENG-11-Q2',
        question: 'To whom did Peter offer these warm buns?',
        options: ['Only rich customers with golden coins', 'Anyone who looked weary, nervous, or disheartened', 'Only relatives of his family', 'Nobody; he ate them all himself'],
        correctIndex: 1,
        explanation: 'He freely gifted them to anyone needing an emotional lift.'
      },
      {
        id: 'ENG-11-Q3',
        question: 'What did Peter believe a warm meal and a smile could do?',
        options: ['Make people buy more bread', 'Melt away the heaviest morning cloud', 'Prevent rain from falling', 'Turn night into day'],
        correctIndex: 1,
        explanation: 'He believed simple warmth could dispel gloom and anxiety.'
      },
      {
        id: 'ENG-11-Q4',
        question: 'What happened when Grandpa Peter fell ill?',
        options: ['His bakery went bankrupt', 'The neighbors gathered to bring him soup, flowers, and care', 'He had to leave Maple Lane', 'No one noticed his absence'],
        correctIndex: 1,
        explanation: 'The entire grateful community returned to nurse and comfort him.'
      },
      {
        id: 'ENG-11-Q5',
        question: 'What is the enduring lesson of the bakery?',
        options: ['Baking bread is easy', 'Kindness given freely returns multiplied in times of need', 'Always charge full price', 'Never open early in the morning'],
        correctIndex: 1,
        explanation: 'Selfless generosity establishes an unbreakable community bond.'
      }
    ],
    estimatedReadMinutes: 3,
    audioSampleScript: 'Every morning at dawn, the scent of caramelized cinnamon and baked wheat drifted...'
  },
  {
    id: 'ENG-12',
    title: 'The Coral Reef Guardians',
    language: 'English',
    themeColor: 'from-teal-600 to-blue-800',
    category: 'Environment & Ocean',
    classRecommendation: 'Classes 4–7',
    summary: 'Two young islanders initiate a reef restoration project using discarded coconut shells to help baby corals grow.',
    content: [
      'On the turquoise shores of the Lakshadweep archipelago, siblings Sameer and Zara spent their weekends snorkeling along the vibrant coral reefs. Lately, however, they noticed bleached, pale corals where schools of clownfish and parrotfish used to play.',
      'Their marine biologist aunt explained that ocean warming and plastic debris were choking delicate coral polyps. Corals needed sturdy, non-toxic anchor points to take root and reproduce.',
      'Inspired by traditional island wisdom, Sameer and Zara gathered discarded coconut shells, cleaned them thoroughly, drilled miniature anchor holes, and tied tiny healthy coral fragments onto the porous shells.',
      'They placed these biodegradable nurseries on the barren reef floor. Within six months, vibrant pink and emerald coral polyps had spread over the shells, restoring shelter for hundreds of baby marine creatures.'
    ],
    moral: 'Innovative eco-friendly solutions can revive damaged ecosystems and safeguard ocean life.',
    vocabulary: [
      { word: 'Archipelago', meaning: 'A group or cluster of numerous islands.' },
      { word: 'Bleached', meaning: 'Whitened or deprived of natural color due to environmental stress.' },
      { word: 'Biodegradable', meaning: 'Capable of being decomposed naturally by biological microorganisms.' },
      { word: 'Polyp', meaning: 'A tiny, soft-bodied marine organism that forms the basis of coral reefs.' }
    ],
    questions: [
      {
        id: 'ENG-12-Q1',
        question: 'Where did siblings Sameer and Zara live?',
        options: ['In a desert oasis', 'On the shores of Lakshadweep archipelago', 'Near the Arctic circle', 'In a mountain pine forest'],
        correctIndex: 1,
        explanation: 'They lived in the coral island territory of Lakshadweep.'
      },
      {
        id: 'ENG-12-Q2',
        question: 'What troubling sight did they observe during their dives?',
        options: ['Shark invasions', 'Bleached, pale corals and loss of marine fish', 'Sunken pirate ships', 'Underwater volcanoes'],
        correctIndex: 1,
        explanation: 'They witnessed coral bleaching and diminishing fish populations.'
      },
      {
        id: 'ENG-12-Q3',
        question: 'What eco-friendly material did the siblings repurpose to anchor coral fragments?',
        options: ['Old rubber car tires', 'Discarded and cleaned coconut shells', 'Plastic soda bottles', 'Concrete bricks'],
        correctIndex: 1,
        explanation: 'They used natural, biodegradable coconut husks with drilled anchor holes.'
      },
      {
        id: 'ENG-12-Q4',
        question: 'What happened to the nursery after six months?',
        options: ['Storms washed everything away', 'Vibrant pink and emerald polyps spread and sheltered baby sea creatures', 'The coconut shells dissolved too quickly', 'Fish refused to swim near them'],
        correctIndex: 1,
        explanation: 'New coral colonies successfully flourished over the eco-friendly structures.'
      },
      {
        id: 'ENG-12-Q5',
        question: 'What key message does this marine project highlight?',
        options: ['Humans cannot help oceans', 'Innovative eco-friendly thinking can heal delicate ecosystems', 'Coconut shells are useless', 'Coral reefs grow better without fish'],
        correctIndex: 1,
        explanation: 'Creative environmental conservation can restore natural marine habitats.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'On the turquoise shores of the Lakshadweep archipelago, siblings Sameer and Zara...'
  },
  {
    id: 'ENG-13',
    title: 'The Midnight Express to Tomorrow',
    language: 'English',
    themeColor: 'from-slate-700 to-indigo-950',
    category: 'Imagination & Time',
    classRecommendation: 'Classes 5–8',
    summary: 'A daydreaming girl boards a magical antique train and learns that today’s small habits shape tomorrow’s grand destinations.',
    content: [
      'Maya had a habit of putting off her homework and violin practice, often telling herself, "I have plenty of time tomorrow." One evening at midnight, she heard a resonant train whistle outside her second-story bedroom window.',
      'Slipping out onto the balcony, she was stunned to see a silver steam engine hovering above the garden path. The conductor, wearing a pocket watch decorated with lunar phases, tipped his cap. "All aboard the Midnight Express to Tomorrow!"',
      'Maya boarded the plush train car. Looking out the window, she saw three different stations: "Procrastination Plain," where dusty projects sat half-finished; "Instant Regret Junction"; and "Mastery Valley," where musicians and engineers smiled as they perfected their craft through daily practice.',
      'The conductor looked at Maya. "The train does not choose the track, little passenger. Every small effort you complete today lays down the rails for your journey to Mastery Valley." Maya woke up the next morning with renewed energy, sitting down eagerly at her desk to practice her violin.'
    ],
    moral: 'The future is not a mystery that happens to us; it is built by the small, disciplined steps we take today.',
    vocabulary: [
      { word: 'Procrastination', meaning: 'The act of delaying or postponing something that needs to be done.' },
      { word: 'Resonant', meaning: 'Deep, clear, and ringing in sound.' },
      { word: 'Mastery', meaning: 'Comprehensive skill or exceptional expertise in a subject or craft.' },
      { word: 'Disciplined', meaning: 'Showing a controlled and consistent approach to training or work.' }
    ],
    questions: [
      {
        id: 'ENG-13-Q1',
        question: 'What problematic habit was holding Maya back in her daily routine?',
        options: ['Waking up too early', 'Procrastinating and delaying practice until "tomorrow"', 'Reading too many adventure books', 'Playing too much football'],
        correctIndex: 1,
        explanation: 'Maya continually put off her duties with the excuse of doing them tomorrow.'
      },
      {
        id: 'ENG-13-Q2',
        question: 'What magical vehicle arrived outside Maya\'s bedroom balcony?',
        options: ['A flying carpet', 'A silver steam engine called the Midnight Express to Tomorrow', 'A golden submarine', 'A space rocket'],
        correctIndex: 1,
        explanation: 'A silver train with an enigmatic conductor appeared outside her window.'
      },
      {
        id: 'ENG-13-Q3',
        question: 'What was visible at "Procrastination Plain"?',
        options: ['Stacks of gold coins', 'Dusty, abandoned projects left half-finished', 'Delicious ice creams', 'A grand Olympic stadium'],
        correctIndex: 1,
        explanation: 'Unfinished work and neglected dreams gathered dust there.'
      },
      {
        id: 'ENG-13-Q4',
        question: 'How did people reach "Mastery Valley" according to the conductor?',
        options: ['By winning a lucky lottery ticket', 'By laying rails of consistent, daily effort in the present', 'By doing nothing and wishing hard', 'By sleeping twelve hours a day'],
        correctIndex: 1,
        explanation: 'Consistent daily effort forms the track to skill and accomplishment.'
      },
      {
        id: 'ENG-13-Q5',
        question: 'What did Maya eagerly do upon waking up the next morning?',
        options: ['Went back to sleep for five more hours', 'Sat down with focus to practice her violin and study', 'Threw her violin in the closet', 'Ran away to find the train'],
        correctIndex: 1,
        explanation: 'She took immediate action with a purposeful mindset.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'Maya had a habit of putting off her homework and violin practice...'
  },
  {
    id: 'ENG-14',
    title: 'The Weaver of Golden Thread',
    language: 'English',
    themeColor: 'from-yellow-600 to-amber-800',
    category: 'Heritage & Craft',
    classRecommendation: 'Classes 4–7',
    summary: 'Young Ananya learns the heritage of handloom weaving in Varanasi, discovering that patience creates timeless art.',
    content: [
      'In the bustling holy city of Varanasi, the rhythmic clack-clack of wooden handlooms resonated down narrow stone alleys. Ten-year-old Ananya loved watching her father weave shimmering silk sarees adorned with intricate gold zari brocades.',
      'Impatient with modern life, Ananya asked, "Baba, power looms in the big mills can produce dozens of sarees in a single afternoon. Why do you spend six long weeks weaving just one piece by hand?"',
      'Her father guided her small hands onto the polished wooden shuttle. "Feel this warp and weft, beta. A machine weaves cloth with speed, but an artisan weaves with prayer, soul, and heritage. In each gold floral motif, we weave the stories of our ancestors."',
      'When an international textile exhibition awarded her father’s handloom saree the grand prize, Ananya understood that authentic craftsmanship transcends speed, carrying irreplaceable cultural warmth.'
    ],
    moral: 'True craftsmanship and heritage value depth, soul, and patience over rushed mass production.',
    vocabulary: [
      { word: 'Handloom', meaning: 'A manually operated wooden loom for weaving fabric.' },
      { word: 'Zari', meaning: 'Traditional fine gold or silver thread used in Indian brocades.' },
      { word: 'Artisan', meaning: 'A worker in a skilled trade, especially one that involves making things by hand.' },
      { word: 'Transcends', meaning: 'Goes beyond or rises above usual limits.' }
    ],
    questions: [
      {
        id: 'ENG-14-Q1',
        question: 'In which famous Indian city does Ananya’s family practice handloom weaving?',
        options: ['Mumbai', 'Varanasi', 'Kolkata', 'Chennai'],
        correctIndex: 1,
        explanation: 'Varanasi is world-famous for its traditional handloom silk weaving heritage.'
      },
      {
        id: 'ENG-14-Q2',
        question: 'What question did Ananya ask her father about his work?',
        options: ['Why he didn’t sell vegetables instead', 'Why he spent weeks hand-weaving one piece when mills make dozens quickly', 'How much thread cost in the bazaar', 'Why looms were made of wood'],
        correctIndex: 1,
        explanation: 'She wondered why he chose slow artisanal craft over rapid industrial production.'
      },
      {
        id: 'ENG-14-Q3',
        question: 'What did her father say artisans pour into each handwoven piece?',
        options: ['Heavy chemical dyes', 'Soul, heritage, and ancestral stories', 'Plastic sparkles', 'Paper cutouts'],
        correctIndex: 1,
        explanation: 'Handcrafted textiles carry the soul, history, and deliberate art of the weaver.'
      },
      {
        id: 'ENG-14-Q4',
        question: 'What prestigious honor was awarded to her father’s saree?',
        options: ['It was exhibited in a museum basement', 'It won the grand prize at an international textile exhibition', 'It was sold to buy modern machines', 'It was declared too delicate to wear'],
        correctIndex: 1,
        explanation: 'The saree captured top honors at an international craft exhibition.'
      },
      {
        id: 'ENG-14-Q5',
        question: 'What valuable truth did Ananya realize?',
        options: ['Speed is the only thing that matters in art', 'Artisanal patience and cultural heritage possess timeless worth', 'Machines will soon replace all clothes', 'Weaving is too difficult to learn'],
        correctIndex: 1,
        explanation: 'Masterful heritage craft has enduring depth and value.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'In the bustling holy city of Varanasi, the rhythmic clack-clack of wooden handlooms...'
  },
  {
    id: 'ENG-15',
    title: 'The Great Sparrow Sanctuary',
    language: 'English',
    themeColor: 'from-emerald-700 to-teal-900',
    category: 'Wildlife & Care',
    classRecommendation: 'Classes 2–5',
    summary: 'A residential apartment colony comes together to build nest boxes and fresh water bowls, welcoming back beloved house sparrows.',
    content: [
      'Rahul noticed that while pigeons and crows were abundant around his apartment complex, the cheerful chirping of tiny house sparrows had vanished completely. His grandmother reminisced about how dozens of sparrows once nested in eaves and balcony flowerpots.',
      'Researching the cause, Rahul discovered that modern glass buildings lacked nesting cavities, while chemical gardening had reduced the small caterpillars that baby sparrows eat.',
      'Rahul did not sit back idly. He organized the "Balcony Wildlife Club" with children from all twelve floors. Using recycled shoeboxes, wooden fruit crates, and earthen bowls, they constructed sixty weather-proof bird shelters and filled them with millet seeds and fresh water.',
      'Within three months, three pairs of house sparrows arrived, took up residence, and raised joyful fledglings. The colony resonated with cheerful songs once more, proving that cities can coexist with wild neighbors when we make room for them.'
    ],
    moral: 'Even in concrete cities, simple compassionate acts can restore space and happiness for wild creatures.',
    vocabulary: [
      { word: 'Reminisced', meaning: 'Indulged in enjoyable memories of past events.' },
      { word: 'Eaves', meaning: 'The lower edges of a roof that project over the wall of a building.' },
      { word: 'Fledglings', meaning: 'Young birds that have just developed wing feathers to fly.' },
      { word: 'Coexist', meaning: 'Live or exist together at the same time or in the same place peacefully.' }
    ],
    questions: [
      {
        id: 'ENG-15-Q1',
        question: 'Which cheerful bird was missing from Rahul\'s apartment neighborhood?',
        options: ['House sparrows', 'Pigeons', 'Crows', 'Seagulls'],
        correctIndex: 0,
        explanation: 'The tiny house sparrow had disappeared from modern city buildings.'
      },
      {
        id: 'ENG-15-Q2',
        question: 'Why had sparrows disappeared according to Rahul\'s research?',
        options: ['They migrated to cold poles forever', 'Glass buildings lacked nesting cavities and insects were depleted', 'Cats had eaten all of them', 'They stopped liking trees'],
        correctIndex: 1,
        explanation: 'Lack of safe nesting holes and natural food had driven them away.'
      },
      {
        id: 'ENG-15-Q3',
        question: 'What initiative did Rahul organize with his building friends?',
        options: ['A video game tournament', 'The Balcony Wildlife Club building bird boxes and water stations', 'A protest to ban balconies', 'A pigeon feeding competition'],
        correctIndex: 1,
        explanation: 'They formed a club and installed 60 sheltered nest boxes and water bowls.'
      },
      {
        id: 'ENG-15-Q4',
        question: 'What happy event occurred three months later?',
        options: ['The bird boxes blew away in a storm', 'Sparrows moved in and raised healthy fledglings', 'The building was repainted', 'All sparrows flew away to forests'],
        correctIndex: 1,
        explanation: 'Sparrows returned, nested, and chirped happily with new chicks.'
      },
      {
        id: 'ENG-15-Q5',
        question: 'What is the moral of the story?',
        options: ['Cities are meant only for humans and machines', 'With compassion and small modifications, cities can welcome wildlife', 'Birds should only live in zoos', 'Shoeboxes make bad nests'],
        correctIndex: 1,
        explanation: 'Thoughtful coexistence brings balance and joy back to our environment.'
      }
    ],
    estimatedReadMinutes: 4,
    audioSampleScript: 'Rahul noticed that while pigeons and crows were abundant around his apartment...'
  }
];
