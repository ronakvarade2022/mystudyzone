import { ClassLevel, QuizLevel, SubjectName } from '../../types';

export interface RawQuizSpec {
  text: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  topic: string;
  diagramEmoji?: string;
}

/**
 * Part 1 of the 560-Question Verified Curriculum Bank:
 * Covers 7 Subjects × 4 Levels × 10 Unique Questions = 280 Unique Questions:
 * 1. Mathematics
 * 2. English
 * 3. Hindi
 * 4. Marathi
 * 5. Science
 * 6. General Knowledge
 * 7. Social Studies
 */
export function getPart1SubjectQuestions(
  classLevel: ClassLevel,
  subject: SubjectName,
  level: QuizLevel
): RawQuizSpec[] | null {
  const c = parseInt(classLevel.replace('Class ', ''), 10) || 4;

  // ============================================================================
  // 1. MATHEMATICS — 40 Unique Questions (10 per Level, calibrated by Class c)
  // ============================================================================
  if (subject === 'Mathematics') {
    if (level === 1) {
      // LEVEL 1: EASY (10 Unique Questions)
      const a1 = 12 * c;
      const b1 = 8 * c;
      return [
        {
          text: `What is the sum of ${a1} + ${b1}?`,
          options: [`${a1 + b1 - 4}`, `${a1 + b1}`, `${a1 + b1 + 6}`, `${a1 + b1 + 10}`],
          correctIndex: 1,
          explanation: `Adding ${a1} and ${b1} gives ${a1 + b1}.`,
          topic: 'Addition Fundamentals'
        },
        {
          text: `Fill in the blank: The number that comes immediately after ${100 * c + 49} is _____.`,
          options: [`${100 * c + 48}`, `${100 * c + 50}`, `${100 * c + 51}`, `${100 * c + 59}`],
          correctIndex: 1,
          explanation: `The successor of ${100 * c + 49} is obtained by adding 1, which is ${100 * c + 50}.`,
          topic: 'Successors & Predecessors'
        },
        {
          text: `True or False: When 0 is added to any number, the sum remains the original number itself.`,
          options: ['True', 'False', 'The sum becomes 0', 'The sum doubles'],
          correctIndex: 0,
          explanation: 'By the Additive Identity Property, adding 0 to any number n always equals n.',
          topic: 'Properties of Addition'
        },
        {
          text: `In the number ${c}4,825, what is the place value of the digit 8?`,
          options: ['8', '80', '800', '8,000'],
          correctIndex: 2,
          explanation: 'The digit 8 is in the hundreds place, so its place value is 8 × 100 = 800.',
          topic: 'Place Value System'
        },
        {
          text: `Which of the following numbers is an EVEN number?`,
          options: [`${20 * c + 1}`, `${20 * c + 3}`, `${20 * c + 6}`, `${20 * c + 9}`],
          correctIndex: 2,
          explanation: `${20 * c + 6} ends in 6, which is divisible by 2 with no remainder.`,
          topic: 'Even and Odd Numbers'
        },
        {
          text: `Subtract ${5 * c} from ${18 * c}. What is the difference?`,
          options: [`${12 * c}`, `${13 * c}`, `${14 * c}`, `${15 * c}`],
          correctIndex: 1,
          explanation: `${18 * c} - ${5 * c} = ${13 * c}.`,
          topic: 'Subtraction Practice'
        },
        {
          text: `Complete the statement: A closed plane figure with 3 straight sides and 3 corners (vertices) is called a _____.`,
          options: ['Square', 'Triangle', 'Pentagon', 'Circle'],
          correctIndex: 1,
          explanation: 'A triangle is a 3-sided polygon with 3 vertices.',
          topic: 'Basic 2D Geometry'
        },
        {
          text: `A stationery box contains ${c + 4} packs of crayons with 10 crayons in each pack. How many crayons are there in total?`,
          options: [`${(c + 4) * 10 - 10}`, `${(c + 4) * 10}`, `${(c + 4) * 10 + 5}`, `${(c + 4) * 10 + 10}`],
          correctIndex: 1,
          explanation: `${c + 4} packs × 10 crayons per pack = ${(c + 4) * 10} crayons.`,
          topic: 'Multiplication by 10'
        },
        {
          text: `Look at the clock icon 🕘. How many minutes are there in 1 full hour?`,
          options: ['30 minutes', '60 minutes', '100 minutes', '24 minutes'],
          correctIndex: 1,
          diagramEmoji: '🕘',
          explanation: 'Every standard hour consists of exactly 60 minutes.',
          topic: 'Time Measurement'
        },
        {
          text: `Find the next number in the skip-counting pattern: ${5 * c}, ${5 * c + 5}, ${5 * c + 10}, ${5 * c + 15}, ___`,
          options: [`${5 * c + 18}`, `${5 * c + 20}`, `${5 * c + 25}`, `${5 * c + 30}`],
          correctIndex: 1,
          explanation: `Each term increases by 5: ${5 * c + 15} + 5 = ${5 * c + 20}.`,
          topic: 'Number Patterns'
        }
      ];
    }

    if (level === 2) {
      // LEVEL 2: MODERATE (10 Completely Different Questions)
      const len = 6 + c;
      const brd = 4 + c;
      return [
        {
          text: `A rectangular playground has a length of ${len} metres and a breadth of ${brd} metres. What is its perimeter?`,
          options: [`${len + brd} m`, `${2 * (len + brd)} m`, `${len * brd} m`, `${2 * len + brd} m`],
          correctIndex: 1,
          explanation: `Perimeter of a rectangle = 2 × (length + breadth) = 2 × (${len} + ${brd}) = ${2 * (len + brd)} m.`,
          topic: 'Perimeter of Polygons'
        },
        {
          text: `Fill in the blank: If ${7 * c} sweets are shared equally among 7 children, each child receives _____ sweets.`,
          options: [`${c - 1}`, `${c}`, `${c + 2}`, `${c * 2}`],
          correctIndex: 1,
          explanation: `Dividing ${7 * c} ÷ 7 equals ${c} sweets per child.`,
          topic: 'Division as Equal Sharing'
        },
        {
          text: `True or False: In the fraction 5/9, the numerator is 5 and the denominator is 9.`,
          options: ['True', 'False', '9 is the numerator', 'Both are denominators'],
          correctIndex: 0,
          explanation: 'In a fraction a/b, the top number (5) is the numerator and the bottom number (9) is the denominator.',
          topic: 'Fractions Terminology'
        },
        {
          text: `How many metres are there in ${c + 2} kilometres? (1 km = 1,000 m)`,
          options: [`${(c + 2) * 100} m`, `${(c + 2) * 1000} m`, `${(c + 2) * 10} m`, `${c + 200} m`],
          correctIndex: 1,
          explanation: `Since 1 kilometre = 1,000 metres, ${c + 2} km = ${(c + 2) * 1000} metres.`,
          topic: 'Metric Unit Conversion'
        },
        {
          text: `Which of these Roman numerals represents the number 50?`,
          options: ['X', 'L', 'C', 'V'],
          correctIndex: 1,
          explanation: 'In Roman numerals: V = 5, X = 10, L = 50, and C = 100.',
          topic: 'Roman Numerals'
        },
        {
          text: `Identify the INCORRECT multiplication fact from the list below:`,
          options: ['9 × 6 = 54', '8 × 7 = 56', '7 × 6 = 48', '6 × 6 = 36'],
          correctIndex: 2,
          explanation: '7 × 6 equals 42, not 48. Therefore "7 × 6 = 48" is incorrect.',
          topic: 'Multiplication Tables'
        },
        {
          text: `Complete the sentence: An angle that measures exactly 90 degrees is known as a _____ angle.`,
          options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
          correctIndex: 1,
          explanation: 'A 90° angle forms a square corner and is called a right angle.',
          topic: 'Types of Angles'
        },
        {
          text: `Meera bought 3 notebooks for ₹${20 * c} each and a geometry box for ₹${35 * c}. How much did she spend in total?`,
          options: [`₹${85 * c}`, `${95 * c}`, `₹${95 * c}`, `₹${105 * c}`].map((v, i) => i === 1 ? `₹${95 * c}` : i === 0 ? `₹${75 * c}` : v) as [string, string, string, string],
          correctIndex: 1,
          explanation: `Cost of 3 notebooks = 3 × ₹${20 * c} = ₹${60 * c}. Adding ₹${35 * c} gives ₹${95 * c}.`,
          topic: 'Money Word Problems'
        },
        {
          text: `Look at the 3D cube icon 🧊. How many flat square faces does a standard cube have?`,
          options: ['4 faces', '6 faces', '8 faces', '12 faces'],
          correctIndex: 1,
          diagramEmoji: '🧊',
          explanation: 'A cube has 6 equal square faces, 12 edges, and 8 vertices.',
          topic: '3D Solid Shapes'
        },
        {
          text: `What is the missing number in the multiplicative sequence: 3, 6, 12, 24, ___?`,
          options: ['36', '48', '30', '60'],
          correctIndex: 1,
          explanation: 'Each term is doubled (× 2): 24 × 2 = 48.',
          topic: 'Geometric Sequences'
        }
      ];
    }

    if (level === 3) {
      // LEVEL 3: DIFFICULT (10 Completely Different Questions)
      const side = 5 + c;
      return [
        {
          text: `What is the area of a square tile whose side length is ${side} cm?`,
          options: [`${4 * side} sq cm`, `${side * side} sq cm`, `${2 * side} sq cm`, `${side * side + 10} sq cm`],
          correctIndex: 1,
          explanation: `Area of a square = side × side = ${side} × ${side} = ${side * side} sq cm.`,
          topic: 'Area of Squares'
        },
        {
          text: `Fill in the blank: The Least Common Multiple (LCM) of 6 and 8 is _____.`,
          options: ['14', '24', '48', '16'],
          correctIndex: 1,
          explanation: 'Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... The smallest common multiple is 24.',
          topic: 'LCM & Multiples'
        },
        {
          text: `True or False: The number 2 is the only even prime number in mathematics.`,
          options: ['True', 'False', '4 is also prime', '1 is an even prime'],
          correctIndex: 0,
          explanation: '2 has only two factors (1 and 2); every other even number is divisible by 2 and therefore composite.',
          topic: 'Prime and Composite Numbers'
        },
        {
          text: `Convert the fraction 3/4 into its equivalent decimal representation:`,
          options: ['0.34', '0.75', '0.25', '0.80'],
          correctIndex: 1,
          explanation: '3 divided by 4 equals 0.75 (or 75/100).',
          topic: 'Fractions to Decimals'
        },
        {
          text: `Which of the following statements about triangles is ALWAYS true?`,
          options: [
            'The sum of interior angles of any triangle is 180°',
            'Every triangle has two right angles',
            'All triangles have equal sides',
            'The sum of angles of a triangle is 360°'
          ],
          correctIndex: 0,
          explanation: 'By the Angle Sum Property, the three interior angles of any triangle always add up to 180°.',
          topic: 'Triangle Angle Sum Property'
        },
        {
          text: `Which of the following numbers is NOT divisible by 9?`,
          options: ['108', '243', '356', '729'],
          correctIndex: 2,
          explanation: 'A number is divisible by 9 if the sum of its digits is a multiple of 9. For 356, 3 + 5 + 6 = 14, which is not divisible by 9.',
          topic: 'Divisibility Rules'
        },
        {
          text: `Complete the statement: Two lines in the same plane that never intersect and stay the same distance apart are called _____ lines.`,
          options: ['Perpendicular', 'Parallel', 'Intersecting', 'Transversal'],
          correctIndex: 1,
          explanation: 'Parallel lines (like railway tracks) never meet and remain equidistant.',
          topic: 'Lines and Angles'
        },
        {
          text: `A train travels at a constant speed of 60 km/h. How much distance will it cover in ${c} hours?`,
          options: [`${60 * c - 30} km`, `${60 * c} km`, `${60 * c + 40} km`, `${30 * c} km`],
          correctIndex: 1,
          explanation: `Distance = Speed × Time = 60 km/h × ${c} hours = ${60 * c} km.`,
          topic: 'Speed, Distance and Time'
        },
        {
          text: `Look at the bar chart icon 📊. What is the arithmetic mean (average) of the five numbers: 10, 15, 20, 25, and 30?`,
          options: ['18', '20', '22', '25'],
          correctIndex: 1,
          diagramEmoji: '📊',
          explanation: 'Sum = 10 + 15 + 20 + 25 + 30 = 100. Average = 100 ÷ 5 = 20.',
          topic: 'Averages & Data Handling'
        },
        {
          text: `If 4 identical storybooks cost ₹${40 * c}, what is the cost of 7 such storybooks?`,
          options: [`₹${60 * c}`, `₹${70 * c}`, `₹${80 * c}`, `₹${75 * c}`],
          correctIndex: 1,
          explanation: `By the unitary method, 1 book costs ₹${40 * c} ÷ 4 = ₹${10 * c}. So 7 books cost 7 × ₹${10 * c} = ₹${70 * c}.`,
          topic: 'Unitary Method'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    const xVal = c + 4;
    return [
      {
        text: `Solve the linear equation for x: 5x - 8 = ${5 * xVal - 8}`,
        options: [`x = ${xVal - 2}`, `x = ${xVal}`, `x = ${xVal + 2}`, `x = ${xVal + 5}`],
        correctIndex: 1,
        explanation: `Adding 8 to both sides gives 5x = ${5 * xVal}. Dividing by 5 gives x = ${xVal}.`,
        topic: 'Linear Equations'
      },
      {
        text: `Fill in the blank: The Highest Common Factor (HCF) of 36 and 48 is _____.`,
        options: ['6', '12', '18', '24'],
        correctIndex: 1,
        explanation: '36 = 12 × 3 and 48 = 12 × 4. Thus, 12 is the greatest common divisor (HCF).',
        topic: 'HCF & Prime Factorization'
      },
      {
        text: `True or False: In a right-angled triangle with legs 3 cm and 4 cm, the hypotenuse measures 5 cm.`,
        options: ['True', 'False', 'The hypotenuse is 7 cm', 'The hypotenuse is 6 cm'],
        correctIndex: 0,
        explanation: 'By Pythagoras Theorem, c² = 3² + 4² = 9 + 16 = 25, so c = √25 = 5 cm.',
        topic: 'Pythagoras Theorem'
      },
      {
        text: `Express the ratio 45 : 60 in its simplest irreducible form:`,
        options: ['2 : 3', '3 : 4', '4 : 5', '5 : 6'],
        correctIndex: 1,
        explanation: 'Dividing both terms by their HCF (15) gives 45 ÷ 15 : 60 ÷ 15 = 3 : 4.',
        topic: 'Ratios and Proportions'
      },
      {
        text: `If a school bag marked at ₹1,200 is sold at a 20% discount, what is its final selling price?`,
        options: ['₹900', '₹960', '₹1,000', '₹1,040'],
        correctIndex: 1,
        explanation: 'Discount = 20% of ₹1,200 = ₹240. Selling price = ₹1,200 - ₹240 = ₹960.',
        topic: 'Percentages & Discount'
      },
      {
        text: `Identify the INCORRECT exponent rule statement below:`,
        options: ['2³ × 2² = 2⁵', '5⁰ = 1', '3² + 3² = 3⁴', '(10²)³ = 10⁶'],
        correctIndex: 2,
        explanation: '3² + 3² = 9 + 9 = 18, whereas 3⁴ = 81. Therefore "3² + 3² = 3⁴" is incorrect.',
        topic: 'Laws of Exponents'
      },
      {
        text: `Complete the statement: The distance around the circular boundary of a circle is called its _____.`,
        options: ['Diameter', 'Circumference', 'Chord', 'Radius'],
        correctIndex: 1,
        explanation: 'The perimeter of a circle is called its circumference (C = 2πr).',
        topic: 'Circle Geometry'
      },
      {
        text: `Evaluate the integer expression: (-18) + (+25) - (-7) = ?`,
        options: ['0', '14', '-14', '36'],
        correctIndex: 1,
        explanation: '(-18) + 25 = 7, and 7 - (-7) = 7 + 7 = 14.',
        topic: 'Operations on Integers'
      },
      {
        text: `Look at the pie chart icon 🥧. A sector with a central angle of 72° represents what percentage of the whole circle (360°)?`,
        options: ['15%', '20%', '25%', '30%'],
        correctIndex: 1,
        diagramEmoji: '🥧',
        explanation: '(72° ÷ 360°) × 100% = (1/5) × 100% = 20%.',
        topic: 'Pie Charts & Central Angles'
      },
      {
        text: `Find the next term in the square-number series: 1, 4, 9, 16, 25, 36, ___`,
        options: ['42', '49', '48', '64'],
        correctIndex: 1,
        explanation: 'The sequence represents consecutive perfect squares (1², 2², 3², 4², 5², 6²). The 7th square is 7² = 49.',
        topic: 'Square Numbers & Series'
      }
    ];
  }

  // ============================================================================
  // 2. ENGLISH — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'English') {
    if (level === 1) {
      return [
        {
          text: `Identify the noun in the sentence: "The golden sun shines brightly."`,
          options: ['Golden', 'Sun', 'Shines', 'Brightly'],
          correctIndex: 1,
          explanation: '"Sun" is a naming word (noun), while "golden" is an adjective and "shines" is a verb.',
          topic: 'Nouns Identification'
        },
        {
          text: `Fill in the blank with the correct article: "Riya ate _____ honest meal and read _____ storybook."`,
          options: ['a, a', 'an, a', 'the, an', 'a, an'],
          correctIndex: 1,
          explanation: '"Honest" begins with a silent "h" (vowel sound), so it takes "an"; "storybook" begins with a consonant sound, taking "a".',
          topic: 'Articles (A, An, The)'
        },
        {
          text: `True or False: The plural form of the noun "Mouse" is "Mice".`,
          options: ['True', 'False', 'It is Mouses', 'It is Micees'],
          correctIndex: 0,
          explanation: '"Mouse" is an irregular noun whose plural form is "Mice".',
          topic: 'Singular and Plural Nouns'
        },
        {
          text: `Which word is the exact opposite (antonym) of "Brave"?`,
          options: ['Bold', 'Cowardly', 'Strong', 'Heroic'],
          correctIndex: 1,
          explanation: '"Brave" means courageous; its opposite is "Cowardly" (or timid).',
          topic: 'Antonyms'
        },
        {
          text: `Choose the sentence with correct punctuation and capitalization:`,
          options: [
            'india is a beautiful country.',
            'India is a beautiful country.',
            'India is a Beautiful Country?',
            'india Is A Beautiful Country!'
          ],
          correctIndex: 1,
          explanation: 'A declarative sentence starts with a capital letter for the proper noun "India" and ends with a full stop.',
          topic: 'Capitalization & Punctuation'
        },
        {
          text: `Spot the INCORRECTLY spelled word among the following:`,
          options: ['Calendar', 'Mountain', 'Tommorow', 'Library'],
          correctIndex: 2,
          explanation: 'The correct spelling has one "m" and two "r"s: "Tomorrow".',
          topic: 'Spelling Mastery'
        },
        {
          text: `Complete the sentence with the correct pronoun: "Aarav and I are classmates. _____ study together."`,
          options: ['He', 'We', 'They', 'Us'],
          correctIndex: 1,
          explanation: '"Aarav and I" is a first-person plural subject, replaced by the pronoun "We".',
          topic: 'Personal Pronouns'
        },
        {
          text: `What is the simple past tense of the verb "Write"?`,
          options: ['Writed', 'Wrote', 'Written', 'Writing'],
          correctIndex: 1,
          explanation: '"Write" is an irregular verb; its simple past tense is "Wrote".',
          topic: 'Action Verbs & Past Tense'
        },
        {
          text: `Look at the lion icon 🦁. What is a group of lions called?`,
          options: ['A herd of lions', 'A pride of lions', 'A flock of lions', 'A swarm of lions'],
          correctIndex: 1,
          diagramEmoji: '🦁',
          explanation: 'The collective noun for a group of lions is a "pride".',
          topic: 'Collective Nouns'
        },
        {
          text: `Word Analogy: Kitten is to Cat as Puppy is to _____`,
          options: ['Wolf', 'Dog', 'Bear', 'Tiger'],
          correctIndex: 1,
          explanation: 'A kitten is a young cat, and a puppy is a young dog.',
          topic: 'Young Ones of Animals'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `Which word is the adverb in the sentence: "The tortoise walked slowly across the meadow."?`,
          options: ['Tortoise', 'Walked', 'Slowly', 'Meadow'],
          correctIndex: 2,
          explanation: '"Slowly" describes how the tortoise walked, making it an adverb of manner.',
          topic: 'Adverbs of Manner'
        },
        {
          text: `Fill in the blank with the correct preposition: "The cat hid _____ the wooden table during the thunderstorm."`,
          options: ['above on', 'under', 'between of', 'into at'],
          correctIndex: 1,
          explanation: '"Under" is the correct preposition of place showing position beneath the table.',
          topic: 'Prepositions of Place'
        },
        {
          text: `True or False: The words "Happy" and "Joyful" are synonyms because they have similar meanings.`,
          options: ['True', 'False', 'They are antonyms', 'They are homophones'],
          correctIndex: 0,
          explanation: 'Synonyms are words with the same or nearly the same meaning, such as "Happy" and "Joyful".',
          topic: 'Synonyms'
        },
        {
          text: `Choose the correct comparative and superlative forms of the adjective "Good":`,
          options: ['Gooder, Goodest', 'Better, Best', 'More good, Most good', 'Well, Best'],
          correctIndex: 1,
          explanation: '"Good" has irregular degrees of comparison: Positive (Good), Comparative (Better), Superlative (Best).',
          topic: 'Degrees of Comparison'
        },
        {
          text: `Identify the sentence written in the Present Continuous Tense:`,
          options: [
            'The birds sang sweetly.',
            'The children are planting saplings in the school garden.',
            'She will visit her grandmother.',
            'He reads a newspaper every morning.'
          ],
          correctIndex: 1,
          explanation: '"Are planting" uses "is/am/are + verb-ing", which forms the Present Continuous Tense.',
          topic: 'Continuous Tenses'
        },
        {
          text: `Which pair of homophones is matched INCORRECTLY with its meaning?`,
          options: [
            'Sea (ocean) / See (look with eyes)',
            'Sun (star) / Son (male child)',
            'Week (fragile) / Weak (seven days)',
            'Peace (calm) / Piece (a portion)'
          ],
          correctIndex: 2,
          explanation: '"Week" means seven days and "Weak" means lacking strength; their meanings were swapped.',
          topic: 'Homophones'
        },
        {
          text: `Complete the proverb: "Actions speak louder than _____."`,
          options: ['whispers', 'words', 'books', 'thoughts'],
          correctIndex: 1,
          explanation: 'The classic proverb is "Actions speak louder than words," meaning what you do matters more than what you say.',
          topic: 'Proverbs & Sayings'
        },
        {
          text: `Combine the sentences using the best conjunction: "It was raining heavily. The football match continued."`,
          options: [
            'It was raining heavily because the football match continued.',
            'Although it was raining heavily, the football match continued.',
            'It was raining heavily or the football match continued.',
            'It was raining heavily so that the football match continued.'
          ],
          correctIndex: 1,
          explanation: '"Although" expresses contrast between the heavy rain and the match continuing.',
          topic: 'Conjunctions'
        },
        {
          text: `Look at the bee icon 🐝. Which word describes the sound made by bees?`,
          options: ['Roar', 'Buzz', 'Chirp', 'Blew'],
          correctIndex: 1,
          diagramEmoji: '🐝',
          explanation: 'Bees make a "buzzing" sound (onomatopoeia: buzz).',
          topic: 'Onomatopoeia & Sound Words'
        },
        {
          text: `If "Possible" takes the prefix "Im-" to become "Impossible", which prefix forms the opposite of "Regular"?`,
          options: ['Un-', 'Ir-', 'Dis-', 'Mis-'],
          correctIndex: 1,
          explanation: 'Words starting with "r" often take the prefix "ir-" to form their antonym: "Irregular".',
          topic: 'Prefixes and Suffixes'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `Convert the active sentence into Passive Voice: "Alexander Fleming discovered Penicillin."`,
          options: [
            'Penicillin is discovered by Alexander Fleming.',
            'Penicillin was discovered by Alexander Fleming.',
            'Penicillin had discovered Alexander Fleming.',
            'Penicillin will be discovered by Alexander Fleming.'
          ],
          correctIndex: 1,
          explanation: 'Simple past active ("discovered") converts to "was/were + past participle" ("was discovered") in passive voice.',
          topic: 'Active and Passive Voice'
        },
        {
          text: `Fill in the blank with the correct question tag: "You have completed your science project, _____?"`,
          options: ["didn't you", "haven't you", "isn't it", "have you"],
          correctIndex: 1,
          explanation: 'A positive statement with auxiliary "have" takes a negative question tag: "haven\'t you?".',
          topic: 'Question Tags'
        },
        {
          text: `True or False: In the sentence "The wind whispered through the pine trees," the literary device used is Personification.`,
          options: ['True', 'False', 'It is a Simile', 'It is an Oxymoron'],
          correctIndex: 0,
          explanation: 'Giving the human action of "whispering" to the non-human wind is Personification.',
          topic: 'Figures of Speech'
        },
        {
          text: `What is the meaning of the English idiom "Once in a blue moon"?`,
          options: [
            'Every single night',
            'Very rarely',
            'When the moon turns blue in winter',
            'Happening twice a week'
          ],
          correctIndex: 1,
          explanation: '"Once in a blue moon" means an event that happens very rarely.',
          topic: 'Idioms and Phrases'
        },
        {
          text: `Select the sentence that demonstrates correct Subject-Verb Agreement:`,
          options: [
            'A bouquet of yellow roses lend color to the room.',
            'A bouquet of yellow roses lends color to the room.',
            'Neither of the answers are correct.',
            'The list of items are on the desk.'
          ],
          correctIndex: 1,
          explanation: 'The singular subject "A bouquet" requires the singular verb "lends".',
          topic: 'Subject-Verb Agreement'
        },
        {
          text: `Identify the sentence that contains a grammatical error:`,
          options: [
            'She is senior to me by two years.',
            'He prefers fresh fruit juice to soda.',
            'The furniture in this hall are made of teakwood.',
            'Each of the participants received a certificate.'
          ],
          correctIndex: 2,
          explanation: '"Furniture" is an uncountable singular noun and must take the singular verb "is", not "are".',
          topic: 'Error Spotting'
        },
        {
          text: `Complete the one-word substitution: A person who can speak two languages fluently is called _____.`,
          options: ['Monolingual', 'Bilingual', 'Polyglot', 'Linguist'],
          correctIndex: 1,
          explanation: '"Bi-" means two and "-lingual" relates to language, so "Bilingual" means fluent in two languages.',
          topic: 'One-Word Substitution'
        },
        {
          text: `Convert into Indirect (Reported) Speech: The teacher said, "The Earth revolves around the Sun."`,
          options: [
            'The teacher said that the Earth revolved around the Sun.',
            'The teacher said that the Earth revolves around the Sun.',
            'The teacher asked if the Earth revolves around the Sun.',
            'The teacher told that the Earth was revolving around the Sun.'
          ],
          correctIndex: 1,
          explanation: 'Universal scientific truths remain in the simple present tense ("revolves") even when the reporting verb is in the past.',
          topic: 'Direct & Indirect Speech'
        },
        {
          text: `Look at the theatre masks icon 🎭. What do we call a play that has a sad or sorrowful ending?`,
          options: ['Comedy', 'Tragedy', 'Satire', 'Fable'],
          correctIndex: 1,
          diagramEmoji: '🎭',
          explanation: 'A drama dealing with sorrowful or disastrous events is called a Tragedy; a humorous one is a Comedy.',
          topic: 'Literary Genres'
        },
        {
          text: `Read carefully: "Despite her sprained ankle, Ananya finished the marathon." What can we infer about Ananya?`,
          options: [
            'She quit the race early',
            'She showed strong determination and perseverance',
            'She did not have any injury',
            'She ran in a swimming race'
          ],
          correctIndex: 1,
          explanation: 'Completing a marathon despite an injury demonstrates determination and perseverance.',
          topic: 'Reading Inference'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `Identify the type of subordinate clause underlined in: "The book [that you lent me last week] is captivating."`,
        options: ['Adverbial Clause', 'Adjective (Relative) Clause', 'Noun Clause', 'Principal Clause'],
        correctIndex: 1,
        explanation: '"That you lent me last week" describes the noun "book", functioning as an Adjective (Relative) Clause.',
        topic: 'Clauses Analysis'
      },
      {
        text: `Fill in the blank with the correct correlative conjunction: "No sooner had the bell rung _____ the students entered the classroom."`,
        options: ['when', 'than', 'then', 'before'],
        correctIndex: 1,
        explanation: 'The expression "No sooner..." is always paired with the conjunction "than" (not "when" or "then").',
        topic: 'Correlative Conjunctions'
      },
      {
        text: `True or False: In the sentence "Swimming in the ocean is invigorating," the word "Swimming" functions as a Gerund (verbal noun).`,
        options: ['True', 'False', 'It is an infinitive', 'It is a finite past verb'],
        correctIndex: 0,
        explanation: 'An "-ing" verb form acting as the subject (noun) of a sentence is called a Gerund.',
        topic: 'Gerunds and Participles'
      },
      {
        text: `What is the closest synonym for the advanced vocabulary word "Ephemeral"?`,
        options: ['Permanent and everlasting', 'Short-lived and fleeting', 'Heavy and metallic', 'Loud and boisterous'],
        correctIndex: 1,
        explanation: '"Ephemeral" means lasting for a very short time (fleeting or transitory).',
        topic: 'Advanced Vocabulary'
      },
      {
        text: `Which sentence correctly uses the Subjunctive Mood for an unreal or hypothetical wish?`,
        options: [
          'If I was a bird, I will fly across the sea.',
          'If I were a bird, I would fly across the sky.',
          'If I am a bird, I would have flown.',
          'If I were a bird, I am flying.'
        ],
        correctIndex: 1,
        explanation: 'Hypothetical second-conditional statements use the subjunctive "were" ("If I were..., I would...").',
        topic: 'Subjunctive Mood & Conditionals'
      },
      {
        text: `Identify the sentence with a misplaced (dangling) modifier:`,
        options: [
          'Walking through the forest, the tall pine trees amazed the hikers.',
          'Walking through the forest, the hikers admired the tall pine trees.',
          'The scientist examined the specimen under a microscope.',
          'After finishing her homework,Kavya played chess.'
        ],
        correctIndex: 0,
        explanation: 'In "Walking through the forest, the tall pine trees...", the phrase wrongly implies the pine trees were walking.',
        topic: 'Modifiers & Syntax'
      },
      {
        text: `Complete the sentence: A life history of a person written by that person himself or herself is called an _____.`,
        options: ['Biography', 'Autobiography', 'Bibliography', 'Calligraphy'],
        correctIndex: 1,
        explanation: '"Auto-" means self, so an account of one\'s own life is an Autobiography.',
        topic: 'Etymology & Root Words'
      },
      {
        text: `Transform into a Simple Sentence: "He worked tirelessly so that he might win the scholarship."`,
        options: [
          'He worked tirelessly and won the scholarship.',
          'He worked tirelessly to win the scholarship.',
          'Because he worked tirelessly, he won.',
          'He worked tirelessly, so he might win.'
        ],
        correctIndex: 1,
        explanation: 'Using the infinitive phrase "to win the scholarship" reduces the subordinate clause into a single simple sentence.',
        topic: 'Synthesis of Sentences'
      },
      {
        text: `Look at the feather quill icon 🪶. Which figure of speech combines two contradictory terms, such as "deafening silence" or "bittersweet"?`,
        options: ['Hyperbole', 'Oxymoron', 'Alliteration', 'Onomatopoeia'],
        correctIndex: 1,
        diagramEmoji: '🪶',
        explanation: 'An Oxymoron pairs two opposite or contradictory words side by side for poetic effect.',
        topic: 'Advanced Poetic Devices'
      },
      {
        text: `Analogy: Philanthropist : Generosity :: Skeptic : _____`,
        options: ['Credulity', 'Doubt', 'Extravagance', 'laziness'],
        correctIndex: 1,
        explanation: 'A philanthropist is characterized by generosity, while a skeptic is characterized by doubt and questioning.',
        topic: 'Verbal Analogies'
      }
    ];
  }

  // ============================================================================
  // 3. HINDI — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Hindi') {
    if (level === 1) {
      return [
        {
          text: `"सूर्य" शब्द का सही पर्यायवाची (समानार्थी) शब्द कौन-सा है?`,
          options: ['चंद्रमा', 'दिनकर (रवि)', 'तारा', 'बादल'],
          correctIndex: 1,
          explanation: 'सूर्य के पर्यायवाची शब्द दिनकर, रवि, भानु और भास्कर हैं।',
          topic: 'पर्यायवाची शब्द'
        },
        {
          text: `रिक्त स्थान भरें: हिंदी वर्णमाला में कुल _____ मूल स्वर माने जाते हैं।`,
          options: ['5', '11', '33', '52'],
          correctIndex: 1,
          explanation: 'हिंदी मानक वर्णमाला में 11 स्वर (अ से औ तक) होते हैं।',
          topic: 'वर्णमाला: स्वर'
        },
        {
          text: `सही या गलत: किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को "संज्ञा" कहते हैं।`,
          options: ['सही (True)', 'गलत (False)', 'उसे क्रिया कहते हैं', 'उसे अव्यय कहते हैं'],
          correctIndex: 0,
          explanation: 'नाम वाले सभी शब्दों को व्याकरण में संज्ञा कहा जाता है।',
          topic: 'संज्ञा की परिभाषा'
        },
        {
          text: `"अंधकार" शब्द का सही विलोम (उल्टा) शब्द चुनिए:`,
          options: ['रात्रि', 'प्रकाश', 'छाया', 'धुंध'],
          correctIndex: 1,
          explanation: 'अंधकार का विलोम शब्द "प्रकाश" (उजाला) होता है।',
          topic: 'विलोम शब्द'
        },
        {
          text: `निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन-सा है?`,
          options: ['आशिर्वाद', 'आशीर्वाद', 'आरशीवाद', 'आशिवाद'],
          correctIndex: 1,
          explanation: 'शुद्ध वर्तनी "आशीर्वाद" है, जिसमें "शी" पर बड़ी ई की मात्रा और "वा" पर रेफ लगता है।',
          topic: 'वर्तनी शुद्धि'
        },
        {
          text: `एकवचन-बहुवचन का कौन-सा युग्म अशुद्ध (गलत) है?`,
          options: ['पुस्तक - पुस्तकें', 'लड़की - लड़कियाँ', 'कमरा - कमरे', 'बालक - बालकोंें'],
          correctIndex: 3,
          explanation: '"बालक - बालकोंें" अशुद्ध रूप है; कर्ता कारक बहुवचन में "बालक" ही रहता है।',
          topic: 'वचन विचार'
        },
        {
          text: `वाक्य पूरा करें: जो व्यक्ति मिट्टी के बर्तन बनाता है, उसे _____ कहते हैं।`,
          options: ['सुनार', 'कुम्हार', 'लुहार', 'बढ़ई'],
          correctIndex: 1,
          explanation: 'मिट्टी के घड़े और बर्तन बनाने वाले कारीगर को कुम्हार कहते हैं।',
          topic: 'अनेक शब्दों के लिए एक शब्द'
        },
        {
          text: `"राधा मधुर गीत गाती है।" — इस वाक्य में विशेषण शब्द कौन-सा है?`,
          options: ['राधा', 'मधुर', 'गीत', 'गाती'],
          correctIndex: 1,
          explanation: '"मधुर" शब्द गीत की विशेषता बता रहा है, अतः यह गुणवाचक विशेषण है।',
          topic: 'विशेषण'
        },
        {
          text: `चित्र देखिए 🪷: भारत के राष्ट्रीय पुष्प "कमल" का एक अन्य नाम क्या है?`,
          options: ['गुलाब', 'पंकज (जलज)', 'चमेली', 'गेंदा'],
          correctIndex: 1,
          diagramEmoji: '🪷',
          explanation: 'कमल को पंकज, जलज, सरोज और नीरज भी कहा जाता है।',
          topic: 'शब्द भंडार'
        },
        {
          text: `संबंध पूरा कीजिए: राजा : रानी :: शेर : _____`,
          options: ['बाघिन', 'शेरनी', 'हिरनी', 'हथिनी'],
          correctIndex: 1,
          explanation: 'राजा का स्त्रीलिंग रानी है, उसी प्रकार शेर का स्त्रीलिंग शेरनी है।',
          topic: 'लिंग परिवर्तन'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `संज्ञा के स्थान पर प्रयुक्त होने वाले शब्दों को क्या कहते हैं?`,
          options: ['विशेषण', 'सर्वनाम', 'क्रिया', 'समुच्चयबोधक'],
          correctIndex: 1,
          explanation: 'संज्ञा की पुनरुक्ति रोकने के लिए संज्ञा के स्थान पर आने वाले शब्द (जैसे—मैं, तुम, वह) सर्वनाम कहलाते हैं।',
          topic: 'सर्वनाम'
        },
        {
          text: `रिक्त स्थान भरें: "हिम + आलय" की संधि से बनने वाला शब्द _____ है।`,
          options: ['हिमलाय', 'हिमालय', 'हिमायल', 'हीमालय'],
          correctIndex: 1,
          explanation: 'दीर्घ स्वर संधि के नियम (अ + आ = आ) से हिम + आलय = हिमालय बनता है।',
          topic: 'स्वर संधि'
        },
        {
          text: `सही या गलत: हिंदी भाषा की लिपि "देवनागरी" है।`,
          options: ['सही (True)', 'गलत (False)', 'रोमन लिपि है', 'गुरुमुखी लिपि है'],
          correctIndex: 0,
          explanation: 'हिंदी और संस्कृत भाषाएँ देवनागरी लिपि में लिखी जाती हैं।',
          topic: 'भाषा और लिपि'
        },
        {
          text: `"नौ दो ग्यारह होना" मुहावरे का सही अर्थ क्या है?`,
          options: ['गणित का जोड़ करना', 'भाग जाना', 'मिलकर रहना', 'थक कर सो जाना'],
          correctIndex: 1,
          explanation: '"नौ दो ग्यारह होना" मुहावरे का अर्थ है—तेजी से भाग जाना।',
          topic: 'मुहावरे'
        },
        {
          text: `निम्नलिखित में से कौन-सा वाक्य भूतकाल (Past Tense) का उदाहरण है?`,
          options: [
            'मोहन क्रिकेट खेल रहा है।',
            'कल हमारे विद्यालय में वार्षिकोत्सव मनाया गया था।',
            'हम कल पुस्तकालय जाएंगे।',
            'पक्षी आकाश में उड़ते हैं।'
          ],
          correctIndex: 1,
          explanation: '"मनाया गया था" बीते हुए समय की क्रिया दर्शाता है, अतः यह भूतकाल है।',
          topic: 'काल के भेद'
        },
        {
          text: `निम्नलिखित में से कौन-सा शब्द "पृथ्वी" का पर्यायवाची नहीं है?`,
          options: ['धरा', 'वसुंधरा', 'गगन', 'भूमि'],
          correctIndex: 2,
          explanation: '"गगन" आकाश का पर्यायवाची है; धरा, वसुंधरा और भूमि पृथ्वी के पर्यायवाची हैं।',
          topic: 'पर्यायवाची भेद'
        },
        {
          text: `वाक्य पूरा करें: जिसका कोई शत्रु न जन्मा हो, उसे _____ कहते हैं।`,
          options: ['अजेय', 'अजातशत्रु', 'अमर', 'अनंत'],
          correctIndex: 1,
          explanation: 'जिसका कोई शत्रु पैदा न हुआ हो, उसे "अजातशत्रु" कहते हैं।',
          topic: 'वाक्यांश के लिए एक शब्द'
        },
        {
          text: `"माँ ने बच्चे को खिलौना दिया।" — इस वाक्य में "को" किस कारक की विभक्ति है?`,
          options: ['कर्ता कारक', 'कर्म / संप्रदान कारक', 'अपादान कारक', 'अधिकरण कारक'],
          correctIndex: 1,
          explanation: 'देने के भाव तथा कर्म के साथ "को" विभक्ति कर्म/संप्रदान कारक को दर्शाती है।',
          topic: 'कारक चिह्न'
        },
        {
          text: `चित्र देखिए 📚: "पुस्तकालय" शब्द में कौन-सी संधि है? (पुस्तक + आलय)`,
          options: ['गुण संधि', 'दीर्घ स्वर संधि', 'वृद्धि संधि', 'यण संधि'],
          correctIndex: 1,
          diagramEmoji: '📚',
          explanation: 'पुस्तक (अ) + आलय (आ) = पुस्तकालय (आ), यह दीर्घ स्वर संधि है।',
          topic: 'संधि विच्छेद'
        },
        {
          text: `"उपकार" शब्द में कौन-सा उपसर्ग (Prefix) लगा है?`,
          options: ['कार', 'उप', 'उ', 'पार'],
          correctIndex: 1,
          explanation: '"कार" मूल शब्द के आगे "उप" उपसर्ग जुड़कर "उपकार" शब्द बना है।',
          topic: 'उपसर्ग और प्रत्यय'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `"माता-पिता" (माता और पिता) शब्द में कौन-सा समास है?`,
          options: ['तत्पुरुष समास', 'द्वंद्व समास', 'द्विगु समास', 'अव्ययीभाव समास'],
          correctIndex: 1,
          explanation: 'जिस समास में दोनों पद प्रधान हों और विग्रह करने पर "और" लगे, उसे द्वंद्व समास कहते हैं।',
          topic: 'समास विचार'
        },
        {
          text: `रिक्त स्थान भरें: जिस समास का पहला पद संख्यावाचक विशेषण हो (जैसे—चौराहा, तिरंगा), उसे _____ समास कहते हैं।`,
          options: ['कर्मधारय', 'द्विगु', 'बहुव्रीहि', 'तत्पुरुष'],
          correctIndex: 1,
          explanation: 'संख्यावाचक प्रथम पद वाले समूहबोधक समास को द्विगु समास कहते हैं।',
          topic: 'द्विगु समास'
        },
        {
          text: `सही या गलत: "रंगमंच के पीछे का स्थान" के लिए एक शब्द "नेपथ्य" होता है।`,
          options: ['सही (True)', 'गलत (False)', 'उसे दर्शकदीर्घा कहते हैं', 'उसे प्रांगण कहते हैं'],
          correctIndex: 0,
          explanation: 'रंगमंच के पर्दे के पीछे के स्थान को "नेपथ्य" कहा जाता है।',
          topic: 'उच्च स्तरीय शब्दावली'
        },
        {
          text: `"गागर में सागर भरना" मुहावरे का सटीक अर्थ क्या है?`,
          options: [
            'छोटे घड़े में समुद्र का पानी भरना',
            'थोड़े शब्दों में बहुत गहरी और बड़ी बात कहना',
            'बिना सोचे-समझे बोलना',
            'नदी पार करना'
          ],
          correctIndex: 1,
          explanation: 'थोड़े शब्दों में सारगर्भित या विस्तृत भाव व्यक्त करने को "गागर में सागर भरना" कहते हैं।',
          topic: 'मुहावरे एवं लोकोक्तियाँ'
        },
        {
          text: `"चारु चंद्र की चंचल किरणें खेल रही हैं जल-थल में" — इस पंक्ति में 'च' वर्ण की आवृत्ति से कौन-सा अलंकार है?`,
          options: ['उपमा अलंकार', 'अनुप्रास अलंकार', 'यमक अलंकार', 'रूपक अलंकार'],
          correctIndex: 1,
          explanation: 'व्यंजन वर्णों (च) की क्रमिक आवृत्ति होने पर अनुप्रास अलंकार होता है।',
          topic: 'अलंकार परिचय'
        },
        {
          text: `निम्नलिखित में से अशुद्ध वाक्य की पहचान कीजिए:`,
          options: [
            'यहाँ शुद्ध गाय का दूध मिलता है।',
            'यहाँ गाय का शुद्ध दूध मिलता है।',
            'भारत में अनेक दर्शनीय स्थल हैं।',
            'हमें सदैव सत्य बोलना चाहिए।'
          ],
          correctIndex: 0,
          explanation: 'पदक्रम की दृष्टि से "गाय का शुद्ध दूध" सही है, "शुद्ध गाय का दूध" अशुद्ध पदक्रम है।',
          topic: 'वाक्य शुद्धि एवं पदक्रम'
        },
        {
          text: `वाक्य पूरा करें: संस्कृत के वे शब्द जो बिना किसी परिवर्तन के हिंदी में ज्यों के त्यों प्रयोग किए जाते हैं, उन्हें _____ शब्द कहते हैं।`,
          options: ['तद्भव', 'तत्सम', 'देशज', 'विदेशी'],
          correctIndex: 1,
          explanation: 'तत् + सम (उसके समान) अर्थात संस्कृत के मूल शब्दों को तत्सम कहते हैं (जैसे—अग्नि, सूर्य)।',
          topic: 'तत्सम और तद्भव'
        },
        {
          text: `"गंगा हिमालय से निकलती है।" — यहाँ 'हिमालय से' में कौन-सा कारक है?`,
          options: ['करण कारक', 'अपादान कारक', 'संबंध कारक', 'अधिकरण कारक'],
          correctIndex: 1,
          explanation: 'निकलने या अलग होने (पृथकता) के भाव में "से" विभक्ति अपादान कारक होती है।',
          topic: 'कारक विश्लेषण'
        },
        {
          text: `चित्र देखिए ⚔️: "खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी" — सुभद्रा कुमारी चौहान की इस पंक्ति में कौन-सा रस है?`,
          options: ['शांत रस', 'वीर रस', 'हास्य रस', 'करुण रस'],
          correctIndex: 1,
          diagramEmoji: '⚔️',
          explanation: 'उत्साह, शौर्य और पराक्रम का वर्णन होने के कारण इसमें वीर रस है।',
          topic: 'काव्य रस'
        },
        {
          text: `"सज्जन" शब्द का सही संधि-विच्छेद क्या है?`,
          options: ['सज + जन', 'सत् + जन', 'सद + जन', 'सज्ज + न'],
          correctIndex: 1,
          explanation: 'व्यंजन संधि के नियम से सत् + जन = सज्जन बनता है।',
          topic: 'व्यंजन संधि'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `"कनक कनक ते सौ गुनी मादकता अधिकाय" — यहाँ 'कनक' शब्द दो बार अलग-अलग अर्थों (सोना और धतूरा) में प्रयुक्त हुआ है। इसमें कौन-सा अलंकार है?`,
        options: ['अनुप्रास अलंकार', 'यमक अलंकार', 'उपमा अलंकार', 'अतिशयोक्ति अलंकार'],
        correctIndex: 1,
        explanation: 'जब एक ही शब्द दो या अधिक बार आए और प्रत्येक बार उसका अर्थ भिन्न हो, तो यमक अलंकार होता है।',
        topic: 'शब्दालंकार: यमक'
      },
      {
        text: `रिक्त स्थान भरें: रचना के आधार पर वाक्य के तीन भेद होते हैं—सरल वाक्य, संयुक्त वाक्य और _____ वाक्य।`,
        options: ['मिश्र (मिश्रित)', 'प्रश्नवाचक', 'आज्ञावाचक', 'निषेधवाचक'],
        correctIndex: 0,
        explanation: 'रचना के आधार पर वाक्य के तीन प्रकार हैं: सरल, संयुक्त और मिश्र वाक्य।',
        topic: 'वाक्य रचना के भेद'
      },
      {
        text: `सही या गलत: जिस क्रिया के साथ कर्म की आवश्यकता होती है, उसे "सकर्मक क्रिया" कहते हैं।`,
        options: ['सही (True)', 'गलत (False)', 'उसे अकर्मक कहते हैं', 'उसे निपात कहते हैं'],
        correctIndex: 0,
        explanation: 'स + कर्मक = कर्म के साथ; जैसे "राम फल खाता है" में खाना सकर्मक क्रिया है।',
        topic: 'अकर्मक और सकर्मक क्रिया'
      },
      {
        text: `लोकोक्ति "अधजल गगरी छलकत जाए" का सही अभिप्राय क्या है?`,
        options: [
          'घड़े से पानी गिरना',
          'अल्पज्ञानी (कम ज्ञान वाले) द्वारा अधिक दिखावा करना',
          'बहुत बड़ा विद्वान होना',
          'पानी की बचत करना'
        ],
        correctIndex: 1,
        explanation: 'कम ज्ञान या गुण रखने वाला व्यक्ति जब अधिक आडंबर या दिखावा करता है, तब यह लोकोक्ति कही जाती है।',
        topic: 'लोकोक्तियाँ'
      },
      {
        text: `"पीपर पात सरिस मन डोला" (पीपल के पत्ते के समान मन डोल उठा) — इस पंक्ति में कौन-सा अलंकार है?`,
        options: ['उपमा अलंकार', 'रूपक अलंकार', 'भ्रांतिमान अलंकार', 'संदेह अलंकार'],
        correctIndex: 0,
        explanation: '"सरिस" (समान) वाचक शब्द द्वारा मन की तुलना पीपल के पत्ते से की गई है, अतः उपमा अलंकार है।',
        topic: 'अर्थालंकार: उपमा'
      },
      {
        text: `निम्नलिखित तत्सम-तद्भव युग्मों में से कौन-सा युग्म गलत है?`,
        options: [
          'अग्नि - आग',
          'दुग्ध - दूध',
          'मयूर - मोर',
          'रात्रि - सूरज'
        ],
        correctIndex: 3,
        explanation: '"रात्रि" का तद्भव रूप "रात" होता है, "सूरज" नहीं (सूर्य का तद्भव सूरज है)।',
        topic: 'तत्सम-तद्भव मिलान'
      },
      {
        text: `वाक्य पूरा करें: हिंदी साहित्य के प्रसिद्ध उपन्यास "गोदान" और कहानी "ईदगाह" के रचयिता _____ हैं।`,
        options: ['जयशंकर प्रसाद', 'मुंशी प्रेमचंद', 'रामधारी सिंह दिनकर', 'महादेवी वर्मा'],
        correctIndex: 1,
        explanation: 'उपन्यास सम्राट मुंशी प्रेमचंद ने गोदान, गबन, पंच परमेश्वर और ईदगाह जैसी अमर रचनाएँ लिखीं।',
        topic: 'हिंदी साहित्य एवं रचनाकार'
      },
      {
        text: `"यथाशक्ति" (शक्ति के अनुसार) शब्द में कौन-सा समास है?`,
        options: ['तत्पुरुष समास', 'अव्ययीभाव समास', 'द्वंद्व समास', 'बहुव्रीहि समास'],
        correctIndex: 1,
        explanation: 'जिसका प्रथम पद अव्यय ("यथा") हो, वहाँ अव्ययीभाव समास होता है।',
        topic: 'अव्ययीभाव समास'
      },
      {
        text: `चित्र देखिए ✍️: "स्वागत" शब्द का सही संधि-विच्छेद चुनिए:`,
        options: ['स्वा + गत', 'सु + आगत', 'स्व + आगत', 'स + आगत'],
        correctIndex: 1,
        diagramEmoji: '✍️',
        explanation: 'यण स्वर संधि के नियम (उ + आ = वा) से सु + आगत = स्वागत बनता है।',
        topic: 'यण संधि'
      },
      {
        text: `वाच्य पहचानिए: "पक्षी द्वारा आकाश में उड़ा जाता है।" — यह किस वाच्य का उदाहरण है?`,
        options: ['कर्तृवाच्य', 'भाववाच्य', 'कर्मवाच्य', 'सामान्य वाच्य'],
        correctIndex: 1,
        explanation: 'जब अकर्मक क्रिया का भाव प्रधान हो और कर्ता के साथ "द्वारा/से" लगे, तब भाववाच्य होता है।',
        topic: 'वाच्य और उसके भेद'
      }
    ];
  }

  // ============================================================================
  // 4. MARATHI — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Marathi') {
    if (level === 1) {
      return [
        {
          text: `"आकाश" या शब्दाचा योग्य समानार्थी शब्द कोणता आहे?`,
          options: ['जमीन', 'गगन (आभाळ)', 'सागर', 'पर्वत'],
          correctIndex: 1,
          explanation: 'आकाशाला मराठीत गगन, आभाळ, नभ किंवा अंबर असे म्हणतात.',
          topic: 'समानार्थी शब्द'
        },
        {
          text: `गाळलेली जागा भरा: "आंबा हे अतिशय गोड आणि रसाळ _____ आहे."`,
          options: ['फूल', 'फळ', 'पान', 'मूळ'],
          correctIndex: 1,
          explanation: 'आंबा हे फळांचा राजा मानले जाणारे गोड फळ आहे.',
          topic: 'वाक्यरचना'
        },
        {
          text: `चूक की बरोबर: कोणत्याही प्रत्यक्ष किंवा काल्पनिक वस्तूच्या किंवा व्यक्तीच्या नावाला 'नाम' म्हणतात.`,
          options: ['बरोबर (True)', 'चूक (False)', 'सर्वनाम म्हणतात', 'अव्यय म्हणतात'],
          correctIndex: 0,
          explanation: 'व्यक्ती, वस्तू, ठिकाण किंवा गुणधर्म यांच्या ठेवलेल्या नावाला व्याकरणात नाम म्हणतात.',
          topic: 'शब्दांच्या जाती: नाम'
        },
        {
          text: `"उजेड" या शब्दाचा योग्य विरुद्धार्थी शब्द कोणता?`,
          options: ['प्रकाश', 'अंधार (काळोख)', 'दुपार', 'सकाळ'],
          correctIndex: 1,
          explanation: 'उजेड या शब्दाचा विरुद्धार्थी शब्द अंधार किंवा काळोख असा होतो.',
          topic: 'विरुद्धार्थी शब्द'
        },
        {
          text: `पुढीलपैकी कोणता शब्द शुद्ध स्वरूपात लिहिलेला आहे?`,
          options: ['शाळा', 'साला', 'षाळा', 'शाळ'],
          correctIndex: 0,
          explanation: '"शाळा" हा शब्द मराठी वर्णमालेनुसार शुद्ध आहे.',
          topic: 'शुद्धलेखन'
        },
        {
          text: `एकवचन-अनेकवचन यांपैकी चुकीची जोडी कोणती?`,
          options: ['आंबा - आंबे', 'नदी - नद्या', 'पुस्तक - पुस्तके', 'मोर - मोरे'],
          correctIndex: 3,
          explanation: '"मोर" या शब्दाचे अनेकवचन "मोर" असेच राहते, "मोरे" होत नाही.',
          topic: 'वचन विचार'
        },
        {
          text: `वाक्य पूर्ण करा: जो शेतात कष्ट करून अन्नधान्य पिकवतो, त्याला _____ म्हणतात.`,
          options: ['सैनिक', 'शेतकरी (बळीराजा)', 'वैद्य', 'व्यापारी'],
          correctIndex: 1,
          explanation: 'शेतीत धान्य पिकवणाऱ्या अन्नदात्याला शेतकरी म्हणतात.',
          topic: 'शब्दसमूहाबद्दल एक शब्द'
        },
        {
          text: `"ती सुंदर रांगोळी काढते." — या वाक्यातील विशेषण ओळखा:`,
          options: ['ती', 'सुंदर', 'रांगोळी', 'काढते'],
          correctIndex: 1,
          explanation: '"सुंदर" हा शब्द रांगोळी या नामाबद्दल विशेष माहिती सांगतो, म्हणून तो विशेषण आहे.',
          topic: 'विशेषण ओळख'
        },
        {
          text: `चित्र पहा 🚩: छत्रपती शिवाजी महाराजांचा जन्म कोणत्या किल्ल्यावर झाला?`,
          options: ['रायगड', 'शिवनेरी', 'प्रतापगड', 'सिंहगड'],
          correctIndex: 1,
          diagramEmoji: '🚩',
          explanation: 'छत्रपती शिवाजी महाराजांचा जन्म १९ फेब्रुवारी १६३० रोजी पुणे जिल्ह्यातील शिवनेरी किल्ल्यावर झाला.',
          topic: 'शिवचरित्र व मराठी'
        },
        {
          text: `सहसंबंध ओळखा: गाय : वासरू :: हरिण : _____`,
          options: ['बछडा', 'पाडस', 'कोकरू', 'शिंगरू'],
          correctIndex: 1,
          explanation: 'गायीच्या पिल्लाला वासरू म्हणतात, तर हरिणाच्या पिल्लाला पाडस म्हणतात.',
          topic: 'प्राणी व त्यांची पिल्ले'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `वाक्याचा अर्थ पूर्ण करणाऱ्या क्रियावाचक शब्दाला काय म्हणतात?`,
          options: ['नाम', 'क्रियापद', 'सर्वनाम', 'उभयान्वयी अव्यय'],
          correctIndex: 1,
          explanation: 'वाक्यातील क्रिया दर्शविणाऱ्या आणि वाक्याचा अर्थ पूर्ण करणाऱ्या शब्दाला क्रियापद म्हणतात.',
          topic: 'क्रियापद'
        },
        {
          text: `गाळलेली जागा भरा: मराठी व्याकरणात शब्दांच्या एकूण _____ जाती आहेत.`,
          options: ['५ (पाच)', '८ (आठ)', '१० (दहा)', '१२ (बारा)'],
          correctIndex: 1,
          explanation: 'मराठीत विकारी (४) आणि अविकारी (४) अशा एकूण ८ शब्दांच्या जाती आहेत.',
          topic: 'शब्दांच्या आठ जाती'
        },
        {
          text: `चूक की बरोबर: "हिमालय" हे विशेषनामाचे उदाहरण आहे.`,
          options: ['बरोबर (True)', 'चूक (False)', 'ते भाववाचक नाम आहे', 'ते सर्वनाम आहे'],
          correctIndex: 0,
          explanation: '"हिमालय" हे एका विशिष्ट पर्वताचे नाव असल्याने ते विशेषनाम आहे; तर "पर्वत" हे सामान्यनाम आहे.',
          topic: 'नामांचे प्रकार'
        },
        {
          text: `"आनंद गगनात न मावणे" या वाक्प्रचाराचा योग्य अर्थ कोणता?`,
          options: [
            'आकाशात उंच उडणे',
            'अतिशय आनंद होणे',
            'दुःखी होणे',
            'पाऊस पडणे'
          ],
          correctIndex: 1,
          explanation: 'आनंद गगनात न मावणे म्हणजे खूप मोठ्या प्रमाणावर आनंद होणे.',
          topic: 'वाक्प्रचार व अर्थ'
        },
        {
          text: `पुढीलपैकी कोणते वाक्य 'भविष्यकाळातील' आहे?`,
          options: [
            'आम्ही काल संग्रहालय पाहिले.',
            'मी उद्या सकाळी लवकर उठेन आणि अभ्यास करेन.',
            'मुले मैदानावर खेळत आहेत.',
            'सूर्य पूर्वेला उगवतो.'
          ],
          correctIndex: 1,
          explanation: '"उठेन आणि अभ्यास करेन" यावरून क्रिया पुढे घडणार असल्याचे समजते, म्हणून हा भविष्यकाळ आहे.',
          topic: 'काळ ओळखणे'
        },
        {
          text: `पुढीलपैकी कोणता शब्द "पाणी" या शब्दाचा समानार्थी शब्द नाही?`,
          options: ['जल', 'जीवन', 'नीर', 'वारा'],
          correctIndex: 3,
          explanation: '"वारा" म्हणजे पवन किंवा हवा; जल, जीवन, उदक आणि नीर हे पाण्याचे समानार्थी शब्द आहेत.',
          topic: 'शब्दसंपत्ती'
        },
        {
          text: `वाक्य पूर्ण करा: दररोज प्रसिद्ध होणाऱ्या वृत्तपत्राला _____ म्हणतात.`,
          options: ['साप्ताहिक', 'दैनिक', 'मासिक', 'वार्षिक'],
          correctIndex: 1,
          explanation: 'दररोज प्रकाशित होणाऱ्या नियतकालिकास "दैनिक" म्हणतात.',
          topic: 'शब्दसमूहाबद्दल एक शब्द'
        },
        {
          text: `लिंग बदला: "कवी" या पुल्लिंगी शब्दाचे योग्य स्त्रीलिंगी रूप कोणते?`,
          options: ['कविता', 'कवयित्री', 'कवीन', 'गायिका'],
          correctIndex: 1,
          explanation: '"कवी" या शब्दाचे स्त्रीलिंगी रूप "कवयित्री" असे होते.',
          topic: 'लिंग विचार'
        },
        {
          text: `चित्र पहा 🦚: मोराच्या आवाजाला मराठीत काय म्हणतात?`,
          options: ['चिवचिवाट', 'केकारव', 'कुहूकुहू', 'गर्जना'],
          correctIndex: 1,
          diagramEmoji: '🦚',
          explanation: 'मोराच्या मधुर आवाजाला मराठीत "केकारव" असे म्हणतात.',
          topic: 'पशुपक्ष्यांचे आवाज'
        },
        {
          text: `विरामचिन्ह ओळखा: वाक्यात प्रश्न विचारलेला असल्यास शेवटी कोणते चिन्ह वापरतात?`,
          options: ['पूर्णविराम (.)', 'प्रश्नचिन्ह (?)', 'स्वल्पविराम (,)', 'उद्गारचिन्ह (!)'],
          correctIndex: 1,
          explanation: 'प्रश्नार्थक वाक्याच्या शेवटी नेहमी प्रश्नचिन्ह (?) दिले जाते.',
          topic: 'विरामचिन्हे'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `"अंथरूण पाहून पाय पसरावे" या प्रसिद्ध मराठी म्हणीचा योग्य अर्थ कोणता?`,
          options: [
            'मोठी चादर घेऊन झोपावे',
            'आपल्या ऐपतीप्रमाणे (क्षमतेनुसार) खर्च करावा',
            'खूप आळस करावा',
            'इतरांकडून कर्ज घ्यावे'
          ],
          correctIndex: 1,
          explanation: 'आपली आर्थिक कुवत किंवा क्षमता पाहूनच नियोजन व खर्च करावा, असा या म्हणीचा अर्थ आहे.',
          topic: 'मराठी म्हणी'
        },
        {
          text: `गाळलेली जागा भरा: दोन शब्द किंवा दोन वाक्ये जोडणाऱ्या अविकारी शब्दाला _____ अव्यय म्हणतात.`,
          options: ['क्रियाविशेषण', 'उभयान्वयी', 'शब्दयोगी', 'केवलप्रयोगी'],
          correctIndex: 1,
          explanation: '"आणि, व, पण, परंतु, किंवा" यांसारख्या जोडणाऱ्या शब्दांना उभयान्वयी अव्यय म्हणतात.',
          topic: 'अव्ययांचे प्रकार'
        },
        {
          text: `चूक की बरोबर: "सौंदर्य, प्रामाणिकपणा, धैर्य" ही भाववाचक नामाची उदाहरणे आहेत.`,
          options: ['बरोबर (True)', 'चूक (False)', 'ती सर्वनामे आहेत', 'ती क्रियापदे आहेत'],
          correctIndex: 0,
          explanation: 'ज्या नामांमधून गुण, धर्म किंवा भाव व्यक्त होतो, त्यांना भाववाचक नाम म्हणतात.',
          topic: 'भाववाचक नाम'
        },
        {
          text: `"कानाडोळा करणे" या वाक्प्रचाराचा अचूक अर्थ ओळखा:`,
          options: [
            'कान आणि डोळे तपासणे',
            'जाणूनबुजून दुर्लक्ष करणे',
            'लक्षपूर्वक ऐकणे',
            'रागाने पाहणे'
          ],
          correctIndex: 1,
          explanation: 'कानाडोळा करणे म्हणजे एखादी गोष्ट माहीत असूनही तिच्याकडे दुर्लक्ष करणे.',
          topic: 'वाक्प्रचार'
        },
        {
          text: `विभक्ती ओळखा: "रामाने रावणाला बाणाने मारले." — यातील 'बाणाने' या शब्दाची विभक्ती कोणती?`,
          options: ['प्रथमा', 'तृतीया (ने, ए, शी)', 'चतुर्थी', 'सप्तमी'],
          correctIndex: 1,
          explanation: 'ने, ए, शी हे तृतीया विभक्तीचे प्रत्यय असून ते क्रियेचे साधन (करण) दर्शवतात.',
          topic: 'विभक्ती प्रत्यय'
        },
        {
          text: `पुढीलपैकी कोणती साहित्यकृती व लेखक यांची जोडी चुकीची आहे?`,
          options: [
            'श्यामची आई - साने गुरुजी',
            'गीतारहस्य - लोकमान्य टिळक',
            'ययाति - वि. स. खांडेकर',
            'दासबोध - संत ज्ञानेश्वर'
          ],
          correctIndex: 3,
          explanation: '"दासबोध" हा ग्रंथ समर्थ रामदास स्वामी यांनी लिहिला आहे, संत ज्ञानेश्वरांनी नाही.',
          topic: 'मराठी साहित्य व ग्रंथ'
        },
        {
          text: `वाक्य पूर्ण करा: "केल्याने देशाटन, पंडित मैत्री, सभेत संचार; मनुजा चातुर्य येतसे फार" — येथे 'देशाटन' म्हणजे _____.`,
          options: ['घरात बसणे', 'विविध देशांत प्रवास / भ्रमंती करणे', 'युद्ध करणे', 'शेती करणे'],
          correctIndex: 1,
          explanation: 'देशाटन म्हणजे विविध प्रदेशांत प्रवास करून ज्ञान व अनुभव मिळवणे.',
          topic: 'काव्य आकलन'
        },
        {
          text: `"सूर्योदय" या शब्दाची योग्य संधी-फोड कोणती आहे?`,
          options: ['सूर्यो + दय', 'सूर्य + उदय', 'सूर + उदय', 'सूर्या + उदय'],
          correctIndex: 1,
          explanation: 'सूर्य + उदय = सूर्योदय (अ + उ = ओ, गुणादेश स्वरसंधी).',
          topic: 'मराठी संधी'
        },
        {
          text: `चित्र पहा 🪔: "अरेरे! किती मोठी दुर्घटना घडली!" — या वाक्यातील 'अरेरे!' हे कोणते अव्यय आहे?`,
          options: ['शब्दयोगी अव्यय', 'केवलप्रयोगी (उद्गारवाचक) अव्यय', 'क्रियाविशेषण', 'सर्वनाम'],
          correctIndex: 1,
          diagramEmoji: '🪔',
          explanation: 'मनातील भावना अचानक उद्गारावाटे व्यक्त करणाऱ्या शब्दांना केवलप्रयोगी अव्यय म्हणतात.',
          topic: 'केवलप्रयोगी अव्यय'
        },
        {
          text: `समूहदर्शक शब्द निवडा: जसा पक्षांचा 'थवा' असतो, तसा द्राक्षांचा काय असतो?`,
          options: ['कळप', 'घोस (घड)', 'जुडी', 'ताफा'],
          correctIndex: 1,
          explanation: 'द्राक्षांचा किंवा केळ्यांचा घोस / घड असतो.',
          topic: 'समूहदर्शक शब्द'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `प्रयोग ओळखा: "शिपायाने चोर पकडला." — या वाक्यातील प्रयोग कोणता आहे?`,
        options: ['कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'भावे प्रयोग', 'सकर्मक कर्तरी'],
        correctIndex: 1,
        explanation: 'येथे कर्त्याला प्रत्यय (ने) असून क्रियापद कर्माप्रमाणे (चोर) चालते, म्हणून हा कर्मणी प्रयोग आहे.',
        topic: 'प्रयोग विचार'
      },
      {
        text: `गाळलेली जागा भरा: मराठी भाषा गौरव दिन दरवर्षी २७ फेब्रुवारी रोजी थोर कवी _____ यांच्या जन्मदिवसानिमित्त साजरा केला जातो.`,
        options: ['केशवसुत', 'कुसुमाग्रज (वि. वा. शिरवाडकर)', 'ग. दि. माडगूळकर', 'बालकवी'],
        correctIndex: 1,
        explanation: 'ज्ञानपीठ पुरस्कार विजेते कवी कुसुमाग्रज यांचा जन्मदिन (२७ फेब्रुवारी) मराठी भाषा गौरव दिन म्हणून साजरा होतो.',
        topic: 'मराठी भाषा गौरव दिन'
      },
      {
        text: `चूक की बरोबर: "आई-वडील" आणि "विटी-दांडू" ही द्वंद्व समासाची उदाहरणे आहेत.`,
        options: ['बरोबर (True)', 'चूक (False)', 'हा अव्ययीभाव समास आहे', 'हा तत्पुरुष समास आहे'],
        correctIndex: 0,
        explanation: 'ज्या समासात दोन्ही पदे महत्त्वाची असतात त्याला द्वंद्व समास म्हणतात (आई आणि वडील).',
        topic: 'मराठी समास'
      },
      {
        text: `अलंकार ओळखा: "सावळाच रंग तुझा पावसाळी नभापरी" — या काव्यपंक्तीत कोणता अलंकार आहे?`,
          options: ['रूपक अलंकार', 'उपमा अलंकार', 'उत्प्रेक्षा अलंकार', 'यमक अलंकार'],
        correctIndex: 1,
        explanation: '"परी" (सारखा) या साम्यवाचक शब्दामुळे रंगाची तुलना पावसाळी आभाळाशी केली आहे, म्हणून हा उपमा अलंकार आहे.',
        topic: 'भाषेचे अलंकार'
      },
      {
        text: `"नावडतीचे मीठ अळणी" या म्हणीचा अचूक अर्थ कोणता?`,
        options: [
          'जेवणात मीठ कमी असणे',
          'नावडत्या व्यक्तीने चांगली गोष्ट केली तरी ती वाईटच वाटते',
          'मीठ महाग असणे',
          'सर्वांना गोड जेवण आवडणे'
        ],
        correctIndex: 1,
        explanation: 'एखाद्या व्यक्तीबद्दल पूर्वग्रह किंवा नावड असल्यास तिच्या चांगल्या कृतीतही दोषच दिसतात.',
        topic: 'म्हणी व त्यांचा गर्भितार्थ'
      },
      {
        text: `पुढीलपैकी शुद्ध शब्द कोणता ते अचूक निवडा:`,
        options: [
          'पुनर्वसन',
          'पूनर्वसन',
          'पुनरवसन',
          'पुनर्वषन'
        ],
        correctIndex: 0,
        explanation: 'पुनः + वसन = पुनर्वसन (ऱ्हस्व उ आणि व वर रफार) हा शुद्ध शब्द आहे.',
        topic: 'प्रगत शुद्धलेखन'
      },
      {
        text: `वाक्य पूर्ण करा: ज्या समासात दुसरे पद प्रधान (महत्त्वाचे) असते, त्याला _____ समास म्हणतात.`,
        options: ['अव्ययीभाव', 'तत्पुरुष', 'द्वंद्व', 'बहुव्रीही'],
        correctIndex: 1,
        explanation: 'तत्पुरुष समासात दुसरे पद प्रमुख असते (उदा. राजवाडा - राजाचा वाडा).',
        topic: 'समास वर्गीकरण'
      },
      {
        text: `वाक्याचा प्रकार ओळखा: "जे चकाकते, ते सर्व सोने नसते."`,
        options: ['केवल वाक्य', 'मिश्र वाक्य', 'संयुक्त वाक्य', 'उद्गारार्थी वाक्य'],
        correctIndex: 1,
        explanation: '"जे... ते..." यांसारख्या गौणत्वसूचक उभयान्वयी अव्ययांनी जोडलेले वाक्य मिश्र वाक्य असते.',
        topic: 'वाक्यसंश्लेषण व प्रकार'
      },
      {
        text: `चित्र पहा 📜: संत तुकाराम महाराजांनी रचलेल्या भक्तीपर काव्याला प्रामुख्याने काय म्हणतात?`,
        options: ['भारुड', 'अभंग गाथा', 'पोवाडा', 'लावणी'],
        correctIndex: 1,
        diagramEmoji: '📜',
        explanation: 'जगद्गुरू संत तुकाराम महाराजांचे भक्तीपर काव्य "अभंग" म्हणून ओळखले जाते.',
        topic: 'संत वाङ्मय'
      },
      {
        text: `"सप्तपदी" आणि "पंचवटी" या शब्दांत पहिले पद संख्याविशेषण असल्याने हा कोणता समास ठरतो?`,
        options: ['कर्मधारय समास', 'द्विगु समास', 'इतरेतर द्वंद्व', 'अव्ययीभाव समास'],
        correctIndex: 1,
        explanation: 'पहिले पद संख्यावाचक असून त्यातून समूहाचा बोध होत असल्यास त्याला द्विगु समास म्हणतात.',
        topic: 'द्विगु समास'
      }
    ];
  }

  // ============================================================================
  // 5. SCIENCE — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Science') {
    if (level === 1) {
      return [
        {
          text: `Which gas do human beings and animals breathe IN from the air to stay alive?`,
          options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium'],
          correctIndex: 1,
          explanation: 'Living animals and humans inhale oxygen for cellular respiration and exhale carbon dioxide.',
          topic: 'Respiration in Living Beings'
        },
        {
          text: `Fill in the blank: The process by which green plants make their own food using sunlight, water, and carbon dioxide is called _____.`,
          options: ['Digestion', 'Photosynthesis', 'Germination', 'Evaporation'],
          correctIndex: 1,
          explanation: 'Photosynthesis ("photo" = light, "synthesis" = putting together) occurs in green leaves.',
          topic: 'Plant Nutrition'
        },
        {
          text: `True or False: The Moon produces its own bright light just like the Sun.`,
          options: ['True', 'False', 'Only on full moon nights', 'Only during eclipses'],
          correctIndex: 1,
          explanation: 'False! The Moon is a non-luminous body; it shines only because it reflects sunlight.',
          topic: 'Light and Celestial Bodies'
        },
        {
          text: `At standard sea-level pressure, at what temperature does pure liquid water freeze into solid ice?`,
          options: ['100°C', '0°C', '50°C', '37°C'],
          correctIndex: 1,
          explanation: 'Pure water freezes at 0°C (32°F) and boils at 100°C.',
          topic: 'States of Matter'
        },
        {
          text: `Which part of the human skeletal system protects our delicate brain?`,
          options: ['Ribcage', 'Skull (Cranium)', 'Backbone', 'Knee cap'],
          correctIndex: 1,
          explanation: 'The hard bony skull encloses and protects the brain from injury.',
          topic: 'Human Skeletal System'
        },
        {
          text: `Identify the INCORRECT match between an animal and its breathing organ:`,
          options: [
            'Fish - Gills',
            'Human - Lungs',
            'Earthworm - Moist Skin',
            'Dog - Gills'
          ],
          correctIndex: 3,
          explanation: 'Dogs are mammals and breathe through lungs, not gills.',
          topic: 'Animal Adaptations'
        },
        {
          text: `Complete the sentence: Objects that allow light to pass through them completely (like clear glass) are called _____ objects.`,
          options: ['Opaque', 'Transparent', 'Translucent', 'Magnetic'],
          correctIndex: 1,
          explanation: 'Transparent materials transmit light clearly so we can see through them.',
          topic: 'Light and Shadows'
        },
        {
          text: `If you hold the North Pole of one bar magnet near the North Pole of another bar magnet, what will happen?`,
          options: [
            'They will attract each other strongly',
            'They will repel (push away) each other',
            'They will melt',
            'Nothing will happen'
          ],
          correctIndex: 1,
          explanation: 'Like magnetic poles (North-North or South-South) repel each other, while opposite poles attract.',
          topic: 'Magnetism Basics'
        },
        {
          text: `Look at the tooth icon 🦷. How many permanent teeth does a healthy adult human typically have?`,
          options: ['20 teeth', '32 teeth', '24 teeth', '40 teeth'],
          correctIndex: 1,
          diagramEmoji: '🦷',
          explanation: 'Children have 20 milk teeth, while a full set of adult permanent teeth has 32 teeth.',
          topic: 'Human Dental Care'
        },
        {
          text: `Lifecycle order: Which is the correct sequence in the lifecycle of a butterfly?`,
          options: [
            'Adult -> Egg -> Pupa -> Caterpillar',
            'Egg -> Caterpillar (Larva) -> Pupa (Chrysalis) -> Butterfly',
            'Caterpillar -> Egg -> Butterfly -> Pupa',
            'Pupa -> Egg -> Caterpillar -> Butterfly'
          ],
          correctIndex: 1,
          explanation: 'A butterfly undergoes complete metamorphosis: Egg -> Larva (Caterpillar) -> Pupa (Chrysalis) -> Adult.',
          topic: 'Metamorphosis'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `Which vitamin is synthesized by the human skin when exposed to morning sunlight and is vital for strong bones?`,
          options: ['Vitamin A', 'Vitamin D', 'Vitamin C', 'Vitamin K'],
          correctIndex: 1,
          explanation: 'Vitamin D helps the body absorb calcium for strong bones and is produced in skin under sunlight.',
          topic: 'Vitamins and Minerals'
        },
        {
          text: `Fill in the blank: The force that pulls all objects downward toward the center of the Earth is called _____.`,
          options: ['Friction', 'Gravity (Gravitational Force)', 'Buoyancy', 'Electrostatic force'],
          correctIndex: 1,
          explanation: 'Gravity is the attractive force exerted by the Earth on all masses.',
          topic: 'Forces in Nature'
        },
        {
          text: `True or False: Metals like copper and aluminum are good conductors of both heat and electricity.`,
          options: ['True', 'False', 'Only wood conducts electricity', 'Plastic is the best conductor'],
          correctIndex: 0,
          explanation: 'Metals have free electrons that allow thermal energy and electric current to flow easily.',
          topic: 'Conductors and Insulators'
        },
        {
          text: `Which planet in our Solar System is famously known as the "Red Planet" due to iron oxide on its surface?`,
          options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correctIndex: 1,
          explanation: 'Mars appears reddish because its surface soil is rich in iron oxide (rust).',
          topic: 'The Solar System'
        },
        {
          text: `What happens to the particles of a solid when it is heated to its melting point?`,
          options: [
            'They stop moving completely',
            'They gain kinetic energy, vibrate faster, and break free into a liquid state',
            'They shrink in size',
            'They turn into magnetic poles'
          ],
          correctIndex: 1,
          explanation: 'Heating supplies thermal energy, increasing particle vibration until intermolecular bonds loosen to form a liquid.',
          topic: 'Matter and Particle Theory'
        },
        {
          text: `Identify the INCORRECT statement about human digestion:`,
          options: [
            'Digestion begins in the mouth with saliva',
            'The stomach secretes hydrochloric acid and digestive enzymes',
            'Most nutrient absorption occurs in the small intestine',
            'The lungs digest proteins and fats'
          ],
          correctIndex: 3,
          explanation: 'The lungs are organs of the respiratory system for gas exchange, not digestion.',
          topic: 'Human Digestive System'
        },
        {
          text: `Complete the sentence: An instrument used by doctors to listen to the heartbeat and lung sounds is a _____.`,
          options: ['Thermometer', 'Stethoscope', 'Microscope', 'Telescope'],
          correctIndex: 1,
          explanation: 'A stethoscope amplifies internal body sounds such as the heartbeat.',
          topic: 'Scientific Instruments'
        },
        {
          text: `A student mixes salt in water until it dissolves completely. Which method can recover the dry salt from the saltwater solution?`,
          options: ['Sieving', 'Evaporation', 'Handpicking', 'Magnetic separation'],
          correctIndex: 1,
          explanation: 'Evaporating the water leaves the dissolved solid salt crystals behind.',
          topic: 'Separation of Substances'
        },
        {
          text: `Look at the pulley/lever icon ⚙️. A pair of scissors and a seesaw are examples of which simple machine?`,
          options: ['Wedge only', 'First-Class Lever', 'Pulley', 'Wheel and Axle'],
          correctIndex: 1,
          diagramEmoji: '⚙️',
          explanation: 'In a first-class lever (like a seesaw or scissors), the fulcrum is located between the effort and the load.',
          topic: 'Simple Machines'
        },
        {
          text: `Why do we see a flash of lightning BEFORE we hear the sound of thunder during a storm?`,
          options: [
            'Lightning happens closer to the ground',
            'Light travels much faster (~300,000 km/s) than sound (~343 m/s) in air',
            'Our eyes are placed in front of our ears',
            'Thunder occurs ten minutes after lightning'
          ],
          correctIndex: 1,
          explanation: 'Light travels nearly a million times faster than sound through the atmosphere.',
          topic: 'Speed of Light vs Sound'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `Which blood vessels carry oxygen-rich blood AWAY from the heart to all parts of the human body?`,
          options: ['Veins', 'Arteries', 'Lymph nodes', 'Villi'],
          correctIndex: 1,
          explanation: 'Arteries (led by the aorta) have thick elastic walls and carry oxygenated blood away from the heart.',
          topic: 'Human Circulatory System'
        },
        {
          text: `Fill in the blank: The chemical symbol for the element Sodium on the Periodic Table is _____.`,
          options: ['So', 'Na', 'Sd', 'K'],
          correctIndex: 1,
          explanation: 'Sodium\'s symbol "Na" comes from its Latin name "Natrium" (K is Potassium, Kalium).',
          topic: 'Elements and Chemical Symbols'
        },
        {
          text: `True or False: When blue litmus paper is dipped into an acidic solution (like lemon juice), it turns red.`,
          options: ['True', 'False', 'It turns green', 'It turns yellow'],
          correctIndex: 0,
          explanation: 'Acids turn blue litmus paper red, whereas bases turn red litmus paper blue.',
          topic: 'Acids, Bases and Indicators'
        },
        {
          text: `What is the SI unit of electric current?`,
          options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
          correctIndex: 1,
          explanation: 'Electric current is measured in Amperes (A) using an ammeter.',
          topic: 'Electricity and Circuits'
        },
        {
          text: `Which plant tissue is responsible for transporting water and dissolved minerals upward from the roots to the leaves?`,
          options: ['Phloem', 'Xylem', 'Epidermis', 'Cambium'],
          correctIndex: 1,
          explanation: 'Xylem vessels conduct water and minerals upward from roots, while phloem transports prepared food.',
          topic: 'Transport in Plants'
        },
        {
          text: `Identify the example that is a PHYSICAL change rather than a chemical reaction:`,
          options: [
            'Burning of magnesium ribbon',
            'Melting of wax into liquid wax',
            'Rusting of an iron gate',
            'Curdling of milk into curd'
          ],
          correctIndex: 1,
          explanation: 'Melting of solid wax is a reversible change of state where no new chemical substance is formed.',
          topic: 'Physical and Chemical Changes'
        },
        {
          text: `Complete the sentence: The spherical mirror used as a rear-view mirror in vehicles because it gives a wider field of view is a _____ mirror.`,
          options: ['Concave', 'Convex', 'Plane', 'Cylindrical'],
          correctIndex: 1,
          explanation: 'A convex mirror diverges light rays to form an erect, diminished image covering a wide traffic area.',
          topic: 'Spherical Mirrors & Optics'
        },
        {
          text: `If a cyclist covers 120 metres in 15 seconds at a constant speed, what is the cyclist's speed in m/s?`,
          options: ['6 m/s', '8 m/s', '10 m/s', '12 m/s'],
          correctIndex: 1,
          explanation: 'Speed = Distance ÷ Time = 120 m ÷ 15 s = 8 m/s.',
          topic: 'Motion and Speed'
        },
        {
          text: `Look at the cell icon 🔬. Which structure is present in a Plant Cell but ABSENT in an Animal Cell?`,
          options: ['Cell membrane', 'Rigid Cellulose Cell Wall & Chloroplasts', 'Nucleus', 'Mitochondria'],
          correctIndex: 1,
          diagramEmoji: '🔬',
          explanation: 'Plant cells possess a rigid outer cell wall and chloroplasts for photosynthesis, which animal cells lack.',
          topic: 'Plant vs Animal Cells'
        },
        {
          text: `Why do mountaineers carry oxygen cylinders when climbing very high peaks like Mount Everest?`,
          options: [
            'Because there is zero gravity at high altitude',
            'Because atmospheric air density and oxygen pressure decrease significantly at high altitudes',
            'To keep their backpacks heavy',
            'Because nitrogen turns into liquid on mountains'
          ],
          correctIndex: 1,
          explanation: 'At high altitudes, the air is thinner (lower atmospheric pressure), providing less oxygen per breath.',
          topic: 'Atmosphere & Respiration'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `According to Newton's Second Law of Motion, what net force is required to give a mass of 25 kg an acceleration of 3 m/s²?`,
        options: ['28 N', '75 N', '50 N', '8.33 N'],
        correctIndex: 1,
        explanation: 'By F = m × a, Force = 25 kg × 3 m/s² = 75 Newtons (N).',
        topic: 'Laws of Motion'
      },
      {
        text: `Fill in the blank: The pitch of a sound wave is directly determined by its _____.`,
        options: ['Amplitude', 'Frequency (measured in Hertz)', 'Speed in vacuum', 'Wavelength color'],
        correctIndex: 1,
        explanation: 'Frequency (vibrations per second, Hz) determines pitch, while amplitude determines loudness.',
        topic: 'Acoustics & Sound Waves'
      },
      {
        text: `True or False: In an exothermic chemical reaction, heat energy is released into the surroundings.`,
        options: ['True', 'False', 'Heat is only absorbed', 'Temperature always drops to zero'],
        correctIndex: 0,
        explanation: 'Exothermic reactions (like combustion and respiration) release thermal energy to their surroundings.',
        topic: 'Thermochemistry'
      },
      {
        text: `If a force of 200 N is applied perpendicularly over a surface area of 0.5 m², what is the pressure exerted? (Pressure = Force / Area)`,
        options: ['100 Pascals', '400 Pascals', '200 Pascals', '50 Pascals'],
        correctIndex: 1,
        explanation: 'Pressure P = F / A = 200 N ÷ 0.5 m² = 400 N/m² (400 Pascals).',
        topic: 'Force and Pressure'
      },
      {
        text: `When an acid reacts completely with a base (Neutralization Reaction), what are the two main products formed?`,
        options: [
          'Only hydrogen gas',
          'Salt and Water',
          'Carbon monoxide and soot',
          'Pure metal and oxygen'
        ],
        correctIndex: 1,
        explanation: 'Acid + Base -> Salt + Water (for example, HCl + NaOH -> NaCl + H₂O).',
        topic: 'Neutralization Reactions'
      },
      {
        text: `Identify the INCORRECT statement regarding refraction of light:`,
        options: [
          'A coin at the bottom of a water bucket appears slightly raised due to refraction',
          'A rainbow is formed by dispersion and internal reflection of sunlight in raindrops',
          'When light enters from air into glass obliquely, it bends away from the normal',
          'The speed of light is maximum in a vacuum'
        ],
        correctIndex: 2,
        explanation: 'When light travels from an optically rarer medium (air) into a denser medium (glass), it bends TOWARD the normal, not away.',
        topic: 'Refraction of Light'
      },
      {
        text: `Complete the sentence: The non-metal that exists as a liquid at room temperature is _____, whereas the metal that is liquid at room temperature is Mercury.`,
        options: ['Carbon', 'Bromine', 'Sulfur', 'Iodine'],
        correctIndex: 1,
        explanation: 'Bromine (Br) is the only non-metal that is liquid at standard room temperature.',
        topic: 'Metals and Non-Metals'
      },
      {
        text: `In a domestic electrical wiring system, appliances are connected in parallel rather than in series primarily so that:`,
        options: [
          'If one appliance is switched off, all other appliances stop working',
          'Each appliance receives the full standard voltage (220V) and can be operated independently',
          'More fuse wires are burned',
          'Current cannot flow to any bulb'
        ],
        correctIndex: 1,
        explanation: 'Parallel circuits supply equal potential difference (voltage) to every branch and allow independent switching.',
        topic: 'Domestic Electric Circuits'
      },
      {
        text: `Look at the DNA helix icon 🧬. How many pairs of chromosomes are present in a normal human somatic (body) cell?`,
        options: ['12 pairs (24 total)', '23 pairs (46 total)', '32 pairs (64 total)', '46 pairs (92 total)'],
        correctIndex: 1,
        diagramEmoji: '🧬',
        explanation: 'Human body cells contain 23 pairs of chromosomes (46 chromosomes in total).',
        topic: 'Genetics & Cell Biology'
      },
      {
        text: `Why are broad straps provided on school backpacks instead of thin strings?`,
        options: [
          'To increase the weight of the bag',
          'To increase the contact area and thereby reduce pressure on the student\'s shoulders',
          'To increase pressure on the shoulders',
          'To make the bag waterproof'
        ],
        correctIndex: 1,
        explanation: 'Since Pressure = Force ÷ Area, a larger surface area distributes the weight and reduces pressure on shoulders.',
        topic: 'Applications of Pressure'
      }
    ];
  }

  // ============================================================================
  // 6. GENERAL KNOWLEDGE — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'General Knowledge') {
    if (level === 1) {
      return [
        {
          text: `Which is the national bird of India?`,
          options: ['Sparrow', 'Indian Peacock', 'Parrot', 'Eagle'],
          correctIndex: 1,
          explanation: 'The Indian Peacock (Pavo cristatus) was declared the National Bird of India in 1963.',
          topic: 'National Symbols of India'
        },
        {
          text: `Fill in the blank: There are _____ colors in a natural rainbow (VIBGYOR).`,
          options: ['5', '7', '8', '10'],
          correctIndex: 1,
          explanation: 'A rainbow has 7 colors: Violet, Indigo, Blue, Green, Yellow, Orange, and Red.',
          topic: 'Wonders of Nature'
        },
        {
          text: `True or False: New Delhi is the capital city of India.`,
          options: ['True', 'False', 'Mumbai is India\'s capital', 'Kolkata is India\'s capital'],
          correctIndex: 0,
          explanation: 'New Delhi is the national capital of the Republic of India.',
          topic: 'India Basics'
        },
        {
          text: `Who is revered as the "Father of the Nation" in India?`,
          options: ['Subhas Chandra Bose', 'Mahatma Gandhi', 'Bhagat Singh', 'Sardar Vallabhbhai Patel'],
          correctIndex: 1,
          explanation: 'Mahatma Gandhi (Mohandas Karamchand Gandhi) is honored as the Father of the Nation.',
          topic: 'Great Indian Personalities'
        },
        {
          text: `Which festival is celebrated across India as the "Festival of Lights"?`,
          options: ['Holi', 'Diwali (Deepavali)', 'Baisakhi', 'Onam'],
          correctIndex: 1,
          explanation: 'Diwali (Deepavali) is the Festival of Lights, celebrated with diyas and joy.',
          topic: 'Festivals of India'
        },
        {
          text: `Identify the INCORRECT pair of animal and its characteristic:`,
          options: [
            'Cheetah - Fastest land animal',
            'Blue Whale - Largest animal on Earth',
            'Giraffe - Tallest land mammal',
            'Ostrich - Smallest bird in the world'
          ],
          correctIndex: 3,
          explanation: 'The Ostrich is the LARGEST living bird; the Bee Hummingbird is the smallest bird.',
          topic: 'Animal Superlatives'
        },
        {
          text: `Complete the sentence: Teachers' Day in India is celebrated every year on 5th September to honor the birthday of _____.`,
          options: ['Pandit Jawaharlal Nehru', 'Dr. Sarvepalli Radhakrishnan', 'Swami Vivekananda', 'Rabindranath Tagore'],
          correctIndex: 1,
          explanation: 'Dr. Sarvepalli Radhakrishnan, eminent philosopher and second President of India, was born on 5th September.',
          topic: 'Important National Days'
        },
        {
          text: `How many players are on the field in one cricket or football team during a match?`,
          options: ['9 players', '11 players', '7 players', '15 players'],
          correctIndex: 1,
          explanation: 'Both cricket and football (soccer) teams field 11 players each.',
          topic: 'Sports Awareness'
        },
        {
          text: `Look at the Indian Tricolour flag icon 🇮🇳. What is at the center of the white band of India's National Flag?`,
          options: ['A golden star', 'The navy-blue Ashoka Chakra with 24 spokes', 'A rising sun', 'A lotus flower'],
          correctIndex: 1,
          diagramEmoji: '🇮🇳',
          explanation: 'The center of the Tiranga features the navy-blue Ashoka Chakra with 24 spokes representing righteousness and progress.',
          topic: 'National Flag of India'
        },
        {
          text: `Which is the largest continent by land area in the world?`,
          options: ['Africa', 'Asia', 'Europe', 'North America'],
          correctIndex: 1,
          explanation: 'Asia is the largest and most populous continent on Earth.',
          topic: 'World Continents'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `Who composed India's National Anthem, "Jana Gana Mana"?`,
          options: ['Bankim Chandra Chattopadhyay', 'Rabindranath Tagore', 'Sarojini Naidu', 'Subramania Bharati'],
          correctIndex: 1,
          explanation: 'Nobel Laureate Rabindranath Tagore composed "Jana Gana Mana" (Bankim Chandra wrote the National Song "Vande Mataram").',
          topic: 'National Anthem & Song'
        },
        {
          text: `Fill in the blank: Dr. A.P.J. Abdul Kalam, the 11th President of India, is fondly remembered as the "_____ Man of India".`,
          options: ['Iron', 'Missile', 'Space', 'Metro'],
          correctIndex: 1,
          explanation: 'Dr. A.P.J. Abdul Kalam is known as the "Missile Man of India" for his pioneering work in defence and space technology.',
          topic: 'Scientists & Leaders'
        },
        {
          text: `True or False: The official currency of Japan is the Yen.`,
          options: ['True', 'False', 'It is the Euro', 'It is the Dollar'],
          correctIndex: 0,
          explanation: 'Japan\'s official currency is the Japanese Yen (¥).',
          topic: 'Countries and Currencies'
        },
        {
          text: `Match the Indian state with its classical dance form: Which classical dance originated in Kerala?`,
          options: ['Bharatanatyam', 'Kathakali & Mohiniyattam', 'Kuchipudi', 'Odissi'],
          correctIndex: 1,
          explanation: 'Kathakali and Mohiniyattam are the classical dance forms of Kerala (Bharatanatyam is from Tamil Nadu).',
          topic: 'Indian Classical Dances'
        },
        {
          text: `What is the full form of ISRO, India's national space agency?`,
          options: [
            'International Space Rocket Organization',
            'Indian Space Research Organisation',
            'Indian Scientific Satellite Office',
            'Institute of Space Research Operations'
          ],
          correctIndex: 1,
          explanation: 'ISRO stands for Indian Space Research Organisation, headquartered in Bengaluru.',
          topic: 'Indian Space Programme'
        },
        {
          text: `Identify the INCORRECT match between an inventor and their invention:`,
          options: [
            'Alexander Graham Bell - Telephone',
            'Wright Brothers - Aeroplane',
            'Thomas Alva Edison - Electric Light Bulb',
            'Galileo Galilei - Steam Engine'
          ],
          correctIndex: 3,
          explanation: 'James Watt developed the practical Steam Engine; Galileo pioneered the astronomical telescope.',
          topic: 'Inventions & Inventors'
        },
        {
          text: `Complete the sentence: National Science Day is celebrated in India on 28th February every year to mark the discovery of the "Raman Effect" by _____.`,
          options: ['Homi J. Bhabha', 'Sir C.V. Raman', 'Vikram Sarabhai', 'Jagadish Chandra Bose'],
          correctIndex: 1,
          explanation: 'Sir C.V. Raman discovered the Raman Effect on 28th February 1928 and won the 1930 Nobel Prize in Physics.',
          topic: 'Science & Nobel Laureates'
        },
        {
          text: `Which historic monument in Agra, built of white marble on the banks of the Yamuna river, is one of the Seven Wonders of the World?`,
          options: ['Qutub Minar', 'Taj Mahal', 'Hawa Mahal', 'Charminar'],
          correctIndex: 1,
          explanation: 'The Taj Mahal in Agra is a UNESCO World Heritage site and one of the New Seven Wonders of the World.',
          topic: 'Monuments of India'
        },
        {
          text: `Look at the Olympic rings icon 🏅. How many interlocking rings are on the official Olympic Flag, representing the inhabited continents?`,
          options: ['4 rings', '5 rings', '6 rings', '7 rings'],
          correctIndex: 1,
          diagramEmoji: '🏅',
          explanation: 'The Olympic symbol features 5 interlocking rings (blue, yellow, black, green, red) on a white background.',
          topic: 'International Sports'
        },
        {
          text: `Which Indian city is famously known as the "Pink City"?`,
          options: ['Udaipur', 'Jaipur', 'Jodhpur', 'Mysuru'],
          correctIndex: 1,
          explanation: 'Jaipur, the capital of Rajasthan, is known as the Pink City due to the terracotta-pink color of its historic buildings.',
          topic: 'Sobriquets of Indian Cities'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `In 2023, India's Chandrayaan-3 mission made history by becoming the first spacecraft in the world to successfully soft-land near which region of the Moon?`,
          options: ['Lunar Equator', 'Lunar South Pole', 'Sea of Tranquility', 'Lunar North Pole'],
          correctIndex: 1,
          explanation: 'On 23 August 2023 (now celebrated as National Space Day), Chandrayaan-3\'s Vikram lander touched down near the Moon\'s South Pole.',
          topic: 'Current Affairs & Space Achievements'
        },
        {
          text: `Fill in the blank: The world's tallest statue, the "Statue of Unity" (182 metres) in Gujarat, is dedicated to _____.`,
          options: ['Mahatma Gandhi', 'Sardar Vallabhbhai Patel', 'Chhatrapati Shivaji Maharaj', 'Swami Vivekananda'],
          correctIndex: 1,
          explanation: 'The Statue of Unity honors Sardar Vallabhbhai Patel, the Iron Man of India who united over 560 princely states.',
          topic: 'Landmarks of Modern India'
        },
        {
          text: `True or False: The "Bharat Ratna" is the highest civilian award of the Republic of India.`,
          options: ['True', 'False', 'Padma Shri is the highest', 'Param Vir Chakra is civilian'],
          correctIndex: 0,
          explanation: 'Bharat Ratna ("Jewel of India"), instituted in 1954, is the highest civilian honor in India.',
          topic: 'National Awards & Honors'
        },
        {
          text: `Where are the headquarters of the United Nations Educational, Scientific and Cultural Organization (UNESCO) located?`,
          options: ['Geneva, Switzerland', 'Paris, France', 'New York, USA', 'Vienna, Austria'],
          correctIndex: 1,
          explanation: 'UNESCO is headquartered in Paris, France (UN headquarters is in New York, and WHO is in Geneva).',
          topic: 'United Nations & World Bodies'
        },
        {
          text: `Who wrote the famous Sanskrit treatise on statecraft, economics, and military strategy titled "Arthashastra"?`,
          options: ['Kalidasa', 'Kautilya (Chanakya / Vishnugupta)', 'Aryabhata', 'Panini'],
          correctIndex: 1,
          explanation: 'Acharya Chanakya (Kautilya), mentor to Chandragupta Maurya, authored the Arthashastra.',
          topic: 'Classic Indian Literature'
        },
        {
          text: `Identify the INCORRECT match between a country and its capital city:`,
          options: [
            'France - Paris',
            'United Kingdom - London',
            'Australia - Sydney',
            'Germany - Berlin'
          ],
          correctIndex: 2,
          explanation: 'The capital of Australia is Canberra, not Sydney.',
          topic: 'World Capitals'
        },
        {
          text: `Complete the sentence: India's first indigenous solar observatory mission launched by ISRO to study the Sun from Lagrange Point L1 is named _____.`,
          options: ['Mangalyaan', 'Aditya-L1', 'Gaganyaan', 'Astrosat'],
          correctIndex: 1,
          explanation: 'Aditya-L1 ("Aditya" means Sun in Sanskrit) is India\'s first dedicated solar space observatory.',
          topic: 'Indian Science & Space'
        },
        {
          text: `Which Indian athlete won India's first-ever Olympic Gold Medal in Athletics (Javelin Throw) at the Tokyo Olympics?`,
          options: ['Abhinav Bindra', 'Neeraj Chopra', 'Milkha Singh', 'P.V. Sindhu'],
          correctIndex: 1,
          explanation: 'Neeraj Chopra won the historic Olympic Gold in Men\'s Javelin Throw at the Tokyo 2020 Olympics.',
          topic: 'Indian Olympic Champions'
        },
        {
          text: `Look at the book icon 📖. Who is the author of the celebrated autobiography "Wings of Fire"?`,
          options: ['Dr. Vikram Sarabhai', 'Dr. A.P.J. Abdul Kalam (with Arun Tiwari)', 'C.N.R. Rao', 'Ratan Tata'],
          correctIndex: 1,
          diagramEmoji: '📖',
          explanation: '"Wings of Fire" is the inspiring autobiography of former President and scientist Dr. A.P.J. Abdul Kalam.',
          topic: 'Famous Books and Authors'
        },
        {
          text: `Which line of latitude passes almost halfway through India across 8 states (including Gujarat, Madhya Pradesh, and West Bengal)?`,
          options: ['The Equator', 'Tropic of Cancer (23.5° N)', 'Tropic of Capricorn (23.5° S)', 'Arctic Circle'],
          correctIndex: 1,
          explanation: 'The Tropic of Cancer (23°30\' N) divides India into almost two equal climatic halves.',
          topic: 'Geographical GK of India'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `The National Emblem of India (Lion Capital of Ashoka at Sarnath) carries the motto "Satyameva Jayate". From which ancient Upanishad is this motto taken?`,
        options: ['Katha Upanishad', 'Mundaka Upanishad', 'Chandogya Upanishad', 'Kena Upanishad'],
        correctIndex: 1,
        explanation: '"Satyameva Jayate" (Truth Alone Triumphs) is inscribed in Devanagari script from the Mundaka Upanishad.',
        topic: 'Indian Heritage & Culture'
      },
      {
        text: `Fill in the blank: The Nobel Prizes are awarded annually in Stockholm, Sweden, EXCEPT for the Nobel Peace Prize, which is awarded in _____.`,
        options: ['Geneva, Switzerland', 'Oslo, Norway', 'Hague, Netherlands', 'Copenhagen, Denmark'],
        correctIndex: 1,
        explanation: 'As specified in Alfred Nobel\'s will, the Nobel Peace Prize is presented in Oslo, Norway.',
        topic: 'Global Awards & Honours'
      },
      {
        text: `True or False: The "Dadasaheb Phalke Award" is India's highest award in the field of Cinema.`,
        options: ['True', 'False', 'It is for Agriculture', 'It is for Architecture'],
        correctIndex: 0,
        explanation: 'Named after Dhundiraj Govind (Dadasaheb) Phalke, pioneer of Indian cinema, it is India\'s highest cinema honor.',
        topic: 'Awards in Arts & Culture'
      },
      {
        text: `Match the Parliament name: What is the national parliament of Japan called?`,
        options: ['Congress', 'The National Diet', 'Bundestag', 'Sansad'],
        correctIndex: 1,
        explanation: 'Japan\'s bicameral legislature is officially known as the National Diet.',
        topic: 'World Parliaments'
      },
      {
        text: `Which wetland lake in Odisha is the largest brackish water coastal lagoon in India and a famous winter habitat for migratory birds?`,
        options: ['Dal Lake', 'Chilika Lake', 'Wular Lake', 'Loktak Lake'],
        correctIndex: 1,
        explanation: 'Chilika Lake in Odisha is Asia\'s largest brackish water lagoon and India\'s first Ramsar wetland site.',
        topic: 'Ecology & Ramsar Sites'
      },
      {
        text: `Identify the INCORRECT statement regarding Indian Constitutional & National facts:`,
        options: [
          'The Constitution of India came into effect on 26th January 1950',
          'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee',
          'Hindi in Devanagari script is the Official Language of the Union',
          'The Eighth Schedule of the Indian Constitution recognizes only 10 languages'
        ],
        correctIndex: 3,
        explanation: 'The Eighth Schedule of the Constitution of India recognizes 22 official scheduled languages, not 10.',
        topic: 'Indian Polity & Languages'
      },
      {
        text: `Complete the sentence: The international boundary line separating India and China in the eastern sector (Arunachal Pradesh) is called the _____.`,
        options: ['Radcliffe Line', 'McMahon Line', 'Durand Line', '38th Parallel'],
        correctIndex: 1,
        explanation: 'The McMahon Line demarcates the boundary between Northeast India and Tibet/China (Radcliffe Line is India-Pakistan/Bangladesh).',
        topic: 'International Boundary Lines'
      },
      {
        text: `Who was the first Indian woman to travel into space aboard Space Shuttle Columbia?`,
        options: ['Sunita Williams', 'Kalpana Chawla', 'Tessy Thomas', 'Ritu Karidhal'],
        correctIndex: 1,
        explanation: 'Dr. Kalpana Chawla, born in Karnal (Haryana), was the first woman of Indian origin to fly in space in 1997.',
        topic: 'Pioneers of Space Exploration'
      },
      {
        text: `Look at the globe icon 🌐. Which international organization, founded in 1945 after World War II, celebrates its foundation day on 24th October?`,
        options: ['NATO', 'United Nations (UN)', 'SAARC', 'ASEAN'],
        correctIndex: 1,
        diagramEmoji: '🌐',
        explanation: 'The United Nations Charter entered into force on 24 October 1945, observed globally as United Nations Day.',
        topic: 'Global Organizations'
      },
      {
        text: `Which ancient university in Bihar, founded in the 5th century CE under the Gupta Empire, was one of the world's first great residential universities?`,
        options: ['Vikramshila', 'Nalanda University', 'Vallabhi', 'Pushpagiri'],
        correctIndex: 1,
        explanation: 'Nalanda Mahavihara in Bihar attracted scholars from across Asia for centuries and is a UNESCO World Heritage site.',
        topic: 'Ancient Indian Education'
      }
    ];
  }

  // ============================================================================
  // 7. SOCIAL STUDIES — 40 Unique Questions (10 per Level)
  // ============================================================================
  if (subject === 'Social Studies') {
    if (level === 1) {
      return [
        {
          text: `Who is the elected head of a Gram Panchayat in an Indian village?`,
          options: ['Mayor', 'Sarpanch', 'Governor', 'Collector'],
          correctIndex: 1,
          explanation: 'The Sarpanch is the elected head of the village-level local self-government called the Gram Panchayat.',
          topic: 'Local Self-Government'
        },
        {
          text: `Fill in the blank: The three colors of a standard road traffic signal light are Red, Yellow (Amber), and _____.`,
          options: ['Blue', 'Green', 'White', 'Purple'],
          correctIndex: 1,
          explanation: 'Red means Stop, Yellow means Wait/Get Ready, and Green means Go.',
          topic: 'Civic & Road Safety'
        },
        {
          text: `True or False: Farming, fishing, and dairy rearing are primary occupations connected directly to nature.`,
          options: ['True', 'False', 'They are software jobs', 'They are banking services'],
          correctIndex: 0,
          explanation: 'Primary sector activities obtain natural resources directly from the land and water.',
          topic: 'Livelihoods and Occupations'
        },
        {
          text: `Which emergency helpline number is dialed across India as the unified all-in-one emergency response number (Police, Fire, Ambulance)?`,
          options: ['999', '112', '555', '123'],
          correctIndex: 1,
          explanation: '112 is India\'s national emergency helpline number integrating Police (100), Fire (101), and Ambulance (108).',
          topic: 'Public Services & Helplines'
        },
        {
          text: `Why do we celebrate Republic Day in India on 26th January every year?`,
          options: [
            'Because India gained independence on that day',
            'Because the Constitution of India came into effect on 26th January 1950',
            'Because the first train ran on that day',
            'Because it is the start of monsoon'
          ],
          correctIndex: 1,
          explanation: 'On 26 January 1950, the Constitution of India came into force, making India a sovereign democratic republic.',
          topic: 'National Festivals & Civics'
        },
        {
          text: `Identify the INCORRECT statement about good citizenship:`,
          options: [
            'Respecting public property and keeping parks clean',
            'Following traffic rules and standing in queues',
            'Throwing plastic garbage into rivers and streets',
            'Helping elderly neighbors and respecting diversity'
          ],
          correctIndex: 2,
          explanation: 'Littering and polluting rivers harms the environment and violates civic responsibility.',
          topic: 'Civic Responsibilities'
        },
        {
          text: `Complete the sentence: A small three-dimensional spherical model of the Earth is called a _____.`,
          options: ['Chart', 'Globe', 'Compass', 'Sketch'],
          correctIndex: 1,
          explanation: 'A globe is a true miniature spherical model of the Earth.',
          topic: 'Maps and Globes'
        },
        {
          text: `If a farmer grows cotton on his farm and sells it to a textile mill to weave cloth, the textile mill belongs to which economic sector?`,
          options: ['Primary Sector', 'Secondary (Manufacturing) Sector', 'Entertainment Sector', 'Forestry Sector'],
          correctIndex: 1,
          explanation: 'Processing raw materials (cotton) into finished goods (cloth) is a Secondary (manufacturing) sector activity.',
          topic: 'From Farm to Factory'
        },
        {
          text: `Look at the postbox icon 📮. What does the 6-digit PIN code used by India Post stand for?`,
          options: [
            'Personal Identification Number',
            'Postal Index Number',
            'Public Information Network',
            'Parcel Inquiry Number'
          ],
          correctIndex: 1,
          diagramEmoji: '📮',
          explanation: 'PIN stands for Postal Index Number, a 6-digit code introduced in 1972 by India Post for accurate mail sorting.',
          topic: 'Communication Systems'
        },
        {
          text: `What is the minimum age required for an Indian citizen to vote in elections (Universal Adult Franchise)?`,
          options: ['16 years', '18 years', '21 years', '25 years'],
          correctIndex: 1,
          explanation: 'Every Indian citizen aged 18 years or above has the constitutional right to vote regardless of caste, gender, or religion.',
          topic: 'Democratic Participation'
        }
      ];
    }

    if (level === 2) {
      return [
        {
          text: `Which civic body governs and provides civic amenities (water supply, street lighting, sanitation) in large metropolitan cities?`,
          options: ['Gram Sabha', 'Municipal Corporation (Mahanagar Palika)', 'Zila Parishad', 'Nyaya Panchayat'],
          correctIndex: 1,
          explanation: 'Large cities are administered by a Municipal Corporation headed by an elected Mayor and a Municipal Commissioner.',
          topic: 'Urban Local Administration'
        },
        {
          text: `Fill in the blank: The Preamble to the Constitution of India begins with the words "WE, THE _____ OF INDIA...".`,
          options: ['LEADERS', 'PEOPLE', 'COURTS', 'STATES'],
          correctIndex: 1,
          explanation: '"WE, THE PEOPLE OF INDIA" signifies that ultimate sovereignty rests with the citizens of India.',
          topic: 'The Preamble'
        },
        {
          text: `True or False: The Right to Education (RTE) Act makes free and compulsory education a Fundamental Right for children aged 6 to 14 years in India.`,
          options: ['True', 'False', 'Only for university students', 'Only in private foreign schools'],
          correctIndex: 0,
          explanation: 'Article 21A of the Indian Constitution guarantees free and compulsory education for all children aged 6 to 14.',
          topic: 'Fundamental Rights'
        },
        {
          text: `Match the organ of government with its primary constitutional role: Which organ is responsible for interpreting laws and delivering justice?`,
          options: ['The Legislature', 'The Judiciary (Courts)', 'The Executive', 'The Election Commission'],
          correctIndex: 1,
          explanation: 'The Legislature makes laws, the Executive implements laws, and the Judiciary interprets laws and protects justice.',
          topic: 'Three Organs of Government'
        },
        {
          text: `What does the phrase "Unity in Diversity" mean in the context of Indian society?`,
          options: [
            'Everyone must speak only one language and eat the same food',
            'People of diverse languages, religions, festivals, and regions live together in national harmony',
            'States are not connected to each other',
            'Traditions are forbidden'
          ],
          correctIndex: 1,
          explanation: 'India celebrates vast linguistic, cultural, and regional diversity while standing united as one nation.',
          topic: 'Unity in Diversity'
        },
        {
          text: `Identify the INCORRECT statement about the Panchayati Raj system in India:`,
          options: [
            'Gram Panchayat works at the village level',
            'Panchayat Samiti (Block Samiti) works at the block/taluka level',
            'Zila Parishad works at the district level',
            'Gram Panchayat makes foreign treaties with other countries'
          ],
          correctIndex: 3,
          explanation: 'Foreign affairs and international treaties are handled by the Union (Central) Government, not a village Panchayat.',
          topic: 'Three-Tier Panchayati Raj'
        },
        {
          text: `Complete the sentence: The consumer helpline mark "AGMARK" is certified on _____ products in India to guarantee quality and purity.`,
          options: ['Electronic', 'Agricultural and food', 'Gold jewellery', 'Cement'],
          correctIndex: 1,
          explanation: 'AGMARK is a certification mark employed on agricultural products in India (BIS Hallmark is for gold/silver).',
          topic: 'Consumer Awareness'
        },
        {
          text: `If two citizens have a legal dispute over property or fundamental rights, which is the highest court of appeal in India?`,
          options: ['District Court', 'The Supreme Court of India (in New Delhi)', 'Tehsildar Office', 'Lok Adalat'],
          correctIndex: 1,
          explanation: 'The Supreme Court of India, located in New Delhi, is the apex judicial body and guardian of the Constitution.',
          topic: 'Indian Judicial System'
        },
        {
          text: `Look at the ballot box / voting icon 🗳️. Which independent constitutional body conducts free and fair elections in India?`,
          options: [
            'NITI Aayog',
            'Election Commission of India (ECI)',
            'Reserve Bank of India',
            'Finance Commission'
          ],
          correctIndex: 1,
          diagramEmoji: '🗳️',
          explanation: 'The Election Commission of India (Article 324) supervises and conducts Parliamentary and State Assembly elections.',
          topic: 'Electoral Democracy'
        },
        {
          text: `Which bank serves as the Central Bank of India and issues currency notes (except ₹1)?`,
          options: ['State Bank of India', 'Reserve Bank of India (RBI)', 'NABARD', 'Punjab National Bank'],
          correctIndex: 1,
          explanation: 'The Reserve Bank of India (RBI), established in 1935, regulates India\'s monetary policy and currency issuance.',
          topic: 'Economic Institutions'
        }
      ];
    }

    if (level === 3) {
      return [
        {
          text: `The Parliament of India (Sansad) consists of which three components?`,
          options: [
            'Prime Minister, Chief Ministers, and Governors',
            'The President of India, the Lok Sabha (House of the People), and the Rajya Sabha (Council of States)',
            'Supreme Court, High Court, and District Court',
            'Lok Sabha, Vidhan Sabha, and Gram Sabha'
          ],
          correctIndex: 1,
          explanation: 'Under Article 79, the Union Parliament comprises the President and the two Houses: Lok Sabha and Rajya Sabha.',
          topic: 'Union Legislature'
        },
        {
          text: `Fill in the blank: There are _____ Fundamental Duties listed in Article 51A (Part IVA) of the Constitution of India.`,
          options: ['6', '11', '15', '20'],
          correctIndex: 1,
          explanation: 'There are 11 Fundamental Duties reminding citizens of their moral and civic obligations to the nation.',
          topic: 'Fundamental Duties'
        },
        {
          text: `True or False: The Rajya Sabha (Upper House of Parliament) is a permanent body and is never completely dissolved.`,
          options: ['True', 'False', 'It dissolves every 2 years', 'It has no members'],
          correctIndex: 0,
          explanation: 'Rajya Sabha is a permanent house where one-third of its members retire every two years after a 6-year term.',
          topic: 'Rajya Sabha vs Lok Sabha'
        },
        {
          text: `Who appoints the Governor of an Indian State?`,
          options: [
            'The Chief Minister of the State',
            'The President of India',
            'The Speaker of the Lok Sabha',
            'The Mayor of the capital city'
          ],
          correctIndex: 1,
          explanation: 'The Governor of a State is appointed by the President of India by warrant under his hand and seal.',
          topic: 'State Executive'
        },
        {
          text: `Which Fundamental Right empowers citizens to move the Supreme Court directly if any of their Fundamental Rights are violated?`,
          options: [
            'Right to Freedom of Religion',
            'Right to Constitutional Remedies (Article 32)',
            'Right against Exploitation',
            'Cultural and Educational Rights'
          ],
          correctIndex: 1,
          explanation: 'Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the "heart and soul" of the Constitution.',
          topic: 'Constitutional Remedies'
        },
        {
          text: `Identify the INCORRECT statement regarding a Bill becoming an Act in the Indian Parliament:`,
          options: [
            'A Money Bill can only be introduced in the Lok Sabha',
            'An ordinary bill must be passed by both Houses of Parliament',
            'A bill becomes an Act (Law) only after receiving the assent of the President of India',
            'Any school student can sign a bill into national law'
          ],
          correctIndex: 3,
          explanation: 'Only bills passed by Parliament and assented to by the President become Acts of Parliament.',
          topic: 'How Laws Are Made'
        },
        {
          text: `Complete the sentence: The system of government in which power is constitutionally divided between a Central authority and constituent State governments is called _____.`,
          options: ['Monarchy', 'Federalism', 'Dictatorship', 'Autocracy'],
          correctIndex: 1,
          explanation: 'Federalism divides legislative and executive powers between the Union Government and State Governments.',
          topic: 'Federal Structure'
        },
        {
          text: `Under the Right to Information (RTI) Act, 2005, citizens have the legal right to:`,
          options: [
            'Request public records and information from government authorities to promote transparency',
            'Avoid paying all taxes',
            'Print their own currency',
            'Drive without a license'
          ],
          correctIndex: 0,
          explanation: 'The RTI Act empowers citizens to seek timely information from public authorities, ensuring accountability.',
          topic: 'Transparency & Governance'
        },
        {
          text: `Look at the scales of justice icon ⚖️. What does the blindfolded figure holding balanced scales symbolize in a court of law?`,
          options: [
            'Weighing groceries in a market',
            'Impartiality and equality before the law without bias or favoritism',
            'Delayed judgment',
            'Power of wealthy merchants'
          ],
          correctIndex: 1,
          diagramEmoji: '⚖️',
          explanation: 'The balanced scales represent fair weighing of evidence and equality before the law (Article 14).',
          topic: 'Rule of Law & Justice'
        },
        {
          text: `Which cooperative movement in India, pioneered by Dr. Verghese Kurien (Amul), transformed India into the world's largest producer of milk?`,
          options: ['Green Revolution', 'White Revolution (Operation Flood)', 'Blue Revolution', 'Golden Fibre Revolution'],
          correctIndex: 1,
          explanation: 'Operation Flood (the White Revolution), led by Dr. Verghese Kurien, revolutionized dairy cooperatives across India.',
          topic: 'Cooperative Movements & Development'
        }
      ];
    }

    // LEVEL 4: ADVANCED (10 Completely Different Questions)
    return [
      {
        text: `In the Seventh Schedule of the Indian Constitution, subjects of governance are divided into which three lists?`,
        options: [
          'Village List, City List, and Town List',
          'Union List, State List, and Concurrent List',
          'Primary List, Secondary List, and Tertiary List',
          'Civil List, Criminal List, and Revenue List'
        ],
        correctIndex: 1,
        explanation: 'The Seventh Schedule distributes legislative subjects among the Union List, State List, and Concurrent List.',
        topic: 'Constitutional Distribution of Powers'
      },
      {
        text: `Fill in the blank: The Directive Principles of State Policy (Part IV of the Indian Constitution) were inspired primarily by the Constitution of _____.`,
        options: ['Japan', 'Ireland', 'South Africa', 'Russia'],
        correctIndex: 1,
        explanation: 'The framers of the Indian Constitution borrowed the Directive Principles of State Policy (DPSP) from the Irish Constitution.',
        topic: 'Sources of the Constitution'
      },
      {
        text: `True or False: In case of a conflict between a Union law and a State law on a subject in the Concurrent List (like Education or Forests), the Union law generally prevails.`,
        options: ['True', 'False', 'State law always cancels Union law', 'Neither law applies'],
        correctIndex: 0,
        explanation: 'Under Article 254, if both Parliament and a State Legislature legislate on a Concurrent subject and conflict, the central law prevails.',
        topic: 'Centre-State Relations'
      },
      {
        text: `What does the term "Secular" in the Preamble of the Indian Constitution signify?`,
        options: [
          'The State has one official state religion',
          'The State treats all religions with equal respect (Sarva Dharma Sambhava) and does not favor or discriminate against any religion',
          'Citizens are prohibited from practicing any faith',
          'Only one festival can be celebrated'
        ],
        correctIndex: 1,
        explanation: 'Indian secularism guarantees freedom of conscience and equal treatment of all religions by the State.',
        topic: 'Constitutional Values'
      },
      {
        text: `Which Constitutional Amendment Act of 1992 gave constitutional status to Panchayati Raj Institutions (rural local government) in India?`,
        options: ['42nd Amendment Act', '73rd Constitutional Amendment Act', '86th Amendment Act', '101st Amendment Act'],
        correctIndex: 1,
        explanation: 'The 73rd Amendment Act (1992) added Part IX to the Constitution, institutionalizing Panchayati Raj (74th is for Municipalities).',
        topic: 'Constitutional Amendments'
      },
      {
        text: `Identify the INCORRECT statement about the President of India:`,
        options: [
          'The President is the constitutional Head of State and Supreme Commander of the Armed Forces',
          'The President is elected by an Electoral College consisting of elected MPs and MLAs',
          'The minimum age to become President of India is 35 years',
          'The President holds office for a permanent life-time hereditary term'
        ],
        correctIndex: 3,
        explanation: 'India is a Republic, not a monarchy; the President is elected for a 5-year term, never a hereditary lifetime office.',
        topic: 'The Union Executive'
      },
      {
        text: `Complete the sentence: Gross Domestic Product (GDP) measures the total monetary value of all _____ produced within a country's borders in a specific year.`,
        options: [
          'old second-hand items',
          'final goods and services',
          'imported foreign gifts only',
          'unprocessed rocks'
        ],
        correctIndex: 1,
        explanation: 'GDP is the total market value of all final goods and services produced within a nation during a year.',
        topic: 'Economics & National Income'
      },
      {
        text: `What is "Sustainable Development" as defined by global environmental and social policy?`,
        options: [
          'Using up all coal and forests as fast as possible',
          'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs',
          'Stopping all schools and hospitals',
          'Building factories inside wildlife sanctuaries'
        ],
        correctIndex: 1,
        explanation: 'The Brundtland Commission defined sustainable development as balancing present economic progress with ecological preservation for future generations.',
        topic: 'Sustainable Development Goals'
      },
      {
        text: `Look at the Parliament icon 🏛️. Who presides over the joint sitting of both Houses of the Indian Parliament?`,
        options: [
          'The Chief Justice of India',
          'The Speaker of the Lok Sabha',
          'The Governor of Delhi',
          'The Cabinet Secretary'
        ],
        correctIndex: 1,
        diagramEmoji: '🏛️',
        explanation: 'Under Article 118(4), the Speaker of the Lok Sabha presides over a joint sitting of the two Houses.',
        topic: 'Parliamentary Procedures'
      },
      {
        text: `Which writ is issued by the Supreme Court or a High Court commanding a lower authority or police officer to produce a detained person before the court ("to have the body")?`,
        options: ['Mandamus', 'Habeas Corpus', 'Certiorari', 'Quo Warranto'],
        correctIndex: 1,
        explanation: '"Habeas Corpus" is a fundamental constitutional writ protecting personal liberty against unlawful detention.',
        topic: 'Judicial Writs & Liberty'
      }
    ];
  }

  return null;
}
