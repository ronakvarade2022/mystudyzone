import { QuizQuestion, QuizLevel } from '../types';

export interface CricketQuizQuestion {
  id: string;
  level: QuizLevel;
  category: 'Current Affairs' | 'Records & Stats' | 'IPL & Leagues' | 'Rules & Terminology' | 'World Cup & History' | 'Women Cricket';
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export const DAILY_CRICKET_QUESTIONS_BANK: Record<QuizLevel, CricketQuizQuestion[]> = {
  // LEVEL 1: BEGINNER (10 Questions)
  1: [
    {
      id: 'crick_l1_01',
      level: 1,
      category: 'Current Affairs',
      question: 'Which country won the ICC Men\'s T20 World Cup 2024 held in the West Indies and USA?',
      options: ['India', 'South Africa', 'Australia', 'England'],
      correctIndex: 0,
      explanation: 'India defeated South Africa by 7 runs in a thrilling final at Bridgetown, Barbados to lift the 2024 ICC Men\'s T20 World Cup under Rohit Sharma\'s captaincy.'
    },
    {
      id: 'crick_l1_02',
      level: 1,
      category: 'Records & Stats',
      question: 'Who is fondly known as the "God of Cricket" and has scored 100 international centuries?',
      options: ['Sachin Tendulkar', 'Virat Kohli', 'Brian Lara', 'Ricky Ponting'],
      correctIndex: 0,
      explanation: 'Sachin Tendulkar is the only cricketer in history to score 100 international centuries (51 in Tests and 49 in ODIs).'
    },
    {
      id: 'crick_l1_03',
      level: 1,
      category: 'IPL & Leagues',
      question: 'Which team won the Indian Premier League (IPL) 2024 championship title?',
      options: ['Kolkata Knight Riders', 'Sunrisers Hyderabad', 'Rajasthan Royals', 'Chennai Super Kings'],
      correctIndex: 0,
      explanation: 'Kolkata Knight Riders (KKR) captained by Shreyas Iyer defeated Sunrisers Hyderabad in Chennai to win their third IPL trophy in 2024.'
    },
    {
      id: 'crick_l1_04',
      level: 1,
      category: 'Rules & Terminology',
      question: 'How many deliveries (balls) make up one legal over in standard cricket?',
      options: ['6 balls', '4 balls', '8 balls', '5 balls'],
      correctIndex: 0,
      explanation: 'In standard international cricket rules established by the MCC, an over consists of 6 legal deliveries.'
    },
    {
      id: 'crick_l1_05',
      level: 1,
      category: 'Women Cricket',
      question: 'Who is the captain of the Indian Women\'s national cricket team across formats?',
      options: ['Harmanpreet Kaur', 'Smriti Mandhana', 'Shafali Verma', 'Deepti Sharma'],
      correctIndex: 0,
      explanation: 'Harmanpreet Kaur leads the Indian Women\'s national cricket team, with Smriti Mandhana serving as the vice-captain.'
    },
    {
      id: 'crick_l1_06',
      level: 1,
      category: 'World Cup & History',
      question: 'In which year did India win its very first ICC Cricket World Cup under Kapil Dev?',
      options: ['1983', '1975', '2011', '1987'],
      correctIndex: 0,
      explanation: 'India won its first ever ODI World Cup on June 25, 1983, by defeating the mighty two-time champions West Indies at Lord\'s Cricket Ground in London.'
    },
    {
      id: 'crick_l1_07',
      level: 1,
      category: 'Rules & Terminology',
      question: 'What is it called when a batsman is dismissed without scoring any runs?',
      options: ['Duck', 'Googly', 'Maiden', 'Bouncer'],
      correctIndex: 0,
      explanation: 'In cricket terminology, being dismissed for zero runs is known as a "Duck" (or "Golden Duck" if dismissed on the very first ball faced).'
    },
    {
      id: 'crick_l1_08',
      level: 1,
      category: 'Current Affairs',
      question: 'Who was awarded the Player of the Tournament in the ICC Men\'s T20 World Cup 2024?',
      options: ['Jasprit Bumrah', 'Virat Kohli', 'Rohit Sharma', 'Hardik Pandya'],
      correctIndex: 0,
      explanation: 'Indian pace spearhead Jasprit Bumrah took 15 wickets at an astonishing economy rate of 4.17 to be crowned Player of the Tournament.'
    },
    {
      id: 'crick_l1_09',
      level: 1,
      category: 'IPL & Leagues',
      question: 'Which team won the Women\'s Premier League (WPL) 2024 championship?',
      options: ['Royal Challengers Bengaluru (RCB)', 'Delhi Capitals', 'Mumbai Indians', 'UP Warriorz'],
      correctIndex: 0,
      explanation: 'Smriti Mandhana led Royal Challengers Bengaluru (RCB) Women to victory against Delhi Capitals in the WPL 2024 final at Arun Jaitley Stadium, New Delhi.'
    },
    {
      id: 'crick_l1_10',
      level: 1,
      category: 'World Cup & History',
      question: 'How many players from each team are on the field during active play in a cricket match?',
      options: ['11 players', '9 players', '12 players', '10 players'],
      correctIndex: 0,
      explanation: 'A cricket team consists of 11 active players on the field (the fielding side fields all 11 players while the batting side has 2 batsmen on pitch).'
    }
  ],

  // LEVEL 2: INTERMEDIATE (10 Questions)
  2: [
    {
      id: 'crick_l2_01',
      level: 2,
      category: 'Current Affairs',
      question: 'Who became the head coach of the Indian Men\'s Senior Cricket Team in July 2024 succeeding Rahul Dravid?',
      options: ['Gautam Gambhir', 'VVS Laxman', 'Ashish Nehra', 'Anil Kumble'],
      correctIndex: 0,
      explanation: 'Gautam Gambhir, who mentored KKR to their IPL 2024 title, was officially appointed as the head coach of Team India by the BCCI in July 2024.'
    },
    {
      id: 'crick_l2_02',
      level: 2,
      category: 'Records & Stats',
      question: 'Who holds the record for the highest individual score in a Men\'s One Day International (ODI) match with 264 runs?',
      options: ['Rohit Sharma', 'Martin Guptill', 'Virender Sehwag', 'Chris Gayle'],
      correctIndex: 0,
      explanation: 'Rohit Sharma scored a mammoth 264 runs against Sri Lanka at Eden Gardens, Kolkata on November 13, 2014, hitting 33 fours and 9 sixes.'
    },
    {
      id: 'crick_l2_03',
      level: 2,
      category: 'Rules & Terminology',
      question: 'What does the abbreviation "DRS" stand for in modern cricket broadcasting and officiating?',
      options: ['Decision Review System', 'Direct Run Scoring', 'Daily Review Standard', 'Digital Replay Service'],
      correctIndex: 0,
      explanation: 'DRS stands for Decision Review System, a technology-based system used in cricket to assist match officials in decision-making using Hawk-Eye, UltraEdge, and Ball-Tracking.'
    },
    {
      id: 'crick_l2_04',
      level: 2,
      category: 'IPL & Leagues',
      question: 'Who won the Orange Cap for scoring the most runs in the IPL 2024 season?',
      options: ['Virat Kohli', 'Ruturaj Gaikwad', 'Travis Head', 'Riyan Parag'],
      correctIndex: 0,
      explanation: 'Virat Kohli of Royal Challengers Bengaluru scored 741 runs in 15 matches with an average of 61.75 to win the Orange Cap in IPL 2024.'
    },
    {
      id: 'crick_l2_05',
      level: 2,
      category: 'Women Cricket',
      question: 'Who is the highest run-scorer in Women\'s international cricket history and former captain of India?',
      options: ['Mithali Raj', 'Charlotte Edwards', 'Meg Lanning', 'Suzie Bates'],
      correctIndex: 0,
      explanation: 'Mithali Raj scored 10,868 runs across international formats during her illustrious 23-year career for India before retiring.'
    },
    {
      id: 'crick_l2_06',
      level: 2,
      category: 'Records & Stats',
      question: 'Who became the fastest player in ODI cricket history to reach 50 ODI centuries, surpassing Sachin Tendulkar?',
      options: ['Virat Kohli', 'Rohit Sharma', 'Babar Azam', 'David Warner'],
      correctIndex: 0,
      explanation: 'Virat Kohli scored his historic 50th ODI century during the ICC World Cup 2023 semi-final against New Zealand at Wankhede Stadium, Mumbai.'
    },
    {
      id: 'crick_l2_07',
      level: 2,
      category: 'Rules & Terminology',
      question: 'A delivery pitched right at the batsman\'s toes or bowling crease line is called what?',
      options: ['Yorker', 'Googly', 'Bouncer', 'Flipper'],
      correctIndex: 0,
      explanation: 'A yorker is a delivery bowled right at the batsman\'s feet or popping crease, making it extremely difficult to get under the ball to hit.'
    },
    {
      id: 'crick_l2_08',
      level: 2,
      category: 'World Cup & History',
      question: 'Which stadium in Ahmedabad, Gujarat is the largest cricket stadium in the world with a capacity of 132,000?',
      options: ['Narendra Modi Stadium', 'Melbourne Cricket Ground (MCG)', 'Eden Gardens', 'Lord\'s Cricket Ground'],
      correctIndex: 0,
      explanation: 'Narendra Modi Stadium in Motera, Ahmedabad is the world\'s largest cricket stadium, accommodating over 132,000 spectators.'
    },
    {
      id: 'crick_l2_09',
      level: 2,
      category: 'Current Affairs',
      question: 'Which player hit the winning six for India in the 2011 ICC ODI World Cup final against Sri Lanka?',
      options: ['MS Dhoni', 'Gautam Gambhir', 'Yuvraj Singh', 'Suresh Raina'],
      correctIndex: 0,
      explanation: 'Captain MS Dhoni scored an unbeaten 91 and struck Nuwan Kulasekara for an iconic six over long-on to seal India\'s 2011 World Cup triumph.'
    },
    {
      id: 'crick_l2_10',
      level: 2,
      category: 'Rules & Terminology',
      question: 'What is a "Maiden Over" in cricket terminology?',
      options: ['An over in which zero runs are conceded', 'An over bowled by a debutant', 'An over with three wickets', 'An over bowled with a new ball'],
      correctIndex: 0,
      explanation: 'A maiden over is an over of six legal deliveries bowled by a bowler without conceding a single run off the bat or extras.'
    }
  ],

  // LEVEL 3: ADVANCED (10 Questions)
  3: [
    {
      id: 'crick_l3_01',
      level: 3,
      category: 'Records & Stats',
      question: 'Who holds the record for taking all 10 wickets in a single Test innings for India?',
      options: ['Anil Kumble', 'Kapil Dev', 'Ravichandran Ashwin', 'Harbhajan Singh'],
      correctIndex: 0,
      explanation: 'Anil Kumble took 10 wickets for 74 runs against Pakistan at Feroz Shah Kotla, New Delhi in 1999, becoming only the second bowler in Test history after Jim Laker to achieve a "Perfect 10".'
    },
    {
      id: 'crick_l3_02',
      level: 3,
      category: 'Current Affairs',
      question: 'Who took the spectacular catch on the boundary rope in the final over of the ICC Men\'s T20 World Cup 2024 to dismiss David Miller?',
      options: ['Suryakumar Yadav', 'Axar Patel', 'Ravindra Jadeja', 'Hardik Pandya'],
      correctIndex: 0,
      explanation: 'Suryakumar Yadav showed sensational acrobatic footwork at long-off to take a game-defining boundary catch off Hardik Pandya\'s bowling in the 20th over.'
    },
    {
      id: 'crick_l3_03',
      level: 3,
      category: 'Rules & Terminology',
      question: 'What is the "DLS Method" used in rain-interrupted limited-overs cricket matches?',
      options: ['Duckworth-Lewis-Stern Method', 'Direct Lineage Scoring', 'Dynamic Leveling System', 'Digital Legitimate Standard'],
      correctIndex: 0,
      explanation: 'The Duckworth-Lewis-Stern (DLS) method is a mathematical formulation designed to calculate the target score for the team batting second in a rain-curtailed limited-overs match.'
    },
    {
      id: 'crick_l3_04',
      level: 3,
      category: 'IPL & Leagues',
      question: 'Which team scored the highest team total in IPL history (287/3) against Royal Challengers Bengaluru in 2024?',
      options: ['Sunrisers Hyderabad', 'Kolkata Knight Riders', 'Mumbai Indians', 'Punjab Kings'],
      correctIndex: 0,
      explanation: 'Sunrisers Hyderabad shattered the all-time IPL record by posting 287/3 against RCB in Bengaluru on April 15, 2024, powered by Travis Head\'s 39-ball century.'
    },
    {
      id: 'crick_l3_05',
      level: 3,
      category: 'World Cup & History',
      question: 'Which cricketer was the Player of the Tournament in India\'s 2011 ICC Cricket World Cup victory with 362 runs and 15 wickets?',
      options: ['Yuvraj Singh', 'Sachin Tendulkar', 'Zaheer Khan', 'Virender Sehwag'],
      correctIndex: 0,
      explanation: 'Yuvraj Singh produced an all-round masterclass scoring 362 runs and claiming 15 wickets with his left-arm spin, winning 4 Man of the Match awards.'
    },
    {
      id: 'crick_l3_06',
      level: 3,
      category: 'Records & Stats',
      question: 'Who holds the world record for the highest individual score in Test match cricket with 400 not out?',
      options: ['Brian Lara', 'Matthew Hayden', 'Don Bradman', 'Mahela Jayawardene'],
      correctIndex: 0,
      explanation: 'West Indian maestro Brian Lara scored an unbeaten 400 against England at St John\'s, Antigua in April 2004.'
    },
    {
      id: 'crick_l3_07',
      level: 3,
      category: 'Women Cricket',
      question: 'Which bowler took the first-ever hat-trick in the Women\'s Premier League (WPL)?',
      options: ['Issy Wong', 'Sophie Ecclestone', 'Deepti Sharma', 'Marizanne Kapp'],
      correctIndex: 0,
      explanation: 'Mumbai Indians\' fast bowler Issy Wong took the first-ever WPL hat-trick against UP Warriorz in the 2023 Eliminator at DY Patil Stadium.'
    },
    {
      id: 'crick_l3_08',
      level: 3,
      category: 'Rules & Terminology',
      question: 'What is a "Googly" bowled by a right-arm leg-spin bowler?',
      options: ['A ball that spins into the right-handed batsman from outside off', 'A ball that spins away to the off side', 'A ball that bounces extra high without spinning', 'A full-toss aimed at the batsman\'s helmet'],
      correctIndex: 0,
      explanation: 'Invented by Bernard Bosanquet, a googly is a deceptive leg-spinner\'s delivery that appears to be standard leg-spin but turns from the off-side into the right-handed batsman.'
    },
    {
      id: 'crick_l3_09',
      level: 3,
      category: 'Current Affairs',
      question: 'Which two cricket legends announced their retirement from T20 International cricket immediately after winning the 2024 T20 World Cup?',
      options: ['Rohit Sharma & Virat Kohli', 'Virat Kohli & Ravindra Jadeja', 'Rohit Sharma & Jasprit Bumrah', 'Hardik Pandya & Suryakumar Yadav'],
      correctIndex: 0,
      explanation: 'Both Virat Kohli (Man of the Match in the final with 76 runs) and captain Rohit Sharma bowed out of T20Is on top by announcing retirement after lifting the trophy, later joined by Ravindra Jadeja.'
    },
    {
      id: 'crick_l3_10',
      level: 3,
      category: 'Records & Stats',
      question: 'What was Sir Donald Bradman\'s iconic career batting average in Test cricket when he retired in 1948?',
      options: ['99.94', '95.12', '100.00', '98.50'],
      correctIndex: 0,
      explanation: 'Sir Donald Bradman scored 6,996 runs in 52 Test matches at an immortal batting average of 99.94, needing just 4 runs in his final innings at The Oval to average 100.'
    }
  ],

  // LEVEL 4: CHAMPION (10 Questions)
  4: [
    {
      id: 'crick_l4_01',
      level: 4,
      category: 'Records & Stats',
      question: 'Who is the only bowler in international cricket history to take more than 800 Test wickets?',
      options: ['Muttiah Muralitharan', 'Shane Warne', 'James Anderson', 'Anil Kumble'],
      correctIndex: 0,
      explanation: 'Sri Lankan off-spin wizard Muttiah Muralitharan took exactly 800 wickets in 133 Test matches, claiming his 800th wicket with his final delivery in Test cricket against India at Galle in 2010.'
    },
    {
      id: 'crick_l4_02',
      level: 4,
      category: 'Rules & Terminology',
      question: 'Under MCC Law 41.16, when a bowler runs out a non-striker who backs up prematurely before the ball is released, what is this dismissal officially categorized as?',
      options: ['Run Out', 'Mankad Infringement', 'Dead Ball Penalty', 'Obstruction of Field'],
      correctIndex: 0,
      explanation: 'In the updated MCC Laws of Cricket, dismissing a non-striker backing up too early was moved from Law 41 (Unfair Play) to Law 38 (Run Out) and is officially a legitimate Run Out.'
    },
    {
      id: 'crick_l4_03',
      level: 4,
      category: 'World Cup & History',
      question: 'In the historic 1971 first-ever Men\'s One Day International (ODI) match in cricket history, which two nations played against each other?',
      options: ['Australia & England', 'India & England', 'West Indies & Australia', 'England & South Africa'],
      correctIndex: 0,
      explanation: 'The first officially recognized ODI match was played on January 5, 1971 between Australia and England at the Melbourne Cricket Ground (MCG) after rain washed out the Test match.'
    },
    {
      id: 'crick_l4_04',
      level: 4,
      category: 'Current Affairs',
      question: 'Who was appointed captain of India\'s Men\'s T20I team in July 2024 following Rohit Sharma\'s retirement?',
      options: ['Suryakumar Yadav', 'Hardik Pandya', 'Shubman Gill', 'Rishabh Pant'],
      correctIndex: 0,
      explanation: 'The BCCI senior men\'s selection committee appointed Suryakumar Yadav as India\'s full-time T20I captain for the Sri Lanka bilateral series and beyond.'
    },
    {
      id: 'crick_l4_05',
      level: 4,
      category: 'IPL & Leagues',
      question: 'Who was named the Most Valuable Player (MVP) of the IPL 2024 season?',
      options: ['Sunil Narine', 'Andre Russell', 'Jasprit Bumrah', 'Heinrich Klaasen'],
      correctIndex: 0,
      explanation: 'Sunil Narine of KKR had an unbelievable all-round season scoring 488 runs at a strike rate of 180 as an opener and picking up 17 wickets with an economy of 6.69 to win the MVP award.'
    },
    {
      id: 'crick_l4_06',
      level: 4,
      category: 'Records & Stats',
      question: 'Who became the first cricketer in Men\'s T20I history to score 4 centuries, before Rohit Sharma subsequently reached 5?',
      options: ['Glenn Maxwell', 'Colin Munro', 'Suryakumar Yadav', 'Aaron Finch'],
      correctIndex: 0,
      explanation: 'Glenn Maxwell and Suryakumar Yadav had tied Rohit with 4 centuries before Rohit Sharma slammed his 5th T20I century against Afghanistan in Bengaluru in January 2024.'
    },
    {
      id: 'crick_l4_07',
      level: 4,
      category: 'Women Cricket',
      question: 'Which Australian cricketer has won the ICC Women\'s Cricketer of the Year (Rachael Heyhoe Flint Trophy) a record three times?',
      options: ['Ellyse Perry', 'Meg Lanning', 'Alyssa Healy', 'Beth Mooney'],
      correctIndex: 0,
      explanation: 'Ellyse Perry, widely regarded as one of the greatest female cricketers of all time, won the prestigious ICC Rachael Heyhoe Flint Award in 2017, 2019, and 2020.'
    },
    {
      id: 'crick_l4_08',
      level: 4,
      category: 'World Cup & History',
      question: 'Which Indian bowler achieved a famous World Cup hat-trick against Pakistan or Afghanistan in 2019 during the final over in Southampton?',
      options: ['Mohammed Shami', 'Jasprit Bumrah', 'Bhuvneshwar Kumar', 'Yuzvendra Chahal'],
      correctIndex: 0,
      explanation: 'Mohammed Shami defended 16 runs in the final over against Afghanistan at Southampton, taking a sensational hat-trick by dismissing Mohammad Nabi, Aftab Alam, and Mujeeb Ur Rahman.'
    },
    {
      id: 'crick_l4_09',
      level: 4,
      category: 'Rules & Terminology',
      question: 'What is the mandatory follow-on margin in a 5-day Test match if the team batting first leads?',
      options: ['200 runs', '150 runs', '175 runs', '250 runs'],
      correctIndex: 0,
      explanation: 'In a 5-day Test match, Law 14 specifies that the team batting first and leading by at least 200 runs has the option to enforce the follow-on.'
    },
    {
      id: 'crick_l4_10',
      level: 4,
      category: 'Current Affairs',
      question: 'At which upcoming Olympic Games will Cricket make its historic return as an official medal sport after a 128-year absence?',
      options: ['Los Angeles 2028 (LA28)', 'Brisbane 2032', 'Paris 2024', 'Doha 2036'],
      correctIndex: 0,
      explanation: 'The International Olympic Committee (IOC) approved the inclusion of Men\'s and Women\'s T20 Cricket for the Los Angeles 2028 Olympic Games.'
    }
  ]
};
