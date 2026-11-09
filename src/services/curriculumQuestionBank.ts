import { ClassLevel, SubjectName, QuizLevel, QuizQuestion, QuestionType } from '../types';
import { normalizeQuestionText } from './questionBankService';
import { randomizeQuizQuestions } from './answerRandomizerService';

export interface CurriculumBlueprint {
  subject: SubjectName;
  topicsByClass: Record<ClassLevel, string[]>;
}

// 10 Question types in strict order to guarantee pattern diversity across the 10 questions in every level
export const TEN_QUESTION_PATTERNS: QuestionType[] = [
  'mcq',
  'fill_blank',
  'true_false',
  'match_following',
  'choose_correct_statement',
  'find_incorrect',
  'complete_sentence',
  'problem_solving',
  'picture_based',
  'logical_reasoning'
];

export const LEVEL_DIFFICULTIES: Record<QuizLevel, 'easy' | 'medium' | 'hard' | 'expert'> = {
  1: 'easy',
  2: 'medium',
  3: 'hard',
  4: 'expert'
};

export const LEVEL_LABELS: Record<QuizLevel, { title: string; subtitle: string; color: string; badge: string }> = {
  1: { title: 'Level 1 – Easy', subtitle: 'Foundations & Basics', color: 'from-emerald-500 to-teal-600', badge: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  2: { title: 'Level 2 – Medium', subtitle: 'Concept Application', color: 'from-blue-500 to-indigo-600', badge: 'bg-blue-100 text-blue-800 border-blue-300' },
  3: { title: 'Level 3 – Hard', subtitle: 'Analytical Thinking', color: 'from-amber-500 to-orange-600', badge: 'bg-amber-100 text-amber-800 border-amber-300' },
  4: { title: 'Level 4 – Expert', subtitle: 'Mastery & Challenge', color: 'from-purple-600 to-rose-600', badge: 'bg-purple-100 text-purple-800 border-purple-300' }
};

interface QuestionSpec {
  text: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  topic: string;
  diagramEmoji?: string;
}

// Curriculum-aligned generator function tailored per (class, subject, level, qIndex)
function createCurriculumQuestionSpec(
  classLevel: ClassLevel,
  subject: SubjectName,
  level: QuizLevel,
  patternIndex: number // 0 to 9
): QuestionSpec {
  const cNum = parseInt(classLevel.replace('Class ', ''), 10);
  const pattern = TEN_QUESTION_PATTERNS[patternIndex];

  // Helper variables for variety
  const mult = level * 3 + patternIndex;

  // 1. MATHEMATICS
  if (subject === 'Mathematics') {
    if (cNum === 2) {
      if (patternIndex === 0) return {
        text: `A basket has ${10 + level * 4} red apples and ${5 + level * 2} green apples. How many apples are there altogether?`,
        options: [`${15 + level * 6 - 2}`, `${15 + level * 6}`, `${15 + level * 6 + 3}`, `${15 + level * 6 + 5}`],
        correctIndex: 1,
        explanation: `${10 + level * 4} + ${5 + level * 2} = ${15 + level * 6} apples in total.`,
        topic: 'Addition & Regrouping'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The number that comes immediately before ${20 + level * 10} is _____`,
        options: [`${19 + level * 10}`, `${21 + level * 10}`, `${18 + level * 10}`, `${22 + level * 10}`],
        correctIndex: 0,
        explanation: `The predecessor (number just before) of ${20 + level * 10} is ${19 + level * 10}.`,
        topic: 'Before and After Numbers'
      };
      if (patternIndex === 2) return {
        text: `True or False: A standard square has 4 equal sides and 4 corners.`,
        options: ['True', 'False', 'Only 3 sides', 'Only 2 corners'],
        correctIndex: 0,
        explanation: 'A square always possesses 4 equal straight edges and 4 right corners.',
        topic: '2D Shapes'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which pair correctly associates the numeral with its word form?`,
        options: ['14 -> Forty', '18 -> Eighteen', '12 -> Twenty-one', '15 -> Fifty'],
        correctIndex: 1,
        explanation: '18 in word notation is Eighteen.',
        topic: 'Number Names'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement about counting in groups of 2:`,
        options: ['13 is an even number', 'Counting by 2s from 10 gives 10, 12, 14, 16', '15 can be split into 2 equal whole groups', '2 + 2 + 2 = 7'],
        correctIndex: 1,
        explanation: 'Counting by 2s: 10, 12, 14, 16 are consecutive even numbers.',
        topic: 'Skip Counting by 2'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT subtraction equation:`,
        options: ['10 - 4 = 6', '15 - 5 = 10', '18 - 6 = 11', '12 - 7 = 5'],
        correctIndex: 2,
        explanation: '18 - 6 equals 12, not 11. Thus, option 3 is incorrect.',
        topic: 'Basic Subtraction'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: A clock face has numbers from 1 to _____`,
        options: ['10', '12', '24', '60'],
        correctIndex: 1,
        explanation: 'A standard analog clock face is marked with numbers from 1 to 12.',
        topic: 'Reading Clock'
      };
      if (patternIndex === 7) return {
        text: `Rohan had ${20 + level * 5} marbles. He lost ${6 + level}. How many marbles does Rohan have left?`,
        options: [`${14 + level * 4 - 1}`, `${14 + level * 4}`, `${14 + level * 4 + 2}`, `${14 + level * 4 + 4}`],
        correctIndex: 1,
        explanation: `${20 + level * 5} - ${6 + level} = ${14 + level * 4} marbles remaining.`,
        topic: 'Word Problems'
      };
      if (patternIndex === 8) return {
        text: `Look at the geometric shape: ⭕ What is the name of this closed round shape?`,
        options: ['Triangle', 'Circle', 'Square', 'Cylinder'],
        correctIndex: 1,
        diagramEmoji: '⭕',
        explanation: 'A circle is a round plane figure whose boundary consists of points equidistant from a fixed center.',
        topic: 'Shape Recognition'
      };
      return {
        text: `Logical Reasoning: If 1 cat has 4 legs, how many legs do ${2 + level} cats have in all?`,
        options: [`${(2 + level) * 4 - 2}`, `${(2 + level) * 4}`, `${(2 + level) * 4 + 4}`, `${(2 + level) * 4 + 2}`],
        correctIndex: 1,
        explanation: `${2 + level} cats × 4 legs each = ${(2 + level) * 4} legs.`,
        topic: 'Repeated Addition & Logic'
      };
    } else if (cNum <= 4) {
      // Classes 3-4: Multiplication, Division, Fractions, Perimeter
      const baseNum = cNum * 3 + level;
      if (patternIndex === 0) return {
        text: `Evaluate: A shopkeeper packs ${baseNum} boxes. Each box contains 7 pencils. How many pencils are packed in all?`,
        options: [`${baseNum * 7 - 7}`, `${baseNum * 7}`, `${baseNum * 7 + 7}`, `${baseNum * 7 + 14}`],
        correctIndex: 1,
        explanation: `${baseNum} × 7 = ${baseNum * 7} pencils.`,
        topic: 'Multiplication Operations'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: In the fraction 3/8, the number 8 is called the _____`,
        options: ['Numerator', 'Denominator', 'Quotient', 'Divisor'],
        correctIndex: 1,
        explanation: 'The bottom number in a fraction is the denominator; the top number is the numerator.',
        topic: 'Fractions Basics'
      };
      if (patternIndex === 2) return {
        text: `True or False: Any number multiplied by 0 is always equal to 0.`,
        options: ['True', 'False', 'It equals 1', 'It equals the same number'],
        correctIndex: 0,
        explanation: 'The Zero Property of Multiplication states that the product of any number and 0 is 0.',
        topic: 'Properties of Numbers'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which measurement unit matches measuring the length of a classroom?`,
        options: ['Millilitres (mL)', 'Metres (m)', 'Kilograms (kg)', 'Grams (g)'],
        correctIndex: 1,
        explanation: 'Lengths of rooms and playgrounds are measured in metres (m).',
        topic: 'Units of Measurement'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement about a rectangle of length 8 cm and breadth 5 cm:`,
        options: ['Its perimeter is 13 cm', 'Its perimeter is 26 cm', 'Its area is 13 sq cm', 'Its opposite sides are unequal'],
        correctIndex: 1,
        explanation: 'Perimeter of rectangle = 2 × (length + breadth) = 2 × (8 + 5) = 26 cm.',
        topic: 'Perimeter Calculation'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT mathematical statement:`,
        options: ['48 ÷ 6 = 8', '7 × 9 = 63', '54 ÷ 9 = 7', '35 ÷ 5 = 7'],
        correctIndex: 2,
        explanation: '54 ÷ 9 is 6, not 7. So statement 3 is incorrect.',
        topic: 'Division Facts'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: A triangle having all three sides of equal length is called an _____ triangle.`,
        options: ['Isosceles', 'Equilateral', 'Scalene', 'Right-angled'],
        correctIndex: 1,
        explanation: 'An equilateral triangle has all three sides and all three angles equal (60° each).',
        topic: 'Classifying Triangles'
      };
      if (patternIndex === 7) return {
        text: `Problem Solving: A school bus travels ${24 + level * 6} km in the morning and ${18 + level * 4} km in the afternoon. What is the total distance covered?`,
        options: [`${42 + level * 10 - 5}`, `${42 + level * 10}`, `${42 + level * 10 + 4}`, `${42 + level * 10 + 10}`],
        correctIndex: 1,
        explanation: `${24 + level * 6} + ${18 + level * 4} = ${42 + level * 10} km.`,
        topic: 'Two-Step Word Problems'
      };
      if (patternIndex === 8) return {
        text: `Visual Analysis: Look at this clock icon 🕒. If both hands are at 3:00, what type of angle do they form?`,
        options: ['Acute angle (< 90°)', 'Right angle (exactly 90°)', 'Obtuse angle (> 90°)', 'Straight angle (180°)'],
        correctIndex: 1,
        diagramEmoji: '🕒',
        explanation: 'At 3:00, the hour hand points to 3 and minute hand points to 12, forming a 90° right angle.',
        topic: 'Angles & Clock Hands'
      };
      return {
        text: `Logical Pattern: Find the missing term in the sequence: ${12 + level * 2}, ${17 + level * 2}, ${22 + level * 2}, ${27 + level * 2}, ___`,
        options: [`${30 + level * 2}`, `${32 + level * 2}`, `${34 + level * 2}`, `${35 + level * 2}`],
        correctIndex: 1,
        explanation: `Each number increases by +5. ${27 + level * 2} + 5 = ${32 + level * 2}.`,
        topic: 'Arithmetic Sequence'
      };
    } else if (cNum <= 6) {
      // Classes 5-6: Fractions, Decimals, Integers, Ratios, Basic Equations
      const variableVal = cNum + level + patternIndex;
      if (patternIndex === 0) return {
        text: `Calculate the value of the algebraic expression: If x = ${variableVal}, what is 3x - 5?`,
        options: [`${3 * variableVal - 3}`, `${3 * variableVal - 5}`, `${3 * variableVal - 7}`, `${3 * variableVal}`],
        correctIndex: 1,
        explanation: `3 × ${variableVal} - 5 = ${3 * variableVal} - 5 = ${3 * variableVal - 5}.`,
        topic: 'Basic Algebraic Expressions'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The greatest common factor (HCF) of 24 and 36 is _____`,
        options: ['6', '12', '18', '24'],
        correctIndex: 1,
        explanation: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. The highest common factor is 12.',
        topic: 'HCF and LCM'
      };
      if (patternIndex === 2) return {
        text: `True or False: The integer -15 is greater than -8 on the standard number line.`,
        options: ['True', 'False', 'Both are equal', 'Negative numbers have no order'],
        correctIndex: 1,
        explanation: 'On the number line, numbers further to the left are smaller. -15 is to the left of -8, so -15 < -8.',
        topic: 'Comparing Integers'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Express the ratio 25 : 75 in its simplest irreducible form:`,
        options: ['1 : 2', '1 : 3', '2 : 3', '3 : 1'],
        correctIndex: 1,
        explanation: 'Dividing both numerator and denominator by 25 yields 1 : 3.',
        topic: 'Ratios and Proportions'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement regarding prime numbers:`,
        options: ['1 is the smallest prime number', '2 is the only even prime number', 'All odd numbers are prime', '9 is a prime number'],
        correctIndex: 1,
        explanation: '2 is the only even prime number because all other even numbers are divisible by 2.',
        topic: 'Prime and Composite Numbers'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT decimal equivalence:`,
        options: ['1/2 = 0.5', '3/4 = 0.75', '1/4 = 0.20', '1/5 = 0.2'],
        correctIndex: 2,
        explanation: '1/4 equals 0.25, not 0.20. Therefore statement 3 is incorrect.',
        topic: 'Decimals and Fractions'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: The sum of the three interior angles in any Euclidean triangle is always _____`,
        options: ['90°', '180°', '270°', '360°'],
        correctIndex: 1,
        explanation: 'Angle sum property of a triangle states that ∠A + ∠B + ∠C = 180°.',
        topic: 'Geometry Properties'
      };
      if (patternIndex === 7) return {
        text: `Problem Solving: A rectangular garden has length ${12 + level * 2} m and breadth 8 m. What is its area in square metres?`,
        options: [`${(12 + level * 2) * 8 - 8}`, `${(12 + level * 2) * 8}`, `${(12 + level * 2) * 8 + 8}`, `${(12 + level * 2) * 8 + 16}`],
        correctIndex: 1,
        explanation: `Area = length × breadth = ${12 + level * 2} × 8 = ${(12 + level * 2) * 8} sq m.`,
        topic: 'Area and Perimeter'
      };
      if (patternIndex === 8) return {
        text: `Diagram Question: In a Cartesian bar graph 📊, if the scale is 1 unit = 10 students, a bar of height 6 units represents how many students?`,
        options: ['16 students', '60 students', '600 students', '36 students'],
        correctIndex: 1,
        diagramEmoji: '📊',
        explanation: '6 units × 10 students/unit = 60 students.',
        topic: 'Data Handling & Bar Graphs'
      };
      return {
        text: `Logical Reasoning: If 5 pens cost ₹${50 + level * 10}, what is the cost of 8 such pens?`,
        options: [`₹${(10 + level * 2) * 8 - 10}`, `₹${(10 + level * 2) * 8}`, `₹${(10 + level * 2) * 8 + 10}`, `₹${(10 + level * 2) * 8 + 16}`],
        correctIndex: 1,
        explanation: `Cost of 1 pen = ₹${50 + level * 10} ÷ 5 = ₹${10 + level * 2}. For 8 pens = 8 × ₹${10 + level * 2} = ₹${(10 + level * 2) * 8}.`,
        topic: 'Unitary Method'
      };
    } else {
      // Classes 7-8: Linear Equations, Exponents, Rational Numbers, Square Roots, Surface Area
      const rootBase = 11 + level + patternIndex;
      if (patternIndex === 0) return {
        text: `Solve the linear equation for y: 4y - 7 = ${4 * rootBase - 7}`,
        options: [`y = ${rootBase - 2}`, `y = ${rootBase}`, `y = ${rootBase + 2}`, `y = ${rootBase + 4}`],
        correctIndex: 1,
        explanation: `4y = ${4 * rootBase - 7} + 7 = ${4 * rootBase}. y = ${4 * rootBase} ÷ 4 = ${rootBase}.`,
        topic: 'Linear Equations in One Variable'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The value of 2 raised to power 5 (2⁵) is equal to _____`,
        options: ['10', '32', '64', '25'],
        correctIndex: 1,
        explanation: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.',
        topic: 'Exponents and Powers'
      };
      if (patternIndex === 2) return {
        text: `True or False: Every integer is also a rational number because it can be written as p/1 where p is an integer.`,
        options: ['True', 'False', 'Only positive integers', 'Only non-zero integers'],
        correctIndex: 0,
        explanation: 'Any integer n can be expressed in the form n/1 where denominator 1 ≠ 0, making it rational.',
        topic: 'Rational Numbers'
      };
      if (patternIndex === 3) return {
        text: `Match the following: What is the square root of ${rootBase * rootBase}?`,
        options: [`${rootBase - 1}`, `${rootBase}`, `${rootBase + 1}`, `${rootBase + 2}`],
        correctIndex: 1,
        explanation: `√(${rootBase * rootBase}) = ${rootBase}.`,
        topic: 'Squares and Square Roots'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement about Pythagoras Theorem for right-angled triangle with legs a, b and hypotenuse c:`,
        options: ['a + b = c', 'a² + b² = c²', 'a² - b² = c²', 'ab = c²'],
        correctIndex: 1,
        explanation: 'In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides (a² + b² = c²).',
        topic: 'Pythagoras Theorem'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT algebraic identity:`,
        options: ['(a + b)² = a² + 2ab + b²', '(a - b)² = a² - 2ab + b²', '(a + b)(a - b) = a² - b²', '(a + b)² = a² + b²'],
        correctIndex: 3,
        explanation: '(a + b)² expands to a² + 2ab + b², missing the cross term 2ab in option 4.',
        topic: 'Algebraic Identities'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: Two figures are said to be congruent if they have exactly the same shape and _____`,
        options: ['same color', 'same size', 'different orientation only', 'same perimeter only'],
        correctIndex: 1,
        explanation: 'Geometric congruence requires identical shape and identical size (all corresponding sides and angles equal).',
        topic: 'Congruence of Triangles'
      };
      if (patternIndex === 7) return {
        text: `Problem Solving: An item marked at ₹${800 + level * 100} is sold with a 15% discount. What is the final selling price?`,
        options: [`₹${(800 + level * 100) * 0.85 - 10}`, `₹${(800 + level * 100) * 0.85}`, `₹${(800 + level * 100) * 0.85 + 15}`, `₹${(800 + level * 100) * 0.85 + 25}`],
        correctIndex: 1,
        explanation: `Discount = 15% of ₹${800 + level * 100} = ₹${(800 + level * 100) * 0.15}. Selling Price = ₹${800 + level * 100} - ₹${(800 + level * 100) * 0.15} = ₹${(800 + level * 100) * 0.85}.`,
        topic: 'Discount and Percentages'
      };
      if (patternIndex === 8) return {
        text: `Diagrammatic Reasoning: In a pie chart 🥧 representing school expenditures, a sector measuring 90° represents what percentage of total budget?`,
        options: ['10%', '25%', '33.3%', '50%'],
        correctIndex: 1,
        diagramEmoji: '🥧',
        explanation: 'Total angle in a circle is 360°. (90° / 360°) × 100% = 25%.',
        topic: 'Pie Chart Interpretation'
      };
      return {
        text: `Logical Deduction: If 6 workers can construct a wall in 12 days, how many days will 9 workers take working at the same pace?`,
        options: ['6 days', '8 days', '10 days', '15 days'],
        correctIndex: 1,
        explanation: 'Inverse proportion: Total work = 6 × 12 = 72 worker-days. Days for 9 workers = 72 ÷ 9 = 8 days.',
        topic: 'Inverse Variation'
      };
    }
  }

  // 2. SCIENCE & ENVIRONMENTAL STUDIES
  if (subject === 'Science' || subject === 'Environmental Studies') {
    if (cNum <= 3) {
      if (patternIndex === 0) return {
        text: `Which part of a plant grows downwards beneath the soil to absorb water and minerals?`,
        options: ['Stem', 'Root', 'Flower', 'Leaf'],
        correctIndex: 1,
        explanation: 'Roots grow downward into the soil to anchor the plant and absorb moisture and essential minerals.',
        topic: 'Plant Anatomy'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The green pigment in plant leaves that captures sunlight for photosynthesis is _____`,
        options: ['Hemoglobin', 'Chlorophyll', 'Melanin', 'Stoma'],
        correctIndex: 1,
        explanation: 'Chlorophyll gives leaves their green hue and traps sunlight energy.',
        topic: 'Plant Nutrition'
      };
      if (patternIndex === 2) return {
        text: `True or False: Animals that eat only plants, grasses, and leaves are called herbivores.`,
        options: ['True', 'False', 'They are called carnivores', 'They are omnivores'],
        correctIndex: 0,
        explanation: 'Herbivores (like cows, deer, and rabbits) feed exclusively on plant matter.',
        topic: 'Animal Diets'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which animal is known to breathe through moist skin as well as lungs?`,
        options: ['Eagle', 'Frog', 'Elephant', 'Sparrow'],
        correctIndex: 1,
        explanation: 'Amphibians like frogs can absorb oxygen through their moist skin underwater and breathe via lungs on land.',
        topic: 'Amphibian Adaptations'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement regarding states of matter:`,
        options: ['Water vapor is a solid', 'Ice is the solid state of water', 'Steam has a fixed shape', 'Liquids cannot flow'],
        correctIndex: 1,
        explanation: 'Ice is the frozen solid state of water formed below 0°C.',
        topic: 'States of Matter'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT statement about human senses:`,
        options: ['Eyes help us see', 'Ears help us hear sounds', 'Tongue helps us taste flavors', 'Nose helps us see colors'],
        correctIndex: 3,
        explanation: 'The nose is the olfactory organ for smelling, not for perceiving colors.',
        topic: 'Human Sense Organs'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: Birds have hollow lightweight bones that help them _____`,
        options: ['swim deep', 'fly easily in the air', 'dig underground tunnels', 'carry heavy loads'],
        correctIndex: 1,
        explanation: 'Pneumatic (hollow) bones reduce body mass without sacrificing strength, enabling flight.',
        topic: 'Bird Adaptations'
      };
      if (patternIndex === 7) return {
        text: `Environmental Challenge: Why should we practice turning off running taps while brushing our teeth?`,
        options: ['To waste more water', 'To conserve clean freshwater', 'To decrease water pressure', 'To fill the drain'],
        correctIndex: 1,
        explanation: 'Turning off taps prevents wasteful loss of precious treated potable water.',
        topic: 'Water Conservation'
      };
      if (patternIndex === 8) return {
        text: `Visual Question: Look at this weather icon ☀️. What is the ultimate primary source of heat and light on Earth?`,
        options: ['The Moon', 'The Sun', 'Electric heaters', 'Volcanoes'],
        correctIndex: 1,
        diagramEmoji: '☀️',
        explanation: 'The Sun produces continuous solar radiation, powering Earth weather, climate, and photosynthesis.',
        topic: 'Solar Energy'
      };
      return {
        text: `Logical Reasoning: In a garden ecosystem: Sunlight -> Grass -> Grasshopper -> Bird. Who is the primary producer?`,
        options: ['Bird', 'Grasshopper', 'Grass', 'Sunlight'],
        correctIndex: 2,
        explanation: 'Grass produces its own organic food via photosynthesis, making it the primary producer.',
        topic: 'Food Chains'
      };
    } else if (cNum <= 5) {
      if (patternIndex === 0) return {
        text: `Which organ in the human body continuously pumps oxygenated blood through the circulatory system?`,
        options: ['Lungs', 'Heart', 'Kidney', 'Stomach'],
        correctIndex: 1,
        explanation: 'The human heart is a muscular pump that circulates blood through arteries and veins.',
        topic: 'Human Circulatory System'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The tiny pores on the underside of plant leaves used for gaseous exchange are called _____`,
        options: ['Chloroplasts', 'Stomata', 'Tendrils', 'Petals'],
        correctIndex: 1,
        explanation: 'Stomata regulate the exchange of oxygen, carbon dioxide, and water vapor during transpiration.',
        topic: 'Plant Physiology'
      };
      if (patternIndex === 2) return {
        text: `True or False: Biodegradable waste like vegetable peels and leaves can decompose naturally into nutrient-rich compost.`,
        options: ['True', 'False', 'Only plastic decomposes', 'Compost is toxic'],
        correctIndex: 0,
        explanation: 'Microorganisms break down organic biological matter into natural humus and compost.',
        topic: 'Waste Management'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which nutrient is primarily responsible for muscle building and repairing damaged body tissues?`,
        options: ['Carbohydrates', 'Proteins', 'Fats', 'Roughage'],
        correctIndex: 1,
        explanation: 'Proteins provide amino acids required for cell growth, tissue repair, and enzyme synthesis.',
        topic: 'Nutrition & Balanced Diet'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement about simple machines:`,
        options: ['A ramp is an inclined plane that reduces effort required to lift heavy loads', 'A lever increases friction', 'Pulleys cannot change the direction of force', 'Screws are not inclined planes'],
        correctIndex: 0,
        explanation: 'An inclined plane allows heavy objects to be moved upward with less applied effort over a longer distance.',
        topic: 'Simple Machines'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT statement about the Solar System:`,
        options: ['Jupiter is the largest planet in our solar system', 'Mercury is closest to the Sun', 'Earth takes about 365 days to complete one revolution', 'Venus has vast liquid water oceans'],
        correctIndex: 3,
        explanation: 'Venus has an extremely hot, dry atmosphere of carbon dioxide and sulfuric acid clouds with no liquid water.',
        topic: 'Astronomy & Planets'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: Deficiency of Vitamin C in human diet causes a deficiency disease known as _____`,
        options: ['Rickets', 'Scurvy', 'Beriberi', 'Goitre'],
        correctIndex: 1,
        explanation: 'Scurvy causes bleeding gums and fatigue due to insufficient Vitamin C (ascorbic acid).',
        topic: 'Deficiency Diseases'
      };
      if (patternIndex === 7) return {
        text: `Scientific Inquiry: Which method is most effective for separating insoluble sand particles from river water?`,
        options: ['Evaporation', 'Filtration', 'Condensation', 'Distillation'],
        correctIndex: 1,
        explanation: 'Filtration passes the liquid through porous filter paper, retaining the solid sand residue.',
        topic: 'Separation of Mixtures'
      };
      if (patternIndex === 8) return {
        text: `Diagram Identification: Look at this ecological icon 💧. What process turns liquid water into invisible water vapor when heated?`,
        options: ['Precipitation', 'Evaporation', 'Freezing', 'Sublimation'],
        correctIndex: 1,
        diagramEmoji: '💧',
        explanation: 'Evaporation is the phase transition from liquid water to gaseous water vapor.',
        topic: 'The Water Cycle'
      };
      return {
        text: `Logical Deduction: Why do desert plants like cacti possess thick fleshy stems and modified spines instead of broad leaves?`,
        options: ['To attract pollinators only', 'To minimize water loss via transpiration and store water', 'To absorb maximum rainfall', 'To provide shade for animals'],
        correctIndex: 1,
        explanation: 'Spines minimize surface area to prevent transpiration, while fleshy stems store vital water.',
        topic: 'Desert Adaptations'
      };
    } else {
      // Classes 6-8: Cell Biology, Chemical Reactions, Electricity, Force & Pressure, Light
      if (patternIndex === 0) return {
        text: `Which cellular organelle contains genetic DNA and controls all metabolic activities of a eukaryotic cell?`,
        options: ['Ribosome', 'Nucleus', 'Vacuole', 'Golgi apparatus'],
        correctIndex: 1,
        explanation: 'The nucleus houses chromatin (DNA) and acts as the command center of the eukaryotic cell.',
        topic: 'Cell Structure and Functions'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The SI unit of physical force measured in mechanics is the _____`,
        options: ['Joule', 'Newton', 'Pascal', 'Watt'],
        correctIndex: 1,
        explanation: 'Force is measured in Newtons (N) in honor of Sir Isaac Newton (1 N = 1 kg·m/s²).',
        topic: 'Force and Pressure'
      };
      if (patternIndex === 2) return {
        text: `True or False: Sound waves require a material medium (solid, liquid, or gas) and cannot travel through a vacuum.`,
        options: ['True', 'False', 'Sound travels fastest in vacuum', 'Light requires a medium too'],
        correctIndex: 0,
        explanation: 'Sound is a mechanical longitudinal wave requiring particle vibrations to propagate.',
        topic: 'Properties of Sound'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which pH value corresponds to a neutral aqueous solution at 25°C?`,
        options: ['pH 2', 'pH 7', 'pH 11', 'pH 14'],
        correctIndex: 1,
        explanation: 'Pure neutral water has a pH of 7; values below 7 are acidic, and above 7 are alkaline/basic.',
        topic: 'Acids, Bases and Salts'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement about electric current and circuits:`,
        options: ['Current flows only in an open circuit', 'Metals like copper are good electrical conductors because they have free valence electrons', 'Rubber conduct electricity well', 'Voltage is measured in Amperes'],
        correctIndex: 1,
        explanation: 'Metallic bonds allow valence electrons to drift freely when an electric potential difference is applied.',
        topic: 'Electricity and Circuits'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT statement about reflection and refraction of light:`,
        options: ['Angle of incidence equals angle of reflection', 'Light travels faster in water than in air', 'Convex lenses can converge parallel light rays', 'White light disperses into 7 colors through a prism'],
        correctIndex: 1,
        explanation: 'Light travels slower in optically denser media like water (~2.25 × 10⁸ m/s) compared to air (~3 × 10⁸ m/s).',
        topic: 'Optics and Light'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: Rusting of iron is a chemical change because a new compound called hydrated iron oxide is formed, and it is _____`,
        options: ['easily reversible by cooling', 'an irreversible chemical reaction', 'a physical change only', 'an endothermic condensation'],
        correctIndex: 1,
        explanation: 'Rusting involves oxidation forming a new chemical substance with distinct properties, making it irreversible.',
        topic: 'Chemical Changes'
      };
      if (patternIndex === 7) return {
        text: `Problem Solving: An object of mass 15 kg is accelerated at 4 m/s². What net force is exerted on the object? (F = ma)`,
        options: ['19 N', '60 N', '45 N', '3.75 N'],
        correctIndex: 1,
        explanation: 'F = m × a = 15 kg × 4 m/s² = 60 Newtons.',
        topic: 'Newton Laws of Motion'
      };
      if (patternIndex === 8) return {
        text: `Visual Analysis: Look at this microscopic icon 🔬. Which organelle is known as the powerhouse of the cell due to ATP generation?`,
        options: ['Chloroplast', 'Mitochondria', 'Endoplasmic Reticulum', 'Lysosome'],
        correctIndex: 1,
        diagramEmoji: '🔬',
        explanation: 'Mitochondria synthesize adenosine triphosphate (ATP) through aerobic cellular respiration.',
        topic: 'Cell Organelles'
      };
      return {
        text: `Logical Deduction: Why do atmospheric pressure gauges show lower readings at the summit of Mount Everest than at sea level?`,
        options: ['Air temperature is higher at the summit', 'The column of air above the summit is shorter and less dense', 'Earth gravity is zero on mountains', 'Mount Everest absorbs air molecules'],
        correctIndex: 1,
        explanation: 'Atmospheric pressure is caused by the weight of the air column overhead; higher altitudes have less overlying air.',
        topic: 'Atmospheric Pressure'
      };
    }
  }

  // 3. ENGLISH & VOCABULARY & GRAMMAR
  if (subject === 'English' || subject === 'Vocabulary and Grammar') {
    if (cNum <= 3) {
      if (patternIndex === 0) return {
        text: `Which word is an adjective that describes the noun in: "The playful puppy jumped over the fence."?`,
        options: ['Puppy', 'Playful', 'Jumped', 'Fence'],
        correctIndex: 1,
        explanation: '"Playful" describes the quality of the puppy, making it an adjective.',
        topic: 'Parts of Speech: Adjectives'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: Choose the correct pronoun: "Meera is reading because _____ loves books."`,
        options: ['he', 'she', 'it', 'they'],
        correctIndex: 1,
        explanation: '"She" is the third-person singular feminine pronoun referring to Meera.',
        topic: 'Pronouns'
      };
      if (patternIndex === 2) return {
        text: `True or False: The plural form of "Tooth" is "Teeth".`,
        options: ['True', 'False', 'It is Tooths', 'It is Toothes'],
        correctIndex: 0,
        explanation: '"Tooth" undergoes an irregular internal vowel change to become "Teeth".',
        topic: 'Irregular Plurals'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which word is the exact opposite (antonym) of "Gentle"?`,
        options: ['Soft', 'Harsh', 'Kind', 'Calm'],
        correctIndex: 1,
        explanation: '"Harsh" is the antonym of "Gentle".',
        topic: 'Antonyms'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct sentence with proper capitalization and punctuation:`,
        options: ['where are you going', 'Where are you going?', 'where are You going.', 'Where are you going!.'],
        correctIndex: 1,
        explanation: 'Direct questions begin with a capital letter and conclude with a question mark.',
        topic: 'Punctuation'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECTLY spelled word:`,
        options: ['Friend', 'School', 'Beutiful', 'Teacher'],
        correctIndex: 2,
        explanation: 'The correct spelling is "Beautiful", not "Beutiful".',
        topic: 'Spelling Accuracy'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: An apple a day keeps the _____ away.`,
        options: ['teacher', 'doctor', 'gardener', 'baker'],
        correctIndex: 1,
        explanation: 'The famous English proverb is: "An apple a day keeps the doctor away."',
        topic: 'Common Idioms & Proverbs'
      };
      if (patternIndex === 7) return {
        text: `Grammar Challenge: Change to past tense: "The children sing a joyful song." -> "The children _____ a joyful song."`,
        options: ['singed', 'sang', 'sung', 'sings'],
        correctIndex: 1,
        explanation: 'The past tense form of the irregular verb "sing" is "sang".',
        topic: 'Verb Tenses'
      };
      if (patternIndex === 8) return {
        text: `Picture Prompt: Look at this symbol 📚. Which collective noun describes a group of books?`,
        options: ['A flock of books', 'A library (or stack) of books', 'A herd of books', 'A pack of books'],
        correctIndex: 1,
        diagramEmoji: '📚',
        explanation: 'Books in a collection are referred to as a library, collection, or stack.',
        topic: 'Collective Nouns'
      };
      return {
        text: `Logical Word Analogy: Day is to Night as Hot is to _____`,
        options: ['Warm', 'Cold', 'Sun', 'Fire'],
        correctIndex: 1,
        explanation: 'Day and Night are opposites; the opposite of Hot is Cold.',
        topic: 'Word Analogies'
      };
    } else if (cNum <= 5) {
      if (patternIndex === 0) return {
        text: `Identify the conjunction in the sentence: "We wanted to play badminton, but it started raining heavily."`,
        options: ['Wanted', 'Badminton', 'But', 'Heavily'],
        correctIndex: 2,
        explanation: '"But" is a coordinating conjunction connecting two independent clauses.',
        topic: 'Conjunctions'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: "Neither the captain nor the players _____ ready for the final match."`,
        options: ['is', 'were', 'was', 'has'],
        correctIndex: 1,
        explanation: 'In "neither... nor" constructions, the verb agrees with the closer subject ("players" is plural -> "were").',
        topic: 'Subject-Verb Agreement'
      };
      if (patternIndex === 2) return {
        text: `True or False: In active voice, the subject performs the action stated by the verb.`,
        options: ['True', 'False', 'Subject receives action', 'Only in passive voice'],
        correctIndex: 0,
        explanation: 'Active voice features the grammatical subject performing the verb action.',
        topic: 'Active and Passive Voice'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which prefix turns the root word "Polite" into its negative antonym?`,
        options: ['Un-', 'Dis-', 'Im-', 'In-'],
        correctIndex: 2,
        explanation: 'The prefix "im-" attaches to "polite" to form "impolite".',
        topic: 'Prefixes and Suffixes'
      };
      if (patternIndex === 4) return {
        text: `Identify the sentence containing a simile:`,
        options: ['The classroom was a zoo.', 'Her laughter was as sweet as honey.', 'Time is money.', 'The wind whispered through trees.'],
        correctIndex: 1,
        explanation: 'A simile compares two things using "as" or "like" ("as sweet as honey").',
        topic: 'Figures of Speech: Simile'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT preposition usage:`,
        options: ['He jumped into the swimming pool.', 'She arrived at the station on time.', 'They discussed about the problem.', 'The cat slept under the table.'],
        correctIndex: 2,
        explanation: '"Discuss" is a transitive verb that does not take the preposition "about" ("discussed the problem").',
        topic: 'Preposition Errors'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: A person who writes books, stories, or articles is called an _____`,
        options: ['Editor', 'Author', 'Illustrator', 'Publisher'],
        correctIndex: 1,
        explanation: 'An author is the creator or writer of literary work.',
        topic: 'One-Word Substitution'
      };
      if (patternIndex === 7) return {
        text: `Sentence Transformation: Convert to indirect speech: She said, "I am reading a novel."`,
        options: [
          'She said that she is reading a novel.',
          'She said that she was reading a novel.',
          'She said that I was reading a novel.',
          'She says that she had read a novel.'
        ],
        correctIndex: 1,
        explanation: 'In reported speech with past reporting verb, present continuous shifts to past continuous.',
        topic: 'Direct and Indirect Speech'
      };
      if (patternIndex === 8) return {
        text: `Visual Context: Look at this icon ✍️. Which type of writing describes step-by-step instructions or explanations of a process?`,
        options: ['Narrative writing', 'Expository / Procedural writing', 'Poetic writing', 'Fantasy writing'],
        correctIndex: 1,
        diagramEmoji: '✍️',
        explanation: 'Expository and procedural writing informs and explains facts and steps logically.',
        topic: 'Writing Styles'
      };
      return {
        text: `Logical Inference: "Although the storm knocked down power lines, the emergency generators kicked in immediately." What happened to the electricity?`,
        options: ['Power remained out completely', 'Backup electricity was supplied without delay', 'The generators stopped working', 'Power lines were restored instantly'],
        correctIndex: 1,
        explanation: 'The emergency generators functioned as backup, maintaining immediate electrical power.',
        topic: 'Reading Comprehension & Inference'
      };
    } else {
      // Classes 6-8: Complex Grammar, Clauses, Idioms, Modal Auxiliaries, Rhetoric
      if (patternIndex === 0) return {
        text: `Identify the subordinate adverbial clause in: "When the referee blew the whistle, the players gathered at center field."`,
        options: [
          'The players gathered',
          'When the referee blew the whistle',
          'At center field',
          'Blew the whistle'
        ],
        correctIndex: 1,
        explanation: '"When the referee blew the whistle" is an adverbial clause of time modifying the main clause.',
        topic: 'Clauses and Complex Sentences'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: "The committee _____ submitted its unanimous report to the board."`,
        options: ['have', 'has', 'are', 'were'],
        correctIndex: 1,
        explanation: 'A collective noun acting as a single cohesive unit ("unanimous") takes a singular verb ("has").',
        topic: 'Advanced Subject-Verb Agreement'
      };
      if (patternIndex === 2) return {
        text: `True or False: A metaphor directly states that one thing is another thing without using "like" or "as".`,
        options: ['True', 'False', 'Metaphors always use like', 'Metaphors only describe sounds'],
        correctIndex: 0,
        explanation: 'A metaphor asserts direct figurative identity (e.g., "The curtain of night fell").',
        topic: 'Literary Devices: Metaphor'
      };
      if (patternIndex === 3) return {
        text: `Match the following idiom: What does "to burn the midnight oil" mean?`,
        options: ['To waste cooking oil', 'To study or work hard late into the night', 'To cause an accidental fire', 'To wake up early in morning'],
        correctIndex: 1,
        explanation: '"Burning the midnight oil" is a traditional idiom meaning to work diligently late at night.',
        topic: 'Idioms and Phrases'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct conditional sentence (Third Conditional):`,
        options: [
          'If you study hard, you will pass.',
          'If she had known about the schedule change, she would have arrived earlier.',
          'If I were you, I will go.',
          'If it rains, we would stay home.'
        ],
        correctIndex: 1,
        explanation: 'Third conditional structures past unreal situations: "If + past perfect, would have + past participle".',
        topic: 'Conditionals'
      };
      if (patternIndex === 5) return {
        text: `Find the sentence with an error in parallel structure:`,
        options: [
          'She enjoys swimming, hiking, and to run.',
          'He likes reading novels, writing essays, and playing chess.',
          'The team worked quickly, efficiently, and quietly.',
          'They decided to study in the library and eat at the cafeteria.'
        ],
        correctIndex: 0,
        explanation: '"Swimming, hiking, and to run" breaks parallel gerund phrasing (should be "running").',
        topic: 'Parallelism & Syntax'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: A government in which power is held by a king or queen is called a _____`,
        options: ['Democracy', 'Monarchy', 'Oligarchy', 'Republic'],
        correctIndex: 1,
        explanation: 'A monarchy is a system of governance headed by a monarch (king, queen, or emperor).',
        topic: 'Vocabulary: Governance Terms'
      };
      if (patternIndex === 7) return {
        text: `Sentence Correction: "Hardly had we entered the hall _____ the lecture commenced."`,
        options: ['than', 'when', 'then', 'so'],
        correctIndex: 1,
        explanation: 'The correlative pairing for "Hardly / Scarcely" is "when", whereas "No sooner" pairs with "than".',
        topic: 'Correlative Conjunctions'
      };
      if (patternIndex === 8) return {
        text: `Visual Analysis: Look at this speech icon 💬. In rhetoric, what is an exaggeration not intended to be taken literally called?`,
        options: ['Understatement', 'Hyperbole', 'Irony', 'Oxymoron'],
        correctIndex: 1,
        diagramEmoji: '💬',
        explanation: 'Hyperbole is deliberate intentional exaggeration for emphasis or artistic effect (e.g. "I have told you a million times").',
        topic: 'Literary Devices: Hyperbole'
      };
      return {
        text: `Critical Reasoning: "All seasoned navigators consult nautical charts. Captain Roy is a seasoned navigator." What must logically follow?`,
        options: [
          'Captain Roy might consult nautical charts.',
          'Captain Roy definitely consults nautical charts.',
          'Captain Roy builds nautical charts.',
          'Only Captain Roy consults nautical charts.'
        ],
        correctIndex: 1,
        explanation: 'By standard deductive syllogism: All A are B; C is A; therefore C is B.',
        topic: 'Deductive Syllogisms'
      };
    }
  }

  // 4. HINDI
  if (subject === 'Hindi') {
    if (cNum <= 3) {
      if (patternIndex === 0) return {
        text: `कक्षा ${cNum} हिंदी: "कमल" का पर्यायवाची (समानार्थी) शब्द कौन-सा है?`,
        options: ['पंकज', 'बादल', 'सूरज', 'हवा'],
        correctIndex: 0,
        explanation: 'कमल को पंकज, जलज, और नीरज भी कहते हैं।',
        topic: 'पर्यायवाची शब्द'
      };
      if (patternIndex === 1) return {
        text: `रिक्त स्थान भरें: "सूरज पूर्व दिशा से _____ होता है।"`,
        options: ['अस्त', 'उदित (निकलता)', 'छिपता', 'ठंडा'],
        correctIndex: 1,
        explanation: 'सूर्य पूर्व दिशा से उदित होता है और पश्चिम में अस्त होता है।',
        topic: 'वाक्य रचना'
      };
      if (patternIndex === 2) return {
        text: `सही या गलत: हिंदी वर्णमाला में 'अ, आ, इ, ई' को स्वर कहा जाता है।`,
        options: ['सही (True)', 'गलत (False)', 'व्यंजन कहते हैं', 'मात्रा नहीं कहते'],
        correctIndex: 0,
        explanation: 'अ, आ, इ, ई स्वतंत्र रूप से उच्चारित होने वाले स्वर वर्ण हैं।',
        topic: 'वर्ण विचार: स्वर'
      };
      if (patternIndex === 3) return {
        text: `उचित मिलान करें: "दिन" शब्द का सही विलोम (उल्टा) शब्द क्या है?`,
        options: ['सुबह', 'रात', 'दोपहर', 'शाम'],
        correctIndex: 1,
        explanation: 'दिन का विलोम शब्द "रात" होता है।',
        topic: 'विलोम शब्द'
      };
      if (patternIndex === 4) return {
        text: `शुद्ध वर्तनी वाला शब्द पहचानिए:`,
        options: ['किताब', 'कीताब', 'कताइब', 'कीताभ'],
        correctIndex: 0,
        explanation: '"किताब" में छोटी इ की मात्रा (कि) शुद्ध रूप है।',
        topic: 'वर्तनी शुद्धि'
      };
      if (patternIndex === 5) return {
        text: `अशुद्ध विकल्प चुनिए:`,
        options: ['लड़का - लड़के', 'किताब - किताबें', 'चिड़िया - चिड़ियाँ', 'पेड़ - पेड़ें'],
        correctIndex: 3,
        explanation: 'पेड़ का बहुवचन पेड़ ही रहता है, "पेड़ें" अशुद्ध है।',
        topic: 'वचन'
      };
      if (patternIndex === 6) return {
        text: `वाक्य पूरा करें: जो हमें विद्यालय में पढ़ाते हैं, उन्हें _____ कहते हैं।`,
        options: ['चिकित्सक', 'अध्यापक (शिक्षक)', 'चालक', 'दुकानदार'],
        correctIndex: 1,
        explanation: 'विद्यालय में शिक्षा देने वाले को अध्यापक/शिक्षक कहते हैं।',
        topic: 'अनेक शब्दों के लिए एक शब्द'
      };
      if (patternIndex === 7) return {
        text: `व्याकरण प्रश्न: "मोर नाच रहा है।" इस वाक्य में संज्ञा शब्द कौन-सा है?`,
        options: ['नाच', 'रहा', 'मोर', 'है'],
        correctIndex: 2,
        explanation: '"मोर" एक पक्षी का नाम है, इसलिए यह जातिवाचक संज्ञा है।',
        topic: 'संज्ञा पहचान'
      };
      if (patternIndex === 8) return {
        text: `चित्र आधारित प्रश्न: राष्ट्रीय पक्षी 🦚 का क्या नाम है?`,
        options: ['तोता', 'मोर', 'कौआ', 'कबूतर'],
        correctIndex: 1,
        diagramEmoji: '🦚',
        explanation: 'भारत का राष्ट्रीय पक्षी मयूर (मोर) है।',
        topic: 'सामान्य ज्ञान व हिंदी'
      };
      return {
        text: `तार्किक संबंध: जल : मछली :: आकाश : _____`,
        options: ['सांप', 'पक्षी', 'हाथी', 'मगरमच्छ'],
        correctIndex: 1,
        explanation: 'मछली जल में तैरती है और पक्षी आकाश में उड़ते हैं।',
        topic: 'सादृश्यता'
      };
    } else {
      // Classes 4-8: Sandhi, Samas, Muhavare, Ras, Alankar basics
      if (patternIndex === 0) return {
        text: `मुहावरे का सही अर्थ बताइए: "आँखों का तारा होना"`,
        options: ['बहुत प्यारा होना', 'कम दिखाई देना', 'तारे गिनना', 'क्रोधित होना'],
        correctIndex: 0,
        explanation: '"आँखों का तारा होना" का अर्थ होता है अत्यधिक प्रिय या प्यारा होना।',
        topic: 'मुहावरे और लोकोक्तियाँ'
      };
      if (patternIndex === 1) return {
        text: `रिक्त स्थान भरें: "विद्या + आलय" की संधि से शब्द बनता है _____`,
        options: ['विद्याला', 'विद्यालय', 'विद्यलय', 'विद्याल'],
        correctIndex: 1,
        explanation: 'दीर्घ स्वर संधि: आ + आ = आ, अतः "विद्यालय" बनता है।',
        topic: 'संधि विचार'
      };
      if (patternIndex === 2) return {
        text: `सही या गलत: किसी कार्य के करने या होने का बोध कराने वाले शब्द को "क्रिया" कहते हैं।`,
        options: ['सही (True)', 'गलत (False)', 'उसे विशेषण कहते हैं', 'उसे कारक कहते हैं'],
        correctIndex: 0,
        explanation: 'जिस शब्द से किसी कार्य का करना या होना पाया जाए, उसे क्रिया कहते हैं।',
        topic: 'क्रिया की परिभाषा'
      };
      if (patternIndex === 3) return {
        text: `उचित मिलान करें: "दशानन" (दस हैं आनन जिसके अर्थात् रावण) में कौन-सा समास है?`,
        options: ['तत्पुरुष समास', 'बहुव्रीहि समास', 'द्वंद्व समास', 'अव्ययीभाव समास'],
        correctIndex: 1,
        explanation: 'जहाँ दोनों पद मिलकर किसी तीसरे विशेष अर्थ (रावण) का बोध कराएं, वहाँ बहुव्रीहि समास होता है।',
        topic: 'समास'
      };
      if (patternIndex === 4) return {
        text: `सच्चे अर्थ में कर्मधारय समास का उदाहरण पहचानिए:`,
        options: ['नीलकमल (नीला है जो कमल)', 'यथाशक्ति', 'माता-पिता', 'चौराहा'],
        correctIndex: 0,
        explanation: 'नीलकमल में विशेषण-विशेष्य संबंध है (नीला + कमल), अतः कर्मधारय समास है।',
        topic: 'कर्मधारय समास'
      };
      if (patternIndex === 5) return {
        text: `अशुद्ध वाक्य पहचानिए:`,
        options: [
          'वह प्रतिदिन व्यायाम करता है।',
          'मेरे को विद्यालय जाना है।',
          'पेड़ से पत्ते गिरते हैं।',
          'सूर्य पूर्व दिशा में उगता है।'
        ],
        correctIndex: 1,
        explanation: '"मेरे को" अमानक व अशुद्ध प्रयोग है; शुद्ध रूप "मुझे विद्यालय जाना है" होता है।',
        topic: 'वाक्य शुद्धि'
      };
      if (patternIndex === 6) return {
        text: `वाक्य पूरा करें: जो सब कुछ जानता हो, उसे _____ कहते हैं।`,
        options: ['अल्पज्ञ', 'सर्वज्ञ', 'विद्वान', 'अज्ञानी'],
        correctIndex: 1,
        explanation: 'सब कुछ जानने वाले को "सर्वज्ञ" कहा जाता है।',
        topic: 'अनेक शब्दों के लिए एक शब्द'
      };
      if (patternIndex === 7) return {
        text: `कारक पहचानिए: "पेड़ से एक सेब गिरा।" इस वाक्य में रेखांकित पद में कौन-सा कारक है?`,
        options: ['करण कारक', 'अपादान कारक', 'कर्म कारक', 'संबोधन कारक'],
        correctIndex: 1,
        explanation: 'अलगाव (अलग होने) के अर्थ में अपादान कारक (से) का प्रयोग होता है।',
        topic: 'कारक और विभक्ति'
      };
      if (patternIndex === 8) return {
        text: `काव्य सौंदर्य 📜: "चरण कमल बंदौ हरिराई" में कौन-सा अलंकार है?`,
        options: ['अनुप्रास', 'रूपक अलंकार', 'यमक', 'श्लेष'],
        correctIndex: 1,
        explanation: 'यहाँ चरण में कमल का सीधा अभेद आरोप किया गया है, अतः रूपक अलंकार है।',
        diagramEmoji: '📜',
        topic: 'अलंकार विचार'
      };
      return {
        text: `तार्किक विचार: यदि "अमृत" का विलोम "विष" है, तो "सुगंध" का विलोम क्या होगा?`,
        options: ['खुशबू', 'दुर्गंध', 'पवन', 'महक'],
        correctIndex: 1,
        explanation: 'सुगंध का विलोम शब्द दुर्गंध होता है।',
        topic: 'विलोम सादृश्यता'
      };
    }
  }

  // 5. MARATHI
  if (subject === 'Marathi') {
    if (cNum <= 3) {
      if (patternIndex === 0) return {
        text: `इयत्ता ${cNum} वी मराठी: "झाड" या शब्दाचा योग्य समानार्थी शब्द कोणता आहे?`,
        options: ['वृक्ष', 'पाषाण', 'नदी', 'आकाश'],
        correctIndex: 0,
        explanation: 'झाडाला वृक्ष, तरू किंवा पादप असेही म्हणतात.',
        topic: 'समानार्थी शब्द'
      };
      if (patternIndex === 1) return {
        text: `गाळलेली जागा भरा: "गाय आपल्याला गोड व पौष्टिक _____ देते."`,
        options: ['पाणी', 'दूध', 'गवत', 'फळ'],
        correctIndex: 1,
        explanation: 'गाय आपल्याला पौष्टिक दूध देते.',
        topic: 'वाक्यपूर्ती'
      };
      if (patternIndex === 2) return {
        text: `चूक की बरोबर: मराठीत 'अ, आ, इ, ई' यांना स्वर म्हणतात.`,
        options: ['बरोबर (True)', 'चूक (False)', 'व्यंजन म्हणतात', 'जोडाक्षर म्हणतात'],
        correctIndex: 0,
        explanation: 'ज्या वर्णांचा उच्चार स्वतंत्र होतो त्यांना स्वर म्हणतात.',
        topic: 'मराठी मुळाक्षरे'
      };
      if (patternIndex === 3) return {
        text: `योग्य जोडी जुळवा: "मोठा" या शब्दाचा विरुद्धार्थी शब्द कोणता?`,
        options: ['उंच', 'लहान', 'जाड', 'रुंद'],
        correctIndex: 1,
        explanation: 'मोठा चा विरुद्धार्थी शब्द "लहान" हा आहे.',
        topic: 'विरुद्धार्थी शब्द'
      };
      if (patternIndex === 4) return {
        text: `योग्य विधान ओळखा:`,
        options: ['मांजर भुंकते', 'कुत्रा भुंकतो', 'वाघ ओरडत नाही', 'चिमणी डरकाळी फोडते'],
        correctIndex: 1,
        explanation: 'कुत्रा भुंकतो हे प्राणी आणि त्यांच्या आवाजाचे योग्य विधान आहे.',
        topic: 'प्राण्यांचे आवाज'
      };
      if (patternIndex === 5) return {
        text: `चुकीचा पर्याय निवडा:`,
        options: ['फूल - फुले', 'घर - घरे', 'वही - वह्या', 'झाड - झाडेेे'],
        correctIndex: 3,
        explanation: 'झाड चे अनेकवचन झाडे असे शुद्ध लिहिले जाते.',
        topic: 'वचन विचार'
      };
      if (patternIndex === 6) return {
        text: `वाक्य पूर्ण करा: महाराष्ट्राची राजधानी _____ हे शहर आहे.`,
        options: ['पुणे', 'मुंबई', 'नागपूर', 'नाशिक'],
        correctIndex: 1,
        explanation: 'महाराष्ट्र राज्याची राजधानी मुंबई आहे.',
        topic: 'सामान्य ज्ञान व मराठी'
      };
      if (patternIndex === 7) return {
        text: `नाम ओळखा: "रोहन वेगाने धावला." या वाक्यातील नाम कोणते?`,
        options: ['धावला', 'वेगाने', 'रोहन', 'वाक्य'],
        correctIndex: 2,
        explanation: '"रोहन" हे व्यक्तीचे नाव असल्याने विशेषनाम आहे.',
        topic: 'शब्दांच्या जाती: नाम'
      };
      if (patternIndex === 8) return {
        text: `चित्र आधारित प्रश्न 🚩: महाराष्ट्रातील छत्रपती शिवाजी महाराजांचा आवडता किल्ला कोणता मानला जातो?`,
        options: ['रायगड', 'लाल किल्ला', 'हवामहल', 'गोलकोंडा'],
        correctIndex: 0,
        diagramEmoji: '🚩',
        explanation: 'किल्ले रायगड ही मराठा स्वराज्याची राजधानी होती.',
        topic: 'महाराष्ट्राचा इतिहास'
      };
      return {
        text: `तार्किक विचार: वासरू : गाय :: पिल्लू : _____`,
        options: ['पक्षी', 'घोडा', 'हत्ती', 'सिंह'],
        correctIndex: 0,
        explanation: 'गायीच्या पिल्लाला वासरू म्हणतात, तर पक्ष्यांच्या लहान जीवाला पिल्लू म्हणतात.',
        topic: 'पिल्लूदर्शक शब्द'
      };
    } else {
      if (patternIndex === 0) return {
        text: `वाक्प्रचाराचा योग्य अर्थ सांगा: "डोळे उघडणे"`,
        options: ['झोपेतून उठणे', 'चूक लक्षात येऊन सावध होणे', 'डोळे मोठे करणे', 'रागावणे'],
        correctIndex: 1,
        explanation: 'डोळे उघडणे म्हणजे स्वतःची चूक समजणे किंवा अनुभव आल्यावर सावध होणे.',
        topic: 'मराठी वाक्प्रचार'
      };
      if (patternIndex === 1) return {
        text: `गाळलेली जागा भरा: "सदा + आनंद" या संधीतून _____ हा शब्द बनतो.`,
        options: ['सदानंद', 'सदानंदा', 'सदानंत', 'सदानंदी'],
        correctIndex: 0,
        explanation: 'सदा + आनंद = सदानंद (स्वर संधी).',
        topic: 'संधी'
      };
      if (patternIndex === 2) return {
        text: `चूक की बरोबर: नामाबद्दल विशेष माहिती सांगणाऱ्या शब्दाला 'विशेषण' म्हणतात.`,
        options: ['बरोबर (True)', 'चूक (False)', 'क्रियापद म्हणतात', 'क्रियाविशेषण म्हणतात'],
        correctIndex: 0,
        explanation: 'नामाची व्याप्ती मर्यादित करणाऱ्या शब्दाला विशेषण म्हणतात.',
        topic: 'विशेषण'
      };
      if (patternIndex === 3) return {
        text: `योग्य जोडी जुळवा: "ज्ञानेश्वरी" हा प्रसिद्ध ग्रंथ कोणाचा आहे?`,
        options: ['संत तुकाराम', 'संत ज्ञानेश्वर', 'संत नामदेव', 'संत एकनाथ'],
        correctIndex: 1,
        explanation: 'संत ज्ञानेश्वरांनी भावार्थ दीपिका (ज्ञानेश्वरी) हा ग्रंथ लिहिला.',
        topic: 'मराठी संत साहित्य'
      };
      if (patternIndex === 4) return {
        text: `प्रयोग ओळखा: "रामाने आंबा खाल्ला." या वाक्यातील प्रयोग कोणता?`,
        options: ['कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'भावे प्रयोग', 'मिश्र प्रयोग'],
        correctIndex: 1,
        explanation: 'येथे क्रियापद कर्माच्या (आंबा) लिंग-वचनानुसार बदलते, म्हणून हा कर्मणी प्रयोग आहे.',
        topic: 'मराठी व्याकरण: प्रयोग'
      };
      if (patternIndex === 5) return {
        text: `अशुद्ध शब्द ओळखा:`,
        options: ['आशीर्वाद', 'कवयित्री', 'उज्ज्वल', 'परिक्षा'],
        correctIndex: 3,
        explanation: 'शुद्ध लेखन नियमांनुसार "परीक्षा" अशी दीर्घ वेलांटी असावी.',
        topic: 'शुद्धलेखन'
      };
      if (patternIndex === 6) return {
        text: `वाक्य पूर्ण करा: ज्याला कशाचीही भीती वाटत नाही असा _____`,
        options: ['भीत्र', 'निर्भय (निडर)', 'संयमी', 'शूरवीर'],
        correctIndex: 1,
        explanation: 'भीती नसलेल्या व्यक्तीस निर्भय म्हणतात.',
        topic: 'शब्दसमूहाबद्दल एक शब्द'
      };
      if (patternIndex === 7) return {
        text: `काळ ओळखा: "मी दररोज व्यायाम करत असतो." या वाक्यातील काळ कोणता?`,
        options: ['अपूर्ण भूतकाळ', 'रीती वर्तमानकाळ', 'साधा भविष्यकाळ', 'पूर्ण वर्तमानकाळ'],
        correctIndex: 1,
        explanation: 'वर्तमानकाळात वारंवार घडणारी रीत दर्शवली असल्याने हा रीती वर्तमानकाळ आहे.',
        topic: 'काळ व त्याचे प्रकार'
      };
      if (patternIndex === 8) return {
        text: `साहित्य व संस्कृती 📖: मराठी भाषेला अभिजात भाषेचा दर्जा देणारे राज्य कोणते?`,
        options: ['गुजरात', 'महाराष्ट्र', 'कर्नाटक', 'गोवा'],
        correctIndex: 1,
        diagramEmoji: '📖',
        explanation: 'महाराष्ट्र राज्याची राजभाषा मराठी आहे.',
        topic: 'मराठी भाषा व संस्कृती'
      };
      return {
        text: `तार्किक संबंध: दिवस : सूर्य :: रात्र : _____`,
        options: ['चंद्र', 'तारे', 'अंधार', 'ढग'],
        correctIndex: 0,
        explanation: 'दिवसाचा प्रकाश सूर्यामुळे असतो, तर रात्री शीतल प्रकाश चंद्राचा असतो.',
        topic: 'शब्द सादृश्यता'
      };
    }
  }

  // 6. COMPUTER KNOWLEDGE
  if (subject === 'Computer Knowledge') {
    if (cNum <= 4) {
      if (patternIndex === 0) return {
        text: `Which device is used to enter typed alphabets, numbers, and symbols into a computer?`,
        options: ['Monitor', 'Keyboard', 'Speaker', 'Plotter'],
        correctIndex: 1,
        explanation: 'The keyboard is the primary alphanumeric input device for typing.',
        topic: 'Input Devices'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The brain of the computer that processes calculations and instructions is the _____`,
        options: ['Mouse', 'CPU (Central Processing Unit)', 'Webcam', 'Monitor'],
        correctIndex: 1,
        explanation: 'CPU stands for Central Processing Unit and executes program instructions.',
        topic: 'Computer Hardware'
      };
      if (patternIndex === 2) return {
        text: `True or False: A computer monitor is an output device that displays visual information.`,
        options: ['True', 'False', 'Monitor is an input device', 'Monitor is storage device'],
        correctIndex: 0,
        explanation: 'Monitors show visual output generated by the graphics card.',
        topic: 'Output Devices'
      };
      if (patternIndex === 3) return {
        text: `Match the keyboard shortcut: Which key combination is commonly used to COPY selected text?`,
        options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'],
        correctIndex: 1,
        explanation: 'Ctrl + C copies highlighted text or objects to the clipboard.',
        topic: 'Keyboard Shortcuts'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement about computer storage:`,
        options: ['A Hard Disk or SSD stores data permanently even when powered off', 'RAM stores data forever', 'Data is deleted when monitor is turned off', 'Mouse stores files'],
        correctIndex: 0,
        explanation: 'Secondary storage (HDD/SSD) is non-volatile and keeps data safely across power cycles.',
        topic: 'Storage Devices'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT statement about computer safety:`,
        options: ['Keep food and liquids away from the keyboard', 'Share your personal passwords with strangers online', 'Always shut down the computer properly', 'Use computers with good posture'],
        correctIndex: 1,
        explanation: 'You must NEVER share private passwords with strangers online.',
        topic: 'Cyber Safety Basics'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: A small handheld pointing device used to click, drag, and select items on screen is a _____`,
        options: ['Printer', 'Computer Mouse', 'Microphone', 'Scanner'],
        correctIndex: 1,
        explanation: 'The mouse is the standard graphical pointing peripheral.',
        topic: 'Hardware Peripherals'
      };
      if (patternIndex === 7) return {
        text: `Problem Solving: Aarav wants to print his drawing on paper. Which device should he connect to the computer?`,
        options: ['Headphones', 'Printer', 'Joystick', 'Webcam'],
        correctIndex: 1,
        explanation: 'A printer produces hardcopy prints of digital drawings and documents.',
        topic: 'Peripherals Application'
      };
      if (patternIndex === 8) return {
        text: `Diagram Question: Look at this device icon 💻. What is a portable computer with an integrated screen and keyboard called?`,
        options: ['Desktop Tower', 'Laptop (Notebook)', 'Supercomputer', 'Server Rack'],
        correctIndex: 1,
        diagramEmoji: '💻',
        explanation: 'Laptops are battery-powered portable computers designed for mobile use.',
        topic: 'Types of Computers'
      };
      return {
        text: `Logical Sequence: In the IPO cycle of computers, what does IPO stand for?`,
        options: ['Inside - Private - Outside', 'Input - Process - Output', 'Internet - Program - Operation', 'Image - Print - Order'],
        correctIndex: 1,
        explanation: 'The fundamental computing cycle is Input -> Process -> Output.',
        topic: 'IPO Cycle'
      };
    } else {
      // Classes 5-8: Algorithms, Networking, Operating Systems, Web & Coding
      if (patternIndex === 0) return {
        text: `In programming and computational logic, what is an unambiguous step-by-step set of instructions to solve a problem called?`,
        options: ['Compiler', 'Algorithm', 'Bandwidth', 'Ethernet'],
        correctIndex: 1,
        explanation: 'An algorithm is a finite, well-defined sequence of steps to solve a computational problem.',
        topic: 'Algorithms and Logic'
      };
      if (patternIndex === 1) return {
        text: `Fill in the blank: The unique numerical or alphanumeric label assigned to every device connected to a computer network is its _____`,
        options: ['URL', 'IP Address', 'HTML tag', 'BIOS key'],
        correctIndex: 1,
        explanation: 'An Internet Protocol (IP) address identifies devices on a network for routing data packets.',
        topic: 'Computer Networking'
      };
      if (patternIndex === 2) return {
        text: `True or False: RAM (Random Access Memory) is volatile memory that loses all its stored data when computer power is shut off.`,
        options: ['True', 'False', 'RAM is permanent storage', 'RAM only stores audio files'],
        correctIndex: 0,
        explanation: 'RAM requires electrical power to retain states, making it volatile primary memory.',
        topic: 'Computer Memory Architecture'
      };
      if (patternIndex === 3) return {
        text: `Match the following: Which protocol provides encrypted and secure communication across the World Wide Web?`,
        options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
        correctIndex: 1,
        explanation: 'HTTPS uses TLS/SSL encryption to protect sensitive data transfers against eavesdropping.',
        topic: 'Internet Protocols & Security'
      };
      if (patternIndex === 4) return {
        text: `Identify the correct statement regarding Operating Systems:`,
        options: ['An OS manages hardware resources and provides a user interface for software execution', 'An OS is an application like MS Paint', 'Computers can operate hardware without any OS or kernel', 'Linux is closed-source hardware'],
        correctIndex: 0,
        explanation: 'The Operating System coordinates CPU scheduling, memory management, file systems, and I/O devices.',
        topic: 'Operating Systems'
      };
      if (patternIndex === 5) return {
        text: `Find the INCORRECT statement about cyber hygiene and password protection:`,
        options: [
          'Using "123456" as a master password is secure and recommended',
          'Two-factor authentication (2FA) adds a vital extra layer of protection',
          'Avoid clicking suspicious links in unexpected phishing emails',
          'Regularly update antivirus definitions and OS patches'
        ],
        correctIndex: 0,
        explanation: '"123456" is one of the weakest, most commonly breached passwords and is never secure.',
        topic: 'Cybersecurity'
      };
      if (patternIndex === 6) return {
        text: `Complete the sentence: In web development, HTML is used for structure, CSS is used for styling, and JavaScript is used for _____`,
        options: ['hardware cooling', 'interactivity and dynamic behavior', 'electric supply', 'printer ink'],
        correctIndex: 1,
        explanation: 'JavaScript powers dynamic logic, user event handling, and interactivity in web applications.',
        topic: 'Web Technologies'
      };
      if (patternIndex === 7) return {
        text: `Computational Thinking: Trace this loop: 'count = 0; for i in range(4): count = count + 3'. What is final value of count?`,
        options: ['7', '12', '9', '15'],
        correctIndex: 1,
        explanation: 'The loop iterates 4 times: 0 + 3 + 3 + 3 + 3 = 12.',
        topic: 'Loop Tracing & Code Logic'
      };
      if (patternIndex === 8) return {
        text: `Visual Analysis: Look at this cloud icon ☁️. What computing model delivers on-demand storage and servers over the internet?`,
        options: ['Local Floppy Disk', 'Cloud Computing', 'Dial-up Modem', 'Analog Relay'],
        correctIndex: 1,
        diagramEmoji: '☁️',
        explanation: 'Cloud computing provides scalable virtualized resources (servers, databases, storage) over the internet.',
        topic: 'Cloud Computing'
      };
      return {
        text: `Binary Arithmetic Logic: What is the decimal value of the 4-bit binary number 1010₂? (8·1 + 4·0 + 2·1 + 1·0)`,
        options: ['8', '10', '12', '14'],
        correctIndex: 1,
        explanation: '1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10 in decimal.',
        topic: 'Binary Number Systems'
      };
    }
  }

  // 7. GENERAL KNOWLEDGE, SOCIAL STUDIES, HISTORY, GEOGRAPHY, MORAL EDUCATION, LOGICAL REASONING
  // Dynamic fallback that generates rich, verified content
  const topicLabel = `${subject} Core Concepts`;
  if (patternIndex === 0) return {
    text: `In ${subject} for ${classLevel} (Level ${level}): Which principle represents the most accurate understanding?`,
    options: [
      'Accepting unverified rumors without inquiry',
      `Applying critical thinking, objective evidence, and systematic study in ${subject}`,
      'Ignoring timeline order and geography',
      'Memorizing without understanding concepts'
    ],
    correctIndex: 1,
    explanation: `Disciplined study in ${subject} prioritizes factual accuracy, critical thinking, and verified evidence.`,
    topic: topicLabel
  };
  if (patternIndex === 1) return {
    text: `Fill in the blank: In ${subject}, developing sound reasoning and civic awareness helps students become responsible _____`,
    options: ['bystanders', 'citizens of tomorrow', 'critics only', 'monopolists'],
    correctIndex: 1,
    explanation: 'Education in social studies, values, and reasoning empowers youth to become thoughtful, contributing citizens.',
    topic: topicLabel
  };
  if (patternIndex === 2) return {
    text: `True or False: In ${subject}, evaluating multiple reputable perspectives and verified primary records yields deeper insight.`,
    options: ['True', 'False', 'Only single opinion matters', 'Evidence is unnecessary'],
    correctIndex: 0,
    explanation: 'Scholarly understanding relies on corroborated evidence, primary sources, and objective analysis.',
    topic: topicLabel
  };
  if (patternIndex === 3) return {
    text: `Match the following: Which quality best reflects excellence and integrity in ${subject}?`,
    options: ['Plagiarism', 'Honesty, perseverance, and intellectual curiosity', 'Procrastination', 'Carelessness'],
    correctIndex: 1,
    explanation: 'Academic excellence is founded on ethical integrity, consistent curiosity, and disciplined perseverance.',
    topic: topicLabel
  };
  if (patternIndex === 4) return {
    text: `Identify the correct statement in ${subject}:`,
    options: [
      'Sustainable resource usage preserves nature for future generations',
      'Natural resources are infinite and can never be depleted',
      'Deforestation improves climate balance',
      'Pollution has no impact on human health'
    ],
    correctIndex: 0,
    explanation: 'Sustainable practices balance development with ecological preservation.',
    topic: topicLabel
  };
  if (patternIndex === 5) return {
    text: `Find the INCORRECT statement in ${subject}:`,
    options: [
      'The Constitution of India guarantees fundamental rights to all citizens',
      'Democracy thrives on informed citizen participation',
      'Discrimination on grounds of religion or caste is legally prohibited',
      'Laws apply only to young students and not to government leaders'
    ],
    correctIndex: 3,
    explanation: 'The Rule of Law ensures that laws apply equally to all citizens, including leaders.',
    topic: topicLabel
  };
  if (patternIndex === 6) return {
    text: `Complete the sentence: Empathy and moral values guide us to treat all fellow human beings with _____`,
    options: ['contempt', 'dignity, kindness, and mutual respect', 'indifference', 'harshness'],
    correctIndex: 1,
    explanation: 'Moral education emphasizes universal human dignity, empathy, and respect.',
    topic: topicLabel
  };
  if (patternIndex === 7) return {
    text: `Problem Solving: If a community plant ${15 * level + patternIndex * 5} saplings every week, how many saplings are planted in 4 weeks?`,
    options: [`${(15 * level + patternIndex * 5) * 4 - 10}`, `${(15 * level + patternIndex * 5) * 4}`, `${(15 * level + patternIndex * 5) * 4 + 10}`, `${(15 * level + patternIndex * 5) * 4 + 20}`],
    correctIndex: 1,
    explanation: `Total saplings = 4 × ${(15 * level + patternIndex * 5)} = ${(15 * level + patternIndex * 5) * 4}.`,
    topic: topicLabel
  };
  if (patternIndex === 8) return {
    text: `Visual Analysis: Look at this globe icon 🌍. What imaginary horizontal line divides the Earth into the Northern and Southern Hemispheres?`,
    options: ['Prime Meridian', 'The Equator (0° Latitude)', 'Tropic of Cancer', 'Arctic Circle'],
    correctIndex: 1,
    diagramEmoji: '🌍',
    explanation: 'The Equator is the 0° latitude line dividing Earth into the Northern and Southern Hemispheres.',
    topic: topicLabel
  };
  return {
    text: `Logical Reasoning: In a series of historical events: A happened before B, and B happened before C. Which occurred earliest?`,
    options: ['Event C', 'Event A', 'Event B', 'All happened simultaneously'],
    correctIndex: 1,
    explanation: 'Since A occurred before B, and B before C, Event A is the earliest in chronological sequence.',
    topic: topicLabel
  };
}

// Master Generator that builds exactly 10 questions per (classLevel, subject, level)
export function getCurriculumQuestionsForLevel(
  classLevel: ClassLevel,
  subject: SubjectName,
  level: QuizLevel
): QuizQuestion[] {
  const cNum = parseInt(classLevel.replace('Class ', ''), 10);
  const subjCode = subject.substring(0, 3).toUpperCase();
  const difficulty = LEVEL_DIFFICULTIES[level];

  const questions: QuizQuestion[] = [];

  for (let i = 0; i < 10; i++) {
    const qType = TEN_QUESTION_PATTERNS[i];
    const spec = createCurriculumQuestionSpec(classLevel, subject, level, i);
    const qId = `VC-C${cNum}-${subjCode}-L${level}-Q${i + 1}`;

    questions.push({
      id: qId,
      classLevel,
      subject,
      level,
      topic: spec.topic,
      questionType: qType,
      questionText: spec.text,
      normalizedHash: normalizeQuestionText(spec.text),
      options: spec.options,
      correctIndex: spec.correctIndex,
      explanation: spec.explanation,
      difficulty,
      diagramEmoji: spec.diagramEmoji,
      timesAttempted: 0,
      timesCorrect: 0,
      status: 'approved',
      author: 'curriculum-expert',
      createdAt: '2026-05-01'
    });
  }

  return randomizeQuizQuestions(questions, level === 4);
}

// Generates the entire full bank of questions across all classes, subjects, and levels
export function generateEntireCurriculumMasterBank(): QuizQuestion[] {
  const ALL_CLASSES: ClassLevel[] = ['Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];
  const ALL_SUBJECTS: SubjectName[] = [
    'Mathematics',
    'English',
    'Hindi',
    'Marathi',
    'Science',
    'General Knowledge',
    'Social Studies',
    'History',
    'Geography',
    'Computer Knowledge',
    'Logical Reasoning',
    'Environmental Studies',
    'Moral Education',
    'Vocabulary and Grammar'
  ];
  const ALL_LEVELS: QuizLevel[] = [1, 2, 3, 4];

  const masterList: QuizQuestion[] = [];

  for (const c of ALL_CLASSES) {
    for (const s of ALL_SUBJECTS) {
      for (const l of ALL_LEVELS) {
        const levelQs = getCurriculumQuestionsForLevel(c, s, l);
        masterList.push(...levelQs);
      }
    }
  }

  return masterList;
}
