import { ScholarshipQuestion } from './scholarshipData';

export const ALL_STD7_QUESTIONS: ScholarshipQuestion[] = [
  {
    id: 'std7_s1_q1',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify the figure of speech: \'कमळासारखे सुंदर मुख\':',
      Marathi: '\'कमळासारखे सुंदर मुख\' या ओळीतील अलंकार कोणता?',
      Hindi: '\'कमल के समान सुंदर मुख\' में कौन सा अलंकार है?',
      Urdu: 'Identify the figure of speech: \\\'कमळासारखे सुंदर मुख\\\':',
      Gujarati: '\\\'कमल के समान सुंदर मुख\\\' में कौन सा अलंकार है?',
      Telugu: 'Identify the figure of speech: \\\'कमळासारखे सुंदर मुख\\\':',
      Kannada: 'Identify the figure of speech: \\\'कमळासारखे सुंदर मुख\\\':'
    },
    options: {
      English: ['Upama (उपमा अलंकार / Simile)', 'Rupak', 'Anupras', 'Yamak'],
      Marathi: ['उपमा अलंकार', 'रूपक अलंकार', 'अनुप्रास', 'यमक'],
      Hindi: ['उपमा अलंकार', 'रूपक अलंकार', 'अनुप्रास', 'यमक'],
      Urdu: ['Upama (उपमा अलंकार / Simile)', 'Rupak', 'Anupras', 'Yamak'],
      Gujarati: ['उपमा अलंकार', 'रूपक अलंकार', 'अनुप्रास', 'यमक'],
      Telugu: ['Upama (उपमा अलंकार / Simile)', 'Rupak', 'Anupras', 'Yamak'],
      Kannada: ['Upama (उपमा अलंकार / Simile)', 'Rupak', 'Anupras', 'Yamak']
    },
    correctIndex: 0,
    explanation: {
      English: 'Comparison using \'सारखे\' indicates Upama (Simile).',
      Marathi: 'दोन वस्तूंची \'सारखे\' शब्दाने तुलना केल्यास उपमा अलंकार होतो.',
      Hindi: 'समानता दर्शाने से उपमा अलंकार होता है।',
      Urdu: 'Comparison using \\\'सारखे\\\' indicates Upama (Simile).',
      Gujarati: 'समानता दर्शाने से उपमा अलंकार होता है।',
      Telugu: 'Comparison using \\\'सारखे\\\' indicates Upama (Simile).',
      Kannada: 'Comparison using \\\'सारखे\\\' indicates Upama (Simile).'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q2',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify the compound type (समास) of \'प्रतिदिन\':',
      Marathi: '\'प्रतिदिन\' या सामासिक शब्दाचा समास कोणता?',
      Hindi: '\'प्रतिदिन\' में कौन सा समास है?',
      Urdu: 'Identify the compound type (समास) of \\\'प्रतिदिन\\\':',
      Gujarati: '\\\'प्रतिदिन\\\' में कौन सा समास है?',
      Telugu: 'Identify the compound type (समास) of \\\'प्रतिदिन\\\':',
      Kannada: 'Identify the compound type (समास) of \\\'प्रतिदिन\\\':'
    },
    options: {
      English: ['Tatpurusha', 'Avyayibhava (अव्ययीभाव समास)', 'Dvandva', 'Dvigu'],
      Marathi: ['तत्पुरुष समास', 'अव्ययीभाव समास', 'द्वंद्व समास', 'द्विगु समास'],
      Hindi: ['तत्पुरुष समास', 'अव्ययीभाव समास', 'द्वंद्व समास', 'द्विगु समास'],
      Urdu: ['Tatpurusha', 'Avyayibhava (अव्ययीभाव समास)', 'Dvandva', 'Dvigu'],
      Gujarati: ['तत्पुरुष समास', 'अव्ययीभाव समास', 'द्वंद्व समास', 'द्विगु समास'],
      Telugu: ['Tatpurusha', 'Avyayibhava (अव्ययीभाव समास)', 'Dvandva', 'Dvigu'],
      Kannada: ['Tatpurusha', 'Avyayibhava (अव्ययीभाव समास)', 'Dvandva', 'Dvigu']
    },
    correctIndex: 1,
    explanation: {
      English: '\'प्रति\' is an indeclinable prefix, making it Avyayibhava Samasa.',
      Marathi: '\'प्रति\' हा उपसर्ग लागल्याने हा अव्ययीभाव समास आहे.',
      Hindi: '\'प्रति\' उपसर्ग होने से अव्ययीभाव समास है।',
      Urdu: '\\\'प्रति\\\' is an indeclinable prefix, making it Avyayibhava Samasa.',
      Gujarati: '\\\'प्रति\\\' उपसर्ग होने से अव्ययीभाव समास है।',
      Telugu: '\\\'प्रति\\\' is an indeclinable prefix, making it Avyayibhava Samasa.',
      Kannada: '\\\'प्रति\\\' is an indeclinable prefix, making it Avyayibhava Samasa.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q3',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Solve the Sandhi: सूर्य + उदय =',
      Marathi: 'संधी करा: सूर्य + उदय =',
      Hindi: 'संधि विच्छेद जोड़ें: सूर्य + उदय =',
      Urdu: 'Solve the Sandhi: सूर्य + उदय =',
      Gujarati: 'संधि विच्छेद जोड़ें: सूर्य + उदय =',
      Telugu: 'Solve the Sandhi: सूर्य + उदय =',
      Kannada: 'Solve the Sandhi: सूर्य + उदय ='
    },
    options: {
      English: ['Suryodaya (सूर्योदय)', 'Suryaday', 'Suryoday', 'Suryuday'],
      Marathi: ['सूर्योदय', 'सूर्यदय', 'सूर्योदय', 'सूर्यउदय'],
      Hindi: ['सूर्योदय', 'सूर्यदय', 'सूर्योदय', 'सूर्यउदय'],
      Urdu: ['Suryodaya (सूर्योदय)', 'Suryaday', 'Suryoday', 'Suryuday'],
      Gujarati: ['सूर्योदय', 'सूर्यदय', 'सूर्योदय', 'सूर्यउदय'],
      Telugu: ['Suryodaya (सूर्योदय)', 'Suryaday', 'Suryoday', 'Suryuday'],
      Kannada: ['Suryodaya (सूर्योदय)', 'Suryaday', 'Suryoday', 'Suryuday']
    },
    correctIndex: 0,
    explanation: {
      English: 'अ/आ + उ = ओ (Suryodaya).',
      Marathi: 'अ + उ = ओ असा स्वरसंधीचा नियम आहे: सूर्योदय.',
      Hindi: 'अ + उ = ओ, सूर्योदय सही है।',
      Urdu: 'अ/आ + उ = ओ (Suryodaya).',
      Gujarati: 'अ + उ = ओ, सूर्योदय सही है।',
      Telugu: 'अ/आ + उ = ओ (Suryodaya).',
      Kannada: 'अ/आ + उ = ओ (Suryodaya).'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q4',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify the voice (प्रयोग): \'रामाने आंबा खाल्ला\':',
      Marathi: '\'रामाने आंबा खाल्ला\' या वाक्यातील प्रयोग कोणता?',
      Hindi: '\'रामाने आंबा खाल्ला\' में कौन सा प्रयोग है?',
      Urdu: 'Identify the voice (प्रयोग): \\\'रामाने आंबा खाल्ला\\\':',
      Gujarati: '\\\'रामाने आंबा खाल्ला\\\' में कौन सा प्रयोग है?',
      Telugu: 'Identify the voice (प्रयोग): \\\'रामाने आंबा खाल्ला\\\':',
      Kannada: 'Identify the voice (प्रयोग): \\\'रामाने आंबा खाल्ला\\\':'
    },
    options: {
      English: ['Kartari', 'Bhave', 'Karmani (कर्मणी प्रयोग)', 'Mishra'],
      Marathi: ['कर्तरी प्रयोग', 'भावे प्रयोग', 'कर्मणी प्रयोग', 'मिश्र प्रयोग'],
      Hindi: ['कर्तरी प्रयोग', 'भावे प्रयोग', 'कर्मणी प्रयोग', 'मिश्र प्रयोग'],
      Urdu: ['Kartari', 'Bhave', 'Karmani (कर्मणी प्रयोग)', 'Mishra'],
      Gujarati: ['कर्तरी प्रयोग', 'भावे प्रयोग', 'कर्मणी प्रयोग', 'मिश्र प्रयोग'],
      Telugu: ['Kartari', 'Bhave', 'Karmani (कर्मणी प्रयोग)', 'Mishra'],
      Kannada: ['Kartari', 'Bhave', 'Karmani (कर्मणी प्रयोग)', 'Mishra']
    },
    correctIndex: 2,
    explanation: {
      English: 'Verb agrees with the object (आंबा), so it is Karmani Prayog.',
      Marathi: 'क्रियापद कर्माप्रमाणे (आंबा) बदलते, म्हणून कर्मणी प्रयोग.',
      Hindi: 'कर्म के अनुसार क्रिया होने से कर्मणी प्रयोग है।',
      Urdu: 'Verb agrees with the object (आंबा), so it is Karmani Prayog.',
      Gujarati: 'कर्म के अनुसार क्रिया होने से कर्मणी प्रयोग है।',
      Telugu: 'Verb agrees with the object (आंबा), so it is Karmani Prayog.',
      Kannada: 'Verb agrees with the object (आंबा), so it is Karmani Prayog.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q5',
    testNumber: 1,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Meaning of: \'उथळ पाण्याला खळखळाट फार\'?',
      Marathi: '\'उथळ पाण्याला खळखळाट फार\' या म्हणीचा अर्थ काय?',
      Hindi: '\'अधजल गगरी छलकत जाए\' का क्या अर्थ है?',
      Urdu: 'Meaning of: \\\'उथळ पाण्याला खळखळाट फार\\\'?',
      Gujarati: '\\\'अधजल गगरी छलकत जाए\\\' का क्या अर्थ है?',
      Telugu: 'Meaning of: \\\'उथळ पाण्याला खळखळाट फार\\\'?',
      Kannada: 'Meaning of: \\\'उथळ पाण्याला खळखळाट फार\\\'?'
    },
    options: {
      English: ['Deep water makes noise', 'Person with little knowledge boasts a lot', 'Rivers dry up in summer', 'Drinking water carefully'],
      Marathi: ['खोल पाण्यात आवाज होतो', 'कमी ज्ञान असणारा फार बढाया मारतो', 'उन्हाळ्यात नद्या आटतात', 'काळजीपूर्वक पाणी पिणे'],
      Hindi: ['गहरे पानी में आवाज', 'कम ज्ञान वाला व्यक्ति अधिक दिखावा करता है', 'गर्मी में नदियां सूखती हैं', 'पानी ध्यान से पीना'],
      Urdu: ['Deep water makes noise', 'Person with little knowledge boasts a lot', 'Rivers dry up in summer', 'Drinking water carefully'],
      Gujarati: ['गहरे पानी में आवाज', 'कम ज्ञान वाला व्यक्ति अधिक दिखावा करता है', 'गर्मी में नदियां सूखती हैं', 'पानी ध्यान से पीना'],
      Telugu: ['Deep water makes noise', 'Person with little knowledge boasts a lot', 'Rivers dry up in summer', 'Drinking water carefully'],
      Kannada: ['Deep water makes noise', 'Person with little knowledge boasts a lot', 'Rivers dry up in summer', 'Drinking water carefully']
    },
    correctIndex: 1,
    explanation: {
      English: 'A person with shallow knowledge boasts loudly.',
      Marathi: 'कमी ज्ञान किंवा योग्यता असणारा मनुष्य अधिक बढाया मारतो.',
      Hindi: 'अल्पज्ञानी व्यक्ति बहुत डींगें हांकता है।',
      Urdu: 'A person with shallow knowledge boasts loudly.',
      Gujarati: 'अल्पज्ञानी व्यक्ति बहुत डींगें हांकता है।',
      Telugu: 'A person with shallow knowledge boasts loudly.',
      Kannada: 'A person with shallow knowledge boasts loudly.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q1',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify the figure of speech: \'देह हे देवाचे मंदिर\':',
      Marathi: '\'देह हे देवाचे मंदिर\' यातील अलंकार ओळखा:',
      Hindi: '\'देह देवालय है\' में कौन सा अलंकार है?',
      Urdu: 'Identify the figure of speech: \\\'देह हे देवाचे मंदिर\\\':',
      Gujarati: '\\\'देह देवालय है\\\' में कौन सा अलंकार है?',
      Telugu: 'Identify the figure of speech: \\\'देह हे देवाचे मंदिर\\\':',
      Kannada: 'Identify the figure of speech: \\\'देह हे देवाचे मंदिर\\\':'
    },
    options: {
      English: ['Upama', 'Rupak (रूपक अलंकार / Metaphor)', 'Drishtant', 'Slesh'],
      Marathi: ['उपमा', 'रूपक अलंकार', 'दृष्टांत', 'श्लेष'],
      Hindi: ['उपमा', 'रूपक अलंकार', 'दृष्टांत', 'श्लेष'],
      Urdu: ['Upama', 'Rupak (रूपक अलंकार / Metaphor)', 'Drishtant', 'Slesh'],
      Gujarati: ['उपमा', 'रूपक अलंकार', 'दृष्टांत', 'श्लेष'],
      Telugu: ['Upama', 'Rupak (रूपक अलंकार / Metaphor)', 'Drishtant', 'Slesh'],
      Kannada: ['Upama', 'Rupak (रूपक अलंकार / Metaphor)', 'Drishtant', 'Slesh']
    },
    correctIndex: 1,
    explanation: {
      English: 'Direct identification without comparison words is Rupak.',
      Marathi: 'उपमेय आणि उपमान एकरूप मानल्यास रूपक अलंकार होतो.',
      Hindi: 'रूपक अलंकार सही है।',
      Urdu: 'Direct identification without comparison words is Rupak.',
      Gujarati: 'रूपक अलंकार सही है।',
      Telugu: 'Direct identification without comparison words is Rupak.',
      Kannada: 'Direct identification without comparison words is Rupak.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q2',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify the Samasa of \'राजवाडा\':',
      Marathi: '\'राजवाडा\' या शब्दाचा समास कोणता?',
      Hindi: '\'राजवाडा\' (राजा का महल) में कौन सा समास है?',
      Urdu: 'Identify the Samasa of \\\'राजवाडा\\\':',
      Gujarati: '\\\'राजवाडा\\\' (राजा का महल) में कौन सा समास है?',
      Telugu: 'Identify the Samasa of \\\'राजवाडा\\\':',
      Kannada: 'Identify the Samasa of \\\'राजवाडा\\\':'
    },
    options: {
      English: ['Tatpurusha (तत्पुरुष समास)', 'Dvandva', 'Bahuvrihi', 'Avyayibhava'],
      Marathi: ['तत्पुरुष समास', 'द्वंद्व समास', 'बहुव्रीही समास', 'अव्ययीभाव समास'],
      Hindi: ['तत्पुरुष समास', 'द्वंद्व समास', 'बहुव्रीही समास', 'अव्ययीभाव समास'],
      Urdu: ['Tatpurusha (तत्पुरुष समास)', 'Dvandva', 'Bahuvrihi', 'Avyayibhava'],
      Gujarati: ['तत्पुरुष समास', 'द्वंद्व समास', 'बहुव्रीही समास', 'अव्ययीभाव समास'],
      Telugu: ['Tatpurusha (तत्पुरुष समास)', 'Dvandva', 'Bahuvrihi', 'Avyayibhava'],
      Kannada: ['Tatpurusha (तत्पुरुष समास)', 'Dvandva', 'Bahuvrihi', 'Avyayibhava']
    },
    correctIndex: 0,
    explanation: {
      English: 'Raja\'s wada (राजाचा वाडा) is Shasthi Tatpurusha.',
      Marathi: 'राजाचा वाडा (षष्ठी विभक्ती प्रत्यय) म्हणून तत्पुरुष समास.',
      Hindi: 'तत्पुरुष समास है।',
      Urdu: 'Raja\\\'s wada (राजाचा वाडा) is Shasthi Tatpurusha.',
      Gujarati: 'तत्पुरुष समास है।',
      Telugu: 'Raja\\\'s wada (राजाचा वाडा) is Shasthi Tatpurusha.',
      Kannada: 'Raja\\\'s wada (राजाचा वाडा) is Shasthi Tatpurusha.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q3',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Solve the Sandhi: सत् + जन =',
      Marathi: 'संधी करा: सत् + जन =',
      Hindi: 'संधि करें: सत् + जन =',
      Urdu: 'Solve the Sandhi: सत् + जन =',
      Gujarati: 'संधि करें: सत् + जन =',
      Telugu: 'Solve the Sandhi: सत् + जन =',
      Kannada: 'Solve the Sandhi: सत् + जन ='
    },
    options: {
      English: ['Satjan', 'Sadjan', 'Sajjan (सज्जन)', 'Sajan'],
      Marathi: ['सतजन', 'सदजन', 'सज्जन', 'साजन'],
      Hindi: ['सतजन', 'सदजन', 'सज्जन', 'साजन'],
      Urdu: ['Satjan', 'Sadjan', 'Sajjan (सज्जन)', 'Sajan'],
      Gujarati: ['सतजन', 'सदजन', 'सज्जन', 'साजन'],
      Telugu: ['Satjan', 'Sadjan', 'Sajjan (सज्जन)', 'Sajan'],
      Kannada: ['Satjan', 'Sadjan', 'Sajjan (सज्जन)', 'Sajan']
    },
    correctIndex: 2,
    explanation: {
      English: 'त् + ज = ज्ज (Sajjan).',
      Marathi: 'त् पुढे ज आल्यास त्याचा \'ज्ज\' होतो: सज्जन.',
      Hindi: 'सज्जन सही संधि है।',
      Urdu: 'त् + ज = ज्ज (Sajjan).',
      Gujarati: 'सज्जन सही संधि है।',
      Telugu: 'त् + ज = ज्ज (Sajjan).',
      Kannada: 'त् + ज = ज्ज (Sajjan).'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q4',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify the voice: \'तो निबंध लिहितो\':',
      Marathi: '\'तो निबंध लिहितो\' या वाक्यातील प्रयोग ओळखा:',
      Hindi: '\'तो निबंध लिहितो\' में कौन सा प्रयोग है?',
      Urdu: 'Identify the voice: \\\'तो निबंध लिहितो\\\':',
      Gujarati: '\\\'तो निबंध लिहितो\\\' में कौन सा प्रयोग है?',
      Telugu: 'Identify the voice: \\\'तो निबंध लिहितो\\\':',
      Kannada: 'Identify the voice: \\\'तो निबंध लिहितो\\\':'
    },
    options: {
      English: ['Kartari (कर्तरी प्रयोग)', 'Karmani', 'Bhave', 'Sankirna'],
      Marathi: ['कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'भावे प्रयोग', 'संकीर्ण प्रयोग'],
      Hindi: ['कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'भावे प्रयोग', 'संकीर्ण प्रयोग'],
      Urdu: ['Kartari (कर्तरी प्रयोग)', 'Karmani', 'Bhave', 'Sankirna'],
      Gujarati: ['कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'भावे प्रयोग', 'संकीर्ण प्रयोग'],
      Telugu: ['Kartari (कर्तरी प्रयोग)', 'Karmani', 'Bhave', 'Sankirna'],
      Kannada: ['Kartari (कर्तरी प्रयोग)', 'Karmani', 'Bhave', 'Sankirna']
    },
    correctIndex: 0,
    explanation: {
      English: 'Verb agrees with subject (तो), so Kartari Prayog.',
      Marathi: 'क्रियापद कर्त्याच्या लिंग-वचनानुसार बदलते, म्हणून कर्तरी प्रयोग.',
      Hindi: 'कर्तरी प्रयोग है।',
      Urdu: 'Verb agrees with subject (तो), so Kartari Prayog.',
      Gujarati: 'कर्तरी प्रयोग है।',
      Telugu: 'Verb agrees with subject (तो), so Kartari Prayog.',
      Kannada: 'Verb agrees with subject (तो), so Kartari Prayog.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q5',
    testNumber: 2,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Meaning of: \'नाव मोठे लक्षण खोटे\'?',
      Marathi: '\'नाव मोठे लक्षण खोटे\' या म्हणीचा योग्य अर्थ कोणता?',
      Hindi: '\'नाम बड़े और दर्शन छोटे\' का अर्थ क्या है?',
      Urdu: 'Meaning of: \\\'नाव मोठे लक्षण खोटे\\\'?',
      Gujarati: '\\\'नाम बड़े और दर्शन छोटे\\\' का अर्थ क्या है?',
      Telugu: 'Meaning of: \\\'नाव मोठे लक्षण खोटे\\\'?',
      Kannada: 'Meaning of: \\\'नाव मोठे लक्षण खोटे\\\'?'
    },
    options: {
      English: ['Big names are good', 'Names are false', 'Famous people are kind', 'Great reputation but poor reality'],
      Marathi: ['मोठी नावे चांगली असतात', 'नावे खोटी असणे', 'प्रसिद्ध लोक दयाळू असतात', 'कीर्ती मोठी पण प्रत्यक्ष वागणूक निकृष्ट'],
      Hindi: ['नाम बड़ा होना अच्छा है', 'झूठे नाम', 'प्रसिद्ध लोग दयालु', 'दिखावा बड़ा लेकिन असलियत में कुछ नहीं'],
      Urdu: ['Big names are good', 'Names are false', 'Famous people are kind', 'Great reputation but poor reality'],
      Gujarati: ['नाम बड़ा होना अच्छा है', 'झूठे नाम', 'प्रसिद्ध लोग दयालु', 'दिखावा बड़ा लेकिन असलियत में कुछ नहीं'],
      Telugu: ['Big names are good', 'Names are false', 'Famous people are kind', 'Great reputation but poor reality'],
      Kannada: ['Big names are good', 'Names are false', 'Famous people are kind', 'Great reputation but poor reality']
    },
    correctIndex: 3,
    explanation: {
      English: 'Great fame but reality is hollow.',
      Marathi: 'प्रसिद्धी खूप पण प्रत्यक्षात निकृष्ट अवस्था असणे.',
      Hindi: 'बड़ा नाम लेकिन खोखली असलियत।',
      Urdu: 'Great fame but reality is hollow.',
      Gujarati: 'बड़ा नाम लेकिन खोखली असलियत।',
      Telugu: 'Great fame but reality is hollow.',
      Kannada: 'Great fame but reality is hollow.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q1',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 3:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 3):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (3):',
      Urdu: 'Identify figure of speech in poetry line 3:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (3):',
      Telugu: 'Identify figure of speech in poetry line 3:',
      Kannada: 'Identify figure of speech in poetry line 3:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 3,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q2',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 3:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 3):',
      Hindi: 'समास पहचानिए (3):',
      Urdu: 'Identify Samasa for word related to 3:',
      Gujarati: 'समास पहचानिए (3):',
      Telugu: 'Identify Samasa for word related to 3:',
      Kannada: 'Identify Samasa for word related to 3:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 0,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q3',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 3:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 3):',
      Hindi: 'संधि का प्रकार पहचानिए (3):',
      Urdu: 'Identify Sandhi formation 3:',
      Gujarati: 'संधि का प्रकार पहचानिए (3):',
      Telugu: 'Identify Sandhi formation 3:',
      Kannada: 'Identify Sandhi formation 3:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 1,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q4',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 3:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 3):',
      Hindi: 'प्रयोग पहचानिए (3):',
      Urdu: 'Identify Prayog in sentence 3:',
      Gujarati: 'प्रयोग पहचानिए (3):',
      Telugu: 'Identify Prayog in sentence 3:',
      Kannada: 'Identify Prayog in sentence 3:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 2,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q5',
    testNumber: 3,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 3:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 3):',
      Hindi: 'कहावत का अर्थ पहचानें (3):',
      Urdu: 'Identify meaning of proverb 3:',
      Gujarati: 'कहावत का अर्थ पहचानें (3):',
      Telugu: 'Identify meaning of proverb 3:',
      Kannada: 'Identify meaning of proverb 3:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 3,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q1',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 4:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 4):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (4):',
      Urdu: 'Identify figure of speech in poetry line 4:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (4):',
      Telugu: 'Identify figure of speech in poetry line 4:',
      Kannada: 'Identify figure of speech in poetry line 4:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 0,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q2',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 4:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 4):',
      Hindi: 'समास पहचानिए (4):',
      Urdu: 'Identify Samasa for word related to 4:',
      Gujarati: 'समास पहचानिए (4):',
      Telugu: 'Identify Samasa for word related to 4:',
      Kannada: 'Identify Samasa for word related to 4:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 1,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q3',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 4:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 4):',
      Hindi: 'संधि का प्रकार पहचानिए (4):',
      Urdu: 'Identify Sandhi formation 4:',
      Gujarati: 'संधि का प्रकार पहचानिए (4):',
      Telugu: 'Identify Sandhi formation 4:',
      Kannada: 'Identify Sandhi formation 4:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 2,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q4',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 4:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 4):',
      Hindi: 'प्रयोग पहचानिए (4):',
      Urdu: 'Identify Prayog in sentence 4:',
      Gujarati: 'प्रयोग पहचानिए (4):',
      Telugu: 'Identify Prayog in sentence 4:',
      Kannada: 'Identify Prayog in sentence 4:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 3,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q5',
    testNumber: 4,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 4:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 4):',
      Hindi: 'कहावत का अर्थ पहचानें (4):',
      Urdu: 'Identify meaning of proverb 4:',
      Gujarati: 'कहावत का अर्थ पहचानें (4):',
      Telugu: 'Identify meaning of proverb 4:',
      Kannada: 'Identify meaning of proverb 4:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 0,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q1',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 5:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 5):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (5):',
      Urdu: 'Identify figure of speech in poetry line 5:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (5):',
      Telugu: 'Identify figure of speech in poetry line 5:',
      Kannada: 'Identify figure of speech in poetry line 5:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 1,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q2',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 5:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 5):',
      Hindi: 'समास पहचानिए (5):',
      Urdu: 'Identify Samasa for word related to 5:',
      Gujarati: 'समास पहचानिए (5):',
      Telugu: 'Identify Samasa for word related to 5:',
      Kannada: 'Identify Samasa for word related to 5:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 2,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q3',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 5:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 5):',
      Hindi: 'संधि का प्रकार पहचानिए (5):',
      Urdu: 'Identify Sandhi formation 5:',
      Gujarati: 'संधि का प्रकार पहचानिए (5):',
      Telugu: 'Identify Sandhi formation 5:',
      Kannada: 'Identify Sandhi formation 5:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 3,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q4',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 5:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 5):',
      Hindi: 'प्रयोग पहचानिए (5):',
      Urdu: 'Identify Prayog in sentence 5:',
      Gujarati: 'प्रयोग पहचानिए (5):',
      Telugu: 'Identify Prayog in sentence 5:',
      Kannada: 'Identify Prayog in sentence 5:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 0,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q5',
    testNumber: 5,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 5:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 5):',
      Hindi: 'कहावत का अर्थ पहचानें (5):',
      Urdu: 'Identify meaning of proverb 5:',
      Gujarati: 'कहावत का अर्थ पहचानें (5):',
      Telugu: 'Identify meaning of proverb 5:',
      Kannada: 'Identify meaning of proverb 5:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 1,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q1',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 6:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 6):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (6):',
      Urdu: 'Identify figure of speech in poetry line 6:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (6):',
      Telugu: 'Identify figure of speech in poetry line 6:',
      Kannada: 'Identify figure of speech in poetry line 6:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 2,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q2',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 6:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 6):',
      Hindi: 'समास पहचानिए (6):',
      Urdu: 'Identify Samasa for word related to 6:',
      Gujarati: 'समास पहचानिए (6):',
      Telugu: 'Identify Samasa for word related to 6:',
      Kannada: 'Identify Samasa for word related to 6:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 3,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q3',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 6:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 6):',
      Hindi: 'संधि का प्रकार पहचानिए (6):',
      Urdu: 'Identify Sandhi formation 6:',
      Gujarati: 'संधि का प्रकार पहचानिए (6):',
      Telugu: 'Identify Sandhi formation 6:',
      Kannada: 'Identify Sandhi formation 6:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 0,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q4',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 6:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 6):',
      Hindi: 'प्रयोग पहचानिए (6):',
      Urdu: 'Identify Prayog in sentence 6:',
      Gujarati: 'प्रयोग पहचानिए (6):',
      Telugu: 'Identify Prayog in sentence 6:',
      Kannada: 'Identify Prayog in sentence 6:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 1,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q5',
    testNumber: 6,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 6:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 6):',
      Hindi: 'कहावत का अर्थ पहचानें (6):',
      Urdu: 'Identify meaning of proverb 6:',
      Gujarati: 'कहावत का अर्थ पहचानें (6):',
      Telugu: 'Identify meaning of proverb 6:',
      Kannada: 'Identify meaning of proverb 6:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 2,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q1',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 7:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 7):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (7):',
      Urdu: 'Identify figure of speech in poetry line 7:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (7):',
      Telugu: 'Identify figure of speech in poetry line 7:',
      Kannada: 'Identify figure of speech in poetry line 7:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 3,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q2',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 7:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 7):',
      Hindi: 'समास पहचानिए (7):',
      Urdu: 'Identify Samasa for word related to 7:',
      Gujarati: 'समास पहचानिए (7):',
      Telugu: 'Identify Samasa for word related to 7:',
      Kannada: 'Identify Samasa for word related to 7:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 0,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q3',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 7:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 7):',
      Hindi: 'संधि का प्रकार पहचानिए (7):',
      Urdu: 'Identify Sandhi formation 7:',
      Gujarati: 'संधि का प्रकार पहचानिए (7):',
      Telugu: 'Identify Sandhi formation 7:',
      Kannada: 'Identify Sandhi formation 7:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 1,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q4',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 7:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 7):',
      Hindi: 'प्रयोग पहचानिए (7):',
      Urdu: 'Identify Prayog in sentence 7:',
      Gujarati: 'प्रयोग पहचानिए (7):',
      Telugu: 'Identify Prayog in sentence 7:',
      Kannada: 'Identify Prayog in sentence 7:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 2,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q5',
    testNumber: 7,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 7:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 7):',
      Hindi: 'कहावत का अर्थ पहचानें (7):',
      Urdu: 'Identify meaning of proverb 7:',
      Gujarati: 'कहावत का अर्थ पहचानें (7):',
      Telugu: 'Identify meaning of proverb 7:',
      Kannada: 'Identify meaning of proverb 7:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 3,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q1',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 8:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 8):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (8):',
      Urdu: 'Identify figure of speech in poetry line 8:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (8):',
      Telugu: 'Identify figure of speech in poetry line 8:',
      Kannada: 'Identify figure of speech in poetry line 8:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 0,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q2',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 8:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 8):',
      Hindi: 'समास पहचानिए (8):',
      Urdu: 'Identify Samasa for word related to 8:',
      Gujarati: 'समास पहचानिए (8):',
      Telugu: 'Identify Samasa for word related to 8:',
      Kannada: 'Identify Samasa for word related to 8:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 1,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q3',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 8:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 8):',
      Hindi: 'संधि का प्रकार पहचानिए (8):',
      Urdu: 'Identify Sandhi formation 8:',
      Gujarati: 'संधि का प्रकार पहचानिए (8):',
      Telugu: 'Identify Sandhi formation 8:',
      Kannada: 'Identify Sandhi formation 8:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 2,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q4',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 8:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 8):',
      Hindi: 'प्रयोग पहचानिए (8):',
      Urdu: 'Identify Prayog in sentence 8:',
      Gujarati: 'प्रयोग पहचानिए (8):',
      Telugu: 'Identify Prayog in sentence 8:',
      Kannada: 'Identify Prayog in sentence 8:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 3,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q5',
    testNumber: 8,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 8:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 8):',
      Hindi: 'कहावत का अर्थ पहचानें (8):',
      Urdu: 'Identify meaning of proverb 8:',
      Gujarati: 'कहावत का अर्थ पहचानें (8):',
      Telugu: 'Identify meaning of proverb 8:',
      Kannada: 'Identify meaning of proverb 8:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 0,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q1',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 9:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 9):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (9):',
      Urdu: 'Identify figure of speech in poetry line 9:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (9):',
      Telugu: 'Identify figure of speech in poetry line 9:',
      Kannada: 'Identify figure of speech in poetry line 9:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 1,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q2',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 9:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 9):',
      Hindi: 'समास पहचानिए (9):',
      Urdu: 'Identify Samasa for word related to 9:',
      Gujarati: 'समास पहचानिए (9):',
      Telugu: 'Identify Samasa for word related to 9:',
      Kannada: 'Identify Samasa for word related to 9:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 2,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q3',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 9:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 9):',
      Hindi: 'संधि का प्रकार पहचानिए (9):',
      Urdu: 'Identify Sandhi formation 9:',
      Gujarati: 'संधि का प्रकार पहचानिए (9):',
      Telugu: 'Identify Sandhi formation 9:',
      Kannada: 'Identify Sandhi formation 9:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 3,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q4',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 9:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 9):',
      Hindi: 'प्रयोग पहचानिए (9):',
      Urdu: 'Identify Prayog in sentence 9:',
      Gujarati: 'प्रयोग पहचानिए (9):',
      Telugu: 'Identify Prayog in sentence 9:',
      Kannada: 'Identify Prayog in sentence 9:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 0,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q5',
    testNumber: 9,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 9:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 9):',
      Hindi: 'कहावत का अर्थ पहचानें (9):',
      Urdu: 'Identify meaning of proverb 9:',
      Gujarati: 'कहावत का अर्थ पहचानें (9):',
      Telugu: 'Identify meaning of proverb 9:',
      Kannada: 'Identify meaning of proverb 9:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 1,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q1',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 1,
    difficulty: 'moderate',
    type: 'figure_of_speech',
    questionText: {
      English: 'Identify figure of speech in poetry line 10:',
      Marathi: 'काव्यपंक्तीतील अलंकार ओळखा (उदा. 10):',
      Hindi: 'काव्य पंक्ति का अलंकार पहचानें (10):',
      Urdu: 'Identify figure of speech in poetry line 10:',
      Gujarati: 'काव्य पंक्ति का अलंकार पहचानें (10):',
      Telugu: 'Identify figure of speech in poetry line 10:',
      Kannada: 'Identify figure of speech in poetry line 10:'
    },
    options: {
      English: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Marathi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ती', 'उपमा'],
      Hindi: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Urdu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Gujarati: ['अनुप्रास', 'चेतनागुणोक्ती', 'अतिशयोक्ति', 'उपमा'],
      Telugu: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama'],
      Kannada: ['Anupras (अनुप्रास)', 'Chetanagunokti (चेतनागुणोक्ती)', 'Atishayokti (अतिशयोक्ती)', 'Upama']
    },
    correctIndex: 2,
    explanation: {
      English: 'Figure of speech in Std 7 syllabus.',
      Marathi: 'इयत्ता ७ वी व्याकरण अलंकार.',
      Hindi: 'अलंकार नियम।',
      Urdu: 'Figure of speech in Std 7 syllabus.',
      Gujarati: 'अलंकार नियम।',
      Telugu: 'Figure of speech in Std 7 syllabus.',
      Kannada: 'Figure of speech in Std 7 syllabus.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q2',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 2,
    difficulty: 'moderate',
    type: 'samasa',
    questionText: {
      English: 'Identify Samasa for word related to 10:',
      Marathi: 'सामासिक शब्दाचा समास ओळखा (उदा. 10):',
      Hindi: 'समास पहचानिए (10):',
      Urdu: 'Identify Samasa for word related to 10:',
      Gujarati: 'समास पहचानिए (10):',
      Telugu: 'Identify Samasa for word related to 10:',
      Kannada: 'Identify Samasa for word related to 10:'
    },
    options: {
      English: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Marathi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Hindi: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Urdu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Gujarati: ['द्वंद्व समास', 'द्विगु समास', 'तत्पुरुष समास', 'बहुव्रीही समास'],
      Telugu: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi'],
      Kannada: ['Dvandva (द्वंद्व समास)', 'Dvigu (द्विगु समास)', 'Tatpurusha', 'Bahuvrihi']
    },
    correctIndex: 3,
    explanation: {
      English: 'Samasa classification.',
      Marathi: 'समासाचे वर्गीकरण.',
      Hindi: 'समास वर्गीकरण।',
      Urdu: 'Samasa classification.',
      Gujarati: 'समास वर्गीकरण।',
      Telugu: 'Samasa classification.',
      Kannada: 'Samasa classification.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q3',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 3,
    difficulty: 'moderate',
    type: 'sandhi',
    questionText: {
      English: 'Identify Sandhi formation 10:',
      Marathi: 'संधी प्रकार ओळखा (उदा. 10):',
      Hindi: 'संधि का प्रकार पहचानिए (10):',
      Urdu: 'Identify Sandhi formation 10:',
      Gujarati: 'संधि का प्रकार पहचानिए (10):',
      Telugu: 'Identify Sandhi formation 10:',
      Kannada: 'Identify Sandhi formation 10:'
    },
    options: {
      English: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Marathi: ['स्वरसंधी', 'व्यंजनसंधी', 'विसर्गसंधी', 'यांपैकी नाही'],
      Hindi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Urdu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Gujarati: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'इनमें से कोई नहीं'],
      Telugu: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None'],
      Kannada: ['Swar Sandhi (स्वरसंधी)', 'Vyanjan Sandhi (व्यंजनसंधी)', 'Visarga Sandhi (विसर्गसंधी)', 'None']
    },
    correctIndex: 0,
    explanation: {
      English: 'Sandhi rules.',
      Marathi: 'संधीचे नियम.',
      Hindi: 'संधि नियम।',
      Urdu: 'Sandhi rules.',
      Gujarati: 'संधि नियम।',
      Telugu: 'Sandhi rules.',
      Kannada: 'Sandhi rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q4',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 4,
    difficulty: 'moderate',
    type: 'prayog',
    questionText: {
      English: 'Identify Prayog in sentence 10:',
      Marathi: 'वाक्यातील प्रयोग ओळखा (उदा. 10):',
      Hindi: 'प्रयोग पहचानिए (10):',
      Urdu: 'Identify Prayog in sentence 10:',
      Gujarati: 'प्रयोग पहचानिए (10):',
      Telugu: 'Identify Prayog in sentence 10:',
      Kannada: 'Identify Prayog in sentence 10:'
    },
    options: {
      English: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Marathi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Hindi: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Urdu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Gujarati: ['भावे प्रयोग', 'कर्तरी प्रयोग', 'कर्मणी प्रयोग', 'नवीन कर्मणी'],
      Telugu: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani'],
      Kannada: ['Bhave (भावे प्रयोग)', 'Kartari', 'Karmani', 'Navin Karmani']
    },
    correctIndex: 1,
    explanation: {
      English: 'Prayog rules.',
      Marathi: 'प्रयोगाचे नियम.',
      Hindi: 'प्रयोग नियम।',
      Urdu: 'Prayog rules.',
      Gujarati: 'प्रयोग नियम।',
      Telugu: 'Prayog rules.',
      Kannada: 'Prayog rules.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q5',
    testNumber: 10,
    section: 'First Language',
    subject: 'First Language',
    questionNumberInSet: 5,
    difficulty: 'moderate',
    type: 'proverb',
    questionText: {
      English: 'Identify meaning of proverb 10:',
      Marathi: 'म्हणीचा योग्य अर्थ ओळखा (उदा. 10):',
      Hindi: 'कहावत का अर्थ पहचानें (10):',
      Urdu: 'Identify meaning of proverb 10:',
      Gujarati: 'कहावत का अर्थ पहचानें (10):',
      Telugu: 'Identify meaning of proverb 10:',
      Kannada: 'Identify meaning of proverb 10:'
    },
    options: {
      English: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Marathi: ['कष्ट केल्याने फळ मिळते', 'अवाजवी फायदा घेणे वाईट', 'संयमाने काम फत्ते होते', 'ऐक्यामध्ये मोठे बळ असते'],
      Hindi: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Urdu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Gujarati: ['परिश्रम का फल मीठा होता है', 'अनुचित लाभ उठाना गलत है', 'धैर्य से सफलता मिलती है', 'एकता में बल है'],
      Telugu: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength'],
      Kannada: ['Working diligently pays off', 'Taking undue advantage is bad', 'Patience brings sweet fruit', 'Unity gives immense strength']
    },
    correctIndex: 2,
    explanation: {
      English: 'Proverb analysis.',
      Marathi: 'म्हणीचा अचूक अर्थ.',
      Hindi: 'कहावत का अर्थ।',
      Urdu: 'Proverb analysis.',
      Gujarati: 'कहावत का अर्थ।',
      Telugu: 'Proverb analysis.',
      Kannada: 'Proverb analysis.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q6',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (1 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (1 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (1 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (1 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (1 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (1 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (1 × 6):'
    },
    options: {
      English: ['66', '56', '78', '46'],
      Marathi: ['66', '56', '78', '46'],
      Hindi: ['66', '56', '78', '46'],
      Urdu: ['66', '56', '78', '46'],
      Gujarati: ['66', '56', '78', '46'],
      Telugu: ['66', '56', '78', '46'],
      Kannada: ['66', '56', '78', '46']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 6 = 66.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 6 = 66.',
      Hindi: '६० + 6 = 66।',
      Urdu: '(-15) × (-4) = +60. 60 + 6 = 66.',
      Gujarati: '६० + 6 = 66।',
      Telugu: '(-15) × (-4) = +60. 60 + 6 = 66.',
      Kannada: '(-15) × (-4) = +60. 60 + 6 = 66.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q7',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 12:',
      Marathi: '१२ आणि 12 यांचा लसावि किती?',
      Hindi: '१२ और 12 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 12:',
      Gujarati: '१२ और 12 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 12:',
      Kannada: 'Find the LCM of 12 and 12:'
    },
    options: {
      English: ['12', '24', '6', '24'],
      Marathi: ['12', '24', '6', '24'],
      Hindi: ['12', '24', '6', '24'],
      Urdu: ['12', '24', '6', '24'],
      Gujarati: ['12', '24', '6', '24'],
      Telugu: ['12', '24', '6', '24'],
      Kannada: ['12', '24', '6', '24']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q8',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹5000 at 6% per annum for 3 years:',
      Marathi: '₹5000 मुद्दलाचे द.सा.द.शे. 6 दराने 3 वर्षांचे सरळव्याज किती?',
      Hindi: '₹5000 के मूलधन पर 6% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹5000 at 6% per annum for 3 years:',
      Gujarati: '₹5000 के मूलधन पर 6% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹5000 at 6% per annum for 3 years:',
      Kannada: 'Find Simple Interest on ₹5000 at 6% per annum for 3 years:'
    },
    options: {
      English: ['₹900', '₹850', '₹1000', '₹800'],
      Marathi: ['₹900', '₹850', '₹1000', '₹800'],
      Hindi: ['₹900', '₹850', '₹1000', '₹800'],
      Urdu: ['₹900', '₹850', '₹1000', '₹800'],
      Gujarati: ['₹900', '₹850', '₹1000', '₹800'],
      Telugu: ['₹900', '₹850', '₹1000', '₹800'],
      Kannada: ['₹900', '₹850', '₹1000', '₹800']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (5000 × 6 × 3)/100 = ₹900.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (5000 × 6 × 3)/१०० = ₹900.',
      Hindi: 'साधारण ब्याज = ₹900।',
      Urdu: 'SI = (P × R × T)/100 = (5000 × 6 × 3)/100 = ₹900.',
      Gujarati: 'साधारण ब्याज = ₹900।',
      Telugu: 'SI = (P × R × T)/100 = (5000 × 6 × 3)/100 = ₹900.',
      Kannada: 'SI = (P × R × T)/100 = (5000 × 6 × 3)/100 = ₹900.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q9',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹600 and Selling Price is ₹720. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹600 व विक्री किंमत ₹720 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹600 और विक्रय मूल्य ₹720 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹600 and Selling Price is ₹720. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹600 और विक्रय मूल्य ₹720 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹600 and Selling Price is ₹720. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹600 and Selling Price is ₹720. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((120) / 600) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((120) / 600) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((120) / 600) × 100 = 20%.',
      Kannada: 'Profit % = ((120) / 600) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q10',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 8 सेमी व 10 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 8 सेमी और 10 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 8 सेमी और 10 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:'
    },
    options: {
      English: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Marathi: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Hindi: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Urdu: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Gujarati: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Telugu: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Kannada: ['12 cm', '14 cm', '10 cm', '18 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Marathi: 'कर्ण² = 8² + 10² = 12 सेमी.',
      Hindi: 'कर्ण = 12 सेमी।',
      Urdu: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Gujarati: 'कर्ण = 12 सेमी।',
      Telugu: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Kannada: 'Hypotenuse = √(8² + 10²) = 12 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q11',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 40°?',
      Marathi: '40° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '40° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 40°?',
      Gujarati: '40° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 40°?',
      Kannada: 'What is the supplementary angle of 40°?'
    },
    options: {
      English: ['140°', '130°', '160°', '90°'],
      Marathi: ['140°', '130°', '160°', '९०°'],
      Hindi: ['140°', '130°', '160°', '९०°'],
      Urdu: ['140°', '130°', '160°', '90°'],
      Gujarati: ['140°', '130°', '160°', '९०°'],
      Telugu: ['140°', '130°', '160°', '90°'],
      Kannada: ['140°', '130°', '160°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 40 = 140°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 40 = 140°.',
      Hindi: '१८० - 40 = 140°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 40 = 140°.',
      Gujarati: '१८० - 40 = 140°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 40 = 140°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 40 = 140°.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q12',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Marathi: 'त्रिज्या 7 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 7 cm (π = 22/7):'
    },
    options: {
      English: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Marathi: ['154 चौ.सेमी', '134 चौ.सेमी', '194 चौ.सेमी', '44 चौ.सेमी'],
      Hindi: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Urdu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Gujarati: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Telugu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Kannada: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 7² = 154 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Gujarati: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 7² = 154 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q13',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 9. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 9. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 9. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 9. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 9. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 9. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 9. Find x:'
    },
    options: {
      English: ['4', '6', '3', '8'],
      Marathi: ['4', '6', '3', '8'],
      Hindi: ['4', '6', '3', '8'],
      Urdu: ['4', '6', '3', '8'],
      Gujarati: ['4', '6', '3', '8'],
      Telugu: ['4', '6', '3', '8'],
      Kannada: ['4', '6', '3', '8']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 9 + 7 = 16 => x = 4.',
      Marathi: '४x = 16 => x = 4.',
      Hindi: '४x = 16 => x = 4।',
      Urdu: '4x = 9 + 7 = 16 => x = 4.',
      Gujarati: '४x = 16 => x = 4।',
      Telugu: '4x = 9 + 7 = 16 => x = 4.',
      Kannada: '4x = 9 + 7 = 16 => x = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q14',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹500 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹500 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹500 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹500 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹500 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹300', '₹200', '₹100', '₹250'],
      Marathi: ['₹300', '₹200', '₹100', '₹250'],
      Hindi: ['₹300', '₹200', '₹100', '₹250'],
      Urdu: ['₹300', '₹200', '₹100', '₹250'],
      Gujarati: ['₹300', '₹200', '₹100', '₹250'],
      Telugu: ['₹300', '₹200', '₹100', '₹250'],
      Kannada: ['₹300', '₹200', '₹100', '₹250']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 500 = ₹300.',
      Marathi: 'A चा वाटा = (३/५) × 500 = ₹300.',
      Hindi: 'A का हिस्सा = ₹300।',
      Urdu: 'A\\\'s share = (3/5) × 500 = ₹300.',
      Gujarati: 'A का हिस्सा = ₹300।',
      Telugu: 'A\\\'s share = (3/5) × 500 = ₹300.',
      Kannada: 'A\\\'s share = (3/5) × 500 = ₹300.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q15',
    testNumber: 1,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^1 × 2^3) ÷ 2^2:',
      Marathi: 'किंमत काढा: (२^1 × २^३) ÷ २^2:',
      Hindi: 'मान ज्ञात करें: (२^1 × २^३) ÷ २^2:',
      Urdu: 'Evaluate: (2^1 × 2^3) ÷ 2^2:',
      Gujarati: 'मान ज्ञात करें: (२^1 × २^३) ÷ २^2:',
      Telugu: 'Evaluate: (2^1 × 2^3) ÷ 2^2:',
      Kannada: 'Evaluate: (2^1 × 2^3) ÷ 2^2:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(1+3) ÷ 2^(1+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(1+३ - (1+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(1+3) ÷ 2^(1+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(1+3) ÷ 2^(1+1) = 2^2 = 4.',
      Kannada: '2^(1+3) ÷ 2^(1+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q6',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (2 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (2 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (2 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (2 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (2 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (2 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (2 × 6):'
    },
    options: {
      English: ['72', '62', '84', '52'],
      Marathi: ['72', '62', '84', '52'],
      Hindi: ['72', '62', '84', '52'],
      Urdu: ['72', '62', '84', '52'],
      Gujarati: ['72', '62', '84', '52'],
      Telugu: ['72', '62', '84', '52'],
      Kannada: ['72', '62', '84', '52']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 12 = 72.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 12 = 72.',
      Hindi: '६० + 12 = 72।',
      Urdu: '(-15) × (-4) = +60. 60 + 12 = 72.',
      Gujarati: '६० + 12 = 72।',
      Telugu: '(-15) × (-4) = +60. 60 + 12 = 72.',
      Kannada: '(-15) × (-4) = +60. 60 + 12 = 72.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q7',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 18:',
      Marathi: '१२ आणि 18 यांचा लसावि किती?',
      Hindi: '१२ और 18 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 18:',
      Gujarati: '१२ और 18 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 18:',
      Kannada: 'Find the LCM of 12 and 18:'
    },
    options: {
      English: ['24', '48', '12', '36'],
      Marathi: ['24', '48', '12', '36'],
      Hindi: ['24', '48', '12', '36'],
      Urdu: ['24', '48', '12', '36'],
      Gujarati: ['24', '48', '12', '36'],
      Telugu: ['24', '48', '12', '36'],
      Kannada: ['24', '48', '12', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q8',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹6000 at 7% per annum for 4 years:',
      Marathi: '₹6000 मुद्दलाचे द.सा.द.शे. 7 दराने 4 वर्षांचे सरळव्याज किती?',
      Hindi: '₹6000 के मूलधन पर 7% वार्षिक दर से 4 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹6000 at 7% per annum for 4 years:',
      Gujarati: '₹6000 के मूलधन पर 7% वार्षिक दर से 4 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹6000 at 7% per annum for 4 years:',
      Kannada: 'Find Simple Interest on ₹6000 at 7% per annum for 4 years:'
    },
    options: {
      English: ['₹1680', '₹1630', '₹1780', '₹1580'],
      Marathi: ['₹1680', '₹1630', '₹1780', '₹1580'],
      Hindi: ['₹1680', '₹1630', '₹1780', '₹1580'],
      Urdu: ['₹1680', '₹1630', '₹1780', '₹1580'],
      Gujarati: ['₹1680', '₹1630', '₹1780', '₹1580'],
      Telugu: ['₹1680', '₹1630', '₹1780', '₹1580'],
      Kannada: ['₹1680', '₹1630', '₹1780', '₹1580']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (6000 × 7 × 4)/100 = ₹1680.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (6000 × 7 × 4)/१०० = ₹1680.',
      Hindi: 'साधारण ब्याज = ₹1680।',
      Urdu: 'SI = (P × R × T)/100 = (6000 × 7 × 4)/100 = ₹1680.',
      Gujarati: 'साधारण ब्याज = ₹1680।',
      Telugu: 'SI = (P × R × T)/100 = (6000 × 7 × 4)/100 = ₹1680.',
      Kannada: 'SI = (P × R × T)/100 = (6000 × 7 × 4)/100 = ₹1680.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q9',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹800 and Selling Price is ₹960. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹800 व विक्री किंमत ₹960 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹800 और विक्रय मूल्य ₹960 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹800 and Selling Price is ₹960. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹800 और विक्रय मूल्य ₹960 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹800 and Selling Price is ₹960. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹800 and Selling Price is ₹960. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((160) / 800) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((160) / 800) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((160) / 800) × 100 = 20%.',
      Kannada: 'Profit % = ((160) / 800) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q10',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 10 सेमी व 12 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 10 सेमी और 12 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 10 सेमी और 12 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:'
    },
    options: {
      English: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Marathi: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Hindi: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Urdu: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Gujarati: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Telugu: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Kannada: ['15 cm', '17 cm', '13 cm', '22 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Marathi: 'कर्ण² = 10² + 12² = 15 सेमी.',
      Hindi: 'कर्ण = 15 सेमी।',
      Urdu: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Gujarati: 'कर्ण = 15 सेमी।',
      Telugu: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Kannada: 'Hypotenuse = √(10² + 12²) = 15 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q11',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 50°?',
      Marathi: '50° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '50° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 50°?',
      Gujarati: '50° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 50°?',
      Kannada: 'What is the supplementary angle of 50°?'
    },
    options: {
      English: ['130°', '120°', '150°', '90°'],
      Marathi: ['130°', '120°', '150°', '९०°'],
      Hindi: ['130°', '120°', '150°', '९०°'],
      Urdu: ['130°', '120°', '150°', '90°'],
      Gujarati: ['130°', '120°', '150°', '९०°'],
      Telugu: ['130°', '120°', '150°', '90°'],
      Kannada: ['130°', '120°', '150°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 50 = 130°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 50 = 130°.',
      Hindi: '१८० - 50 = 130°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 50 = 130°.',
      Gujarati: '१८० - 50 = 130°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 50 = 130°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 50 = 130°.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q12',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Marathi: 'त्रिज्या 7 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 7 cm (π = 22/7):'
    },
    options: {
      English: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Marathi: ['154 चौ.सेमी', '134 चौ.सेमी', '194 चौ.सेमी', '44 चौ.सेमी'],
      Hindi: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Urdu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Gujarati: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Telugu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Kannada: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 7² = 154 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Gujarati: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 7² = 154 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q13',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 13. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 13. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 13. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 13. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 13. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 13. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 13. Find x:'
    },
    options: {
      English: ['5', '7', '4', '10'],
      Marathi: ['5', '7', '4', '10'],
      Hindi: ['5', '7', '4', '10'],
      Urdu: ['5', '7', '4', '10'],
      Gujarati: ['5', '7', '4', '10'],
      Telugu: ['5', '7', '4', '10'],
      Kannada: ['5', '7', '4', '10']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 13 + 7 = 20 => x = 5.',
      Marathi: '४x = 20 => x = 5.',
      Hindi: '४x = 20 => x = 5।',
      Urdu: '4x = 13 + 7 = 20 => x = 5.',
      Gujarati: '४x = 20 => x = 5।',
      Telugu: '4x = 13 + 7 = 20 => x = 5.',
      Kannada: '4x = 13 + 7 = 20 => x = 5.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q14',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹1000 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹1000 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹1000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹1000 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹1000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹1000 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹1000 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹600', '₹400', '₹200', '₹500'],
      Marathi: ['₹600', '₹400', '₹200', '₹500'],
      Hindi: ['₹600', '₹400', '₹200', '₹500'],
      Urdu: ['₹600', '₹400', '₹200', '₹500'],
      Gujarati: ['₹600', '₹400', '₹200', '₹500'],
      Telugu: ['₹600', '₹400', '₹200', '₹500'],
      Kannada: ['₹600', '₹400', '₹200', '₹500']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 1000 = ₹600.',
      Marathi: 'A चा वाटा = (३/५) × 1000 = ₹600.',
      Hindi: 'A का हिस्सा = ₹600।',
      Urdu: 'A\\\'s share = (3/5) × 1000 = ₹600.',
      Gujarati: 'A का हिस्सा = ₹600।',
      Telugu: 'A\\\'s share = (3/5) × 1000 = ₹600.',
      Kannada: 'A\\\'s share = (3/5) × 1000 = ₹600.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q15',
    testNumber: 2,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^2 × 2^3) ÷ 2^3:',
      Marathi: 'किंमत काढा: (२^2 × २^३) ÷ २^3:',
      Hindi: 'मान ज्ञात करें: (२^2 × २^३) ÷ २^3:',
      Urdu: 'Evaluate: (2^2 × 2^3) ÷ 2^3:',
      Gujarati: 'मान ज्ञात करें: (२^2 × २^३) ÷ २^3:',
      Telugu: 'Evaluate: (2^2 × 2^3) ÷ 2^3:',
      Kannada: 'Evaluate: (2^2 × 2^3) ÷ 2^3:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(2+3) ÷ 2^(2+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(2+३ - (2+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(2+3) ÷ 2^(2+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(2+3) ÷ 2^(2+1) = 2^2 = 4.',
      Kannada: '2^(2+3) ÷ 2^(2+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q6',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (3 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (3 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (3 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (3 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (3 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (3 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (3 × 6):'
    },
    options: {
      English: ['78', '68', '90', '58'],
      Marathi: ['78', '68', '90', '58'],
      Hindi: ['78', '68', '90', '58'],
      Urdu: ['78', '68', '90', '58'],
      Gujarati: ['78', '68', '90', '58'],
      Telugu: ['78', '68', '90', '58'],
      Kannada: ['78', '68', '90', '58']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 18 = 78.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 18 = 78.',
      Hindi: '६० + 18 = 78।',
      Urdu: '(-15) × (-4) = +60. 60 + 18 = 78.',
      Gujarati: '६० + 18 = 78।',
      Telugu: '(-15) × (-4) = +60. 60 + 18 = 78.',
      Kannada: '(-15) × (-4) = +60. 60 + 18 = 78.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q7',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 24:',
      Marathi: '१२ आणि 24 यांचा लसावि किती?',
      Hindi: '१२ और 24 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 24:',
      Gujarati: '१२ और 24 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 24:',
      Kannada: 'Find the LCM of 12 and 24:'
    },
    options: {
      English: ['36', '72', '18', '48'],
      Marathi: ['36', '72', '18', '48'],
      Hindi: ['36', '72', '18', '48'],
      Urdu: ['36', '72', '18', '48'],
      Gujarati: ['36', '72', '18', '48'],
      Telugu: ['36', '72', '18', '48'],
      Kannada: ['36', '72', '18', '48']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q8',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹7000 at 8% per annum for 2 years:',
      Marathi: '₹7000 मुद्दलाचे द.सा.द.शे. 8 दराने 2 वर्षांचे सरळव्याज किती?',
      Hindi: '₹7000 के मूलधन पर 8% वार्षिक दर से 2 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹7000 at 8% per annum for 2 years:',
      Gujarati: '₹7000 के मूलधन पर 8% वार्षिक दर से 2 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹7000 at 8% per annum for 2 years:',
      Kannada: 'Find Simple Interest on ₹7000 at 8% per annum for 2 years:'
    },
    options: {
      English: ['₹1120', '₹1070', '₹1220', '₹1020'],
      Marathi: ['₹1120', '₹1070', '₹1220', '₹1020'],
      Hindi: ['₹1120', '₹1070', '₹1220', '₹1020'],
      Urdu: ['₹1120', '₹1070', '₹1220', '₹1020'],
      Gujarati: ['₹1120', '₹1070', '₹1220', '₹1020'],
      Telugu: ['₹1120', '₹1070', '₹1220', '₹1020'],
      Kannada: ['₹1120', '₹1070', '₹1220', '₹1020']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (7000 × 8 × 2)/100 = ₹1120.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (7000 × 8 × 2)/१०० = ₹1120.',
      Hindi: 'साधारण ब्याज = ₹1120।',
      Urdu: 'SI = (P × R × T)/100 = (7000 × 8 × 2)/100 = ₹1120.',
      Gujarati: 'साधारण ब्याज = ₹1120।',
      Telugu: 'SI = (P × R × T)/100 = (7000 × 8 × 2)/100 = ₹1120.',
      Kannada: 'SI = (P × R × T)/100 = (7000 × 8 × 2)/100 = ₹1120.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q9',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹1000 and Selling Price is ₹1200. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹1000 व विक्री किंमत ₹1200 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹1000 और विक्रय मूल्य ₹1200 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹1000 and Selling Price is ₹1200. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹1000 और विक्रय मूल्य ₹1200 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹1000 and Selling Price is ₹1200. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹1000 and Selling Price is ₹1200. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((200) / 1000) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((200) / 1000) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((200) / 1000) × 100 = 20%.',
      Kannada: 'Profit % = ((200) / 1000) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q10',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 12 सेमी व 14 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 12 सेमी और 14 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 12 सेमी और 14 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:'
    },
    options: {
      English: ['18 cm', '20 cm', '16 cm', '26 cm'],
      Marathi: ['18 सेमी', '20 सेमी', '16 सेमी', '26 सेमी'],
      Hindi: ['18 सेमी', '20 सेमी', '16 सेमी', '26 सेमी'],
      Urdu: ['18 cm', '20 cm', '16 cm', '26 cm'],
      Gujarati: ['18 सेमी', '20 सेमी', '16 सेमी', '26 सेमी'],
      Telugu: ['18 cm', '20 cm', '16 cm', '26 cm'],
      Kannada: ['18 cm', '20 cm', '16 cm', '26 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(12² + 14²) = 18 cm.',
      Marathi: 'कर्ण² = 12² + 14² = 18 सेमी.',
      Hindi: 'कर्ण = 18 सेमी।',
      Urdu: 'Hypotenuse = √(12² + 14²) = 18 cm.',
      Gujarati: 'कर्ण = 18 सेमी।',
      Telugu: 'Hypotenuse = √(12² + 14²) = 18 cm.',
      Kannada: 'Hypotenuse = √(12² + 14²) = 18 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q11',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 60°?',
      Marathi: '60° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '60° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 60°?',
      Gujarati: '60° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 60°?',
      Kannada: 'What is the supplementary angle of 60°?'
    },
    options: {
      English: ['120°', '110°', '140°', '90°'],
      Marathi: ['120°', '110°', '140°', '९०°'],
      Hindi: ['120°', '110°', '140°', '९०°'],
      Urdu: ['120°', '110°', '140°', '90°'],
      Gujarati: ['120°', '110°', '140°', '९०°'],
      Telugu: ['120°', '110°', '140°', '90°'],
      Kannada: ['120°', '110°', '140°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 60 = 120°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 60 = 120°.',
      Hindi: '१८० - 60 = 120°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 60 = 120°.',
      Gujarati: '१८० - 60 = 120°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 60 = 120°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 60 = 120°.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q12',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Marathi: 'त्रिज्या 7 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 7 cm (π = 22/7):'
    },
    options: {
      English: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Marathi: ['154 चौ.सेमी', '134 चौ.सेमी', '194 चौ.सेमी', '44 चौ.सेमी'],
      Hindi: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Urdu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Gujarati: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Telugu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Kannada: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 7² = 154 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Gujarati: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 7² = 154 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q13',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 17. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 17. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 17. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 17. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 17. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 17. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 17. Find x:'
    },
    options: {
      English: ['6', '8', '5', '12'],
      Marathi: ['6', '8', '5', '12'],
      Hindi: ['6', '8', '5', '12'],
      Urdu: ['6', '8', '5', '12'],
      Gujarati: ['6', '8', '5', '12'],
      Telugu: ['6', '8', '5', '12'],
      Kannada: ['6', '8', '5', '12']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 17 + 7 = 24 => x = 6.',
      Marathi: '४x = 24 => x = 6.',
      Hindi: '४x = 24 => x = 6।',
      Urdu: '4x = 17 + 7 = 24 => x = 6.',
      Gujarati: '४x = 24 => x = 6।',
      Telugu: '4x = 17 + 7 = 24 => x = 6.',
      Kannada: '4x = 17 + 7 = 24 => x = 6.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q14',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹1500 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹1500 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹1500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹1500 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹1500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹1500 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹1500 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹900', '₹600', '₹300', '₹750'],
      Marathi: ['₹900', '₹600', '₹300', '₹750'],
      Hindi: ['₹900', '₹600', '₹300', '₹750'],
      Urdu: ['₹900', '₹600', '₹300', '₹750'],
      Gujarati: ['₹900', '₹600', '₹300', '₹750'],
      Telugu: ['₹900', '₹600', '₹300', '₹750'],
      Kannada: ['₹900', '₹600', '₹300', '₹750']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 1500 = ₹900.',
      Marathi: 'A चा वाटा = (३/५) × 1500 = ₹900.',
      Hindi: 'A का हिस्सा = ₹900।',
      Urdu: 'A\\\'s share = (3/5) × 1500 = ₹900.',
      Gujarati: 'A का हिस्सा = ₹900।',
      Telugu: 'A\\\'s share = (3/5) × 1500 = ₹900.',
      Kannada: 'A\\\'s share = (3/5) × 1500 = ₹900.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q15',
    testNumber: 3,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^3 × 2^3) ÷ 2^4:',
      Marathi: 'किंमत काढा: (२^3 × २^३) ÷ २^4:',
      Hindi: 'मान ज्ञात करें: (२^3 × २^३) ÷ २^4:',
      Urdu: 'Evaluate: (2^3 × 2^3) ÷ 2^4:',
      Gujarati: 'मान ज्ञात करें: (२^3 × २^३) ÷ २^4:',
      Telugu: 'Evaluate: (2^3 × 2^3) ÷ 2^4:',
      Kannada: 'Evaluate: (2^3 × 2^3) ÷ 2^4:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(3+3) ÷ 2^(3+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(3+३ - (3+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(3+3) ÷ 2^(3+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(3+3) ÷ 2^(3+1) = 2^2 = 4.',
      Kannada: '2^(3+3) ÷ 2^(3+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q6',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (4 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (4 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (4 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (4 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (4 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (4 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (4 × 6):'
    },
    options: {
      English: ['84', '74', '96', '64'],
      Marathi: ['84', '74', '96', '64'],
      Hindi: ['84', '74', '96', '64'],
      Urdu: ['84', '74', '96', '64'],
      Gujarati: ['84', '74', '96', '64'],
      Telugu: ['84', '74', '96', '64'],
      Kannada: ['84', '74', '96', '64']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 24 = 84.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 24 = 84.',
      Hindi: '६० + 24 = 84।',
      Urdu: '(-15) × (-4) = +60. 60 + 24 = 84.',
      Gujarati: '६० + 24 = 84।',
      Telugu: '(-15) × (-4) = +60. 60 + 24 = 84.',
      Kannada: '(-15) × (-4) = +60. 60 + 24 = 84.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q7',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 30:',
      Marathi: '१२ आणि 30 यांचा लसावि किती?',
      Hindi: '१२ और 30 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 30:',
      Gujarati: '१२ और 30 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 30:',
      Kannada: 'Find the LCM of 12 and 30:'
    },
    options: {
      English: ['48', '96', '24', '60'],
      Marathi: ['48', '96', '24', '60'],
      Hindi: ['48', '96', '24', '60'],
      Urdu: ['48', '96', '24', '60'],
      Gujarati: ['48', '96', '24', '60'],
      Telugu: ['48', '96', '24', '60'],
      Kannada: ['48', '96', '24', '60']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q8',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹8000 at 9% per annum for 3 years:',
      Marathi: '₹8000 मुद्दलाचे द.सा.द.शे. 9 दराने 3 वर्षांचे सरळव्याज किती?',
      Hindi: '₹8000 के मूलधन पर 9% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹8000 at 9% per annum for 3 years:',
      Gujarati: '₹8000 के मूलधन पर 9% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹8000 at 9% per annum for 3 years:',
      Kannada: 'Find Simple Interest on ₹8000 at 9% per annum for 3 years:'
    },
    options: {
      English: ['₹2160', '₹2110', '₹2260', '₹2060'],
      Marathi: ['₹2160', '₹2110', '₹2260', '₹2060'],
      Hindi: ['₹2160', '₹2110', '₹2260', '₹2060'],
      Urdu: ['₹2160', '₹2110', '₹2260', '₹2060'],
      Gujarati: ['₹2160', '₹2110', '₹2260', '₹2060'],
      Telugu: ['₹2160', '₹2110', '₹2260', '₹2060'],
      Kannada: ['₹2160', '₹2110', '₹2260', '₹2060']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (8000 × 9 × 3)/100 = ₹2160.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (8000 × 9 × 3)/१०० = ₹2160.',
      Hindi: 'साधारण ब्याज = ₹2160।',
      Urdu: 'SI = (P × R × T)/100 = (8000 × 9 × 3)/100 = ₹2160.',
      Gujarati: 'साधारण ब्याज = ₹2160।',
      Telugu: 'SI = (P × R × T)/100 = (8000 × 9 × 3)/100 = ₹2160.',
      Kannada: 'SI = (P × R × T)/100 = (8000 × 9 × 3)/100 = ₹2160.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q9',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹1200 and Selling Price is ₹1440. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹1200 व विक्री किंमत ₹1440 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹1200 और विक्रय मूल्य ₹1440 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹1200 and Selling Price is ₹1440. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹1200 और विक्रय मूल्य ₹1440 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹1200 and Selling Price is ₹1440. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹1200 and Selling Price is ₹1440. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((240) / 1200) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((240) / 1200) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((240) / 1200) × 100 = 20%.',
      Kannada: 'Profit % = ((240) / 1200) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q10',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 6 सेमी व 8 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 6 सेमी और 8 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 6 सेमी और 8 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:'
    },
    options: {
      English: ['10 cm', '12 cm', '8 cm', '14 cm'],
      Marathi: ['10 सेमी', '12 सेमी', '8 सेमी', '14 सेमी'],
      Hindi: ['10 सेमी', '12 सेमी', '8 सेमी', '14 सेमी'],
      Urdu: ['10 cm', '12 cm', '8 cm', '14 cm'],
      Gujarati: ['10 सेमी', '12 सेमी', '8 सेमी', '14 सेमी'],
      Telugu: ['10 cm', '12 cm', '8 cm', '14 cm'],
      Kannada: ['10 cm', '12 cm', '8 cm', '14 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(6² + 8²) = 10 cm.',
      Marathi: 'कर्ण² = 6² + 8² = 10 सेमी.',
      Hindi: 'कर्ण = 10 सेमी।',
      Urdu: 'Hypotenuse = √(6² + 8²) = 10 cm.',
      Gujarati: 'कर्ण = 10 सेमी।',
      Telugu: 'Hypotenuse = √(6² + 8²) = 10 cm.',
      Kannada: 'Hypotenuse = √(6² + 8²) = 10 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q11',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 70°?',
      Marathi: '70° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '70° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 70°?',
      Gujarati: '70° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 70°?',
      Kannada: 'What is the supplementary angle of 70°?'
    },
    options: {
      English: ['110°', '100°', '130°', '90°'],
      Marathi: ['110°', '100°', '130°', '९०°'],
      Hindi: ['110°', '100°', '130°', '९०°'],
      Urdu: ['110°', '100°', '130°', '90°'],
      Gujarati: ['110°', '100°', '130°', '९०°'],
      Telugu: ['110°', '100°', '130°', '90°'],
      Kannada: ['110°', '100°', '130°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 70 = 110°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 70 = 110°.',
      Hindi: '१८० - 70 = 110°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 70 = 110°.',
      Gujarati: '१८० - 70 = 110°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 70 = 110°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 70 = 110°.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q12',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Marathi: 'त्रिज्या 7 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 7 cm (π = 22/7):'
    },
    options: {
      English: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Marathi: ['154 चौ.सेमी', '134 चौ.सेमी', '194 चौ.सेमी', '44 चौ.सेमी'],
      Hindi: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Urdu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Gujarati: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Telugu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Kannada: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 7² = 154 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Gujarati: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 7² = 154 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q13',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 21. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 21. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 21. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 21. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 21. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 21. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 21. Find x:'
    },
    options: {
      English: ['7', '9', '6', '14'],
      Marathi: ['7', '9', '6', '14'],
      Hindi: ['7', '9', '6', '14'],
      Urdu: ['7', '9', '6', '14'],
      Gujarati: ['7', '9', '6', '14'],
      Telugu: ['7', '9', '6', '14'],
      Kannada: ['7', '9', '6', '14']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 21 + 7 = 28 => x = 7.',
      Marathi: '४x = 28 => x = 7.',
      Hindi: '४x = 28 => x = 7।',
      Urdu: '4x = 21 + 7 = 28 => x = 7.',
      Gujarati: '४x = 28 => x = 7।',
      Telugu: '4x = 21 + 7 = 28 => x = 7.',
      Kannada: '4x = 21 + 7 = 28 => x = 7.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q14',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹2000 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹2000 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹2000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹2000 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹2000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹2000 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹2000 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹1200', '₹800', '₹400', '₹1000'],
      Marathi: ['₹1200', '₹800', '₹400', '₹1000'],
      Hindi: ['₹1200', '₹800', '₹400', '₹1000'],
      Urdu: ['₹1200', '₹800', '₹400', '₹1000'],
      Gujarati: ['₹1200', '₹800', '₹400', '₹1000'],
      Telugu: ['₹1200', '₹800', '₹400', '₹1000'],
      Kannada: ['₹1200', '₹800', '₹400', '₹1000']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 2000 = ₹1200.',
      Marathi: 'A चा वाटा = (३/५) × 2000 = ₹1200.',
      Hindi: 'A का हिस्सा = ₹1200।',
      Urdu: 'A\\\'s share = (3/5) × 2000 = ₹1200.',
      Gujarati: 'A का हिस्सा = ₹1200।',
      Telugu: 'A\\\'s share = (3/5) × 2000 = ₹1200.',
      Kannada: 'A\\\'s share = (3/5) × 2000 = ₹1200.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q15',
    testNumber: 4,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^4 × 2^3) ÷ 2^5:',
      Marathi: 'किंमत काढा: (२^4 × २^३) ÷ २^5:',
      Hindi: 'मान ज्ञात करें: (२^4 × २^३) ÷ २^5:',
      Urdu: 'Evaluate: (2^4 × 2^3) ÷ 2^5:',
      Gujarati: 'मान ज्ञात करें: (२^4 × २^३) ÷ २^5:',
      Telugu: 'Evaluate: (2^4 × 2^3) ÷ 2^5:',
      Kannada: 'Evaluate: (2^4 × 2^3) ÷ 2^5:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(4+3) ÷ 2^(4+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(4+३ - (4+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(4+3) ÷ 2^(4+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(4+3) ÷ 2^(4+1) = 2^2 = 4.',
      Kannada: '2^(4+3) ÷ 2^(4+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q6',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (5 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (5 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (5 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (5 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (5 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (5 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (5 × 6):'
    },
    options: {
      English: ['90', '80', '102', '70'],
      Marathi: ['90', '80', '102', '70'],
      Hindi: ['90', '80', '102', '70'],
      Urdu: ['90', '80', '102', '70'],
      Gujarati: ['90', '80', '102', '70'],
      Telugu: ['90', '80', '102', '70'],
      Kannada: ['90', '80', '102', '70']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 30 = 90.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 30 = 90.',
      Hindi: '६० + 30 = 90।',
      Urdu: '(-15) × (-4) = +60. 60 + 30 = 90.',
      Gujarati: '६० + 30 = 90।',
      Telugu: '(-15) × (-4) = +60. 60 + 30 = 90.',
      Kannada: '(-15) × (-4) = +60. 60 + 30 = 90.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q7',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 36:',
      Marathi: '१२ आणि 36 यांचा लसावि किती?',
      Hindi: '१२ और 36 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 36:',
      Gujarati: '१२ और 36 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 36:',
      Kannada: 'Find the LCM of 12 and 36:'
    },
    options: {
      English: ['60', '120', '30', '72'],
      Marathi: ['60', '120', '30', '72'],
      Hindi: ['60', '120', '30', '72'],
      Urdu: ['60', '120', '30', '72'],
      Gujarati: ['60', '120', '30', '72'],
      Telugu: ['60', '120', '30', '72'],
      Kannada: ['60', '120', '30', '72']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q8',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹9000 at 5% per annum for 4 years:',
      Marathi: '₹9000 मुद्दलाचे द.सा.द.शे. 5 दराने 4 वर्षांचे सरळव्याज किती?',
      Hindi: '₹9000 के मूलधन पर 5% वार्षिक दर से 4 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹9000 at 5% per annum for 4 years:',
      Gujarati: '₹9000 के मूलधन पर 5% वार्षिक दर से 4 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹9000 at 5% per annum for 4 years:',
      Kannada: 'Find Simple Interest on ₹9000 at 5% per annum for 4 years:'
    },
    options: {
      English: ['₹1800', '₹1750', '₹1900', '₹1700'],
      Marathi: ['₹1800', '₹1750', '₹1900', '₹1700'],
      Hindi: ['₹1800', '₹1750', '₹1900', '₹1700'],
      Urdu: ['₹1800', '₹1750', '₹1900', '₹1700'],
      Gujarati: ['₹1800', '₹1750', '₹1900', '₹1700'],
      Telugu: ['₹1800', '₹1750', '₹1900', '₹1700'],
      Kannada: ['₹1800', '₹1750', '₹1900', '₹1700']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (9000 × 5 × 4)/100 = ₹1800.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (9000 × 5 × 4)/१०० = ₹1800.',
      Hindi: 'साधारण ब्याज = ₹1800।',
      Urdu: 'SI = (P × R × T)/100 = (9000 × 5 × 4)/100 = ₹1800.',
      Gujarati: 'साधारण ब्याज = ₹1800।',
      Telugu: 'SI = (P × R × T)/100 = (9000 × 5 × 4)/100 = ₹1800.',
      Kannada: 'SI = (P × R × T)/100 = (9000 × 5 × 4)/100 = ₹1800.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q9',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹1400 and Selling Price is ₹1680. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹1400 व विक्री किंमत ₹1680 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹1400 और विक्रय मूल्य ₹1680 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹1400 and Selling Price is ₹1680. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹1400 और विक्रय मूल्य ₹1680 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹1400 and Selling Price is ₹1680. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹1400 and Selling Price is ₹1680. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((280) / 1400) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((280) / 1400) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((280) / 1400) × 100 = 20%.',
      Kannada: 'Profit % = ((280) / 1400) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q10',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 8 सेमी व 10 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 8 सेमी और 10 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 8 सेमी और 10 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:'
    },
    options: {
      English: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Marathi: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Hindi: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Urdu: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Gujarati: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Telugu: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Kannada: ['12 cm', '14 cm', '10 cm', '18 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Marathi: 'कर्ण² = 8² + 10² = 12 सेमी.',
      Hindi: 'कर्ण = 12 सेमी।',
      Urdu: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Gujarati: 'कर्ण = 12 सेमी।',
      Telugu: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Kannada: 'Hypotenuse = √(8² + 10²) = 12 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q11',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 80°?',
      Marathi: '80° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '80° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 80°?',
      Gujarati: '80° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 80°?',
      Kannada: 'What is the supplementary angle of 80°?'
    },
    options: {
      English: ['100°', '90°', '120°', '90°'],
      Marathi: ['100°', '90°', '120°', '९०°'],
      Hindi: ['100°', '90°', '120°', '९०°'],
      Urdu: ['100°', '90°', '120°', '90°'],
      Gujarati: ['100°', '90°', '120°', '९०°'],
      Telugu: ['100°', '90°', '120°', '90°'],
      Kannada: ['100°', '90°', '120°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 80 = 100°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 80 = 100°.',
      Hindi: '१८० - 80 = 100°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 80 = 100°.',
      Gujarati: '१८० - 80 = 100°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 80 = 100°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 80 = 100°.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q12',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Marathi: 'त्रिज्या 7 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 7 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 7 cm (π = 22/7):'
    },
    options: {
      English: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Marathi: ['154 चौ.सेमी', '134 चौ.सेमी', '194 चौ.सेमी', '44 चौ.सेमी'],
      Hindi: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Urdu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Gujarati: ['154 वर्ग सेमी', '134 वर्ग सेमी', '194 वर्ग सेमी', '44 वर्ग सेमी'],
      Telugu: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm'],
      Kannada: ['154 sq.cm', '134 sq.cm', '194 sq.cm', '44 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 7² = 154 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Gujarati: 'क्षेत्रफल = 154 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 7² = 154 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 7² = 154 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q13',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 25. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 25. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 25. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 25. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 25. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 25. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 25. Find x:'
    },
    options: {
      English: ['8', '10', '7', '16'],
      Marathi: ['8', '10', '7', '16'],
      Hindi: ['8', '10', '7', '16'],
      Urdu: ['8', '10', '7', '16'],
      Gujarati: ['8', '10', '7', '16'],
      Telugu: ['8', '10', '7', '16'],
      Kannada: ['8', '10', '7', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 25 + 7 = 32 => x = 8.',
      Marathi: '४x = 32 => x = 8.',
      Hindi: '४x = 32 => x = 8।',
      Urdu: '4x = 25 + 7 = 32 => x = 8.',
      Gujarati: '४x = 32 => x = 8।',
      Telugu: '4x = 25 + 7 = 32 => x = 8.',
      Kannada: '4x = 25 + 7 = 32 => x = 8.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q14',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹2500 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹2500 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹2500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹2500 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹2500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹2500 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹2500 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹1500', '₹1000', '₹500', '₹1250'],
      Marathi: ['₹1500', '₹1000', '₹500', '₹1250'],
      Hindi: ['₹1500', '₹1000', '₹500', '₹1250'],
      Urdu: ['₹1500', '₹1000', '₹500', '₹1250'],
      Gujarati: ['₹1500', '₹1000', '₹500', '₹1250'],
      Telugu: ['₹1500', '₹1000', '₹500', '₹1250'],
      Kannada: ['₹1500', '₹1000', '₹500', '₹1250']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 2500 = ₹1500.',
      Marathi: 'A चा वाटा = (३/५) × 2500 = ₹1500.',
      Hindi: 'A का हिस्सा = ₹1500।',
      Urdu: 'A\\\'s share = (3/5) × 2500 = ₹1500.',
      Gujarati: 'A का हिस्सा = ₹1500।',
      Telugu: 'A\\\'s share = (3/5) × 2500 = ₹1500.',
      Kannada: 'A\\\'s share = (3/5) × 2500 = ₹1500.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q15',
    testNumber: 5,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^5 × 2^3) ÷ 2^6:',
      Marathi: 'किंमत काढा: (२^5 × २^३) ÷ २^6:',
      Hindi: 'मान ज्ञात करें: (२^5 × २^३) ÷ २^6:',
      Urdu: 'Evaluate: (2^5 × 2^3) ÷ 2^6:',
      Gujarati: 'मान ज्ञात करें: (२^5 × २^३) ÷ २^6:',
      Telugu: 'Evaluate: (2^5 × 2^3) ÷ 2^6:',
      Kannada: 'Evaluate: (2^5 × 2^3) ÷ 2^6:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(5+3) ÷ 2^(5+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(5+३ - (5+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(5+3) ÷ 2^(5+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(5+3) ÷ 2^(5+1) = 2^2 = 4.',
      Kannada: '2^(5+3) ÷ 2^(5+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q6',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (6 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (6 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (6 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (6 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (6 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (6 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (6 × 6):'
    },
    options: {
      English: ['96', '86', '108', '76'],
      Marathi: ['96', '86', '108', '76'],
      Hindi: ['96', '86', '108', '76'],
      Urdu: ['96', '86', '108', '76'],
      Gujarati: ['96', '86', '108', '76'],
      Telugu: ['96', '86', '108', '76'],
      Kannada: ['96', '86', '108', '76']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 36 = 96.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 36 = 96.',
      Hindi: '६० + 36 = 96।',
      Urdu: '(-15) × (-4) = +60. 60 + 36 = 96.',
      Gujarati: '६० + 36 = 96।',
      Telugu: '(-15) × (-4) = +60. 60 + 36 = 96.',
      Kannada: '(-15) × (-4) = +60. 60 + 36 = 96.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q7',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 42:',
      Marathi: '१२ आणि 42 यांचा लसावि किती?',
      Hindi: '१२ और 42 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 42:',
      Gujarati: '१२ और 42 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 42:',
      Kannada: 'Find the LCM of 12 and 42:'
    },
    options: {
      English: ['72', '144', '36', '84'],
      Marathi: ['72', '144', '36', '84'],
      Hindi: ['72', '144', '36', '84'],
      Urdu: ['72', '144', '36', '84'],
      Gujarati: ['72', '144', '36', '84'],
      Telugu: ['72', '144', '36', '84'],
      Kannada: ['72', '144', '36', '84']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q8',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹10000 at 6% per annum for 2 years:',
      Marathi: '₹10000 मुद्दलाचे द.सा.द.शे. 6 दराने 2 वर्षांचे सरळव्याज किती?',
      Hindi: '₹10000 के मूलधन पर 6% वार्षिक दर से 2 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹10000 at 6% per annum for 2 years:',
      Gujarati: '₹10000 के मूलधन पर 6% वार्षिक दर से 2 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹10000 at 6% per annum for 2 years:',
      Kannada: 'Find Simple Interest on ₹10000 at 6% per annum for 2 years:'
    },
    options: {
      English: ['₹1200', '₹1150', '₹1300', '₹1100'],
      Marathi: ['₹1200', '₹1150', '₹1300', '₹1100'],
      Hindi: ['₹1200', '₹1150', '₹1300', '₹1100'],
      Urdu: ['₹1200', '₹1150', '₹1300', '₹1100'],
      Gujarati: ['₹1200', '₹1150', '₹1300', '₹1100'],
      Telugu: ['₹1200', '₹1150', '₹1300', '₹1100'],
      Kannada: ['₹1200', '₹1150', '₹1300', '₹1100']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (10000 × 6 × 2)/100 = ₹1200.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (10000 × 6 × 2)/१०० = ₹1200.',
      Hindi: 'साधारण ब्याज = ₹1200।',
      Urdu: 'SI = (P × R × T)/100 = (10000 × 6 × 2)/100 = ₹1200.',
      Gujarati: 'साधारण ब्याज = ₹1200।',
      Telugu: 'SI = (P × R × T)/100 = (10000 × 6 × 2)/100 = ₹1200.',
      Kannada: 'SI = (P × R × T)/100 = (10000 × 6 × 2)/100 = ₹1200.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q9',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹1600 and Selling Price is ₹1920. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹1600 व विक्री किंमत ₹1920 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹1600 और विक्रय मूल्य ₹1920 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹1600 and Selling Price is ₹1920. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹1600 और विक्रय मूल्य ₹1920 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹1600 and Selling Price is ₹1920. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹1600 and Selling Price is ₹1920. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((320) / 1600) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((320) / 1600) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((320) / 1600) × 100 = 20%.',
      Kannada: 'Profit % = ((320) / 1600) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q10',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 10 सेमी व 12 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 10 सेमी और 12 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 10 सेमी और 12 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:'
    },
    options: {
      English: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Marathi: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Hindi: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Urdu: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Gujarati: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Telugu: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Kannada: ['15 cm', '17 cm', '13 cm', '22 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Marathi: 'कर्ण² = 10² + 12² = 15 सेमी.',
      Hindi: 'कर्ण = 15 सेमी।',
      Urdu: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Gujarati: 'कर्ण = 15 सेमी।',
      Telugu: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Kannada: 'Hypotenuse = √(10² + 12²) = 15 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q11',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 90°?',
      Marathi: '90° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '90° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 90°?',
      Gujarati: '90° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 90°?',
      Kannada: 'What is the supplementary angle of 90°?'
    },
    options: {
      English: ['90°', '80°', '110°', '90°'],
      Marathi: ['90°', '80°', '110°', '९०°'],
      Hindi: ['90°', '80°', '110°', '९०°'],
      Urdu: ['90°', '80°', '110°', '90°'],
      Gujarati: ['90°', '80°', '110°', '९०°'],
      Telugu: ['90°', '80°', '110°', '90°'],
      Kannada: ['90°', '80°', '110°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 90 = 90°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 90 = 90°.',
      Hindi: '१८० - 90 = 90°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 90 = 90°.',
      Gujarati: '१८० - 90 = 90°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 90 = 90°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 90 = 90°.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q12',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Marathi: 'त्रिज्या 14 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 14 cm (π = 22/7):'
    },
    options: {
      English: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Marathi: ['616 चौ.सेमी', '596 चौ.सेमी', '656 चौ.सेमी', '88 चौ.सेमी'],
      Hindi: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Urdu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Gujarati: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Telugu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Kannada: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 14² = 616 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Gujarati: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 14² = 616 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q13',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 29. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 29. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 29. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 29. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 29. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 29. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 29. Find x:'
    },
    options: {
      English: ['9', '11', '8', '18'],
      Marathi: ['9', '11', '8', '18'],
      Hindi: ['9', '11', '8', '18'],
      Urdu: ['9', '11', '8', '18'],
      Gujarati: ['9', '11', '8', '18'],
      Telugu: ['9', '11', '8', '18'],
      Kannada: ['9', '11', '8', '18']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 29 + 7 = 36 => x = 9.',
      Marathi: '४x = 36 => x = 9.',
      Hindi: '४x = 36 => x = 9।',
      Urdu: '4x = 29 + 7 = 36 => x = 9.',
      Gujarati: '४x = 36 => x = 9।',
      Telugu: '4x = 29 + 7 = 36 => x = 9.',
      Kannada: '4x = 29 + 7 = 36 => x = 9.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q14',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹3000 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹3000 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹3000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹3000 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹3000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹3000 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹3000 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹1800', '₹1200', '₹600', '₹1500'],
      Marathi: ['₹1800', '₹1200', '₹600', '₹1500'],
      Hindi: ['₹1800', '₹1200', '₹600', '₹1500'],
      Urdu: ['₹1800', '₹1200', '₹600', '₹1500'],
      Gujarati: ['₹1800', '₹1200', '₹600', '₹1500'],
      Telugu: ['₹1800', '₹1200', '₹600', '₹1500'],
      Kannada: ['₹1800', '₹1200', '₹600', '₹1500']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 3000 = ₹1800.',
      Marathi: 'A चा वाटा = (३/५) × 3000 = ₹1800.',
      Hindi: 'A का हिस्सा = ₹1800।',
      Urdu: 'A\\\'s share = (3/5) × 3000 = ₹1800.',
      Gujarati: 'A का हिस्सा = ₹1800।',
      Telugu: 'A\\\'s share = (3/5) × 3000 = ₹1800.',
      Kannada: 'A\\\'s share = (3/5) × 3000 = ₹1800.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q15',
    testNumber: 6,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^6 × 2^3) ÷ 2^7:',
      Marathi: 'किंमत काढा: (२^6 × २^३) ÷ २^7:',
      Hindi: 'मान ज्ञात करें: (२^6 × २^३) ÷ २^7:',
      Urdu: 'Evaluate: (2^6 × 2^3) ÷ 2^7:',
      Gujarati: 'मान ज्ञात करें: (२^6 × २^३) ÷ २^7:',
      Telugu: 'Evaluate: (2^6 × 2^3) ÷ 2^7:',
      Kannada: 'Evaluate: (2^6 × 2^3) ÷ 2^7:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(6+3) ÷ 2^(6+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(6+३ - (6+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(6+3) ÷ 2^(6+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(6+3) ÷ 2^(6+1) = 2^2 = 4.',
      Kannada: '2^(6+3) ÷ 2^(6+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q6',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (7 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (7 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (7 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (7 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (7 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (7 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (7 × 6):'
    },
    options: {
      English: ['102', '92', '114', '82'],
      Marathi: ['102', '92', '114', '82'],
      Hindi: ['102', '92', '114', '82'],
      Urdu: ['102', '92', '114', '82'],
      Gujarati: ['102', '92', '114', '82'],
      Telugu: ['102', '92', '114', '82'],
      Kannada: ['102', '92', '114', '82']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 42 = 102.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 42 = 102.',
      Hindi: '६० + 42 = 102।',
      Urdu: '(-15) × (-4) = +60. 60 + 42 = 102.',
      Gujarati: '६० + 42 = 102।',
      Telugu: '(-15) × (-4) = +60. 60 + 42 = 102.',
      Kannada: '(-15) × (-4) = +60. 60 + 42 = 102.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q7',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 48:',
      Marathi: '१२ आणि 48 यांचा लसावि किती?',
      Hindi: '१२ और 48 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 48:',
      Gujarati: '१२ और 48 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 48:',
      Kannada: 'Find the LCM of 12 and 48:'
    },
    options: {
      English: ['84', '168', '42', '96'],
      Marathi: ['84', '168', '42', '96'],
      Hindi: ['84', '168', '42', '96'],
      Urdu: ['84', '168', '42', '96'],
      Gujarati: ['84', '168', '42', '96'],
      Telugu: ['84', '168', '42', '96'],
      Kannada: ['84', '168', '42', '96']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q8',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹11000 at 7% per annum for 3 years:',
      Marathi: '₹11000 मुद्दलाचे द.सा.द.शे. 7 दराने 3 वर्षांचे सरळव्याज किती?',
      Hindi: '₹11000 के मूलधन पर 7% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹11000 at 7% per annum for 3 years:',
      Gujarati: '₹11000 के मूलधन पर 7% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹11000 at 7% per annum for 3 years:',
      Kannada: 'Find Simple Interest on ₹11000 at 7% per annum for 3 years:'
    },
    options: {
      English: ['₹2310', '₹2260', '₹2410', '₹2210'],
      Marathi: ['₹2310', '₹2260', '₹2410', '₹2210'],
      Hindi: ['₹2310', '₹2260', '₹2410', '₹2210'],
      Urdu: ['₹2310', '₹2260', '₹2410', '₹2210'],
      Gujarati: ['₹2310', '₹2260', '₹2410', '₹2210'],
      Telugu: ['₹2310', '₹2260', '₹2410', '₹2210'],
      Kannada: ['₹2310', '₹2260', '₹2410', '₹2210']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (11000 × 7 × 3)/100 = ₹2310.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (11000 × 7 × 3)/१०० = ₹2310.',
      Hindi: 'साधारण ब्याज = ₹2310।',
      Urdu: 'SI = (P × R × T)/100 = (11000 × 7 × 3)/100 = ₹2310.',
      Gujarati: 'साधारण ब्याज = ₹2310।',
      Telugu: 'SI = (P × R × T)/100 = (11000 × 7 × 3)/100 = ₹2310.',
      Kannada: 'SI = (P × R × T)/100 = (11000 × 7 × 3)/100 = ₹2310.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q9',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹1800 and Selling Price is ₹2160. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹1800 व विक्री किंमत ₹2160 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹1800 और विक्रय मूल्य ₹2160 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹1800 and Selling Price is ₹2160. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹1800 और विक्रय मूल्य ₹2160 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹1800 and Selling Price is ₹2160. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹1800 and Selling Price is ₹2160. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((360) / 1800) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((360) / 1800) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((360) / 1800) × 100 = 20%.',
      Kannada: 'Profit % = ((360) / 1800) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q10',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 12 सेमी व 14 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 12 सेमी और 14 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 12 सेमी और 14 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 12 cm and 14 cm. Find hypotenuse:'
    },
    options: {
      English: ['18 cm', '20 cm', '16 cm', '26 cm'],
      Marathi: ['18 सेमी', '20 सेमी', '16 सेमी', '26 सेमी'],
      Hindi: ['18 सेमी', '20 सेमी', '16 सेमी', '26 सेमी'],
      Urdu: ['18 cm', '20 cm', '16 cm', '26 cm'],
      Gujarati: ['18 सेमी', '20 सेमी', '16 सेमी', '26 सेमी'],
      Telugu: ['18 cm', '20 cm', '16 cm', '26 cm'],
      Kannada: ['18 cm', '20 cm', '16 cm', '26 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(12² + 14²) = 18 cm.',
      Marathi: 'कर्ण² = 12² + 14² = 18 सेमी.',
      Hindi: 'कर्ण = 18 सेमी।',
      Urdu: 'Hypotenuse = √(12² + 14²) = 18 cm.',
      Gujarati: 'कर्ण = 18 सेमी।',
      Telugu: 'Hypotenuse = √(12² + 14²) = 18 cm.',
      Kannada: 'Hypotenuse = √(12² + 14²) = 18 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q11',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 100°?',
      Marathi: '100° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '100° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 100°?',
      Gujarati: '100° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 100°?',
      Kannada: 'What is the supplementary angle of 100°?'
    },
    options: {
      English: ['80°', '70°', '100°', '90°'],
      Marathi: ['80°', '70°', '100°', '९०°'],
      Hindi: ['80°', '70°', '100°', '९०°'],
      Urdu: ['80°', '70°', '100°', '90°'],
      Gujarati: ['80°', '70°', '100°', '९०°'],
      Telugu: ['80°', '70°', '100°', '90°'],
      Kannada: ['80°', '70°', '100°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 100 = 80°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 100 = 80°.',
      Hindi: '१८० - 100 = 80°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 100 = 80°.',
      Gujarati: '१८० - 100 = 80°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 100 = 80°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 100 = 80°.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q12',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Marathi: 'त्रिज्या 14 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 14 cm (π = 22/7):'
    },
    options: {
      English: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Marathi: ['616 चौ.सेमी', '596 चौ.सेमी', '656 चौ.सेमी', '88 चौ.सेमी'],
      Hindi: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Urdu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Gujarati: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Telugu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Kannada: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 14² = 616 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Gujarati: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 14² = 616 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q13',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 33. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 33. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 33. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 33. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 33. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 33. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 33. Find x:'
    },
    options: {
      English: ['10', '12', '9', '20'],
      Marathi: ['10', '12', '9', '20'],
      Hindi: ['10', '12', '9', '20'],
      Urdu: ['10', '12', '9', '20'],
      Gujarati: ['10', '12', '9', '20'],
      Telugu: ['10', '12', '9', '20'],
      Kannada: ['10', '12', '9', '20']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 33 + 7 = 40 => x = 10.',
      Marathi: '४x = 40 => x = 10.',
      Hindi: '४x = 40 => x = 10।',
      Urdu: '4x = 33 + 7 = 40 => x = 10.',
      Gujarati: '४x = 40 => x = 10।',
      Telugu: '4x = 33 + 7 = 40 => x = 10.',
      Kannada: '4x = 33 + 7 = 40 => x = 10.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q14',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹3500 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹3500 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹3500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹3500 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹3500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹3500 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹3500 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹2100', '₹1400', '₹700', '₹1750'],
      Marathi: ['₹2100', '₹1400', '₹700', '₹1750'],
      Hindi: ['₹2100', '₹1400', '₹700', '₹1750'],
      Urdu: ['₹2100', '₹1400', '₹700', '₹1750'],
      Gujarati: ['₹2100', '₹1400', '₹700', '₹1750'],
      Telugu: ['₹2100', '₹1400', '₹700', '₹1750'],
      Kannada: ['₹2100', '₹1400', '₹700', '₹1750']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 3500 = ₹2100.',
      Marathi: 'A चा वाटा = (३/५) × 3500 = ₹2100.',
      Hindi: 'A का हिस्सा = ₹2100।',
      Urdu: 'A\\\'s share = (3/5) × 3500 = ₹2100.',
      Gujarati: 'A का हिस्सा = ₹2100।',
      Telugu: 'A\\\'s share = (3/5) × 3500 = ₹2100.',
      Kannada: 'A\\\'s share = (3/5) × 3500 = ₹2100.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q15',
    testNumber: 7,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^7 × 2^3) ÷ 2^8:',
      Marathi: 'किंमत काढा: (२^7 × २^३) ÷ २^8:',
      Hindi: 'मान ज्ञात करें: (२^7 × २^३) ÷ २^8:',
      Urdu: 'Evaluate: (2^7 × 2^3) ÷ 2^8:',
      Gujarati: 'मान ज्ञात करें: (२^7 × २^३) ÷ २^8:',
      Telugu: 'Evaluate: (2^7 × 2^3) ÷ 2^8:',
      Kannada: 'Evaluate: (2^7 × 2^3) ÷ 2^8:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(7+3) ÷ 2^(7+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(7+३ - (7+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(7+3) ÷ 2^(7+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(7+3) ÷ 2^(7+1) = 2^2 = 4.',
      Kannada: '2^(7+3) ÷ 2^(7+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q6',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (8 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (8 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (8 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (8 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (8 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (8 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (8 × 6):'
    },
    options: {
      English: ['108', '98', '120', '88'],
      Marathi: ['108', '98', '120', '88'],
      Hindi: ['108', '98', '120', '88'],
      Urdu: ['108', '98', '120', '88'],
      Gujarati: ['108', '98', '120', '88'],
      Telugu: ['108', '98', '120', '88'],
      Kannada: ['108', '98', '120', '88']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 48 = 108.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 48 = 108.',
      Hindi: '६० + 48 = 108।',
      Urdu: '(-15) × (-4) = +60. 60 + 48 = 108.',
      Gujarati: '६० + 48 = 108।',
      Telugu: '(-15) × (-4) = +60. 60 + 48 = 108.',
      Kannada: '(-15) × (-4) = +60. 60 + 48 = 108.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q7',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 54:',
      Marathi: '१२ आणि 54 यांचा लसावि किती?',
      Hindi: '१२ और 54 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 54:',
      Gujarati: '१२ और 54 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 54:',
      Kannada: 'Find the LCM of 12 and 54:'
    },
    options: {
      English: ['96', '192', '48', '108'],
      Marathi: ['96', '192', '48', '108'],
      Hindi: ['96', '192', '48', '108'],
      Urdu: ['96', '192', '48', '108'],
      Gujarati: ['96', '192', '48', '108'],
      Telugu: ['96', '192', '48', '108'],
      Kannada: ['96', '192', '48', '108']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q8',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹12000 at 8% per annum for 4 years:',
      Marathi: '₹12000 मुद्दलाचे द.सा.द.शे. 8 दराने 4 वर्षांचे सरळव्याज किती?',
      Hindi: '₹12000 के मूलधन पर 8% वार्षिक दर से 4 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹12000 at 8% per annum for 4 years:',
      Gujarati: '₹12000 के मूलधन पर 8% वार्षिक दर से 4 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹12000 at 8% per annum for 4 years:',
      Kannada: 'Find Simple Interest on ₹12000 at 8% per annum for 4 years:'
    },
    options: {
      English: ['₹3840', '₹3790', '₹3940', '₹3740'],
      Marathi: ['₹3840', '₹3790', '₹3940', '₹3740'],
      Hindi: ['₹3840', '₹3790', '₹3940', '₹3740'],
      Urdu: ['₹3840', '₹3790', '₹3940', '₹3740'],
      Gujarati: ['₹3840', '₹3790', '₹3940', '₹3740'],
      Telugu: ['₹3840', '₹3790', '₹3940', '₹3740'],
      Kannada: ['₹3840', '₹3790', '₹3940', '₹3740']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (12000 × 8 × 4)/100 = ₹3840.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (12000 × 8 × 4)/१०० = ₹3840.',
      Hindi: 'साधारण ब्याज = ₹3840।',
      Urdu: 'SI = (P × R × T)/100 = (12000 × 8 × 4)/100 = ₹3840.',
      Gujarati: 'साधारण ब्याज = ₹3840।',
      Telugu: 'SI = (P × R × T)/100 = (12000 × 8 × 4)/100 = ₹3840.',
      Kannada: 'SI = (P × R × T)/100 = (12000 × 8 × 4)/100 = ₹3840.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q9',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹2000 and Selling Price is ₹2400. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹2000 व विक्री किंमत ₹2400 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹2000 और विक्रय मूल्य ₹2400 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹2000 and Selling Price is ₹2400. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹2000 और विक्रय मूल्य ₹2400 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹2000 and Selling Price is ₹2400. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹2000 and Selling Price is ₹2400. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((400) / 2000) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((400) / 2000) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((400) / 2000) × 100 = 20%.',
      Kannada: 'Profit % = ((400) / 2000) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q10',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 6 सेमी व 8 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 6 सेमी और 8 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 6 सेमी और 8 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 6 cm and 8 cm. Find hypotenuse:'
    },
    options: {
      English: ['10 cm', '12 cm', '8 cm', '14 cm'],
      Marathi: ['10 सेमी', '12 सेमी', '8 सेमी', '14 सेमी'],
      Hindi: ['10 सेमी', '12 सेमी', '8 सेमी', '14 सेमी'],
      Urdu: ['10 cm', '12 cm', '8 cm', '14 cm'],
      Gujarati: ['10 सेमी', '12 सेमी', '8 सेमी', '14 सेमी'],
      Telugu: ['10 cm', '12 cm', '8 cm', '14 cm'],
      Kannada: ['10 cm', '12 cm', '8 cm', '14 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(6² + 8²) = 10 cm.',
      Marathi: 'कर्ण² = 6² + 8² = 10 सेमी.',
      Hindi: 'कर्ण = 10 सेमी।',
      Urdu: 'Hypotenuse = √(6² + 8²) = 10 cm.',
      Gujarati: 'कर्ण = 10 सेमी।',
      Telugu: 'Hypotenuse = √(6² + 8²) = 10 cm.',
      Kannada: 'Hypotenuse = √(6² + 8²) = 10 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q11',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 110°?',
      Marathi: '110° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '110° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 110°?',
      Gujarati: '110° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 110°?',
      Kannada: 'What is the supplementary angle of 110°?'
    },
    options: {
      English: ['70°', '60°', '90°', '90°'],
      Marathi: ['70°', '60°', '90°', '९०°'],
      Hindi: ['70°', '60°', '90°', '९०°'],
      Urdu: ['70°', '60°', '90°', '90°'],
      Gujarati: ['70°', '60°', '90°', '९०°'],
      Telugu: ['70°', '60°', '90°', '90°'],
      Kannada: ['70°', '60°', '90°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 110 = 70°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 110 = 70°.',
      Hindi: '१८० - 110 = 70°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 110 = 70°.',
      Gujarati: '१८० - 110 = 70°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 110 = 70°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 110 = 70°.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q12',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Marathi: 'त्रिज्या 14 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 14 cm (π = 22/7):'
    },
    options: {
      English: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Marathi: ['616 चौ.सेमी', '596 चौ.सेमी', '656 चौ.सेमी', '88 चौ.सेमी'],
      Hindi: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Urdu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Gujarati: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Telugu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Kannada: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 14² = 616 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Gujarati: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 14² = 616 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q13',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 37. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 37. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 37. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 37. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 37. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 37. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 37. Find x:'
    },
    options: {
      English: ['11', '13', '10', '22'],
      Marathi: ['11', '13', '10', '22'],
      Hindi: ['11', '13', '10', '22'],
      Urdu: ['11', '13', '10', '22'],
      Gujarati: ['11', '13', '10', '22'],
      Telugu: ['11', '13', '10', '22'],
      Kannada: ['11', '13', '10', '22']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 37 + 7 = 44 => x = 11.',
      Marathi: '४x = 44 => x = 11.',
      Hindi: '४x = 44 => x = 11।',
      Urdu: '4x = 37 + 7 = 44 => x = 11.',
      Gujarati: '४x = 44 => x = 11।',
      Telugu: '4x = 37 + 7 = 44 => x = 11.',
      Kannada: '4x = 37 + 7 = 44 => x = 11.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q14',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹4000 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹4000 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹4000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹4000 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹4000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹4000 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹4000 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹2400', '₹1600', '₹800', '₹2000'],
      Marathi: ['₹2400', '₹1600', '₹800', '₹2000'],
      Hindi: ['₹2400', '₹1600', '₹800', '₹2000'],
      Urdu: ['₹2400', '₹1600', '₹800', '₹2000'],
      Gujarati: ['₹2400', '₹1600', '₹800', '₹2000'],
      Telugu: ['₹2400', '₹1600', '₹800', '₹2000'],
      Kannada: ['₹2400', '₹1600', '₹800', '₹2000']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 4000 = ₹2400.',
      Marathi: 'A चा वाटा = (३/५) × 4000 = ₹2400.',
      Hindi: 'A का हिस्सा = ₹2400।',
      Urdu: 'A\\\'s share = (3/5) × 4000 = ₹2400.',
      Gujarati: 'A का हिस्सा = ₹2400।',
      Telugu: 'A\\\'s share = (3/5) × 4000 = ₹2400.',
      Kannada: 'A\\\'s share = (3/5) × 4000 = ₹2400.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q15',
    testNumber: 8,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^8 × 2^3) ÷ 2^9:',
      Marathi: 'किंमत काढा: (२^8 × २^३) ÷ २^9:',
      Hindi: 'मान ज्ञात करें: (२^8 × २^३) ÷ २^9:',
      Urdu: 'Evaluate: (2^8 × 2^3) ÷ 2^9:',
      Gujarati: 'मान ज्ञात करें: (२^8 × २^३) ÷ २^9:',
      Telugu: 'Evaluate: (2^8 × 2^3) ÷ 2^9:',
      Kannada: 'Evaluate: (2^8 × 2^3) ÷ 2^9:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(8+3) ÷ 2^(8+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(8+३ - (8+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(8+3) ÷ 2^(8+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(8+3) ÷ 2^(8+1) = 2^2 = 4.',
      Kannada: '2^(8+3) ÷ 2^(8+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q6',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (9 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (9 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (9 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (9 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (9 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (9 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (9 × 6):'
    },
    options: {
      English: ['114', '104', '126', '94'],
      Marathi: ['114', '104', '126', '94'],
      Hindi: ['114', '104', '126', '94'],
      Urdu: ['114', '104', '126', '94'],
      Gujarati: ['114', '104', '126', '94'],
      Telugu: ['114', '104', '126', '94'],
      Kannada: ['114', '104', '126', '94']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 54 = 114.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 54 = 114.',
      Hindi: '६० + 54 = 114।',
      Urdu: '(-15) × (-4) = +60. 60 + 54 = 114.',
      Gujarati: '६० + 54 = 114।',
      Telugu: '(-15) × (-4) = +60. 60 + 54 = 114.',
      Kannada: '(-15) × (-4) = +60. 60 + 54 = 114.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q7',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 60:',
      Marathi: '१२ आणि 60 यांचा लसावि किती?',
      Hindi: '१२ और 60 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 60:',
      Gujarati: '१२ और 60 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 60:',
      Kannada: 'Find the LCM of 12 and 60:'
    },
    options: {
      English: ['108', '216', '54', '120'],
      Marathi: ['108', '216', '54', '120'],
      Hindi: ['108', '216', '54', '120'],
      Urdu: ['108', '216', '54', '120'],
      Gujarati: ['108', '216', '54', '120'],
      Telugu: ['108', '216', '54', '120'],
      Kannada: ['108', '216', '54', '120']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q8',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹13000 at 9% per annum for 2 years:',
      Marathi: '₹13000 मुद्दलाचे द.सा.द.शे. 9 दराने 2 वर्षांचे सरळव्याज किती?',
      Hindi: '₹13000 के मूलधन पर 9% वार्षिक दर से 2 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹13000 at 9% per annum for 2 years:',
      Gujarati: '₹13000 के मूलधन पर 9% वार्षिक दर से 2 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹13000 at 9% per annum for 2 years:',
      Kannada: 'Find Simple Interest on ₹13000 at 9% per annum for 2 years:'
    },
    options: {
      English: ['₹2340', '₹2290', '₹2440', '₹2240'],
      Marathi: ['₹2340', '₹2290', '₹2440', '₹2240'],
      Hindi: ['₹2340', '₹2290', '₹2440', '₹2240'],
      Urdu: ['₹2340', '₹2290', '₹2440', '₹2240'],
      Gujarati: ['₹2340', '₹2290', '₹2440', '₹2240'],
      Telugu: ['₹2340', '₹2290', '₹2440', '₹2240'],
      Kannada: ['₹2340', '₹2290', '₹2440', '₹2240']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (13000 × 9 × 2)/100 = ₹2340.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (13000 × 9 × 2)/१०० = ₹2340.',
      Hindi: 'साधारण ब्याज = ₹2340।',
      Urdu: 'SI = (P × R × T)/100 = (13000 × 9 × 2)/100 = ₹2340.',
      Gujarati: 'साधारण ब्याज = ₹2340।',
      Telugu: 'SI = (P × R × T)/100 = (13000 × 9 × 2)/100 = ₹2340.',
      Kannada: 'SI = (P × R × T)/100 = (13000 × 9 × 2)/100 = ₹2340.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q9',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹2200 and Selling Price is ₹2640. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹2200 व विक्री किंमत ₹2640 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹2200 और विक्रय मूल्य ₹2640 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹2200 and Selling Price is ₹2640. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹2200 और विक्रय मूल्य ₹2640 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹2200 and Selling Price is ₹2640. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹2200 and Selling Price is ₹2640. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((440) / 2200) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((440) / 2200) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((440) / 2200) × 100 = 20%.',
      Kannada: 'Profit % = ((440) / 2200) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q10',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 8 सेमी व 10 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 8 सेमी और 10 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 8 सेमी और 10 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 8 cm and 10 cm. Find hypotenuse:'
    },
    options: {
      English: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Marathi: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Hindi: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Urdu: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Gujarati: ['12 सेमी', '14 सेमी', '10 सेमी', '18 सेमी'],
      Telugu: ['12 cm', '14 cm', '10 cm', '18 cm'],
      Kannada: ['12 cm', '14 cm', '10 cm', '18 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Marathi: 'कर्ण² = 8² + 10² = 12 सेमी.',
      Hindi: 'कर्ण = 12 सेमी।',
      Urdu: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Gujarati: 'कर्ण = 12 सेमी।',
      Telugu: 'Hypotenuse = √(8² + 10²) = 12 cm.',
      Kannada: 'Hypotenuse = √(8² + 10²) = 12 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q11',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 120°?',
      Marathi: '120° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '120° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 120°?',
      Gujarati: '120° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 120°?',
      Kannada: 'What is the supplementary angle of 120°?'
    },
    options: {
      English: ['60°', '50°', '80°', '90°'],
      Marathi: ['60°', '50°', '80°', '९०°'],
      Hindi: ['60°', '50°', '80°', '९०°'],
      Urdu: ['60°', '50°', '80°', '90°'],
      Gujarati: ['60°', '50°', '80°', '९०°'],
      Telugu: ['60°', '50°', '80°', '90°'],
      Kannada: ['60°', '50°', '80°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 120 = 60°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 120 = 60°.',
      Hindi: '१८० - 120 = 60°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 120 = 60°.',
      Gujarati: '१८० - 120 = 60°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 120 = 60°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 120 = 60°.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q12',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Marathi: 'त्रिज्या 14 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 14 cm (π = 22/7):'
    },
    options: {
      English: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Marathi: ['616 चौ.सेमी', '596 चौ.सेमी', '656 चौ.सेमी', '88 चौ.सेमी'],
      Hindi: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Urdu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Gujarati: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Telugu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Kannada: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 14² = 616 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Gujarati: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 14² = 616 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q13',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 41. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 41. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 41. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 41. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 41. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 41. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 41. Find x:'
    },
    options: {
      English: ['12', '14', '11', '24'],
      Marathi: ['12', '14', '11', '24'],
      Hindi: ['12', '14', '11', '24'],
      Urdu: ['12', '14', '11', '24'],
      Gujarati: ['12', '14', '11', '24'],
      Telugu: ['12', '14', '11', '24'],
      Kannada: ['12', '14', '11', '24']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 41 + 7 = 48 => x = 12.',
      Marathi: '४x = 48 => x = 12.',
      Hindi: '४x = 48 => x = 12।',
      Urdu: '4x = 41 + 7 = 48 => x = 12.',
      Gujarati: '४x = 48 => x = 12।',
      Telugu: '4x = 41 + 7 = 48 => x = 12.',
      Kannada: '4x = 41 + 7 = 48 => x = 12.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q14',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹4500 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹4500 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹4500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹4500 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹4500 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹4500 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹4500 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹2700', '₹1800', '₹900', '₹2250'],
      Marathi: ['₹2700', '₹1800', '₹900', '₹2250'],
      Hindi: ['₹2700', '₹1800', '₹900', '₹2250'],
      Urdu: ['₹2700', '₹1800', '₹900', '₹2250'],
      Gujarati: ['₹2700', '₹1800', '₹900', '₹2250'],
      Telugu: ['₹2700', '₹1800', '₹900', '₹2250'],
      Kannada: ['₹2700', '₹1800', '₹900', '₹2250']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 4500 = ₹2700.',
      Marathi: 'A चा वाटा = (३/५) × 4500 = ₹2700.',
      Hindi: 'A का हिस्सा = ₹2700।',
      Urdu: 'A\\\'s share = (3/5) × 4500 = ₹2700.',
      Gujarati: 'A का हिस्सा = ₹2700।',
      Telugu: 'A\\\'s share = (3/5) × 4500 = ₹2700.',
      Kannada: 'A\\\'s share = (3/5) × 4500 = ₹2700.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q15',
    testNumber: 9,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^9 × 2^3) ÷ 2^10:',
      Marathi: 'किंमत काढा: (२^9 × २^३) ÷ २^10:',
      Hindi: 'मान ज्ञात करें: (२^9 × २^३) ÷ २^10:',
      Urdu: 'Evaluate: (2^9 × 2^3) ÷ 2^10:',
      Gujarati: 'मान ज्ञात करें: (२^9 × २^३) ÷ २^10:',
      Telugu: 'Evaluate: (2^9 × 2^3) ÷ 2^10:',
      Kannada: 'Evaluate: (2^9 × 2^3) ÷ 2^10:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(9+3) ÷ 2^(9+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(9+३ - (9+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(9+3) ÷ 2^(9+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(9+3) ÷ 2^(9+1) = 2^2 = 4.',
      Kannada: '2^(9+3) ÷ 2^(9+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q6',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 6,
    difficulty: 'moderate',
    type: 'integers',
    questionText: {
      English: 'Calculate: (-15) × (-4) + (10 × 6):',
      Marathi: 'किंमत काढा: (-१५) × (-४) + (10 × ६):',
      Hindi: 'मान ज्ञात करें: (-१५) × (-४) + (10 × ६):',
      Urdu: 'Calculate: (-15) × (-4) + (10 × 6):',
      Gujarati: 'मान ज्ञात करें: (-१५) × (-४) + (10 × ६):',
      Telugu: 'Calculate: (-15) × (-4) + (10 × 6):',
      Kannada: 'Calculate: (-15) × (-4) + (10 × 6):'
    },
    options: {
      English: ['120', '110', '132', '100'],
      Marathi: ['120', '110', '132', '100'],
      Hindi: ['120', '110', '132', '100'],
      Urdu: ['120', '110', '132', '100'],
      Gujarati: ['120', '110', '132', '100'],
      Telugu: ['120', '110', '132', '100'],
      Kannada: ['120', '110', '132', '100']
    },
    correctIndex: 0,
    explanation: {
      English: '(-15) × (-4) = +60. 60 + 60 = 120.',
      Marathi: '(-१५) × (-४) = +६०. ६० + 60 = 120.',
      Hindi: '६० + 60 = 120।',
      Urdu: '(-15) × (-4) = +60. 60 + 60 = 120.',
      Gujarati: '६० + 60 = 120।',
      Telugu: '(-15) × (-4) = +60. 60 + 60 = 120.',
      Kannada: '(-15) × (-4) = +60. 60 + 60 = 120.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q7',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 7,
    difficulty: 'moderate',
    type: 'lcm_hcf',
    questionText: {
      English: 'Find the LCM of 12 and 66:',
      Marathi: '१२ आणि 66 यांचा लसावि किती?',
      Hindi: '१२ और 66 का ल.स.प. क्या होगा?',
      Urdu: 'Find the LCM of 12 and 66:',
      Gujarati: '१२ और 66 का ल.स.प. क्या होगा?',
      Telugu: 'Find the LCM of 12 and 66:',
      Kannada: 'Find the LCM of 12 and 66:'
    },
    options: {
      English: ['120', '240', '60', '132'],
      Marathi: ['120', '240', '60', '132'],
      Hindi: ['120', '240', '60', '132'],
      Urdu: ['120', '240', '60', '132'],
      Gujarati: ['120', '240', '60', '132'],
      Telugu: ['120', '240', '60', '132'],
      Kannada: ['120', '240', '60', '132']
    },
    correctIndex: 0,
    explanation: {
      English: 'LCM calculation by prime factorization.',
      Marathi: 'मूळ अवयव पद्धतीने लसावि काढला.',
      Hindi: 'ल.स.प. विधि।',
      Urdu: 'LCM calculation by prime factorization.',
      Gujarati: 'ल.स.प. विधि।',
      Telugu: 'LCM calculation by prime factorization.',
      Kannada: 'LCM calculation by prime factorization.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q8',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 8,
    difficulty: 'moderate',
    type: 'simple_interest',
    questionText: {
      English: 'Find Simple Interest on ₹14000 at 5% per annum for 3 years:',
      Marathi: '₹14000 मुद्दलाचे द.सा.द.शे. 5 दराने 3 वर्षांचे सरळव्याज किती?',
      Hindi: '₹14000 के मूलधन पर 5% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Urdu: 'Find Simple Interest on ₹14000 at 5% per annum for 3 years:',
      Gujarati: '₹14000 के मूलधन पर 5% वार्षिक दर से 3 वर्षों का साधारण ब्याज क्या होगा?',
      Telugu: 'Find Simple Interest on ₹14000 at 5% per annum for 3 years:',
      Kannada: 'Find Simple Interest on ₹14000 at 5% per annum for 3 years:'
    },
    options: {
      English: ['₹2100', '₹2050', '₹2200', '₹2000'],
      Marathi: ['₹2100', '₹2050', '₹2200', '₹2000'],
      Hindi: ['₹2100', '₹2050', '₹2200', '₹2000'],
      Urdu: ['₹2100', '₹2050', '₹2200', '₹2000'],
      Gujarati: ['₹2100', '₹2050', '₹2200', '₹2000'],
      Telugu: ['₹2100', '₹2050', '₹2200', '₹2000'],
      Kannada: ['₹2100', '₹2050', '₹2200', '₹2000']
    },
    correctIndex: 0,
    explanation: {
      English: 'SI = (P × R × T)/100 = (14000 × 5 × 3)/100 = ₹2100.',
      Marathi: 'सरळव्याज = (म × द × क)/१०० = (14000 × 5 × 3)/१०० = ₹2100.',
      Hindi: 'साधारण ब्याज = ₹2100।',
      Urdu: 'SI = (P × R × T)/100 = (14000 × 5 × 3)/100 = ₹2100.',
      Gujarati: 'साधारण ब्याज = ₹2100।',
      Telugu: 'SI = (P × R × T)/100 = (14000 × 5 × 3)/100 = ₹2100.',
      Kannada: 'SI = (P × R × T)/100 = (14000 × 5 × 3)/100 = ₹2100.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q9',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 9,
    difficulty: 'moderate',
    type: 'profit_loss',
    questionText: {
      English: 'Cost Price of an article is ₹2400 and Selling Price is ₹2880. Find profit percentage:',
      Marathi: 'एका वस्तूची खरेदी किंमत ₹2400 व विक्री किंमत ₹2880 आहे, तर शेकडा नफा किती?',
      Hindi: 'एक वस्तु का क्रय मूल्य ₹2400 और विक्रय मूल्य ₹2880 है, प्रतिशत लाभ क्या है?',
      Urdu: 'Cost Price of an article is ₹2400 and Selling Price is ₹2880. Find profit percentage:',
      Gujarati: 'एक वस्तु का क्रय मूल्य ₹2400 और विक्रय मूल्य ₹2880 है, प्रतिशत लाभ क्या है?',
      Telugu: 'Cost Price of an article is ₹2400 and Selling Price is ₹2880. Find profit percentage:',
      Kannada: 'Cost Price of an article is ₹2400 and Selling Price is ₹2880. Find profit percentage:'
    },
    options: {
      English: ['20%', '15%', '25%', '10%'],
      Marathi: ['२०%', '१५%', '२५%', '१०%'],
      Hindi: ['२०%', '१५%', '२५%', '१०%'],
      Urdu: ['20%', '15%', '25%', '10%'],
      Gujarati: ['२०%', '१५%', '२५%', '१०%'],
      Telugu: ['20%', '15%', '25%', '10%'],
      Kannada: ['20%', '15%', '25%', '10%']
    },
    correctIndex: 0,
    explanation: {
      English: 'Profit % = ((480) / 2400) × 100 = 20%.',
      Marathi: 'शेकडा नफा = (नफा / खरेदी) × १०० = २०%.',
      Hindi: 'लाभ % = २०%।',
      Urdu: 'Profit % = ((480) / 2400) × 100 = 20%.',
      Gujarati: 'लाभ % = २०%।',
      Telugu: 'Profit % = ((480) / 2400) × 100 = 20%.',
      Kannada: 'Profit % = ((480) / 2400) × 100 = 20%.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q10',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 10,
    difficulty: 'moderate',
    type: 'pythagoras',
    questionText: {
      English: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Marathi: 'काटकोन त्रिकोणात काटकोन करणाऱ्या बाजू 10 सेमी व 12 सेमी आहेत, तर कर्ण किती?',
      Hindi: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 10 सेमी और 12 सेमी हैं, कर्ण क्या होगा?',
      Urdu: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Gujarati: 'एक समकोण त्रिभुज में समकोण बनाने वाली भुजाएं 10 सेमी और 12 सेमी हैं, कर्ण क्या होगा?',
      Telugu: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:',
      Kannada: 'In a right triangle, legs are 10 cm and 12 cm. Find hypotenuse:'
    },
    options: {
      English: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Marathi: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Hindi: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Urdu: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Gujarati: ['15 सेमी', '17 सेमी', '13 सेमी', '22 सेमी'],
      Telugu: ['15 cm', '17 cm', '13 cm', '22 cm'],
      Kannada: ['15 cm', '17 cm', '13 cm', '22 cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Marathi: 'कर्ण² = 10² + 12² = 15 सेमी.',
      Hindi: 'कर्ण = 15 सेमी।',
      Urdu: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Gujarati: 'कर्ण = 15 सेमी।',
      Telugu: 'Hypotenuse = √(10² + 12²) = 15 cm.',
      Kannada: 'Hypotenuse = √(10² + 12²) = 15 cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q11',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 11,
    difficulty: 'easy',
    type: 'geometry',
    questionText: {
      English: 'What is the supplementary angle of 130°?',
      Marathi: '130° मापाच्या कोनाचा पूरककोन किती अंशाचा असेल?',
      Hindi: '130° कोण का संपूरक कोण क्या होगा?',
      Urdu: 'What is the supplementary angle of 130°?',
      Gujarati: '130° कोण का संपूरक कोण क्या होगा?',
      Telugu: 'What is the supplementary angle of 130°?',
      Kannada: 'What is the supplementary angle of 130°?'
    },
    options: {
      English: ['50°', '40°', '70°', '90°'],
      Marathi: ['50°', '40°', '70°', '९०°'],
      Hindi: ['50°', '40°', '70°', '९०°'],
      Urdu: ['50°', '40°', '70°', '90°'],
      Gujarati: ['50°', '40°', '70°', '९०°'],
      Telugu: ['50°', '40°', '70°', '90°'],
      Kannada: ['50°', '40°', '70°', '90°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Supplementary angles add up to 180°: 180 - 130 = 50°.',
      Marathi: 'पूरककोनांची बेरीज १८०° असते: १८० - 130 = 50°.',
      Hindi: '१८० - 130 = 50°।',
      Urdu: 'Supplementary angles add up to 180°: 180 - 130 = 50°.',
      Gujarati: '१८० - 130 = 50°।',
      Telugu: 'Supplementary angles add up to 180°: 180 - 130 = 50°.',
      Kannada: 'Supplementary angles add up to 180°: 180 - 130 = 50°.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q12',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 12,
    difficulty: 'moderate',
    type: 'area',
    questionText: {
      English: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Marathi: 'त्रिज्या 14 सेमी असलेल्या वर्तुळाचे क्षेत्रफळ किती? (π = २२/७):',
      Hindi: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Urdu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Gujarati: 'त्रिज्या 14 सेमी वाले वृत्त का क्षेत्रफल ज्ञात करें (π = २२/७):',
      Telugu: 'Find the area of a circle with radius 14 cm (π = 22/7):',
      Kannada: 'Find the area of a circle with radius 14 cm (π = 22/7):'
    },
    options: {
      English: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Marathi: ['616 चौ.सेमी', '596 चौ.सेमी', '656 चौ.सेमी', '88 चौ.सेमी'],
      Hindi: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Urdu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Gujarati: ['616 वर्ग सेमी', '596 वर्ग सेमी', '656 वर्ग सेमी', '88 वर्ग सेमी'],
      Telugu: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm'],
      Kannada: ['616 sq.cm', '596 sq.cm', '656 sq.cm', '88 sq.cm']
    },
    correctIndex: 0,
    explanation: {
      English: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Marathi: 'क्षेत्रफळ = πr² = (२२/७) × 14² = 616 चौ.सेमी.',
      Hindi: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Urdu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Gujarati: 'क्षेत्रफल = 616 वर्ग सेमी।',
      Telugu: 'Area = πr² = (22/7) × 14² = 616 sq.cm.',
      Kannada: 'Area = πr² = (22/7) × 14² = 616 sq.cm.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q13',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 13,
    difficulty: 'moderate',
    type: 'algebra',
    questionText: {
      English: 'Solve the linear equation: 4x - 7 = 45. Find x:',
      Marathi: 'समीकरण सोडवा: ४x - ७ = 45. x ची किंमत काढा:',
      Hindi: 'समीकरण हल करें: ४x - ७ = 45. x का मान क्या होगा?',
      Urdu: 'Solve the linear equation: 4x - 7 = 45. Find x:',
      Gujarati: 'समीकरण हल करें: ४x - ७ = 45. x का मान क्या होगा?',
      Telugu: 'Solve the linear equation: 4x - 7 = 45. Find x:',
      Kannada: 'Solve the linear equation: 4x - 7 = 45. Find x:'
    },
    options: {
      English: ['13', '15', '12', '26'],
      Marathi: ['13', '15', '12', '26'],
      Hindi: ['13', '15', '12', '26'],
      Urdu: ['13', '15', '12', '26'],
      Gujarati: ['13', '15', '12', '26'],
      Telugu: ['13', '15', '12', '26'],
      Kannada: ['13', '15', '12', '26']
    },
    correctIndex: 0,
    explanation: {
      English: '4x = 45 + 7 = 52 => x = 13.',
      Marathi: '४x = 52 => x = 13.',
      Hindi: '४x = 52 => x = 13।',
      Urdu: '4x = 45 + 7 = 52 => x = 13.',
      Gujarati: '४x = 52 => x = 13।',
      Telugu: '4x = 45 + 7 = 52 => x = 13.',
      Kannada: '4x = 45 + 7 = 52 => x = 13.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q14',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 14,
    difficulty: 'moderate',
    type: 'ratio',
    questionText: {
      English: 'Divide ₹5000 between A and B in ratio 3:2. Find A\'s share:',
      Marathi: '₹5000 ही रक्कम A आणि B मध्ये ३:२ या प्रमाणात वाटल्यास A चा वाटा किती?',
      Hindi: '₹5000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Urdu: 'Divide ₹5000 between A and B in ratio 3:2. Find A\\\'s share:',
      Gujarati: '₹5000 को A और B में ३:२ के अनुपात में बांटने पर A का हिस्सा क्या होगा?',
      Telugu: 'Divide ₹5000 between A and B in ratio 3:2. Find A\\\'s share:',
      Kannada: 'Divide ₹5000 between A and B in ratio 3:2. Find A\\\'s share:'
    },
    options: {
      English: ['₹3000', '₹2000', '₹1000', '₹2500'],
      Marathi: ['₹3000', '₹2000', '₹1000', '₹2500'],
      Hindi: ['₹3000', '₹2000', '₹1000', '₹2500'],
      Urdu: ['₹3000', '₹2000', '₹1000', '₹2500'],
      Gujarati: ['₹3000', '₹2000', '₹1000', '₹2500'],
      Telugu: ['₹3000', '₹2000', '₹1000', '₹2500'],
      Kannada: ['₹3000', '₹2000', '₹1000', '₹2500']
    },
    correctIndex: 0,
    explanation: {
      English: 'A\'s share = (3/5) × 5000 = ₹3000.',
      Marathi: 'A चा वाटा = (३/५) × 5000 = ₹3000.',
      Hindi: 'A का हिस्सा = ₹3000।',
      Urdu: 'A\\\'s share = (3/5) × 5000 = ₹3000.',
      Gujarati: 'A का हिस्सा = ₹3000।',
      Telugu: 'A\\\'s share = (3/5) × 5000 = ₹3000.',
      Kannada: 'A\\\'s share = (3/5) × 5000 = ₹3000.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q15',
    testNumber: 10,
    section: 'Mathematics',
    subject: 'Mathematics',
    questionNumberInSet: 15,
    difficulty: 'moderate',
    type: 'exponents',
    questionText: {
      English: 'Evaluate: (2^10 × 2^3) ÷ 2^11:',
      Marathi: 'किंमत काढा: (२^10 × २^३) ÷ २^11:',
      Hindi: 'मान ज्ञात करें: (२^10 × २^३) ÷ २^11:',
      Urdu: 'Evaluate: (2^10 × 2^3) ÷ 2^11:',
      Gujarati: 'मान ज्ञात करें: (२^10 × २^३) ÷ २^11:',
      Telugu: 'Evaluate: (2^10 × 2^3) ÷ 2^11:',
      Kannada: 'Evaluate: (2^10 × 2^3) ÷ 2^11:'
    },
    options: {
      English: ['4', '2', '8', '16'],
      Marathi: ['४', '२', '८', '१६'],
      Hindi: ['४', '२', '८', '१६'],
      Urdu: ['4', '2', '8', '16'],
      Gujarati: ['४', '२', '८', '१६'],
      Telugu: ['4', '2', '8', '16'],
      Kannada: ['4', '2', '8', '16']
    },
    correctIndex: 0,
    explanation: {
      English: '2^(10+3) ÷ 2^(10+1) = 2^2 = 4.',
      Marathi: 'घातांकाचे नियम: २^(10+३ - (10+१)) = २^२ = ४.',
      Hindi: '२^२ = ४।',
      Urdu: '2^(10+3) ÷ 2^(10+1) = 2^2 = 4.',
      Gujarati: '२^२ = ४।',
      Telugu: '2^(10+3) ÷ 2^(10+1) = 2^2 = 4.',
      Kannada: '2^(10+3) ÷ 2^(10+1) = 2^2 = 4.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q16',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 1]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 1]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 1]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 1]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 1]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 1]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 1]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q17',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 1]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 1]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 1]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 1]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 1]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 1]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 1]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q18',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 1]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 1]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 1]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 1]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 1]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 1]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 1]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q19',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 1]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 1]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 1]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 1]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 1]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 1]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 1]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q20',
    testNumber: 1,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 1]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 1]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 1]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 1]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 1]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 1]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 1]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q16',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 2]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 2]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 2]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 2]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 2]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 2]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 2]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q17',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 2]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 2]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 2]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 2]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 2]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 2]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 2]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q18',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 2]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 2]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 2]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 2]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 2]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 2]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 2]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q19',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 2]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 2]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 2]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 2]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 2]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 2]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 2]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q20',
    testNumber: 2,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 2]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 2]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 2]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 2]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 2]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 2]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 2]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q16',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 3]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 3]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 3]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 3]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 3]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 3]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 3]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q17',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 3]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 3]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 3]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 3]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 3]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 3]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 3]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q18',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 3]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 3]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 3]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 3]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 3]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 3]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 3]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q19',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 3]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 3]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 3]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 3]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 3]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 3]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 3]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q20',
    testNumber: 3,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 3]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 3]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 3]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 3]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 3]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 3]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 3]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q16',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 4]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 4]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 4]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 4]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 4]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 4]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 4]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q17',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 4]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 4]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 4]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 4]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 4]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 4]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 4]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q18',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 4]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 4]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 4]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 4]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 4]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 4]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 4]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q19',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 4]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 4]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 4]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 4]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 4]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 4]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 4]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q20',
    testNumber: 4,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 4]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 4]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 4]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 4]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 4]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 4]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 4]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q16',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 5]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 5]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 5]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 5]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 5]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 5]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 5]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q17',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 5]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 5]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 5]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 5]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 5]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 5]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 5]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q18',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 5]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 5]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 5]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 5]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 5]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 5]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 5]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q19',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 5]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 5]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 5]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 5]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 5]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 5]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 5]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q20',
    testNumber: 5,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 5]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 5]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 5]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 5]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 5]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 5]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 5]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q16',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 6]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 6]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 6]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 6]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 6]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 6]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 6]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q17',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 6]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 6]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 6]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 6]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 6]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 6]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 6]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q18',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 6]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 6]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 6]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 6]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 6]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 6]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 6]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q19',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 6]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 6]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 6]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 6]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 6]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 6]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 6]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q20',
    testNumber: 6,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 6]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 6]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 6]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 6]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 6]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 6]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 6]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q16',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 7]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 7]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 7]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 7]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 7]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 7]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 7]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q17',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 7]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 7]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 7]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 7]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 7]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 7]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 7]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q18',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 7]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 7]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 7]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 7]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 7]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 7]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 7]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q19',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 7]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 7]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 7]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 7]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 7]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 7]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 7]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q20',
    testNumber: 7,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 7]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 7]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 7]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 7]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 7]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 7]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 7]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q16',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 8]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 8]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 8]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 8]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 8]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 8]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 8]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q17',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 8]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 8]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 8]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 8]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 8]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 8]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 8]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q18',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 8]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 8]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 8]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 8]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 8]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 8]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 8]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q19',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 8]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 8]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 8]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 8]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 8]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 8]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 8]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q20',
    testNumber: 8,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 8]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 8]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 8]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 8]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 8]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 8]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 8]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q16',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 9]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 9]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 9]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 9]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 9]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 9]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 9]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q17',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 9]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 9]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 9]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 9]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 9]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 9]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 9]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q18',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 9]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 9]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 9]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 9]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 9]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 9]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 9]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q19',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 9]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 9]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 9]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 9]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 9]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 9]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 9]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q20',
    testNumber: 9,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 9]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 9]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 9]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 9]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 9]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 9]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 9]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q16',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 16,
    difficulty: 'moderate',
    type: 'passive_voice',
    questionText: {
      English: 'Std 7 English (Passive Voice) [Set 10]: She writes a letter.',
      Marathi: 'इ. ७ वी इंग्रजी (Passive Voice) [संच 10]: She writes a letter.',
      Hindi: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 10]: She writes a letter.',
      Urdu: 'Std 7 English (Passive Voice) [Set 10]: She writes a letter.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Passive Voice) [सेट 10]: She writes a letter.',
      Telugu: 'Std 7 English (Passive Voice) [Set 10]: She writes a letter.',
      Kannada: 'Std 7 English (Passive Voice) [Set 10]: She writes a letter.'
    },
    options: {
      English: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Marathi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Hindi: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Urdu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Gujarati: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Telugu: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.'],
      Kannada: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written.', 'A letter wrote her.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A letter is written by her.\'.',
      Marathi: 'योग्य उत्तर \'A letter is written by her.\' आहे.',
      Hindi: 'सही उत्तर \'A letter is written by her.\' है।',
      Urdu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Gujarati: 'सही उत्तर \\\'A letter is written by her.\\\' है।',
      Telugu: 'Correct answer is \\\'A letter is written by her.\\\'.',
      Kannada: 'Correct answer is \\\'A letter is written by her.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q17',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 17,
    difficulty: 'moderate',
    type: 'indirect_speech',
    questionText: {
      English: 'Std 7 English (Indirect Speech) [Set 10]: He said, "I am reading a novel."',
      Marathi: 'इ. ७ वी इंग्रजी (Indirect Speech) [संच 10]: He said, "I am reading a novel."',
      Hindi: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 10]: He said, "I am reading a novel."',
      Urdu: 'Std 7 English (Indirect Speech) [Set 10]: He said, "I am reading a novel."',
      Gujarati: 'कक्षा ७ अंग्रेजी (Indirect Speech) [सेट 10]: He said, "I am reading a novel."',
      Telugu: 'Std 7 English (Indirect Speech) [Set 10]: He said, "I am reading a novel."',
      Kannada: 'Std 7 English (Indirect Speech) [Set 10]: He said, "I am reading a novel."'
    },
    options: {
      English: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Marathi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Hindi: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Urdu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Gujarati: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Telugu: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.'],
      Kannada: ['He said that he was reading a novel.', 'He said he is reading.', 'He says he read novel.', 'He told novel is read.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'He said that he was reading a novel.\'.',
      Marathi: 'योग्य उत्तर \'He said that he was reading a novel.\' आहे.',
      Hindi: 'सही उत्तर \'He said that he was reading a novel.\' है।',
      Urdu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Gujarati: 'सही उत्तर \\\'He said that he was reading a novel.\\\' है।',
      Telugu: 'Correct answer is \\\'He said that he was reading a novel.\\\'.',
      Kannada: 'Correct answer is \\\'He said that he was reading a novel.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q18',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 18,
    difficulty: 'moderate',
    type: 'degree',
    questionText: {
      English: 'Std 7 English (Degree) [Set 10]: Lead is heavier than any other metal.',
      Marathi: 'इ. ७ वी इंग्रजी (Degree) [संच 10]: Lead is heavier than any other metal.',
      Hindi: 'कक्षा ७ अंग्रेजी (Degree) [सेट 10]: Lead is heavier than any other metal.',
      Urdu: 'Std 7 English (Degree) [Set 10]: Lead is heavier than any other metal.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Degree) [सेट 10]: Lead is heavier than any other metal.',
      Telugu: 'Std 7 English (Degree) [Set 10]: Lead is heavier than any other metal.',
      Kannada: 'Std 7 English (Degree) [Set 10]: Lead is heavier than any other metal.'
    },
    options: {
      English: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Marathi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Hindi: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Urdu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Gujarati: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Telugu: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.'],
      Kannada: ['No other metal is as heavy as lead.', 'Lead is heavy metal.', 'All metals are heavier.', 'Lead is as heavy as iron.']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'No other metal is as heavy as lead.\'.',
      Marathi: 'योग्य उत्तर \'No other metal is as heavy as lead.\' आहे.',
      Hindi: 'सही उत्तर \'No other metal is as heavy as lead.\' है।',
      Urdu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Gujarati: 'सही उत्तर \\\'No other metal is as heavy as lead.\\\' है।',
      Telugu: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.',
      Kannada: 'Correct answer is \\\'No other metal is as heavy as lead.\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q19',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 19,
    difficulty: 'moderate',
    type: 'conjunction',
    questionText: {
      English: 'Std 7 English (Conjunction) [Set 10]: He worked very hard, ___ he could not pass.',
      Marathi: 'इ. ७ वी इंग्रजी (Conjunction) [संच 10]: He worked very hard, ___ he could not pass.',
      Hindi: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 10]: He worked very hard, ___ he could not pass.',
      Urdu: 'Std 7 English (Conjunction) [Set 10]: He worked very hard, ___ he could not pass.',
      Gujarati: 'कक्षा ७ अंग्रेजी (Conjunction) [सेट 10]: He worked very hard, ___ he could not pass.',
      Telugu: 'Std 7 English (Conjunction) [Set 10]: He worked very hard, ___ he could not pass.',
      Kannada: 'Std 7 English (Conjunction) [Set 10]: He worked very hard, ___ he could not pass.'
    },
    options: {
      English: ['yet', 'because', 'so', 'since'],
      Marathi: ['yet', 'because', 'so', 'since'],
      Hindi: ['yet', 'because', 'so', 'since'],
      Urdu: ['yet', 'because', 'so', 'since'],
      Gujarati: ['yet', 'because', 'so', 'since'],
      Telugu: ['yet', 'because', 'so', 'since'],
      Kannada: ['yet', 'because', 'so', 'since']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'yet\'.',
      Marathi: 'योग्य उत्तर \'yet\' आहे.',
      Hindi: 'सही उत्तर \'yet\' है।',
      Urdu: 'Correct answer is \\\'yet\\\'.',
      Gujarati: 'सही उत्तर \\\'yet\\\' है।',
      Telugu: 'Correct answer is \\\'yet\\\'.',
      Kannada: 'Correct answer is \\\'yet\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q20',
    testNumber: 10,
    section: 'Second Language',
    subject: 'Second Language',
    questionNumberInSet: 20,
    difficulty: 'moderate',
    type: 'idiom',
    questionText: {
      English: 'Std 7 English (Idiom) [Set 10]: \'A piece of cake\' means:',
      Marathi: 'इ. ७ वी इंग्रजी (Idiom) [संच 10]: \'A piece of cake\' means:',
      Hindi: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 10]: \'A piece of cake\' means:',
      Urdu: 'Std 7 English (Idiom) [Set 10]: \\\'A piece of cake\\\' means:',
      Gujarati: 'कक्षा ७ अंग्रेजी (Idiom) [सेट 10]: \\\'A piece of cake\\\' means:',
      Telugu: 'Std 7 English (Idiom) [Set 10]: \\\'A piece of cake\\\' means:',
      Kannada: 'Std 7 English (Idiom) [Set 10]: \\\'A piece of cake\\\' means:'
    },
    options: {
      English: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Marathi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Hindi: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Urdu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Gujarati: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Telugu: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem'],
      Kannada: ['A very easy task', 'A sweet bakery dish', 'A tough challenge', 'A big problem']
    },
    correctIndex: 0,
    explanation: {
      English: 'Correct answer is \'A very easy task\'.',
      Marathi: 'योग्य उत्तर \'A very easy task\' आहे.',
      Hindi: 'सही उत्तर \'A very easy task\' है।',
      Urdu: 'Correct answer is \\\'A very easy task\\\'.',
      Gujarati: 'सही उत्तर \\\'A very easy task\\\' है।',
      Telugu: 'Correct answer is \\\'A very easy task\\\'.',
      Kannada: 'Correct answer is \\\'A very easy task\\\'.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q21',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q22',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 3 (3³)?',
      Marathi: '3 चा घन (3³) किती?',
      Hindi: '3 का घन (3³) क्या होगा?',
      Urdu: 'What is the cube of 3 (3³)?',
      Gujarati: '3 का घन (3³) क्या होगा?',
      Telugu: 'What is the cube of 3 (3³)?',
      Kannada: 'What is the cube of 3 (3³)?'
    },
    options: {
      English: ['27', '7', '57', '9'],
      Marathi: ['27', '7', '57', '9'],
      Hindi: ['27', '7', '57', '9'],
      Urdu: ['27', '7', '57', '9'],
      Gujarati: ['27', '7', '57', '9'],
      Telugu: ['27', '7', '57', '9'],
      Kannada: ['27', '7', '57', '9']
    },
    correctIndex: 0,
    explanation: {
      English: '(3)³ = 27.',
      Marathi: '(3) चा घन = 27.',
      Hindi: '(3)³ = 27।',
      Urdu: '(3)³ = 27.',
      Gujarati: '(3)³ = 27।',
      Telugu: '(3)³ = 27.',
      Kannada: '(3)³ = 27.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q23',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q24',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q25',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q26',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q27',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q28',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q29',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s1_q30',
    testNumber: 1,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 41 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '41 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '41 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 41 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '41 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 41 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 41 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['30th', '29th', '31th', '29th'],
      Marathi: ['30 वा', '29 वा', '31 वा', '29 वा'],
      Hindi: ['30 वां', '29 वां', '31 वां', '29 वां'],
      Urdu: ['30th', '29th', '31th', '29th'],
      Gujarati: ['30 वां', '29 वां', '31 वां', '29 वां'],
      Telugu: ['30th', '29th', '31th', '29th'],
      Kannada: ['30th', '29th', '31th', '29th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 41 - 12 + 1 = 30th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 41 - 12 + १ = 30 वा.',
      Hindi: 'नीचे से स्थान = 41 - 12 + १ = 30।',
      Urdu: 'Bottom rank = Total - Top + 1 = 41 - 12 + 1 = 30th.',
      Gujarati: 'नीचे से स्थान = 41 - 12 + १ = 30।',
      Telugu: 'Bottom rank = Total - Top + 1 = 41 - 12 + 1 = 30th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 41 - 12 + 1 = 30th.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q21',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q22',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 4 (4³)?',
      Marathi: '4 चा घन (4³) किती?',
      Hindi: '4 का घन (4³) क्या होगा?',
      Urdu: 'What is the cube of 4 (4³)?',
      Gujarati: '4 का घन (4³) क्या होगा?',
      Telugu: 'What is the cube of 4 (4³)?',
      Kannada: 'What is the cube of 4 (4³)?'
    },
    options: {
      English: ['64', '44', '94', '12'],
      Marathi: ['64', '44', '94', '12'],
      Hindi: ['64', '44', '94', '12'],
      Urdu: ['64', '44', '94', '12'],
      Gujarati: ['64', '44', '94', '12'],
      Telugu: ['64', '44', '94', '12'],
      Kannada: ['64', '44', '94', '12']
    },
    correctIndex: 0,
    explanation: {
      English: '(4)³ = 64.',
      Marathi: '(4) चा घन = 64.',
      Hindi: '(4)³ = 64।',
      Urdu: '(4)³ = 64.',
      Gujarati: '(4)³ = 64।',
      Telugu: '(4)³ = 64.',
      Kannada: '(4)³ = 64.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q23',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q24',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q25',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q26',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q27',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q28',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q29',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s2_q30',
    testNumber: 2,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 42 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '42 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '42 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 42 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '42 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 42 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 42 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['31th', '30th', '32th', '30th'],
      Marathi: ['31 वा', '30 वा', '32 वा', '30 वा'],
      Hindi: ['31 वां', '30 वां', '32 वां', '30 वां'],
      Urdu: ['31th', '30th', '32th', '30th'],
      Gujarati: ['31 वां', '30 वां', '32 वां', '30 वां'],
      Telugu: ['31th', '30th', '32th', '30th'],
      Kannada: ['31th', '30th', '32th', '30th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 42 - 12 + 1 = 31th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 42 - 12 + १ = 31 वा.',
      Hindi: 'नीचे से स्थान = 42 - 12 + १ = 31।',
      Urdu: 'Bottom rank = Total - Top + 1 = 42 - 12 + 1 = 31th.',
      Gujarati: 'नीचे से स्थान = 42 - 12 + १ = 31।',
      Telugu: 'Bottom rank = Total - Top + 1 = 42 - 12 + 1 = 31th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 42 - 12 + 1 = 31th.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q21',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q22',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 5 (5³)?',
      Marathi: '5 चा घन (5³) किती?',
      Hindi: '5 का घन (5³) क्या होगा?',
      Urdu: 'What is the cube of 5 (5³)?',
      Gujarati: '5 का घन (5³) क्या होगा?',
      Telugu: 'What is the cube of 5 (5³)?',
      Kannada: 'What is the cube of 5 (5³)?'
    },
    options: {
      English: ['125', '105', '155', '15'],
      Marathi: ['125', '105', '155', '15'],
      Hindi: ['125', '105', '155', '15'],
      Urdu: ['125', '105', '155', '15'],
      Gujarati: ['125', '105', '155', '15'],
      Telugu: ['125', '105', '155', '15'],
      Kannada: ['125', '105', '155', '15']
    },
    correctIndex: 0,
    explanation: {
      English: '(5)³ = 125.',
      Marathi: '(5) चा घन = 125.',
      Hindi: '(5)³ = 125।',
      Urdu: '(5)³ = 125.',
      Gujarati: '(5)³ = 125।',
      Telugu: '(5)³ = 125.',
      Kannada: '(5)³ = 125.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q23',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q24',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q25',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q26',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q27',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q28',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q29',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s3_q30',
    testNumber: 3,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 43 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '43 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '43 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 43 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '43 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 43 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 43 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['32th', '31th', '33th', '31th'],
      Marathi: ['32 वा', '31 वा', '33 वा', '31 वा'],
      Hindi: ['32 वां', '31 वां', '33 वां', '31 वां'],
      Urdu: ['32th', '31th', '33th', '31th'],
      Gujarati: ['32 वां', '31 वां', '33 वां', '31 वां'],
      Telugu: ['32th', '31th', '33th', '31th'],
      Kannada: ['32th', '31th', '33th', '31th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 43 - 12 + 1 = 32th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 43 - 12 + १ = 32 वा.',
      Hindi: 'नीचे से स्थान = 43 - 12 + १ = 32।',
      Urdu: 'Bottom rank = Total - Top + 1 = 43 - 12 + 1 = 32th.',
      Gujarati: 'नीचे से स्थान = 43 - 12 + १ = 32।',
      Telugu: 'Bottom rank = Total - Top + 1 = 43 - 12 + 1 = 32th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 43 - 12 + 1 = 32th.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q21',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q22',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 6 (6³)?',
      Marathi: '6 चा घन (6³) किती?',
      Hindi: '6 का घन (6³) क्या होगा?',
      Urdu: 'What is the cube of 6 (6³)?',
      Gujarati: '6 का घन (6³) क्या होगा?',
      Telugu: 'What is the cube of 6 (6³)?',
      Kannada: 'What is the cube of 6 (6³)?'
    },
    options: {
      English: ['216', '196', '246', '18'],
      Marathi: ['216', '196', '246', '18'],
      Hindi: ['216', '196', '246', '18'],
      Urdu: ['216', '196', '246', '18'],
      Gujarati: ['216', '196', '246', '18'],
      Telugu: ['216', '196', '246', '18'],
      Kannada: ['216', '196', '246', '18']
    },
    correctIndex: 0,
    explanation: {
      English: '(6)³ = 216.',
      Marathi: '(6) चा घन = 216.',
      Hindi: '(6)³ = 216।',
      Urdu: '(6)³ = 216.',
      Gujarati: '(6)³ = 216।',
      Telugu: '(6)³ = 216.',
      Kannada: '(6)³ = 216.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q23',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q24',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q25',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q26',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q27',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q28',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q29',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s4_q30',
    testNumber: 4,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 44 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '44 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '44 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 44 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '44 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 44 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 44 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['33th', '32th', '34th', '32th'],
      Marathi: ['33 वा', '32 वा', '34 वा', '32 वा'],
      Hindi: ['33 वां', '32 वां', '34 वां', '32 वां'],
      Urdu: ['33th', '32th', '34th', '32th'],
      Gujarati: ['33 वां', '32 वां', '34 वां', '32 वां'],
      Telugu: ['33th', '32th', '34th', '32th'],
      Kannada: ['33th', '32th', '34th', '32th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 44 - 12 + 1 = 33th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 44 - 12 + १ = 33 वा.',
      Hindi: 'नीचे से स्थान = 44 - 12 + १ = 33।',
      Urdu: 'Bottom rank = Total - Top + 1 = 44 - 12 + 1 = 33th.',
      Gujarati: 'नीचे से स्थान = 44 - 12 + १ = 33।',
      Telugu: 'Bottom rank = Total - Top + 1 = 44 - 12 + 1 = 33th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 44 - 12 + 1 = 33th.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q21',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q22',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 7 (7³)?',
      Marathi: '7 चा घन (7³) किती?',
      Hindi: '7 का घन (7³) क्या होगा?',
      Urdu: 'What is the cube of 7 (7³)?',
      Gujarati: '7 का घन (7³) क्या होगा?',
      Telugu: 'What is the cube of 7 (7³)?',
      Kannada: 'What is the cube of 7 (7³)?'
    },
    options: {
      English: ['343', '323', '373', '21'],
      Marathi: ['343', '323', '373', '21'],
      Hindi: ['343', '323', '373', '21'],
      Urdu: ['343', '323', '373', '21'],
      Gujarati: ['343', '323', '373', '21'],
      Telugu: ['343', '323', '373', '21'],
      Kannada: ['343', '323', '373', '21']
    },
    correctIndex: 0,
    explanation: {
      English: '(7)³ = 343.',
      Marathi: '(7) चा घन = 343.',
      Hindi: '(7)³ = 343।',
      Urdu: '(7)³ = 343.',
      Gujarati: '(7)³ = 343।',
      Telugu: '(7)³ = 343.',
      Kannada: '(7)³ = 343.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q23',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q24',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q25',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q26',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q27',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q28',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q29',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s5_q30',
    testNumber: 5,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 45 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '45 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '45 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 45 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '45 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 45 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 45 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['34th', '33th', '35th', '33th'],
      Marathi: ['34 वा', '33 वा', '35 वा', '33 वा'],
      Hindi: ['34 वां', '33 वां', '35 वां', '33 वां'],
      Urdu: ['34th', '33th', '35th', '33th'],
      Gujarati: ['34 वां', '33 वां', '35 वां', '33 वां'],
      Telugu: ['34th', '33th', '35th', '33th'],
      Kannada: ['34th', '33th', '35th', '33th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 45 - 12 + 1 = 34th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 45 - 12 + १ = 34 वा.',
      Hindi: 'नीचे से स्थान = 45 - 12 + १ = 34।',
      Urdu: 'Bottom rank = Total - Top + 1 = 45 - 12 + 1 = 34th.',
      Gujarati: 'नीचे से स्थान = 45 - 12 + १ = 34।',
      Telugu: 'Bottom rank = Total - Top + 1 = 45 - 12 + 1 = 34th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 45 - 12 + 1 = 34th.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q21',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q22',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 8 (8³)?',
      Marathi: '8 चा घन (8³) किती?',
      Hindi: '8 का घन (8³) क्या होगा?',
      Urdu: 'What is the cube of 8 (8³)?',
      Gujarati: '8 का घन (8³) क्या होगा?',
      Telugu: 'What is the cube of 8 (8³)?',
      Kannada: 'What is the cube of 8 (8³)?'
    },
    options: {
      English: ['512', '492', '542', '24'],
      Marathi: ['512', '492', '542', '24'],
      Hindi: ['512', '492', '542', '24'],
      Urdu: ['512', '492', '542', '24'],
      Gujarati: ['512', '492', '542', '24'],
      Telugu: ['512', '492', '542', '24'],
      Kannada: ['512', '492', '542', '24']
    },
    correctIndex: 0,
    explanation: {
      English: '(8)³ = 512.',
      Marathi: '(8) चा घन = 512.',
      Hindi: '(8)³ = 512।',
      Urdu: '(8)³ = 512.',
      Gujarati: '(8)³ = 512।',
      Telugu: '(8)³ = 512.',
      Kannada: '(8)³ = 512.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q23',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q24',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q25',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q26',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q27',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q28',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q29',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s6_q30',
    testNumber: 6,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 46 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '46 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '46 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 46 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '46 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 46 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 46 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['35th', '34th', '36th', '34th'],
      Marathi: ['35 वा', '34 वा', '36 वा', '34 वा'],
      Hindi: ['35 वां', '34 वां', '36 वां', '34 वां'],
      Urdu: ['35th', '34th', '36th', '34th'],
      Gujarati: ['35 वां', '34 वां', '36 वां', '34 वां'],
      Telugu: ['35th', '34th', '36th', '34th'],
      Kannada: ['35th', '34th', '36th', '34th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 46 - 12 + 1 = 35th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 46 - 12 + १ = 35 वा.',
      Hindi: 'नीचे से स्थान = 46 - 12 + १ = 35।',
      Urdu: 'Bottom rank = Total - Top + 1 = 46 - 12 + 1 = 35th.',
      Gujarati: 'नीचे से स्थान = 46 - 12 + १ = 35।',
      Telugu: 'Bottom rank = Total - Top + 1 = 46 - 12 + 1 = 35th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 46 - 12 + 1 = 35th.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q21',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q22',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 9 (9³)?',
      Marathi: '9 चा घन (9³) किती?',
      Hindi: '9 का घन (9³) क्या होगा?',
      Urdu: 'What is the cube of 9 (9³)?',
      Gujarati: '9 का घन (9³) क्या होगा?',
      Telugu: 'What is the cube of 9 (9³)?',
      Kannada: 'What is the cube of 9 (9³)?'
    },
    options: {
      English: ['729', '709', '759', '27'],
      Marathi: ['729', '709', '759', '27'],
      Hindi: ['729', '709', '759', '27'],
      Urdu: ['729', '709', '759', '27'],
      Gujarati: ['729', '709', '759', '27'],
      Telugu: ['729', '709', '759', '27'],
      Kannada: ['729', '709', '759', '27']
    },
    correctIndex: 0,
    explanation: {
      English: '(9)³ = 729.',
      Marathi: '(9) चा घन = 729.',
      Hindi: '(9)³ = 729।',
      Urdu: '(9)³ = 729.',
      Gujarati: '(9)³ = 729।',
      Telugu: '(9)³ = 729.',
      Kannada: '(9)³ = 729.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q23',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q24',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q25',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q26',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q27',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q28',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q29',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s7_q30',
    testNumber: 7,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 47 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '47 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '47 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 47 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '47 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 47 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 47 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['36th', '35th', '37th', '35th'],
      Marathi: ['36 वा', '35 वा', '37 वा', '35 वा'],
      Hindi: ['36 वां', '35 वां', '37 वां', '35 वां'],
      Urdu: ['36th', '35th', '37th', '35th'],
      Gujarati: ['36 वां', '35 वां', '37 वां', '35 वां'],
      Telugu: ['36th', '35th', '37th', '35th'],
      Kannada: ['36th', '35th', '37th', '35th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 47 - 12 + 1 = 36th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 47 - 12 + १ = 36 वा.',
      Hindi: 'नीचे से स्थान = 47 - 12 + १ = 36।',
      Urdu: 'Bottom rank = Total - Top + 1 = 47 - 12 + 1 = 36th.',
      Gujarati: 'नीचे से स्थान = 47 - 12 + १ = 36।',
      Telugu: 'Bottom rank = Total - Top + 1 = 47 - 12 + 1 = 36th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 47 - 12 + 1 = 36th.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q21',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q22',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 10 (10³)?',
      Marathi: '10 चा घन (10³) किती?',
      Hindi: '10 का घन (10³) क्या होगा?',
      Urdu: 'What is the cube of 10 (10³)?',
      Gujarati: '10 का घन (10³) क्या होगा?',
      Telugu: 'What is the cube of 10 (10³)?',
      Kannada: 'What is the cube of 10 (10³)?'
    },
    options: {
      English: ['1000', '980', '1030', '30'],
      Marathi: ['1000', '980', '1030', '30'],
      Hindi: ['1000', '980', '1030', '30'],
      Urdu: ['1000', '980', '1030', '30'],
      Gujarati: ['1000', '980', '1030', '30'],
      Telugu: ['1000', '980', '1030', '30'],
      Kannada: ['1000', '980', '1030', '30']
    },
    correctIndex: 0,
    explanation: {
      English: '(10)³ = 1000.',
      Marathi: '(10) चा घन = 1000.',
      Hindi: '(10)³ = 1000।',
      Urdu: '(10)³ = 1000.',
      Gujarati: '(10)³ = 1000।',
      Telugu: '(10)³ = 1000.',
      Kannada: '(10)³ = 1000.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q23',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q24',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q25',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q26',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q27',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q28',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q29',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s8_q30',
    testNumber: 8,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 48 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '48 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '48 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 48 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '48 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 48 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 48 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['37th', '36th', '38th', '36th'],
      Marathi: ['37 वा', '36 वा', '38 वा', '36 वा'],
      Hindi: ['37 वां', '36 वां', '38 वां', '36 वां'],
      Urdu: ['37th', '36th', '38th', '36th'],
      Gujarati: ['37 वां', '36 वां', '38 वां', '36 वां'],
      Telugu: ['37th', '36th', '38th', '36th'],
      Kannada: ['37th', '36th', '38th', '36th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 48 - 12 + 1 = 37th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 48 - 12 + १ = 37 वा.',
      Hindi: 'नीचे से स्थान = 48 - 12 + १ = 37।',
      Urdu: 'Bottom rank = Total - Top + 1 = 48 - 12 + 1 = 37th.',
      Gujarati: 'नीचे से स्थान = 48 - 12 + १ = 37।',
      Telugu: 'Bottom rank = Total - Top + 1 = 48 - 12 + 1 = 37th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 48 - 12 + 1 = 37th.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q21',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q22',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 11 (11³)?',
      Marathi: '11 चा घन (11³) किती?',
      Hindi: '11 का घन (11³) क्या होगा?',
      Urdu: 'What is the cube of 11 (11³)?',
      Gujarati: '11 का घन (11³) क्या होगा?',
      Telugu: 'What is the cube of 11 (11³)?',
      Kannada: 'What is the cube of 11 (11³)?'
    },
    options: {
      English: ['1331', '1311', '1361', '33'],
      Marathi: ['1331', '1311', '1361', '33'],
      Hindi: ['1331', '1311', '1361', '33'],
      Urdu: ['1331', '1311', '1361', '33'],
      Gujarati: ['1331', '1311', '1361', '33'],
      Telugu: ['1331', '1311', '1361', '33'],
      Kannada: ['1331', '1311', '1361', '33']
    },
    correctIndex: 0,
    explanation: {
      English: '(11)³ = 1331.',
      Marathi: '(11) चा घन = 1331.',
      Hindi: '(11)³ = 1331।',
      Urdu: '(11)³ = 1331.',
      Gujarati: '(11)³ = 1331।',
      Telugu: '(11)³ = 1331.',
      Kannada: '(11)³ = 1331.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q23',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q24',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q25',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q26',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q27',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q28',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q29',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s9_q30',
    testNumber: 9,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 49 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '49 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '49 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 49 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '49 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 49 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 49 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['38th', '37th', '39th', '37th'],
      Marathi: ['38 वा', '37 वा', '39 वा', '37 वा'],
      Hindi: ['38 वां', '37 वां', '39 वां', '37 वां'],
      Urdu: ['38th', '37th', '39th', '37th'],
      Gujarati: ['38 वां', '37 वां', '39 वां', '37 वां'],
      Telugu: ['38th', '37th', '39th', '37th'],
      Kannada: ['38th', '37th', '39th', '37th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 49 - 12 + 1 = 38th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 49 - 12 + १ = 38 वा.',
      Hindi: 'नीचे से स्थान = 49 - 12 + १ = 38।',
      Urdu: 'Bottom rank = Total - Top + 1 = 49 - 12 + 1 = 38th.',
      Gujarati: 'नीचे से स्थान = 49 - 12 + १ = 38।',
      Telugu: 'Bottom rank = Total - Top + 1 = 49 - 12 + 1 = 38th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 49 - 12 + 1 = 38th.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q21',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 21,
    difficulty: 'difficult',
    type: 'series',
    questionText: {
      English: 'Find next number: 2, 6, 12, 20, 30, ?',
      Marathi: 'संख्या मालिकेतील पुढील संख्या ओळखा: २, ६, १२, २०, ३०, ?',
      Hindi: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Urdu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Gujarati: 'संख्या श्रृंखला का अगला पद ज्ञात करें: २, ६, १२, २०, ३०, ?',
      Telugu: 'Find next number: 2, 6, 12, 20, 30, ?',
      Kannada: 'Find next number: 2, 6, 12, 20, 30, ?'
    },
    options: {
      English: ['42', '40', '44', '36'],
      Marathi: ['४२', '४०', '४४', '३६'],
      Hindi: ['४२', '४०', '४४', '३६'],
      Urdu: ['42', '40', '44', '36'],
      Gujarati: ['४२', '४०', '४४', '३६'],
      Telugu: ['42', '40', '44', '36'],
      Kannada: ['42', '40', '44', '36']
    },
    correctIndex: 0,
    explanation: {
      English: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Marathi: 'फरक २ ने वाढतो: +४, +६, +८, +१०, +१२. ३० + १२ = ४२.',
      Hindi: 'अंतर २ से बढ़ रहा है: ४२।',
      Urdu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Gujarati: 'अंतर २ से बढ़ रहा है: ४२।',
      Telugu: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.',
      Kannada: 'Differences increase by +2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q22',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 22,
    difficulty: 'moderate',
    type: 'cubes',
    questionText: {
      English: 'What is the cube of 12 (12³)?',
      Marathi: '12 चा घन (12³) किती?',
      Hindi: '12 का घन (12³) क्या होगा?',
      Urdu: 'What is the cube of 12 (12³)?',
      Gujarati: '12 का घन (12³) क्या होगा?',
      Telugu: 'What is the cube of 12 (12³)?',
      Kannada: 'What is the cube of 12 (12³)?'
    },
    options: {
      English: ['1728', '1708', '1758', '36'],
      Marathi: ['1728', '1708', '1758', '36'],
      Hindi: ['1728', '1708', '1758', '36'],
      Urdu: ['1728', '1708', '1758', '36'],
      Gujarati: ['1728', '1708', '1758', '36'],
      Telugu: ['1728', '1708', '1758', '36'],
      Kannada: ['1728', '1708', '1758', '36']
    },
    correctIndex: 0,
    explanation: {
      English: '(12)³ = 1728.',
      Marathi: '(12) चा घन = 1728.',
      Hindi: '(12)³ = 1728।',
      Urdu: '(12)³ = 1728.',
      Gujarati: '(12)³ = 1728।',
      Telugu: '(12)³ = 1728.',
      Kannada: '(12)³ = 1728.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q23',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 23,
    difficulty: 'moderate',
    type: 'alphabet',
    questionText: {
      English: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Marathi: 'उलट अक्षरमालेनुसार (A↔Z, B↔Y, C↔X) BOY चा सांकेतिक शब्द कोणता?',
      Hindi: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Urdu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Gujarati: 'विपरीत वर्णमाला कोड (A↔Z, B↔Y) में BOY का कोड क्या होगा?',
      Telugu: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?',
      Kannada: 'In reverse alphabet pair code (A↔Z, B↔Y, C↔X), what is the code for BOY?'
    },
    options: {
      English: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Marathi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Hindi: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Urdu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Gujarati: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Telugu: ['YLB', 'ZMA', 'XKA', 'YLA'],
      Kannada: ['YLB', 'ZMA', 'XKA', 'YLA']
    },
    correctIndex: 0,
    explanation: {
      English: 'B↔Y, O↔L, Y↔B => YLB.',
      Marathi: 'B चा जोडीदार Y, O चा L, Y चा B = YLB.',
      Hindi: 'YLB सही कोड है।',
      Urdu: 'B↔Y, O↔L, Y↔B => YLB.',
      Gujarati: 'YLB सही कोड है।',
      Telugu: 'B↔Y, O↔L, Y↔B => YLB.',
      Kannada: 'B↔Y, O↔L, Y↔B => YLB.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q24',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 24,
    difficulty: 'moderate',
    type: 'coding',
    questionText: {
      English: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Marathi: 'जर एका भाषेत TEACHER = VGCEJGT (+२), तर STUDENT चा कोड काय?',
      Hindi: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Urdu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Gujarati: 'यदि TEACHER = VGCEJGT (+२) है, तो STUDENT का कोड क्या होगा?',
      Telugu: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?',
      Kannada: 'If TEACHER is coded as VGCEJGT (+2), how is STUDENT coded?'
    },
    options: {
      English: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Marathi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Hindi: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Urdu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Gujarati: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Telugu: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV'],
      Kannada: ['UVWFGPV', 'TUVEFOU', 'VWXGHPW', 'UTVEFOV']
    },
    correctIndex: 0,
    explanation: {
      English: 'Each letter shifted forward by +2.',
      Marathi: 'प्रत्येक अक्षर +२ ने पुढे सरकवले आहे.',
      Hindi: '+२ की वृद्धि।',
      Urdu: 'Each letter shifted forward by +2.',
      Gujarati: '+२ की वृद्धि।',
      Telugu: 'Each letter shifted forward by +2.',
      Kannada: 'Each letter shifted forward by +2.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q25',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 25,
    difficulty: 'difficult',
    type: 'logic',
    questionText: {
      English: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Marathi: 'विधाने: सर्व गुलाब ही फुले आहेत. सर्व फुले सुंदर आहेत. निष्कर्ष:',
      Hindi: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Urdu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Gujarati: 'कथन: सभी गुलाब फूल हैं। सभी फूल सुंदर हैं। निष्कर्ष:',
      Telugu: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:',
      Kannada: 'Statements: All roses are flowers. All flowers are beautiful. Conclusion:'
    },
    options: {
      English: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Marathi: ['सर्व गुलाब सुंदर आहेत', 'एकही गुलाब सुंदर नाही', 'काही गुलाब फुले नाहीत', 'सर्व फुले गुलाब आहेत'],
      Hindi: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Urdu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Gujarati: ['सभी गुलाब सुंदर हैं', 'कोई गुलाब सुंदर नहीं है', 'कुछ गुलाब फूल नहीं हैं', 'सभी फूल गुलाब हैं'],
      Telugu: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses'],
      Kannada: ['All roses are beautiful', 'No rose is beautiful', 'Some roses are not flowers', 'Flowers are roses']
    },
    correctIndex: 0,
    explanation: {
      English: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Marathi: 'गुलाब ⊂ फुले ⊂ सुंदर => सर्व गुलाब सुंदर आहेत.',
      Hindi: 'सभी गुलाब सुंदर हैं।',
      Urdu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Gujarati: 'सभी गुलाब सुंदर हैं।',
      Telugu: 'If A ⊂ B and B ⊂ C, then A ⊂ C.',
      Kannada: 'If A ⊂ B and B ⊂ C, then A ⊂ C.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q26',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 26,
    difficulty: 'moderate',
    type: 'relationship',
    questionText: {
      English: 'Pointing to a boy, Arun said: \'He is the son of my father\\\'s only son.\' Who is the boy to Arun?',
      Marathi: 'एका मुलाकडे बोट दाखवून अरुण म्हणाला: \'हा माझ्या वडिलांच्या एकुलत्या एका मुलाचा मुलगा आहे.\' तो मुलगा अरुणचा कोण?',
      Hindi: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \'यह मेरे पिता के इकलौते बेटे का बेटा है।\' लड़का अरुण का क्या है?',
      Urdu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Gujarati: 'एक लड़के की ओर इशारा करते हुए अरुण ने कहा: \\\'यह मेरे पिता के इकलौते बेटे का बेटा है।\\\' लड़का अरुण का क्या है?',
      Telugu: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?',
      Kannada: 'Pointing to a boy, Arun said: \\\'He is the son of my father\\\\\\\'s only son.\\\' Who is the boy to Arun?'
    },
    options: {
      English: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Marathi: ['मुलगा', 'भाऊ', 'भाचा', 'काका'],
      Hindi: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Urdu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Gujarati: ['बेटा', 'भाई', 'भतीजा', 'चाचा'],
      Telugu: ['Son', 'Brother', 'Nephew', 'Uncle'],
      Kannada: ['Son', 'Brother', 'Nephew', 'Uncle']
    },
    correctIndex: 0,
    explanation: {
      English: 'Father\'s only son is Arun himself. His son is Arun\'s son.',
      Marathi: 'वडिलांचा एकुलता एक मुलगा म्हणजे स्वतः अरुण. त्याचा मुलगा म्हणजे अरुणचा मुलगा.',
      Hindi: 'अरुण का बेटा।',
      Urdu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Gujarati: 'अरुण का बेटा।',
      Telugu: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.',
      Kannada: 'Father\\\'s only son is Arun himself. His son is Arun\\\'s son.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q27',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 27,
    difficulty: 'moderate',
    type: 'direction',
    questionText: {
      English: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Marathi: 'एक व्यक्ती उत्तरेकडे ८ किमी जातो, नंतर पश्चिमेकडे वळून ६ किमी जातो. तो मूळ जागेपासून किती अंतरावर आहे?',
      Hindi: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Urdu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Gujarati: 'एक व्यक्ति उत्तर में ८ किमी जाता है, फिर पश्चिम मुड़कर ६ किमी जाता है। वह आरंभिक बिंदु से कितनी दूरी पर है?',
      Telugu: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?',
      Kannada: 'A man walks 8 km North, then turns West and walks 6 km. How far is he from the starting point?'
    },
    options: {
      English: ['10 km', '14 km', '12 km', '8 km'],
      Marathi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Hindi: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Urdu: ['10 km', '14 km', '12 km', '8 km'],
      Gujarati: ['१० किमी', '१४ किमी', '१२ किमी', '८ किमी'],
      Telugu: ['10 km', '14 km', '12 km', '8 km'],
      Kannada: ['10 km', '14 km', '12 km', '8 km']
    },
    correctIndex: 0,
    explanation: {
      English: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Marathi: 'कर्ण = √(८² + ६²) = √१०० = १० किमी.',
      Hindi: '१० किमी दूरी।',
      Urdu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Gujarati: '१० किमी दूरी।',
      Telugu: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.',
      Kannada: 'Distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q28',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 28,
    difficulty: 'moderate',
    type: 'clock',
    questionText: {
      English: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Marathi: 'घड्याळात ३:३० वाजता तासकाटा आणि मिनिटकाटा यांमध्ये किती अंशांचा कोन असतो?',
      Hindi: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Urdu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Gujarati: 'घड़ी में ३:३० बजे दोनों सुइयों के बीच कितने अंश का कोण होता है?',
      Telugu: 'What is the angle between the hour and minute hand of a clock at 3:30?',
      Kannada: 'What is the angle between the hour and minute hand of a clock at 3:30?'
    },
    options: {
      English: ['75°', '90°', '60°', '85°'],
      Marathi: ['७५°', '९०°', '६०°', '८५°'],
      Hindi: ['७५°', '९०°', '६०°', '८५°'],
      Urdu: ['75°', '90°', '60°', '85°'],
      Gujarati: ['७५°', '९०°', '६०°', '८५°'],
      Telugu: ['75°', '90°', '60°', '85°'],
      Kannada: ['75°', '90°', '60°', '85°']
    },
    correctIndex: 0,
    explanation: {
      English: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Marathi: 'कोन = |(३० × ३) - (५.५ × ३०)| = |९० - १६५| = ७५°.',
      Hindi: '७५° कोण बनता है।',
      Urdu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Gujarati: '७५° कोण बनता है।',
      Telugu: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.',
      Kannada: 'Angle = |(30 × 3) - (5.5 × 30)| = |90 - 165| = 75°.'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q29',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 29,
    difficulty: 'moderate',
    type: 'calendar',
    questionText: {
      English: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Marathi: 'जर १ जानेवारी २०२४ (लीप वर्ष) ला सोमवार होता, तर ३१ डिसेंबर २०२४ ला कोणता वार असेल?',
      Hindi: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Urdu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Gujarati: 'यदि १ जनवरी २०२४ (लीप वर्ष) को सोमवार था, तो ३१ दिसंबर २०२४ को कौन सा दिन था?',
      Telugu: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?',
      Kannada: 'If 1st January 2024 (leap year) was Monday, what day was 31st December 2024?'
    },
    options: {
      English: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Marathi: ['मंगळवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Hindi: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Urdu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Gujarati: ['मंगलवार', 'सोमवार', 'बुधवार', 'रविवार'],
      Telugu: ['Tuesday', 'Monday', 'Wednesday', 'Sunday'],
      Kannada: ['Tuesday', 'Monday', 'Wednesday', 'Sunday']
    },
    correctIndex: 0,
    explanation: {
      English: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Marathi: 'लीप वर्षात वर्षाचा शेवटचा दिवस पहिल्या दिवसापेक्षा एक वार पुढे असतो (मंगळवार).',
      Hindi: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Urdu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Gujarati: 'लीप वर्ष में ३१ दिसंबर १ दिन आगे (मंगलवार) होता है।',
      Telugu: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).',
      Kannada: 'In a leap year, 31st December is 1 day ahead of 1st January (Tuesday).'
    },
    marks: 2
  },
  {
    id: 'std7_s10_q30',
    testNumber: 10,
    section: 'Intelligence Test',
    subject: 'Intelligence Test',
    questionNumberInSet: 30,
    difficulty: 'moderate',
    type: 'ranking',
    questionText: {
      English: 'In a class of 50 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Marathi: '50 विद्यार्थ्यांच्या वर्गात राहुलचा वरून 12 वा क्रमांक आहे, तर खालून त्याचा कितवा क्रमांक असेल?',
      Hindi: '50 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Urdu: 'In a class of 50 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Gujarati: '50 विद्यार्थियों की कक्षा में राहुल का ऊपर से 12 वां स्थान है, नीचे से उसका स्थान क्या होगा?',
      Telugu: 'In a class of 50 students, Rahul ranks 12th from the top. What is his rank from the bottom?',
      Kannada: 'In a class of 50 students, Rahul ranks 12th from the top. What is his rank from the bottom?'
    },
    options: {
      English: ['39th', '38th', '40th', '38th'],
      Marathi: ['39 वा', '38 वा', '40 वा', '38 वा'],
      Hindi: ['39 वां', '38 वां', '40 वां', '38 वां'],
      Urdu: ['39th', '38th', '40th', '38th'],
      Gujarati: ['39 वां', '38 वां', '40 वां', '38 वां'],
      Telugu: ['39th', '38th', '40th', '38th'],
      Kannada: ['39th', '38th', '40th', '38th']
    },
    correctIndex: 0,
    explanation: {
      English: 'Bottom rank = Total - Top + 1 = 50 - 12 + 1 = 39th.',
      Marathi: 'खालून क्रमांक = एकूण - वरून + १ = 50 - 12 + १ = 39 वा.',
      Hindi: 'नीचे से स्थान = 50 - 12 + १ = 39।',
      Urdu: 'Bottom rank = Total - Top + 1 = 50 - 12 + 1 = 39th.',
      Gujarati: 'नीचे से स्थान = 50 - 12 + १ = 39।',
      Telugu: 'Bottom rank = Total - Top + 1 = 50 - 12 + 1 = 39th.',
      Kannada: 'Bottom rank = Total - Top + 1 = 50 - 12 + 1 = 39th.'
    },
    marks: 2
  }
];
