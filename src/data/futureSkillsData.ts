export interface AIMCQQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AILesson {
  id: string;
  order: number;
  title: string;
  durationMinutes: number;
  readings: string[];
  keyTakeaway: string;
  quiz: AIMCQQuestion[];
}

export interface AIModule {
  id: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  lessons: AILesson[];
}

export const AI_ACADEMY_MODULES: AIModule[] = [
  {
    id: 'ai-mod-1',
    moduleNumber: 1,
    title: 'Introduction to Artificial Intelligence',
    subtitle: 'From Smart Machines to Thinking Computers',
    description: 'Learn what AI really is, how computers perceive the world, and where AI touches our daily lives.',
    icon: '🤖',
    badge: 'Beginner',
    lessons: [
      {
        id: 'ai-les-1',
        order: 1,
        title: 'What is Artificial Intelligence?',
        durationMinutes: 12,
        readings: [
          'Artificial Intelligence (AI) refers to computer software and machines engineered to perform tasks that typically require human intelligence, such as recognizing faces, understanding human speech, solving puzzles, and making decisions.',
          'Unlike regular computer programs that strictly follow hardcoded instructions (like a calculator calculating 5 + 5), an AI system can learn from patterns, adapt to new data, and make intelligent predictions on unfamiliar situations.',
          'Today, AI powers voice assistants like Siri and Alexa, recommends videos on YouTube, filters spam emails, and powers GPS navigation like Google Maps.'
        ],
        keyTakeaway: 'AI allows machines to learn from patterns and solve problems that previously required human thinking.',
        quiz: [
          {
            question: 'What is the primary difference between traditional programs and AI systems?',
            options: [
              'AI systems can learn patterns and adapt to new situations',
              'Traditional programs are faster than all AI',
              'AI systems do not require electricity',
              'Traditional programs can think creatively'
            ],
            correctIndex: 0,
            explanation: 'AI systems learn from data and adapt, whereas standard programs only execute fixed lines of code.'
          },
          {
            question: 'Which of the following is a real-world application of AI today?',
            options: [
              'Voice assistants like Siri and Alexa',
              'A standard mechanical wrist watch',
              'An ordinary bicycle pedal',
              'A paper textbook'
            ],
            correctIndex: 0,
            explanation: 'Voice assistants use natural language processing and AI speech recognition to understand commands.'
          },
          {
            question: 'What term describes computer intelligence created by human engineering?',
            options: ['Natural Intelligence', 'Artificial Intelligence', 'Instinct', 'Telepathy'],
            correctIndex: 1,
            explanation: 'Artificial Intelligence (AI) is intelligence demonstrated by engineered computational systems.'
          }
        ]
      },
      {
        id: 'ai-les-2',
        order: 2,
        title: 'Human Brain vs. Computer Brain',
        durationMinutes: 15,
        readings: [
          'The human brain contains approximately 86 billion biological neurons interconnected by trillions of synapses. Our brains excel at common sense, creativity, emotions, and moral judgment.',
          'Computers, on the other hand, utilize billions of electronic transistors on silicon microchips. Computers can perform billions of mathematical calculations per second without fatigue.',
          'AI scientists created "Artificial Neural Networks" inspired by the human brain to give computers the ability to recognize complex patterns like handwriting or animal photos.'
        ],
        keyTakeaway: 'Artificial Neural Networks are computational models inspired by the structure and interconnected neurons of the human brain.',
        quiz: [
          {
            question: 'Approximately how many biological neurons does the human brain contain?',
            options: ['86 thousand', '86 million', '86 billion', '86 trillion'],
            correctIndex: 2,
            explanation: 'The human brain contains roughly 86 billion neurons connected through trillions of synaptic pathways.'
          },
          {
            question: 'What inspired computer scientists to create Artificial Neural Networks?',
            options: [
              'The biological network of neurons in the human brain',
              'The root system of mango trees',
              'The electrical wiring of automobiles',
              'The movement of ocean tides'
            ],
            correctIndex: 0,
            explanation: 'Artificial Neural Networks were modeled after the biological neurons and synapses in the human nervous system.'
          },
          {
            question: 'In which capability do computers drastically outperform humans?',
            options: [
              'Emotional empathy',
              'Rapid numerical calculation with zero fatigue',
              'Philosophical reflection',
              'Appreciating beautiful paintings'
            ],
            correctIndex: 1,
            explanation: 'Computers calculate billions of arithmetic operations per second without making careless math mistakes.'
          }
        ]
      },
      {
        id: 'ai-les-3',
        order: 3,
        title: 'The Turing Test & History of AI',
        durationMinutes: 15,
        readings: [
          'In 1950, British mathematician and codebreaker Alan Turing proposed a famous experiment called the "Imitation Game" (now known as the Turing Test). He asked: Can a machine converse so naturally that a human cannot tell if they are chatting with a computer or a real person?',
          'The term "Artificial Intelligence" was formally coined in 1956 at the legendary Dartmouth Conference organized by scientist John McCarthy.',
          'Early AI struggled with limited computer memory and processing speed, but modern breakthroughs in cloud computing, big data, and GPUs have sparked an explosive AI revolution.'
        ],
        keyTakeaway: 'The Turing Test evaluates whether a machine can exhibit conversational behavior indistinguishable from a human.',
        quiz: [
          {
            question: 'Who proposed the Turing Test in 1950 to evaluate machine intelligence?',
            options: ['Alan Turing', 'Isaac Newton', 'Thomas Edison', 'Albert Einstein'],
            correctIndex: 0,
            explanation: 'Alan Turing proposed the test in his famous paper "Computing Machinery and Intelligence".'
          },
          {
            question: 'In what year was the term "Artificial Intelligence" formally coined at the Dartmouth Conference?',
            options: ['1850', '1920', '1956', '2010'],
            correctIndex: 2,
            explanation: 'John McCarthy and colleagues coined the term in 1956 at Dartmouth College.'
          },
          {
            question: 'What modern hardware breakthrough contributed massively to modern AI computing power?',
            options: ['Steam engines', 'Graphics Processing Units (GPUs)', 'Vacuum tubes', 'Floppy disks'],
            correctIndex: 1,
            explanation: 'GPUs allow parallel matrix operations, enabling deep neural networks to train rapidly.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-mod-2',
    moduleNumber: 2,
    title: 'How Computers Learn: Machine Learning',
    subtitle: 'Supervised, Unsupervised & Reinforcement Learning',
    description: 'Discover how computers learn from examples without being explicitly programmed for every step.',
    icon: '🧠',
    badge: 'Core Skills',
    lessons: [
      {
        id: 'ai-les-4',
        order: 4,
        title: 'Supervised Learning & Labeled Data',
        durationMinutes: 15,
        readings: [
          'Supervised Learning is the most common form of Machine Learning. It works like a student learning with a teacher: the computer is given thousands of labeled examples (e.g., photos labeled "cat" or "dog").',
          'The computer identifies patterns (whiskers, pointed ears, snout shape) and tunes its internal mathematical weights.',
          'Once trained, the model can accurately classify a new, unseen picture it has never encountered before!'
        ],
        keyTakeaway: 'Supervised learning trains a model using labeled inputs paired with known correct answers.',
        quiz: [
          {
            question: 'What is essential for supervised machine learning?',
            options: ['Labeled training data with known answers', 'No data at all', 'Only audio recordings', 'Manual hardware soldering'],
            correctIndex: 0,
            explanation: 'Supervised learning requires inputs paired with correct labels so the model can learn errors and adjust weights.'
          },
          {
            question: 'When a model successfully identifies a photo it has never seen before, it demonstrates:',
            options: ['Overfitting', 'Generalization', 'Hardware failure', 'Short circuit'],
            correctIndex: 1,
            explanation: 'Generalization means applying learned knowledge accurately to new, unseen examples.'
          },
          {
            question: 'Which of these is an example of supervised learning?',
            options: [
              'Training an email filter with emails tagged "Spam" and "Not Spam"',
              'A computer running out of battery',
              'Printing a blank sheet of paper',
              'A robot standing idle'
            ],
            correctIndex: 0,
            explanation: 'Tagged spam emails act as labeled training examples.'
          }
        ]
      },
      {
        id: 'ai-les-5',
        order: 5,
        title: 'Unsupervised Learning & Pattern Discovery',
        durationMinutes: 14,
        readings: [
          'In Unsupervised Learning, there is no teacher and no pre-assigned labels. The computer receives raw data and must find hidden groupings and patterns on its own.',
          'A famous technique is "Clustering", where an algorithm groups similar customers together based on shopping preferences or clusters galaxies in telescope images.',
          'Unsupervised learning is crucial for fraud detection in banking, finding unusual credit card transactions that deviate from ordinary habits.'
        ],
        keyTakeaway: 'Unsupervised learning discovers hidden structures and clusters in data without relying on pre-labeled tags.',
        quiz: [
          {
            question: 'Does unsupervised learning require pre-labeled answers from humans?',
            options: ['Yes, always', 'No, it finds patterns in unlabeled data on its own', 'Only on weekends', 'Only for math problems'],
            correctIndex: 1,
            explanation: 'Unsupervised learning discovers groupings independently from unlabeled datasets.'
          },
          {
            question: 'What technique groups similar data points into distinct clusters?',
            options: ['Clustering', 'Formatting', 'Erasing', 'Defragmenting'],
            correctIndex: 0,
            explanation: 'Clustering algorithms (like K-Means) group data with shared features together.'
          },
          {
            question: 'In which financial domain is unsupervised anomaly detection widely used?',
            options: ['Bank fraud and suspicious transaction detection', 'Printing paper currency', 'Buying wooden chairs', 'Lighting office candles'],
            correctIndex: 0,
            explanation: 'Deviations from normal purchase patterns flag potential fraud automatically.'
          }
        ]
      },
      {
        id: 'ai-les-6',
        order: 6,
        title: 'Reinforcement Learning: Learning from Trial and Error',
        durationMinutes: 16,
        readings: [
          'Reinforcement Learning mimics how a puppy learns tricks or how children learn to ride a bicycle. An AI "Agent" interacts with an "Environment".',
          'When the agent makes a good move, it receives a numerical reward (+10 points). When it makes a mistake, it receives a penalty (-10 points).',
          'Through millions of trials, programs like AlphaGo and self-driving cars learn champion strategies that often surpass the best human masters.'
        ],
        keyTakeaway: 'Reinforcement learning optimizes decision-making through rewards for success and penalties for mistakes.',
        quiz: [
          {
            question: 'What guides an AI agent during Reinforcement Learning?',
            options: ['A system of numerical rewards and penalties', 'Reading encyclopedias only', 'Direct human remote control', 'Random luck'],
            correctIndex: 0,
            explanation: 'The agent learns policies that maximize cumulative positive rewards.'
          },
          {
            question: 'Which legendary game-playing AI defeated world champions using reinforcement learning?',
            options: ['AlphaGo', 'Microsoft Paint', 'Notepad', 'Calculator'],
            correctIndex: 0,
            explanation: 'DeepMind’s AlphaGo mastered the ancient game of Go using reinforcement learning and neural networks.'
          },
          {
            question: 'In reinforcement learning, the system or world that the agent interacts with is called the:',
            options: ['Environment', 'Database', 'File folder', 'Keyboard'],
            correctIndex: 0,
            explanation: 'The agent observes states from the environment, takes actions, and receives feedback.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-mod-3',
    moduleNumber: 3,
    title: 'Computer Vision: How AI Sees the World',
    subtitle: 'Pixels, Object Detection & Autonomous Vehicles',
    description: 'Understand how cameras and neural networks break down images into pixels to identify faces, objects, and road signs.',
    icon: '👁️',
    badge: 'Visual AI',
    lessons: [
      {
        id: 'ai-les-7',
        order: 7,
        title: 'How Computers Interpret Images and Pixels',
        durationMinutes: 12,
        readings: [
          'To a computer, a photograph is not colors and shapes; it is a giant two-dimensional grid of numbers called pixels (picture elements).',
          'In a grayscale image, each pixel is a number between 0 (completely black) and 255 (pure white).',
          'Color images use three channels: Red, Green, and Blue (RGB). An algorithm reads these number matrices to detect edges, curves, and textures.'
        ],
        keyTakeaway: 'Computers represent visual pictures as matrices of numbers corresponding to RGB color intensities.',
        quiz: [
          {
            question: 'What is the smallest individual unit of a digital image?',
            options: ['Pixel', 'Byte', 'Proton', 'Vowel'],
            correctIndex: 0,
            explanation: 'A pixel (picture element) is the fundamental building block of digital graphics.'
          },
          {
            question: 'What color channels are combined in standard digital color imaging?',
            options: ['Red, Green, Blue (RGB)', 'Yellow, Pink, Violet', 'Black, White, Gray', 'Orange, Cyan, Gold'],
            correctIndex: 0,
            explanation: 'RGB (Red, Green, Blue) is the universal additive color model in screens and cameras.'
          },
          {
            question: 'In standard 8-bit grayscale, what does the value 0 represent?',
            options: ['Pure White', 'Pure Black', 'Bright Yellow', 'Invisible'],
            correctIndex: 1,
            explanation: '0 represents pitch black, and 255 represents pure white.'
          }
        ]
      },
      {
        id: 'ai-les-8',
        order: 8,
        title: 'Convolutional Neural Networks (CNNs)',
        durationMinutes: 15,
        readings: [
          'Convolutional Neural Networks (CNNs) are specialized deep learning networks designed specifically for processing visual data.',
          'CNNs use small mathematical filters that slide over the image like a magnifying glass to detect low-level features like diagonal edges and corners.',
          'Higher layers assemble these edges into eyes, noses, wheels, and complete objects, making facial recognition and medical X-ray scanning possible.'
        ],
        keyTakeaway: 'CNNs slide convolutional filters across images to extract visual features from simple edges to complex shapes.',
        quiz: [
          {
            question: 'What specialized type of neural network is primarily used for computer vision and image analysis?',
            options: ['Convolutional Neural Network (CNN)', 'Simple spreadsheet', 'Word processor', 'Analog radio transmitter'],
            correctIndex: 0,
            explanation: 'CNNs excel at image recognition due to spatial weight sharing.'
          },
          {
            question: 'What do the initial layers of a CNN typically detect first?',
            options: ['Entire human faces', 'Low-level edges and corners', 'Full sentences', 'Color names'],
            correctIndex: 1,
            explanation: 'Initial layers detect simple primitives like straight lines and sharp color gradients.'
          },
          {
            question: 'How are CNNs used in modern healthcare?',
            options: ['Detecting tumors and fractures in X-rays and MRI scans', 'Stocking pharmacy shelves', 'Cooking hospital food', 'Painting building walls'],
            correctIndex: 0,
            explanation: 'Medical imaging AI assists radiologists in spotting early signs of disease in scans.'
          }
        ]
      },
      {
        id: 'ai-les-9',
        order: 9,
        title: 'Autonomous Vehicles: Self-Driving Cars',
        durationMinutes: 16,
        readings: [
          'Self-driving cars combine multiple computer vision sensors: optical cameras, LiDAR (laser distance scanners), and radar.',
          'The car’s onboard AI continuously detects pedestrians, lane boundaries, traffic lights, and other vehicles at 60 frames per second.',
          'Decision algorithms calculate safe speed, steering angles, and braking distances faster than human reaction time.'
        ],
        keyTakeaway: 'Self-driving vehicles merge cameras, LiDAR, and deep learning vision to navigate roads autonomously.',
        quiz: [
          {
            question: 'What sensor uses laser pulses to create a 3D distance map of the environment for autonomous cars?',
            options: ['LiDAR', 'Microphone', 'Thermometer', 'Barometer'],
            correctIndex: 0,
            explanation: 'LiDAR (Light Detection and Ranging) fires millions of laser beams per second to map surrounding 3D geometry.'
          },
          {
            question: 'What is a critical safety task of computer vision in self-driving vehicles?',
            options: ['Detecting pedestrians, stop signs, and lane markers', 'Playing car radio music', 'Changing tire pressure manually', 'Washing windows'],
            correctIndex: 0,
            explanation: 'Real-time object detection prevents collisions with pedestrians and obstacles.'
          },
          {
            question: 'Approximately how quickly do self-driving perception systems analyze road frames?',
            options: ['Once an hour', 'Many times per second (e.g., 30-60 FPS)', 'Once every mile', 'Only when parked'],
            correctIndex: 1,
            explanation: 'Real-time perception requires processing 30 to 60 camera frames every single second.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-mod-4',
    moduleNumber: 4,
    title: 'Natural Language Processing: Talking to Computers',
    subtitle: 'Text, Speech Recognition & Chatbots',
    description: 'Learn how AI parses human vocabulary, sentiments, grammar, and translates languages seamlessly.',
    icon: '💬',
    badge: 'Language AI',
    lessons: [
      {
        id: 'ai-les-10',
        order: 10,
        title: 'Tokenization and Text Embeddings',
        durationMinutes: 14,
        readings: [
          'Computers cannot read letters directly; they must convert words and sentences into numbers. This process starts with "Tokenization" — splitting text into smaller pieces called tokens.',
          'Next, AI creates "Word Embeddings" (like Word2Vec), where words with similar meanings (like "king" and "queen", or "apple" and "orange") are placed close together in mathematical space.',
          'This allows an AI to understand that "happy" is related to "joyful" and opposite to "sad".'
        ],
        keyTakeaway: 'Tokenization breaks sentences into chunks, and embeddings represent semantic word meanings as vectors.',
        quiz: [
          {
            question: 'What is the process of breaking down text sentences into smaller pieces or word units?',
            options: ['Tokenization', 'De-magnetization', 'Soldering', 'Re-formatting'],
            correctIndex: 0,
            explanation: 'Tokenization segments raw text strings into discrete tokens for neural network processing.'
          },
          {
            question: 'What are word embeddings in natural language processing?',
            options: [
              'Mathematical vector numbers where words with similar meanings are close together',
              'Physical plastic letters on a keyboard',
              'Audio recordings stored on CD',
              'Spelling mistakes highlighted in red'
            ],
            correctIndex: 0,
            explanation: 'Word vectors capture geometric semantic relationships between concepts.'
          },
          {
            question: 'Which pair of words would have vectors positioned very close to each other in semantic space?',
            options: ['Doctor and Hospital', 'Pencil and Volcano', 'Banana and Submarine', 'Tiger and Cloud'],
            correctIndex: 0,
            explanation: 'Doctor and Hospital share strong contextual semantic affinity.'
          }
        ]
      },
      {
        id: 'ai-les-11',
        order: 11,
        title: 'Sentiment Analysis & Speech Recognition',
        durationMinutes: 14,
        readings: [
          'Sentiment Analysis determines the emotional tone behind words — whether a customer review is positive, negative, or neutral.',
          'Speech Recognition converts audio waves spoken into a microphone into written words using acoustic models and phonetic dictionaries.',
          'When you say "Hey Google, set an alarm for 7 AM", the AI transcribes your voice, extracts the intent (SET_ALARM), and identifies the parameter (7:00 AM).'
        ],
        keyTakeaway: 'NLP analyzes emotional tone in text and decodes human speech into structured software commands.',
        quiz: [
          {
            question: 'What task identifies whether a customer review is cheerful, angry, or disappointed?',
            options: ['Sentiment Analysis', 'Image compression', 'Battery calibration', 'Network pinging'],
            correctIndex: 0,
            explanation: 'Sentiment analysis uses machine learning to classify emotional orientation in text.'
          },
          {
            question: 'What is the role of Speech Recognition in voice assistants?',
            options: ['Converting spoken audio waves into written text strings', 'Increasing phone screen brightness', 'Cooling the computer fan', 'Printing paper receipts'],
            correctIndex: 0,
            explanation: 'Speech-to-text models transcribe acoustic frequencies into digital characters.'
          },
          {
            question: 'In the voice command "Play cricket highlights on TV", what is the underlying intent?',
            options: ['PLAY_VIDEO', 'DELETE_ACCOUNT', 'SHUTDOWN_COMPUTER', 'CALL_POLICE'],
            correctIndex: 0,
            explanation: 'The intent parser detects the user’s intention to stream media.'
          }
        ]
      },
      {
        id: 'ai-les-12',
        order: 12,
        title: 'Transformers & Large Language Models (LLMs)',
        durationMinutes: 16,
        readings: [
          'In 2017, researchers introduced the revolutionary "Transformer" architecture with a mechanism called "Self-Attention".',
          'Self-Attention allows a model to understand how every word in a long sentence relates to every other word, even across long paragraphs.',
          'This invention led directly to modern Large Language Models (LLMs) like Gemini, which can write essays, summarize books, and debug code.'
        ],
        keyTakeaway: 'The Transformer architecture with Self-Attention powers all modern Large Language Models.',
        quiz: [
          {
            question: 'What revolutionary neural architecture introduced in 2017 powers modern language AI?',
            options: ['The Transformer', 'The Steam Locomotive', 'The Punch Card System', 'The Cathode Ray Tube'],
            correctIndex: 0,
            explanation: 'The Transformer architecture revolutionized machine translation and language understanding.'
          },
          {
            question: 'What key mechanism inside Transformers allows the model to connect related words across long distances in text?',
            options: ['Self-Attention', 'Random shuffling', 'Color coding', 'Hard disk caching'],
            correctIndex: 0,
            explanation: 'Self-Attention computes relevance weights between all pairs of tokens in a context window.'
          },
          {
            question: 'What does "LLM" stand for in modern AI terminology?',
            options: ['Large Language Model', 'Low Level Machine', 'Linear Logic Matrix', 'Long Lasting Memory'],
            correctIndex: 0,
            explanation: 'LLM stands for Large Language Model.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-mod-5',
    moduleNumber: 5,
    title: 'Generative AI and Creative Machines',
    subtitle: 'Diffusion Models, Art & Synthetic Media',
    description: 'Explore how computers create original paintings, compose symphonies, and generate photorealistic images from simple prompts.',
    icon: '🎨',
    badge: 'Creative AI',
    lessons: [
      {
        id: 'ai-les-13',
        order: 13,
        title: 'How Image Generation Works: Diffusion Models',
        durationMinutes: 14,
        readings: [
          'Generative AI does not copy and paste existing art; it creates entirely brand new pixels from scratch using mathematical diffusion.',
          'During training, the computer learns by gradually adding digital static (noise) to a picture until it looks like television snow, and learning how to reverse the noise step-by-step.',
          'When you give a prompt like "A golden lion wearing a royal crown on Mars", the AI starts from random static and strips away the noise until a crisp masterpiece emerges.'
        ],
        keyTakeaway: 'Diffusion models create images by systematically removing noise from random static guided by text prompts.',
        quiz: [
          {
            question: 'How do modern image generation models create pictures from text prompts?',
            options: [
              'By iteratively removing noise from random static guided by text',
              'By searching Google and copying someone’s file',
              'By cutting and pasting clipart stickers',
              'By scanning printed paper books'
            ],
            correctIndex: 0,
            explanation: 'Diffusion models reverse noise to synthesize original pixels that match the text prompt.'
          },
          {
            question: 'What is the text instruction given to an AI image generator called?',
            options: ['A Prompt', 'A Password', 'A Trademark', 'A Hyperlink'],
            correctIndex: 0,
            explanation: 'A prompt is the natural language instruction that guides generative models.'
          },
          {
            question: 'Can generative models produce completely original images that never existed before?',
            options: ['Yes, they synthesize new pixel combinations', 'No, they only repeat one photo', 'Only if the computer is turned off', 'Only in black and white'],
            correctIndex: 0,
            explanation: 'Generative models create brand new compositions based on learned concepts.'
          }
        ]
      },
      {
        id: 'ai-les-14',
        order: 14,
        title: 'AI in Music and Sound Composition',
        durationMinutes: 14,
        readings: [
          'Sound is composed of frequency, pitch, tempo, harmony, and rhythm. AI music models analyze millions of audio waveforms and MIDI notes.',
          'AI can harmonize melodies, generate background orchestral scores for movies, and recreate classical instruments like the sitar and violin.',
          'Musicians use AI as a creative partner to inspire new chord progressions and explore experimental soundscapes.'
        ],
        keyTakeaway: 'AI models analyze musical frequencies, scales, and rhythm to compose original melodies and harmonies.',
        quiz: [
          {
            question: 'What digital representation of musical notes, pitch, and duration is commonly analyzed by music AI?',
            options: ['MIDI data', 'JPEG format', 'PDF documents', 'Barcode scans'],
            correctIndex: 0,
            explanation: 'MIDI represents musical pitch, velocity, and timing in structured digital format.'
          },
          {
            question: 'How do professional music producers use AI in studios today?',
            options: ['As a creative assistant to generate melody ideas and harmonies', 'To replace all human listeners', 'To turn off speakers', 'To destroy musical instruments'],
            correctIndex: 0,
            explanation: 'AI acts as a co-creator, helping artists brainstorm variations and soundscapes.'
          },
          {
            question: 'What fundamental physical property of sound waves is measured in Hertz (Hz)?',
            options: ['Frequency', 'Weight', 'Temperature', 'Color'],
            correctIndex: 0,
            explanation: 'Frequency, measured in Hertz, determines the perceived pitch of a sound wave.'
          }
        ]
      },
      {
        id: 'ai-les-15',
        order: 15,
        title: 'Prompt Engineering: Speaking to AI',
        durationMinutes: 15,
        readings: [
          'Prompt Engineering is the skill of crafting precise, clear, and structured instructions so AI models produce optimal responses.',
          'Effective prompts include: Persona (who the AI should act as), Context (background facts), Task (what to do), and Constraints (format, length, tone).',
          'Good prompt engineering turns a generic answer into an engaging, accurate, and educational masterpiece.'
        ],
        keyTakeaway: 'Great prompt engineering combines role, context, explicit instructions, and constraints.',
        quiz: [
          {
            question: 'What is "Prompt Engineering"?',
            options: [
              'The practice of crafting precise inputs to guide AI models toward optimal outputs',
              'Soldering computer wires inside a server room',
              'Writing manual code in machine assembly only',
              'Repairing broken computer screens'
            ],
            correctIndex: 0,
            explanation: 'Prompt engineering is the technique of optimizing prompts to produce reliable, high-quality AI outputs.'
          },
          {
            question: 'Which of the following makes a prompt much more effective?',
            options: [
              'Giving clear context, a specific role, and format requirements',
              'Typing random punctuation marks',
              'Writing only a single vague word like "help"',
              'Closing the browser immediately'
            ],
            correctIndex: 0,
            explanation: 'Specific context, roles, and constraints yield significantly better responses.'
          },
          {
            question: 'If you want an AI to explain photosynthesis to a 4th-grade student, you should:',
            options: [
              'Explicitly state: "Explain photosynthesis simply for a 4th-grade student using fun analogies"',
              'Use university-level medical jargon',
              'Ask without mentioning the student’s grade level',
              'Send a blank message'
            ],
            correctIndex: 0,
            explanation: 'Specifying the target audience ensures the vocabulary and tone are perfectly aligned.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-mod-6',
    moduleNumber: 6,
    title: 'Robotics and Autonomous Systems',
    subtitle: 'Sensors, Actuators & Real-World AI',
    description: 'Learn how software comes alive in physical bodies: surgical robots, planetary rovers, and automated warehouses.',
    icon: '🦾',
    badge: 'Hardware AI',
    lessons: [
      {
        id: 'ai-les-16',
        order: 16,
        title: 'Anatomy of a Robot: Sensors, Controllers & Actuators',
        durationMinutes: 14,
        readings: [
          'Every robot consists of three main components: Sensors (eyes and ears that perceive the environment), Controllers (the computer brain that processes data), and Actuators (motors and pistons that move legs, wheels, or robotic arms).',
          'Sensors include ultrasonic distance detectors, infrared cameras, gyroscopes, and force feedback pads.',
          'When a robot reaches for an egg, its sensors measure pressure in milliseconds so the gripper holds it firmly without cracking the shell.'
        ],
        keyTakeaway: 'Robots rely on sensors to perceive, computers to decide, and mechanical actuators to act.',
        quiz: [
          {
            question: 'Which robotic component acts like the muscles, providing physical movement to limbs and wheels?',
            options: ['Actuators and electric motors', 'Computer monitor', 'USB cable', 'Power switch'],
            correctIndex: 0,
            explanation: 'Actuators convert electrical energy into mechanical physical motion.'
          },
          {
            question: 'What sensor helps a robot detect obstacles by bouncing high-frequency sound waves?',
            options: ['Ultrasonic sensor', 'Thermometer', 'Voltmeter', 'Clock'],
            correctIndex: 0,
            explanation: 'Ultrasonic sensors measure distance using the time-of-flight of sound waves.'
          },
          {
            question: 'What component acts as the "brain" of the robotic system?',
            options: ['The microcontroller or onboard computer', 'The metal wheel', 'The paint finish', 'The cardboard packing box'],
            correctIndex: 0,
            explanation: 'The microcontroller executes software algorithms to govern actuator motions based on sensor inputs.'
          }
        ]
      },
      {
        id: 'ai-les-17',
        order: 17,
        title: 'Robots in Space: Mars Rovers and Chandrayaan',
        durationMinutes: 15,
        readings: [
          'Because radio signals from Earth take up to 20 minutes to reach Mars, humans cannot steer a Mars rover with a live joystick.',
          'Rovers like NASA’s Perseverance and India’s Chandrayaan Pragyan rover must possess onboard autonomous navigation (AutoNav).',
          'The rover’s computer vision detects sharp rocks and steep sand traps, calculating safe paths independently across alien terrain.'
        ],
        keyTakeaway: 'Space rovers use autonomous navigation algorithms because communication time lag prevents live joystick steering.',
        quiz: [
          {
            question: 'Why do Mars rovers require autonomous navigation instead of live joystick driving from Earth?',
            options: [
              'Because radio signals take up to 20 minutes to travel across space, making real-time steering impossible',
              'Because rovers do not have batteries',
              'Because humans are not interested in space',
              'Because joysticks cannot connect to computers'
            ],
            correctIndex: 0,
            explanation: 'The vast distance between planets creates significant signal delay (latency).'
          },
          {
            question: 'What was the name of the lunar rover carried by India’s historic Chandrayaan-3 mission?',
            options: ['Pragyan', 'Vikram', 'Aryabhata', 'Mangalyaan'],
            correctIndex: 0,
            explanation: 'Pragyan was the 6-wheeled lunar rover that successfully explored the Moon’s south polar region.'
          },
          {
            question: 'What hazard does an autonomous rover actively detect and steer around on planetary surfaces?',
            options: ['Deep sand traps and sharp jagged boulders', 'Traffic lights', 'Pedestrian crosswalks', 'Gas stations'],
            correctIndex: 0,
            explanation: 'Avoiding dangerous terrain prevents the rover from getting permanently stuck.'
          }
        ]
      },
      {
        id: 'ai-les-18',
        order: 18,
        title: 'Industrial Automation & Warehouse Swarms',
        durationMinutes: 14,
        readings: [
          'Modern logistics companies use swarms of autonomous mobile robots (AMRs) that zip around warehouse floors to carry heavy inventory shelves.',
          'These robots coordinate via Wi-Fi algorithms, ensuring hundreds of vehicles move at high speeds without bumping into each other.',
          'In factories, robotic arms assemble precision electronics and weld car frames with micrometer accuracy 24 hours a day.'
        ],
        keyTakeaway: 'Swarm robotics and automated guided vehicles optimize warehouse logistics and manufacturing precision.',
        quiz: [
          {
            question: 'How do automated warehouse robots prevent collisions when hundreds move simultaneously?',
            options: [
              'Through wireless coordination algorithms and spatial path planning',
              'By driving with their eyes closed',
              'By moving only one robot per day',
              'By honking loud car horns continuously'
            ],
            correctIndex: 0,
            explanation: 'Centralized and distributed path-planning algorithms compute collision-free trajectories.'
          },
          {
            question: 'What advantage do industrial robotic arms provide in automobile manufacturing?',
            options: ['Continuous high-precision welding and assembly without fatigue', 'They eat car fuel', 'They sing songs', 'They drive cars to the market'],
            correctIndex: 0,
            explanation: 'Robotic arms maintain consistent sub-millimeter precision 24 hours a day.'
          },
          {
            question: 'What term describes a coordinated group of many simple robots working together toward a common goal?',
            options: ['Swarm Robotics', 'Single User System', 'Solo Machine', 'Isolated Node'],
            correctIndex: 0,
            explanation: 'Swarm robotics studies how collective behaviors emerge from groups of coordinated robots.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-mod-7',
    moduleNumber: 7,
    title: 'Ethics, Safety and Responsible AI',
    subtitle: 'Fairness, Privacy, Deepfakes & Human Values',
    description: 'Learn the ethical responsibilities of building AI: protecting user privacy, preventing bias, and avoiding fake media.',
    icon: '⚖️',
    badge: 'AI Ethics',
    lessons: [
      {
        id: 'ai-les-19',
        order: 19,
        title: 'Bias and Fairness in Machine Learning',
        durationMinutes: 14,
        readings: [
          'AI models learn from historical data created by humans. If the training data contains prejudices, imbalances, or stereotypes, the AI can unintentionally perpetuate those biases.',
          'For instance, if a job hiring AI is trained on past resumes where mostly one gender was hired for leadership roles, it might unfairly penalize qualified candidates of other genders.',
          'Engineers have a moral duty to audit datasets, test for fairness across all demographics, and ensure equal opportunity.'
        ],
        keyTakeaway: 'AI models can inherit human biases from unbalanced datasets; continuous auditing is vital for fairness.',
        quiz: [
          {
            question: 'How does algorithmic bias enter an AI system?',
            options: [
              'When the training data contains historical imbalances or stereotypes',
              'Because computers naturally dislike humans',
              'From computer viruses',
              'Only when the computer overheats'
            ],
            correctIndex: 0,
            explanation: 'AI reflects the patterns and biases present in the datasets on which it was trained.'
          },
          {
            question: 'What must responsible engineers do to prevent bias in AI applications?',
            options: [
              'Audit datasets carefully and test models across diverse groups for equitable fairness',
              'Ignore training data errors',
              'Hide the computer from the public',
              'Only hire their own friends'
            ],
            correctIndex: 0,
            explanation: 'Rigorous data curation and ethical auditing ensure fair, unbiased outcomes.'
          },
          {
            question: 'True or False: An AI is automatically fair just because it is a machine.',
            options: ['False, machines learn directly from human data and can perpetuate human biases', 'True, all machines are 100% fair by default', 'True, machines do not use electricity', 'True, only robots can vote'],
            correctIndex: 0,
            explanation: 'Machines lack moral judgment and will blindly learn any prejudice present in the data.'
          }
        ]
      },
      {
        id: 'ai-les-20',
        order: 20,
        title: 'Data Privacy and Digital Footprints',
        durationMinutes: 14,
        readings: [
          'Training powerful AI models requires immense volumes of data. However, this must never come at the expense of human privacy.',
          'Techniques like "Federated Learning" allow smartphones to train AI locally on a student’s device without uploading their private photos or chat logs to central servers.',
          'Students should be conscious of their digital footprint and never share personal identity numbers, passwords, or home addresses with unknown chatbots.'
        ],
        keyTakeaway: 'Protect your digital privacy: never input personal secrets, passwords, or private data into public AI tools.',
        quiz: [
          {
            question: 'What should you NEVER share with public online chatbots or websites?',
            options: [
              'Your home address, school name, passwords, and private family photos',
              'Your favorite color',
              'A math question from your homework',
              'The capital city of India'
            ],
            correctIndex: 0,
            explanation: 'Personal identifiable information (PII) must always be kept private and secure.'
          },
          {
            question: 'What privacy technique trains AI on devices without uploading raw private user data to central servers?',
            options: ['Federated Learning', 'Public broadcasting', 'Screen sharing', 'Mass printing'],
            correctIndex: 0,
            explanation: 'Federated learning trains decentralized models on edge devices while keeping private data local.'
          },
          {
            question: 'What is a "Digital Footprint"?',
            options: [
              'The trail of data and information left behind by your online internet activity',
              'The size of your computer keyboard',
              'A photo of your foot on a smartphone',
              'The electrical wattage of a laptop'
            ],
            correctIndex: 0,
            explanation: 'A digital footprint consists of records, cookies, and posts generated during web browsing.'
          }
        ]
      },
      {
        id: 'ai-les-21',
        order: 21,
        title: 'Deepfakes, Disinformation & Critical Thinking',
        durationMinutes: 16,
        readings: [
          'Generative AI can create realistic fake videos and voice clones called "Deepfakes", making it look like someone said or did something they never actually did.',
          'Malicious actors can use deepfakes to spread rumors, trick people for money, or manipulate elections.',
          'Students must practice digital literacy: check trustworthy sources, look for visual glitches (blinking anomalies, strange fingers), and never believe viral clips without verification.'
        ],
        keyTakeaway: 'Develop critical thinking: verify sources and look for synthetic artifacts before trusting sensational video or audio clips.',
        quiz: [
          {
            question: 'What are synthetic audio and video clips created by AI to mimic real individuals called?',
            options: ['Deepfakes', 'Cartoons', 'Podcasts', 'Audiobooks'],
            correctIndex: 0,
            explanation: 'Deepfakes are AI-synthesized media manipulated to impersonate real people.'
          },
          {
            question: 'What is the most effective defense against online misinformation and fake videos?',
            options: [
              'Practicing critical thinking and verifying information across reputable news sources',
              'Believing every video that looks exciting',
              'Forwarding messages immediately to 10 friends',
              'Turning off the computer forever'
            ],
            correctIndex: 0,
            explanation: 'Cross-verifying facts with established fact-checkers and credible journalism is essential.'
          },
          {
            question: 'Which of the following is a common visual flaw in poorly generated AI videos?',
            options: [
              'Unnatural eye blinking, blurry teeth, or extra distorted fingers',
              'Perfect crisp audio',
              'Accurate timestamps',
              'Official government signatures'
            ],
            correctIndex: 0,
            explanation: 'AI video models frequently struggle with realistic hand anatomy, ear details, and consistent eye reflections.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-mod-8',
    moduleNumber: 8,
    title: 'Future Careers in Technology and AI',
    subtitle: 'From Data Scientist to Prompt Engineer',
    description: 'Explore the high-demand career paths shaping tomorrow and how school subjects prepare you to lead.',
    icon: '🚀',
    badge: 'Career Horizon',
    lessons: [
      {
        id: 'ai-les-22',
        order: 22,
        title: 'Key Roles in the AI Ecosystem',
        durationMinutes: 15,
        readings: [
          'The AI revolution requires diverse talents beyond just coding. Key roles include: Machine Learning Engineer (trains models), Data Scientist (cleans and discovers insights in data), and AI Ethicist (ensures systems are safe and unbiased).',
          'Domain experts like doctors, teachers, environmentalists, and artists are equally crucial to guide how AI is applied in their fields.',
          'Curiosity, problem-solving, and continuous learning are the most valuable skills for any future career.'
        ],
        keyTakeaway: 'The AI field brings together engineers, scientists, ethicists, and domain specialists working together.',
        quiz: [
          {
            question: 'What does a Machine Learning Engineer primarily do?',
            options: [
              'Designs, codes, and trains mathematical AI models on large datasets',
              'Repairs mechanical air conditioners',
              'Sells computer desks in a furniture store',
              'Cleans office windows'
            ],
            correctIndex: 0,
            explanation: 'ML engineers build the computational algorithms and infrastructure that train and deploy models.'
          },
          {
            question: 'Why are AI Ethicists needed in technology companies?',
            options: [
              'To ensure AI systems respect human rights, safety, and fairness',
              'To paint the company logo on the wall',
              'To write food recipes for the cafeteria',
              'To count how many chairs are in the room'
            ],
            correctIndex: 0,
            explanation: 'Ethicists guide responsible development, minimizing societal harms and biases.'
          },
          {
            question: 'What is the role of a Data Scientist?',
            options: [
              'Analyzing complex datasets to uncover actionable insights and trends',
              'Typing random numbers into calculators',
              'Installing light bulbs',
              'Delivering packages by bicycle'
            ],
            correctIndex: 0,
            explanation: 'Data scientists extract meaning and statistical patterns from large collections of raw information.'
          }
        ]
      },
      {
        id: 'ai-les-23',
        order: 23,
        title: 'Foundational School Subjects for Future Tech Leaders',
        durationMinutes: 14,
        readings: [
          'Every exciting AI innovation rests on the foundation of subjects you study in school every day!',
          'Mathematics teaches logic, probability, and linear algebra (vectors and matrices). Science develops the scientific method of hypothesis and testing.',
          'Languages (English, Marathi, Hindi) build reading comprehension and clear communication, which is essential for writing code and prompt engineering.'
        ],
        keyTakeaway: 'School mathematics, science, and language mastery are the direct building blocks of modern technology careers.',
        quiz: [
          {
            question: 'Which school subject is the fundamental mathematical language of neural network operations?',
            options: ['Mathematics (Matrices and Probability)', 'Physical education only', 'Woodwork', 'Needlework'],
            correctIndex: 0,
            explanation: 'Linear algebra, calculus, and statistics form the mathematical core of machine learning.'
          },
          {
            question: 'How does mastering languages help in modern technology and AI careers?',
            options: [
              'It strengthens logical reasoning, prompt crafting, and clear documentation',
              'It has no connection to computers',
              'Computers only understand silence',
              'It only helps with calligraphy'
            ],
            correctIndex: 0,
            explanation: 'Clear communication is vital for coding, communicating ideas, and engineering precise AI prompts.'
          },
          {
            question: 'What scientific habit is central to debugging code and training models?',
            options: [
              'Formulating hypotheses, testing systematically, and observing results',
              'Guessing wildly and giving up immediately',
              'Blaming others for software errors',
              'Deleting the operating system'
            ],
            correctIndex: 0,
            explanation: 'The scientific method of iterative testing and observation solves programming bugs.'
          }
        ]
      },
      {
        id: 'ai-les-24',
        order: 24,
        title: 'Building Your First AI Project & Lifelong Learning',
        durationMinutes: 16,
        readings: [
          'You don’t have to wait until college to build intelligent projects! Tools like Scratch, Google Teachable Machine, and Python make AI accessible to students today.',
          'You can train a model using your webcam to recognize hand gestures, classify recycling trash, or build a chatbot that tutors your classmates.',
          'Remember: true champions embrace lifelong learning. Technology evolves rapidly, but a creative mind that loves learning will always lead the future!'
        ],
        keyTakeaway: 'Start building hands-on projects today; curiosity, persistence, and continuous learning make you a champion!',
        quiz: [
          {
            question: 'Which beginner-friendly free web tool allows students to train image and sound models with a webcam without writing code?',
            options: ['Google Teachable Machine', 'Microsoft Paint', 'Notepad', 'Disk Defragmenter'],
            correctIndex: 0,
            explanation: 'Google Teachable Machine lets students train models directly in their web browser using their webcam.'
          },
          {
            question: 'What is the most popular programming language for Artificial Intelligence and Machine Learning in the world today?',
            options: ['Python', 'HTML', 'BASIC', 'COBOL'],
            correctIndex: 0,
            explanation: 'Python is the world’s leading language for AI due to libraries like PyTorch, TensorFlow, and NumPy.'
          },
          {
            question: 'What mindset defines a true Champion Learner in the digital age?',
            options: [
              'Curiosity, creative problem solving, and a passion for lifelong learning',
              'Memorizing answers without understanding them',
              'Avoiding new technologies out of fear',
              'Giving up whenever an error occurs'
            ],
            correctIndex: 0,
            explanation: 'Resilience, curiosity, and continuous learning empower students to master future skills.'
          }
        ]
      }
    ]
  }
];

// Additional Future Skills Tracks
export interface FutureSkillCourse {
  id: string;
  title: string;
  category: string;
  badge: string;
  icon: string;
  description: string;
  duration: string;
  status: 'ACTIVE' | 'PREVIEW' | 'COMING_SOON';
  modulesCount: number;
  lessonsCount: number;
}

export const FUTURE_SKILLS_COURSES: FutureSkillCourse[] = [
  {
    id: 'ai-academy',
    title: 'AI Learning Academy',
    category: 'Artificial Intelligence',
    badge: '₹99 Premium Plan Exclusive',
    icon: '🤖',
    description: 'Master AI from fundamentals to generative tools, computer vision, robotics, and ethics across 8 modules and 24 lessons.',
    duration: '6 Hours Total',
    status: 'ACTIVE',
    modulesCount: 8,
    lessonsCount: 24
  },
  {
    id: 'comp-edu',
    title: 'Junior Computer Education',
    category: 'Computer Science',
    badge: 'All Subscribers',
    icon: '💻',
    description: 'Computer Hardware vs Software, Operating Systems, File Systems, Internet Safety, and Typing Proficiency.',
    duration: '4 Hours Total',
    status: 'ACTIVE',
    modulesCount: 4,
    lessonsCount: 12
  },
  {
    id: 'excel-master',
    title: 'Microsoft Excel Champions',
    category: 'Productivity & Data',
    badge: '₹99 Premium Plan Exclusive',
    icon: '📊',
    description: 'Spreadsheets, formulas (SUM, AVERAGE, IF), conditional formatting, data sorting, bar charts, and financial tables.',
    duration: '5 Hours Total',
    status: 'COMING_SOON',
    modulesCount: 6,
    lessonsCount: 18
  },
  {
    id: 'coding-python',
    title: 'Coding & Game Design (Scratch & Python)',
    category: 'Programming',
    badge: '₹99 Premium Plan Exclusive',
    icon: '🚀',
    description: 'Block coding fundamentals, loops, conditional variables, functions, and creating interactive student video games.',
    duration: '8 Hours Total',
    status: 'COMING_SOON',
    modulesCount: 8,
    lessonsCount: 24
  }
];
