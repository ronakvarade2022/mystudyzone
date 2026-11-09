import { ScholarshipQuestion } from './scholarshipData';

export const ALL_STD4_QUESTIONS: ScholarshipQuestion[] = [
  {
    id: 'std4_s1_q1',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the correct synonym for \'Sun / सूर्य\':',
      Marathi: 'खालील शब्दाचा योग्य समानार्थी शब्द ओळखा: \'सूर्य\':',
      Hindi: '\'सूर्य\' का सही समानार्थी शब्द पहचानिए:',
      Urdu: 'Identify the correct synonym for \\\'Sun / सूर्य\\\':',
      Gujarati: '\\\'सूर्य\\\' का सही समानार्थी शब्द पहचानिए:',
      Telugu: 'Identify the correct synonym for \\\'Sun / सूर्य\\\':',
      Kannada: 'Identify the correct synonym for \\\'Sun / सूर्य\\\':'
    },
    options: {
      English: ['Bhaskar (भास्कर)', 'Chandra (चंद्र)', 'Nadi (नदी)', 'Pavan (पवन)'],
      Marathi: ['भास्कर', 'चंद्र', 'नदी', 'पवन'],
      Hindi: ['भास्कर', 'चंद्रमा', 'नदी', 'पवन'],
      Urdu: ['Bhaskar (भास्कर)', 'Chandra (चंद्र)', 'Nadi (नदी)', 'Pavan (पवन)'],
      Gujarati: ['भास्कर', 'चंद्रमा', 'नदी', 'पवन'],
      Telugu: ['Bhaskar (भास्कर)', 'Chandra (चंद्र)', 'Nadi (नदी)', 'Pavan (पवन)'],
      Kannada: ['Bhaskar (भास्कर)', 'Chandra (चंद्र)', 'Nadi (नदी)', 'Pavan (पवन)']
    },
    correctIndex: 0,
    explanation: {
      English: '\'Bhaskar\' is an authentic synonym for Sun.',
      Marathi: '\'सूर्य\' या शब्दाचा समानार्थी शब्द \'भास्कर\' आहे.',
      Hindi: '\'सूर्य\' का समानार्थी शब्द \'भास्कर\' होता है।',
      Urdu: '\\\'Bhaskar\\\' is an authentic synonym for Sun.',
      Gujarati: '\\\'सूर्य\\\' का समानार्थी शब्द \\\'भास्कर\\\' होता है।',
      Telugu: '\\\'Bhaskar\\\' is an authentic synonym for Sun.',
      Kannada: '\\\'Bhaskar\\\' is an authentic synonym for Sun.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q2',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'Identify the opposite word for \'Amrut / अमृत (Nectar)\':',
      Marathi: '\'अमृत\' या शब्दाचा योग्य विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'अमृत\' का सही विलोम शब्द कौन सा है?',
      Urdu: 'Identify the opposite word for \\\'Amrut / अमृत (Nectar)\\\':',
      Gujarati: '\\\'अमृत\\\' का सही विलोम शब्द कौन सा है?',
      Telugu: 'Identify the opposite word for \\\'Amrut / अमृत (Nectar)\\\':',
      Kannada: 'Identify the opposite word for \\\'Amrut / अमृत (Nectar)\\\':'
    },
    options: {
      English: ['Jal (Water)', 'Visha (विष / Poison)', 'Dugdha (Milk)', 'Madhur (Sweet)'],
      Marathi: ['जल', 'विष', 'दूध', 'मधुर'],
      Hindi: ['जल', 'विष', 'दूध', 'मधुर'],
      Urdu: ['Jal (Water)', 'Visha (विष / Poison)', 'Dugdha (Milk)', 'Madhur (Sweet)'],
      Gujarati: ['जल', 'विष', 'दूध', 'मधुर'],
      Telugu: ['Jal (Water)', 'Visha (विष / Poison)', 'Dugdha (Milk)', 'Madhur (Sweet)'],
      Kannada: ['Jal (Water)', 'Visha (विष / Poison)', 'Dugdha (Milk)', 'Madhur (Sweet)']
    },
    correctIndex: 1,
    explanation: {
      English: 'The opposite of Amrut is Visha (Poison).',
      Marathi: '\'अमृत\' चा विरुद्धार्थी शब्द \'विष\' आहे.',
      Hindi: '\'अमृत\' का विलोम शब्द \'विष\' होता है।',
      Urdu: 'The opposite of Amrut is Visha (Poison).',
      Gujarati: '\\\'अमृत\\\' का विलोम शब्द \\\'विष\\\' होता है।',
      Telugu: 'The opposite of Amrut is Visha (Poison).',
      Kannada: 'The opposite of Amrut is Visha (Poison).'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q3',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'easy',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of Peacock (मोर)?',
      Marathi: '\'मोर\' या शब्दाचे योग्य स्त्रीलिंगी रूप कोणते?',
      Hindi: '\'मोर\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine gender of Peacock (मोर)?',
      Gujarati: '\\\'मोर\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine gender of Peacock (मोर)?',
      Kannada: 'What is the feminine gender of Peacock (मोर)?'
    },
    options: {
      English: ['Hansi', 'Landor (लांडोर / Peahen)', 'Maina', 'Chimani'],
      Marathi: ['हंसी', 'लांडोर', 'मैना', 'चिमणी'],
      Hindi: ['हंसी', 'मोरनी (लांडोर)', 'मैना', 'चिड़िया'],
      Urdu: ['Hansi', 'Landor (लांडोर / Peahen)', 'Maina', 'Chimani'],
      Gujarati: ['हंसी', 'मोरनी (लांडोर)', 'मैना', 'चिड़िया'],
      Telugu: ['Hansi', 'Landor (लांडोर / Peahen)', 'Maina', 'Chimani'],
      Kannada: ['Hansi', 'Landor (लांडोर / Peahen)', 'Maina', 'Chimani']
    },
    correctIndex: 1,
    explanation: {
      English: 'Feminine of Peacock is Landor (लांडोर).',
      Marathi: '\'मोर\' चे स्त्रीलिंगी रूप \'लांडोर\' आहे.',
      Hindi: '\'मोर\' का स्त्रीलिंग रूप \'मोरनी\' होता है।',
      Urdu: 'Feminine of Peacock is Landor (लांडोर).',
      Gujarati: '\\\'मोर\\\' का स्त्रीलिंग रूप \\\'मोरनी\\\' होता है।',
      Telugu: 'Feminine of Peacock is Landor (लांडोर).',
      Kannada: 'Feminine of Peacock is Landor (लांडोर).'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q4',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'plural',
    questionText: {
      English: 'What is the correct plural form of \'Nadi / नदी (River)\'?',
      Marathi: '\'नदी\' या शब्दाचे योग्य अनेकवचन रूप कोणते?',
      Hindi: '\'नदी\' का सही बहुवचन रूप क्या है?',
      Urdu: 'What is the correct plural form of \\\'Nadi / नदी (River)\\\'?',
      Gujarati: '\\\'नदी\\\' का सही बहुवचन रूप क्या है?',
      Telugu: 'What is the correct plural form of \\\'Nadi / नदी (River)\\\'?',
      Kannada: 'What is the correct plural form of \\\'Nadi / नदी (River)\\\'?'
    },
    options: {
      English: ['Nadiya (नद्या / Rivers)', 'Nade', 'Nadio', 'Nadi'],
      Marathi: ['नद्या', 'नदे', 'नदी', 'नद्यांना'],
      Hindi: ['नदियाँ', 'नदे', 'नदी', 'नदियों'],
      Urdu: ['Nadiya (नद्या / Rivers)', 'Nade', 'Nadio', 'Nadi'],
      Gujarati: ['नदियाँ', 'नदे', 'नदी', 'नदियों'],
      Telugu: ['Nadiya (नद्या / Rivers)', 'Nade', 'Nadio', 'Nadi'],
      Kannada: ['Nadiya (नद्या / Rivers)', 'Nade', 'Nadio', 'Nadi']
    },
    correctIndex: 0,
    explanation: {
      English: 'The plural of \'Nadi\' is \'Nadiya\' (नद्या).',
      Marathi: '\'नदी\' चे अनेकवचन \'नद्या\' होते.',
      Hindi: '\'नदी\' का बहुवचन \'नदियाँ\' होता है।',
      Urdu: 'The plural of \\\'Nadi\\\' is \\\'Nadiya\\\' (नद्या).',
      Gujarati: '\\\'नदी\\\' का बहुवचन \\\'नदियाँ\\\' होता है।',
      Telugu: 'The plural of \\\'Nadi\\\' is \\\'Nadiya\\\' (नद्या).',
      Kannada: 'The plural of \\\'Nadi\\\' is \\\'Nadiya\\\' (नद्या).'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q5',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'What is the meaning of: \'काखेत कळसा गावाला वळसा\'?',
      Marathi: '\'काखेत कळसा गावाला वळसा\' या म्हणीचा योग्य अर्थ कोणता?',
      Hindi: '\'काखेत कळसा गावाला वळसा\' कहावत का सही अर्थ क्या है?',
      Urdu: 'What is the meaning of: \\\'काखेत कळसा गावाला वळसा\\\'?',
      Gujarati: '\\\'काखेत कळसा गावाला वळसा\\\' कहावत का सही अर्थ क्या है?',
      Telugu: 'What is the meaning of: \\\'काखेत कळसा गावाला वळसा\\\'?',
      Kannada: 'What is the meaning of: \\\'काखेत कळसा गावाला वळसा\\\'?'
    },
    options: {
      English: ['Searching far away when the thing is right near you', 'Carrying a pot to village fair', 'Travelling around the globe', 'Forgetting water in summer'],
      Marathi: ['जवळच असणारी वस्तू सर्वत्र शोधत फिरणे', 'कळस घेऊन गावात मिरवणे', 'गावाला प्रदक्षिणा घालणे', 'उन्हाळ्यात पाणी शोधणे'],
      Hindi: ['पास की वस्तु को बाहर व्यर्थ ढूंढना', 'घड़ा लेकर गांव में घूमना', 'गांव का चक्कर लगाना', 'पानी तलाश करना'],
      Urdu: ['Searching far away when the thing is right near you', 'Carrying a pot to village fair', 'Travelling around the globe', 'Forgetting water in summer'],
      Gujarati: ['पास की वस्तु को बाहर व्यर्थ ढूंढना', 'घड़ा लेकर गांव में घूमना', 'गांव का चक्कर लगाना', 'पानी तलाश करना'],
      Telugu: ['Searching far away when the thing is right near you', 'Carrying a pot to village fair', 'Travelling around the globe', 'Forgetting water in summer'],
      Kannada: ['Searching far away when the thing is right near you', 'Carrying a pot to village fair', 'Travelling around the globe', 'Forgetting water in summer']
    },
    correctIndex: 0,
    explanation: {
      English: 'Means searching all around for something in your possession.',
      Marathi: '\'काखेत कळसा गावाला वळसा\' म्हणजे वस्तू जवळ असून सर्वत्र शोधत राहणे.',
      Hindi: 'पास की वस्तु को दूर-दूर ढूंढना।',
      Urdu: 'Means searching all around for something in your possession.',
      Gujarati: 'पास की वस्तु को दूर-दूर ढूंढना।',
      Telugu: 'Means searching all around for something in your possession.',
      Kannada: 'Means searching all around for something in your possession.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q1',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the synonym for \'Water / पाणी\':',
      Marathi: '\'पाणी\' या शब्दाचा समानार्थी शब्द ओळखा:',
      Hindi: '\'पानी\' का सही पर्यायवाची शब्द पहचानिए:',
      Urdu: 'Identify the synonym for \\\'Water / पाणी\\\':',
      Gujarati: '\\\'पानी\\\' का सही पर्यायवाची शब्द पहचानिए:',
      Telugu: 'Identify the synonym for \\\'Water / पाणी\\\':',
      Kannada: 'Identify the synonym for \\\'Water / पाणी\\\':'
    },
    options: {
      English: ['Agni (Fire)', 'Vayu (Air)', 'Jal (जल / Water)', 'Dhara (Earth)'],
      Marathi: ['अग्नी', 'वायू', 'जल', 'धरा'],
      Hindi: ['अग्नि', 'वायु', 'जल', 'धरा'],
      Urdu: ['Agni (Fire)', 'Vayu (Air)', 'Jal (जल / Water)', 'Dhara (Earth)'],
      Gujarati: ['अग्नि', 'वायु', 'जल', 'धरा'],
      Telugu: ['Agni (Fire)', 'Vayu (Air)', 'Jal (जल / Water)', 'Dhara (Earth)'],
      Kannada: ['Agni (Fire)', 'Vayu (Air)', 'Jal (जल / Water)', 'Dhara (Earth)']
    },
    correctIndex: 2,
    explanation: {
      English: '\'Jal\' is a direct synonym for water.',
      Marathi: '\'पाणी\' चा समानार्थी शब्द \'जल\' आहे.',
      Hindi: '\'पानी\' का समानार्थी शब्द \'जल\' होता है।',
      Urdu: '\\\'Jal\\\' is a direct synonym for water.',
      Gujarati: '\\\'पानी\\\' का समानार्थी शब्द \\\'जल\\\' होता है।',
      Telugu: '\\\'Jal\\\' is a direct synonym for water.',
      Kannada: '\\\'Jal\\\' is a direct synonym for water.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q2',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite word for \'Aadar / आदर (Respect)\':',
      Marathi: '\'आदर\' या शब्दाचा योग्य विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'आदर\' का विलोम शब्द पहचानिए:',
      Urdu: 'What is the opposite word for \\\'Aadar / आदर (Respect)\\\':',
      Gujarati: '\\\'आदर\\\' का विलोम शब्द पहचानिए:',
      Telugu: 'What is the opposite word for \\\'Aadar / आदर (Respect)\\\':',
      Kannada: 'What is the opposite word for \\\'Aadar / आदर (Respect)\\\':'
    },
    options: {
      English: ['Anaadar (अनादर / Disrespect)', 'Satkar', 'Prem', 'Namrata'],
      Marathi: ['अनादर', 'सत्कार', 'प्रेम', 'नम्रता'],
      Hindi: ['अनादर', 'सत्कार', 'प्रेम', 'नम्रता'],
      Urdu: ['Anaadar (अनादर / Disrespect)', 'Satkar', 'Prem', 'Namrata'],
      Gujarati: ['अनादर', 'सत्कार', 'प्रेम', 'नम्रता'],
      Telugu: ['Anaadar (अनादर / Disrespect)', 'Satkar', 'Prem', 'Namrata'],
      Kannada: ['Anaadar (अनादर / Disrespect)', 'Satkar', 'Prem', 'Namrata']
    },
    correctIndex: 0,
    explanation: {
      English: 'The opposite of Aadar is Anaadar.',
      Marathi: '\'आदर\' चा विरुद्धार्थी शब्द \'अनादर\' आहे.',
      Hindi: '\'आदर\' का विलोम शब्द \'अनादर\' होता है।',
      Urdu: 'The opposite of Aadar is Anaadar.',
      Gujarati: '\\\'आदर\\\' का विलोम शब्द \\\'अनादर\\\' होता है।',
      Telugu: 'The opposite of Aadar is Anaadar.',
      Kannada: 'The opposite of Aadar is Anaadar.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q3',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'easy',
    type: 'gender',
    questionText: {
      English: 'Identify the feminine gender of Ox / Bull (बैल):',
      Marathi: '\'बैल\' या शब्दाचे स्त्रीलिंगी रूप ओळखा:',
      Hindi: '\'बैल\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'Identify the feminine gender of Ox / Bull (बैल):',
      Gujarati: '\\\'बैल\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'Identify the feminine gender of Ox / Bull (बैल):',
      Kannada: 'Identify the feminine gender of Ox / Bull (बैल):'
    },
    options: {
      English: ['Mhais', 'Sheli', 'Gaay (गाय / Cow)', 'Ghodi'],
      Marathi: ['म्हैस', 'शेळी', 'गाय', 'घोडी'],
      Hindi: ['भैंस', 'बकरी', 'गाय', 'घोड़ी'],
      Urdu: ['Mhais', 'Sheli', 'Gaay (गाय / Cow)', 'Ghodi'],
      Gujarati: ['भैंस', 'बकरी', 'गाय', 'घोड़ी'],
      Telugu: ['Mhais', 'Sheli', 'Gaay (गाय / Cow)', 'Ghodi'],
      Kannada: ['Mhais', 'Sheli', 'Gaay (गाय / Cow)', 'Ghodi']
    },
    correctIndex: 2,
    explanation: {
      English: 'Feminine of Bull is Cow (गाय).',
      Marathi: '\'बैल\' चे स्त्रीलिंगी रूप \'गाय\' आहे.',
      Hindi: '\'बैल\' का स्त्रीलिंग रूप \'गाय\' होता है।',
      Urdu: 'Feminine of Bull is Cow (गाय).',
      Gujarati: '\\\'बैल\\\' का स्त्रीलिंग रूप \\\'गाय\\\' होता है।',
      Telugu: 'Feminine of Bull is Cow (गाय).',
      Kannada: 'Feminine of Bull is Cow (गाय).'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q4',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Pustak / पुस्तक (Book)\'?',
      Marathi: '\'पुस्तक\' या शब्दाचे अनेकवचन रूप कोणते?',
      Hindi: '\'पुस्तक\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Pustak / पुस्तक (Book)\\\'?',
      Gujarati: '\\\'पुस्तक\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Pustak / पुस्तक (Book)\\\'?',
      Kannada: 'What is the plural of \\\'Pustak / पुस्तक (Book)\\\'?'
    },
    options: {
      English: ['Pustaka', 'Pustake (पुस्तके / Books)', 'Pustako', 'Pustaki'],
      Marathi: ['पुस्तका', 'पुस्तके', 'पुस्तको', 'पुस्तकी'],
      Hindi: ['पुस्तका', 'पुस्तकें', 'पुस्तकों', 'पुस्तकी'],
      Urdu: ['Pustaka', 'Pustake (पुस्तके / Books)', 'Pustako', 'Pustaki'],
      Gujarati: ['पुस्तका', 'पुस्तकें', 'पुस्तकों', 'पुस्तकी'],
      Telugu: ['Pustaka', 'Pustake (पुस्तके / Books)', 'Pustako', 'Pustaki'],
      Kannada: ['Pustaka', 'Pustake (पुस्तके / Books)', 'Pustako', 'Pustaki']
    },
    correctIndex: 1,
    explanation: {
      English: 'Plural of Pustak is Pustake (पुस्तके).',
      Marathi: '\'पुस्तक\' चे अनेकवचन \'पुस्तके\' आहे.',
      Hindi: '\'पुस्तक\' का बहुवचन \'पुस्तकें\' होता है।',
      Urdu: 'Plural of Pustak is Pustake (पुस्तके).',
      Gujarati: '\\\'पुस्तक\\\' का बहुवचन \\\'पुस्तकें\\\' होता है।',
      Telugu: 'Plural of Pustak is Pustake (पुस्तके).',
      Kannada: 'Plural of Pustak is Pustake (पुस्तके).'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q5',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'What does the proverb \'अति तेथे माती\' teach?',
      Marathi: '\'अति तेथे माती\' या म्हणीतून काय शिकवण मिळते?',
      Hindi: '\'अति तेथे माती\' कहावत की क्या सीख है?',
      Urdu: 'What does the proverb \\\'अति तेथे माती\\\' teach?',
      Gujarati: '\\\'अति तेथे माती\\\' कहावत की क्या सीख है?',
      Telugu: 'What does the proverb \\\'अति तेथे माती\\\' teach?',
      Kannada: 'What does the proverb \\\'अति तेथे माती\\\' teach?'
    },
    options: {
      English: ['Clay is used in farming', 'Playing in mud is good', 'Soil is precious', 'Excess of anything leads to harm'],
      Marathi: ['शेतीत माती लागते', 'मातीत खेळणे चांगले', 'माती मौल्यवान आहे', 'कोणत्याही गोष्टीचा अतिरेक वाईट ठरतो'],
      Hindi: ['खेती में मिट्टी उपयोगी है', 'मिट्टी में खेलना अच्छा है', 'मिट्टी अनमोल है', 'किसी भी बात का अतिरेक नुकसानदेह होता है'],
      Urdu: ['Clay is used in farming', 'Playing in mud is good', 'Soil is precious', 'Excess of anything leads to harm'],
      Gujarati: ['खेती में मिट्टी उपयोगी है', 'मिट्टी में खेलना अच्छा है', 'मिट्टी अनमोल है', 'किसी भी बात का अतिरेक नुकसानदेह होता है'],
      Telugu: ['Clay is used in farming', 'Playing in mud is good', 'Soil is precious', 'Excess of anything leads to harm'],
      Kannada: ['Clay is used in farming', 'Playing in mud is good', 'Soil is precious', 'Excess of anything leads to harm']
    },
    correctIndex: 3,
    explanation: {
      English: 'Excess of anything is harmful.',
      Marathi: '\'अति तेथे माती\' म्हणजे कोणत्याही गोष्टीचा अतिरेक नुकसानकारक ठरतो.',
      Hindi: 'अति करने से काम बिगड़ता है।',
      Urdu: 'Excess of anything is harmful.',
      Gujarati: 'अति करने से काम बिगड़ता है।',
      Telugu: 'Excess of anything is harmful.',
      Kannada: 'Excess of anything is harmful.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q1',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the synonym for \'Tree / झाड\':',
      Marathi: '\'झाड\' या शब्दाचा समानार्थी शब्द ओळखा:',
      Hindi: '\'पेड़\' का पर्यायवाची शब्द क्या है?',
      Urdu: 'Identify the synonym for \\\'Tree / झाड\\\':',
      Gujarati: '\\\'पेड़\\\' का पर्यायवाची शब्द क्या है?',
      Telugu: 'Identify the synonym for \\\'Tree / झाड\\\':',
      Kannada: 'Identify the synonym for \\\'Tree / झाड\\\':'
    },
    options: {
      English: ['Kusum', 'Vruksha (वृक्ष / Tree)', 'Phool', 'Patra'],
      Marathi: ['कुसुम', 'वृक्ष', 'फूल', 'पत्र'],
      Hindi: ['कुसुम', 'वृक्ष', 'फूल', 'पत्र'],
      Urdu: ['Kusum', 'Vruksha (वृक्ष / Tree)', 'Phool', 'Patra'],
      Gujarati: ['कुसुम', 'वृक्ष', 'फूल', 'पत्र'],
      Telugu: ['Kusum', 'Vruksha (वृक्ष / Tree)', 'Phool', 'Patra'],
      Kannada: ['Kusum', 'Vruksha (वृक्ष / Tree)', 'Phool', 'Patra']
    },
    correctIndex: 1,
    explanation: {
      English: '\'Vruksha\' is a synonym for tree.',
      Marathi: '\'झाड\' चा समानार्थी शब्द \'वृक्ष\' आहे.',
      Hindi: '\'पेड़\' का पर्यायवाची \'वृक्ष\' होता है।',
      Urdu: '\\\'Vruksha\\\' is a synonym for tree.',
      Gujarati: '\\\'पेड़\\\' का पर्यायवाची \\\'वृक्ष\\\' होता है।',
      Telugu: '\\\'Vruksha\\\' is a synonym for tree.',
      Kannada: '\\\'Vruksha\\\' is a synonym for tree.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q2',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite word for \'Aasha / आशा (Hope)\':',
      Marathi: '\'आशा\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'आशा\' का विलोम शब्द कौन सा है?',
      Urdu: 'What is the opposite word for \\\'Aasha / आशा (Hope)\\\':',
      Gujarati: '\\\'आशा\\\' का विलोम शब्द कौन सा है?',
      Telugu: 'What is the opposite word for \\\'Aasha / आशा (Hope)\\\':',
      Kannada: 'What is the opposite word for \\\'Aasha / आशा (Hope)\\\':'
    },
    options: {
      English: ['Utsah', 'Vishwas', 'Nirasha (निराशा / Despair)', 'Khushi'],
      Marathi: ['उत्साह', 'विश्वास', 'निराशा', 'खुशी'],
      Hindi: ['उत्साह', 'विश्वास', 'निराशा', 'खुशी'],
      Urdu: ['Utsah', 'Vishwas', 'Nirasha (निराशा / Despair)', 'Khushi'],
      Gujarati: ['उत्साह', 'विश्वास', 'निराशा', 'खुशी'],
      Telugu: ['Utsah', 'Vishwas', 'Nirasha (निराशा / Despair)', 'Khushi'],
      Kannada: ['Utsah', 'Vishwas', 'Nirasha (निराशा / Despair)', 'Khushi']
    },
    correctIndex: 2,
    explanation: {
      English: 'Opposite of Aasha is Nirasha.',
      Marathi: '\'आशा\' चा विरुद्धार्थी शब्द \'निराशा\' आहे.',
      Hindi: '\'आशा\' का विलोम \'निराशा\' होता है।',
      Urdu: 'Opposite of Aasha is Nirasha.',
      Gujarati: '\\\'आशा\\\' का विलोम \\\'निराशा\\\' होता है।',
      Telugu: 'Opposite of Aasha is Nirasha.',
      Kannada: 'Opposite of Aasha is Nirasha.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q3',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'easy',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of Tiger (वाघ)?',
      Marathi: '\'वाघ\' या शब्दाचे योग्य स्त्रीलिंगी रूप कोणते?',
      Hindi: '\'बाघ\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine gender of Tiger (वाघ)?',
      Gujarati: '\\\'बाघ\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine gender of Tiger (वाघ)?',
      Kannada: 'What is the feminine gender of Tiger (वाघ)?'
    },
    options: {
      English: ['Vaghin (वाघीण / Tigress)', 'Simhin', 'Landor', 'Bhati'],
      Marathi: ['वाघीण', 'सिंहिण', 'लांडोर', 'भाटी'],
      Hindi: ['बाघिन', 'शेरनी', 'मोरनी', 'बिल्ली'],
      Urdu: ['Vaghin (वाघीण / Tigress)', 'Simhin', 'Landor', 'Bhati'],
      Gujarati: ['बाघिन', 'शेरनी', 'मोरनी', 'बिल्ली'],
      Telugu: ['Vaghin (वाघीण / Tigress)', 'Simhin', 'Landor', 'Bhati'],
      Kannada: ['Vaghin (वाघीण / Tigress)', 'Simhin', 'Landor', 'Bhati']
    },
    correctIndex: 0,
    explanation: {
      English: 'Feminine of Tiger is Tigress (वाघीण).',
      Marathi: '\'वाघ\' चे स्त्रीलिंगी रूप \'वाघीण\' आहे.',
      Hindi: '\'बाघ\' का स्त्रीलिंग \'बाघिन\' होता है।',
      Urdu: 'Feminine of Tiger is Tigress (वाघीण).',
      Gujarati: '\\\'बाघ\\\' का स्त्रीलिंग \\\'बाघिन\\\' होता है।',
      Telugu: 'Feminine of Tiger is Tigress (वाघीण).',
      Kannada: 'Feminine of Tiger is Tigress (वाघीण).'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q4',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Phool / फूल (Flower)\'?',
      Marathi: '\'फूल\' या शब्दाचे अनेकवचन काय होते?',
      Hindi: '\'फूल\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Phool / फूल (Flower)\\\'?',
      Gujarati: '\\\'फूल\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Phool / फूल (Flower)\\\'?',
      Kannada: 'What is the plural of \\\'Phool / फूल (Flower)\\\'?'
    },
    options: {
      English: ['Phooli', 'Phoolan', 'Phoola', 'Phule (फुले / Flowers)'],
      Marathi: ['फुली', 'फूलन', 'फूला', 'फुले'],
      Hindi: ['फुली', 'फूलों', 'फूला', 'फूल / फूलें'],
      Urdu: ['Phooli', 'Phoolan', 'Phoola', 'Phule (फुले / Flowers)'],
      Gujarati: ['फुली', 'फूलों', 'फूला', 'फूल / फूलें'],
      Telugu: ['Phooli', 'Phoolan', 'Phoola', 'Phule (फुले / Flowers)'],
      Kannada: ['Phooli', 'Phoolan', 'Phoola', 'Phule (फुले / Flowers)']
    },
    correctIndex: 3,
    explanation: {
      English: 'Plural of Phool is Phule (फुले).',
      Marathi: '\'फूल\' चे अनेकवचन \'फुले\' आहे.',
      Hindi: '\'फूल\' का बहुवचन \'फूल / फूलों\' होता है।',
      Urdu: 'Plural of Phool is Phule (फुले).',
      Gujarati: '\\\'फूल\\\' का बहुवचन \\\'फूल / फूलों\\\' होता है।',
      Telugu: 'Plural of Phool is Phule (फुले).',
      Kannada: 'Plural of Phool is Phule (फुले).'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q5',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'What is the meaning of: \'अडला हरी गाढवाचे पाय धरी\'?',
      Marathi: '\'अडला हरी गाढवाचे पाय धरी\' या म्हणीचा अर्थ काय?',
      Hindi: '\'अडला हरी गाढवाचे पाय धरी\' कहावत का अर्थ क्या है?',
      Urdu: 'What is the meaning of: \\\'अडला हरी गाढवाचे पाय धरी\\\'?',
      Gujarati: '\\\'अडला हरी गाढवाचे पाय धरी\\\' कहावत का अर्थ क्या है?',
      Telugu: 'What is the meaning of: \\\'अडला हरी गाढवाचे पाय धरी\\\'?',
      Kannada: 'What is the meaning of: \\\'अडला हरी गाढवाचे पाय धरी\\\'?'
    },
    options: {
      English: ['Worshipping animals', 'In trouble one must swallow pride and seek help', 'Walking behind animal', 'Catching legs while playing'],
      Marathi: ['सणात प्राण्यांची पूजा करणे', 'अडचणीच्या वेळी मूर्ख किंवा क्षुद्र माणसाचीही खुशामत करावी लागते', 'गाढवाच्या मागे चालणे', 'खेळताना पाय पकडणे'],
      Hindi: ['जानवरों की पूजा करना', 'मुसीबत के समय मूर्ख व्यक्ति की भी मिन्नत करनी पड़ती है', 'गधे के पीछे चलना', 'पैर पकड़ना'],
      Urdu: ['Worshipping animals', 'In trouble one must swallow pride and seek help', 'Walking behind animal', 'Catching legs while playing'],
      Gujarati: ['जानवरों की पूजा करना', 'मुसीबत के समय मूर्ख व्यक्ति की भी मिन्नत करनी पड़ती है', 'गधे के पीछे चलना', 'पैर पकड़ना'],
      Telugu: ['Worshipping animals', 'In trouble one must swallow pride and seek help', 'Walking behind animal', 'Catching legs while playing'],
      Kannada: ['Worshipping animals', 'In trouble one must swallow pride and seek help', 'Walking behind animal', 'Catching legs while playing']
    },
    correctIndex: 1,
    explanation: {
      English: 'In trouble one has to seek help from anyone.',
      Marathi: '\'अडला हरी गाढवाचे पाय धरी\' म्हणजे अडचणीत नमते घेणे.',
      Hindi: 'मुसीबत में मूर्ख की भी खुशामत करनी पड़ती है।',
      Urdu: 'In trouble one has to seek help from anyone.',
      Gujarati: 'मुसीबत में मूर्ख की भी खुशामत करनी पड़ती है।',
      Telugu: 'In trouble one has to seek help from anyone.',
      Kannada: 'In trouble one has to seek help from anyone.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q1',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Find the synonym for \'Wind / वारा\':',
      Marathi: '\'वारा\' या शब्दाचा योग्य समानार्थी शब्द ओळखा:',
      Hindi: '\'हवा / वायु\' का समानार्थी शब्द पहचानिए:',
      Urdu: 'Find the synonym for \\\'Wind / वारा\\\':',
      Gujarati: '\\\'हवा / वायु\\\' का समानार्थी शब्द पहचानिए:',
      Telugu: 'Find the synonym for \\\'Wind / वारा\\\':',
      Kannada: 'Find the synonym for \\\'Wind / वारा\\\':'
    },
    options: {
      English: ['Agni', 'Jal', 'Pashan', 'Pavan (पवन / Wind)'],
      Marathi: ['अग्नी', 'जल', 'पाषाण', 'पवन'],
      Hindi: ['अग्नि', 'जल', 'पाषाण', 'पवन'],
      Urdu: ['Agni', 'Jal', 'Pashan', 'Pavan (पवन / Wind)'],
      Gujarati: ['अग्नि', 'जल', 'पाषाण', 'पवन'],
      Telugu: ['Agni', 'Jal', 'Pashan', 'Pavan (पवन / Wind)'],
      Kannada: ['Agni', 'Jal', 'Pashan', 'Pavan (पवन / Wind)']
    },
    correctIndex: 3,
    explanation: {
      English: '\'Pavan\' is a synonym for wind.',
      Marathi: '\'वारा\' चा समानार्थी शब्द \'पवन\' आहे.',
      Hindi: '\'हवा\' का पर्यायवाची \'पवन\' होता है।',
      Urdu: '\\\'Pavan\\\' is a synonym for wind.',
      Gujarati: '\\\'हवा\\\' का पर्यायवाची \\\'पवन\\\' होता है।',
      Telugu: '\\\'Pavan\\\' is a synonym for wind.',
      Kannada: '\\\'Pavan\\\' is a synonym for wind.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q2',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the antonym of \'Kathin / कठीण (Difficult)\'?',
      Marathi: '\'कठीण\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'कठिन\' का विलोम शब्द कौन सा है?',
      Urdu: 'What is the antonym of \\\'Kathin / कठीण (Difficult)\\\'?',
      Gujarati: '\\\'कठिन\\\' का विलोम शब्द कौन सा है?',
      Telugu: 'What is the antonym of \\\'Kathin / कठीण (Difficult)\\\'?',
      Kannada: 'What is the antonym of \\\'Kathin / कठीण (Difficult)\\\'?'
    },
    options: {
      English: ['Sope (सोपे / Easy)', 'Jad', 'Motha', 'Unch'],
      Marathi: ['सोपे', 'जड', 'मोठा', 'उंच'],
      Hindi: ['सरल / आसान (सोपे)', 'भारी', 'बड़ा', 'ऊंचा'],
      Urdu: ['Sope (सोपे / Easy)', 'Jad', 'Motha', 'Unch'],
      Gujarati: ['सरल / आसान (सोपे)', 'भारी', 'बड़ा', 'ऊंचा'],
      Telugu: ['Sope (सोपे / Easy)', 'Jad', 'Motha', 'Unch'],
      Kannada: ['Sope (सोपे / Easy)', 'Jad', 'Motha', 'Unch']
    },
    correctIndex: 0,
    explanation: {
      English: 'The opposite of Kathin is Sope (Easy).',
      Marathi: '\'कठीण\' चा विरुद्धार्थी शब्द \'सोपे\' आहे.',
      Hindi: '\'कठिन\' का विलोम शब्द \'सरल\' होता है।',
      Urdu: 'The opposite of Kathin is Sope (Easy).',
      Gujarati: '\\\'कठिन\\\' का विलोम शब्द \\\'सरल\\\' होता है।',
      Telugu: 'The opposite of Kathin is Sope (Easy).',
      Kannada: 'The opposite of Kathin is Sope (Easy).'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q3',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'easy',
    type: 'gender',
    questionText: {
      English: 'What is the feminine form of Horse (घोडा)?',
      Marathi: '\'घोडा\' या शब्दाचे स्त्रीलिंगी रूप ओळखा:',
      Hindi: '\'घोड़ा\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine form of Horse (घोडा)?',
      Gujarati: '\\\'घोड़ा\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine form of Horse (घोडा)?',
      Kannada: 'What is the feminine form of Horse (घोडा)?'
    },
    options: {
      English: ['Gaay', 'Mhais', 'Ghodi (घोडी / Mare)', 'Sheli'],
      Marathi: ['गाय', 'म्हैस', 'घोडी', 'शेळी'],
      Hindi: ['गाय', 'भैंस', 'घोड़ी', 'बकरी'],
      Urdu: ['Gaay', 'Mhais', 'Ghodi (घोडी / Mare)', 'Sheli'],
      Gujarati: ['गाय', 'भैंस', 'घोड़ी', 'बकरी'],
      Telugu: ['Gaay', 'Mhais', 'Ghodi (घोडी / Mare)', 'Sheli'],
      Kannada: ['Gaay', 'Mhais', 'Ghodi (घोडी / Mare)', 'Sheli']
    },
    correctIndex: 2,
    explanation: {
      English: 'The feminine of Horse is Mare (घोडी).',
      Marathi: '\'घोडा\' चे स्त्रीलिंगी रूप \'घोडी\' आहे.',
      Hindi: '\'घोड़ा\' का स्त्रीलिंग रूप \'घोड़ी\' होता है।',
      Urdu: 'The feminine of Horse is Mare (घोडी).',
      Gujarati: '\\\'घोड़ा\\\' का स्त्रीलिंग रूप \\\'घोड़ी\\\' होता है।',
      Telugu: 'The feminine of Horse is Mare (घोडी).',
      Kannada: 'The feminine of Horse is Mare (घोडी).'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q4',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Vahi / वही (Notebook)\'?',
      Marathi: '\'वही\' या शब्दाचे अनेकवचन कोणते?',
      Hindi: '\'कॉपी / बही\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Vahi / वही (Notebook)\\\'?',
      Gujarati: '\\\'कॉपी / बही\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Vahi / वही (Notebook)\\\'?',
      Kannada: 'What is the plural of \\\'Vahi / वही (Notebook)\\\'?'
    },
    options: {
      English: ['Vaha', 'Vahya (वह्या / Notebooks)', 'Vahyo', 'Vahi'],
      Marathi: ['वहा', 'वह्या', 'वह्यो', 'वही'],
      Hindi: ['वहा', 'कॉपियाँ / बहियाँ', 'बहियों', 'बही'],
      Urdu: ['Vaha', 'Vahya (वह्या / Notebooks)', 'Vahyo', 'Vahi'],
      Gujarati: ['वहा', 'कॉपियाँ / बहियाँ', 'बहियों', 'बही'],
      Telugu: ['Vaha', 'Vahya (वह्या / Notebooks)', 'Vahyo', 'Vahi'],
      Kannada: ['Vaha', 'Vahya (वह्या / Notebooks)', 'Vahyo', 'Vahi']
    },
    correctIndex: 1,
    explanation: {
      English: 'Plural of Vahi is Vahya (वह्या).',
      Marathi: '\'वही\' चे अनेकवचन \'वह्या\' होते.',
      Hindi: '\'वही\' का बहुवचन \'बहियाँ\' होता है।',
      Urdu: 'Plural of Vahi is Vahya (वह्या).',
      Gujarati: '\\\'वही\\\' का बहुवचन \\\'बहियाँ\\\' होता है।',
      Telugu: 'Plural of Vahi is Vahya (वह्या).',
      Kannada: 'Plural of Vahi is Vahya (वह्या).'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q5',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'What is the meaning of: \'थेंबे थेंबे तळे साचे\'?',
      Marathi: '\'थेंबे थेंबे तळे साचे\' या म्हणीचा योग्य अर्थ कोणता?',
      Hindi: '\'बूंद-बूंद से घड़ा भरता है\' का अर्थ क्या है?',
      Urdu: 'What is the meaning of: \\\'थेंबे थेंबे तळे साचे\\\'?',
      Gujarati: '\\\'बूंद-बूंद से घड़ा भरता है\\\' का अर्थ क्या है?',
      Telugu: 'What is the meaning of: \\\'थेंबे थेंबे तळे साचे\\\'?',
      Kannada: 'What is the meaning of: \\\'थेंबे थेंबे तळे साचे\\\'?'
    },
    options: {
      English: ['Small savings over time accumulate into large wealth', 'Rainwater fills the lakes', 'Leaking pipes waste water', 'Drinking water drops'],
      Marathi: ['थोडी थोडी बचत केल्यास मोठा संचय होतो', 'पावसाने तळे भरते', 'पाईपमधून पाणी गळणे', 'एक एक थेंब पाणी पिणे'],
      Hindi: ['थोड़ी-थोड़ी बचत करने से बड़ा संचय होता है', 'बारिश से तालाब भरता है', 'नल से पानी टपकना', 'बूंद-बूंद पानी पीना'],
      Urdu: ['Small savings over time accumulate into large wealth', 'Rainwater fills the lakes', 'Leaking pipes waste water', 'Drinking water drops'],
      Gujarati: ['थोड़ी-थोड़ी बचत करने से बड़ा संचय होता है', 'बारिश से तालाब भरता है', 'नल से पानी टपकना', 'बूंद-बूंद पानी पीना'],
      Telugu: ['Small savings over time accumulate into large wealth', 'Rainwater fills the lakes', 'Leaking pipes waste water', 'Drinking water drops'],
      Kannada: ['Small savings over time accumulate into large wealth', 'Rainwater fills the lakes', 'Leaking pipes waste water', 'Drinking water drops']
    },
    correctIndex: 0,
    explanation: {
      English: 'Continuous small savings create wealth.',
      Marathi: '\'थेंबे थेंबे तळे साचे\' म्हणजे थोडी थोडी बचत मोठा संचय घडवते.',
      Hindi: 'लगातार छोटी बचत से बड़ा धन जुड़ता है।',
      Urdu: 'Continuous small savings create wealth.',
      Gujarati: 'लगातार छोटी बचत से बड़ा धन जुड़ता है।',
      Telugu: 'Continuous small savings create wealth.',
      Kannada: 'Continuous small savings create wealth.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q1',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the synonym for \'Sky / आकाश\':',
      Marathi: '\'आकाश\' या शब्दाचा समानार्थी शब्द ओळखा:',
      Hindi: '\'आकाश\' का सही पर्यायवाची शब्द पहचानिए:',
      Urdu: 'Identify the synonym for \\\'Sky / आकाश\\\':',
      Gujarati: '\\\'आकाश\\\' का सही पर्यायवाची शब्द पहचानिए:',
      Telugu: 'Identify the synonym for \\\'Sky / आकाश\\\':',
      Kannada: 'Identify the synonym for \\\'Sky / आकाश\\\':'
    },
    options: {
      English: ['Gagan (गगन / Sky)', 'Dharani', 'Samudra', 'Pavan'],
      Marathi: ['गगन', 'धरणी', 'समुद्र', 'पवन'],
      Hindi: ['गगन / नभ', 'धरणी', 'समुद्र', 'पवन'],
      Urdu: ['Gagan (गगन / Sky)', 'Dharani', 'Samudra', 'Pavan'],
      Gujarati: ['गगन / नभ', 'धरणी', 'समुद्र', 'पवन'],
      Telugu: ['Gagan (गगन / Sky)', 'Dharani', 'Samudra', 'Pavan'],
      Kannada: ['Gagan (गगन / Sky)', 'Dharani', 'Samudra', 'Pavan']
    },
    correctIndex: 0,
    explanation: {
      English: '\'Gagan\' means Sky.',
      Marathi: '\'आकाश\' चा समानार्थी शब्द \'गगन\' आहे.',
      Hindi: '\'आकाश\' का पर्यायवाची शब्द \'गगन\' होता है।',
      Urdu: '\\\'Gagan\\\' means Sky.',
      Gujarati: '\\\'आकाश\\\' का पर्यायवाची शब्द \\\'गगन\\\' होता है।',
      Telugu: '\\\'Gagan\\\' means Sky.',
      Kannada: '\\\'Gagan\\\' means Sky.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q2',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Faayda / फायदा (Profit)\'?',
      Marathi: '\'फायदा\' या शब्दाचा योग्य विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'फायदा\' का विलोम शब्द कौन सा है?',
      Urdu: 'What is the opposite of \\\'Faayda / फायदा (Profit)\\\'?',
      Gujarati: '\\\'फायदा\\\' का विलोम शब्द कौन सा है?',
      Telugu: 'What is the opposite of \\\'Faayda / फायदा (Profit)\\\'?',
      Kannada: 'What is the opposite of \\\'Faayda / फायदा (Profit)\\\'?'
    },
    options: {
      English: ['Nafa', 'Sampatti', 'Tota (तोटा / Loss)', 'Labha'],
      Marathi: ['नफा', 'संपत्ती', 'तोटा', 'लाभ'],
      Hindi: ['मुनाफा', 'संपत्ति', 'नुकसान / तोटा', 'लाभ'],
      Urdu: ['Nafa', 'Sampatti', 'Tota (तोटा / Loss)', 'Labha'],
      Gujarati: ['मुनाफा', 'संपत्ति', 'नुकसान / तोटा', 'लाभ'],
      Telugu: ['Nafa', 'Sampatti', 'Tota (तोटा / Loss)', 'Labha'],
      Kannada: ['Nafa', 'Sampatti', 'Tota (तोटा / Loss)', 'Labha']
    },
    correctIndex: 2,
    explanation: {
      English: 'Opposite of Faayda is Tota (Loss).',
      Marathi: '\'फायदा\' चा विरुद्धार्थी शब्द \'तोटा\' आहे.',
      Hindi: '\'फायदा\' का विलोम शब्द \'नुकसान\' होता है।',
      Urdu: 'Opposite of Faayda is Tota (Loss).',
      Gujarati: '\\\'फायदा\\\' का विलोम शब्द \\\'नुकसान\\\' होता है।',
      Telugu: 'Opposite of Faayda is Tota (Loss).',
      Kannada: 'Opposite of Faayda is Tota (Loss).'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q3',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of male cat (बोका)?',
      Marathi: '\'बोका\' या शब्दाचे स्त्रीलिंगी रूप ओळखा:',
      Hindi: '\'बोका\' (बिलाव) का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine gender of male cat (बोका)?',
      Gujarati: '\\\'बोका\\\' (बिलाव) का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine gender of male cat (बोका)?',
      Kannada: 'What is the feminine gender of male cat (बोका)?'
    },
    options: {
      English: ['Manjar', 'Bhati (भाटी / Queen cat)', 'Chimani', 'Kolhi'],
      Marathi: ['मांजर', 'भाटी', 'चिमणी', 'कोल्ही'],
      Hindi: ['बिल्ली', 'भाटी (मादा बिल्ली)', 'चिड़िया', 'लोमड़ी'],
      Urdu: ['Manjar', 'Bhati (भाटी / Queen cat)', 'Chimani', 'Kolhi'],
      Gujarati: ['बिल्ली', 'भाटी (मादा बिल्ली)', 'चिड़िया', 'लोमड़ी'],
      Telugu: ['Manjar', 'Bhati (भाटी / Queen cat)', 'Chimani', 'Kolhi'],
      Kannada: ['Manjar', 'Bhati (भाटी / Queen cat)', 'Chimani', 'Kolhi']
    },
    correctIndex: 1,
    explanation: {
      English: 'Feminine of Boka is Bhati (भाटी).',
      Marathi: '\'बोका\' चे स्त्रीलिंगी रूप \'भाटी\' आहे.',
      Hindi: '\'बोका\' का स्त्रीलिंग रूप \'भाटी\' होता है।',
      Urdu: 'Feminine of Boka is Bhati (भाटी).',
      Gujarati: '\\\'बोका\\\' का स्त्रीलिंग रूप \\\'भाटी\\\' होता है।',
      Telugu: 'Feminine of Boka is Bhati (भाटी).',
      Kannada: 'Feminine of Boka is Bhati (भाटी).'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q4',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Rasta / रस्ता (Road)\'?',
      Marathi: '\'रस्ता\' या शब्दाचे अनेकवचन काय होते?',
      Hindi: '\'रास्ता\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Rasta / रस्ता (Road)\\\'?',
      Gujarati: '\\\'रास्ता\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Rasta / रस्ता (Road)\\\'?',
      Kannada: 'What is the plural of \\\'Rasta / रस्ता (Road)\\\'?'
    },
    options: {
      English: ['Raste (रस्ते / Roads)', 'Rasto', 'Rastya', 'Rasti'],
      Marathi: ['रस्ते', 'रस्तो', 'रस्त्या', 'रस्ती'],
      Hindi: ['रास्ते', 'रास्तों', 'रास्त्या', 'रास्ती'],
      Urdu: ['Raste (रस्ते / Roads)', 'Rasto', 'Rastya', 'Rasti'],
      Gujarati: ['रास्ते', 'रास्तों', 'रास्त्या', 'रास्ती'],
      Telugu: ['Raste (रस्ते / Roads)', 'Rasto', 'Rastya', 'Rasti'],
      Kannada: ['Raste (रस्ते / Roads)', 'Rasto', 'Rastya', 'Rasti']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural of Rasta is Raste (रस्ते).',
      Marathi: '\'रस्ता\' चे अनेकवचन \'रस्ते\' होते.',
      Hindi: '\'रास्ता\' का बहुवचन \'रास्ते\' होता है।',
      Urdu: 'Plural of Rasta is Raste (रस्ते).',
      Gujarati: '\\\'रास्ता\\\' का बहुवचन \\\'रास्ते\\\' होता है।',
      Telugu: 'Plural of Rasta is Raste (रस्ते).',
      Kannada: 'Plural of Rasta is Raste (रस्ते).'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q5',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'group_word',
    questionText: {
      English: 'One word for \'A person who believes in God\':',
      Marathi: '\'देवावर विश्वास ठेवणारा\' या शब्दसमूहाबद्दल एक शब्द कोणता?',
      Hindi: '\'ईश्वर पर विश्वास रखने वाला\' के लिए एक शब्द:',
      Urdu: 'One word for \\\'A person who believes in God\\\':',
      Gujarati: '\\\'ईश्वर पर विश्वास रखने वाला\\\' के लिए एक शब्द:',
      Telugu: 'One word for \\\'A person who believes in God\\\':',
      Kannada: 'One word for \\\'A person who believes in God\\\':'
    },
    options: {
      English: ['Nastik (Atheist)', 'Dharmik', 'Aastik (आस्तिक / Theist)', 'Pujari'],
      Marathi: ['नास्तिक', 'धार्मिक', 'आस्तिक', 'पुजारी'],
      Hindi: ['नास्तिक', 'धार्मिक', 'आस्तिक', 'पुजारी'],
      Urdu: ['Nastik (Atheist)', 'Dharmik', 'Aastik (आस्तिक / Theist)', 'Pujari'],
      Gujarati: ['नास्तिक', 'धार्मिक', 'आस्तिक', 'पुजारी'],
      Telugu: ['Nastik (Atheist)', 'Dharmik', 'Aastik (आस्तिक / Theist)', 'Pujari'],
      Kannada: ['Nastik (Atheist)', 'Dharmik', 'Aastik (आस्तिक / Theist)', 'Pujari']
    },
    correctIndex: 2,
    explanation: {
      English: 'One who believes in God is an \'Aastik\'.',
      Marathi: 'देवावर विश्वास ठेवणारा म्हणजे \'आस्तिक\'.',
      Hindi: 'ईश्वर को मानने वाला \'आस्तिक\' कहलाता है।',
      Urdu: 'One who believes in God is an \\\'Aastik\\\'.',
      Gujarati: 'ईश्वर को मानने वाला \\\'आस्तिक\\\' कहलाता है।',
      Telugu: 'One who believes in God is an \\\'Aastik\\\'.',
      Kannada: 'One who believes in God is an \\\'Aastik\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q1',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the synonym for \'Eye / डोळा\':',
      Marathi: '\'डोळा\' या शब्दाचा समानार्थी शब्द ओळखा:',
      Hindi: '\'आंख\' का सही पर्यायवाची शब्द पहचानिए:',
      Urdu: 'Identify the synonym for \\\'Eye / डोळा\\\':',
      Gujarati: '\\\'आंख\\\' का सही पर्यायवाची शब्द पहचानिए:',
      Telugu: 'Identify the synonym for \\\'Eye / डोळा\\\':',
      Kannada: 'Identify the synonym for \\\'Eye / डोळा\\\':'
    },
    options: {
      English: ['Karna', 'Nayan (नयन / Eye)', 'Naak', 'Mukha'],
      Marathi: ['कर्ण', 'नयन', 'नाक', 'मुख'],
      Hindi: ['कर्ण', 'नयन / नेत्र', 'नाक', 'मुख'],
      Urdu: ['Karna', 'Nayan (नयन / Eye)', 'Naak', 'Mukha'],
      Gujarati: ['कर्ण', 'नयन / नेत्र', 'नाक', 'मुख'],
      Telugu: ['Karna', 'Nayan (नयन / Eye)', 'Naak', 'Mukha'],
      Kannada: ['Karna', 'Nayan (नयन / Eye)', 'Naak', 'Mukha']
    },
    correctIndex: 1,
    explanation: {
      English: '\'Nayan\' is a synonym for eye.',
      Marathi: '\'डोळा\' चा समानार्थी शब्द \'नयन\' आहे.',
      Hindi: '\'आंख\' का पर्यायवाची \'नयन\' होता है।',
      Urdu: '\\\'Nayan\\\' is a synonym for eye.',
      Gujarati: '\\\'आंख\\\' का पर्यायवाची \\\'नयन\\\' होता है।',
      Telugu: '\\\'Nayan\\\' is a synonym for eye.',
      Kannada: '\\\'Nayan\\\' is a synonym for eye.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q2',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Shrimant / श्रीमंत (Rich)\'?',
      Marathi: '\'श्रीमंत\' या शब्दाचा योग्य विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'धनी / अमीर\' का विलोम शब्द पहचानिए:',
      Urdu: 'What is the opposite of \\\'Shrimant / श्रीमंत (Rich)\\\'?',
      Gujarati: '\\\'धनी / अमीर\\\' का विलोम शब्द पहचानिए:',
      Telugu: 'What is the opposite of \\\'Shrimant / श्रीमंत (Rich)\\\'?',
      Kannada: 'What is the opposite of \\\'Shrimant / श्रीमंत (Rich)\\\'?'
    },
    options: {
      English: ['Rao', 'Savkari', 'Dhanik', 'Garib (गरीब / Poor)'],
      Marathi: ['राव', 'सावकारी', 'धनिक', 'गरीब'],
      Hindi: ['राव', 'साहूकार', 'धनिक', 'गरीब / निर्धन'],
      Urdu: ['Rao', 'Savkari', 'Dhanik', 'Garib (गरीब / Poor)'],
      Gujarati: ['राव', 'साहूकार', 'धनिक', 'गरीब / निर्धन'],
      Telugu: ['Rao', 'Savkari', 'Dhanik', 'Garib (गरीब / Poor)'],
      Kannada: ['Rao', 'Savkari', 'Dhanik', 'Garib (गरीब / Poor)']
    },
    correctIndex: 3,
    explanation: {
      English: 'Opposite of Shrimant is Garib (Poor).',
      Marathi: '\'श्रीमंत\' चा विरुद्धार्थी शब्द \'गरीब\' आहे.',
      Hindi: '\'अमीर\' का विलोम \'गरीब\' होता है।',
      Urdu: 'Opposite of Shrimant is Garib (Poor).',
      Gujarati: '\\\'अमीर\\\' का विलोम \\\'गरीब\\\' होता है।',
      Telugu: 'Opposite of Shrimant is Garib (Poor).',
      Kannada: 'Opposite of Shrimant is Garib (Poor).'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q3',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of Fox (कोल्हा)?',
      Marathi: '\'कोल्हा\' या शब्दाचे स्त्रीलिंगी रूप कोणते?',
      Hindi: '\'सियार / लोमड़\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine gender of Fox (कोल्हा)?',
      Gujarati: '\\\'सियार / लोमड़\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine gender of Fox (कोल्हा)?',
      Kannada: 'What is the feminine gender of Fox (कोल्हा)?'
    },
    options: {
      English: ['Kolhi (कोल्ही / Vixen)', 'Kutiya', 'Landor', 'Bhati'],
      Marathi: ['कोल्ही', 'कुत्री', 'लांडोर', 'भाटी'],
      Hindi: ['लोमड़ी / कोल्ही', 'कुतिया', 'मोरनी', 'बिल्ली'],
      Urdu: ['Kolhi (कोल्ही / Vixen)', 'Kutiya', 'Landor', 'Bhati'],
      Gujarati: ['लोमड़ी / कोल्ही', 'कुतिया', 'मोरनी', 'बिल्ली'],
      Telugu: ['Kolhi (कोल्ही / Vixen)', 'Kutiya', 'Landor', 'Bhati'],
      Kannada: ['Kolhi (कोल्ही / Vixen)', 'Kutiya', 'Landor', 'Bhati']
    },
    correctIndex: 0,
    explanation: {
      English: 'Feminine of Kolha is Kolhi (कोल्ही).',
      Marathi: '\'कोल्हा\' चे स्त्रीलिंगी रूप \'कोल्ही\' आहे.',
      Hindi: '\'सियार\' का स्त्रीलिंग \'लोमड़ी / कोल्ही\' होता है।',
      Urdu: 'Feminine of Kolha is Kolhi (कोल्ही).',
      Gujarati: '\\\'सियार\\\' का स्त्रीलिंग \\\'लोमड़ी / कोल्ही\\\' होता है।',
      Telugu: 'Feminine of Kolha is Kolhi (कोल्ही).',
      Kannada: 'Feminine of Kolha is Kolhi (कोल्ही).'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q4',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Mool / मूल (Child)\'?',
      Marathi: '\'मूल\' या शब्दाचे योग्य अनेकवचन रूप कोणते?',
      Hindi: '\'बच्चा\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Mool / मूल (Child)\\\'?',
      Gujarati: '\\\'बच्चा\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Mool / मूल (Child)\\\'?',
      Kannada: 'What is the plural of \\\'Mool / मूल (Child)\\\'?'
    },
    options: {
      English: ['Mooli', 'Moola', 'Mule (मुले / Children)', 'Mulee'],
      Marathi: ['मुली', 'मूला', 'मुले', 'मुलींना'],
      Hindi: ['बच्ची', 'मूला', 'बच्चे (मुले)', 'बच्चों'],
      Urdu: ['Mooli', 'Moola', 'Mule (मुले / Children)', 'Mulee'],
      Gujarati: ['बच्ची', 'मूला', 'बच्चे (मुले)', 'बच्चों'],
      Telugu: ['Mooli', 'Moola', 'Mule (मुले / Children)', 'Mulee'],
      Kannada: ['Mooli', 'Moola', 'Mule (मुले / Children)', 'Mulee']
    },
    correctIndex: 2,
    explanation: {
      English: 'Plural of Mool is Mule (मुले).',
      Marathi: '\'मूल\' चे अनेकवचन \'मुले\' होते.',
      Hindi: '\'मूल\' (बच्चा) का बहुवचन \'मुले\' (बच्चे) होता है।',
      Urdu: 'Plural of Mool is Mule (मुले).',
      Gujarati: '\\\'मूल\\\' (बच्चा) का बहुवचन \\\'मुले\\\' (बच्चे) होता है।',
      Telugu: 'Plural of Mool is Mule (मुले).',
      Kannada: 'Plural of Mool is Mule (मुले).'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q5',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'group_word',
    questionText: {
      English: 'Place where free drinking water is arranged for travellers:',
      Marathi: '\'प्रवाशांना मोफत पिण्याचे पाणी मिळण्याचे ठिकाण\':',
      Hindi: '\'मुसाफिरों के लिए मुफ्त पीने के पानी की व्यवस्था\':',
      Urdu: 'Place where free drinking water is arranged for travellers:',
      Gujarati: '\\\'मुसाफिरों के लिए मुफ्त पीने के पानी की व्यवस्था\\\':',
      Telugu: 'Place where free drinking water is arranged for travellers:',
      Kannada: 'Place where free drinking water is arranged for travellers:'
    },
    options: {
      English: ['Vihir', 'Paanpoi (पानपोई / Water kiosk)', 'Talav', 'Nal'],
      Marathi: ['विहीर', 'पानपोई', 'तलाव', 'नळ'],
      Hindi: ['कुआं', 'प्याऊ (पानपोई)', 'तालाब', 'नल'],
      Urdu: ['Vihir', 'Paanpoi (पानपोई / Water kiosk)', 'Talav', 'Nal'],
      Gujarati: ['कुआं', 'प्याऊ (पानपोई)', 'तालाब', 'नल'],
      Telugu: ['Vihir', 'Paanpoi (पानपोई / Water kiosk)', 'Talav', 'Nal'],
      Kannada: ['Vihir', 'Paanpoi (पानपोई / Water kiosk)', 'Talav', 'Nal']
    },
    correctIndex: 1,
    explanation: {
      English: 'Free water stall is called \'Paanpoi\'.',
      Marathi: 'रस्त्यावरील मोफत पाणी मिळण्याच्या जागेला \'पानपोई\' म्हणतात.',
      Hindi: 'रास्ते में पानी की व्यवस्था को \'प्याऊ\' (पानपोई) कहते हैं।',
      Urdu: 'Free water stall is called \\\'Paanpoi\\\'.',
      Gujarati: 'रास्ते में पानी की व्यवस्था को \\\'प्याऊ\\\' (पानपोई) कहते हैं।',
      Telugu: 'Free water stall is called \\\'Paanpoi\\\'.',
      Kannada: 'Free water stall is called \\\'Paanpoi\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q1',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Find the synonym for \'Friend / मित्र\':',
      Marathi: '\'मित्र\' या शब्दाचा योग्य समानार्थी शब्द ओळखा:',
      Hindi: '\'मित्र\' का सही पर्यायवाची शब्द क्या है?',
      Urdu: 'Find the synonym for \\\'Friend / मित्र\\\':',
      Gujarati: '\\\'मित्र\\\' का सही पर्यायवाची शब्द क्या है?',
      Telugu: 'Find the synonym for \\\'Friend / मित्र\\\':',
      Kannada: 'Find the synonym for \\\'Friend / मित्र\\\':'
    },
    options: {
      English: ['Sakha (सखा / Friend)', 'Shatru', 'Dushman', 'Paraka'],
      Marathi: ['सखा', 'शत्रू', 'दुश्मन', 'परका'],
      Hindi: ['सखा / दोस्त', 'शत्रु', 'दुश्मन', 'पराया'],
      Urdu: ['Sakha (सखा / Friend)', 'Shatru', 'Dushman', 'Paraka'],
      Gujarati: ['सखा / दोस्त', 'शत्रु', 'दुश्मन', 'पराया'],
      Telugu: ['Sakha (सखा / Friend)', 'Shatru', 'Dushman', 'Paraka'],
      Kannada: ['Sakha (सखा / Friend)', 'Shatru', 'Dushman', 'Paraka']
    },
    correctIndex: 0,
    explanation: {
      English: '\'Sakha\' is a synonym for friend.',
      Marathi: '\'मित्र\' चा समानार्थी शब्द \'सखा\' आहे.',
      Hindi: '\'मित्र\' का पर्यायवाची \'सखा\' होता है।',
      Urdu: '\\\'Sakha\\\' is a synonym for friend.',
      Gujarati: '\\\'मित्र\\\' का पर्यायवाची \\\'सखा\\\' होता है।',
      Telugu: '\\\'Sakha\\\' is a synonym for friend.',
      Kannada: '\\\'Sakha\\\' is a synonym for friend.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q2',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite word for \'Prakash / प्रकाश (Light)\':',
      Marathi: '\'प्रकाश\' या शब्दाचा योग्य विरुद्धार्थी शब्द ओळखा:',
      Hindi: '\'प्रकाश\' का विलोम शब्द पहचानिए:',
      Urdu: 'What is the opposite word for \\\'Prakash / प्रकाश (Light)\\\':',
      Gujarati: '\\\'प्रकाश\\\' का विलोम शब्द पहचानिए:',
      Telugu: 'What is the opposite word for \\\'Prakash / प्रकाश (Light)\\\':',
      Kannada: 'What is the opposite word for \\\'Prakash / प्रकाश (Light)\\\':'
    },
    options: {
      English: ['Ujed', 'Chandi', 'Andhar (अंधार / Darkness)', 'Divas'],
      Marathi: ['उजेड', 'चांदी', 'अंधार', 'दिवस'],
      Hindi: ['उजाला', 'चांदी', 'अंधकार (अंधार)', 'दिन'],
      Urdu: ['Ujed', 'Chandi', 'Andhar (अंधार / Darkness)', 'Divas'],
      Gujarati: ['उजाला', 'चांदी', 'अंधकार (अंधार)', 'दिन'],
      Telugu: ['Ujed', 'Chandi', 'Andhar (अंधार / Darkness)', 'Divas'],
      Kannada: ['Ujed', 'Chandi', 'Andhar (अंधार / Darkness)', 'Divas']
    },
    correctIndex: 2,
    explanation: {
      English: 'Opposite of Prakash is Andhar (Darkness).',
      Marathi: '\'प्रकाश\' चा विरुद्धार्थी शब्द \'अंधार\' आहे.',
      Hindi: '\'प्रकाश\' का विलोम \'अंधकार\' होता है।',
      Urdu: 'Opposite of Prakash is Andhar (Darkness).',
      Gujarati: '\\\'प्रकाश\\\' का विलोम \\\'अंधकार\\\' होता है।',
      Telugu: 'Opposite of Prakash is Andhar (Darkness).',
      Kannada: 'Opposite of Prakash is Andhar (Darkness).'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q3',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'easy',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of Author (लेखक)?',
      Marathi: '\'लेखक\' या शब्दाचे स्त्रीलिंगी रूप ओळखा:',
      Hindi: '\'लेखक\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine gender of Author (लेखक)?',
      Gujarati: '\\\'लेखक\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine gender of Author (लेखक)?',
      Kannada: 'What is the feminine gender of Author (लेखक)?'
    },
    options: {
      English: ['Kavayitri', 'Lekhika (लेखिका / Female author)', 'Gayika', 'Nartaki'],
      Marathi: ['कवयित्री', 'लेखिका', 'गायिका', 'नर्तकी'],
      Hindi: ['कवयित्री', 'लेखिका', 'गायिका', 'नर्तकी'],
      Urdu: ['Kavayitri', 'Lekhika (लेखिका / Female author)', 'Gayika', 'Nartaki'],
      Gujarati: ['कवयित्री', 'लेखिका', 'गायिका', 'नर्तकी'],
      Telugu: ['Kavayitri', 'Lekhika (लेखिका / Female author)', 'Gayika', 'Nartaki'],
      Kannada: ['Kavayitri', 'Lekhika (लेखिका / Female author)', 'Gayika', 'Nartaki']
    },
    correctIndex: 1,
    explanation: {
      English: 'Feminine of Lekhak is Lekhika (लेखिका).',
      Marathi: '\'लेखक\' चे स्त्रीलिंगी रूप \'लेखिका\' आहे.',
      Hindi: '\'लेखक\' का स्त्रीलिंग \'लेखिका\' होता है।',
      Urdu: 'Feminine of Lekhak is Lekhika (लेखिका).',
      Gujarati: '\\\'लेखक\\\' का स्त्रीलिंग \\\'लेखिका\\\' होता है।',
      Telugu: 'Feminine of Lekhak is Lekhika (लेखिका).',
      Kannada: 'Feminine of Lekhak is Lekhika (लेखिका).'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q4',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'plural',
    questionText: {
      English: 'Which word has the SAME form in singular and plural?',
      Marathi: 'खालीलपैकी कोणत्या शब्दाचे एकवचन आणि अनेकवचन एकच राहते?',
      Hindi: 'किस शब्द का एकवचन और बहुवचन रूप समान रहता है?',
      Urdu: 'Which word has the SAME form in singular and plural?',
      Gujarati: 'किस शब्द का एकवचन और बहुवचन रूप समान रहता है?',
      Telugu: 'Which word has the SAME form in singular and plural?',
      Kannada: 'Which word has the SAME form in singular and plural?'
    },
    options: {
      English: ['Bhasha (भाषा / Language)', 'Pustak', 'Nadi', 'Rasta'],
      Marathi: ['भाषा', 'पुस्तक', 'नदी', 'रस्ता'],
      Hindi: ['भाषा', 'पुस्तक', 'नदी', 'रास्ता'],
      Urdu: ['Bhasha (भाषा / Language)', 'Pustak', 'Nadi', 'Rasta'],
      Gujarati: ['भाषा', 'पुस्तक', 'नदी', 'रास्ता'],
      Telugu: ['Bhasha (भाषा / Language)', 'Pustak', 'Nadi', 'Rasta'],
      Kannada: ['Bhasha (भाषा / Language)', 'Pustak', 'Nadi', 'Rasta']
    },
    correctIndex: 0,
    explanation: {
      English: '\'Bhasha\' remains unchanged in plural.',
      Marathi: '\'भाषा\' या शब्दाचे अनेकवचनही \'भाषा\' असेच राहते.',
      Hindi: '\'भाषा\' का रूप एकवचन और बहुवचन में समान रहता है।',
      Urdu: '\\\'Bhasha\\\' remains unchanged in plural.',
      Gujarati: '\\\'भाषा\\\' का रूप एकवचन और बहुवचन में समान रहता है।',
      Telugu: '\\\'Bhasha\\\' remains unchanged in plural.',
      Kannada: '\\\'Bhasha\\\' remains unchanged in plural.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q5',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Meaning of: \'नाचता येईना अंगण वाकडे\'?',
      Marathi: '\'नाचता येईना अंगण वाकडे\' या म्हणीचा योग्य अर्थ सांगा:',
      Hindi: '\'नाच न जाने आंगन टेढ़ा\' कहावत का सही अर्थ क्या है?',
      Urdu: 'Meaning of: \\\'नाचता येईना अंगण वाकडे\\\'?',
      Gujarati: '\\\'नाच न जाने आंगन टेढ़ा\\\' कहावत का सही अर्थ क्या है?',
      Telugu: 'Meaning of: \\\'नाचता येईना अंगण वाकडे\\\'?',
      Kannada: 'Meaning of: \\\'नाचता येईना अंगण वाकडे\\\'?'
    },
    options: {
      English: ['Courtyard is crooked', 'Dancing requires flat ground', 'Dancing is bad', 'Blaming external things when lacking own skill'],
      Marathi: ['अंगण वाकडे असणे', 'नृत्यासाठी सपाट जागा लागणे', 'अंगणात नाचणे वाईट', 'स्वतःमध्ये कौशल्याचा अभाव असताना परिस्थितीला दोष देणे'],
      Hindi: ['आंगन टेढ़ा होना', 'नृत्य के लिए जमीन चाहिए', 'नाचना बुरा है', 'अपनी कमी छुपाने के लिए दूसरों में दोष निकालना'],
      Urdu: ['Courtyard is crooked', 'Dancing requires flat ground', 'Dancing is bad', 'Blaming external things when lacking own skill'],
      Gujarati: ['आंगन टेढ़ा होना', 'नृत्य के लिए जमीन चाहिए', 'नाचना बुरा है', 'अपनी कमी छुपाने के लिए दूसरों में दोष निकालना'],
      Telugu: ['Courtyard is crooked', 'Dancing requires flat ground', 'Dancing is bad', 'Blaming external things when lacking own skill'],
      Kannada: ['Courtyard is crooked', 'Dancing requires flat ground', 'Dancing is bad', 'Blaming external things when lacking own skill']
    },
    correctIndex: 3,
    explanation: {
      English: 'Making excuses when lacking ability.',
      Marathi: '\'नाचता येईना अंगण वाकडे\' म्हणजे स्वतःच्या दोषाचे खापर इतरांवर फोडणे.',
      Hindi: 'अपनी असफलता के लिए साधनों को दोष देना।',
      Urdu: 'Making excuses when lacking ability.',
      Gujarati: 'अपनी असफलता के लिए साधनों को दोष देना।',
      Telugu: 'Making excuses when lacking ability.',
      Kannada: 'Making excuses when lacking ability.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q1',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the synonym for \'Mother / आई\':',
      Marathi: '\'आई\' या शब्दाचा समानार्थी शब्द ओळखा:',
      Hindi: '\'माता / मां\' का सही पर्यायवाची शब्द पहचानिए:',
      Urdu: 'Identify the synonym for \\\'Mother / आई\\\':',
      Gujarati: '\\\'माता / मां\\\' का सही पर्यायवाची शब्द पहचानिए:',
      Telugu: 'Identify the synonym for \\\'Mother / आई\\\':',
      Kannada: 'Identify the synonym for \\\'Mother / आई\\\':'
    },
    options: {
      English: ['Kanya', 'Bhagini', 'Janani (जननी / Mother)', 'Sakhi'],
      Marathi: ['कन्या', 'भगिनी', 'जननी', 'सखी'],
      Hindi: ['कन्या', 'भगिनी', 'जननी / माता', 'सखी'],
      Urdu: ['Kanya', 'Bhagini', 'Janani (जननी / Mother)', 'Sakhi'],
      Gujarati: ['कन्या', 'भगिनी', 'जननी / माता', 'सखी'],
      Telugu: ['Kanya', 'Bhagini', 'Janani (जननी / Mother)', 'Sakhi'],
      Kannada: ['Kanya', 'Bhagini', 'Janani (जननी / Mother)', 'Sakhi']
    },
    correctIndex: 2,
    explanation: {
      English: '\'Janani\' means mother.',
      Marathi: '\'आई\' चा समानार्थी शब्द \'जननी\' आहे.',
      Hindi: '\'मां\' का पर्यायवाची \'जननी\' होता है।',
      Urdu: '\\\'Janani\\\' means mother.',
      Gujarati: '\\\'मां\\\' का पर्यायवाची \\\'जननी\\\' होता है।',
      Telugu: '\\\'Janani\\\' means mother.',
      Kannada: '\\\'Janani\\\' means mother.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q2',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Sugandha / सुगंध (Fragrance)\'?',
      Marathi: '\'सुगंध\' या शब्दाचा योग्य विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'सुगंध\' का सही विलोम शब्द पहचानिए:',
      Urdu: 'What is the opposite of \\\'Sugandha / सुगंध (Fragrance)\\\'?',
      Gujarati: '\\\'सुगंध\\\' का सही विलोम शब्द पहचानिए:',
      Telugu: 'What is the opposite of \\\'Sugandha / सुगंध (Fragrance)\\\'?',
      Kannada: 'What is the opposite of \\\'Sugandha / सुगंध (Fragrance)\\\'?'
    },
    options: {
      English: ['Vasa', 'Durgandha (दुर्गंध / Stench)', 'Attar', 'Gulab'],
      Marathi: ['वास', 'दुर्गंध', 'अत्तर', 'गुलाब'],
      Hindi: ['बास', 'दुर्गंध / बदबू', 'इत्र', 'गुलाब'],
      Urdu: ['Vasa', 'Durgandha (दुर्गंध / Stench)', 'Attar', 'Gulab'],
      Gujarati: ['बास', 'दुर्गंध / बदबू', 'इत्र', 'गुलाब'],
      Telugu: ['Vasa', 'Durgandha (दुर्गंध / Stench)', 'Attar', 'Gulab'],
      Kannada: ['Vasa', 'Durgandha (दुर्गंध / Stench)', 'Attar', 'Gulab']
    },
    correctIndex: 1,
    explanation: {
      English: 'Opposite of Sugandha is Durgandha.',
      Marathi: '\'सुगंध\' चा विरुद्धार्थी शब्द \'दुर्गंध\' आहे.',
      Hindi: '\'सुगंध\' का विलोम शब्द \'दुर्गंध\' होता है।',
      Urdu: 'Opposite of Sugandha is Durgandha.',
      Gujarati: '\\\'सुगंध\\\' का विलोम शब्द \\\'दुर्गंध\\\' होता है।',
      Telugu: 'Opposite of Sugandha is Durgandha.',
      Kannada: 'Opposite of Sugandha is Durgandha.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q3',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of Poet (कवी)?',
      Marathi: '\'कवी\' या शब्दाचे योग्य स्त्रीलिंगी रूप कोणते?',
      Hindi: '\'कवि\' का शुद्ध स्त्रीलिंग रूप पहचानिए:',
      Urdu: 'What is the feminine gender of Poet (कवी)?',
      Gujarati: '\\\'कवि\\\' का शुद्ध स्त्रीलिंग रूप पहचानिए:',
      Telugu: 'What is the feminine gender of Poet (कवी)?',
      Kannada: 'What is the feminine gender of Poet (कवी)?'
    },
    options: {
      English: ['Kavita', 'Kaviin', 'Lekhika', 'Kavayitri (कवयित्री / Poetess)'],
      Marathi: ['कविता', 'कवीण', 'लेखिका', 'कवयित्री'],
      Hindi: ['कविता', 'कवीण', 'लेखिका', 'कवयित्री'],
      Urdu: ['Kavita', 'Kaviin', 'Lekhika', 'Kavayitri (कवयित्री / Poetess)'],
      Gujarati: ['कविता', 'कवीण', 'लेखिका', 'कवयित्री'],
      Telugu: ['Kavita', 'Kaviin', 'Lekhika', 'Kavayitri (कवयित्री / Poetess)'],
      Kannada: ['Kavita', 'Kaviin', 'Lekhika', 'Kavayitri (कवयित्री / Poetess)']
    },
    correctIndex: 3,
    explanation: {
      English: 'Feminine of Kavi is Kavayitri.',
      Marathi: '\'कवी\' चे स्त्रीलिंगी रूप \'कवयित्री\' आहे.',
      Hindi: '\'कवि\' का सही स्त्रीलिंग रूप \'कवयित्री\' होता है।',
      Urdu: 'Feminine of Kavi is Kavayitri.',
      Gujarati: '\\\'कवि\\\' का सही स्त्रीलिंग रूप \\\'कवयित्री\\\' होता है।',
      Telugu: 'Feminine of Kavi is Kavayitri.',
      Kannada: 'Feminine of Kavi is Kavayitri.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q4',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Ghar / घर (House)\'?',
      Marathi: '\'घर\' या शब्दाचे अनेकवचन रूप कोणते?',
      Hindi: '\'घर\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Ghar / घर (House)\\\'?',
      Gujarati: '\\\'घर\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Ghar / घर (House)\\\'?',
      Kannada: 'What is the plural of \\\'Ghar / घर (House)\\\'?'
    },
    options: {
      English: ['Ghare (घरे / Houses)', 'Gharo', 'Ghari', 'Ghara'],
      Marathi: ['घरे', 'घरो', 'घरी', 'घरा'],
      Hindi: ['घर / घरों (घरे)', 'घरो', 'घरी', 'घरा'],
      Urdu: ['Ghare (घरे / Houses)', 'Gharo', 'Ghari', 'Ghara'],
      Gujarati: ['घर / घरों (घरे)', 'घरो', 'घरी', 'घरा'],
      Telugu: ['Ghare (घरे / Houses)', 'Gharo', 'Ghari', 'Ghara'],
      Kannada: ['Ghare (घरे / Houses)', 'Gharo', 'Ghari', 'Ghara']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural of Ghar is Ghare (घरे).',
      Marathi: '\'घर\' चे अनेकवचन \'घरे\' होते.',
      Hindi: '\'घर\' का बहुवचन \'घर / घरों\' होता है।',
      Urdu: 'Plural of Ghar is Ghare (घरे).',
      Gujarati: '\\\'घर\\\' का बहुवचन \\\'घर / घरों\\\' होता है।',
      Telugu: 'Plural of Ghar is Ghare (घरे).',
      Kannada: 'Plural of Ghar is Ghare (घरे).'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q5',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'group_word',
    questionText: {
      English: 'One word for \'One who never dies / Immortal\':',
      Marathi: '\'ज्याला मरण नाही असा\' या शब्दसमूहाबद्दल एक शब्द कोणता?',
      Hindi: '\'जिसकी कभी मृत्यु न हो\' के लिए एक शब्द:',
      Urdu: 'One word for \\\'One who never dies / Immortal\\\':',
      Gujarati: '\\\'जिसकी कभी मृत्यु न हो\\\' के लिए एक शब्द:',
      Telugu: 'One word for \\\'One who never dies / Immortal\\\':',
      Kannada: 'One word for \\\'One who never dies / Immortal\\\':'
    },
    options: {
      English: ['Ajay', 'Amar (अमर / Immortal)', 'Amrut', 'Anant'],
      Marathi: ['अजय', 'अमर', 'अमृत', 'अनंत'],
      Hindi: ['अजय', 'अमर', 'अमृत', 'अनंत'],
      Urdu: ['Ajay', 'Amar (अमर / Immortal)', 'Amrut', 'Anant'],
      Gujarati: ['अजय', 'अमर', 'अमृत', 'अनंत'],
      Telugu: ['Ajay', 'Amar (अमर / Immortal)', 'Amrut', 'Anant'],
      Kannada: ['Ajay', 'Amar (अमर / Immortal)', 'Amrut', 'Anant']
    },
    correctIndex: 1,
    explanation: {
      English: 'One who never dies is \'Amar\'.',
      Marathi: 'ज्याला मरण नाही तो \'अमर\' होय.',
      Hindi: 'जिसका कभी अंत या मरण न हो उसे \'अमर\' कहते हैं।',
      Urdu: 'One who never dies is \\\'Amar\\\'.',
      Gujarati: 'जिसका कभी अंत या मरण न हो उसे \\\'अमर\\\' कहते हैं।',
      Telugu: 'One who never dies is \\\'Amar\\\'.',
      Kannada: 'One who never dies is \\\'Amar\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q1',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the synonym for \'Ocean / समुद्र\':',
      Marathi: '\'समुद्र\' या शब्दाचा समानार्थी शब्द ओळखा:',
      Hindi: '\'समुद्र\' का सही पर्यायवाची शब्द कौन सा है?',
      Urdu: 'Identify the synonym for \\\'Ocean / समुद्र\\\':',
      Gujarati: '\\\'समुद्र\\\' का सही पर्यायवाची शब्द कौन सा है?',
      Telugu: 'Identify the synonym for \\\'Ocean / समुद्र\\\':',
      Kannada: 'Identify the synonym for \\\'Ocean / समुद्र\\\':'
    },
    options: {
      English: ['Nadi', 'Zhara', 'Sarovar', 'Sagar (सागर / Ocean)'],
      Marathi: ['नदी', 'झरा', 'सरोवर', 'सागर'],
      Hindi: ['नदी', 'झरना', 'सरोवर', 'सागर / सिंधु'],
      Urdu: ['Nadi', 'Zhara', 'Sarovar', 'Sagar (सागर / Ocean)'],
      Gujarati: ['नदी', 'झरना', 'सरोवर', 'सागर / सिंधु'],
      Telugu: ['Nadi', 'Zhara', 'Sarovar', 'Sagar (सागर / Ocean)'],
      Kannada: ['Nadi', 'Zhara', 'Sarovar', 'Sagar (सागर / Ocean)']
    },
    correctIndex: 3,
    explanation: {
      English: '\'Sagar\' means Ocean.',
      Marathi: '\'समुद्र\' चा समानार्थी शब्द \'सागर\' आहे.',
      Hindi: '\'समुद्र\' का पर्यायवाची \'सागर\' होता है।',
      Urdu: '\\\'Sagar\\\' means Ocean.',
      Gujarati: '\\\'समुद्र\\\' का पर्यायवाची \\\'सागर\\\' होता है।',
      Telugu: '\\\'Sagar\\\' means Ocean.',
      Kannada: '\\\'Sagar\\\' means Ocean.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q2',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Khara / खरा (True)\':',
      Marathi: '\'खरा\' या शब्दाचा योग्य विरुद्धार्थी शब्द ओळखा:',
      Hindi: '\'सच्चा / खरा\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Khara / खरा (True)\\\':',
      Gujarati: '\\\'सच्चा / खरा\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Khara / खरा (True)\\\':',
      Kannada: 'What is the opposite of \\\'Khara / खरा (True)\\\':'
    },
    options: {
      English: ['Khota (खोटा / False)', 'Sundar', 'Chaan', 'Goad'],
      Marathi: ['खोटा', 'सुंदर', 'छान', 'गोड'],
      Hindi: ['झूठा / खोटा', 'सुंदर', 'अच्छा', 'मीठा'],
      Urdu: ['Khota (खोटा / False)', 'Sundar', 'Chaan', 'Goad'],
      Gujarati: ['झूठा / खोटा', 'सुंदर', 'अच्छा', 'मीठा'],
      Telugu: ['Khota (खोटा / False)', 'Sundar', 'Chaan', 'Goad'],
      Kannada: ['Khota (खोटा / False)', 'Sundar', 'Chaan', 'Goad']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Khara is Khota.',
      Marathi: '\'खरा\' चा विरुद्धार्थी शब्द \'खोटा\' आहे.',
      Hindi: '\'खरा\' का विलोम \'खोटा\' होता है।',
      Urdu: 'Opposite of Khara is Khota.',
      Gujarati: '\\\'खरा\\\' का विलोम \\\'खोटा\\\' होता है।',
      Telugu: 'Opposite of Khara is Khota.',
      Kannada: 'Opposite of Khara is Khota.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q3',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'easy',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of King (राजा)?',
      Marathi: '\'राजा\' या शब्दाचे योग्य स्त्रीलिंगी रूप कोणते?',
      Hindi: '\'राजा\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine gender of King (राजा)?',
      Gujarati: '\\\'राजा\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine gender of King (राजा)?',
      Kannada: 'What is the feminine gender of King (राजा)?'
    },
    options: {
      English: ['Prani', 'Kanya', 'Rani (राणी / Queen)', 'Mahila'],
      Marathi: ['प्रजा', 'कन्या', 'राणी', 'महिला'],
      Hindi: ['प्रजा', 'कन्या', 'रानी', 'महिला'],
      Urdu: ['Prani', 'Kanya', 'Rani (राणी / Queen)', 'Mahila'],
      Gujarati: ['प्रजा', 'कन्या', 'रानी', 'महिला'],
      Telugu: ['Prani', 'Kanya', 'Rani (राणी / Queen)', 'Mahila'],
      Kannada: ['Prani', 'Kanya', 'Rani (राणी / Queen)', 'Mahila']
    },
    correctIndex: 2,
    explanation: {
      English: 'Feminine of King is Queen (राणी).',
      Marathi: '\'राजा\' चे स्त्रीलिंगी रूप \'राणी\' आहे.',
      Hindi: '\'राजा\' का स्त्रीलिंग \'रानी\' होता है।',
      Urdu: 'Feminine of King is Queen (राणी).',
      Gujarati: '\\\'राजा\\\' का स्त्रीलिंग \\\'रानी\\\' होता है।',
      Telugu: 'Feminine of King is Queen (राणी).',
      Kannada: 'Feminine of King is Queen (राणी).'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q4',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Paan / पान (Leaf)\'?',
      Marathi: '\'पान\' या शब्दाचे योग्य अनेकवचन रूप कोणते?',
      Hindi: '\'पत्ता\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Paan / पान (Leaf)\\\'?',
      Gujarati: '\\\'पत्ता\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Paan / पान (Leaf)\\\'?',
      Kannada: 'What is the plural of \\\'Paan / पान (Leaf)\\\'?'
    },
    options: {
      English: ['Pana', 'Pane (पाने / Leaves)', 'Pano', 'Pani'],
      Marathi: ['पाना', 'पाने', 'पानो', 'पानी'],
      Hindi: ['पाना', 'पत्ते (पाने)', 'पन्नों', 'पानी'],
      Urdu: ['Pana', 'Pane (पाने / Leaves)', 'Pano', 'Pani'],
      Gujarati: ['पाना', 'पत्ते (पाने)', 'पन्नों', 'पानी'],
      Telugu: ['Pana', 'Pane (पाने / Leaves)', 'Pano', 'Pani'],
      Kannada: ['Pana', 'Pane (पाने / Leaves)', 'Pano', 'Pani']
    },
    correctIndex: 1,
    explanation: {
      English: 'Plural of Paan is Pane (पाने).',
      Marathi: '\'पान\' चे अनेकवचन \'पाने\' होते.',
      Hindi: '\'पत्ता\' का बहुवचन \'पत्ते\' होता है।',
      Urdu: 'Plural of Paan is Pane (पाने).',
      Gujarati: '\\\'पत्ता\\\' का बहुवचन \\\'पत्ते\\\' होता है।',
      Telugu: 'Plural of Paan is Pane (पाने).',
      Kannada: 'Plural of Paan is Pane (पाने).'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q5',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'collective',
    questionText: {
      English: 'Identify the collective term used for Keys (किल्ल्या):',
      Marathi: '\'किल्ल्यांचा\' या शब्दासाठी योग्य समूहदर्शक शब्द कोणता?',
      Hindi: '\'चाभियों का\' समूह क्या कहलाता है?',
      Urdu: 'Identify the collective term used for Keys (किल्ल्या):',
      Gujarati: '\\\'चाभियों का\\\' समूह क्या कहलाता है?',
      Telugu: 'Identify the collective term used for Keys (किल्ल्या):',
      Kannada: 'Identify the collective term used for Keys (किल्ल्या):'
    },
    options: {
      English: ['Judga (जुडगा / Bunch)', 'Ghad', 'Pendhi', 'Thava'],
      Marathi: ['जुडगा', 'घड', 'पेंढी', 'थवा'],
      Hindi: ['गुच्छा (जुडगा)', 'घोल', 'गट्ठर', 'झुंड'],
      Urdu: ['Judga (जुडगा / Bunch)', 'Ghad', 'Pendhi', 'Thava'],
      Gujarati: ['गुच्छा (जुडगा)', 'घोल', 'गट्ठर', 'झुंड'],
      Telugu: ['Judga (जुडगा / Bunch)', 'Ghad', 'Pendhi', 'Thava'],
      Kannada: ['Judga (जुडगा / Bunch)', 'Ghad', 'Pendhi', 'Thava']
    },
    correctIndex: 0,
    explanation: {
      English: 'Collective noun for keys is \'Judga\'.',
      Marathi: 'किल्ल्यांचा \'जुडगा\' असतो.',
      Hindi: 'चाभियों के समूह को \'गुच्छा\' (जुडगा) कहते हैं।',
      Urdu: 'Collective noun for keys is \\\'Judga\\\'.',
      Gujarati: 'चाभियों के समूह को \\\'गुच्छा\\\' (जुडगा) कहते हैं।',
      Telugu: 'Collective noun for keys is \\\'Judga\\\'.',
      Kannada: 'Collective noun for keys is \\\'Judga\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q1',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'easy',
    type: 'synonym',
    questionText: {
      English: 'Identify the synonym for \'Moon / चंद्र\':',
      Marathi: '\'चंद्र\' या शब्दाचा योग्य समानार्थी शब्द ओळखा:',
      Hindi: '\'चंद्रमा\' का सही पर्यायवाची शब्द कौन सा है?',
      Urdu: 'Identify the synonym for \\\'Moon / चंद्र\\\':',
      Gujarati: '\\\'चंद्रमा\\\' का सही पर्यायवाची शब्द कौन सा है?',
      Telugu: 'Identify the synonym for \\\'Moon / चंद्र\\\':',
      Kannada: 'Identify the synonym for \\\'Moon / चंद्र\\\':'
    },
    options: {
      English: ['Bhaskar', 'Ravi', 'Shashi (शशी / Moon)', 'Pavan'],
      Marathi: ['भास्कर', 'रवी', 'शशी', 'पवन'],
      Hindi: ['भास्कर', 'रवि', 'शशि / चंद्रमा', 'पवन'],
      Urdu: ['Bhaskar', 'Ravi', 'Shashi (शशी / Moon)', 'Pavan'],
      Gujarati: ['भास्कर', 'रवि', 'शशि / चंद्रमा', 'पवन'],
      Telugu: ['Bhaskar', 'Ravi', 'Shashi (शशी / Moon)', 'Pavan'],
      Kannada: ['Bhaskar', 'Ravi', 'Shashi (शशी / Moon)', 'Pavan']
    },
    correctIndex: 2,
    explanation: {
      English: '\'Shashi\' means Moon.',
      Marathi: '\'चंद्र\' चा समानार्थी शब्द \'शशी\' आहे.',
      Hindi: '\'चंद्रमा\' का पर्यायवाची \'शशि\' होता है।',
      Urdu: '\\\'Shashi\\\' means Moon.',
      Gujarati: '\\\'चंद्रमा\\\' का पर्यायवाची \\\'शशि\\\' होता है।',
      Telugu: '\\\'Shashi\\\' means Moon.',
      Kannada: '\\\'Shashi\\\' means Moon.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q2',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Swachha / स्वच्छ (Clean)\'?',
      Marathi: '\'स्वच्छ\' या शब्दाचा योग्य विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'स्वच्छ / साफ\' का विलोम शब्द पहचानिए:',
      Urdu: 'What is the opposite of \\\'Swachha / स्वच्छ (Clean)\\\'?',
      Gujarati: '\\\'स्वच्छ / साफ\\\' का विलोम शब्द पहचानिए:',
      Telugu: 'What is the opposite of \\\'Swachha / स्वच्छ (Clean)\\\'?',
      Kannada: 'What is the opposite of \\\'Swachha / स्वच्छ (Clean)\\\'?'
    },
    options: {
      English: ['Sundar', 'Aswachha (अस्वच्छ / Dirty)', 'Pavitra', 'Nirmal'],
      Marathi: ['सुंदर', 'अस्वच्छ', 'पवित्र', 'निर्मळ'],
      Hindi: ['सुंदर', 'अस्वच्छ / गंदा', 'पवित्र', 'निर्मल'],
      Urdu: ['Sundar', 'Aswachha (अस्वच्छ / Dirty)', 'Pavitra', 'Nirmal'],
      Gujarati: ['सुंदर', 'अस्वच्छ / गंदा', 'पवित्र', 'निर्मल'],
      Telugu: ['Sundar', 'Aswachha (अस्वच्छ / Dirty)', 'Pavitra', 'Nirmal'],
      Kannada: ['Sundar', 'Aswachha (अस्वच्छ / Dirty)', 'Pavitra', 'Nirmal']
    },
    correctIndex: 1,
    explanation: {
      English: 'Opposite of Swachha is Aswachha.',
      Marathi: '\'स्वच्छ\' चा विरुद्धार्थी शब्द \'अस्वच्छ\' आहे.',
      Hindi: '\'स्वच्छ\' का विलोम \'अस्वच्छ\' होता है।',
      Urdu: 'Opposite of Swachha is Aswachha.',
      Gujarati: '\\\'स्वच्छ\\\' का विलोम \\\'अस्वच्छ\\\' होता है।',
      Telugu: 'Opposite of Swachha is Aswachha.',
      Kannada: 'Opposite of Swachha is Aswachha.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q3',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'easy',
    type: 'gender',
    questionText: {
      English: 'What is the feminine gender of Lion (सिंह)?',
      Marathi: '\'सिंह\' या शब्दाचे योग्य स्त्रीलिंगी रूप कोणते?',
      Hindi: '\'सिंह / शेर\' का स्त्रीलिंग रूप क्या है?',
      Urdu: 'What is the feminine gender of Lion (सिंह)?',
      Gujarati: '\\\'सिंह / शेर\\\' का स्त्रीलिंग रूप क्या है?',
      Telugu: 'What is the feminine gender of Lion (सिंह)?',
      Kannada: 'What is the feminine gender of Lion (सिंह)?'
    },
    options: {
      English: ['Vaghin', 'Bhati', 'Landor', 'Simhin (सिंहिण / Lioness)'],
      Marathi: ['वाघीण', 'भाटी', 'लांडोर', 'सिंहिण'],
      Hindi: ['बाघिन', 'बिल्ली', 'मोरनी', 'सिंहनी (सिंहिण)'],
      Urdu: ['Vaghin', 'Bhati', 'Landor', 'Simhin (सिंहिण / Lioness)'],
      Gujarati: ['बाघिन', 'बिल्ली', 'मोरनी', 'सिंहनी (सिंहिण)'],
      Telugu: ['Vaghin', 'Bhati', 'Landor', 'Simhin (सिंहिण / Lioness)'],
      Kannada: ['Vaghin', 'Bhati', 'Landor', 'Simhin (सिंहिण / Lioness)']
    },
    correctIndex: 3,
    explanation: {
      English: 'Feminine of Lion is Lioness (सिंहिण).',
      Marathi: '\'सिंह\' चे स्त्रीलिंगी रूप \'सिंहिण\' आहे.',
      Hindi: '\'सिंह\' का स्त्रीलिंग \'सिंहनी\' होता है।',
      Urdu: 'Feminine of Lion is Lioness (सिंहिण).',
      Gujarati: '\\\'सिंह\\\' का स्त्रीलिंग \\\'सिंहनी\\\' होता है।',
      Telugu: 'Feminine of Lion is Lioness (सिंहिण).',
      Kannada: 'Feminine of Lion is Lioness (सिंहिण).'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q4',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'easy',
    type: 'plural',
    questionText: {
      English: 'What is the plural of \'Zhad / झाड (Tree)\'?',
      Marathi: '\'झाड\' या शब्दाचे योग्य अनेकवचन रूप कोणते?',
      Hindi: '\'पेड़ / झाड़\' का बहुवचन रूप क्या है?',
      Urdu: 'What is the plural of \\\'Zhad / झाड (Tree)\\\'?',
      Gujarati: '\\\'पेड़ / झाड़\\\' का बहुवचन रूप क्या है?',
      Telugu: 'What is the plural of \\\'Zhad / झाड (Tree)\\\'?',
      Kannada: 'What is the plural of \\\'Zhad / झाड (Tree)\\\'?'
    },
    options: {
      English: ['Zhade (झाडे / Trees)', 'Zhado', 'Zhadi', 'Zhada'],
      Marathi: ['झाडे', 'झाडो', 'झाडी', 'झाडा'],
      Hindi: ['पेड़ / झाड़े', 'झाड़ो', 'झाड़ी', 'झाड़ा'],
      Urdu: ['Zhade (झाडे / Trees)', 'Zhado', 'Zhadi', 'Zhada'],
      Gujarati: ['पेड़ / झाड़े', 'झाड़ो', 'झाड़ी', 'झाड़ा'],
      Telugu: ['Zhade (झाडे / Trees)', 'Zhado', 'Zhadi', 'Zhada'],
      Kannada: ['Zhade (झाडे / Trees)', 'Zhado', 'Zhadi', 'Zhada']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural of Zhad is Zhade (झाडे).',
      Marathi: '\'झाड\' चे अनेकवचन \'झाडे\' होते.',
      Hindi: '\'झाड़\' का बहुवचन \'झाड़े\' होता है।',
      Urdu: 'Plural of Zhad is Zhade (झाडे).',
      Gujarati: '\\\'झाड़\\\' का बहुवचन \\\'झाड़े\\\' होता है।',
      Telugu: 'Plural of Zhad is Zhade (झाडे).',
      Kannada: 'Plural of Zhad is Zhade (झाडे).'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q5',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'group_word',
    questionText: {
      English: 'One word for \'One who is grateful for favours received\':',
      Marathi: '\'केलेले उपकार जाणणारा\' या शब्दसमूहाबद्दल एक शब्द कोणता?',
      Hindi: '\'किए गए उपकार को मानने वाला\' के लिए एक शब्द:',
      Urdu: 'One word for \\\'One who is grateful for favours received\\\':',
      Gujarati: '\\\'किए गए उपकार को मानने वाला\\\' के लिए एक शब्द:',
      Telugu: 'One word for \\\'One who is grateful for favours received\\\':',
      Kannada: 'One word for \\\'One who is grateful for favours received\\\':'
    },
    options: {
      English: ['Krutaghna', 'Upakari', 'Krutadnya (कृतज्ञ / Grateful)', 'Dharmatma'],
      Marathi: ['कृतघ्न', 'उपकारी', 'कृतज्ञ', 'धर्मात्मा'],
      Hindi: ['कृतघ्न', 'उपकारी', 'कृतज्ञ', 'धर्मात्मा'],
      Urdu: ['Krutaghna', 'Upakari', 'Krutadnya (कृतज्ञ / Grateful)', 'Dharmatma'],
      Gujarati: ['कृतघ्न', 'उपकारी', 'कृतज्ञ', 'धर्मात्मा'],
      Telugu: ['Krutaghna', 'Upakari', 'Krutadnya (कृतज्ञ / Grateful)', 'Dharmatma'],
      Kannada: ['Krutaghna', 'Upakari', 'Krutadnya (कृतज्ञ / Grateful)', 'Dharmatma']
    },
    correctIndex: 2,
    explanation: {
      English: 'One who acknowledges kindness is \'Krutadnya\'.',
      Marathi: 'केलेले उपकार जाणणारा म्हणजे \'कृतज्ञ\'.',
      Hindi: 'किए गए उपकार को मानने वाले को \'कृतज्ञ\' कहते हैं।',
      Urdu: 'One who acknowledges kindness is \\\'Krutadnya\\\'.',
      Gujarati: 'किए गए उपकार को मानने वाले को \\\'कृतज्ञ\\\' कहते हैं।',
      Telugu: 'One who acknowledges kindness is \\\'Krutadnya\\\'.',
      Kannada: 'One who acknowledges kindness is \\\'Krutadnya\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q6',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 74,825, what is the place value of digit 4?',
      Marathi: '७४,८२५ या संख्येत ४ या अंकाची स्थानिक किंमत किती?',
      Hindi: '७४,८२५ संख्या में ४ का स्थानीय मान क्या है?',
      Urdu: 'In the number 74,825, what is the place value of digit 4?',
      Gujarati: '७४,८२५ संख्या में ४ का स्थानीय मान क्या है?',
      Telugu: 'In the number 74,825, what is the place value of digit 4?',
      Kannada: 'In the number 74,825, what is the place value of digit 4?'
    },
    options: {
      English: ['400', '4,000', '40,000', '4'],
      Marathi: ['४००', '४,०००', '४०,०००', '४'],
      Hindi: ['४००', '४,०००', '४०,०००', '४'],
      Urdu: ['400', '4,000', '40,000', '4'],
      Gujarati: ['४००', '४,०००', '४०,०००', '४'],
      Telugu: ['400', '4,000', '40,000', '4'],
      Kannada: ['400', '4,000', '40,000', '4']
    },
    correctIndex: 1,
    explanation: {
      English: 'Digit 4 is in the thousands place, so its place value is 4,000.',
      Marathi: '४ हा अंक हजार स्थानी असल्याने त्याची स्थानिक किंमत ४,००० आहे.',
      Hindi: '४ हजार के स्थान पर है, अतः मान ४,००० है।',
      Urdu: 'Digit 4 is in the thousands place, so its place value is 4,000.',
      Gujarati: '४ हजार के स्थान पर है, अतः मान ४,००० है।',
      Telugu: 'Digit 4 is in the thousands place, so its place value is 4,000.',
      Kannada: 'Digit 4 is in the thousands place, so its place value is 4,000.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q7',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'How is 34 written in Roman numerals?',
      Marathi: '३४ ही संख्या रोमन संख्याचिन्हात कशी लिहितात?',
      Hindi: '३४ को रोमन अंक में कैसे लिखा जाता है?',
      Urdu: 'How is 34 written in Roman numerals?',
      Gujarati: '३४ को रोमन अंक में कैसे लिखा जाता है?',
      Telugu: 'How is 34 written in Roman numerals?',
      Kannada: 'How is 34 written in Roman numerals?'
    },
    options: {
      English: ['XXIV', 'XXVI', 'XXXIV', 'LIV'],
      Marathi: ['XXIV', 'XXVI', 'XXXIV', 'LIV'],
      Hindi: ['XXIV', 'XXVI', 'XXXIV', 'LIV'],
      Urdu: ['XXIV', 'XXVI', 'XXXIV', 'LIV'],
      Gujarati: ['XXIV', 'XXVI', 'XXXIV', 'LIV'],
      Telugu: ['XXIV', 'XXVI', 'XXXIV', 'LIV'],
      Kannada: ['XXIV', 'XXVI', 'XXXIV', 'LIV']
    },
    correctIndex: 2,
    explanation: {
      English: '30 + 4 = XXX + IV = XXXIV.',
      Marathi: '३० + ४ = XXX + IV = XXXIV.',
      Hindi: '३० + ४ = XXX + IV = XXXIV.',
      Urdu: '30 + 4 = XXX + IV = XXXIV.',
      Gujarati: '३० + ४ = XXX + IV = XXXIV.',
      Telugu: '30 + 4 = XXX + IV = XXXIV.',
      Kannada: '30 + 4 = XXX + IV = XXXIV.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q8',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Solve: 4,328 + 2,945 = ?',
      Marathi: 'बेरीज करा: ४,३२८ + २,९४५ = ?',
      Hindi: 'जोड़ें: ४,३२८ + २,९४५ = ?',
      Urdu: 'Solve: 4,328 + 2,945 = ?',
      Gujarati: 'जोड़ें: ४,३२८ + २,९४५ = ?',
      Telugu: 'Solve: 4,328 + 2,945 = ?',
      Kannada: 'Solve: 4,328 + 2,945 = ?'
    },
    options: {
      English: ['7,273', '7,173', '6,273', '7,283'],
      Marathi: ['७,२७३', '७,१७३', '६,२७३', '७,२८३'],
      Hindi: ['७,२७३', '७,१७३', '६,२७३', '७,२८३'],
      Urdu: ['7,273', '7,173', '6,273', '7,283'],
      Gujarati: ['७,२७३', '७,१७३', '६,२७३', '७,२८३'],
      Telugu: ['7,273', '7,173', '6,273', '7,283'],
      Kannada: ['7,273', '7,173', '6,273', '7,283']
    },
    correctIndex: 0,
    explanation: {
      English: '4328 + 2945 = 7273.',
      Marathi: '४३२८ + २९४५ = ७२७३.',
      Hindi: '४३२८ + २९४५ = ७२७३।',
      Urdu: '4328 + 2945 = 7273.',
      Gujarati: '४३२८ + २९४५ = ७२७३।',
      Telugu: '4328 + 2945 = 7273.',
      Kannada: '4328 + 2945 = 7273.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q9',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Solve: 8,000 - 3,456 = ?',
      Marathi: 'वजाबाकी करा: ८,००० - ३,४५६ = ?',
      Hindi: 'घटाएं: ८,००० - ३,४५६ = ?',
      Urdu: 'Solve: 8,000 - 3,456 = ?',
      Gujarati: 'घटाएं: ८,००० - ३,४५६ = ?',
      Telugu: 'Solve: 8,000 - 3,456 = ?',
      Kannada: 'Solve: 8,000 - 3,456 = ?'
    },
    options: {
      English: ['4,644', '5,544', '4,554', '4,544'],
      Marathi: ['४,६४४', '५,५४४', '४,५५४', '४,५४४'],
      Hindi: ['४,६४४', '५,५४४', '४,५५४', '४,५४४'],
      Urdu: ['4,644', '5,544', '4,554', '4,544'],
      Gujarati: ['४,६४४', '५,५४४', '४,५५४', '४,५४४'],
      Telugu: ['4,644', '5,544', '4,554', '4,544'],
      Kannada: ['4,644', '5,544', '4,554', '4,544']
    },
    correctIndex: 3,
    explanation: {
      English: '8000 - 3456 = 4544.',
      Marathi: '८००० - ३४५६ = ४५४४.',
      Hindi: '८००० - ३४५६ = ४५४४।',
      Urdu: '8000 - 3456 = 4544.',
      Gujarati: '८००० - ३४५६ = ४५४४।',
      Telugu: '8000 - 3456 = 4544.',
      Kannada: '8000 - 3456 = 4544.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q10',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Cost of 1 toy car is ₹65. What is the cost of 12 such toy cars?',
      Marathi: 'एका खेळण्यातील गाडीची किंमत ₹६५ आहे, तर अशा १२ गाड्यांची किंमत किती?',
      Hindi: 'एक खिलौना गाड़ी की कीमत ₹६५ है, तो ऐसी १२ गाड़ियों की कीमत क्या होगी?',
      Urdu: 'Cost of 1 toy car is ₹65. What is the cost of 12 such toy cars?',
      Gujarati: 'एक खिलौना गाड़ी की कीमत ₹६५ है, तो ऐसी १२ गाड़ियों की कीमत क्या होगी?',
      Telugu: 'Cost of 1 toy car is ₹65. What is the cost of 12 such toy cars?',
      Kannada: 'Cost of 1 toy car is ₹65. What is the cost of 12 such toy cars?'
    },
    options: {
      English: ['₹720', '₹780', '₹820', '₹650'],
      Marathi: ['₹७२०', '₹७८०', '₹८२०', '₹६५०'],
      Hindi: ['₹७२०', '₹७८०', '₹८२०', '₹६५०'],
      Urdu: ['₹720', '₹780', '₹820', '₹650'],
      Gujarati: ['₹७२०', '₹७८०', '₹८२०', '₹६५०'],
      Telugu: ['₹720', '₹780', '₹820', '₹650'],
      Kannada: ['₹720', '₹780', '₹820', '₹650']
    },
    correctIndex: 1,
    explanation: {
      English: '65 × 12 = ₹780.',
      Marathi: '६५ × १२ = ₹७८०.',
      Hindi: '६५ × १२ = ₹७८०।',
      Urdu: '65 × 12 = ₹780.',
      Gujarati: '६५ × १२ = ₹७८०।',
      Telugu: '65 × 12 = ₹780.',
      Kannada: '65 × 12 = ₹780.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q11',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 148 by 6. What are the quotient and remainder?',
      Marathi: '१४८ ला ६ ने भागल्यास भागाकार व बाकी किती येईल?',
      Hindi: '१४८ को ६ से भाग देने पर भागफल और शेषफल क्या होगा?',
      Urdu: 'Divide 148 by 6. What are the quotient and remainder?',
      Gujarati: '१४८ को ६ से भाग देने पर भागफल और शेषफल क्या होगा?',
      Telugu: 'Divide 148 by 6. What are the quotient and remainder?',
      Kannada: 'Divide 148 by 6. What are the quotient and remainder?'
    },
    options: {
      English: ['Quotient 22, Rem 4', 'Quotient 24, Rem 2', 'Quotient 24, Rem 4', 'Quotient 25, Rem 0'],
      Marathi: ['भागाकार २२, बाकी ४', 'भागाकार २४, बाकी २', 'भागाकार २४, बाकी ४', 'भागाकार २५, बाकी ०'],
      Hindi: ['भागफल २२, शेष ४', 'भागफल २४, शेष २', 'भागफल २४, शेष ४', 'भागफल २५, शेष ०'],
      Urdu: ['Quotient 22, Rem 4', 'Quotient 24, Rem 2', 'Quotient 24, Rem 4', 'Quotient 25, Rem 0'],
      Gujarati: ['भागफल २२, शेष ४', 'भागफल २४, शेष २', 'भागफल २४, शेष ४', 'भागफल २५, शेष ०'],
      Telugu: ['Quotient 22, Rem 4', 'Quotient 24, Rem 2', 'Quotient 24, Rem 4', 'Quotient 25, Rem 0'],
      Kannada: ['Quotient 22, Rem 4', 'Quotient 24, Rem 2', 'Quotient 24, Rem 4', 'Quotient 25, Rem 0']
    },
    correctIndex: 2,
    explanation: {
      English: '148 = (24 × 6) + 4. Quotient = 24, Remainder = 4.',
      Marathi: '१४८ = (२४ × ६) + ४. भागाकार = २४, बाकी = ४.',
      Hindi: '१४८ = २४ × ६ + ४।',
      Urdu: '148 = (24 × 6) + 4. Quotient = 24, Remainder = 4.',
      Gujarati: '१४८ = २४ × ६ + ४।',
      Telugu: '148 = (24 × 6) + 4. Quotient = 24, Remainder = 4.',
      Kannada: '148 = (24 × 6) + 4. Quotient = 24, Remainder = 4.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q12',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 3/4 of 48 chocolates?',
      Marathi: '४८ चॉकलेट्सचा ३/४ भाग म्हणजे किती चॉकलेट्स?',
      Hindi: '४८ चॉकलेट्स का ३/४ भाग कितना होगा?',
      Urdu: 'What is 3/4 of 48 chocolates?',
      Gujarati: '४८ चॉकलेट्स का ३/४ भाग कितना होगा?',
      Telugu: 'What is 3/4 of 48 chocolates?',
      Kannada: 'What is 3/4 of 48 chocolates?'
    },
    options: {
      English: ['36', '32', '24', '40'],
      Marathi: ['३६', '३२', '२४', '४०'],
      Hindi: ['३६', '३२', '२४', '४०'],
      Urdu: ['36', '32', '24', '40'],
      Gujarati: ['३६', '३२', '२४', '४०'],
      Telugu: ['36', '32', '24', '40'],
      Kannada: ['36', '32', '24', '40']
    },
    correctIndex: 0,
    explanation: {
      English: '(48 ÷ 4) × 3 = 12 × 3 = 36.',
      Marathi: '(४८ ÷ ४) × ३ = १२ × ३ = ३६.',
      Hindi: '(४८ ÷ ४) × ३ = ३६।',
      Urdu: '(48 ÷ 4) × 3 = 12 × 3 = 36.',
      Gujarati: '(४८ ÷ ४) × ३ = ३६।',
      Telugu: '(48 ÷ 4) × 3 = 12 × 3 = 36.',
      Kannada: '(48 ÷ 4) × 3 = 12 × 3 = 36.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q13',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 4 metres 75 centimetres into centimetres:',
      Marathi: '४ मीटर ७५ सेंटीमीटर म्हणजे किती सेंटीमीटर?',
      Hindi: '४ मीटर ७५ सेंटीमीटर को सेंटीमीटर में बदलें:',
      Urdu: 'Convert 4 metres 75 centimetres into centimetres:',
      Gujarati: '४ मीटर ७५ सेंटीमीटर को सेंटीमीटर में बदलें:',
      Telugu: 'Convert 4 metres 75 centimetres into centimetres:',
      Kannada: 'Convert 4 metres 75 centimetres into centimetres:'
    },
    options: {
      English: ['4075 cm', '475 cm', '4750 cm', '754 cm'],
      Marathi: ['४०७५ सेमी', '४७५ सेमी', '४७५० सेमी', '७५४ सेमी'],
      Hindi: ['४०७५ सेमी', '४७५ सेमी', '४७५० सेमी', '७५४ सेमी'],
      Urdu: ['4075 cm', '475 cm', '4750 cm', '754 cm'],
      Gujarati: ['४०७५ सेमी', '४७५ सेमी', '४७५० सेमी', '७५४ सेमी'],
      Telugu: ['4075 cm', '475 cm', '4750 cm', '754 cm'],
      Kannada: ['4075 cm', '475 cm', '4750 cm', '754 cm']
    },
    correctIndex: 1,
    explanation: {
      English: '1 m = 100 cm. So 400 + 75 = 475 cm.',
      Marathi: '१ मीटर = १०० सेमी. ४०० + ७५ = ४७५ सेमी.',
      Hindi: '४ × १०० + ७५ = ४७५ सेमी।',
      Urdu: '1 m = 100 cm. So 400 + 75 = 475 cm.',
      Gujarati: '४ × १०० + ७५ = ४७५ सेमी।',
      Telugu: '1 m = 100 cm. So 400 + 75 = 475 cm.',
      Kannada: '1 m = 100 cm. So 400 + 75 = 475 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q14',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'The side of a square is 9 cm. What is its perimeter?',
      Marathi: 'एका चौरसाची बाजू ९ सेमी आहे, तर त्याची परिमिती किती?',
      Hindi: 'एक वर्ग की भुजा ९ सेमी है, तो उसका परिमाप क्या होगा?',
      Urdu: 'The side of a square is 9 cm. What is its perimeter?',
      Gujarati: 'एक वर्ग की भुजा ९ सेमी है, तो उसका परिमाप क्या होगा?',
      Telugu: 'The side of a square is 9 cm. What is its perimeter?',
      Kannada: 'The side of a square is 9 cm. What is its perimeter?'
    },
    options: {
      English: ['18 cm', '81 cm', '27 cm', '36 cm'],
      Marathi: ['१८ सेमी', '८१ सेमी', '२७ सेमी', '३६ सेमी'],
      Hindi: ['१८ सेमी', '८१ सेमी', '२७ सेमी', '३६ सेमी'],
      Urdu: ['18 cm', '81 cm', '27 cm', '36 cm'],
      Gujarati: ['१८ सेमी', '८१ सेमी', '२७ सेमी', '३६ सेमी'],
      Telugu: ['18 cm', '81 cm', '27 cm', '36 cm'],
      Kannada: ['18 cm', '81 cm', '27 cm', '36 cm']
    },
    correctIndex: 3,
    explanation: {
      English: 'Perimeter of square = 4 × side = 4 × 9 = 36 cm.',
      Marathi: 'चौरसाची परिमिती = ४ × बाजू = ४ × ९ = ३६ सेमी.',
      Hindi: 'वर्ग का परिमाप = ४ × भुजा = ४ × ९ = ३६ सेमी।',
      Urdu: 'Perimeter of square = 4 × side = 4 × 9 = 36 cm.',
      Gujarati: 'वर्ग का परिमाप = ४ × भुजा = ४ × ९ = ३६ सेमी।',
      Telugu: 'Perimeter of square = 4 × side = 4 × 9 = 36 cm.',
      Kannada: 'Perimeter of square = 4 × side = 4 × 9 = 36 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q15',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'calendar',
    questionText: {
      English: 'How many days are there in a Leap Year?',
      Marathi: 'लीप वर्षात एकूण किती दिवस असतात?',
      Hindi: 'एक लीप वर्ष में कुल कितने दिन होते हैं?',
      Urdu: 'How many days are there in a Leap Year?',
      Gujarati: 'एक लीप वर्ष में कुल कितने दिन होते हैं?',
      Telugu: 'How many days are there in a Leap Year?',
      Kannada: 'How many days are there in a Leap Year?'
    },
    options: {
      English: ['365 days', '360 days', '366 days', '364 days'],
      Marathi: ['३६५ दिवस', '३६० दिवस', '३६६ दिवस', '३६४ दिवस'],
      Hindi: ['३६५ दिन', '३६० दिन', '३६६ दिन', '३६४ दिन'],
      Urdu: ['365 days', '360 days', '366 days', '364 days'],
      Gujarati: ['३६५ दिन', '३६० दिन', '३६६ दिन', '३६४ दिन'],
      Telugu: ['365 days', '360 days', '366 days', '364 days'],
      Kannada: ['365 days', '360 days', '366 days', '364 days']
    },
    correctIndex: 2,
    explanation: {
      English: 'A leap year has 366 days (February has 29 days).',
      Marathi: 'लीप वर्षात ३६६ दिवस असतात (फेब्रुवारीत २९ दिवस).',
      Hindi: 'लीप वर्ष में ३६६ दिन होते हैं।',
      Urdu: 'A leap year has 366 days (February has 29 days).',
      Gujarati: 'लीप वर्ष में ३६६ दिन होते हैं।',
      Telugu: 'A leap year has 366 days (February has 29 days).',
      Kannada: 'A leap year has 366 days (February has 29 days).'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q6',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'place_value',
    questionText: {
      English: 'In 95,216, what is the difference between the place value and face value of 5?',
      Marathi: '९५,२१६ या संख्येत ५ या अंकाची स्थानिक किंमत व दर्शनी किंमत यातील फरक किती?',
      Hindi: '९५,२१६ में ५ के स्थानीय मान और दर्शनीय मान का अंतर क्या है?',
      Urdu: 'In 95,216, what is the difference between the place value and face value of 5?',
      Gujarati: '९५,२१६ में ५ के स्थानीय मान और दर्शनीय मान का अंतर क्या है?',
      Telugu: 'In 95,216, what is the difference between the place value and face value of 5?',
      Kannada: 'In 95,216, what is the difference between the place value and face value of 5?'
    },
    options: {
      English: ['4,995', '5,000', '4,990', '5,005'],
      Marathi: ['४,९९५', '५,०००', '४,९९०', '५,००५'],
      Hindi: ['४,९९५', '५,०००', '४,९९०', '५,००५'],
      Urdu: ['4,995', '5,000', '4,990', '5,005'],
      Gujarati: ['४,९९५', '५,०००', '४,९९०', '५,००५'],
      Telugu: ['4,995', '5,000', '4,990', '5,005'],
      Kannada: ['4,995', '5,000', '4,990', '5,005']
    },
    correctIndex: 0,
    explanation: {
      English: 'Place value = 5000, Face value = 5. Difference = 5000 - 5 = 4995.',
      Marathi: 'स्थानिक किंमत = ५०००, दर्शनी किंमत = ५. फरक = ५००० - ५ = ४९९५.',
      Hindi: '५००० - ५ = ४९९५।',
      Urdu: 'Place value = 5000, Face value = 5. Difference = 5000 - 5 = 4995.',
      Gujarati: '५००० - ५ = ४९९५।',
      Telugu: 'Place value = 5000, Face value = 5. Difference = 5000 - 5 = 4995.',
      Kannada: 'Place value = 5000, Face value = 5. Difference = 5000 - 5 = 4995.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q7',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'What is the value of XLVI in Hindu-Arabic numerals?',
      Marathi: 'XLVI या रोमन संख्याचिन्हाची किंमत किती?',
      Hindi: 'XLVI का हिंदू-अरेबिक मान क्या है?',
      Urdu: 'What is the value of XLVI in Hindu-Arabic numerals?',
      Gujarati: 'XLVI का हिंदू-अरेबिक मान क्या है?',
      Telugu: 'What is the value of XLVI in Hindu-Arabic numerals?',
      Kannada: 'What is the value of XLVI in Hindu-Arabic numerals?'
    },
    options: {
      English: ['56', '46', '64', '44'],
      Marathi: ['५६', '४६', '६४', '४४'],
      Hindi: ['५६', '४६', '६४', '४४'],
      Urdu: ['56', '46', '64', '44'],
      Gujarati: ['५६', '४६', '६४', '४४'],
      Telugu: ['56', '46', '64', '44'],
      Kannada: ['56', '46', '64', '44']
    },
    correctIndex: 1,
    explanation: {
      English: 'XL = 40, VI = 6. XLVI = 46.',
      Marathi: 'XL = ४०, VI = ६. XLVI = ४६.',
      Hindi: 'XL = ४०, VI = ६. ४६ सही है।',
      Urdu: 'XL = 40, VI = 6. XLVI = 46.',
      Gujarati: 'XL = ४०, VI = ६. ४६ सही है।',
      Telugu: 'XL = 40, VI = 6. XLVI = 46.',
      Kannada: 'XL = 40, VI = 6. XLVI = 46.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q8',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'A village has 3,450 men and 3,280 women. What is the total population?',
      Marathi: 'एका गावात ३,४५० पुरुष व ३,२८० स्त्रिया आहेत, तर गावाची एकूण लोकसंख्या किती?',
      Hindi: 'एक गांव में ३,४५० पुरुष और ३,२८० महिलाएं हैं, कुल जनसंख्या क्या है?',
      Urdu: 'A village has 3,450 men and 3,280 women. What is the total population?',
      Gujarati: 'एक गांव में ३,४५० पुरुष और ३,२८० महिलाएं हैं, कुल जनसंख्या क्या है?',
      Telugu: 'A village has 3,450 men and 3,280 women. What is the total population?',
      Kannada: 'A village has 3,450 men and 3,280 women. What is the total population?'
    },
    options: {
      English: ['6,630', '6,720', '6,730', '6,830'],
      Marathi: ['६,६३०', '६,७२०', '६,७३०', '६,८३०'],
      Hindi: ['६,६३०', '६,७२०', '६,७३०', '६,८३०'],
      Urdu: ['6,630', '6,720', '6,730', '6,830'],
      Gujarati: ['६,६३०', '६,७२०', '६,७३०', '६,८३०'],
      Telugu: ['6,630', '6,720', '6,730', '6,830'],
      Kannada: ['6,630', '6,720', '6,730', '6,830']
    },
    correctIndex: 2,
    explanation: {
      English: '3450 + 3280 = 6730.',
      Marathi: '३४५० + ३२८० = ६७३०.',
      Hindi: '३४५० + ३२८० = ६७३०।',
      Urdu: '3450 + 3280 = 6730.',
      Gujarati: '३४५० + ३२८० = ६७३०।',
      Telugu: '3450 + 3280 = 6730.',
      Kannada: '3450 + 3280 = 6730.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q9',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Ramesh had ₹7,500. He spent ₹3,840 on clothes. How much money is left?',
      Marathi: 'रमेशकडे ₹७,५०० होते. त्याने कपड्यांसाठी ₹३,८४० खर्च केले, तर त्याच्याकडे किती रुपये शिल्लक राहिले?',
      Hindi: 'रमेश के पास ₹७,५०० थे। उसने ₹३,८४० के कपड़े खरीदे। कितने रुपये बचे?',
      Urdu: 'Ramesh had ₹7,500. He spent ₹3,840 on clothes. How much money is left?',
      Gujarati: 'रमेश के पास ₹७,५०० थे। उसने ₹३,८४० के कपड़े खरीदे। कितने रुपये बचे?',
      Telugu: 'Ramesh had ₹7,500. He spent ₹3,840 on clothes. How much money is left?',
      Kannada: 'Ramesh had ₹7,500. He spent ₹3,840 on clothes. How much money is left?'
    },
    options: {
      English: ['₹3,760', '₹3,660', '₹4,660', '₹3,560'],
      Marathi: ['₹३,७६०', '₹३,६६०', '₹४,६६०', '₹३,५६०'],
      Hindi: ['₹३,७६०', '₹३,६६०', '₹४,६६०', '₹३,५६०'],
      Urdu: ['₹3,760', '₹3,660', '₹4,660', '₹3,560'],
      Gujarati: ['₹३,७६०', '₹३,६६०', '₹४,६६०', '₹३,५६०'],
      Telugu: ['₹3,760', '₹3,660', '₹4,660', '₹3,560'],
      Kannada: ['₹3,760', '₹3,660', '₹4,660', '₹3,560']
    },
    correctIndex: 1,
    explanation: {
      English: '7500 - 3840 = ₹3660.',
      Marathi: '७५०० - ३८४० = ₹३६६०.',
      Hindi: '७५०० - ३८४० = ₹३६६०।',
      Urdu: '7500 - 3840 = ₹3660.',
      Gujarati: '७५०० - ३८४० = ₹३६६०।',
      Telugu: '7500 - 3840 = ₹3660.',
      Kannada: '7500 - 3840 = ₹3660.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q10',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'One crate holds 36 mangoes. How many mangoes are in 15 crates?',
      Marathi: 'एका पेटीत ३६ आंबे मावतात, तर अशा १५ पेट्यांमध्ये एकूण किती आंबे मावतील?',
      Hindi: 'एक पेटी में ३६ आम आते हैं, तो १५ पेटियों में कुल कितने आम होंगे?',
      Urdu: 'One crate holds 36 mangoes. How many mangoes are in 15 crates?',
      Gujarati: 'एक पेटी में ३६ आम आते हैं, तो १५ पेटियों में कुल कितने आम होंगे?',
      Telugu: 'One crate holds 36 mangoes. How many mangoes are in 15 crates?',
      Kannada: 'One crate holds 36 mangoes. How many mangoes are in 15 crates?'
    },
    options: {
      English: ['540', '520', '480', '560'],
      Marathi: ['५४०', '५२०', '४८०', '५६०'],
      Hindi: ['५४०', '५२०', '४८०', '५६०'],
      Urdu: ['540', '520', '480', '560'],
      Gujarati: ['५४०', '५२०', '४८०', '५६०'],
      Telugu: ['540', '520', '480', '560'],
      Kannada: ['540', '520', '480', '560']
    },
    correctIndex: 0,
    explanation: {
      English: '36 × 15 = 540 mangoes.',
      Marathi: '३६ × १५ = ५४० आंबे.',
      Hindi: '३६ × १५ = ५४० आम।',
      Urdu: '36 × 15 = 540 mangoes.',
      Gujarati: '३६ × १५ = ५४० आम।',
      Telugu: '36 × 15 = 540 mangoes.',
      Kannada: '36 × 15 = 540 mangoes.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q11',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'division',
    questionText: {
      English: 'If ₹936 is divided equally among 8 children, how much does each child get?',
      Marathi: '₹९३६ हे ८ मुलांमध्ये समान वाटल्यास प्रत्येकाला किती रुपये मिळतील?',
      Hindi: 'यदि ₹९३६ को ८ बच्चों में बराबर बांटा जाए, तो प्रत्येक को कितने रुपये मिलेंगे?',
      Urdu: 'If ₹936 is divided equally among 8 children, how much does each child get?',
      Gujarati: 'यदि ₹९३६ को ८ बच्चों में बराबर बांटा जाए, तो प्रत्येक को कितने रुपये मिलेंगे?',
      Telugu: 'If ₹936 is divided equally among 8 children, how much does each child get?',
      Kannada: 'If ₹936 is divided equally among 8 children, how much does each child get?'
    },
    options: {
      English: ['₹112', '₹120', '₹115', '₹117'],
      Marathi: ['₹११२', '₹१२०', '₹११५', '₹११७'],
      Hindi: ['₹११२', '₹१२०', '₹११५', '₹११७'],
      Urdu: ['₹112', '₹120', '₹115', '₹117'],
      Gujarati: ['₹११२', '₹१२०', '₹११५', '₹११७'],
      Telugu: ['₹112', '₹120', '₹115', '₹117'],
      Kannada: ['₹112', '₹120', '₹115', '₹117']
    },
    correctIndex: 3,
    explanation: {
      English: '936 ÷ 8 = ₹117.',
      Marathi: '९३६ ÷ ८ = ₹११७.',
      Hindi: '९३६ ÷ ८ = ₹११७।',
      Urdu: '936 ÷ 8 = ₹117.',
      Gujarati: '९३६ ÷ ८ = ₹११७।',
      Telugu: '936 ÷ 8 = ₹117.',
      Kannada: '936 ÷ 8 = ₹117.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q12',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'Which fraction is equivalent to 2/5?',
      Marathi: '२/५ या अपूर्णांकाशी सममूल्य अपूर्णांक कोणता?',
      Hindi: '२/५ के समतुल्य भिन्न कौन सी है?',
      Urdu: 'Which fraction is equivalent to 2/5?',
      Gujarati: '२/५ के समतुल्य भिन्न कौन सी है?',
      Telugu: 'Which fraction is equivalent to 2/5?',
      Kannada: 'Which fraction is equivalent to 2/5?'
    },
    options: {
      English: ['4/15', '6/15', '5/10', '4/12'],
      Marathi: ['४/१५', '६/१५', '५/१०', '४/१२'],
      Hindi: ['४/१५', '६/१५', '५/१०', '४/१२'],
      Urdu: ['4/15', '6/15', '5/10', '4/12'],
      Gujarati: ['४/१५', '६/१५', '५/१०', '४/१२'],
      Telugu: ['4/15', '6/15', '5/10', '4/12'],
      Kannada: ['4/15', '6/15', '5/10', '4/12']
    },
    correctIndex: 1,
    explanation: {
      English: 'Multiply numerator and denominator by 3: (2×3)/(5×3) = 6/15.',
      Marathi: 'अंश व छेदाला ३ ने गुणल्यास: (२×३)/(५×३) = ६/१५.',
      Hindi: 'अंश और हर को ३ से गुणा करने पर: ६/१५।',
      Urdu: 'Multiply numerator and denominator by 3: (2×3)/(5×3) = 6/15.',
      Gujarati: 'अंश और हर को ३ से गुणा करने पर: ६/१५।',
      Telugu: 'Multiply numerator and denominator by 3: (2×3)/(5×3) = 6/15.',
      Kannada: 'Multiply numerator and denominator by 3: (2×3)/(5×3) = 6/15.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q13',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'measurement',
    questionText: {
      English: 'Add: 2 kg 450 g and 3 kg 750 g:',
      Marathi: 'बेरीज करा: २ किग्रॅ ४५० ग्रॅम + ३ किग्रॅ ७५० ग्रॅम:',
      Hindi: 'जोड़ें: २ किग्रा ४५० ग्राम + ३ किग्रा ७५० ग्राम:',
      Urdu: 'Add: 2 kg 450 g and 3 kg 750 g:',
      Gujarati: 'जोड़ें: २ किग्रा ४५० ग्राम + ३ किग्रा ७५० ग्राम:',
      Telugu: 'Add: 2 kg 450 g and 3 kg 750 g:',
      Kannada: 'Add: 2 kg 450 g and 3 kg 750 g:'
    },
    options: {
      English: ['6 kg 200 g', '5 kg 200 g', '6 kg 100 g', '5 kg 800 g'],
      Marathi: ['६ किग्रॅ २०० ग्रॅ', '५ किग्रॅ २०० ग्रॅ', '६ किग्रॅ १०० ग्रॅ', '५ किग्रॅ ८०० ग्रॅ'],
      Hindi: ['६ किग्रा २०० ग्राम', '५ किग्रा २०० ग्राम', '६ किग्रा १०० ग्राम', '५ किग्रा ८०० ग्राम'],
      Urdu: ['6 kg 200 g', '5 kg 200 g', '6 kg 100 g', '5 kg 800 g'],
      Gujarati: ['६ किग्रा २०० ग्राम', '५ किग्रा २०० ग्राम', '६ किग्रा १०० ग्राम', '५ किग्रा ८०० ग्राम'],
      Telugu: ['6 kg 200 g', '5 kg 200 g', '6 kg 100 g', '5 kg 800 g'],
      Kannada: ['6 kg 200 g', '5 kg 200 g', '6 kg 100 g', '5 kg 800 g']
    },
    correctIndex: 0,
    explanation: {
      English: '450 g + 750 g = 1200 g = 1 kg 200 g. 2 + 3 + 1 = 6 kg 200 g.',
      Marathi: '४५० ग्रॅ + ७५० ग्रॅ = १२५० ग्रॅ = १ किग्रॅ २०० ग्रॅ. एकूण ६ किग्रॅ २०० ग्रॅ.',
      Hindi: '६ किग्रा २०० ग्राम।',
      Urdu: '450 g + 750 g = 1200 g = 1 kg 200 g. 2 + 3 + 1 = 6 kg 200 g.',
      Gujarati: '६ किग्रा २०० ग्राम।',
      Telugu: '450 g + 750 g = 1200 g = 1 kg 200 g. 2 + 3 + 1 = 6 kg 200 g.',
      Kannada: '450 g + 750 g = 1200 g = 1 kg 200 g. 2 + 3 + 1 = 6 kg 200 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q14',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'A rectangle has length 14 cm and breadth 8 cm. What is its perimeter?',
      Marathi: 'एका आयताची लांबी १४ सेमी व रुंदी ८ सेमी आहे, तर त्याची परिमिती किती?',
      Hindi: 'एक आयत की लंबाई १४ सेमी और चौड़ाई ८ सेमी है, परिमाप ज्ञात करें:',
      Urdu: 'A rectangle has length 14 cm and breadth 8 cm. What is its perimeter?',
      Gujarati: 'एक आयत की लंबाई १४ सेमी और चौड़ाई ८ सेमी है, परिमाप ज्ञात करें:',
      Telugu: 'A rectangle has length 14 cm and breadth 8 cm. What is its perimeter?',
      Kannada: 'A rectangle has length 14 cm and breadth 8 cm. What is its perimeter?'
    },
    options: {
      English: ['22 cm', '112 cm', '44 cm', '48 cm'],
      Marathi: ['२२ सेमी', '११२ सेमी', '४४ सेमी', '४८ सेमी'],
      Hindi: ['२२ सेमी', '११२ सेमी', '४४ सेमी', '४८ सेमी'],
      Urdu: ['22 cm', '112 cm', '44 cm', '48 cm'],
      Gujarati: ['२२ सेमी', '११२ सेमी', '४४ सेमी', '४८ सेमी'],
      Telugu: ['22 cm', '112 cm', '44 cm', '48 cm'],
      Kannada: ['22 cm', '112 cm', '44 cm', '48 cm']
    },
    correctIndex: 2,
    explanation: {
      English: 'Perimeter = 2 × (14 + 8) = 2 × 22 = 44 cm.',
      Marathi: 'आयताची परिमिती = २ × (१४ + ८) = २ × २२ = ४४ सेमी.',
      Hindi: '२ × (१४ + ८) = ४४ सेमी।',
      Urdu: 'Perimeter = 2 × (14 + 8) = 2 × 22 = 44 cm.',
      Gujarati: '२ × (१४ + ८) = ४४ सेमी।',
      Telugu: 'Perimeter = 2 × (14 + 8) = 2 × 22 = 44 cm.',
      Kannada: 'Perimeter = 2 × (14 + 8) = 2 × 22 = 44 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q15',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'A film starts at 02:15 PM and ends at 05:00 PM. What is the duration?',
      Marathi: 'एक चित्रपट दुपारी ०२:१५ वाजता सुरू होऊन ०५:०० वाजता संपतो, तर चित्रपटाचा वेळ किती?',
      Hindi: 'एक फिल्म दोपहर ०२:१५ बजे शुरू होकर ०५:०० बजे समाप्त होती है, अवधि क्या है?',
      Urdu: 'A film starts at 02:15 PM and ends at 05:00 PM. What is the duration?',
      Gujarati: 'एक फिल्म दोपहर ०२:१५ बजे शुरू होकर ०५:०० बजे समाप्त होती है, अवधि क्या है?',
      Telugu: 'A film starts at 02:15 PM and ends at 05:00 PM. What is the duration?',
      Kannada: 'A film starts at 02:15 PM and ends at 05:00 PM. What is the duration?'
    },
    options: {
      English: ['3 hours 15 mins', '2 hours 45 mins', '2 hours 15 mins', '3 hours 45 mins'],
      Marathi: ['३ तास १५ मिनिटे', '२ तास ४५ मिनिटे', '२ तास १५ मिनिटे', '३ तास ४५ मिनिटे'],
      Hindi: ['३ घंटे १५ मिनट', '२ घंटे ४५ मिनट', '२ घंटे १५ मिनट', '३ घंटे ४५ मिनट'],
      Urdu: ['3 hours 15 mins', '2 hours 45 mins', '2 hours 15 mins', '3 hours 45 mins'],
      Gujarati: ['३ घंटे १५ मिनट', '२ घंटे ४५ मिनट', '२ घंटे १५ मिनट', '३ घंटे ४५ मिनट'],
      Telugu: ['3 hours 15 mins', '2 hours 45 mins', '2 hours 15 mins', '3 hours 45 mins'],
      Kannada: ['3 hours 15 mins', '2 hours 45 mins', '2 hours 15 mins', '3 hours 45 mins']
    },
    correctIndex: 1,
    explanation: {
      English: 'From 2:15 to 5:00 is 2 hours 45 minutes.',
      Marathi: '२:१५ ते ५:०० दरम्यान २ तास ४५ मिनिटे वेळ लागतो.',
      Hindi: '२ घंटे ४५ मिनट सही है।',
      Urdu: 'From 2:15 to 5:00 is 2 hours 45 minutes.',
      Gujarati: '२ घंटे ४५ मिनट सही है।',
      Telugu: 'From 2:15 to 5:00 is 2 hours 45 minutes.',
      Kannada: 'From 2:15 to 5:00 is 2 hours 45 minutes.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q6',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 33457, what is the place value of digit 3?',
      Marathi: '33457 या संख्येत 3 या अंकाची स्थानिक किंमत किती?',
      Hindi: '33457 में 3 का स्थानीय मान क्या है?',
      Urdu: 'In the number 33457, what is the place value of digit 3?',
      Gujarati: '33457 में 3 का स्थानीय मान क्या है?',
      Telugu: 'In the number 33457, what is the place value of digit 3?',
      Kannada: 'In the number 33457, what is the place value of digit 3?'
    },
    options: {
      English: ['3000', '30000', '300', '3'],
      Marathi: ['3000', '30000', '300', '3'],
      Hindi: ['3000', '30000', '300', '3'],
      Urdu: ['3000', '30000', '300', '3'],
      Gujarati: ['3000', '30000', '300', '3'],
      Telugu: ['3000', '30000', '300', '3'],
      Kannada: ['3000', '30000', '300', '3']
    },
    correctIndex: 3,
    explanation: {
      English: 'Digit 3 is in the specified place.',
      Marathi: '3 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 3 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 3 is in the specified place.',
      Kannada: 'Digit 3 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q7',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 3 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 3 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 3 =',
      Urdu: 'Calculate the Roman numeral value: XX + 3 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 3 =',
      Telugu: 'Calculate the Roman numeral value: XX + 3 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 3 in Roman:'
    },
    options: {
      English: ['XXIII', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXIII', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXIII', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXIII', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXIII', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXIII', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXIII', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 0,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q8',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 3750 + 1920:',
      Marathi: 'बेरीज करा: 3750 + 1920:',
      Hindi: 'जोड़ें: 3750 + 1920:',
      Urdu: 'Add: 3750 + 1920:',
      Gujarati: 'जोड़ें: 3750 + 1920:',
      Telugu: 'Add: 3750 + 1920:',
      Kannada: 'Add: 3750 + 1920:'
    },
    options: {
      English: ['5670', '5570', '5720', '5620'],
      Marathi: ['5670', '5570', '5720', '5620'],
      Hindi: ['5670', '5570', '5720', '5620'],
      Urdu: ['5670', '5570', '5720', '5620'],
      Gujarati: ['5670', '5570', '5720', '5620'],
      Telugu: ['5670', '5570', '5720', '5620'],
      Kannada: ['5670', '5570', '5720', '5620']
    },
    correctIndex: 1,
    explanation: {
      English: '3750 + 1920 = 5670.',
      Marathi: '3750 + 1920 = 5670.',
      Hindi: 'योग 5670 है।',
      Urdu: '3750 + 1920 = 5670.',
      Gujarati: 'योग 5670 है।',
      Telugu: '3750 + 1920 = 5670.',
      Kannada: '3750 + 1920 = 5670.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q9',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 3000 - 1095:',
      Marathi: 'वजाबाकी करा: 3000 - 1095:',
      Hindi: 'घटाएं: 3000 - 1095:',
      Urdu: 'Subtract: 3000 - 1095:',
      Gujarati: 'घटाएं: 3000 - 1095:',
      Telugu: 'Subtract: 3000 - 1095:',
      Kannada: 'Subtract: 3000 - 1095:'
    },
    options: {
      English: ['1895', '1905', '1925', '1875'],
      Marathi: ['1895', '1905', '1925', '1875'],
      Hindi: ['1895', '1905', '1925', '1875'],
      Urdu: ['1895', '1905', '1925', '1875'],
      Gujarati: ['1895', '1905', '1925', '1875'],
      Telugu: ['1895', '1905', '1925', '1875'],
      Kannada: ['1895', '1905', '1925', '1875']
    },
    correctIndex: 2,
    explanation: {
      English: 'Difference is 1905.',
      Marathi: 'फरक 1905 येतो.',
      Hindi: 'अंतर 1905 है।',
      Urdu: 'Difference is 1905.',
      Gujarati: 'अंतर 1905 है।',
      Telugu: 'Difference is 1905.',
      Kannada: 'Difference is 1905.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q10',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 45 × 7:',
      Marathi: 'गुणाकार करा: 45 × 7:',
      Hindi: 'गुणा करें: 45 × 7:',
      Urdu: 'Calculate: 45 × 7:',
      Gujarati: 'गुणा करें: 45 × 7:',
      Telugu: 'Calculate: 45 × 7:',
      Kannada: 'Calculate: 45 × 7:'
    },
    options: {
      English: ['315', '295', '345', '300'],
      Marathi: ['315', '295', '345', '300'],
      Hindi: ['315', '295', '345', '300'],
      Urdu: ['315', '295', '345', '300'],
      Gujarati: ['315', '295', '345', '300'],
      Telugu: ['315', '295', '345', '300'],
      Kannada: ['315', '295', '345', '300']
    },
    correctIndex: 3,
    explanation: {
      English: 'Product is 315.',
      Marathi: 'गुणाकार 315 येतो.',
      Hindi: 'गुणनफल 315 है।',
      Urdu: 'Product is 315.',
      Gujarati: 'गुणनफल 315 है।',
      Telugu: 'Product is 315.',
      Kannada: 'Product is 315.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q11',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 221 by 8. Find remainder:',
      Marathi: '221 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '221 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 221 by 8. Find remainder:',
      Gujarati: '221 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 221 by 8. Find remainder:',
      Kannada: 'Divide 221 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 0,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q12',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/3 of 72?',
      Marathi: '72 चा १/3 भाग म्हणजे किती?',
      Hindi: '72 का १/3 भाग क्या होगा?',
      Urdu: 'What is 1/3 of 72?',
      Gujarati: '72 का १/3 भाग क्या होगा?',
      Telugu: 'What is 1/3 of 72?',
      Kannada: 'What is 1/3 of 72?'
    },
    options: {
      English: ['24', '26', '22', '30'],
      Marathi: ['24', '26', '22', '30'],
      Hindi: ['24', '26', '22', '30'],
      Urdu: ['24', '26', '22', '30'],
      Gujarati: ['24', '26', '22', '30'],
      Telugu: ['24', '26', '22', '30'],
      Kannada: ['24', '26', '22', '30']
    },
    correctIndex: 1,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q13',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 3 kg 150 g into grams:',
      Marathi: '3 किग्रॅ 150 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '3 किग्रा 150 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 3 kg 150 g into grams:',
      Gujarati: '3 किग्रा 150 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 3 kg 150 g into grams:',
      Kannada: 'Convert 3 kg 150 g into grams:'
    },
    options: {
      English: ['3150 g', '450 g', '3003 g', '1500 g'],
      Marathi: ['3150 ग्रॅ', '450 ग्रॅ', '3003 ग्रॅ', '1500 ग्रॅ'],
      Hindi: ['3150 ग्राम', '450 ग्राम', '3003 ग्राम', '1500 ग्राम'],
      Urdu: ['3150 g', '450 g', '3003 g', '1500 g'],
      Gujarati: ['3150 ग्राम', '450 ग्राम', '3003 ग्राम', '1500 ग्राम'],
      Telugu: ['3150 g', '450 g', '3003 g', '1500 g'],
      Kannada: ['3150 g', '450 g', '3003 g', '1500 g']
    },
    correctIndex: 2,
    explanation: {
      English: '1 kg = 1000 g. Total = 3150 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 3150 ग्रॅम.',
      Hindi: '3150 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 3150 g.',
      Gujarati: '3150 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 3150 g.',
      Kannada: '1 kg = 1000 g. Total = 3150 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q14',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 9 cm:',
      Marathi: '9 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '9 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 9 cm:',
      Gujarati: '9 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 9 cm:',
      Kannada: 'Find perimeter of square with side 9 cm:'
    },
    options: {
      English: ['36 cm', '18 cm', '81 cm', '40 cm'],
      Marathi: ['36 सेमी', '18 सेमी', '81 सेमी', '40 सेमी'],
      Hindi: ['36 सेमी', '18 सेमी', '81 सेमी', '40 सेमी'],
      Urdu: ['36 cm', '18 cm', '81 cm', '40 cm'],
      Gujarati: ['36 सेमी', '18 सेमी', '81 सेमी', '40 सेमी'],
      Telugu: ['36 cm', '18 cm', '81 cm', '40 cm'],
      Kannada: ['36 cm', '18 cm', '81 cm', '40 cm']
    },
    correctIndex: 3,
    explanation: {
      English: '4 × (9) = 36 cm.',
      Marathi: '४ × (9) = 36 सेमी.',
      Hindi: '४ × (9) = 36 सेमी।',
      Urdu: '4 × (9) = 36 cm.',
      Gujarati: '४ × (9) = 36 सेमी।',
      Telugu: '4 × (9) = 36 cm.',
      Kannada: '4 × (9) = 36 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q15',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 3 hours into minutes:',
      Marathi: '3 तास म्हणजे किती मिनिटे?',
      Hindi: '3 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 3 hours into minutes:',
      Gujarati: '3 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 3 hours into minutes:',
      Kannada: 'Convert 3 hours into minutes:'
    },
    options: {
      English: ['180 mins', '150 mins', '300 mins', '72 mins'],
      Marathi: ['180 मिनिटे', '150 मिनिटे', '300 मिनिटे', '72 मिनिटे'],
      Hindi: ['180 मिनट', '150 मिनट', '300 मिनट', '72 मिनट'],
      Urdu: ['180 mins', '150 mins', '300 mins', '72 mins'],
      Gujarati: ['180 मिनट', '150 मिनट', '300 मिनट', '72 मिनट'],
      Telugu: ['180 mins', '150 mins', '300 mins', '72 mins'],
      Kannada: ['180 mins', '150 mins', '300 mins', '72 mins']
    },
    correctIndex: 0,
    explanation: {
      English: '1 hour = 60 mins. 3 × 60 = 180 mins.',
      Marathi: '१ तास = ६० मिनिटे. 3 × ६० = 180 मिनिटे.',
      Hindi: '180 मिनट।',
      Urdu: '1 hour = 60 mins. 3 × 60 = 180 mins.',
      Gujarati: '180 मिनट।',
      Telugu: '1 hour = 60 mins. 3 × 60 = 180 mins.',
      Kannada: '1 hour = 60 mins. 3 × 60 = 180 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q6',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 43457, what is the place value of digit 4?',
      Marathi: '43457 या संख्येत 4 या अंकाची स्थानिक किंमत किती?',
      Hindi: '43457 में 4 का स्थानीय मान क्या है?',
      Urdu: 'In the number 43457, what is the place value of digit 4?',
      Gujarati: '43457 में 4 का स्थानीय मान क्या है?',
      Telugu: 'In the number 43457, what is the place value of digit 4?',
      Kannada: 'In the number 43457, what is the place value of digit 4?'
    },
    options: {
      English: ['4000', '40000', '400', '4'],
      Marathi: ['4000', '40000', '400', '4'],
      Hindi: ['4000', '40000', '400', '4'],
      Urdu: ['4000', '40000', '400', '4'],
      Gujarati: ['4000', '40000', '400', '4'],
      Telugu: ['4000', '40000', '400', '4'],
      Kannada: ['4000', '40000', '400', '4']
    },
    correctIndex: 0,
    explanation: {
      English: 'Digit 4 is in the specified place.',
      Marathi: '4 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 4 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 4 is in the specified place.',
      Kannada: 'Digit 4 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q7',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 4 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 4 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 4 =',
      Urdu: 'Calculate the Roman numeral value: XX + 4 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 4 =',
      Telugu: 'Calculate the Roman numeral value: XX + 4 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 4 in Roman:'
    },
    options: {
      English: ['XXIV', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXIV', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXIV', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXIV', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXIV', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXIV', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXIV', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 1,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q8',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 5000 + 2560:',
      Marathi: 'बेरीज करा: 5000 + 2560:',
      Hindi: 'जोड़ें: 5000 + 2560:',
      Urdu: 'Add: 5000 + 2560:',
      Gujarati: 'जोड़ें: 5000 + 2560:',
      Telugu: 'Add: 5000 + 2560:',
      Kannada: 'Add: 5000 + 2560:'
    },
    options: {
      English: ['7560', '7460', '7610', '7510'],
      Marathi: ['7560', '7460', '7610', '7510'],
      Hindi: ['7560', '7460', '7610', '7510'],
      Urdu: ['7560', '7460', '7610', '7510'],
      Gujarati: ['7560', '7460', '7610', '7510'],
      Telugu: ['7560', '7460', '7610', '7510'],
      Kannada: ['7560', '7460', '7610', '7510']
    },
    correctIndex: 2,
    explanation: {
      English: '5000 + 2560 = 7560.',
      Marathi: '5000 + 2560 = 7560.',
      Hindi: 'योग 7560 है।',
      Urdu: '5000 + 2560 = 7560.',
      Gujarati: 'योग 7560 है।',
      Telugu: '5000 + 2560 = 7560.',
      Kannada: '5000 + 2560 = 7560.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q9',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 4000 - 1460:',
      Marathi: 'वजाबाकी करा: 4000 - 1460:',
      Hindi: 'घटाएं: 4000 - 1460:',
      Urdu: 'Subtract: 4000 - 1460:',
      Gujarati: 'घटाएं: 4000 - 1460:',
      Telugu: 'Subtract: 4000 - 1460:',
      Kannada: 'Subtract: 4000 - 1460:'
    },
    options: {
      English: ['2530', '2540', '2560', '2510'],
      Marathi: ['2530', '2540', '2560', '2510'],
      Hindi: ['2530', '2540', '2560', '2510'],
      Urdu: ['2530', '2540', '2560', '2510'],
      Gujarati: ['2530', '2540', '2560', '2510'],
      Telugu: ['2530', '2540', '2560', '2510'],
      Kannada: ['2530', '2540', '2560', '2510']
    },
    correctIndex: 3,
    explanation: {
      English: 'Difference is 2540.',
      Marathi: 'फरक 2540 येतो.',
      Hindi: 'अंतर 2540 है।',
      Urdu: 'Difference is 2540.',
      Gujarati: 'अंतर 2540 है।',
      Telugu: 'Difference is 2540.',
      Kannada: 'Difference is 2540.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q10',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 60 × 8:',
      Marathi: 'गुणाकार करा: 60 × 8:',
      Hindi: 'गुणा करें: 60 × 8:',
      Urdu: 'Calculate: 60 × 8:',
      Gujarati: 'गुणा करें: 60 × 8:',
      Telugu: 'Calculate: 60 × 8:',
      Kannada: 'Calculate: 60 × 8:'
    },
    options: {
      English: ['480', '460', '510', '465'],
      Marathi: ['480', '460', '510', '465'],
      Hindi: ['480', '460', '510', '465'],
      Urdu: ['480', '460', '510', '465'],
      Gujarati: ['480', '460', '510', '465'],
      Telugu: ['480', '460', '510', '465'],
      Kannada: ['480', '460', '510', '465']
    },
    correctIndex: 0,
    explanation: {
      English: 'Product is 480.',
      Marathi: 'गुणाकार 480 येतो.',
      Hindi: 'गुणनफल 480 है।',
      Urdu: 'Product is 480.',
      Gujarati: 'गुणनफल 480 है।',
      Telugu: 'Product is 480.',
      Kannada: 'Product is 480.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q11',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 293 by 8. Find remainder:',
      Marathi: '293 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '293 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 293 by 8. Find remainder:',
      Gujarati: '293 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 293 by 8. Find remainder:',
      Kannada: 'Divide 293 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 1,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q12',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/4 of 96?',
      Marathi: '96 चा १/4 भाग म्हणजे किती?',
      Hindi: '96 का १/4 भाग क्या होगा?',
      Urdu: 'What is 1/4 of 96?',
      Gujarati: '96 का १/4 भाग क्या होगा?',
      Telugu: 'What is 1/4 of 96?',
      Kannada: 'What is 1/4 of 96?'
    },
    options: {
      English: ['24', '26', '22', '40'],
      Marathi: ['24', '26', '22', '40'],
      Hindi: ['24', '26', '22', '40'],
      Urdu: ['24', '26', '22', '40'],
      Gujarati: ['24', '26', '22', '40'],
      Telugu: ['24', '26', '22', '40'],
      Kannada: ['24', '26', '22', '40']
    },
    correctIndex: 2,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q13',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 4 kg 200 g into grams:',
      Marathi: '4 किग्रॅ 200 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '4 किग्रा 200 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 4 kg 200 g into grams:',
      Gujarati: '4 किग्रा 200 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 4 kg 200 g into grams:',
      Kannada: 'Convert 4 kg 200 g into grams:'
    },
    options: {
      English: ['4200 g', '600 g', '4004 g', '2000 g'],
      Marathi: ['4200 ग्रॅ', '600 ग्रॅ', '4004 ग्रॅ', '2000 ग्रॅ'],
      Hindi: ['4200 ग्राम', '600 ग्राम', '4004 ग्राम', '2000 ग्राम'],
      Urdu: ['4200 g', '600 g', '4004 g', '2000 g'],
      Gujarati: ['4200 ग्राम', '600 ग्राम', '4004 ग्राम', '2000 ग्राम'],
      Telugu: ['4200 g', '600 g', '4004 g', '2000 g'],
      Kannada: ['4200 g', '600 g', '4004 g', '2000 g']
    },
    correctIndex: 3,
    explanation: {
      English: '1 kg = 1000 g. Total = 4200 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 4200 ग्रॅम.',
      Hindi: '4200 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 4200 g.',
      Gujarati: '4200 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 4200 g.',
      Kannada: '1 kg = 1000 g. Total = 4200 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q14',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 10 cm:',
      Marathi: '10 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '10 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 10 cm:',
      Gujarati: '10 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 10 cm:',
      Kannada: 'Find perimeter of square with side 10 cm:'
    },
    options: {
      English: ['40 cm', '20 cm', '100 cm', '44 cm'],
      Marathi: ['40 सेमी', '20 सेमी', '100 सेमी', '44 सेमी'],
      Hindi: ['40 सेमी', '20 सेमी', '100 सेमी', '44 सेमी'],
      Urdu: ['40 cm', '20 cm', '100 cm', '44 cm'],
      Gujarati: ['40 सेमी', '20 सेमी', '100 सेमी', '44 सेमी'],
      Telugu: ['40 cm', '20 cm', '100 cm', '44 cm'],
      Kannada: ['40 cm', '20 cm', '100 cm', '44 cm']
    },
    correctIndex: 0,
    explanation: {
      English: '4 × (10) = 40 cm.',
      Marathi: '४ × (10) = 40 सेमी.',
      Hindi: '४ × (10) = 40 सेमी।',
      Urdu: '4 × (10) = 40 cm.',
      Gujarati: '४ × (10) = 40 सेमी।',
      Telugu: '4 × (10) = 40 cm.',
      Kannada: '4 × (10) = 40 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q15',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 4 hours into minutes:',
      Marathi: '4 तास म्हणजे किती मिनिटे?',
      Hindi: '4 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 4 hours into minutes:',
      Gujarati: '4 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 4 hours into minutes:',
      Kannada: 'Convert 4 hours into minutes:'
    },
    options: {
      English: ['240 mins', '200 mins', '400 mins', '96 mins'],
      Marathi: ['240 मिनिटे', '200 मिनिटे', '400 मिनिटे', '96 मिनिटे'],
      Hindi: ['240 मिनट', '200 मिनट', '400 मिनट', '96 मिनट'],
      Urdu: ['240 mins', '200 mins', '400 mins', '96 mins'],
      Gujarati: ['240 मिनट', '200 मिनट', '400 मिनट', '96 मिनट'],
      Telugu: ['240 mins', '200 mins', '400 mins', '96 mins'],
      Kannada: ['240 mins', '200 mins', '400 mins', '96 mins']
    },
    correctIndex: 1,
    explanation: {
      English: '1 hour = 60 mins. 4 × 60 = 240 mins.',
      Marathi: '१ तास = ६० मिनिटे. 4 × ६० = 240 मिनिटे.',
      Hindi: '240 मिनट।',
      Urdu: '1 hour = 60 mins. 4 × 60 = 240 mins.',
      Gujarati: '240 मिनट।',
      Telugu: '1 hour = 60 mins. 4 × 60 = 240 mins.',
      Kannada: '1 hour = 60 mins. 4 × 60 = 240 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q6',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 53457, what is the place value of digit 5?',
      Marathi: '53457 या संख्येत 5 या अंकाची स्थानिक किंमत किती?',
      Hindi: '53457 में 5 का स्थानीय मान क्या है?',
      Urdu: 'In the number 53457, what is the place value of digit 5?',
      Gujarati: '53457 में 5 का स्थानीय मान क्या है?',
      Telugu: 'In the number 53457, what is the place value of digit 5?',
      Kannada: 'In the number 53457, what is the place value of digit 5?'
    },
    options: {
      English: ['5000', '50000', '500', '5'],
      Marathi: ['5000', '50000', '500', '5'],
      Hindi: ['5000', '50000', '500', '5'],
      Urdu: ['5000', '50000', '500', '5'],
      Gujarati: ['5000', '50000', '500', '5'],
      Telugu: ['5000', '50000', '500', '5'],
      Kannada: ['5000', '50000', '500', '5']
    },
    correctIndex: 1,
    explanation: {
      English: 'Digit 5 is in the specified place.',
      Marathi: '5 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 5 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 5 is in the specified place.',
      Kannada: 'Digit 5 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q7',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 5 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 5 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 5 =',
      Urdu: 'Calculate the Roman numeral value: XX + 5 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 5 =',
      Telugu: 'Calculate the Roman numeral value: XX + 5 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 5 in Roman:'
    },
    options: {
      English: ['XXV', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXV', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXV', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXV', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXV', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXV', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXV', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 2,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q8',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 6250 + 3200:',
      Marathi: 'बेरीज करा: 6250 + 3200:',
      Hindi: 'जोड़ें: 6250 + 3200:',
      Urdu: 'Add: 6250 + 3200:',
      Gujarati: 'जोड़ें: 6250 + 3200:',
      Telugu: 'Add: 6250 + 3200:',
      Kannada: 'Add: 6250 + 3200:'
    },
    options: {
      English: ['9450', '9350', '9500', '9400'],
      Marathi: ['9450', '9350', '9500', '9400'],
      Hindi: ['9450', '9350', '9500', '9400'],
      Urdu: ['9450', '9350', '9500', '9400'],
      Gujarati: ['9450', '9350', '9500', '9400'],
      Telugu: ['9450', '9350', '9500', '9400'],
      Kannada: ['9450', '9350', '9500', '9400']
    },
    correctIndex: 3,
    explanation: {
      English: '6250 + 3200 = 9450.',
      Marathi: '6250 + 3200 = 9450.',
      Hindi: 'योग 9450 है।',
      Urdu: '6250 + 3200 = 9450.',
      Gujarati: 'योग 9450 है।',
      Telugu: '6250 + 3200 = 9450.',
      Kannada: '6250 + 3200 = 9450.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q9',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 5000 - 1825:',
      Marathi: 'वजाबाकी करा: 5000 - 1825:',
      Hindi: 'घटाएं: 5000 - 1825:',
      Urdu: 'Subtract: 5000 - 1825:',
      Gujarati: 'घटाएं: 5000 - 1825:',
      Telugu: 'Subtract: 5000 - 1825:',
      Kannada: 'Subtract: 5000 - 1825:'
    },
    options: {
      English: ['3165', '3175', '3195', '3145'],
      Marathi: ['3165', '3175', '3195', '3145'],
      Hindi: ['3165', '3175', '3195', '3145'],
      Urdu: ['3165', '3175', '3195', '3145'],
      Gujarati: ['3165', '3175', '3195', '3145'],
      Telugu: ['3165', '3175', '3195', '3145'],
      Kannada: ['3165', '3175', '3195', '3145']
    },
    correctIndex: 0,
    explanation: {
      English: 'Difference is 3175.',
      Marathi: 'फरक 3175 येतो.',
      Hindi: 'अंतर 3175 है।',
      Urdu: 'Difference is 3175.',
      Gujarati: 'अंतर 3175 है।',
      Telugu: 'Difference is 3175.',
      Kannada: 'Difference is 3175.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q10',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 75 × 9:',
      Marathi: 'गुणाकार करा: 75 × 9:',
      Hindi: 'गुणा करें: 75 × 9:',
      Urdu: 'Calculate: 75 × 9:',
      Gujarati: 'गुणा करें: 75 × 9:',
      Telugu: 'Calculate: 75 × 9:',
      Kannada: 'Calculate: 75 × 9:'
    },
    options: {
      English: ['675', '655', '705', '660'],
      Marathi: ['675', '655', '705', '660'],
      Hindi: ['675', '655', '705', '660'],
      Urdu: ['675', '655', '705', '660'],
      Gujarati: ['675', '655', '705', '660'],
      Telugu: ['675', '655', '705', '660'],
      Kannada: ['675', '655', '705', '660']
    },
    correctIndex: 1,
    explanation: {
      English: 'Product is 675.',
      Marathi: 'गुणाकार 675 येतो.',
      Hindi: 'गुणनफल 675 है।',
      Urdu: 'Product is 675.',
      Gujarati: 'गुणनफल 675 है।',
      Telugu: 'Product is 675.',
      Kannada: 'Product is 675.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q11',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 365 by 8. Find remainder:',
      Marathi: '365 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '365 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 365 by 8. Find remainder:',
      Gujarati: '365 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 365 by 8. Find remainder:',
      Kannada: 'Divide 365 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 2,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q12',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/5 of 120?',
      Marathi: '120 चा १/5 भाग म्हणजे किती?',
      Hindi: '120 का १/5 भाग क्या होगा?',
      Urdu: 'What is 1/5 of 120?',
      Gujarati: '120 का १/5 भाग क्या होगा?',
      Telugu: 'What is 1/5 of 120?',
      Kannada: 'What is 1/5 of 120?'
    },
    options: {
      English: ['24', '26', '22', '50'],
      Marathi: ['24', '26', '22', '50'],
      Hindi: ['24', '26', '22', '50'],
      Urdu: ['24', '26', '22', '50'],
      Gujarati: ['24', '26', '22', '50'],
      Telugu: ['24', '26', '22', '50'],
      Kannada: ['24', '26', '22', '50']
    },
    correctIndex: 3,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q13',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 5 kg 250 g into grams:',
      Marathi: '5 किग्रॅ 250 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '5 किग्रा 250 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 5 kg 250 g into grams:',
      Gujarati: '5 किग्रा 250 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 5 kg 250 g into grams:',
      Kannada: 'Convert 5 kg 250 g into grams:'
    },
    options: {
      English: ['5250 g', '750 g', '5005 g', '2500 g'],
      Marathi: ['5250 ग्रॅ', '750 ग्रॅ', '5005 ग्रॅ', '2500 ग्रॅ'],
      Hindi: ['5250 ग्राम', '750 ग्राम', '5005 ग्राम', '2500 ग्राम'],
      Urdu: ['5250 g', '750 g', '5005 g', '2500 g'],
      Gujarati: ['5250 ग्राम', '750 ग्राम', '5005 ग्राम', '2500 ग्राम'],
      Telugu: ['5250 g', '750 g', '5005 g', '2500 g'],
      Kannada: ['5250 g', '750 g', '5005 g', '2500 g']
    },
    correctIndex: 0,
    explanation: {
      English: '1 kg = 1000 g. Total = 5250 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 5250 ग्रॅम.',
      Hindi: '5250 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 5250 g.',
      Gujarati: '5250 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 5250 g.',
      Kannada: '1 kg = 1000 g. Total = 5250 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q14',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 11 cm:',
      Marathi: '11 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '11 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 11 cm:',
      Gujarati: '11 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 11 cm:',
      Kannada: 'Find perimeter of square with side 11 cm:'
    },
    options: {
      English: ['44 cm', '22 cm', '121 cm', '48 cm'],
      Marathi: ['44 सेमी', '22 सेमी', '121 सेमी', '48 सेमी'],
      Hindi: ['44 सेमी', '22 सेमी', '121 सेमी', '48 सेमी'],
      Urdu: ['44 cm', '22 cm', '121 cm', '48 cm'],
      Gujarati: ['44 सेमी', '22 सेमी', '121 सेमी', '48 सेमी'],
      Telugu: ['44 cm', '22 cm', '121 cm', '48 cm'],
      Kannada: ['44 cm', '22 cm', '121 cm', '48 cm']
    },
    correctIndex: 1,
    explanation: {
      English: '4 × (11) = 44 cm.',
      Marathi: '४ × (11) = 44 सेमी.',
      Hindi: '४ × (11) = 44 सेमी।',
      Urdu: '4 × (11) = 44 cm.',
      Gujarati: '४ × (11) = 44 सेमी।',
      Telugu: '4 × (11) = 44 cm.',
      Kannada: '4 × (11) = 44 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q15',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 5 hours into minutes:',
      Marathi: '5 तास म्हणजे किती मिनिटे?',
      Hindi: '5 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 5 hours into minutes:',
      Gujarati: '5 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 5 hours into minutes:',
      Kannada: 'Convert 5 hours into minutes:'
    },
    options: {
      English: ['300 mins', '250 mins', '500 mins', '120 mins'],
      Marathi: ['300 मिनिटे', '250 मिनिटे', '500 मिनिटे', '120 मिनिटे'],
      Hindi: ['300 मिनट', '250 मिनट', '500 मिनट', '120 मिनट'],
      Urdu: ['300 mins', '250 mins', '500 mins', '120 mins'],
      Gujarati: ['300 मिनट', '250 मिनट', '500 मिनट', '120 मिनट'],
      Telugu: ['300 mins', '250 mins', '500 mins', '120 mins'],
      Kannada: ['300 mins', '250 mins', '500 mins', '120 mins']
    },
    correctIndex: 2,
    explanation: {
      English: '1 hour = 60 mins. 5 × 60 = 300 mins.',
      Marathi: '१ तास = ६० मिनिटे. 5 × ६० = 300 मिनिटे.',
      Hindi: '300 मिनट।',
      Urdu: '1 hour = 60 mins. 5 × 60 = 300 mins.',
      Gujarati: '300 मिनट।',
      Telugu: '1 hour = 60 mins. 5 × 60 = 300 mins.',
      Kannada: '1 hour = 60 mins. 5 × 60 = 300 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q6',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 63457, what is the place value of digit 6?',
      Marathi: '63457 या संख्येत 6 या अंकाची स्थानिक किंमत किती?',
      Hindi: '63457 में 6 का स्थानीय मान क्या है?',
      Urdu: 'In the number 63457, what is the place value of digit 6?',
      Gujarati: '63457 में 6 का स्थानीय मान क्या है?',
      Telugu: 'In the number 63457, what is the place value of digit 6?',
      Kannada: 'In the number 63457, what is the place value of digit 6?'
    },
    options: {
      English: ['6000', '60000', '600', '6'],
      Marathi: ['6000', '60000', '600', '6'],
      Hindi: ['6000', '60000', '600', '6'],
      Urdu: ['6000', '60000', '600', '6'],
      Gujarati: ['6000', '60000', '600', '6'],
      Telugu: ['6000', '60000', '600', '6'],
      Kannada: ['6000', '60000', '600', '6']
    },
    correctIndex: 2,
    explanation: {
      English: 'Digit 6 is in the specified place.',
      Marathi: '6 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 6 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 6 is in the specified place.',
      Kannada: 'Digit 6 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q7',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 6 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 6 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 6 =',
      Urdu: 'Calculate the Roman numeral value: XX + 6 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 6 =',
      Telugu: 'Calculate the Roman numeral value: XX + 6 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 6 in Roman:'
    },
    options: {
      English: ['XXV', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXV', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXV', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXV', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXV', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXV', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXV', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 3,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q8',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 7500 + 3840:',
      Marathi: 'बेरीज करा: 7500 + 3840:',
      Hindi: 'जोड़ें: 7500 + 3840:',
      Urdu: 'Add: 7500 + 3840:',
      Gujarati: 'जोड़ें: 7500 + 3840:',
      Telugu: 'Add: 7500 + 3840:',
      Kannada: 'Add: 7500 + 3840:'
    },
    options: {
      English: ['11340', '11240', '11390', '11290'],
      Marathi: ['11340', '11240', '11390', '11290'],
      Hindi: ['11340', '11240', '11390', '11290'],
      Urdu: ['11340', '11240', '11390', '11290'],
      Gujarati: ['11340', '11240', '11390', '11290'],
      Telugu: ['11340', '11240', '11390', '11290'],
      Kannada: ['11340', '11240', '11390', '11290']
    },
    correctIndex: 0,
    explanation: {
      English: '7500 + 3840 = 11340.',
      Marathi: '7500 + 3840 = 11340.',
      Hindi: 'योग 11340 है।',
      Urdu: '7500 + 3840 = 11340.',
      Gujarati: 'योग 11340 है।',
      Telugu: '7500 + 3840 = 11340.',
      Kannada: '7500 + 3840 = 11340.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q9',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 6000 - 2190:',
      Marathi: 'वजाबाकी करा: 6000 - 2190:',
      Hindi: 'घटाएं: 6000 - 2190:',
      Urdu: 'Subtract: 6000 - 2190:',
      Gujarati: 'घटाएं: 6000 - 2190:',
      Telugu: 'Subtract: 6000 - 2190:',
      Kannada: 'Subtract: 6000 - 2190:'
    },
    options: {
      English: ['3800', '3810', '3830', '3780'],
      Marathi: ['3800', '3810', '3830', '3780'],
      Hindi: ['3800', '3810', '3830', '3780'],
      Urdu: ['3800', '3810', '3830', '3780'],
      Gujarati: ['3800', '3810', '3830', '3780'],
      Telugu: ['3800', '3810', '3830', '3780'],
      Kannada: ['3800', '3810', '3830', '3780']
    },
    correctIndex: 1,
    explanation: {
      English: 'Difference is 3810.',
      Marathi: 'फरक 3810 येतो.',
      Hindi: 'अंतर 3810 है।',
      Urdu: 'Difference is 3810.',
      Gujarati: 'अंतर 3810 है।',
      Telugu: 'Difference is 3810.',
      Kannada: 'Difference is 3810.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q10',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 90 × 10:',
      Marathi: 'गुणाकार करा: 90 × 10:',
      Hindi: 'गुणा करें: 90 × 10:',
      Urdu: 'Calculate: 90 × 10:',
      Gujarati: 'गुणा करें: 90 × 10:',
      Telugu: 'Calculate: 90 × 10:',
      Kannada: 'Calculate: 90 × 10:'
    },
    options: {
      English: ['900', '880', '930', '885'],
      Marathi: ['900', '880', '930', '885'],
      Hindi: ['900', '880', '930', '885'],
      Urdu: ['900', '880', '930', '885'],
      Gujarati: ['900', '880', '930', '885'],
      Telugu: ['900', '880', '930', '885'],
      Kannada: ['900', '880', '930', '885']
    },
    correctIndex: 2,
    explanation: {
      English: 'Product is 900.',
      Marathi: 'गुणाकार 900 येतो.',
      Hindi: 'गुणनफल 900 है।',
      Urdu: 'Product is 900.',
      Gujarati: 'गुणनफल 900 है।',
      Telugu: 'Product is 900.',
      Kannada: 'Product is 900.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q11',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 437 by 8. Find remainder:',
      Marathi: '437 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '437 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 437 by 8. Find remainder:',
      Gujarati: '437 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 437 by 8. Find remainder:',
      Kannada: 'Divide 437 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 3,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q12',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/4 of 144?',
      Marathi: '144 चा १/4 भाग म्हणजे किती?',
      Hindi: '144 का १/4 भाग क्या होगा?',
      Urdu: 'What is 1/4 of 144?',
      Gujarati: '144 का १/4 भाग क्या होगा?',
      Telugu: 'What is 1/4 of 144?',
      Kannada: 'What is 1/4 of 144?'
    },
    options: {
      English: ['36', '38', '34', '60'],
      Marathi: ['36', '38', '34', '60'],
      Hindi: ['36', '38', '34', '60'],
      Urdu: ['36', '38', '34', '60'],
      Gujarati: ['36', '38', '34', '60'],
      Telugu: ['36', '38', '34', '60'],
      Kannada: ['36', '38', '34', '60']
    },
    correctIndex: 0,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q13',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 6 kg 300 g into grams:',
      Marathi: '6 किग्रॅ 300 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '6 किग्रा 300 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 6 kg 300 g into grams:',
      Gujarati: '6 किग्रा 300 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 6 kg 300 g into grams:',
      Kannada: 'Convert 6 kg 300 g into grams:'
    },
    options: {
      English: ['6300 g', '900 g', '6006 g', '3000 g'],
      Marathi: ['6300 ग्रॅ', '900 ग्रॅ', '6006 ग्रॅ', '3000 ग्रॅ'],
      Hindi: ['6300 ग्राम', '900 ग्राम', '6006 ग्राम', '3000 ग्राम'],
      Urdu: ['6300 g', '900 g', '6006 g', '3000 g'],
      Gujarati: ['6300 ग्राम', '900 ग्राम', '6006 ग्राम', '3000 ग्राम'],
      Telugu: ['6300 g', '900 g', '6006 g', '3000 g'],
      Kannada: ['6300 g', '900 g', '6006 g', '3000 g']
    },
    correctIndex: 1,
    explanation: {
      English: '1 kg = 1000 g. Total = 6300 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 6300 ग्रॅम.',
      Hindi: '6300 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 6300 g.',
      Gujarati: '6300 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 6300 g.',
      Kannada: '1 kg = 1000 g. Total = 6300 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q14',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 12 cm:',
      Marathi: '12 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '12 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 12 cm:',
      Gujarati: '12 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 12 cm:',
      Kannada: 'Find perimeter of square with side 12 cm:'
    },
    options: {
      English: ['48 cm', '24 cm', '144 cm', '52 cm'],
      Marathi: ['48 सेमी', '24 सेमी', '144 सेमी', '52 सेमी'],
      Hindi: ['48 सेमी', '24 सेमी', '144 सेमी', '52 सेमी'],
      Urdu: ['48 cm', '24 cm', '144 cm', '52 cm'],
      Gujarati: ['48 सेमी', '24 सेमी', '144 सेमी', '52 सेमी'],
      Telugu: ['48 cm', '24 cm', '144 cm', '52 cm'],
      Kannada: ['48 cm', '24 cm', '144 cm', '52 cm']
    },
    correctIndex: 2,
    explanation: {
      English: '4 × (12) = 48 cm.',
      Marathi: '४ × (12) = 48 सेमी.',
      Hindi: '४ × (12) = 48 सेमी।',
      Urdu: '4 × (12) = 48 cm.',
      Gujarati: '४ × (12) = 48 सेमी।',
      Telugu: '4 × (12) = 48 cm.',
      Kannada: '4 × (12) = 48 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q15',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 6 hours into minutes:',
      Marathi: '6 तास म्हणजे किती मिनिटे?',
      Hindi: '6 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 6 hours into minutes:',
      Gujarati: '6 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 6 hours into minutes:',
      Kannada: 'Convert 6 hours into minutes:'
    },
    options: {
      English: ['360 mins', '300 mins', '600 mins', '144 mins'],
      Marathi: ['360 मिनिटे', '300 मिनिटे', '600 मिनिटे', '144 मिनिटे'],
      Hindi: ['360 मिनट', '300 मिनट', '600 मिनट', '144 मिनट'],
      Urdu: ['360 mins', '300 mins', '600 mins', '144 mins'],
      Gujarati: ['360 मिनट', '300 मिनट', '600 मिनट', '144 मिनट'],
      Telugu: ['360 mins', '300 mins', '600 mins', '144 mins'],
      Kannada: ['360 mins', '300 mins', '600 mins', '144 mins']
    },
    correctIndex: 3,
    explanation: {
      English: '1 hour = 60 mins. 6 × 60 = 360 mins.',
      Marathi: '१ तास = ६० मिनिटे. 6 × ६० = 360 मिनिटे.',
      Hindi: '360 मिनट।',
      Urdu: '1 hour = 60 mins. 6 × 60 = 360 mins.',
      Gujarati: '360 मिनट।',
      Telugu: '1 hour = 60 mins. 6 × 60 = 360 mins.',
      Kannada: '1 hour = 60 mins. 6 × 60 = 360 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q6',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 73457, what is the place value of digit 7?',
      Marathi: '73457 या संख्येत 7 या अंकाची स्थानिक किंमत किती?',
      Hindi: '73457 में 7 का स्थानीय मान क्या है?',
      Urdu: 'In the number 73457, what is the place value of digit 7?',
      Gujarati: '73457 में 7 का स्थानीय मान क्या है?',
      Telugu: 'In the number 73457, what is the place value of digit 7?',
      Kannada: 'In the number 73457, what is the place value of digit 7?'
    },
    options: {
      English: ['7000', '70000', '700', '7'],
      Marathi: ['7000', '70000', '700', '7'],
      Hindi: ['7000', '70000', '700', '7'],
      Urdu: ['7000', '70000', '700', '7'],
      Gujarati: ['7000', '70000', '700', '7'],
      Telugu: ['7000', '70000', '700', '7'],
      Kannada: ['7000', '70000', '700', '7']
    },
    correctIndex: 3,
    explanation: {
      English: 'Digit 7 is in the specified place.',
      Marathi: '7 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 7 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 7 is in the specified place.',
      Kannada: 'Digit 7 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q7',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 7 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 7 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 7 =',
      Urdu: 'Calculate the Roman numeral value: XX + 7 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 7 =',
      Telugu: 'Calculate the Roman numeral value: XX + 7 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 7 in Roman:'
    },
    options: {
      English: ['XXV', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXV', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXV', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXV', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXV', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXV', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXV', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 0,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q8',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 8750 + 4480:',
      Marathi: 'बेरीज करा: 8750 + 4480:',
      Hindi: 'जोड़ें: 8750 + 4480:',
      Urdu: 'Add: 8750 + 4480:',
      Gujarati: 'जोड़ें: 8750 + 4480:',
      Telugu: 'Add: 8750 + 4480:',
      Kannada: 'Add: 8750 + 4480:'
    },
    options: {
      English: ['13230', '13130', '13280', '13180'],
      Marathi: ['13230', '13130', '13280', '13180'],
      Hindi: ['13230', '13130', '13280', '13180'],
      Urdu: ['13230', '13130', '13280', '13180'],
      Gujarati: ['13230', '13130', '13280', '13180'],
      Telugu: ['13230', '13130', '13280', '13180'],
      Kannada: ['13230', '13130', '13280', '13180']
    },
    correctIndex: 1,
    explanation: {
      English: '8750 + 4480 = 13230.',
      Marathi: '8750 + 4480 = 13230.',
      Hindi: 'योग 13230 है।',
      Urdu: '8750 + 4480 = 13230.',
      Gujarati: 'योग 13230 है।',
      Telugu: '8750 + 4480 = 13230.',
      Kannada: '8750 + 4480 = 13230.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q9',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 7000 - 2555:',
      Marathi: 'वजाबाकी करा: 7000 - 2555:',
      Hindi: 'घटाएं: 7000 - 2555:',
      Urdu: 'Subtract: 7000 - 2555:',
      Gujarati: 'घटाएं: 7000 - 2555:',
      Telugu: 'Subtract: 7000 - 2555:',
      Kannada: 'Subtract: 7000 - 2555:'
    },
    options: {
      English: ['4435', '4445', '4465', '4415'],
      Marathi: ['4435', '4445', '4465', '4415'],
      Hindi: ['4435', '4445', '4465', '4415'],
      Urdu: ['4435', '4445', '4465', '4415'],
      Gujarati: ['4435', '4445', '4465', '4415'],
      Telugu: ['4435', '4445', '4465', '4415'],
      Kannada: ['4435', '4445', '4465', '4415']
    },
    correctIndex: 2,
    explanation: {
      English: 'Difference is 4445.',
      Marathi: 'फरक 4445 येतो.',
      Hindi: 'अंतर 4445 है।',
      Urdu: 'Difference is 4445.',
      Gujarati: 'अंतर 4445 है।',
      Telugu: 'Difference is 4445.',
      Kannada: 'Difference is 4445.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q10',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 105 × 11:',
      Marathi: 'गुणाकार करा: 105 × 11:',
      Hindi: 'गुणा करें: 105 × 11:',
      Urdu: 'Calculate: 105 × 11:',
      Gujarati: 'गुणा करें: 105 × 11:',
      Telugu: 'Calculate: 105 × 11:',
      Kannada: 'Calculate: 105 × 11:'
    },
    options: {
      English: ['1155', '1135', '1185', '1140'],
      Marathi: ['1155', '1135', '1185', '1140'],
      Hindi: ['1155', '1135', '1185', '1140'],
      Urdu: ['1155', '1135', '1185', '1140'],
      Gujarati: ['1155', '1135', '1185', '1140'],
      Telugu: ['1155', '1135', '1185', '1140'],
      Kannada: ['1155', '1135', '1185', '1140']
    },
    correctIndex: 3,
    explanation: {
      English: 'Product is 1155.',
      Marathi: 'गुणाकार 1155 येतो.',
      Hindi: 'गुणनफल 1155 है।',
      Urdu: 'Product is 1155.',
      Gujarati: 'गुणनफल 1155 है।',
      Telugu: 'Product is 1155.',
      Kannada: 'Product is 1155.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q11',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 509 by 8. Find remainder:',
      Marathi: '509 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '509 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 509 by 8. Find remainder:',
      Gujarati: '509 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 509 by 8. Find remainder:',
      Kannada: 'Divide 509 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 0,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q12',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/4 of 168?',
      Marathi: '168 चा १/4 भाग म्हणजे किती?',
      Hindi: '168 का १/4 भाग क्या होगा?',
      Urdu: 'What is 1/4 of 168?',
      Gujarati: '168 का १/4 भाग क्या होगा?',
      Telugu: 'What is 1/4 of 168?',
      Kannada: 'What is 1/4 of 168?'
    },
    options: {
      English: ['42', '44', '40', '70'],
      Marathi: ['42', '44', '40', '70'],
      Hindi: ['42', '44', '40', '70'],
      Urdu: ['42', '44', '40', '70'],
      Gujarati: ['42', '44', '40', '70'],
      Telugu: ['42', '44', '40', '70'],
      Kannada: ['42', '44', '40', '70']
    },
    correctIndex: 1,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q13',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 7 kg 350 g into grams:',
      Marathi: '7 किग्रॅ 350 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '7 किग्रा 350 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 7 kg 350 g into grams:',
      Gujarati: '7 किग्रा 350 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 7 kg 350 g into grams:',
      Kannada: 'Convert 7 kg 350 g into grams:'
    },
    options: {
      English: ['7350 g', '1050 g', '7007 g', '3500 g'],
      Marathi: ['7350 ग्रॅ', '1050 ग्रॅ', '7007 ग्रॅ', '3500 ग्रॅ'],
      Hindi: ['7350 ग्राम', '1050 ग्राम', '7007 ग्राम', '3500 ग्राम'],
      Urdu: ['7350 g', '1050 g', '7007 g', '3500 g'],
      Gujarati: ['7350 ग्राम', '1050 ग्राम', '7007 ग्राम', '3500 ग्राम'],
      Telugu: ['7350 g', '1050 g', '7007 g', '3500 g'],
      Kannada: ['7350 g', '1050 g', '7007 g', '3500 g']
    },
    correctIndex: 2,
    explanation: {
      English: '1 kg = 1000 g. Total = 7350 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 7350 ग्रॅम.',
      Hindi: '7350 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 7350 g.',
      Gujarati: '7350 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 7350 g.',
      Kannada: '1 kg = 1000 g. Total = 7350 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q14',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 13 cm:',
      Marathi: '13 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '13 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 13 cm:',
      Gujarati: '13 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 13 cm:',
      Kannada: 'Find perimeter of square with side 13 cm:'
    },
    options: {
      English: ['52 cm', '26 cm', '169 cm', '56 cm'],
      Marathi: ['52 सेमी', '26 सेमी', '169 सेमी', '56 सेमी'],
      Hindi: ['52 सेमी', '26 सेमी', '169 सेमी', '56 सेमी'],
      Urdu: ['52 cm', '26 cm', '169 cm', '56 cm'],
      Gujarati: ['52 सेमी', '26 सेमी', '169 सेमी', '56 सेमी'],
      Telugu: ['52 cm', '26 cm', '169 cm', '56 cm'],
      Kannada: ['52 cm', '26 cm', '169 cm', '56 cm']
    },
    correctIndex: 3,
    explanation: {
      English: '4 × (13) = 52 cm.',
      Marathi: '४ × (13) = 52 सेमी.',
      Hindi: '४ × (13) = 52 सेमी।',
      Urdu: '4 × (13) = 52 cm.',
      Gujarati: '४ × (13) = 52 सेमी।',
      Telugu: '4 × (13) = 52 cm.',
      Kannada: '4 × (13) = 52 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q15',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 7 hours into minutes:',
      Marathi: '7 तास म्हणजे किती मिनिटे?',
      Hindi: '7 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 7 hours into minutes:',
      Gujarati: '7 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 7 hours into minutes:',
      Kannada: 'Convert 7 hours into minutes:'
    },
    options: {
      English: ['420 mins', '350 mins', '700 mins', '168 mins'],
      Marathi: ['420 मिनिटे', '350 मिनिटे', '700 मिनिटे', '168 मिनिटे'],
      Hindi: ['420 मिनट', '350 मिनट', '700 मिनट', '168 मिनट'],
      Urdu: ['420 mins', '350 mins', '700 mins', '168 mins'],
      Gujarati: ['420 मिनट', '350 मिनट', '700 मिनट', '168 मिनट'],
      Telugu: ['420 mins', '350 mins', '700 mins', '168 mins'],
      Kannada: ['420 mins', '350 mins', '700 mins', '168 mins']
    },
    correctIndex: 0,
    explanation: {
      English: '1 hour = 60 mins. 7 × 60 = 420 mins.',
      Marathi: '१ तास = ६० मिनिटे. 7 × ६० = 420 मिनिटे.',
      Hindi: '420 मिनट।',
      Urdu: '1 hour = 60 mins. 7 × 60 = 420 mins.',
      Gujarati: '420 मिनट।',
      Telugu: '1 hour = 60 mins. 7 × 60 = 420 mins.',
      Kannada: '1 hour = 60 mins. 7 × 60 = 420 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q6',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 83457, what is the place value of digit 8?',
      Marathi: '83457 या संख्येत 8 या अंकाची स्थानिक किंमत किती?',
      Hindi: '83457 में 8 का स्थानीय मान क्या है?',
      Urdu: 'In the number 83457, what is the place value of digit 8?',
      Gujarati: '83457 में 8 का स्थानीय मान क्या है?',
      Telugu: 'In the number 83457, what is the place value of digit 8?',
      Kannada: 'In the number 83457, what is the place value of digit 8?'
    },
    options: {
      English: ['8000', '80000', '800', '8'],
      Marathi: ['8000', '80000', '800', '8'],
      Hindi: ['8000', '80000', '800', '8'],
      Urdu: ['8000', '80000', '800', '8'],
      Gujarati: ['8000', '80000', '800', '8'],
      Telugu: ['8000', '80000', '800', '8'],
      Kannada: ['8000', '80000', '800', '8']
    },
    correctIndex: 0,
    explanation: {
      English: 'Digit 8 is in the specified place.',
      Marathi: '8 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 8 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 8 is in the specified place.',
      Kannada: 'Digit 8 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q7',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 8 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 8 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 8 =',
      Urdu: 'Calculate the Roman numeral value: XX + 8 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 8 =',
      Telugu: 'Calculate the Roman numeral value: XX + 8 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 8 in Roman:'
    },
    options: {
      English: ['XXV', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXV', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXV', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXV', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXV', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXV', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXV', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 1,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q8',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 10000 + 5120:',
      Marathi: 'बेरीज करा: 10000 + 5120:',
      Hindi: 'जोड़ें: 10000 + 5120:',
      Urdu: 'Add: 10000 + 5120:',
      Gujarati: 'जोड़ें: 10000 + 5120:',
      Telugu: 'Add: 10000 + 5120:',
      Kannada: 'Add: 10000 + 5120:'
    },
    options: {
      English: ['15120', '15020', '15170', '15070'],
      Marathi: ['15120', '15020', '15170', '15070'],
      Hindi: ['15120', '15020', '15170', '15070'],
      Urdu: ['15120', '15020', '15170', '15070'],
      Gujarati: ['15120', '15020', '15170', '15070'],
      Telugu: ['15120', '15020', '15170', '15070'],
      Kannada: ['15120', '15020', '15170', '15070']
    },
    correctIndex: 2,
    explanation: {
      English: '10000 + 5120 = 15120.',
      Marathi: '10000 + 5120 = 15120.',
      Hindi: 'योग 15120 है।',
      Urdu: '10000 + 5120 = 15120.',
      Gujarati: 'योग 15120 है।',
      Telugu: '10000 + 5120 = 15120.',
      Kannada: '10000 + 5120 = 15120.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q9',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 8000 - 2920:',
      Marathi: 'वजाबाकी करा: 8000 - 2920:',
      Hindi: 'घटाएं: 8000 - 2920:',
      Urdu: 'Subtract: 8000 - 2920:',
      Gujarati: 'घटाएं: 8000 - 2920:',
      Telugu: 'Subtract: 8000 - 2920:',
      Kannada: 'Subtract: 8000 - 2920:'
    },
    options: {
      English: ['5070', '5080', '5100', '5050'],
      Marathi: ['5070', '5080', '5100', '5050'],
      Hindi: ['5070', '5080', '5100', '5050'],
      Urdu: ['5070', '5080', '5100', '5050'],
      Gujarati: ['5070', '5080', '5100', '5050'],
      Telugu: ['5070', '5080', '5100', '5050'],
      Kannada: ['5070', '5080', '5100', '5050']
    },
    correctIndex: 3,
    explanation: {
      English: 'Difference is 5080.',
      Marathi: 'फरक 5080 येतो.',
      Hindi: 'अंतर 5080 है।',
      Urdu: 'Difference is 5080.',
      Gujarati: 'अंतर 5080 है।',
      Telugu: 'Difference is 5080.',
      Kannada: 'Difference is 5080.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q10',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 120 × 12:',
      Marathi: 'गुणाकार करा: 120 × 12:',
      Hindi: 'गुणा करें: 120 × 12:',
      Urdu: 'Calculate: 120 × 12:',
      Gujarati: 'गुणा करें: 120 × 12:',
      Telugu: 'Calculate: 120 × 12:',
      Kannada: 'Calculate: 120 × 12:'
    },
    options: {
      English: ['1440', '1420', '1470', '1425'],
      Marathi: ['1440', '1420', '1470', '1425'],
      Hindi: ['1440', '1420', '1470', '1425'],
      Urdu: ['1440', '1420', '1470', '1425'],
      Gujarati: ['1440', '1420', '1470', '1425'],
      Telugu: ['1440', '1420', '1470', '1425'],
      Kannada: ['1440', '1420', '1470', '1425']
    },
    correctIndex: 0,
    explanation: {
      English: 'Product is 1440.',
      Marathi: 'गुणाकार 1440 येतो.',
      Hindi: 'गुणनफल 1440 है।',
      Urdu: 'Product is 1440.',
      Gujarati: 'गुणनफल 1440 है।',
      Telugu: 'Product is 1440.',
      Kannada: 'Product is 1440.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q11',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 581 by 8. Find remainder:',
      Marathi: '581 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '581 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 581 by 8. Find remainder:',
      Gujarati: '581 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 581 by 8. Find remainder:',
      Kannada: 'Divide 581 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 1,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q12',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/4 of 192?',
      Marathi: '192 चा १/4 भाग म्हणजे किती?',
      Hindi: '192 का १/4 भाग क्या होगा?',
      Urdu: 'What is 1/4 of 192?',
      Gujarati: '192 का १/4 भाग क्या होगा?',
      Telugu: 'What is 1/4 of 192?',
      Kannada: 'What is 1/4 of 192?'
    },
    options: {
      English: ['48', '50', '46', '80'],
      Marathi: ['48', '50', '46', '80'],
      Hindi: ['48', '50', '46', '80'],
      Urdu: ['48', '50', '46', '80'],
      Gujarati: ['48', '50', '46', '80'],
      Telugu: ['48', '50', '46', '80'],
      Kannada: ['48', '50', '46', '80']
    },
    correctIndex: 2,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q13',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 8 kg 400 g into grams:',
      Marathi: '8 किग्रॅ 400 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '8 किग्रा 400 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 8 kg 400 g into grams:',
      Gujarati: '8 किग्रा 400 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 8 kg 400 g into grams:',
      Kannada: 'Convert 8 kg 400 g into grams:'
    },
    options: {
      English: ['8400 g', '1200 g', '8008 g', '4000 g'],
      Marathi: ['8400 ग्रॅ', '1200 ग्रॅ', '8008 ग्रॅ', '4000 ग्रॅ'],
      Hindi: ['8400 ग्राम', '1200 ग्राम', '8008 ग्राम', '4000 ग्राम'],
      Urdu: ['8400 g', '1200 g', '8008 g', '4000 g'],
      Gujarati: ['8400 ग्राम', '1200 ग्राम', '8008 ग्राम', '4000 ग्राम'],
      Telugu: ['8400 g', '1200 g', '8008 g', '4000 g'],
      Kannada: ['8400 g', '1200 g', '8008 g', '4000 g']
    },
    correctIndex: 3,
    explanation: {
      English: '1 kg = 1000 g. Total = 8400 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 8400 ग्रॅम.',
      Hindi: '8400 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 8400 g.',
      Gujarati: '8400 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 8400 g.',
      Kannada: '1 kg = 1000 g. Total = 8400 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q14',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 14 cm:',
      Marathi: '14 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '14 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 14 cm:',
      Gujarati: '14 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 14 cm:',
      Kannada: 'Find perimeter of square with side 14 cm:'
    },
    options: {
      English: ['56 cm', '28 cm', '196 cm', '60 cm'],
      Marathi: ['56 सेमी', '28 सेमी', '196 सेमी', '60 सेमी'],
      Hindi: ['56 सेमी', '28 सेमी', '196 सेमी', '60 सेमी'],
      Urdu: ['56 cm', '28 cm', '196 cm', '60 cm'],
      Gujarati: ['56 सेमी', '28 सेमी', '196 सेमी', '60 सेमी'],
      Telugu: ['56 cm', '28 cm', '196 cm', '60 cm'],
      Kannada: ['56 cm', '28 cm', '196 cm', '60 cm']
    },
    correctIndex: 0,
    explanation: {
      English: '4 × (14) = 56 cm.',
      Marathi: '४ × (14) = 56 सेमी.',
      Hindi: '४ × (14) = 56 सेमी।',
      Urdu: '4 × (14) = 56 cm.',
      Gujarati: '४ × (14) = 56 सेमी।',
      Telugu: '4 × (14) = 56 cm.',
      Kannada: '4 × (14) = 56 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q15',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 8 hours into minutes:',
      Marathi: '8 तास म्हणजे किती मिनिटे?',
      Hindi: '8 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 8 hours into minutes:',
      Gujarati: '8 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 8 hours into minutes:',
      Kannada: 'Convert 8 hours into minutes:'
    },
    options: {
      English: ['480 mins', '400 mins', '800 mins', '192 mins'],
      Marathi: ['480 मिनिटे', '400 मिनिटे', '800 मिनिटे', '192 मिनिटे'],
      Hindi: ['480 मिनट', '400 मिनट', '800 मिनट', '192 मिनट'],
      Urdu: ['480 mins', '400 mins', '800 mins', '192 mins'],
      Gujarati: ['480 मिनट', '400 मिनट', '800 मिनट', '192 मिनट'],
      Telugu: ['480 mins', '400 mins', '800 mins', '192 mins'],
      Kannada: ['480 mins', '400 mins', '800 mins', '192 mins']
    },
    correctIndex: 1,
    explanation: {
      English: '1 hour = 60 mins. 8 × 60 = 480 mins.',
      Marathi: '१ तास = ६० मिनिटे. 8 × ६० = 480 मिनिटे.',
      Hindi: '480 मिनट।',
      Urdu: '1 hour = 60 mins. 8 × 60 = 480 mins.',
      Gujarati: '480 मिनट।',
      Telugu: '1 hour = 60 mins. 8 × 60 = 480 mins.',
      Kannada: '1 hour = 60 mins. 8 × 60 = 480 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q6',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 93457, what is the place value of digit 9?',
      Marathi: '93457 या संख्येत 9 या अंकाची स्थानिक किंमत किती?',
      Hindi: '93457 में 9 का स्थानीय मान क्या है?',
      Urdu: 'In the number 93457, what is the place value of digit 9?',
      Gujarati: '93457 में 9 का स्थानीय मान क्या है?',
      Telugu: 'In the number 93457, what is the place value of digit 9?',
      Kannada: 'In the number 93457, what is the place value of digit 9?'
    },
    options: {
      English: ['9000', '90000', '900', '9'],
      Marathi: ['9000', '90000', '900', '9'],
      Hindi: ['9000', '90000', '900', '9'],
      Urdu: ['9000', '90000', '900', '9'],
      Gujarati: ['9000', '90000', '900', '9'],
      Telugu: ['9000', '90000', '900', '9'],
      Kannada: ['9000', '90000', '900', '9']
    },
    correctIndex: 1,
    explanation: {
      English: 'Digit 9 is in the specified place.',
      Marathi: '9 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 9 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 9 is in the specified place.',
      Kannada: 'Digit 9 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q7',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 9 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 9 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 9 =',
      Urdu: 'Calculate the Roman numeral value: XX + 9 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 9 =',
      Telugu: 'Calculate the Roman numeral value: XX + 9 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 9 in Roman:'
    },
    options: {
      English: ['XXV', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXV', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXV', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXV', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXV', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXV', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXV', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 2,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q8',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 11250 + 5760:',
      Marathi: 'बेरीज करा: 11250 + 5760:',
      Hindi: 'जोड़ें: 11250 + 5760:',
      Urdu: 'Add: 11250 + 5760:',
      Gujarati: 'जोड़ें: 11250 + 5760:',
      Telugu: 'Add: 11250 + 5760:',
      Kannada: 'Add: 11250 + 5760:'
    },
    options: {
      English: ['17010', '16910', '17060', '16960'],
      Marathi: ['17010', '16910', '17060', '16960'],
      Hindi: ['17010', '16910', '17060', '16960'],
      Urdu: ['17010', '16910', '17060', '16960'],
      Gujarati: ['17010', '16910', '17060', '16960'],
      Telugu: ['17010', '16910', '17060', '16960'],
      Kannada: ['17010', '16910', '17060', '16960']
    },
    correctIndex: 3,
    explanation: {
      English: '11250 + 5760 = 17010.',
      Marathi: '11250 + 5760 = 17010.',
      Hindi: 'योग 17010 है।',
      Urdu: '11250 + 5760 = 17010.',
      Gujarati: 'योग 17010 है।',
      Telugu: '11250 + 5760 = 17010.',
      Kannada: '11250 + 5760 = 17010.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q9',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 9000 - 3285:',
      Marathi: 'वजाबाकी करा: 9000 - 3285:',
      Hindi: 'घटाएं: 9000 - 3285:',
      Urdu: 'Subtract: 9000 - 3285:',
      Gujarati: 'घटाएं: 9000 - 3285:',
      Telugu: 'Subtract: 9000 - 3285:',
      Kannada: 'Subtract: 9000 - 3285:'
    },
    options: {
      English: ['5705', '5715', '5735', '5685'],
      Marathi: ['5705', '5715', '5735', '5685'],
      Hindi: ['5705', '5715', '5735', '5685'],
      Urdu: ['5705', '5715', '5735', '5685'],
      Gujarati: ['5705', '5715', '5735', '5685'],
      Telugu: ['5705', '5715', '5735', '5685'],
      Kannada: ['5705', '5715', '5735', '5685']
    },
    correctIndex: 0,
    explanation: {
      English: 'Difference is 5715.',
      Marathi: 'फरक 5715 येतो.',
      Hindi: 'अंतर 5715 है।',
      Urdu: 'Difference is 5715.',
      Gujarati: 'अंतर 5715 है।',
      Telugu: 'Difference is 5715.',
      Kannada: 'Difference is 5715.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q10',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 135 × 13:',
      Marathi: 'गुणाकार करा: 135 × 13:',
      Hindi: 'गुणा करें: 135 × 13:',
      Urdu: 'Calculate: 135 × 13:',
      Gujarati: 'गुणा करें: 135 × 13:',
      Telugu: 'Calculate: 135 × 13:',
      Kannada: 'Calculate: 135 × 13:'
    },
    options: {
      English: ['1755', '1735', '1785', '1740'],
      Marathi: ['1755', '1735', '1785', '1740'],
      Hindi: ['1755', '1735', '1785', '1740'],
      Urdu: ['1755', '1735', '1785', '1740'],
      Gujarati: ['1755', '1735', '1785', '1740'],
      Telugu: ['1755', '1735', '1785', '1740'],
      Kannada: ['1755', '1735', '1785', '1740']
    },
    correctIndex: 1,
    explanation: {
      English: 'Product is 1755.',
      Marathi: 'गुणाकार 1755 येतो.',
      Hindi: 'गुणनफल 1755 है।',
      Urdu: 'Product is 1755.',
      Gujarati: 'गुणनफल 1755 है।',
      Telugu: 'Product is 1755.',
      Kannada: 'Product is 1755.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q11',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 653 by 8. Find remainder:',
      Marathi: '653 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '653 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 653 by 8. Find remainder:',
      Gujarati: '653 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 653 by 8. Find remainder:',
      Kannada: 'Divide 653 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 2,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q12',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/4 of 216?',
      Marathi: '216 चा १/4 भाग म्हणजे किती?',
      Hindi: '216 का १/4 भाग क्या होगा?',
      Urdu: 'What is 1/4 of 216?',
      Gujarati: '216 का १/4 भाग क्या होगा?',
      Telugu: 'What is 1/4 of 216?',
      Kannada: 'What is 1/4 of 216?'
    },
    options: {
      English: ['54', '56', '52', '90'],
      Marathi: ['54', '56', '52', '90'],
      Hindi: ['54', '56', '52', '90'],
      Urdu: ['54', '56', '52', '90'],
      Gujarati: ['54', '56', '52', '90'],
      Telugu: ['54', '56', '52', '90'],
      Kannada: ['54', '56', '52', '90']
    },
    correctIndex: 3,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q13',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 9 kg 450 g into grams:',
      Marathi: '9 किग्रॅ 450 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '9 किग्रा 450 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 9 kg 450 g into grams:',
      Gujarati: '9 किग्रा 450 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 9 kg 450 g into grams:',
      Kannada: 'Convert 9 kg 450 g into grams:'
    },
    options: {
      English: ['9450 g', '1350 g', '9009 g', '4500 g'],
      Marathi: ['9450 ग्रॅ', '1350 ग्रॅ', '9009 ग्रॅ', '4500 ग्रॅ'],
      Hindi: ['9450 ग्राम', '1350 ग्राम', '9009 ग्राम', '4500 ग्राम'],
      Urdu: ['9450 g', '1350 g', '9009 g', '4500 g'],
      Gujarati: ['9450 ग्राम', '1350 ग्राम', '9009 ग्राम', '4500 ग्राम'],
      Telugu: ['9450 g', '1350 g', '9009 g', '4500 g'],
      Kannada: ['9450 g', '1350 g', '9009 g', '4500 g']
    },
    correctIndex: 0,
    explanation: {
      English: '1 kg = 1000 g. Total = 9450 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 9450 ग्रॅम.',
      Hindi: '9450 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 9450 g.',
      Gujarati: '9450 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 9450 g.',
      Kannada: '1 kg = 1000 g. Total = 9450 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q14',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 15 cm:',
      Marathi: '15 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '15 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 15 cm:',
      Gujarati: '15 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 15 cm:',
      Kannada: 'Find perimeter of square with side 15 cm:'
    },
    options: {
      English: ['60 cm', '30 cm', '225 cm', '64 cm'],
      Marathi: ['60 सेमी', '30 सेमी', '225 सेमी', '64 सेमी'],
      Hindi: ['60 सेमी', '30 सेमी', '225 सेमी', '64 सेमी'],
      Urdu: ['60 cm', '30 cm', '225 cm', '64 cm'],
      Gujarati: ['60 सेमी', '30 सेमी', '225 सेमी', '64 सेमी'],
      Telugu: ['60 cm', '30 cm', '225 cm', '64 cm'],
      Kannada: ['60 cm', '30 cm', '225 cm', '64 cm']
    },
    correctIndex: 1,
    explanation: {
      English: '4 × (15) = 60 cm.',
      Marathi: '४ × (15) = 60 सेमी.',
      Hindi: '४ × (15) = 60 सेमी।',
      Urdu: '4 × (15) = 60 cm.',
      Gujarati: '४ × (15) = 60 सेमी।',
      Telugu: '4 × (15) = 60 cm.',
      Kannada: '4 × (15) = 60 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q15',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 9 hours into minutes:',
      Marathi: '9 तास म्हणजे किती मिनिटे?',
      Hindi: '9 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 9 hours into minutes:',
      Gujarati: '9 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 9 hours into minutes:',
      Kannada: 'Convert 9 hours into minutes:'
    },
    options: {
      English: ['540 mins', '450 mins', '900 mins', '216 mins'],
      Marathi: ['540 मिनिटे', '450 मिनिटे', '900 मिनिटे', '216 मिनिटे'],
      Hindi: ['540 मिनट', '450 मिनट', '900 मिनट', '216 मिनट'],
      Urdu: ['540 mins', '450 mins', '900 mins', '216 mins'],
      Gujarati: ['540 मिनट', '450 मिनट', '900 मिनट', '216 मिनट'],
      Telugu: ['540 mins', '450 mins', '900 mins', '216 mins'],
      Kannada: ['540 mins', '450 mins', '900 mins', '216 mins']
    },
    correctIndex: 2,
    explanation: {
      English: '1 hour = 60 mins. 9 × 60 = 540 mins.',
      Marathi: '१ तास = ६० मिनिटे. 9 × ६० = 540 मिनिटे.',
      Hindi: '540 मिनट।',
      Urdu: '1 hour = 60 mins. 9 × 60 = 540 mins.',
      Gujarati: '540 मिनट।',
      Telugu: '1 hour = 60 mins. 9 × 60 = 540 mins.',
      Kannada: '1 hour = 60 mins. 9 × 60 = 540 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q6',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'easy',
    type: 'place_value',
    questionText: {
      English: 'In the number 103457, what is the place value of digit 10?',
      Marathi: '103457 या संख्येत 10 या अंकाची स्थानिक किंमत किती?',
      Hindi: '103457 में 10 का स्थानीय मान क्या है?',
      Urdu: 'In the number 103457, what is the place value of digit 10?',
      Gujarati: '103457 में 10 का स्थानीय मान क्या है?',
      Telugu: 'In the number 103457, what is the place value of digit 10?',
      Kannada: 'In the number 103457, what is the place value of digit 10?'
    },
    options: {
      English: ['10000', '100000', '1000', '10'],
      Marathi: ['10000', '100000', '1000', '10'],
      Hindi: ['10000', '100000', '1000', '10'],
      Urdu: ['10000', '100000', '1000', '10'],
      Gujarati: ['10000', '100000', '1000', '10'],
      Telugu: ['10000', '100000', '1000', '10'],
      Kannada: ['10000', '100000', '1000', '10']
    },
    correctIndex: 2,
    explanation: {
      English: 'Digit 10 is in the specified place.',
      Marathi: '10 या अंकाचे स्थान ओळखून मान काढला.',
      Hindi: 'स्थानीय मान नियम।',
      Urdu: 'Digit 10 is in the specified place.',
      Gujarati: 'स्थानीय मान नियम।',
      Telugu: 'Digit 10 is in the specified place.',
      Kannada: 'Digit 10 is in the specified place.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q7',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'easy',
    type: 'roman',
    questionText: {
      English: 'Calculate the Roman numeral value: XX + 10 in Roman:',
      Marathi: 'रोमन संख्याचिन्हात किंमत काढा: २० + 10 =',
      Hindi: 'रोमन अंक में मान निकालें: २० + 10 =',
      Urdu: 'Calculate the Roman numeral value: XX + 10 in Roman:',
      Gujarati: 'रोमन अंक में मान निकालें: २० + 10 =',
      Telugu: 'Calculate the Roman numeral value: XX + 10 in Roman:',
      Kannada: 'Calculate the Roman numeral value: XX + 10 in Roman:'
    },
    options: {
      English: ['XXV', 'XIX', 'XXV', 'XX'],
      Marathi: ['XXV', 'XIX', 'XXV', 'XX'],
      Hindi: ['XXV', 'XIX', 'XXV', 'XX'],
      Urdu: ['XXV', 'XIX', 'XXV', 'XX'],
      Gujarati: ['XXV', 'XIX', 'XXV', 'XX'],
      Telugu: ['XXV', 'XIX', 'XXV', 'XX'],
      Kannada: ['XXV', 'XIX', 'XXV', 'XX']
    },
    correctIndex: 3,
    explanation: {
      English: 'Sum in Roman numerals.',
      Marathi: 'रोमन संख्यांची बेरीज.',
      Hindi: 'रोमन अंकों का जोड़।',
      Urdu: 'Sum in Roman numerals.',
      Gujarati: 'रोमन अंकों का जोड़।',
      Telugu: 'Sum in Roman numerals.',
      Kannada: 'Sum in Roman numerals.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q8',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'addition',
    questionText: {
      English: 'Add: 12500 + 6400:',
      Marathi: 'बेरीज करा: 12500 + 6400:',
      Hindi: 'जोड़ें: 12500 + 6400:',
      Urdu: 'Add: 12500 + 6400:',
      Gujarati: 'जोड़ें: 12500 + 6400:',
      Telugu: 'Add: 12500 + 6400:',
      Kannada: 'Add: 12500 + 6400:'
    },
    options: {
      English: ['18900', '18800', '18950', '18850'],
      Marathi: ['18900', '18800', '18950', '18850'],
      Hindi: ['18900', '18800', '18950', '18850'],
      Urdu: ['18900', '18800', '18950', '18850'],
      Gujarati: ['18900', '18800', '18950', '18850'],
      Telugu: ['18900', '18800', '18950', '18850'],
      Kannada: ['18900', '18800', '18950', '18850']
    },
    correctIndex: 0,
    explanation: {
      English: '12500 + 6400 = 18900.',
      Marathi: '12500 + 6400 = 18900.',
      Hindi: 'योग 18900 है।',
      Urdu: '12500 + 6400 = 18900.',
      Gujarati: 'योग 18900 है।',
      Telugu: '12500 + 6400 = 18900.',
      Kannada: '12500 + 6400 = 18900.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q9',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'subtraction',
    questionText: {
      English: 'Subtract: 10000 - 3650:',
      Marathi: 'वजाबाकी करा: 10000 - 3650:',
      Hindi: 'घटाएं: 10000 - 3650:',
      Urdu: 'Subtract: 10000 - 3650:',
      Gujarati: 'घटाएं: 10000 - 3650:',
      Telugu: 'Subtract: 10000 - 3650:',
      Kannada: 'Subtract: 10000 - 3650:'
    },
    options: {
      English: ['6340', '6350', '6370', '6320'],
      Marathi: ['6340', '6350', '6370', '6320'],
      Hindi: ['6340', '6350', '6370', '6320'],
      Urdu: ['6340', '6350', '6370', '6320'],
      Gujarati: ['6340', '6350', '6370', '6320'],
      Telugu: ['6340', '6350', '6370', '6320'],
      Kannada: ['6340', '6350', '6370', '6320']
    },
    correctIndex: 1,
    explanation: {
      English: 'Difference is 6350.',
      Marathi: 'फरक 6350 येतो.',
      Hindi: 'अंतर 6350 है।',
      Urdu: 'Difference is 6350.',
      Gujarati: 'अंतर 6350 है।',
      Telugu: 'Difference is 6350.',
      Kannada: 'Difference is 6350.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q10',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'multiplication',
    questionText: {
      English: 'Calculate: 150 × 14:',
      Marathi: 'गुणाकार करा: 150 × 14:',
      Hindi: 'गुणा करें: 150 × 14:',
      Urdu: 'Calculate: 150 × 14:',
      Gujarati: 'गुणा करें: 150 × 14:',
      Telugu: 'Calculate: 150 × 14:',
      Kannada: 'Calculate: 150 × 14:'
    },
    options: {
      English: ['2100', '2080', '2130', '2085'],
      Marathi: ['2100', '2080', '2130', '2085'],
      Hindi: ['2100', '2080', '2130', '2085'],
      Urdu: ['2100', '2080', '2130', '2085'],
      Gujarati: ['2100', '2080', '2130', '2085'],
      Telugu: ['2100', '2080', '2130', '2085'],
      Kannada: ['2100', '2080', '2130', '2085']
    },
    correctIndex: 2,
    explanation: {
      English: 'Product is 2100.',
      Marathi: 'गुणाकार 2100 येतो.',
      Hindi: 'गुणनफल 2100 है।',
      Urdu: 'Product is 2100.',
      Gujarati: 'गुणनफल 2100 है।',
      Telugu: 'Product is 2100.',
      Kannada: 'Product is 2100.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q11',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'moderate',
    type: 'division',
    questionText: {
      English: 'Divide 725 by 8. Find remainder:',
      Marathi: '725 ला ८ ने भागल्यास बाकी किती उरेल?',
      Hindi: '725 को ८ से भाग देने पर शेषफल क्या होगा?',
      Urdu: 'Divide 725 by 8. Find remainder:',
      Gujarati: '725 को ८ से भाग देने पर शेषफल क्या होगा?',
      Telugu: 'Divide 725 by 8. Find remainder:',
      Kannada: 'Divide 725 by 8. Find remainder:'
    },
    options: {
      English: ['3', '5', '7', '1'],
      Marathi: ['३', '५', '७', '१'],
      Hindi: ['३', '५', '७', '१'],
      Urdu: ['3', '5', '7', '1'],
      Gujarati: ['३', '५', '७', '१'],
      Telugu: ['3', '5', '7', '1'],
      Kannada: ['3', '5', '7', '1']
    },
    correctIndex: 3,
    explanation: {
      English: 'Remainder is 5.',
      Marathi: 'बाकी ५ उरते.',
      Hindi: 'शेषफल ५ है।',
      Urdu: 'Remainder is 5.',
      Gujarati: 'शेषफल ५ है।',
      Telugu: 'Remainder is 5.',
      Kannada: 'Remainder is 5.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q12',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'easy',
    type: 'fractions',
    questionText: {
      English: 'What is 1/4 of 240?',
      Marathi: '240 चा १/4 भाग म्हणजे किती?',
      Hindi: '240 का १/4 भाग क्या होगा?',
      Urdu: 'What is 1/4 of 240?',
      Gujarati: '240 का १/4 भाग क्या होगा?',
      Telugu: 'What is 1/4 of 240?',
      Kannada: 'What is 1/4 of 240?'
    },
    options: {
      English: ['60', '62', '58', '100'],
      Marathi: ['60', '62', '58', '100'],
      Hindi: ['60', '62', '58', '100'],
      Urdu: ['60', '62', '58', '100'],
      Gujarati: ['60', '62', '58', '100'],
      Telugu: ['60', '62', '58', '100'],
      Kannada: ['60', '62', '58', '100']
    },
    correctIndex: 0,
    explanation: {
      English: 'Fractional calculation.',
      Marathi: 'अपूर्णांकाचा भाग काढला.',
      Hindi: 'भिन्न मान।',
      Urdu: 'Fractional calculation.',
      Gujarati: 'भिन्न मान।',
      Telugu: 'Fractional calculation.',
      Kannada: 'Fractional calculation.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q13',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'easy',
    type: 'measurement',
    questionText: {
      English: 'Convert 10 kg 500 g into grams:',
      Marathi: '10 किग्रॅ 500 ग्रॅम म्हणजे किती ग्रॅम?',
      Hindi: '10 किग्रा 500 ग्राम को ग्राम में बदलें:',
      Urdu: 'Convert 10 kg 500 g into grams:',
      Gujarati: '10 किग्रा 500 ग्राम को ग्राम में बदलें:',
      Telugu: 'Convert 10 kg 500 g into grams:',
      Kannada: 'Convert 10 kg 500 g into grams:'
    },
    options: {
      English: ['10500 g', '1500 g', '10010 g', '5000 g'],
      Marathi: ['10500 ग्रॅ', '1500 ग्रॅ', '10010 ग्रॅ', '5000 ग्रॅ'],
      Hindi: ['10500 ग्राम', '1500 ग्राम', '10010 ग्राम', '5000 ग्राम'],
      Urdu: ['10500 g', '1500 g', '10010 g', '5000 g'],
      Gujarati: ['10500 ग्राम', '1500 ग्राम', '10010 ग्राम', '5000 ग्राम'],
      Telugu: ['10500 g', '1500 g', '10010 g', '5000 g'],
      Kannada: ['10500 g', '1500 g', '10010 g', '5000 g']
    },
    correctIndex: 1,
    explanation: {
      English: '1 kg = 1000 g. Total = 10500 g.',
      Marathi: '१ किग्रॅ = १००० ग्रॅ. एकूण 10500 ग्रॅम.',
      Hindi: '10500 ग्राम।',
      Urdu: '1 kg = 1000 g. Total = 10500 g.',
      Gujarati: '10500 ग्राम।',
      Telugu: '1 kg = 1000 g. Total = 10500 g.',
      Kannada: '1 kg = 1000 g. Total = 10500 g.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q14',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'perimeter',
    questionText: {
      English: 'Find perimeter of square with side 16 cm:',
      Marathi: '16 सेमी बाजू असलेल्या चौरसाची परिमिती काढा:',
      Hindi: '16 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Urdu: 'Find perimeter of square with side 16 cm:',
      Gujarati: '16 सेमी भुजा वाले वर्ग का परिमाप ज्ञात करें:',
      Telugu: 'Find perimeter of square with side 16 cm:',
      Kannada: 'Find perimeter of square with side 16 cm:'
    },
    options: {
      English: ['64 cm', '32 cm', '256 cm', '68 cm'],
      Marathi: ['64 सेमी', '32 सेमी', '256 सेमी', '68 सेमी'],
      Hindi: ['64 सेमी', '32 सेमी', '256 सेमी', '68 सेमी'],
      Urdu: ['64 cm', '32 cm', '256 cm', '68 cm'],
      Gujarati: ['64 सेमी', '32 सेमी', '256 सेमी', '68 सेमी'],
      Telugu: ['64 cm', '32 cm', '256 cm', '68 cm'],
      Kannada: ['64 cm', '32 cm', '256 cm', '68 cm']
    },
    correctIndex: 2,
    explanation: {
      English: '4 × (16) = 64 cm.',
      Marathi: '४ × (16) = 64 सेमी.',
      Hindi: '४ × (16) = 64 सेमी।',
      Urdu: '4 × (16) = 64 cm.',
      Gujarati: '४ × (16) = 64 सेमी।',
      Telugu: '4 × (16) = 64 cm.',
      Kannada: '4 × (16) = 64 cm.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q15',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'easy',
    type: 'time',
    questionText: {
      English: 'Convert 10 hours into minutes:',
      Marathi: '10 तास म्हणजे किती मिनिटे?',
      Hindi: '10 घंटे में कितने मिनट होते हैं?',
      Urdu: 'Convert 10 hours into minutes:',
      Gujarati: '10 घंटे में कितने मिनट होते हैं?',
      Telugu: 'Convert 10 hours into minutes:',
      Kannada: 'Convert 10 hours into minutes:'
    },
    options: {
      English: ['600 mins', '500 mins', '1000 mins', '240 mins'],
      Marathi: ['600 मिनिटे', '500 मिनिटे', '1000 मिनिटे', '240 मिनिटे'],
      Hindi: ['600 मिनट', '500 मिनट', '1000 मिनट', '240 मिनट'],
      Urdu: ['600 mins', '500 mins', '1000 mins', '240 mins'],
      Gujarati: ['600 मिनट', '500 मिनट', '1000 मिनट', '240 मिनट'],
      Telugu: ['600 mins', '500 mins', '1000 mins', '240 mins'],
      Kannada: ['600 mins', '500 mins', '1000 mins', '240 mins']
    },
    correctIndex: 3,
    explanation: {
      English: '1 hour = 60 mins. 10 × 60 = 600 mins.',
      Marathi: '१ तास = ६० मिनिटे. 10 × ६० = 600 मिनिटे.',
      Hindi: '600 मिनट।',
      Urdu: '1 hour = 60 mins. 10 × 60 = 600 mins.',
      Gujarati: '600 मिनट।',
      Telugu: '1 hour = 60 mins. 10 × 60 = 600 mins.',
      Kannada: '1 hour = 60 mins. 10 × 60 = 600 mins.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q16',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'He saw ___ elephant in the zoo.',
      Marathi: 'त्याने प्राणीसंग्रहालयात ___ हत्ती पाहिला.',
      Hindi: 'उसने चिड़ियाघर में ___ हाथी देखा।',
      Urdu: 'He saw ___ elephant in the zoo.',
      Gujarati: 'उसने चिड़ियाघर में ___ हाथी देखा।',
      Telugu: 'He saw ___ elephant in the zoo.',
      Kannada: 'He saw ___ elephant in the zoo.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 1,
    explanation: {
      English: 'elephant starts with vowel sound /e/ so \'an\'.',
      Marathi: 'elephant starts with vowel sound /e/ so \'an\'.',
      Hindi: 'elephant starts with vowel sound /e/ so \'an\'.',
      Urdu: 'elephant starts with vowel sound /e/ so \\\'an\\\'.',
      Gujarati: 'elephant starts with vowel sound /e/ so \\\'an\\\'.',
      Telugu: 'elephant starts with vowel sound /e/ so \\\'an\\\'.',
      Kannada: 'elephant starts with vowel sound /e/ so \\\'an\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q17',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'The cat is sleeping ___ the table.',
      Marathi: 'मांजर टेबल___ झोपली आहे.',
      Hindi: 'बिल्ली मेज کے ___ सो रही है।',
      Urdu: 'The cat is sleeping ___ the table.',
      Gujarati: 'बिल्ली मेज کے ___ सो रही है।',
      Telugu: 'The cat is sleeping ___ the table.',
      Kannada: 'The cat is sleeping ___ the table.'
    },
    options: {
      English: ['under', 'at', 'from', 'with'],
      Marathi: ['under', 'at', 'from', 'with'],
      Hindi: ['under', 'at', 'from', 'with'],
      Urdu: ['under', 'at', 'from', 'with'],
      Gujarati: ['under', 'at', 'from', 'with'],
      Telugu: ['under', 'at', 'from', 'with'],
      Kannada: ['under', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'under the table indicates position beneath.',
      Marathi: 'under the table indicates position beneath.',
      Hindi: 'under the table indicates position beneath.',
      Urdu: 'under the table indicates position beneath.',
      Gujarati: 'under the table indicates position beneath.',
      Telugu: 'under the table indicates position beneath.',
      Kannada: 'under the table indicates position beneath.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q18',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'The Sun ___ in the east every morning.',
      Marathi: 'सूर्य रोज सकाळी पूर्वेला ___.',
      Hindi: 'सूर्य रोज सुबह पूर्व में ___ है।',
      Urdu: 'The Sun ___ in the east every morning.',
      Gujarati: 'सूर्य रोज सुबह पूर्व में ___ है।',
      Telugu: 'The Sun ___ in the east every morning.',
      Kannada: 'The Sun ___ in the east every morning.'
    },
    options: {
      English: ['rises', 'ran', 'jumped', 'slept'],
      Marathi: ['rises', 'ran', 'jumped', 'slept'],
      Hindi: ['rises', 'ran', 'jumped', 'slept'],
      Urdu: ['rises', 'ran', 'jumped', 'slept'],
      Gujarati: ['rises', 'ran', 'jumped', 'slept'],
      Telugu: ['rises', 'ran', 'jumped', 'slept'],
      Kannada: ['rises', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Universal truth takes simple present \'rises\'.',
      Marathi: 'Universal truth takes simple present \'rises\'.',
      Hindi: 'Universal truth takes simple present \'rises\'.',
      Urdu: 'Universal truth takes simple present \\\'rises\\\'.',
      Gujarati: 'Universal truth takes simple present \\\'rises\\\'.',
      Telugu: 'Universal truth takes simple present \\\'rises\\\'.',
      Kannada: 'Universal truth takes simple present \\\'rises\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q19',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'What is the plural of \'child\'?',
      Marathi: '\'child\' या शब्दाचे अनेकवचन काय?',
      Hindi: '\'child\' का बहुवचन क्या है?',
      Urdu: 'What is the plural of \\\'child\\\'?',
      Gujarati: '\\\'child\\\' का बहुवचन क्या है?',
      Telugu: 'What is the plural of \\\'child\\\'?',
      Kannada: 'What is the plural of \\\'child\\\'?'
    },
    options: {
      English: ['children', 'childrens', 'childrenes', 'none'],
      Marathi: ['children', 'childrens', 'childrenes', 'none'],
      Hindi: ['children', 'childrens', 'childrenes', 'none'],
      Urdu: ['children', 'childrens', 'childrenes', 'none'],
      Gujarati: ['children', 'childrens', 'childrenes', 'none'],
      Telugu: ['children', 'childrens', 'childrenes', 'none'],
      Kannada: ['children', 'childrens', 'childrenes', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Irregular plural of child is children.',
      Marathi: 'Irregular plural of child is children.',
      Hindi: 'Irregular plural of child is children.',
      Urdu: 'Irregular plural of child is children.',
      Gujarati: 'Irregular plural of child is children.',
      Telugu: 'Irregular plural of child is children.',
      Kannada: 'Irregular plural of child is children.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q20',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Brave\'?',
      Marathi: '\'Brave\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Brave\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Brave\\\'?',
      Gujarati: '\\\'Brave\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Brave\\\'?',
      Kannada: 'What is the opposite of \\\'Brave\\\'?'
    },
    options: {
      English: ['Cowardly', 'Good', 'Bad', 'Fast'],
      Marathi: ['Cowardly', 'Good', 'Bad', 'Fast'],
      Hindi: ['Cowardly', 'Good', 'Bad', 'Fast'],
      Urdu: ['Cowardly', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Cowardly', 'Good', 'Bad', 'Fast'],
      Telugu: ['Cowardly', 'Good', 'Bad', 'Fast'],
      Kannada: ['Cowardly', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Brave is Cowardly.',
      Marathi: 'Opposite of Brave is Cowardly.',
      Hindi: 'Opposite of Brave is Cowardly.',
      Urdu: 'Opposite of Brave is Cowardly.',
      Gujarati: 'Opposite of Brave is Cowardly.',
      Telugu: 'Opposite of Brave is Cowardly.',
      Kannada: 'Opposite of Brave is Cowardly.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q16',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'Mount Everest is ___ highest peak in the world.',
      Marathi: 'माउन्ट एव्हरेस्ट हे जगातील ___ सर्वोच्च शिखर आहे.',
      Hindi: 'माउंट एवरेस्ट विश्व का ___ सबसे ऊंचा पर्वत है।',
      Urdu: 'Mount Everest is ___ highest peak in the world.',
      Gujarati: 'माउंट एवरेस्ट विश्व का ___ सबसे ऊंचा पर्वत है।',
      Telugu: 'Mount Everest is ___ highest peak in the world.',
      Kannada: 'Mount Everest is ___ highest peak in the world.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 2,
    explanation: {
      English: 'Superlative degree takes \'the\'.',
      Marathi: 'Superlative degree takes \'the\'.',
      Hindi: 'Superlative degree takes \'the\'.',
      Urdu: 'Superlative degree takes \\\'the\\\'.',
      Gujarati: 'Superlative degree takes \\\'the\\\'.',
      Telugu: 'Superlative degree takes \\\'the\\\'.',
      Kannada: 'Superlative degree takes \\\'the\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q17',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'The birds are flying ___ the trees.',
      Marathi: 'पक्षी झाडां___ उडत आहेत.',
      Hindi: 'पक्षी पेड़ों के ___ उड़ रहे हैं।',
      Urdu: 'The birds are flying ___ the trees.',
      Gujarati: 'पक्षी पेड़ों के ___ उड़ रहे हैं।',
      Telugu: 'The birds are flying ___ the trees.',
      Kannada: 'The birds are flying ___ the trees.'
    },
    options: {
      English: ['over', 'at', 'from', 'with'],
      Marathi: ['over', 'at', 'from', 'with'],
      Hindi: ['over', 'at', 'from', 'with'],
      Urdu: ['over', 'at', 'from', 'with'],
      Gujarati: ['over', 'at', 'from', 'with'],
      Telugu: ['over', 'at', 'from', 'with'],
      Kannada: ['over', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'over means above without touching.',
      Marathi: 'over means above without touching.',
      Hindi: 'over means above without touching.',
      Urdu: 'over means above without touching.',
      Gujarati: 'over means above without touching.',
      Telugu: 'over means above without touching.',
      Kannada: 'over means above without touching.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q18',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'Yesterday, our team ___ a cricket match.',
      Marathi: 'काल आमच्या संघाने क्रिकेट सामना ___.',
      Hindi: 'कल हमारी टीम ने क्रिकेट मैच ___।',
      Urdu: 'Yesterday, our team ___ a cricket match.',
      Gujarati: 'कल हमारी टीम ने क्रिकेट मैच ___।',
      Telugu: 'Yesterday, our team ___ a cricket match.',
      Kannada: 'Yesterday, our team ___ a cricket match.'
    },
    options: {
      English: ['played', 'ran', 'jumped', 'slept'],
      Marathi: ['played', 'ran', 'jumped', 'slept'],
      Hindi: ['played', 'ran', 'jumped', 'slept'],
      Urdu: ['played', 'ran', 'jumped', 'slept'],
      Gujarati: ['played', 'ran', 'jumped', 'slept'],
      Telugu: ['played', 'ran', 'jumped', 'slept'],
      Kannada: ['played', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Yesterday indicates simple past \'played\'.',
      Marathi: 'Yesterday indicates simple past \'played\'.',
      Hindi: 'Yesterday indicates simple past \'played\'.',
      Urdu: 'Yesterday indicates simple past \\\'played\\\'.',
      Gujarati: 'Yesterday indicates simple past \\\'played\\\'.',
      Telugu: 'Yesterday indicates simple past \\\'played\\\'.',
      Kannada: 'Yesterday indicates simple past \\\'played\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q19',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'What is the plural of \'tooth\'?',
      Marathi: '\'tooth\' या शब्दाचे अनेकवचन काय?',
      Hindi: '\'tooth\' का बहुवचन क्या है?',
      Urdu: 'What is the plural of \\\'tooth\\\'?',
      Gujarati: '\\\'tooth\\\' का बहुवचन क्या है?',
      Telugu: 'What is the plural of \\\'tooth\\\'?',
      Kannada: 'What is the plural of \\\'tooth\\\'?'
    },
    options: {
      English: ['teeth', 'teeths', 'teethes', 'none'],
      Marathi: ['teeth', 'teeths', 'teethes', 'none'],
      Hindi: ['teeth', 'teeths', 'teethes', 'none'],
      Urdu: ['teeth', 'teeths', 'teethes', 'none'],
      Gujarati: ['teeth', 'teeths', 'teethes', 'none'],
      Telugu: ['teeth', 'teeths', 'teethes', 'none'],
      Kannada: ['teeth', 'teeths', 'teethes', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural of tooth is teeth.',
      Marathi: 'Plural of tooth is teeth.',
      Hindi: 'Plural of tooth is teeth.',
      Urdu: 'Plural of tooth is teeth.',
      Gujarati: 'Plural of tooth is teeth.',
      Telugu: 'Plural of tooth is teeth.',
      Kannada: 'Plural of tooth is teeth.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q20',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Ancient\'?',
      Marathi: '\'Ancient\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Ancient\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Ancient\\\'?',
      Gujarati: '\\\'Ancient\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Ancient\\\'?',
      Kannada: 'What is the opposite of \\\'Ancient\\\'?'
    },
    options: {
      English: ['Modern', 'Good', 'Bad', 'Fast'],
      Marathi: ['Modern', 'Good', 'Bad', 'Fast'],
      Hindi: ['Modern', 'Good', 'Bad', 'Fast'],
      Urdu: ['Modern', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Modern', 'Good', 'Bad', 'Fast'],
      Telugu: ['Modern', 'Good', 'Bad', 'Fast'],
      Kannada: ['Modern', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Ancient is Modern.',
      Marathi: 'Opposite of Ancient is Modern.',
      Hindi: 'Opposite of Ancient is Modern.',
      Urdu: 'Opposite of Ancient is Modern.',
      Gujarati: 'Opposite of Ancient is Modern.',
      Telugu: 'Opposite of Ancient is Modern.',
      Kannada: 'Opposite of Ancient is Modern.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q16',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'She is ___ honest police officer.',
      Marathi: 'ती एक ___ प्रामाणिक पोलीस अधिकारी आहे.',
      Hindi: 'वह एक ___ ईमानदार पुलिस अधिकारी है।',
      Urdu: 'She is ___ honest police officer.',
      Gujarati: 'वह एक ___ ईमानदार पुलिस अधिकारी है।',
      Telugu: 'She is ___ honest police officer.',
      Kannada: 'She is ___ honest police officer.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 1,
    explanation: {
      English: 'Honest has silent \'h\' and vowel sound, so \'an\'.',
      Marathi: 'Honest has silent \'h\' and vowel sound, so \'an\'.',
      Hindi: 'Honest has silent \'h\' and vowel sound, so \'an\'.',
      Urdu: 'Honest has silent \\\'h\\\' and vowel sound, so \\\'an\\\'.',
      Gujarati: 'Honest has silent \\\'h\\\' and vowel sound, so \\\'an\\\'.',
      Telugu: 'Honest has silent \\\'h\\\' and vowel sound, so \\\'an\\\'.',
      Kannada: 'Honest has silent \\\'h\\\' and vowel sound, so \\\'an\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q17',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'Divide these sweets ___ Rohit and Amit.',
      Marathi: 'ही मिठाई रोहित आणि अमित___ वाटा.',
      Hindi: 'यह मिठाई रोहित और अमित के ___ बांटो।',
      Urdu: 'Divide these sweets ___ Rohit and Amit.',
      Gujarati: 'यह मिठाई रोहित और अमित के ___ बांटो।',
      Telugu: 'Divide these sweets ___ Rohit and Amit.',
      Kannada: 'Divide these sweets ___ Rohit and Amit.'
    },
    options: {
      English: ['between', 'at', 'from', 'with'],
      Marathi: ['between', 'at', 'from', 'with'],
      Hindi: ['between', 'at', 'from', 'with'],
      Urdu: ['between', 'at', 'from', 'with'],
      Gujarati: ['between', 'at', 'from', 'with'],
      Telugu: ['between', 'at', 'from', 'with'],
      Kannada: ['between', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'between is used for two people.',
      Marathi: 'between is used for two people.',
      Hindi: 'between is used for two people.',
      Urdu: 'between is used for two people.',
      Gujarati: 'between is used for two people.',
      Telugu: 'between is used for two people.',
      Kannada: 'between is used for two people.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q18',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'Tomorrow, my uncle ___ from Pune.',
      Marathi: 'उद्या माझे काका पुण्यावरून ___.',
      Hindi: 'कल मेरे चाचा पुणे से ___।',
      Urdu: 'Tomorrow, my uncle ___ from Pune.',
      Gujarati: 'कल मेरे चाचा पुणे से ___।',
      Telugu: 'Tomorrow, my uncle ___ from Pune.',
      Kannada: 'Tomorrow, my uncle ___ from Pune.'
    },
    options: {
      English: ['will arrive', 'ran', 'jumped', 'slept'],
      Marathi: ['will arrive', 'ran', 'jumped', 'slept'],
      Hindi: ['will arrive', 'ran', 'jumped', 'slept'],
      Urdu: ['will arrive', 'ran', 'jumped', 'slept'],
      Gujarati: ['will arrive', 'ran', 'jumped', 'slept'],
      Telugu: ['will arrive', 'ran', 'jumped', 'slept'],
      Kannada: ['will arrive', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Tomorrow indicates simple future \'will arrive\'.',
      Marathi: 'Tomorrow indicates simple future \'will arrive\'.',
      Hindi: 'Tomorrow indicates simple future \'will arrive\'.',
      Urdu: 'Tomorrow indicates simple future \\\'will arrive\\\'.',
      Gujarati: 'Tomorrow indicates simple future \\\'will arrive\\\'.',
      Telugu: 'Tomorrow indicates simple future \\\'will arrive\\\'.',
      Kannada: 'Tomorrow indicates simple future \\\'will arrive\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q19',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'A ___ of sheep was grazing in the meadow.',
      Marathi: 'कुरणात मेंढ्यांचा ___ चरत होता.',
      Hindi: 'मैदान में भेड़ों का ___ चर रहा था।',
      Urdu: 'A ___ of sheep was grazing in the meadow.',
      Gujarati: 'मैदान में भेड़ों का ___ चर रहा था।',
      Telugu: 'A ___ of sheep was grazing in the meadow.',
      Kannada: 'A ___ of sheep was grazing in the meadow.'
    },
    options: {
      English: ['flock', 'flocks', 'flockes', 'none'],
      Marathi: ['flock', 'flocks', 'flockes', 'none'],
      Hindi: ['flock', 'flocks', 'flockes', 'none'],
      Urdu: ['flock', 'flocks', 'flockes', 'none'],
      Gujarati: ['flock', 'flocks', 'flockes', 'none'],
      Telugu: ['flock', 'flocks', 'flockes', 'none'],
      Kannada: ['flock', 'flocks', 'flockes', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Collective noun for sheep is flock.',
      Marathi: 'Collective noun for sheep is flock.',
      Hindi: 'Collective noun for sheep is flock.',
      Urdu: 'Collective noun for sheep is flock.',
      Gujarati: 'Collective noun for sheep is flock.',
      Telugu: 'Collective noun for sheep is flock.',
      Kannada: 'Collective noun for sheep is flock.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q20',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Sharp\'?',
      Marathi: '\'Sharp\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Sharp\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Sharp\\\'?',
      Gujarati: '\\\'Sharp\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Sharp\\\'?',
      Kannada: 'What is the opposite of \\\'Sharp\\\'?'
    },
    options: {
      English: ['Blunt', 'Good', 'Bad', 'Fast'],
      Marathi: ['Blunt', 'Good', 'Bad', 'Fast'],
      Hindi: ['Blunt', 'Good', 'Bad', 'Fast'],
      Urdu: ['Blunt', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Blunt', 'Good', 'Bad', 'Fast'],
      Telugu: ['Blunt', 'Good', 'Bad', 'Fast'],
      Kannada: ['Blunt', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Sharp is Blunt.',
      Marathi: 'Opposite of Sharp is Blunt.',
      Hindi: 'Opposite of Sharp is Blunt.',
      Urdu: 'Opposite of Sharp is Blunt.',
      Gujarati: 'Opposite of Sharp is Blunt.',
      Telugu: 'Opposite of Sharp is Blunt.',
      Kannada: 'Opposite of Sharp is Blunt.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q16',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'Copper is ___ useful metal.',
      Marathi: 'तांबे हा एक ___ उपयुक्त धातू आहे.',
      Hindi: 'तांबा एक ___ उपयोगी धातु है।',
      Urdu: 'Copper is ___ useful metal.',
      Gujarati: 'तांबा एक ___ उपयोगी धातु है।',
      Telugu: 'Copper is ___ useful metal.',
      Kannada: 'Copper is ___ useful metal.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 0,
    explanation: {
      English: 'Useful begins with consonant sound /juː/ so \'a\'.',
      Marathi: 'Useful begins with consonant sound /juː/ so \'a\'.',
      Hindi: 'Useful begins with consonant sound /juː/ so \'a\'.',
      Urdu: 'Useful begins with consonant sound /juː/ so \\\'a\\\'.',
      Gujarati: 'Useful begins with consonant sound /juː/ so \\\'a\\\'.',
      Telugu: 'Useful begins with consonant sound /juː/ so \\\'a\\\'.',
      Kannada: 'Useful begins with consonant sound /juː/ so \\\'a\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q17',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'The frog jumped ___ the pond.',
      Marathi: 'बेडूक तळ्यात ___ उडी मारतो.',
      Hindi: 'मेंढक तालाब ___ कूद गया।',
      Urdu: 'The frog jumped ___ the pond.',
      Gujarati: 'मेंढक तालाब ___ कूद गया।',
      Telugu: 'The frog jumped ___ the pond.',
      Kannada: 'The frog jumped ___ the pond.'
    },
    options: {
      English: ['into', 'at', 'from', 'with'],
      Marathi: ['into', 'at', 'from', 'with'],
      Hindi: ['into', 'at', 'from', 'with'],
      Urdu: ['into', 'at', 'from', 'with'],
      Gujarati: ['into', 'at', 'from', 'with'],
      Telugu: ['into', 'at', 'from', 'with'],
      Kannada: ['into', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'into indicates movement to interior.',
      Marathi: 'into indicates movement to interior.',
      Hindi: 'into indicates movement to interior.',
      Urdu: 'into indicates movement to interior.',
      Gujarati: 'into indicates movement to interior.',
      Telugu: 'into indicates movement to interior.',
      Kannada: 'into indicates movement to interior.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q18',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'Birds ___ nests in trees to lay eggs.',
      Marathi: 'पक्षी झाडांवर अंडी घालण्यासाठी घरटी ___.',
      Hindi: 'पक्षी पेड़ों पर घोंसले ___ हैं।',
      Urdu: 'Birds ___ nests in trees to lay eggs.',
      Gujarati: 'पक्षी पेड़ों पर घोंसले ___ हैं।',
      Telugu: 'Birds ___ nests in trees to lay eggs.',
      Kannada: 'Birds ___ nests in trees to lay eggs.'
    },
    options: {
      English: ['build', 'ran', 'jumped', 'slept'],
      Marathi: ['build', 'ran', 'jumped', 'slept'],
      Hindi: ['build', 'ran', 'jumped', 'slept'],
      Urdu: ['build', 'ran', 'jumped', 'slept'],
      Gujarati: ['build', 'ran', 'jumped', 'slept'],
      Telugu: ['build', 'ran', 'jumped', 'slept'],
      Kannada: ['build', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Habitual action takes \'build\'.',
      Marathi: 'Habitual action takes \'build\'.',
      Hindi: 'Habitual action takes \'build\'.',
      Urdu: 'Habitual action takes \\\'build\\\'.',
      Gujarati: 'Habitual action takes \\\'build\\\'.',
      Telugu: 'Habitual action takes \\\'build\\\'.',
      Kannada: 'Habitual action takes \\\'build\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q19',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'What is the plural of \'knife\'?',
      Marathi: '\'knife\' या शब्दाचे अनेकवचन कोणते?',
      Hindi: '\'knife\' का बहुवचन क्या है?',
      Urdu: 'What is the plural of \\\'knife\\\'?',
      Gujarati: '\\\'knife\\\' का बहुवचन क्या है?',
      Telugu: 'What is the plural of \\\'knife\\\'?',
      Kannada: 'What is the plural of \\\'knife\\\'?'
    },
    options: {
      English: ['knives', 'knivess', 'kniveses', 'none'],
      Marathi: ['knives', 'knivess', 'kniveses', 'none'],
      Hindi: ['knives', 'knivess', 'kniveses', 'none'],
      Urdu: ['knives', 'knivess', 'kniveses', 'none'],
      Gujarati: ['knives', 'knivess', 'kniveses', 'none'],
      Telugu: ['knives', 'knivess', 'kniveses', 'none'],
      Kannada: ['knives', 'knivess', 'kniveses', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Words ending in -fe change to -ves: knives.',
      Marathi: 'Words ending in -fe change to -ves: knives.',
      Hindi: 'Words ending in -fe change to -ves: knives.',
      Urdu: 'Words ending in -fe change to -ves: knives.',
      Gujarati: 'Words ending in -fe change to -ves: knives.',
      Telugu: 'Words ending in -fe change to -ves: knives.',
      Kannada: 'Words ending in -fe change to -ves: knives.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q20',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Empty\'?',
      Marathi: '\'Empty\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Empty\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Empty\\\'?',
      Gujarati: '\\\'Empty\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Empty\\\'?',
      Kannada: 'What is the opposite of \\\'Empty\\\'?'
    },
    options: {
      English: ['Full', 'Good', 'Bad', 'Fast'],
      Marathi: ['Full', 'Good', 'Bad', 'Fast'],
      Hindi: ['Full', 'Good', 'Bad', 'Fast'],
      Urdu: ['Full', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Full', 'Good', 'Bad', 'Fast'],
      Telugu: ['Full', 'Good', 'Bad', 'Fast'],
      Kannada: ['Full', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Empty is Full.',
      Marathi: 'Opposite of Empty is Full.',
      Hindi: 'Opposite of Empty is Full.',
      Urdu: 'Opposite of Empty is Full.',
      Gujarati: 'Opposite of Empty is Full.',
      Telugu: 'Opposite of Empty is Full.',
      Kannada: 'Opposite of Empty is Full.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q16',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'I read ___ interesting story yesterday.',
      Marathi: 'काल मी एक ___ रंजक गोष्ट वाचली.',
      Hindi: 'मैंने कल एक ___ रोचक कहानी पढ़ी।',
      Urdu: 'I read ___ interesting story yesterday.',
      Gujarati: 'मैंने कल एक ___ रोचक कहानी पढ़ी।',
      Telugu: 'I read ___ interesting story yesterday.',
      Kannada: 'I read ___ interesting story yesterday.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 1,
    explanation: {
      English: 'Interesting starts with vowel sound so \'an\'.',
      Marathi: 'Interesting starts with vowel sound so \'an\'.',
      Hindi: 'Interesting starts with vowel sound so \'an\'.',
      Urdu: 'Interesting starts with vowel sound so \\\'an\\\'.',
      Gujarati: 'Interesting starts with vowel sound so \\\'an\\\'.',
      Telugu: 'Interesting starts with vowel sound so \\\'an\\\'.',
      Kannada: 'Interesting starts with vowel sound so \\\'an\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q17',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'The boy stood ___ his father.',
      Marathi: 'मुलगा वडिलां___ उभा राहिला.',
      Hindi: 'लड़का पिता के ___ खड़ा हुआ।',
      Urdu: 'The boy stood ___ his father.',
      Gujarati: 'लड़का पिता के ___ खड़ा हुआ।',
      Telugu: 'The boy stood ___ his father.',
      Kannada: 'The boy stood ___ his father.'
    },
    options: {
      English: ['beside', 'at', 'from', 'with'],
      Marathi: ['beside', 'at', 'from', 'with'],
      Hindi: ['beside', 'at', 'from', 'with'],
      Urdu: ['beside', 'at', 'from', 'with'],
      Gujarati: ['beside', 'at', 'from', 'with'],
      Telugu: ['beside', 'at', 'from', 'with'],
      Kannada: ['beside', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'beside means next to.',
      Marathi: 'beside means next to.',
      Hindi: 'beside means next to.',
      Urdu: 'beside means next to.',
      Gujarati: 'beside means next to.',
      Telugu: 'beside means next to.',
      Kannada: 'beside means next to.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q18',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'Water ___ at 100 degrees Celsius.',
      Marathi: 'पाणी १०० अंश सेल्सिअसवर ___.',
      Hindi: 'पानी १०० डिग्री सेल्सियस पर ___ है।',
      Urdu: 'Water ___ at 100 degrees Celsius.',
      Gujarati: 'पानी १०० डिग्री सेल्सियस पर ___ है।',
      Telugu: 'Water ___ at 100 degrees Celsius.',
      Kannada: 'Water ___ at 100 degrees Celsius.'
    },
    options: {
      English: ['boils', 'ran', 'jumped', 'slept'],
      Marathi: ['boils', 'ran', 'jumped', 'slept'],
      Hindi: ['boils', 'ran', 'jumped', 'slept'],
      Urdu: ['boils', 'ran', 'jumped', 'slept'],
      Gujarati: ['boils', 'ran', 'jumped', 'slept'],
      Telugu: ['boils', 'ran', 'jumped', 'slept'],
      Kannada: ['boils', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Scientific fact takes \'boils\'.',
      Marathi: 'Scientific fact takes \'boils\'.',
      Hindi: 'Scientific fact takes \'boils\'.',
      Urdu: 'Scientific fact takes \\\'boils\\\'.',
      Gujarati: 'Scientific fact takes \\\'boils\\\'.',
      Telugu: 'Scientific fact takes \\\'boils\\\'.',
      Kannada: 'Scientific fact takes \\\'boils\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q19',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'A ___ of wolves was howling in the forest.',
      Marathi: 'जंगलात लांडग्यांचा ___ ओरडत होता.',
      Hindi: 'जंगल में भेड़ियों का ___ गरज रहा था।',
      Urdu: 'A ___ of wolves was howling in the forest.',
      Gujarati: 'जंगल में भेड़ियों का ___ गरज रहा था।',
      Telugu: 'A ___ of wolves was howling in the forest.',
      Kannada: 'A ___ of wolves was howling in the forest.'
    },
    options: {
      English: ['pack', 'packs', 'packes', 'none'],
      Marathi: ['pack', 'packs', 'packes', 'none'],
      Hindi: ['pack', 'packs', 'packes', 'none'],
      Urdu: ['pack', 'packs', 'packes', 'none'],
      Gujarati: ['pack', 'packs', 'packes', 'none'],
      Telugu: ['pack', 'packs', 'packes', 'none'],
      Kannada: ['pack', 'packs', 'packes', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Collective noun for wolves is pack.',
      Marathi: 'Collective noun for wolves is pack.',
      Hindi: 'Collective noun for wolves is pack.',
      Urdu: 'Collective noun for wolves is pack.',
      Gujarati: 'Collective noun for wolves is pack.',
      Telugu: 'Collective noun for wolves is pack.',
      Kannada: 'Collective noun for wolves is pack.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q20',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Broad\'?',
      Marathi: '\'Broad\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Broad\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Broad\\\'?',
      Gujarati: '\\\'Broad\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Broad\\\'?',
      Kannada: 'What is the opposite of \\\'Broad\\\'?'
    },
    options: {
      English: ['Narrow', 'Good', 'Bad', 'Fast'],
      Marathi: ['Narrow', 'Good', 'Bad', 'Fast'],
      Hindi: ['Narrow', 'Good', 'Bad', 'Fast'],
      Urdu: ['Narrow', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Narrow', 'Good', 'Bad', 'Fast'],
      Telugu: ['Narrow', 'Good', 'Bad', 'Fast'],
      Kannada: ['Narrow', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Broad is Narrow.',
      Marathi: 'Opposite of Broad is Narrow.',
      Hindi: 'Opposite of Broad is Narrow.',
      Urdu: 'Opposite of Broad is Narrow.',
      Gujarati: 'Opposite of Broad is Narrow.',
      Telugu: 'Opposite of Broad is Narrow.',
      Kannada: 'Opposite of Broad is Narrow.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q16',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: '___ Ganga is a sacred river in India.',
      Marathi: '___ गंगा ही भारतातील पवित्र नदी आहे.',
      Hindi: '___ गंगा भारत की पवित्र नदी है।',
      Urdu: '___ Ganga is a sacred river in India.',
      Gujarati: '___ गंगा भारत की पवित्र नदी है।',
      Telugu: '___ Ganga is a sacred river in India.',
      Kannada: '___ Ganga is a sacred river in India.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 2,
    explanation: {
      English: 'Names of holy rivers take \'the\'.',
      Marathi: 'Names of holy rivers take \'the\'.',
      Hindi: 'Names of holy rivers take \'the\'.',
      Urdu: 'Names of holy rivers take \\\'the\\\'.',
      Gujarati: 'Names of holy rivers take \\\'the\\\'.',
      Telugu: 'Names of holy rivers take \\\'the\\\'.',
      Kannada: 'Names of holy rivers take \\\'the\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q17',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'Independence Day is celebrated ___ 15th August.',
      Marathi: 'स्वातंत्र्यदिन १५ ऑगस्ट___ साजरा केला जातो.',
      Hindi: 'स्वतंत्रता दिवस १५ अगस्त ___ मनाया जाता है।',
      Urdu: 'Independence Day is celebrated ___ 15th August.',
      Gujarati: 'स्वतंत्रता दिवस १५ अगस्त ___ मनाया जाता है।',
      Telugu: 'Independence Day is celebrated ___ 15th August.',
      Kannada: 'Independence Day is celebrated ___ 15th August.'
    },
    options: {
      English: ['on', 'at', 'from', 'with'],
      Marathi: ['on', 'at', 'from', 'with'],
      Hindi: ['on', 'at', 'from', 'with'],
      Urdu: ['on', 'at', 'from', 'with'],
      Gujarati: ['on', 'at', 'from', 'with'],
      Telugu: ['on', 'at', 'from', 'with'],
      Kannada: ['on', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'on is used for specific dates.',
      Marathi: 'on is used for specific dates.',
      Hindi: 'on is used for specific dates.',
      Urdu: 'on is used for specific dates.',
      Gujarati: 'on is used for specific dates.',
      Telugu: 'on is used for specific dates.',
      Kannada: 'on is used for specific dates.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q18',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'She ___ beautifully at the school annual day last week.',
      Marathi: 'गेल्या आठवड्यात तिने स्नेहसंमेलनात सुंदर नृत्य ___.',
      Hindi: 'पिछले हफ्ते उसने बहुत सुंदर नृत्य ___।',
      Urdu: 'She ___ beautifully at the school annual day last week.',
      Gujarati: 'पिछले हफ्ते उसने बहुत सुंदर नृत्य ___।',
      Telugu: 'She ___ beautifully at the school annual day last week.',
      Kannada: 'She ___ beautifully at the school annual day last week.'
    },
    options: {
      English: ['danced', 'ran', 'jumped', 'slept'],
      Marathi: ['danced', 'ran', 'jumped', 'slept'],
      Hindi: ['danced', 'ran', 'jumped', 'slept'],
      Urdu: ['danced', 'ran', 'jumped', 'slept'],
      Gujarati: ['danced', 'ran', 'jumped', 'slept'],
      Telugu: ['danced', 'ran', 'jumped', 'slept'],
      Kannada: ['danced', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Last week indicates simple past \'danced\'.',
      Marathi: 'Last week indicates simple past \'danced\'.',
      Hindi: 'Last week indicates simple past \'danced\'.',
      Urdu: 'Last week indicates simple past \\\'danced\\\'.',
      Gujarati: 'Last week indicates simple past \\\'danced\\\'.',
      Telugu: 'Last week indicates simple past \\\'danced\\\'.',
      Kannada: 'Last week indicates simple past \\\'danced\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q19',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'What is the plural of \'mouse\'?',
      Marathi: '\'mouse\' या शब्दाचे अनेकवचन काय?',
      Hindi: '\'mouse\' का बहुवचन क्या है?',
      Urdu: 'What is the plural of \\\'mouse\\\'?',
      Gujarati: '\\\'mouse\\\' का बहुवचन क्या है?',
      Telugu: 'What is the plural of \\\'mouse\\\'?',
      Kannada: 'What is the plural of \\\'mouse\\\'?'
    },
    options: {
      English: ['mice', 'mices', 'micees', 'none'],
      Marathi: ['mice', 'mices', 'micees', 'none'],
      Hindi: ['mice', 'mices', 'micees', 'none'],
      Urdu: ['mice', 'mices', 'micees', 'none'],
      Gujarati: ['mice', 'mices', 'micees', 'none'],
      Telugu: ['mice', 'mices', 'micees', 'none'],
      Kannada: ['mice', 'mices', 'micees', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural of mouse is mice.',
      Marathi: 'Plural of mouse is mice.',
      Hindi: 'Plural of mouse is mice.',
      Urdu: 'Plural of mouse is mice.',
      Gujarati: 'Plural of mouse is mice.',
      Telugu: 'Plural of mouse is mice.',
      Kannada: 'Plural of mouse is mice.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q20',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Victory\'?',
      Marathi: '\'Victory\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Victory\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Victory\\\'?',
      Gujarati: '\\\'Victory\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Victory\\\'?',
      Kannada: 'What is the opposite of \\\'Victory\\\'?'
    },
    options: {
      English: ['Defeat', 'Good', 'Bad', 'Fast'],
      Marathi: ['Defeat', 'Good', 'Bad', 'Fast'],
      Hindi: ['Defeat', 'Good', 'Bad', 'Fast'],
      Urdu: ['Defeat', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Defeat', 'Good', 'Bad', 'Fast'],
      Telugu: ['Defeat', 'Good', 'Bad', 'Fast'],
      Kannada: ['Defeat', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Victory is Defeat.',
      Marathi: 'Opposite of Victory is Defeat.',
      Hindi: 'Opposite of Victory is Defeat.',
      Urdu: 'Opposite of Victory is Defeat.',
      Gujarati: 'Opposite of Victory is Defeat.',
      Telugu: 'Opposite of Victory is Defeat.',
      Kannada: 'Opposite of Victory is Defeat.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q16',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'We will reach the station in ___ hour.',
      Marathi: 'आम्ही एका ___ तासात स्थानकावर पोहोचू.',
      Hindi: 'हम एक ___ घंटे में स्टेशन पहुंचेंगे।',
      Urdu: 'We will reach the station in ___ hour.',
      Gujarati: 'हम एक ___ घंटे में स्टेशन पहुंचेंगे।',
      Telugu: 'We will reach the station in ___ hour.',
      Kannada: 'We will reach the station in ___ hour.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 1,
    explanation: {
      English: 'Hour has silent \'h\' so \'an\'.',
      Marathi: 'Hour has silent \'h\' so \'an\'.',
      Hindi: 'Hour has silent \'h\' so \'an\'.',
      Urdu: 'Hour has silent \\\'h\\\' so \\\'an\\\'.',
      Gujarati: 'Hour has silent \\\'h\\\' so \\\'an\\\'.',
      Telugu: 'Hour has silent \\\'h\\\' so \\\'an\\\'.',
      Kannada: 'Hour has silent \\\'h\\\' so \\\'an\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q17',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'The train passed ___ the tunnel.',
      Marathi: 'आगगाडी बोगद्या___ गेली.',
      Hindi: 'ट्रेन सुरंग کے ___ गुजरी।',
      Urdu: 'The train passed ___ the tunnel.',
      Gujarati: 'ट्रेन सुरंग کے ___ गुजरी।',
      Telugu: 'The train passed ___ the tunnel.',
      Kannada: 'The train passed ___ the tunnel.'
    },
    options: {
      English: ['through', 'at', 'from', 'with'],
      Marathi: ['through', 'at', 'from', 'with'],
      Hindi: ['through', 'at', 'from', 'with'],
      Urdu: ['through', 'at', 'from', 'with'],
      Gujarati: ['through', 'at', 'from', 'with'],
      Telugu: ['through', 'at', 'from', 'with'],
      Kannada: ['through', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'through means passing inside.',
      Marathi: 'through means passing inside.',
      Hindi: 'through means passing inside.',
      Urdu: 'through means passing inside.',
      Gujarati: 'through means passing inside.',
      Telugu: 'through means passing inside.',
      Kannada: 'through means passing inside.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q18',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'Look! Raju ___ his homework right now.',
      Marathi: 'पहा! राजू सध्या आपला गृहपाठ ___.',
      Hindi: 'देखो! राजू इस समय गृहकार्य ___।',
      Urdu: 'Look! Raju ___ his homework right now.',
      Gujarati: 'देखो! राजू इस समय गृहकार्य ___।',
      Telugu: 'Look! Raju ___ his homework right now.',
      Kannada: 'Look! Raju ___ his homework right now.'
    },
    options: {
      English: ['is doing', 'ran', 'jumped', 'slept'],
      Marathi: ['is doing', 'ran', 'jumped', 'slept'],
      Hindi: ['is doing', 'ran', 'jumped', 'slept'],
      Urdu: ['is doing', 'ran', 'jumped', 'slept'],
      Gujarati: ['is doing', 'ran', 'jumped', 'slept'],
      Telugu: ['is doing', 'ran', 'jumped', 'slept'],
      Kannada: ['is doing', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Right now indicates present continuous \'is doing\'.',
      Marathi: 'Right now indicates present continuous \'is doing\'.',
      Hindi: 'Right now indicates present continuous \'is doing\'.',
      Urdu: 'Right now indicates present continuous \\\'is doing\\\'.',
      Gujarati: 'Right now indicates present continuous \\\'is doing\\\'.',
      Telugu: 'Right now indicates present continuous \\\'is doing\\\'.',
      Kannada: 'Right now indicates present continuous \\\'is doing\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q19',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'A ___ of bees flew out of the hive.',
      Marathi: 'पोळ्यामधून मधमाशांचा ___ बाहेर पडला.',
      Hindi: 'छत्ते से मधुमक्खियों का ___ निकला।',
      Urdu: 'A ___ of bees flew out of the hive.',
      Gujarati: 'छत्ते से मधुमक्खियों का ___ निकला।',
      Telugu: 'A ___ of bees flew out of the hive.',
      Kannada: 'A ___ of bees flew out of the hive.'
    },
    options: {
      English: ['swarm', 'swarms', 'swarmes', 'none'],
      Marathi: ['swarm', 'swarms', 'swarmes', 'none'],
      Hindi: ['swarm', 'swarms', 'swarmes', 'none'],
      Urdu: ['swarm', 'swarms', 'swarmes', 'none'],
      Gujarati: ['swarm', 'swarms', 'swarmes', 'none'],
      Telugu: ['swarm', 'swarms', 'swarmes', 'none'],
      Kannada: ['swarm', 'swarms', 'swarmes', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Collective noun for bees is swarm.',
      Marathi: 'Collective noun for bees is swarm.',
      Hindi: 'Collective noun for bees is swarm.',
      Urdu: 'Collective noun for bees is swarm.',
      Gujarati: 'Collective noun for bees is swarm.',
      Telugu: 'Collective noun for bees is swarm.',
      Kannada: 'Collective noun for bees is swarm.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q20',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Proud\'?',
      Marathi: '\'Proud\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Proud\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Proud\\\'?',
      Gujarati: '\\\'Proud\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Proud\\\'?',
      Kannada: 'What is the opposite of \\\'Proud\\\'?'
    },
    options: {
      English: ['Humble', 'Good', 'Bad', 'Fast'],
      Marathi: ['Humble', 'Good', 'Bad', 'Fast'],
      Hindi: ['Humble', 'Good', 'Bad', 'Fast'],
      Urdu: ['Humble', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Humble', 'Good', 'Bad', 'Fast'],
      Telugu: ['Humble', 'Good', 'Bad', 'Fast'],
      Kannada: ['Humble', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Proud is Humble.',
      Marathi: 'Opposite of Proud is Humble.',
      Hindi: 'Opposite of Proud is Humble.',
      Urdu: 'Opposite of Proud is Humble.',
      Gujarati: 'Opposite of Proud is Humble.',
      Telugu: 'Opposite of Proud is Humble.',
      Kannada: 'Opposite of Proud is Humble.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q16',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'He wants to become ___ astronaut.',
      Marathi: 'त्याला ___ अंतराळवीर बनायचे आहे.',
      Hindi: 'वह एक ___ अंतरिक्ष यात्री बनना चाहता है।',
      Urdu: 'He wants to become ___ astronaut.',
      Gujarati: 'वह एक ___ अंतरिक्ष यात्री बनना चाहता है।',
      Telugu: 'He wants to become ___ astronaut.',
      Kannada: 'He wants to become ___ astronaut.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 1,
    explanation: {
      English: 'Astronaut starts with vowel sound /æ/ so \'an\'.',
      Marathi: 'Astronaut starts with vowel sound /æ/ so \'an\'.',
      Hindi: 'Astronaut starts with vowel sound /æ/ so \'an\'.',
      Urdu: 'Astronaut starts with vowel sound /æ/ so \\\'an\\\'.',
      Gujarati: 'Astronaut starts with vowel sound /æ/ so \\\'an\\\'.',
      Telugu: 'Astronaut starts with vowel sound /æ/ so \\\'an\\\'.',
      Kannada: 'Astronaut starts with vowel sound /æ/ so \\\'an\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q17',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'The puppy hid ___ the door.',
      Marathi: 'पिल्लू दरवाजा___ लपले.',
      Hindi: 'पिल्ला दरवाजे के ___ छिप गया।',
      Urdu: 'The puppy hid ___ the door.',
      Gujarati: 'पिल्ला दरवाजे के ___ छिप गया।',
      Telugu: 'The puppy hid ___ the door.',
      Kannada: 'The puppy hid ___ the door.'
    },
    options: {
      English: ['behind', 'at', 'from', 'with'],
      Marathi: ['behind', 'at', 'from', 'with'],
      Hindi: ['behind', 'at', 'from', 'with'],
      Urdu: ['behind', 'at', 'from', 'with'],
      Gujarati: ['behind', 'at', 'from', 'with'],
      Telugu: ['behind', 'at', 'from', 'with'],
      Kannada: ['behind', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'behind means at the back of.',
      Marathi: 'behind means at the back of.',
      Hindi: 'behind means at the back of.',
      Urdu: 'behind means at the back of.',
      Gujarati: 'behind means at the back of.',
      Telugu: 'behind means at the back of.',
      Kannada: 'behind means at the back of.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q18',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'The gardener ___ the plants every evening.',
      Marathi: 'माळी रोज संध्याकाळी झाडांना पाणी ___.',
      Hindi: 'माली रोज शाम को पौधों को पानी ___ है।',
      Urdu: 'The gardener ___ the plants every evening.',
      Gujarati: 'माली रोज शाम को पौधों को पानी ___ है।',
      Telugu: 'The gardener ___ the plants every evening.',
      Kannada: 'The gardener ___ the plants every evening.'
    },
    options: {
      English: ['waters', 'ran', 'jumped', 'slept'],
      Marathi: ['waters', 'ran', 'jumped', 'slept'],
      Hindi: ['waters', 'ran', 'jumped', 'slept'],
      Urdu: ['waters', 'ran', 'jumped', 'slept'],
      Gujarati: ['waters', 'ran', 'jumped', 'slept'],
      Telugu: ['waters', 'ran', 'jumped', 'slept'],
      Kannada: ['waters', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Routine takes simple present \'waters\'.',
      Marathi: 'Routine takes simple present \'waters\'.',
      Hindi: 'Routine takes simple present \'waters\'.',
      Urdu: 'Routine takes simple present \\\'waters\\\'.',
      Gujarati: 'Routine takes simple present \\\'waters\\\'.',
      Telugu: 'Routine takes simple present \\\'waters\\\'.',
      Kannada: 'Routine takes simple present \\\'waters\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q19',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'What is the plural of \'leaf\'?',
      Marathi: '\'leaf\' या शब्दाचे अनेकवचन काय?',
      Hindi: '\'leaf\' का बहुवचन क्या है?',
      Urdu: 'What is the plural of \\\'leaf\\\'?',
      Gujarati: '\\\'leaf\\\' का बहुवचन क्या है?',
      Telugu: 'What is the plural of \\\'leaf\\\'?',
      Kannada: 'What is the plural of \\\'leaf\\\'?'
    },
    options: {
      English: ['leaves', 'leavess', 'leaveses', 'none'],
      Marathi: ['leaves', 'leavess', 'leaveses', 'none'],
      Hindi: ['leaves', 'leavess', 'leaveses', 'none'],
      Urdu: ['leaves', 'leavess', 'leaveses', 'none'],
      Gujarati: ['leaves', 'leavess', 'leaveses', 'none'],
      Telugu: ['leaves', 'leavess', 'leaveses', 'none'],
      Kannada: ['leaves', 'leavess', 'leaveses', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural of leaf is leaves.',
      Marathi: 'Plural of leaf is leaves.',
      Hindi: 'Plural of leaf is leaves.',
      Urdu: 'Plural of leaf is leaves.',
      Gujarati: 'Plural of leaf is leaves.',
      Telugu: 'Plural of leaf is leaves.',
      Kannada: 'Plural of leaf is leaves.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q20',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Heavy\'?',
      Marathi: '\'Heavy\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Heavy\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Heavy\\\'?',
      Gujarati: '\\\'Heavy\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Heavy\\\'?',
      Kannada: 'What is the opposite of \\\'Heavy\\\'?'
    },
    options: {
      English: ['Light', 'Good', 'Bad', 'Fast'],
      Marathi: ['Light', 'Good', 'Bad', 'Fast'],
      Hindi: ['Light', 'Good', 'Bad', 'Fast'],
      Urdu: ['Light', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Light', 'Good', 'Bad', 'Fast'],
      Telugu: ['Light', 'Good', 'Bad', 'Fast'],
      Kannada: ['Light', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Heavy is Light.',
      Marathi: 'Opposite of Heavy is Light.',
      Hindi: 'Opposite of Heavy is Light.',
      Urdu: 'Opposite of Heavy is Light.',
      Gujarati: 'Opposite of Heavy is Light.',
      Telugu: 'Opposite of Heavy is Light.',
      Kannada: 'Opposite of Heavy is Light.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q16',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'She gave the beggar ___ one-rupee coin.',
      Marathi: 'तिने भिकाऱ्याला ___ एक रुपयाचे नाणे दिले.',
      Hindi: 'उसने भिखारी को ___ एक रुपये का सिक्का दिया।',
      Urdu: 'She gave the beggar ___ one-rupee coin.',
      Gujarati: 'उसने भिखारी को ___ एक रुपये का सिक्का दिया।',
      Telugu: 'She gave the beggar ___ one-rupee coin.',
      Kannada: 'She gave the beggar ___ one-rupee coin.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 0,
    explanation: {
      English: 'One starts with consonant sound /w/ so \'a\'.',
      Marathi: 'One starts with consonant sound /w/ so \'a\'.',
      Hindi: 'One starts with consonant sound /w/ so \'a\'.',
      Urdu: 'One starts with consonant sound /w/ so \\\'a\\\'.',
      Gujarati: 'One starts with consonant sound /w/ so \\\'a\\\'.',
      Telugu: 'One starts with consonant sound /w/ so \\\'a\\\'.',
      Kannada: 'One starts with consonant sound /w/ so \\\'a\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q17',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'Distribute the notebooks ___ all students.',
      Marathi: 'वह्या सर्व विद्यार्थ्यां___ वाटा.',
      Hindi: 'कॉपियां सभी छात्रों के ___ बांटो।',
      Urdu: 'Distribute the notebooks ___ all students.',
      Gujarati: 'कॉपियां सभी छात्रों के ___ बांटो।',
      Telugu: 'Distribute the notebooks ___ all students.',
      Kannada: 'Distribute the notebooks ___ all students.'
    },
    options: {
      English: ['among', 'at', 'from', 'with'],
      Marathi: ['among', 'at', 'from', 'with'],
      Hindi: ['among', 'at', 'from', 'with'],
      Urdu: ['among', 'at', 'from', 'with'],
      Gujarati: ['among', 'at', 'from', 'with'],
      Telugu: ['among', 'at', 'from', 'with'],
      Kannada: ['among', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'among is used for more than two.',
      Marathi: 'among is used for more than two.',
      Hindi: 'among is used for more than two.',
      Urdu: 'among is used for more than two.',
      Gujarati: 'among is used for more than two.',
      Telugu: 'among is used for more than two.',
      Kannada: 'among is used for more than two.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q18',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'Last year, our school ___ the championship.',
      Marathi: 'गेल्या वर्षी आमच्या शाळेने चषक ___.',
      Hindi: 'पिछले साल हमारे स्कूल ने चैंपियनशिप ___।',
      Urdu: 'Last year, our school ___ the championship.',
      Gujarati: 'पिछले साल हमारे स्कूल ने चैंपियनशिप ___।',
      Telugu: 'Last year, our school ___ the championship.',
      Kannada: 'Last year, our school ___ the championship.'
    },
    options: {
      English: ['won', 'ran', 'jumped', 'slept'],
      Marathi: ['won', 'ran', 'jumped', 'slept'],
      Hindi: ['won', 'ran', 'jumped', 'slept'],
      Urdu: ['won', 'ran', 'jumped', 'slept'],
      Gujarati: ['won', 'ran', 'jumped', 'slept'],
      Telugu: ['won', 'ran', 'jumped', 'slept'],
      Kannada: ['won', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Last year indicates past \'won\'.',
      Marathi: 'Last year indicates past \'won\'.',
      Hindi: 'Last year indicates past \'won\'.',
      Urdu: 'Last year indicates past \\\'won\\\'.',
      Gujarati: 'Last year indicates past \\\'won\\\'.',
      Telugu: 'Last year indicates past \\\'won\\\'.',
      Kannada: 'Last year indicates past \\\'won\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q19',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'A ___ of keys was lying on the desk.',
      Marathi: 'टेबलावर किल्ल्यांचा ___ पडला होता.',
      Hindi: 'मेज पर चाभियों का ___ पड़ा था।',
      Urdu: 'A ___ of keys was lying on the desk.',
      Gujarati: 'मेज पर चाभियों का ___ पड़ा था।',
      Telugu: 'A ___ of keys was lying on the desk.',
      Kannada: 'A ___ of keys was lying on the desk.'
    },
    options: {
      English: ['bunch', 'bunchs', 'bunches', 'none'],
      Marathi: ['bunch', 'bunchs', 'bunches', 'none'],
      Hindi: ['bunch', 'bunchs', 'bunches', 'none'],
      Urdu: ['bunch', 'bunchs', 'bunches', 'none'],
      Gujarati: ['bunch', 'bunchs', 'bunches', 'none'],
      Telugu: ['bunch', 'bunchs', 'bunches', 'none'],
      Kannada: ['bunch', 'bunchs', 'bunches', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Collective noun for keys is bunch.',
      Marathi: 'Collective noun for keys is bunch.',
      Hindi: 'Collective noun for keys is bunch.',
      Urdu: 'Collective noun for keys is bunch.',
      Gujarati: 'Collective noun for keys is bunch.',
      Telugu: 'Collective noun for keys is bunch.',
      Kannada: 'Collective noun for keys is bunch.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q20',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Cruel\'?',
      Marathi: '\'Cruel\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Cruel\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Cruel\\\'?',
      Gujarati: '\\\'Cruel\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Cruel\\\'?',
      Kannada: 'What is the opposite of \\\'Cruel\\\'?'
    },
    options: {
      English: ['Kind', 'Good', 'Bad', 'Fast'],
      Marathi: ['Kind', 'Good', 'Bad', 'Fast'],
      Hindi: ['Kind', 'Good', 'Bad', 'Fast'],
      Urdu: ['Kind', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Kind', 'Good', 'Bad', 'Fast'],
      Telugu: ['Kind', 'Good', 'Bad', 'Fast'],
      Kannada: ['Kind', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Cruel is Kind.',
      Marathi: 'Opposite of Cruel is Kind.',
      Hindi: 'Opposite of Cruel is Kind.',
      Urdu: 'Opposite of Cruel is Kind.',
      Gujarati: 'Opposite of Cruel is Kind.',
      Telugu: 'Opposite of Cruel is Kind.',
      Kannada: 'Opposite of Cruel is Kind.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q16',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'easy',
    type: 'article',
    questionText: {
      English: 'Paris is ___ European city.',
      Marathi: 'पॅरिस हे एक ___ युरोपीय शहर आहे.',
      Hindi: 'पेरिस एक ___ यूरोपीय शहर है।',
      Urdu: 'Paris is ___ European city.',
      Gujarati: 'पेरिस एक ___ यूरोपीय शहर है।',
      Telugu: 'Paris is ___ European city.',
      Kannada: 'Paris is ___ European city.'
    },
    options: {
      English: ['A', 'An', 'The', 'No article'],
      Marathi: ['A', 'An', 'The', 'No article'],
      Hindi: ['A', 'An', 'The', 'No article'],
      Urdu: ['A', 'An', 'The', 'No article'],
      Gujarati: ['A', 'An', 'The', 'No article'],
      Telugu: ['A', 'An', 'The', 'No article'],
      Kannada: ['A', 'An', 'The', 'No article']
    },
    correctIndex: 0,
    explanation: {
      English: 'European starts with consonant /j/ sound so \'a\'.',
      Marathi: 'European starts with consonant /j/ sound so \'a\'.',
      Hindi: 'European starts with consonant /j/ sound so \'a\'.',
      Urdu: 'European starts with consonant /j/ sound so \\\'a\\\'.',
      Gujarati: 'European starts with consonant /j/ sound so \\\'a\\\'.',
      Telugu: 'European starts with consonant /j/ sound so \\\'a\\\'.',
      Kannada: 'European starts with consonant /j/ sound so \\\'a\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q17',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'easy',
    type: 'preposition',
    questionText: {
      English: 'The aeroplane landed ___ the airport.',
      Marathi: 'विमान विमानतळा___ उतरले.',
      Hindi: 'विमान हवाई अड्डे ___ उतरा।',
      Urdu: 'The aeroplane landed ___ the airport.',
      Gujarati: 'विमान हवाई अड्डे ___ उतरा।',
      Telugu: 'The aeroplane landed ___ the airport.',
      Kannada: 'The aeroplane landed ___ the airport.'
    },
    options: {
      English: ['at', 'at', 'from', 'with'],
      Marathi: ['at', 'at', 'from', 'with'],
      Hindi: ['at', 'at', 'from', 'with'],
      Urdu: ['at', 'at', 'from', 'with'],
      Gujarati: ['at', 'at', 'from', 'with'],
      Telugu: ['at', 'at', 'from', 'with'],
      Kannada: ['at', 'at', 'from', 'with']
    },
    correctIndex: 0,
    explanation: {
      English: 'at is used for specific point/facility.',
      Marathi: 'at is used for specific point/facility.',
      Hindi: 'at is used for specific point/facility.',
      Urdu: 'at is used for specific point/facility.',
      Gujarati: 'at is used for specific point/facility.',
      Telugu: 'at is used for specific point/facility.',
      Kannada: 'at is used for specific point/facility.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q18',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'easy',
    type: 'verb',
    questionText: {
      English: 'Plants ___ sunlight and water for growth.',
      Marathi: 'वनस्पतींना वाढीसाठी सूर्यप्रकाश व पाणी ___.',
      Hindi: 'पौधों को वृद्धि के लिए धूप और पानी की ___ होती है।',
      Urdu: 'Plants ___ sunlight and water for growth.',
      Gujarati: 'पौधों को वृद्धि के लिए धूप और पानी की ___ होती है।',
      Telugu: 'Plants ___ sunlight and water for growth.',
      Kannada: 'Plants ___ sunlight and water for growth.'
    },
    options: {
      English: ['need', 'ran', 'jumped', 'slept'],
      Marathi: ['need', 'ran', 'jumped', 'slept'],
      Hindi: ['need', 'ran', 'jumped', 'slept'],
      Urdu: ['need', 'ran', 'jumped', 'slept'],
      Gujarati: ['need', 'ran', 'jumped', 'slept'],
      Telugu: ['need', 'ran', 'jumped', 'slept'],
      Kannada: ['need', 'ran', 'jumped', 'slept']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural subject takes \'need\'.',
      Marathi: 'Plural subject takes \'need\'.',
      Hindi: 'Plural subject takes \'need\'.',
      Urdu: 'Plural subject takes \\\'need\\\'.',
      Gujarati: 'Plural subject takes \\\'need\\\'.',
      Telugu: 'Plural subject takes \\\'need\\\'.',
      Kannada: 'Plural subject takes \\\'need\\\'.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q19',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'noun',
    questionText: {
      English: 'What is the plural of \'foot\'?',
      Marathi: '\'foot\' या शब्दाचे अनेकवचन काय?',
      Hindi: '\'foot\' का बहुवचन क्या है?',
      Urdu: 'What is the plural of \\\'foot\\\'?',
      Gujarati: '\\\'foot\\\' का बहुवचन क्या है?',
      Telugu: 'What is the plural of \\\'foot\\\'?',
      Kannada: 'What is the plural of \\\'foot\\\'?'
    },
    options: {
      English: ['feet', 'feets', 'feetes', 'none'],
      Marathi: ['feet', 'feets', 'feetes', 'none'],
      Hindi: ['feet', 'feets', 'feetes', 'none'],
      Urdu: ['feet', 'feets', 'feetes', 'none'],
      Gujarati: ['feet', 'feets', 'feetes', 'none'],
      Telugu: ['feet', 'feets', 'feetes', 'none'],
      Kannada: ['feet', 'feets', 'feetes', 'none']
    },
    correctIndex: 0,
    explanation: {
      English: 'Plural of foot is feet.',
      Marathi: 'Plural of foot is feet.',
      Hindi: 'Plural of foot is feet.',
      Urdu: 'Plural of foot is feet.',
      Gujarati: 'Plural of foot is feet.',
      Telugu: 'Plural of foot is feet.',
      Kannada: 'Plural of foot is feet.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q20',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'easy',
    type: 'antonym',
    questionText: {
      English: 'What is the opposite of \'Sweet\'?',
      Marathi: '\'Sweet\' या शब्दाचा विरुद्धार्थी शब्द कोणता?',
      Hindi: '\'Sweet\' का विलोम शब्द क्या है?',
      Urdu: 'What is the opposite of \\\'Sweet\\\'?',
      Gujarati: '\\\'Sweet\\\' का विलोम शब्द क्या है?',
      Telugu: 'What is the opposite of \\\'Sweet\\\'?',
      Kannada: 'What is the opposite of \\\'Sweet\\\'?'
    },
    options: {
      English: ['Bitter', 'Good', 'Bad', 'Fast'],
      Marathi: ['Bitter', 'Good', 'Bad', 'Fast'],
      Hindi: ['Bitter', 'Good', 'Bad', 'Fast'],
      Urdu: ['Bitter', 'Good', 'Bad', 'Fast'],
      Gujarati: ['Bitter', 'Good', 'Bad', 'Fast'],
      Telugu: ['Bitter', 'Good', 'Bad', 'Fast'],
      Kannada: ['Bitter', 'Good', 'Bad', 'Fast']
    },
    correctIndex: 0,
    explanation: {
      English: 'Opposite of Sweet is Bitter.',
      Marathi: 'Opposite of Sweet is Bitter.',
      Hindi: 'Opposite of Sweet is Bitter.',
      Urdu: 'Opposite of Sweet is Bitter.',
      Gujarati: 'Opposite of Sweet is Bitter.',
      Telugu: 'Opposite of Sweet is Bitter.',
      Kannada: 'Opposite of Sweet is Bitter.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q21',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 4, 8, 12, 16, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 4, 8, 12, 16, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 4, 8, 12, 16, ?',
      Urdu: 'Find next number: 4, 8, 12, 16, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 4, 8, 12, 16, ?',
      Telugu: 'Find next number: 4, 8, 12, 16, ?',
      Kannada: 'Find next number: 4, 8, 12, 16, ?'
    },
    options: {
      English: ['20', '18', '24', '16'],
      Marathi: ['20', '18', '24', '16'],
      Hindi: ['20', '18', '24', '16'],
      Urdu: ['20', '18', '24', '16'],
      Gujarati: ['20', '18', '24', '16'],
      Telugu: ['20', '18', '24', '16'],
      Kannada: ['20', '18', '24', '16']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +4.',
      Marathi: 'प्रत्येक संख्येत +4 चा फरक आहे.',
      Hindi: '+4 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +4.',
      Gujarati: '+4 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +4.',
      Kannada: 'Each number increases by +4.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q22',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 4, 9, 16, 25, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 4, 9, 16, 25, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 4, 9, 16, 25, ?',
      Urdu: 'Find next square number in sequence: 4, 9, 16, 25, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 4, 9, 16, 25, ?',
      Telugu: 'Find next square number in sequence: 4, 9, 16, 25, ?',
      Kannada: 'Find next square number in sequence: 4, 9, 16, 25, ?'
    },
    options: {
      English: ['36', '26', '51', '16'],
      Marathi: ['36', '26', '51', '16'],
      Hindi: ['36', '26', '51', '16'],
      Urdu: ['36', '26', '51', '16'],
      Gujarati: ['36', '26', '51', '16'],
      Telugu: ['36', '26', '51', '16'],
      Kannada: ['36', '26', '51', '16']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (6)² = 36.',
      Marathi: 'पुढील वर्ग (6)² = 36.',
      Hindi: 'अगला वर्ग (6)² = 36।',
      Urdu: 'Next square is (6)² = 36.',
      Gujarati: 'अगला वर्ग (6)² = 36।',
      Telugu: 'Next square is (6)² = 36.',
      Kannada: 'Next square is (6)² = 36.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q23',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: C, D, E, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: C, D, E, ?',
      Hindi: 'अगला अक्षर पहचानें: C, D, E, ?',
      Urdu: 'Find next letter: C, D, E, ?',
      Gujarati: 'अगला अक्षर पहचानें: C, D, E, ?',
      Telugu: 'Find next letter: C, D, E, ?',
      Kannada: 'Find next letter: C, D, E, ?'
    },
    options: {
      English: ['F', 'G', 'D', 'Z'],
      Marathi: ['F', 'G', 'D', 'Z'],
      Hindi: ['F', 'G', 'D', 'Z'],
      Urdu: ['F', 'G', 'D', 'Z'],
      Gujarati: ['F', 'G', 'D', 'Z'],
      Telugu: ['F', 'G', 'D', 'Z'],
      Kannada: ['F', 'G', 'D', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q24',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Apple', 'Mango', 'Banana', 'Potato'],
      Marathi: ['Apple', 'Mango', 'Banana', 'Potato'],
      Hindi: ['Apple', 'Mango', 'Banana', 'Potato'],
      Urdu: ['Apple', 'Mango', 'Banana', 'Potato'],
      Gujarati: ['Apple', 'Mango', 'Banana', 'Potato'],
      Telugu: ['Apple', 'Mango', 'Banana', 'Potato'],
      Kannada: ['Apple', 'Mango', 'Banana', 'Potato']
    },
    correctIndex: 3,
    explanation: {
      English: 'Potato is a vegetable, others are fruits.',
      Marathi: 'Potato is a vegetable, others are fruits.',
      Hindi: 'Potato is a vegetable, others are fruits.',
      Urdu: 'Potato is a vegetable, others are fruits.',
      Gujarati: 'Potato is a vegetable, others are fruits.',
      Telugu: 'Potato is a vegetable, others are fruits.',
      Kannada: 'Potato is a vegetable, others are fruits.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q25',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Cow : Calf :: Horse : ?',
      Marathi: 'समसंबंध पूर्ण करा: Cow : Calf :: Horse : ?',
      Hindi: 'समान संबंध पूर्ण करें: Cow : Calf :: Horse : ?',
      Urdu: 'Complete the analogy: Cow : Calf :: Horse : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Cow : Calf :: Horse : ?',
      Telugu: 'Complete the analogy: Cow : Calf :: Horse : ?',
      Kannada: 'Complete the analogy: Cow : Calf :: Horse : ?'
    },
    options: {
      English: ['Colt / Foal', 'Puppy', 'Kitten', 'Cub'],
      Marathi: ['Colt / Foal', 'Puppy', 'Kitten', 'Cub'],
      Hindi: ['Colt / Foal', 'Puppy', 'Kitten', 'Cub'],
      Urdu: ['Colt / Foal', 'Puppy', 'Kitten', 'Cub'],
      Gujarati: ['Colt / Foal', 'Puppy', 'Kitten', 'Cub'],
      Telugu: ['Colt / Foal', 'Puppy', 'Kitten', 'Cub'],
      Kannada: ['Colt / Foal', 'Puppy', 'Kitten', 'Cub']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Colt / Foal.',
      Marathi: 'योग्य संबंध Colt / Foal हा आहे.',
      Hindi: 'सही संबंध Colt / Foal है।',
      Urdu: 'Correct relationship is Colt / Foal.',
      Gujarati: 'सही संबंध Colt / Foal है।',
      Telugu: 'Correct relationship is Colt / Foal.',
      Kannada: 'Correct relationship is Colt / Foal.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q26',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर CAT ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is CAT coded?'
    },
    options: {
      English: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['DBU', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q27',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 3 : 9 :: 4 : ?',
      Marathi: 'समसंबंध ओळखा: 3 : 9 :: 4 : ?',
      Hindi: 'समानुपात ज्ञात करें: 3 : 9 :: 4 : ?',
      Urdu: 'Find missing number: 3 : 9 :: 4 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 3 : 9 :: 4 : ?',
      Telugu: 'Find missing number: 3 : 9 :: 4 : ?',
      Kannada: 'Find missing number: 3 : 9 :: 4 : ?'
    },
    options: {
      English: ['16', '11', '8', '26'],
      Marathi: ['16', '11', '8', '26'],
      Hindi: ['16', '11', '8', '26'],
      Urdu: ['16', '11', '8', '26'],
      Gujarati: ['16', '11', '8', '26'],
      Telugu: ['16', '11', '8', '26'],
      Kannada: ['16', '11', '8', '26']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q28',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q29',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s1_q30',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q21',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 8, 13, 18, 23, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 8, 13, 18, 23, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 8, 13, 18, 23, ?',
      Urdu: 'Find next number: 8, 13, 18, 23, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 8, 13, 18, 23, ?',
      Telugu: 'Find next number: 8, 13, 18, 23, ?',
      Kannada: 'Find next number: 8, 13, 18, 23, ?'
    },
    options: {
      English: ['28', '26', '32', '23'],
      Marathi: ['28', '26', '32', '23'],
      Hindi: ['28', '26', '32', '23'],
      Urdu: ['28', '26', '32', '23'],
      Gujarati: ['28', '26', '32', '23'],
      Telugu: ['28', '26', '32', '23'],
      Kannada: ['28', '26', '32', '23']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +5.',
      Marathi: 'प्रत्येक संख्येत +5 चा फरक आहे.',
      Hindi: '+5 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +5.',
      Gujarati: '+5 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +5.',
      Kannada: 'Each number increases by +5.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q22',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 9, 16, 25, 36, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 9, 16, 25, 36, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 9, 16, 25, 36, ?',
      Urdu: 'Find next square number in sequence: 9, 16, 25, 36, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 9, 16, 25, 36, ?',
      Telugu: 'Find next square number in sequence: 9, 16, 25, 36, ?',
      Kannada: 'Find next square number in sequence: 9, 16, 25, 36, ?'
    },
    options: {
      English: ['49', '39', '64', '29'],
      Marathi: ['49', '39', '64', '29'],
      Hindi: ['49', '39', '64', '29'],
      Urdu: ['49', '39', '64', '29'],
      Gujarati: ['49', '39', '64', '29'],
      Telugu: ['49', '39', '64', '29'],
      Kannada: ['49', '39', '64', '29']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (7)² = 49.',
      Marathi: 'पुढील वर्ग (7)² = 49.',
      Hindi: 'अगला वर्ग (7)² = 49।',
      Urdu: 'Next square is (7)² = 49.',
      Gujarati: 'अगला वर्ग (7)² = 49।',
      Telugu: 'Next square is (7)² = 49.',
      Kannada: 'Next square is (7)² = 49.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q23',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: E, F, G, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: E, F, G, ?',
      Hindi: 'अगला अक्षर पहचानें: E, F, G, ?',
      Urdu: 'Find next letter: E, F, G, ?',
      Gujarati: 'अगला अक्षर पहचानें: E, F, G, ?',
      Telugu: 'Find next letter: E, F, G, ?',
      Kannada: 'Find next letter: E, F, G, ?'
    },
    options: {
      English: ['H', 'I', 'F', 'Z'],
      Marathi: ['H', 'I', 'F', 'Z'],
      Hindi: ['H', 'I', 'F', 'Z'],
      Urdu: ['H', 'I', 'F', 'Z'],
      Gujarati: ['H', 'I', 'F', 'Z'],
      Telugu: ['H', 'I', 'F', 'Z'],
      Kannada: ['H', 'I', 'F', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q24',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['16', '25', '36', '42'],
      Marathi: ['16', '25', '36', '42'],
      Hindi: ['16', '25', '36', '42'],
      Urdu: ['16', '25', '36', '42'],
      Gujarati: ['16', '25', '36', '42'],
      Telugu: ['16', '25', '36', '42'],
      Kannada: ['16', '25', '36', '42']
    },
    correctIndex: 3,
    explanation: {
      English: '42 is not a perfect square, others are.',
      Marathi: '42 is not a perfect square, others are.',
      Hindi: '42 is not a perfect square, others are.',
      Urdu: '42 is not a perfect square, others are.',
      Gujarati: '42 is not a perfect square, others are.',
      Telugu: '42 is not a perfect square, others are.',
      Kannada: '42 is not a perfect square, others are.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q25',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Pen : Write :: Knife : ?',
      Marathi: 'समसंबंध पूर्ण करा: Pen : Write :: Knife : ?',
      Hindi: 'समान संबंध पूर्ण करें: Pen : Write :: Knife : ?',
      Urdu: 'Complete the analogy: Pen : Write :: Knife : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Pen : Write :: Knife : ?',
      Telugu: 'Complete the analogy: Pen : Write :: Knife : ?',
      Kannada: 'Complete the analogy: Pen : Write :: Knife : ?'
    },
    options: {
      English: ['Cut', 'Read', 'Drink', 'Fly'],
      Marathi: ['Cut', 'Read', 'Drink', 'Fly'],
      Hindi: ['Cut', 'Read', 'Drink', 'Fly'],
      Urdu: ['Cut', 'Read', 'Drink', 'Fly'],
      Gujarati: ['Cut', 'Read', 'Drink', 'Fly'],
      Telugu: ['Cut', 'Read', 'Drink', 'Fly'],
      Kannada: ['Cut', 'Read', 'Drink', 'Fly']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Cut.',
      Marathi: 'योग्य संबंध Cut हा आहे.',
      Hindi: 'सही संबंध Cut है।',
      Urdu: 'Correct relationship is Cut.',
      Gujarati: 'सही संबंध Cut है।',
      Telugu: 'Correct relationship is Cut.',
      Kannada: 'Correct relationship is Cut.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q26',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर DOG ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is DOG coded?'
    },
    options: {
      English: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['EPH', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q27',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 4 : 16 :: 5 : ?',
      Marathi: 'समसंबंध ओळखा: 4 : 16 :: 5 : ?',
      Hindi: 'समानुपात ज्ञात करें: 4 : 16 :: 5 : ?',
      Urdu: 'Find missing number: 4 : 16 :: 5 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 4 : 16 :: 5 : ?',
      Telugu: 'Find missing number: 4 : 16 :: 5 : ?',
      Kannada: 'Find missing number: 4 : 16 :: 5 : ?'
    },
    options: {
      English: ['25', '20', '10', '35'],
      Marathi: ['25', '20', '10', '35'],
      Hindi: ['25', '20', '10', '35'],
      Urdu: ['25', '20', '10', '35'],
      Gujarati: ['25', '20', '10', '35'],
      Telugu: ['25', '20', '10', '35'],
      Kannada: ['25', '20', '10', '35']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q28',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q29',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s2_q30',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q21',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 12, 18, 24, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 12, 18, 24, 30, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 12, 18, 24, 30, ?',
      Urdu: 'Find next number: 12, 18, 24, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 12, 18, 24, 30, ?',
      Telugu: 'Find next number: 12, 18, 24, 30, ?',
      Kannada: 'Find next number: 12, 18, 24, 30, ?'
    },
    options: {
      English: ['36', '34', '40', '30'],
      Marathi: ['36', '34', '40', '30'],
      Hindi: ['36', '34', '40', '30'],
      Urdu: ['36', '34', '40', '30'],
      Gujarati: ['36', '34', '40', '30'],
      Telugu: ['36', '34', '40', '30'],
      Kannada: ['36', '34', '40', '30']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +6.',
      Marathi: 'प्रत्येक संख्येत +6 चा फरक आहे.',
      Hindi: '+6 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +6.',
      Gujarati: '+6 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +6.',
      Kannada: 'Each number increases by +6.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q22',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 16, 25, 36, 49, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 16, 25, 36, 49, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 16, 25, 36, 49, ?',
      Urdu: 'Find next square number in sequence: 16, 25, 36, 49, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 16, 25, 36, 49, ?',
      Telugu: 'Find next square number in sequence: 16, 25, 36, 49, ?',
      Kannada: 'Find next square number in sequence: 16, 25, 36, 49, ?'
    },
    options: {
      English: ['64', '54', '79', '44'],
      Marathi: ['64', '54', '79', '44'],
      Hindi: ['64', '54', '79', '44'],
      Urdu: ['64', '54', '79', '44'],
      Gujarati: ['64', '54', '79', '44'],
      Telugu: ['64', '54', '79', '44'],
      Kannada: ['64', '54', '79', '44']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (8)² = 64.',
      Marathi: 'पुढील वर्ग (8)² = 64.',
      Hindi: 'अगला वर्ग (8)² = 64।',
      Urdu: 'Next square is (8)² = 64.',
      Gujarati: 'अगला वर्ग (8)² = 64।',
      Telugu: 'Next square is (8)² = 64.',
      Kannada: 'Next square is (8)² = 64.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q23',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: G, H, I, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: G, H, I, ?',
      Hindi: 'अगला अक्षर पहचानें: G, H, I, ?',
      Urdu: 'Find next letter: G, H, I, ?',
      Gujarati: 'अगला अक्षर पहचानें: G, H, I, ?',
      Telugu: 'Find next letter: G, H, I, ?',
      Kannada: 'Find next letter: G, H, I, ?'
    },
    options: {
      English: ['J', 'K', 'H', 'Z'],
      Marathi: ['J', 'K', 'H', 'Z'],
      Hindi: ['J', 'K', 'H', 'Z'],
      Urdu: ['J', 'K', 'H', 'Z'],
      Gujarati: ['J', 'K', 'H', 'Z'],
      Telugu: ['J', 'K', 'H', 'Z'],
      Kannada: ['J', 'K', 'H', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q24',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Sparrow', 'Crow', 'Pigeon', 'Bat'],
      Marathi: ['Sparrow', 'Crow', 'Pigeon', 'Bat'],
      Hindi: ['Sparrow', 'Crow', 'Pigeon', 'Bat'],
      Urdu: ['Sparrow', 'Crow', 'Pigeon', 'Bat'],
      Gujarati: ['Sparrow', 'Crow', 'Pigeon', 'Bat'],
      Telugu: ['Sparrow', 'Crow', 'Pigeon', 'Bat'],
      Kannada: ['Sparrow', 'Crow', 'Pigeon', 'Bat']
    },
    correctIndex: 3,
    explanation: {
      English: 'Bat is a mammal, others are birds.',
      Marathi: 'Bat is a mammal, others are birds.',
      Hindi: 'Bat is a mammal, others are birds.',
      Urdu: 'Bat is a mammal, others are birds.',
      Gujarati: 'Bat is a mammal, others are birds.',
      Telugu: 'Bat is a mammal, others are birds.',
      Kannada: 'Bat is a mammal, others are birds.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q25',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: India : New Delhi :: Maharashtra : ?',
      Marathi: 'समसंबंध पूर्ण करा: India : New Delhi :: Maharashtra : ?',
      Hindi: 'समान संबंध पूर्ण करें: India : New Delhi :: Maharashtra : ?',
      Urdu: 'Complete the analogy: India : New Delhi :: Maharashtra : ?',
      Gujarati: 'समान संबंध पूर्ण करें: India : New Delhi :: Maharashtra : ?',
      Telugu: 'Complete the analogy: India : New Delhi :: Maharashtra : ?',
      Kannada: 'Complete the analogy: India : New Delhi :: Maharashtra : ?'
    },
    options: {
      English: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      Marathi: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      Hindi: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      Urdu: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      Gujarati: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      Telugu: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      Kannada: ['Mumbai', 'Pune', 'Nagpur', 'Nashik']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Mumbai.',
      Marathi: 'योग्य संबंध Mumbai हा आहे.',
      Hindi: 'सही संबंध Mumbai है।',
      Urdu: 'Correct relationship is Mumbai.',
      Gujarati: 'सही संबंध Mumbai है।',
      Telugu: 'Correct relationship is Mumbai.',
      Kannada: 'Correct relationship is Mumbai.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q26',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर CAT ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is CAT coded?'
    },
    options: {
      English: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['DBU', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q27',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 5 : 25 :: 6 : ?',
      Marathi: 'समसंबंध ओळखा: 5 : 25 :: 6 : ?',
      Hindi: 'समानुपात ज्ञात करें: 5 : 25 :: 6 : ?',
      Urdu: 'Find missing number: 5 : 25 :: 6 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 5 : 25 :: 6 : ?',
      Telugu: 'Find missing number: 5 : 25 :: 6 : ?',
      Kannada: 'Find missing number: 5 : 25 :: 6 : ?'
    },
    options: {
      English: ['36', '31', '12', '46'],
      Marathi: ['36', '31', '12', '46'],
      Hindi: ['36', '31', '12', '46'],
      Urdu: ['36', '31', '12', '46'],
      Gujarati: ['36', '31', '12', '46'],
      Telugu: ['36', '31', '12', '46'],
      Kannada: ['36', '31', '12', '46']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q28',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q29',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s3_q30',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q21',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 16, 23, 30, 37, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 16, 23, 30, 37, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 16, 23, 30, 37, ?',
      Urdu: 'Find next number: 16, 23, 30, 37, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 16, 23, 30, 37, ?',
      Telugu: 'Find next number: 16, 23, 30, 37, ?',
      Kannada: 'Find next number: 16, 23, 30, 37, ?'
    },
    options: {
      English: ['44', '42', '48', '37'],
      Marathi: ['44', '42', '48', '37'],
      Hindi: ['44', '42', '48', '37'],
      Urdu: ['44', '42', '48', '37'],
      Gujarati: ['44', '42', '48', '37'],
      Telugu: ['44', '42', '48', '37'],
      Kannada: ['44', '42', '48', '37']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +7.',
      Marathi: 'प्रत्येक संख्येत +7 चा फरक आहे.',
      Hindi: '+7 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +7.',
      Gujarati: '+7 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +7.',
      Kannada: 'Each number increases by +7.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q22',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 25, 36, 49, 64, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 25, 36, 49, 64, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 25, 36, 49, 64, ?',
      Urdu: 'Find next square number in sequence: 25, 36, 49, 64, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 25, 36, 49, 64, ?',
      Telugu: 'Find next square number in sequence: 25, 36, 49, 64, ?',
      Kannada: 'Find next square number in sequence: 25, 36, 49, 64, ?'
    },
    options: {
      English: ['81', '71', '96', '61'],
      Marathi: ['81', '71', '96', '61'],
      Hindi: ['81', '71', '96', '61'],
      Urdu: ['81', '71', '96', '61'],
      Gujarati: ['81', '71', '96', '61'],
      Telugu: ['81', '71', '96', '61'],
      Kannada: ['81', '71', '96', '61']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (9)² = 81.',
      Marathi: 'पुढील वर्ग (9)² = 81.',
      Hindi: 'अगला वर्ग (9)² = 81।',
      Urdu: 'Next square is (9)² = 81.',
      Gujarati: 'अगला वर्ग (9)² = 81।',
      Telugu: 'Next square is (9)² = 81.',
      Kannada: 'Next square is (9)² = 81.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q23',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: I, J, K, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: I, J, K, ?',
      Hindi: 'अगला अक्षर पहचानें: I, J, K, ?',
      Urdu: 'Find next letter: I, J, K, ?',
      Gujarati: 'अगला अक्षर पहचानें: I, J, K, ?',
      Telugu: 'Find next letter: I, J, K, ?',
      Kannada: 'Find next letter: I, J, K, ?'
    },
    options: {
      English: ['L', 'M', 'J', 'Z'],
      Marathi: ['L', 'M', 'J', 'Z'],
      Hindi: ['L', 'M', 'J', 'Z'],
      Urdu: ['L', 'M', 'J', 'Z'],
      Gujarati: ['L', 'M', 'J', 'Z'],
      Telugu: ['L', 'M', 'J', 'Z'],
      Kannada: ['L', 'M', 'J', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q24',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Square', 'Rectangle', 'Triangle', 'Circle'],
      Marathi: ['Square', 'Rectangle', 'Triangle', 'Circle'],
      Hindi: ['Square', 'Rectangle', 'Triangle', 'Circle'],
      Urdu: ['Square', 'Rectangle', 'Triangle', 'Circle'],
      Gujarati: ['Square', 'Rectangle', 'Triangle', 'Circle'],
      Telugu: ['Square', 'Rectangle', 'Triangle', 'Circle'],
      Kannada: ['Square', 'Rectangle', 'Triangle', 'Circle']
    },
    correctIndex: 3,
    explanation: {
      English: 'Circle has curved boundary, others have straight sides.',
      Marathi: 'Circle has curved boundary, others have straight sides.',
      Hindi: 'Circle has curved boundary, others have straight sides.',
      Urdu: 'Circle has curved boundary, others have straight sides.',
      Gujarati: 'Circle has curved boundary, others have straight sides.',
      Telugu: 'Circle has curved boundary, others have straight sides.',
      Kannada: 'Circle has curved boundary, others have straight sides.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q25',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Eye : See :: Ear : ?',
      Marathi: 'समसंबंध पूर्ण करा: Eye : See :: Ear : ?',
      Hindi: 'समान संबंध पूर्ण करें: Eye : See :: Ear : ?',
      Urdu: 'Complete the analogy: Eye : See :: Ear : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Eye : See :: Ear : ?',
      Telugu: 'Complete the analogy: Eye : See :: Ear : ?',
      Kannada: 'Complete the analogy: Eye : See :: Ear : ?'
    },
    options: {
      English: ['Hear', 'Taste', 'Smell', 'Touch'],
      Marathi: ['Hear', 'Taste', 'Smell', 'Touch'],
      Hindi: ['Hear', 'Taste', 'Smell', 'Touch'],
      Urdu: ['Hear', 'Taste', 'Smell', 'Touch'],
      Gujarati: ['Hear', 'Taste', 'Smell', 'Touch'],
      Telugu: ['Hear', 'Taste', 'Smell', 'Touch'],
      Kannada: ['Hear', 'Taste', 'Smell', 'Touch']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Hear.',
      Marathi: 'योग्य संबंध Hear हा आहे.',
      Hindi: 'सही संबंध Hear है।',
      Urdu: 'Correct relationship is Hear.',
      Gujarati: 'सही संबंध Hear है।',
      Telugu: 'Correct relationship is Hear.',
      Kannada: 'Correct relationship is Hear.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q26',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर DOG ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is DOG coded?'
    },
    options: {
      English: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['EPH', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q27',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 6 : 36 :: 7 : ?',
      Marathi: 'समसंबंध ओळखा: 6 : 36 :: 7 : ?',
      Hindi: 'समानुपात ज्ञात करें: 6 : 36 :: 7 : ?',
      Urdu: 'Find missing number: 6 : 36 :: 7 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 6 : 36 :: 7 : ?',
      Telugu: 'Find missing number: 6 : 36 :: 7 : ?',
      Kannada: 'Find missing number: 6 : 36 :: 7 : ?'
    },
    options: {
      English: ['49', '44', '14', '59'],
      Marathi: ['49', '44', '14', '59'],
      Hindi: ['49', '44', '14', '59'],
      Urdu: ['49', '44', '14', '59'],
      Gujarati: ['49', '44', '14', '59'],
      Telugu: ['49', '44', '14', '59'],
      Kannada: ['49', '44', '14', '59']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q28',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q29',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s4_q30',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q21',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 20, 28, 36, 44, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 20, 28, 36, 44, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 20, 28, 36, 44, ?',
      Urdu: 'Find next number: 20, 28, 36, 44, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 20, 28, 36, 44, ?',
      Telugu: 'Find next number: 20, 28, 36, 44, ?',
      Kannada: 'Find next number: 20, 28, 36, 44, ?'
    },
    options: {
      English: ['52', '50', '56', '44'],
      Marathi: ['52', '50', '56', '44'],
      Hindi: ['52', '50', '56', '44'],
      Urdu: ['52', '50', '56', '44'],
      Gujarati: ['52', '50', '56', '44'],
      Telugu: ['52', '50', '56', '44'],
      Kannada: ['52', '50', '56', '44']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +8.',
      Marathi: 'प्रत्येक संख्येत +8 चा फरक आहे.',
      Hindi: '+8 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +8.',
      Gujarati: '+8 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +8.',
      Kannada: 'Each number increases by +8.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q22',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 36, 49, 64, 81, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 36, 49, 64, 81, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 36, 49, 64, 81, ?',
      Urdu: 'Find next square number in sequence: 36, 49, 64, 81, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 36, 49, 64, 81, ?',
      Telugu: 'Find next square number in sequence: 36, 49, 64, 81, ?',
      Kannada: 'Find next square number in sequence: 36, 49, 64, 81, ?'
    },
    options: {
      English: ['100', '90', '115', '80'],
      Marathi: ['100', '90', '115', '80'],
      Hindi: ['100', '90', '115', '80'],
      Urdu: ['100', '90', '115', '80'],
      Gujarati: ['100', '90', '115', '80'],
      Telugu: ['100', '90', '115', '80'],
      Kannada: ['100', '90', '115', '80']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (10)² = 100.',
      Marathi: 'पुढील वर्ग (10)² = 100.',
      Hindi: 'अगला वर्ग (10)² = 100।',
      Urdu: 'Next square is (10)² = 100.',
      Gujarati: 'अगला वर्ग (10)² = 100।',
      Telugu: 'Next square is (10)² = 100.',
      Kannada: 'Next square is (10)² = 100.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q23',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: K, L, M, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: K, L, M, ?',
      Hindi: 'अगला अक्षर पहचानें: K, L, M, ?',
      Urdu: 'Find next letter: K, L, M, ?',
      Gujarati: 'अगला अक्षर पहचानें: K, L, M, ?',
      Telugu: 'Find next letter: K, L, M, ?',
      Kannada: 'Find next letter: K, L, M, ?'
    },
    options: {
      English: ['N', 'O', 'L', 'Z'],
      Marathi: ['N', 'O', 'L', 'Z'],
      Hindi: ['N', 'O', 'L', 'Z'],
      Urdu: ['N', 'O', 'L', 'Z'],
      Gujarati: ['N', 'O', 'L', 'Z'],
      Telugu: ['N', 'O', 'L', 'Z'],
      Kannada: ['N', 'O', 'L', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q24',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Mumbai', 'Pune', 'Nagpur', 'Bhopal'],
      Marathi: ['Mumbai', 'Pune', 'Nagpur', 'Bhopal'],
      Hindi: ['Mumbai', 'Pune', 'Nagpur', 'Bhopal'],
      Urdu: ['Mumbai', 'Pune', 'Nagpur', 'Bhopal'],
      Gujarati: ['Mumbai', 'Pune', 'Nagpur', 'Bhopal'],
      Telugu: ['Mumbai', 'Pune', 'Nagpur', 'Bhopal'],
      Kannada: ['Mumbai', 'Pune', 'Nagpur', 'Bhopal']
    },
    correctIndex: 3,
    explanation: {
      English: 'Bhopal is in MP, others are in Maharashtra.',
      Marathi: 'Bhopal is in MP, others are in Maharashtra.',
      Hindi: 'Bhopal is in MP, others are in Maharashtra.',
      Urdu: 'Bhopal is in MP, others are in Maharashtra.',
      Gujarati: 'Bhopal is in MP, others are in Maharashtra.',
      Telugu: 'Bhopal is in MP, others are in Maharashtra.',
      Kannada: 'Bhopal is in MP, others are in Maharashtra.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q25',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Doctor : Hospital :: Teacher : ?',
      Marathi: 'समसंबंध पूर्ण करा: Doctor : Hospital :: Teacher : ?',
      Hindi: 'समान संबंध पूर्ण करें: Doctor : Hospital :: Teacher : ?',
      Urdu: 'Complete the analogy: Doctor : Hospital :: Teacher : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Doctor : Hospital :: Teacher : ?',
      Telugu: 'Complete the analogy: Doctor : Hospital :: Teacher : ?',
      Kannada: 'Complete the analogy: Doctor : Hospital :: Teacher : ?'
    },
    options: {
      English: ['School', 'Court', 'Bank', 'Police Station'],
      Marathi: ['School', 'Court', 'Bank', 'Police Station'],
      Hindi: ['School', 'Court', 'Bank', 'Police Station'],
      Urdu: ['School', 'Court', 'Bank', 'Police Station'],
      Gujarati: ['School', 'Court', 'Bank', 'Police Station'],
      Telugu: ['School', 'Court', 'Bank', 'Police Station'],
      Kannada: ['School', 'Court', 'Bank', 'Police Station']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is School.',
      Marathi: 'योग्य संबंध School हा आहे.',
      Hindi: 'सही संबंध School है।',
      Urdu: 'Correct relationship is School.',
      Gujarati: 'सही संबंध School है।',
      Telugu: 'Correct relationship is School.',
      Kannada: 'Correct relationship is School.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q26',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर CAT ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is CAT coded?'
    },
    options: {
      English: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['DBU', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q27',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 7 : 49 :: 8 : ?',
      Marathi: 'समसंबंध ओळखा: 7 : 49 :: 8 : ?',
      Hindi: 'समानुपात ज्ञात करें: 7 : 49 :: 8 : ?',
      Urdu: 'Find missing number: 7 : 49 :: 8 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 7 : 49 :: 8 : ?',
      Telugu: 'Find missing number: 7 : 49 :: 8 : ?',
      Kannada: 'Find missing number: 7 : 49 :: 8 : ?'
    },
    options: {
      English: ['64', '59', '16', '74'],
      Marathi: ['64', '59', '16', '74'],
      Hindi: ['64', '59', '16', '74'],
      Urdu: ['64', '59', '16', '74'],
      Gujarati: ['64', '59', '16', '74'],
      Telugu: ['64', '59', '16', '74'],
      Kannada: ['64', '59', '16', '74']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q28',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q29',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s5_q30',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q21',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 24, 33, 42, 51, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 24, 33, 42, 51, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 24, 33, 42, 51, ?',
      Urdu: 'Find next number: 24, 33, 42, 51, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 24, 33, 42, 51, ?',
      Telugu: 'Find next number: 24, 33, 42, 51, ?',
      Kannada: 'Find next number: 24, 33, 42, 51, ?'
    },
    options: {
      English: ['60', '58', '64', '51'],
      Marathi: ['60', '58', '64', '51'],
      Hindi: ['60', '58', '64', '51'],
      Urdu: ['60', '58', '64', '51'],
      Gujarati: ['60', '58', '64', '51'],
      Telugu: ['60', '58', '64', '51'],
      Kannada: ['60', '58', '64', '51']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +9.',
      Marathi: 'प्रत्येक संख्येत +9 चा फरक आहे.',
      Hindi: '+9 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +9.',
      Gujarati: '+9 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +9.',
      Kannada: 'Each number increases by +9.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q22',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 49, 64, 81, 100, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 49, 64, 81, 100, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 49, 64, 81, 100, ?',
      Urdu: 'Find next square number in sequence: 49, 64, 81, 100, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 49, 64, 81, 100, ?',
      Telugu: 'Find next square number in sequence: 49, 64, 81, 100, ?',
      Kannada: 'Find next square number in sequence: 49, 64, 81, 100, ?'
    },
    options: {
      English: ['121', '111', '136', '101'],
      Marathi: ['121', '111', '136', '101'],
      Hindi: ['121', '111', '136', '101'],
      Urdu: ['121', '111', '136', '101'],
      Gujarati: ['121', '111', '136', '101'],
      Telugu: ['121', '111', '136', '101'],
      Kannada: ['121', '111', '136', '101']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (11)² = 121.',
      Marathi: 'पुढील वर्ग (11)² = 121.',
      Hindi: 'अगला वर्ग (11)² = 121।',
      Urdu: 'Next square is (11)² = 121.',
      Gujarati: 'अगला वर्ग (11)² = 121।',
      Telugu: 'Next square is (11)² = 121.',
      Kannada: 'Next square is (11)² = 121.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q23',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: M, N, O, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: M, N, O, ?',
      Hindi: 'अगला अक्षर पहचानें: M, N, O, ?',
      Urdu: 'Find next letter: M, N, O, ?',
      Gujarati: 'अगला अक्षर पहचानें: M, N, O, ?',
      Telugu: 'Find next letter: M, N, O, ?',
      Kannada: 'Find next letter: M, N, O, ?'
    },
    options: {
      English: ['P', 'Q', 'N', 'Z'],
      Marathi: ['P', 'Q', 'N', 'Z'],
      Hindi: ['P', 'Q', 'N', 'Z'],
      Urdu: ['P', 'Q', 'N', 'Z'],
      Gujarati: ['P', 'Q', 'N', 'Z'],
      Telugu: ['P', 'Q', 'N', 'Z'],
      Kannada: ['P', 'Q', 'N', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q24',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Rose', 'Jasmine', 'Lotus', 'Mango'],
      Marathi: ['Rose', 'Jasmine', 'Lotus', 'Mango'],
      Hindi: ['Rose', 'Jasmine', 'Lotus', 'Mango'],
      Urdu: ['Rose', 'Jasmine', 'Lotus', 'Mango'],
      Gujarati: ['Rose', 'Jasmine', 'Lotus', 'Mango'],
      Telugu: ['Rose', 'Jasmine', 'Lotus', 'Mango'],
      Kannada: ['Rose', 'Jasmine', 'Lotus', 'Mango']
    },
    correctIndex: 3,
    explanation: {
      English: 'Mango is a fruit, others are flowers.',
      Marathi: 'Mango is a fruit, others are flowers.',
      Hindi: 'Mango is a fruit, others are flowers.',
      Urdu: 'Mango is a fruit, others are flowers.',
      Gujarati: 'Mango is a fruit, others are flowers.',
      Telugu: 'Mango is a fruit, others are flowers.',
      Kannada: 'Mango is a fruit, others are flowers.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q25',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Bird : Nest :: Lion : ?',
      Marathi: 'समसंबंध पूर्ण करा: Bird : Nest :: Lion : ?',
      Hindi: 'समान संबंध पूर्ण करें: Bird : Nest :: Lion : ?',
      Urdu: 'Complete the analogy: Bird : Nest :: Lion : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Bird : Nest :: Lion : ?',
      Telugu: 'Complete the analogy: Bird : Nest :: Lion : ?',
      Kannada: 'Complete the analogy: Bird : Nest :: Lion : ?'
    },
    options: {
      English: ['Den', 'Stable', 'Shed', 'Burrow'],
      Marathi: ['Den', 'Stable', 'Shed', 'Burrow'],
      Hindi: ['Den', 'Stable', 'Shed', 'Burrow'],
      Urdu: ['Den', 'Stable', 'Shed', 'Burrow'],
      Gujarati: ['Den', 'Stable', 'Shed', 'Burrow'],
      Telugu: ['Den', 'Stable', 'Shed', 'Burrow'],
      Kannada: ['Den', 'Stable', 'Shed', 'Burrow']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Den.',
      Marathi: 'योग्य संबंध Den हा आहे.',
      Hindi: 'सही संबंध Den है।',
      Urdu: 'Correct relationship is Den.',
      Gujarati: 'सही संबंध Den है।',
      Telugu: 'Correct relationship is Den.',
      Kannada: 'Correct relationship is Den.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q26',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर DOG ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is DOG coded?'
    },
    options: {
      English: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['EPH', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q27',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 8 : 64 :: 9 : ?',
      Marathi: 'समसंबंध ओळखा: 8 : 64 :: 9 : ?',
      Hindi: 'समानुपात ज्ञात करें: 8 : 64 :: 9 : ?',
      Urdu: 'Find missing number: 8 : 64 :: 9 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 8 : 64 :: 9 : ?',
      Telugu: 'Find missing number: 8 : 64 :: 9 : ?',
      Kannada: 'Find missing number: 8 : 64 :: 9 : ?'
    },
    options: {
      English: ['81', '76', '18', '91'],
      Marathi: ['81', '76', '18', '91'],
      Hindi: ['81', '76', '18', '91'],
      Urdu: ['81', '76', '18', '91'],
      Gujarati: ['81', '76', '18', '91'],
      Telugu: ['81', '76', '18', '91'],
      Kannada: ['81', '76', '18', '91']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q28',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q29',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s6_q30',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q21',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 28, 38, 48, 58, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 28, 38, 48, 58, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 28, 38, 48, 58, ?',
      Urdu: 'Find next number: 28, 38, 48, 58, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 28, 38, 48, 58, ?',
      Telugu: 'Find next number: 28, 38, 48, 58, ?',
      Kannada: 'Find next number: 28, 38, 48, 58, ?'
    },
    options: {
      English: ['68', '66', '72', '58'],
      Marathi: ['68', '66', '72', '58'],
      Hindi: ['68', '66', '72', '58'],
      Urdu: ['68', '66', '72', '58'],
      Gujarati: ['68', '66', '72', '58'],
      Telugu: ['68', '66', '72', '58'],
      Kannada: ['68', '66', '72', '58']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +10.',
      Marathi: 'प्रत्येक संख्येत +10 चा फरक आहे.',
      Hindi: '+10 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +10.',
      Gujarati: '+10 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +10.',
      Kannada: 'Each number increases by +10.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q22',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 64, 81, 100, 121, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 64, 81, 100, 121, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 64, 81, 100, 121, ?',
      Urdu: 'Find next square number in sequence: 64, 81, 100, 121, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 64, 81, 100, 121, ?',
      Telugu: 'Find next square number in sequence: 64, 81, 100, 121, ?',
      Kannada: 'Find next square number in sequence: 64, 81, 100, 121, ?'
    },
    options: {
      English: ['144', '134', '159', '124'],
      Marathi: ['144', '134', '159', '124'],
      Hindi: ['144', '134', '159', '124'],
      Urdu: ['144', '134', '159', '124'],
      Gujarati: ['144', '134', '159', '124'],
      Telugu: ['144', '134', '159', '124'],
      Kannada: ['144', '134', '159', '124']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (12)² = 144.',
      Marathi: 'पुढील वर्ग (12)² = 144.',
      Hindi: 'अगला वर्ग (12)² = 144।',
      Urdu: 'Next square is (12)² = 144.',
      Gujarati: 'अगला वर्ग (12)² = 144।',
      Telugu: 'Next square is (12)² = 144.',
      Kannada: 'Next square is (12)² = 144.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q23',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: O, P, Q, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: O, P, Q, ?',
      Hindi: 'अगला अक्षर पहचानें: O, P, Q, ?',
      Urdu: 'Find next letter: O, P, Q, ?',
      Gujarati: 'अगला अक्षर पहचानें: O, P, Q, ?',
      Telugu: 'Find next letter: O, P, Q, ?',
      Kannada: 'Find next letter: O, P, Q, ?'
    },
    options: {
      English: ['R', 'S', 'P', 'Z'],
      Marathi: ['R', 'S', 'P', 'Z'],
      Hindi: ['R', 'S', 'P', 'Z'],
      Urdu: ['R', 'S', 'P', 'Z'],
      Gujarati: ['R', 'S', 'P', 'Z'],
      Telugu: ['R', 'S', 'P', 'Z'],
      Kannada: ['R', 'S', 'P', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q24',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Car', 'Bus', 'Train', 'Aeroplane'],
      Marathi: ['Car', 'Bus', 'Train', 'Aeroplane'],
      Hindi: ['Car', 'Bus', 'Train', 'Aeroplane'],
      Urdu: ['Car', 'Bus', 'Train', 'Aeroplane'],
      Gujarati: ['Car', 'Bus', 'Train', 'Aeroplane'],
      Telugu: ['Car', 'Bus', 'Train', 'Aeroplane'],
      Kannada: ['Car', 'Bus', 'Train', 'Aeroplane']
    },
    correctIndex: 3,
    explanation: {
      English: 'Aeroplane flies in air, others travel on land.',
      Marathi: 'Aeroplane flies in air, others travel on land.',
      Hindi: 'Aeroplane flies in air, others travel on land.',
      Urdu: 'Aeroplane flies in air, others travel on land.',
      Gujarati: 'Aeroplane flies in air, others travel on land.',
      Telugu: 'Aeroplane flies in air, others travel on land.',
      Kannada: 'Aeroplane flies in air, others travel on land.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q25',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Clock : Time :: Thermometer : ?',
      Marathi: 'समसंबंध पूर्ण करा: Clock : Time :: Thermometer : ?',
      Hindi: 'समान संबंध पूर्ण करें: Clock : Time :: Thermometer : ?',
      Urdu: 'Complete the analogy: Clock : Time :: Thermometer : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Clock : Time :: Thermometer : ?',
      Telugu: 'Complete the analogy: Clock : Time :: Thermometer : ?',
      Kannada: 'Complete the analogy: Clock : Time :: Thermometer : ?'
    },
    options: {
      English: ['Temperature', 'Speed', 'Distance', 'Weight'],
      Marathi: ['Temperature', 'Speed', 'Distance', 'Weight'],
      Hindi: ['Temperature', 'Speed', 'Distance', 'Weight'],
      Urdu: ['Temperature', 'Speed', 'Distance', 'Weight'],
      Gujarati: ['Temperature', 'Speed', 'Distance', 'Weight'],
      Telugu: ['Temperature', 'Speed', 'Distance', 'Weight'],
      Kannada: ['Temperature', 'Speed', 'Distance', 'Weight']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Temperature.',
      Marathi: 'योग्य संबंध Temperature हा आहे.',
      Hindi: 'सही संबंध Temperature है।',
      Urdu: 'Correct relationship is Temperature.',
      Gujarati: 'सही संबंध Temperature है।',
      Telugu: 'Correct relationship is Temperature.',
      Kannada: 'Correct relationship is Temperature.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q26',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर CAT ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is CAT coded?'
    },
    options: {
      English: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['DBU', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q27',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 9 : 81 :: 10 : ?',
      Marathi: 'समसंबंध ओळखा: 9 : 81 :: 10 : ?',
      Hindi: 'समानुपात ज्ञात करें: 9 : 81 :: 10 : ?',
      Urdu: 'Find missing number: 9 : 81 :: 10 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 9 : 81 :: 10 : ?',
      Telugu: 'Find missing number: 9 : 81 :: 10 : ?',
      Kannada: 'Find missing number: 9 : 81 :: 10 : ?'
    },
    options: {
      English: ['100', '95', '20', '110'],
      Marathi: ['100', '95', '20', '110'],
      Hindi: ['100', '95', '20', '110'],
      Urdu: ['100', '95', '20', '110'],
      Gujarati: ['100', '95', '20', '110'],
      Telugu: ['100', '95', '20', '110'],
      Kannada: ['100', '95', '20', '110']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q28',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q29',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s7_q30',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q21',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 32, 43, 54, 65, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 32, 43, 54, 65, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 32, 43, 54, 65, ?',
      Urdu: 'Find next number: 32, 43, 54, 65, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 32, 43, 54, 65, ?',
      Telugu: 'Find next number: 32, 43, 54, 65, ?',
      Kannada: 'Find next number: 32, 43, 54, 65, ?'
    },
    options: {
      English: ['76', '74', '80', '65'],
      Marathi: ['76', '74', '80', '65'],
      Hindi: ['76', '74', '80', '65'],
      Urdu: ['76', '74', '80', '65'],
      Gujarati: ['76', '74', '80', '65'],
      Telugu: ['76', '74', '80', '65'],
      Kannada: ['76', '74', '80', '65']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +11.',
      Marathi: 'प्रत्येक संख्येत +11 चा फरक आहे.',
      Hindi: '+11 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +11.',
      Gujarati: '+11 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +11.',
      Kannada: 'Each number increases by +11.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q22',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 81, 100, 121, 144, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 81, 100, 121, 144, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 81, 100, 121, 144, ?',
      Urdu: 'Find next square number in sequence: 81, 100, 121, 144, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 81, 100, 121, 144, ?',
      Telugu: 'Find next square number in sequence: 81, 100, 121, 144, ?',
      Kannada: 'Find next square number in sequence: 81, 100, 121, 144, ?'
    },
    options: {
      English: ['169', '159', '184', '149'],
      Marathi: ['169', '159', '184', '149'],
      Hindi: ['169', '159', '184', '149'],
      Urdu: ['169', '159', '184', '149'],
      Gujarati: ['169', '159', '184', '149'],
      Telugu: ['169', '159', '184', '149'],
      Kannada: ['169', '159', '184', '149']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (13)² = 169.',
      Marathi: 'पुढील वर्ग (13)² = 169.',
      Hindi: 'अगला वर्ग (13)² = 169।',
      Urdu: 'Next square is (13)² = 169.',
      Gujarati: 'अगला वर्ग (13)² = 169।',
      Telugu: 'Next square is (13)² = 169.',
      Kannada: 'Next square is (13)² = 169.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q23',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: Q, R, S, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: Q, R, S, ?',
      Hindi: 'अगला अक्षर पहचानें: Q, R, S, ?',
      Urdu: 'Find next letter: Q, R, S, ?',
      Gujarati: 'अगला अक्षर पहचानें: Q, R, S, ?',
      Telugu: 'Find next letter: Q, R, S, ?',
      Kannada: 'Find next letter: Q, R, S, ?'
    },
    options: {
      English: ['T', 'U', 'R', 'Z'],
      Marathi: ['T', 'U', 'R', 'Z'],
      Hindi: ['T', 'U', 'R', 'Z'],
      Urdu: ['T', 'U', 'R', 'Z'],
      Gujarati: ['T', 'U', 'R', 'Z'],
      Telugu: ['T', 'U', 'R', 'Z'],
      Kannada: ['T', 'U', 'R', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q24',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['11', '13', '17', '21'],
      Marathi: ['11', '13', '17', '21'],
      Hindi: ['11', '13', '17', '21'],
      Urdu: ['11', '13', '17', '21'],
      Gujarati: ['11', '13', '17', '21'],
      Telugu: ['11', '13', '17', '21'],
      Kannada: ['11', '13', '17', '21']
    },
    correctIndex: 3,
    explanation: {
      English: '21 is a composite number (3x7), others are prime.',
      Marathi: '21 is a composite number (3x7), others are prime.',
      Hindi: '21 is a composite number (3x7), others are prime.',
      Urdu: '21 is a composite number (3x7), others are prime.',
      Gujarati: '21 is a composite number (3x7), others are prime.',
      Telugu: '21 is a composite number (3x7), others are prime.',
      Kannada: '21 is a composite number (3x7), others are prime.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q25',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Fish : Water :: Bird : ?',
      Marathi: 'समसंबंध पूर्ण करा: Fish : Water :: Bird : ?',
      Hindi: 'समान संबंध पूर्ण करें: Fish : Water :: Bird : ?',
      Urdu: 'Complete the analogy: Fish : Water :: Bird : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Fish : Water :: Bird : ?',
      Telugu: 'Complete the analogy: Fish : Water :: Bird : ?',
      Kannada: 'Complete the analogy: Fish : Water :: Bird : ?'
    },
    options: {
      English: ['Air / Sky', 'Soil', 'Fire', 'Sea'],
      Marathi: ['Air / Sky', 'Soil', 'Fire', 'Sea'],
      Hindi: ['Air / Sky', 'Soil', 'Fire', 'Sea'],
      Urdu: ['Air / Sky', 'Soil', 'Fire', 'Sea'],
      Gujarati: ['Air / Sky', 'Soil', 'Fire', 'Sea'],
      Telugu: ['Air / Sky', 'Soil', 'Fire', 'Sea'],
      Kannada: ['Air / Sky', 'Soil', 'Fire', 'Sea']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Air / Sky.',
      Marathi: 'योग्य संबंध Air / Sky हा आहे.',
      Hindi: 'सही संबंध Air / Sky है।',
      Urdu: 'Correct relationship is Air / Sky.',
      Gujarati: 'सही संबंध Air / Sky है।',
      Telugu: 'Correct relationship is Air / Sky.',
      Kannada: 'Correct relationship is Air / Sky.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q26',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर DOG ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is DOG coded?'
    },
    options: {
      English: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['EPH', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q27',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 10 : 100 :: 11 : ?',
      Marathi: 'समसंबंध ओळखा: 10 : 100 :: 11 : ?',
      Hindi: 'समानुपात ज्ञात करें: 10 : 100 :: 11 : ?',
      Urdu: 'Find missing number: 10 : 100 :: 11 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 10 : 100 :: 11 : ?',
      Telugu: 'Find missing number: 10 : 100 :: 11 : ?',
      Kannada: 'Find missing number: 10 : 100 :: 11 : ?'
    },
    options: {
      English: ['121', '116', '22', '131'],
      Marathi: ['121', '116', '22', '131'],
      Hindi: ['121', '116', '22', '131'],
      Urdu: ['121', '116', '22', '131'],
      Gujarati: ['121', '116', '22', '131'],
      Telugu: ['121', '116', '22', '131'],
      Kannada: ['121', '116', '22', '131']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q28',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q29',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s8_q30',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q21',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 36, 48, 60, 72, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 36, 48, 60, 72, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 36, 48, 60, 72, ?',
      Urdu: 'Find next number: 36, 48, 60, 72, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 36, 48, 60, 72, ?',
      Telugu: 'Find next number: 36, 48, 60, 72, ?',
      Kannada: 'Find next number: 36, 48, 60, 72, ?'
    },
    options: {
      English: ['84', '82', '88', '72'],
      Marathi: ['84', '82', '88', '72'],
      Hindi: ['84', '82', '88', '72'],
      Urdu: ['84', '82', '88', '72'],
      Gujarati: ['84', '82', '88', '72'],
      Telugu: ['84', '82', '88', '72'],
      Kannada: ['84', '82', '88', '72']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +12.',
      Marathi: 'प्रत्येक संख्येत +12 चा फरक आहे.',
      Hindi: '+12 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +12.',
      Gujarati: '+12 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +12.',
      Kannada: 'Each number increases by +12.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q22',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 100, 121, 144, 169, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 100, 121, 144, 169, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 100, 121, 144, 169, ?',
      Urdu: 'Find next square number in sequence: 100, 121, 144, 169, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 100, 121, 144, 169, ?',
      Telugu: 'Find next square number in sequence: 100, 121, 144, 169, ?',
      Kannada: 'Find next square number in sequence: 100, 121, 144, 169, ?'
    },
    options: {
      English: ['196', '186', '211', '176'],
      Marathi: ['196', '186', '211', '176'],
      Hindi: ['196', '186', '211', '176'],
      Urdu: ['196', '186', '211', '176'],
      Gujarati: ['196', '186', '211', '176'],
      Telugu: ['196', '186', '211', '176'],
      Kannada: ['196', '186', '211', '176']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (14)² = 196.',
      Marathi: 'पुढील वर्ग (14)² = 196.',
      Hindi: 'अगला वर्ग (14)² = 196।',
      Urdu: 'Next square is (14)² = 196.',
      Gujarati: 'अगला वर्ग (14)² = 196।',
      Telugu: 'Next square is (14)² = 196.',
      Kannada: 'Next square is (14)² = 196.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q23',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: S, T, U, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: S, T, U, ?',
      Hindi: 'अगला अक्षर पहचानें: S, T, U, ?',
      Urdu: 'Find next letter: S, T, U, ?',
      Gujarati: 'अगला अक्षर पहचानें: S, T, U, ?',
      Telugu: 'Find next letter: S, T, U, ?',
      Kannada: 'Find next letter: S, T, U, ?'
    },
    options: {
      English: ['V', 'W', 'T', 'Z'],
      Marathi: ['V', 'W', 'T', 'Z'],
      Hindi: ['V', 'W', 'T', 'Z'],
      Urdu: ['V', 'W', 'T', 'Z'],
      Gujarati: ['V', 'W', 'T', 'Z'],
      Telugu: ['V', 'W', 'T', 'Z'],
      Kannada: ['V', 'W', 'T', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q24',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Gold', 'Silver', 'Iron', 'Wood'],
      Marathi: ['Gold', 'Silver', 'Iron', 'Wood'],
      Hindi: ['Gold', 'Silver', 'Iron', 'Wood'],
      Urdu: ['Gold', 'Silver', 'Iron', 'Wood'],
      Gujarati: ['Gold', 'Silver', 'Iron', 'Wood'],
      Telugu: ['Gold', 'Silver', 'Iron', 'Wood'],
      Kannada: ['Gold', 'Silver', 'Iron', 'Wood']
    },
    correctIndex: 3,
    explanation: {
      English: 'Wood is non-metal, others are metals.',
      Marathi: 'Wood is non-metal, others are metals.',
      Hindi: 'Wood is non-metal, others are metals.',
      Urdu: 'Wood is non-metal, others are metals.',
      Gujarati: 'Wood is non-metal, others are metals.',
      Telugu: 'Wood is non-metal, others are metals.',
      Kannada: 'Wood is non-metal, others are metals.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q25',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Maharashtra : Marathi :: Gujarat : ?',
      Marathi: 'समसंबंध पूर्ण करा: Maharashtra : Marathi :: Gujarat : ?',
      Hindi: 'समान संबंध पूर्ण करें: Maharashtra : Marathi :: Gujarat : ?',
      Urdu: 'Complete the analogy: Maharashtra : Marathi :: Gujarat : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Maharashtra : Marathi :: Gujarat : ?',
      Telugu: 'Complete the analogy: Maharashtra : Marathi :: Gujarat : ?',
      Kannada: 'Complete the analogy: Maharashtra : Marathi :: Gujarat : ?'
    },
    options: {
      English: ['Gujarati', 'Hindi', 'Bengali', 'Tamil'],
      Marathi: ['Gujarati', 'Hindi', 'Bengali', 'Tamil'],
      Hindi: ['Gujarati', 'Hindi', 'Bengali', 'Tamil'],
      Urdu: ['Gujarati', 'Hindi', 'Bengali', 'Tamil'],
      Gujarati: ['Gujarati', 'Hindi', 'Bengali', 'Tamil'],
      Telugu: ['Gujarati', 'Hindi', 'Bengali', 'Tamil'],
      Kannada: ['Gujarati', 'Hindi', 'Bengali', 'Tamil']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Gujarati.',
      Marathi: 'योग्य संबंध Gujarati हा आहे.',
      Hindi: 'सही संबंध Gujarati है।',
      Urdu: 'Correct relationship is Gujarati.',
      Gujarati: 'सही संबंध Gujarati है।',
      Telugu: 'Correct relationship is Gujarati.',
      Kannada: 'Correct relationship is Gujarati.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q26',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर CAT ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो CAT का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is CAT coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is CAT coded?'
    },
    options: {
      English: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['DBU', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['DBU', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q27',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 11 : 121 :: 12 : ?',
      Marathi: 'समसंबंध ओळखा: 11 : 121 :: 12 : ?',
      Hindi: 'समानुपात ज्ञात करें: 11 : 121 :: 12 : ?',
      Urdu: 'Find missing number: 11 : 121 :: 12 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 11 : 121 :: 12 : ?',
      Telugu: 'Find missing number: 11 : 121 :: 12 : ?',
      Kannada: 'Find missing number: 11 : 121 :: 12 : ?'
    },
    options: {
      English: ['144', '139', '24', '154'],
      Marathi: ['144', '139', '24', '154'],
      Hindi: ['144', '139', '24', '154'],
      Urdu: ['144', '139', '24', '154'],
      Gujarati: ['144', '139', '24', '154'],
      Telugu: ['144', '139', '24', '154'],
      Kannada: ['144', '139', '24', '154']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q28',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q29',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s9_q30',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q21',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'easy',
    type: 'series',
    questionText: {
      English: 'Find next number: 40, 53, 66, 79, ?',
      Marathi: 'संख्या मालिकेतील पुढील पद शोधा: 40, 53, 66, 79, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 40, 53, 66, 79, ?',
      Urdu: 'Find next number: 40, 53, 66, 79, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: 40, 53, 66, 79, ?',
      Telugu: 'Find next number: 40, 53, 66, 79, ?',
      Kannada: 'Find next number: 40, 53, 66, 79, ?'
    },
    options: {
      English: ['92', '90', '96', '79'],
      Marathi: ['92', '90', '96', '79'],
      Hindi: ['92', '90', '96', '79'],
      Urdu: ['92', '90', '96', '79'],
      Gujarati: ['92', '90', '96', '79'],
      Telugu: ['92', '90', '96', '79'],
      Kannada: ['92', '90', '96', '79']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each number increases by +13.',
      Marathi: 'प्रत्येक संख्येत +13 चा फरक आहे.',
      Hindi: '+13 की वृद्धि हो रही है।',
      Urdu: 'Each number increases by +13.',
      Gujarati: '+13 की वृद्धि हो रही है।',
      Telugu: 'Each number increases by +13.',
      Kannada: 'Each number increases by +13.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q22',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'series',
    questionText: {
      English: 'Find next square number in sequence: 121, 144, 169, 196, ?',
      Marathi: 'मालिकेतील पुढील वर्ग संख्या ओळखा: 121, 144, 169, 196, ?',
      Hindi: 'अगली वर्ग संख्या पहचानें: 121, 144, 169, 196, ?',
      Urdu: 'Find next square number in sequence: 121, 144, 169, 196, ?',
      Gujarati: 'अगली वर्ग संख्या पहचानें: 121, 144, 169, 196, ?',
      Telugu: 'Find next square number in sequence: 121, 144, 169, 196, ?',
      Kannada: 'Find next square number in sequence: 121, 144, 169, 196, ?'
    },
    options: {
      English: ['225', '215', '240', '205'],
      Marathi: ['225', '215', '240', '205'],
      Hindi: ['225', '215', '240', '205'],
      Urdu: ['225', '215', '240', '205'],
      Gujarati: ['225', '215', '240', '205'],
      Telugu: ['225', '215', '240', '205'],
      Kannada: ['225', '215', '240', '205']
    },
    correctIndex: 0,
    explanation: {
      English: 'Next square is (15)² = 225.',
      Marathi: 'पुढील वर्ग (15)² = 225.',
      Hindi: 'अगला वर्ग (15)² = 225।',
      Urdu: 'Next square is (15)² = 225.',
      Gujarati: 'अगला वर्ग (15)² = 225।',
      Telugu: 'Next square is (15)² = 225.',
      Kannada: 'Next square is (15)² = 225.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q23',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'easy',
    type: 'alphabet',
    questionText: {
      English: 'Find next letter: A, B, C, ?',
      Marathi: 'अक्षरमालिकेतील पुढील अक्षर शोधा: A, B, C, ?',
      Hindi: 'अगला अक्षर पहचानें: A, B, C, ?',
      Urdu: 'Find next letter: A, B, C, ?',
      Gujarati: 'अगला अक्षर पहचानें: A, B, C, ?',
      Telugu: 'Find next letter: A, B, C, ?',
      Kannada: 'Find next letter: A, B, C, ?'
    },
    options: {
      English: ['D', 'E', 'B', 'Z'],
      Marathi: ['D', 'E', 'B', 'Z'],
      Hindi: ['D', 'E', 'B', 'Z'],
      Urdu: ['D', 'E', 'B', 'Z'],
      Gujarati: ['D', 'E', 'B', 'Z'],
      Telugu: ['D', 'E', 'B', 'Z'],
      Kannada: ['D', 'E', 'B', 'Z']
    },
    correctIndex: 0,
    explanation: {
      English: 'Consecutive letters (+1).',
      Marathi: 'क्रमवार अक्षरे (+१).',
      Hindi: 'क्रमिक अक्षर।',
      Urdu: 'Consecutive letters (+1).',
      Gujarati: 'क्रमिक अक्षर।',
      Telugu: 'Consecutive letters (+1).',
      Kannada: 'Consecutive letters (+1).'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q24',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'easy',
    type: 'classification',
    questionText: {
      English: 'Find the odd one out:',
      Marathi: 'गटात न बसणारा शब्द ओळखा:',
      Hindi: 'विषम शब्द पहचानिए:',
      Urdu: 'Find the odd one out:',
      Gujarati: 'विषम शब्द पहचानिए:',
      Telugu: 'Find the odd one out:',
      Kannada: 'Find the odd one out:'
    },
    options: {
      English: ['Chair', 'Table', 'Cupboard', 'Television'],
      Marathi: ['Chair', 'Table', 'Cupboard', 'Television'],
      Hindi: ['Chair', 'Table', 'Cupboard', 'Television'],
      Urdu: ['Chair', 'Table', 'Cupboard', 'Television'],
      Gujarati: ['Chair', 'Table', 'Cupboard', 'Television'],
      Telugu: ['Chair', 'Table', 'Cupboard', 'Television'],
      Kannada: ['Chair', 'Table', 'Cupboard', 'Television']
    },
    correctIndex: 3,
    explanation: {
      English: 'Television is electronic, others are furniture.',
      Marathi: 'Television is electronic, others are furniture.',
      Hindi: 'Television is electronic, others are furniture.',
      Urdu: 'Television is electronic, others are furniture.',
      Gujarati: 'Television is electronic, others are furniture.',
      Telugu: 'Television is electronic, others are furniture.',
      Kannada: 'Television is electronic, others are furniture.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q25',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Complete the analogy: Book : Read :: Food : ?',
      Marathi: 'समसंबंध पूर्ण करा: Book : Read :: Food : ?',
      Hindi: 'समान संबंध पूर्ण करें: Book : Read :: Food : ?',
      Urdu: 'Complete the analogy: Book : Read :: Food : ?',
      Gujarati: 'समान संबंध पूर्ण करें: Book : Read :: Food : ?',
      Telugu: 'Complete the analogy: Book : Read :: Food : ?',
      Kannada: 'Complete the analogy: Book : Read :: Food : ?'
    },
    options: {
      English: ['Eat', 'Wear', 'Drive', 'Write'],
      Marathi: ['Eat', 'Wear', 'Drive', 'Write'],
      Hindi: ['Eat', 'Wear', 'Drive', 'Write'],
      Urdu: ['Eat', 'Wear', 'Drive', 'Write'],
      Gujarati: ['Eat', 'Wear', 'Drive', 'Write'],
      Telugu: ['Eat', 'Wear', 'Drive', 'Write'],
      Kannada: ['Eat', 'Wear', 'Drive', 'Write']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct relationship is Eat.',
      Marathi: 'योग्य संबंध Eat हा आहे.',
      Hindi: 'सही संबंध Eat है।',
      Urdu: 'Correct relationship is Eat.',
      Gujarati: 'सही संबंध Eat है।',
      Telugu: 'Correct relationship is Eat.',
      Kannada: 'Correct relationship is Eat.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q26',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Marathi: 'जर एका सांकेतिक भाषेत MAN ला NBO म्हटले, तर DOG ला काय म्हणाल?',
      Hindi: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Urdu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Gujarati: 'यदि MAN का कोड NBO (+1) है, तो DOG का कोड क्या होगा?',
      Telugu: 'If MAN is coded as NBO (+1), how is DOG coded?',
      Kannada: 'If MAN is coded as NBO (+1), how is DOG coded?'
    },
    options: {
      English: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Marathi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Hindi: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Urdu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Gujarati: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Telugu: ['EPH', 'BZS', 'XYZ', 'ABC'],
      Kannada: ['EPH', 'BZS', 'XYZ', 'ABC']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter is shifted by +1.',
      Marathi: 'प्रत्येक अक्षर +१ ने पुढे सरकवले आहे.',
      Hindi: '+१ की वृद्धि।',
      Urdu: 'Each letter is shifted by +1.',
      Gujarati: '+१ की वृद्धि।',
      Telugu: 'Each letter is shifted by +1.',
      Kannada: 'Each letter is shifted by +1.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q27',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'easy',
    type: 'analogy',
    questionText: {
      English: 'Find missing number: 12 : 144 :: 13 : ?',
      Marathi: 'समसंबंध ओळखा: 12 : 144 :: 13 : ?',
      Hindi: 'समानुपात ज्ञात करें: 12 : 144 :: 13 : ?',
      Urdu: 'Find missing number: 12 : 144 :: 13 : ?',
      Gujarati: 'समानुपात ज्ञात करें: 12 : 144 :: 13 : ?',
      Telugu: 'Find missing number: 12 : 144 :: 13 : ?',
      Kannada: 'Find missing number: 12 : 144 :: 13 : ?'
    },
    options: {
      English: ['169', '164', '26', '179'],
      Marathi: ['169', '164', '26', '179'],
      Hindi: ['169', '164', '26', '179'],
      Urdu: ['169', '164', '26', '179'],
      Gujarati: ['169', '164', '26', '179'],
      Telugu: ['169', '164', '26', '179'],
      Kannada: ['169', '164', '26', '179']
    },
    correctIndex: 0,
    explanation: {
      English: 'The relation is square (n : n²).',
      Marathi: 'संख्या व तिचा वर्ग असा संबंध आहे.',
      Hindi: 'वर्ग संबंध।',
      Urdu: 'The relation is square (n : n²).',
      Gujarati: 'वर्ग संबंध।',
      Telugu: 'The relation is square (n : n²).',
      Kannada: 'The relation is square (n : n²).'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q28',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Marathi: 'सकाळी सूर्याकडे तोंड करून उभे राहिल्यास डाव्या हाताला कोणती दिशा असेल?',
      Hindi: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Urdu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Gujarati: 'सुबह सूर्य की ओर मुंह करके खड़े होने पर बाईं ओर कौन सी दिशा होगी?',
      Telugu: 'If you stand facing the morning Sun (East), which direction is on your left?',
      Kannada: 'If you stand facing the morning Sun (East), which direction is on your left?'
    },
    options: {
      English: ['North', 'South', 'West', 'North-East'],
      Marathi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान्य'],
      Hindi: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Urdu: ['North', 'South', 'West', 'North-East'],
      Gujarati: ['उत्तर', 'दक्षिण', 'पश्चिम', 'ईशान'],
      Telugu: ['North', 'South', 'West', 'North-East'],
      Kannada: ['North', 'South', 'West', 'North-East']
    },
    correctIndex: 0,
    explanation: {
      English: 'Facing East, North is to your left.',
      Marathi: 'पूर्वेकडे तोंड केल्यास डाव्या बाजूला उत्तर दिशा येते.',
      Hindi: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Urdu: 'Facing East, North is to your left.',
      Gujarati: 'पूर्व की ओर मुंह करने पर बाईं ओर उत्तर दिशा होती है।',
      Telugu: 'Facing East, North is to your left.',
      Kannada: 'Facing East, North is to your left.'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q29',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'easy',
    type: 'relationship',
    questionText: {
      English: 'Your mother\'s brother is your:',
      Marathi: 'तुमच्या आईचा भाऊ तुमचा कोण लागतो?',
      Hindi: 'आपकी माता का भाई आपका क्या लगेगा?',
      Urdu: 'Your mother\\\'s brother is your:',
      Gujarati: 'आपकी माता का भाई आपका क्या लगेगा?',
      Telugu: 'Your mother\\\'s brother is your:',
      Kannada: 'Your mother\\\'s brother is your:'
    },
    options: {
      English: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Marathi: ['मामा', 'वडील', 'आजोबा', 'भाऊ'],
      Hindi: ['मामा', 'पिता', 'दादा', 'भाई'],
      Urdu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Gujarati: ['मामा', 'पिता', 'दादा', 'भाई'],
      Telugu: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother'],
      Kannada: ['Uncle (Mama)', 'Father', 'Grandfather', 'Brother']
    },
    correctIndex: 0,
    explanation: {
      English: 'Mother\'s brother is maternal uncle (Mama).',
      Marathi: 'आईच्या भावाला मामा म्हणतात.',
      Hindi: 'मां के भाई को मामा कहते हैं।',
      Urdu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Gujarati: 'मां के भाई को मामा कहते हैं।',
      Telugu: 'Mother\\\'s brother is maternal uncle (Mama).',
      Kannada: 'Mother\\\'s brother is maternal uncle (Mama).'
    },
    marks: 2
  },
  {
    id: 'std4_s10_q30',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'easy',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hands of a clock at 3:00?',
      Marathi: 'घड्याळात ३:०० वाजता दोन काट्यांमध्ये किती अंशांचा कोन होतो?',
      Hindi: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Urdu: 'What is the angle between the hands of a clock at 3:00?',
      Gujarati: 'घड़ी में ३:०० बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?',
      Telugu: 'What is the angle between the hands of a clock at 3:00?',
      Kannada: 'What is the angle between the hands of a clock at 3:00?'
    },
    options: {
      English: ['90° (Right Angle)', '180°', '60°', '45°'],
      Marathi: ['९०° (काटकोन)', '१८०°', '६०°', '४५°'],
      Hindi: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Urdu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Gujarati: ['९०° (समकोण)', '१८०°', '६०°', '४५°'],
      Telugu: ['90° (Right Angle)', '180°', '60°', '45°'],
      Kannada: ['90° (Right Angle)', '180°', '60°', '45°']
    },
    correctIndex: 0,
    explanation: {
      English: 'At 3:00, hands form a right angle (90°).',
      Marathi: '३:०० वाजता काटकोन (९० अंश) तयार होतो.',
      Hindi: '३:०० बजे समकोण (९०°) बनता है।',
      Urdu: 'At 3:00, hands form a right angle (90°).',
      Gujarati: '३:०० बजे समकोण (९०°) बनता है।',
      Telugu: 'At 3:00, hands form a right angle (90°).',
      Kannada: 'At 3:00, hands form a right angle (90°).'
    },
    marks: 2
  }
];
