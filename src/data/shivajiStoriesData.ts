export interface ShivajiStory {
  id: string;
  order: number;
  year: string;
  location: string;
  title: {
    English: string;
    Marathi: string;
    Hindi: string;
  };
  summary: {
    English: string;
    Marathi: string;
    Hindi: string;
  };
  moral: {
    English: string;
    Marathi: string;
    Hindi: string;
  };
  paragraphs: {
    English: string[];
    Marathi: string[];
    Hindi: string[];
  };
}

// 50 Chronological Historical Stories of Chhatrapati Shivaji Maharaj
// Each story has full text in English, Marathi, and Hindi
export const SHIVAJI_STORIES: ShivajiStory[] = [
  {
    id: 'SHIVAJI-01',
    order: 1,
    year: '1630 CE',
    location: 'Shivneri Fort, Junnar',
    title: {
      English: 'The Birth of a Visionary at Shivneri',
      Marathi: 'शिवनेरीवर शिवबांचा जन्म',
      Hindi: 'शिवनेरी दुर्ग पर शिवबा का जन्म'
    },
    summary: {
      English: 'On the sacred hill of Shivneri, Jijau gives birth to a prince destined to establish Swarajya.',
      Marathi: 'शिवनेरीच्या पावन भूमीवर मातोश्री जिजाऊंच्या पोटी स्वराज्य संस्थापकाचा जन्म झाला.',
      Hindi: 'शिवनेरी की पावन धरती पर माता जीजाबाई की कोख से स्वराज्य संस्थापक का जन्म हुआ।'
    },
    moral: {
      English: 'Great leaders are born with divine destiny and nurtured with noble virtues.',
      Marathi: 'महान संस्कार आणि दृढ निष्ठा यामुळेच युगपुरुष घडतात.',
      Hindi: 'उच्च संस्कार और अटूट निष्ठा ही महान युगपुरुषों का निर्माण करते हैं।'
    },
    paragraphs: {
      English: [
        'On 19th February 1630, the fortress of Shivneri in Junnar resonated with auspicious sounds of victory drums and divine conches. Mother Jijabai had prayed ardently to Goddess Shivai for a brave son who would free the common people from foreign oppression.',
        'When the radiant baby boy opened his eyes, the hill fort of Shivneri shone with joy. As a blessing from Goddess Shivai, the newborn was named Shivaji with heartfelt reverence and prayers for Maharashtra.',
        'From his earliest infancy, baby Shivaji listened to the soothing lullabies composed of valor, justice, and the righteous legends of Lord Rama, Krishna, and the Mahabharata sung lovingly by Jijau.'
      ],
      Marathi: [
        '१९ फेब्रुवारी १६३० रोजी जुन्नरच्या शिवनेरी दुर्गावर आनंदाची नौबत झडली. परकीय आक्रमकांच्या जुलमातून प्रजेला मुक्त करणारा पराक्रमी पुत्र लाभावा म्हणून जिजाऊंनी शिवाई देवीला नवस केला होता.',
        'जेव्हा त्या तेजस्वी बालकाने डोळे उघडले, तेव्हा शिवनेरी गडावर आनंदाचे वातावरण पसरले. शिवाई देवीच्या आशीर्वादाने या तेजस्वी बालकाचे नाव "शिवाजी" ठेवण्यात आले.',
        'लहानपणापासूनच शिवबांनी जिजाऊंच्या मांडीवर बसून रामायण, महाभारत आणि पराक्रमाच्या अमृतकथा ऐकल्या आणि स्वराज्याचे बीज मनात रुजवले.'
      ],
      Hindi: [
        '१९ फरवरी १६३० को जुन्नर के ऐतिहासिक शिवनेरी दुर्ग पर शहनाइयां और नगाड़े बज उठे। माता जीजाबाई ने शिवाई देवी से एक ऐसे पराक्रमी पुत्र की प्रार्थना की थी जो निर्दोष जनता को अत्याचार से मुक्त कराए।',
        'जब उस तेजस्वी बालक ने जन्म लिया, तो पूरे दुर्ग में हर्षोल्लास छा गया। शिवाई देवी के अनुग्रह से उनका नाम "शिवाजी" रखा गया।',
        'बालक शिवाजी ने माता जीजाबाई से बचपन में ही रामायण, महाभारत और शूरवीरों की वीरगाथाएं सुनकर न्याय और धर्म की सीख पाई।'
      ]
    }
  },
  {
    id: 'SHIVAJI-02',
    order: 2,
    year: '1636-1640 CE',
    location: 'Bangalore & Pune',
    title: {
      English: 'Jijau’s Moral Training and Royal Seal',
      Marathi: 'जिजाऊंची शिकवण आणि राजमुद्रेची प्रतिष्ठापना',
      Hindi: 'जीजाऊ की शिक्षा और राजमुद्रा की स्थापना'
    },
    summary: {
      English: 'Young Shivaji is instructed in military tactics, horse riding, and gifted the Sanskrit Rajmudra.',
      Marathi: 'शिवरायांना जिजाऊंनी न्यायप्रियता, तलवारबाजी शिकवली आणि संस्कृत राजमुद्रा बहाल केली.',
      Hindi: 'बाल शिवाजी को न्याय, अस्त्र-शस्त्र की शिक्षा मिली और संस्कृत राजमुद्रा सौंपी गई।'
    },
    moral: {
      English: 'A ruler must exist solely for the welfare of the people.',
      Marathi: 'राजाचे अस्तित्व केवळ प्रजेच्या कल्याणासाठी आणि संरक्षणासाठी असते.',
      Hindi: 'राजा का सर्वोच्च कर्तव्य प्रजा का हित और सुरक्षा है।'
    },
    paragraphs: {
      English: [
        'Shahaji Raje appointed capable teachers and guardians including Dadoji Konddeo to instruct young Shivaji in statecraft, archery, fencing, and horse riding across the Sahyadri mountains.',
        'Jijau inculcated deep respect for women, farmers, and scholars. She declared that under their rule, even the humblest farmer would sleep peacefully without fear of plunder.',
        'At Pune, Shivaji Raje was endowed with the legendary Sanskrit Royal Seal (Rajmudra): "Ever-increasing like the crescent moon, and adorned by the world, this seal of Shivaji, son of Shahaji, shines for universal welfare."'
      ],
      Marathi: [
        'शहाजीराजांनी शिवबांच्या शिक्षणासाठी दादोजी कोंडदेव आणि अनुभवी मार्गदर्शकांची नेमणूक केली. त्यांनी शिवबांना युद्धकला, घोडदौड आणि प्रशासन शिकवले.',
        'मातोश्री जिजाऊंनी शिवबांच्या मनात महिलांचा सन्मान आणि शेतकऱ्यांवर जीवापाड प्रेम करण्याची शिकवण रुजवली.',
        'पुण्यात शिवरायांना संस्कृत राजमुद्रा प्रदान करण्यात आली: "प्रतिपच्चंद्रलेखेव वर्धिष्णुर्विश्ववंदिता, शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते।" म्हणजेच प्रजेच्या कल्याणासाठी ही मुद्रा झळकत आहे.'
      ],
      Hindi: [
        'शाहजी राजे ने बालक शिवाजी को युद्ध कला, तीरंदाजी, घुड़सवारी और राजकाज सिखाने हेतु योग्य गुरु नियुक्त किए।',
        'माता जीजाबाई ने सिखाया कि महिलाओं का सम्मान और किसानों का कल्याण ही एक सच्चे शासक का मूल धर्म है।',
        'पुणे में शिवराया को संस्कृत राजमुद्रा सौंपी गई, जिसका अर्थ था कि जैसे प्रतिपदा का चंद्रमा बढ़ता है, वैसे ही यह मुद्रा लोक-कल्याण के लिए निरंतर बढ़ेगी।'
      ]
    }
  },
  {
    id: 'SHIVAJI-03',
    order: 3,
    year: '1645 CE',
    location: 'Rohideshwar Temple, Bhor',
    title: {
      English: 'The Sacred Oath of Swarajya',
      Marathi: 'रोहिडेश्वराच्या मंदिरात स्वराज्याची शपथ',
      Hindi: 'रोहिडेश्वर मंदिर में स्वराज्य की शपथ'
    },
    summary: {
      English: 'At just fifteen, Shivaji and his young Mawala companions cut their thumbs to offer their blood to Lord Shiva for self-rule.',
      Marathi: 'वयाच्या १५ व्या वर्षी मावळ्यांसह शिवरायांनी रोहिडेश्वराला स्वतःच्या रक्ताने अभिषेक करून हिंदवी स्वराज्याची शपथ घेतली.',
      Hindi: 'मात्र १५ वर्ष की आयु में शिवाजी ने अपने बाल सखा मावलों संग शिवजी को रक्त अर्पित कर स्वराज्य की प्रतिज्ञा ली।'
    },
    moral: {
      English: 'Supreme causes require uncompromising dedication and selfless comradeship.',
      Marathi: 'उदात्त ध्येयासाठी निःस्वार्थ निष्ठा आणि एकजूट आवश्यक असते.',
      Hindi: 'महान संकल्प के लिए निःस्वार्थ समर्पण और अटूट एकता जरूरी है।'
    },
    paragraphs: {
      English: [
        'In the sacred sanctuary of Rohideshwar temple nestled high in the misty Sahyadri hills, fifteen-year-old Shivaji assembled his devoted childhood friends: Tanaji Malusare, Yesaji Kank, and Baji Pasalkar.',
        'Standing before the Shiva Lingam, young Shivaji drew his dagger and cut his thumb, letting sacred drops of blood fall upon the deity, declaring that Maharashtra must belong to its own free sons.',
        'All the young Mawalas cheered with tears of devotion, pledging their lives, swords, and breaths to create a sovereign homeland where no tyrant could ever torture the weak.'
      ],
      Marathi: [
        'सह्याद्रीच्या कडेकपारीत वसलेल्या रोहिडेश्वराच्या पुरातन मंदिरात १५ वर्षांच्या शिवबांनी आपले विश्वासू बालसखे तानाजी मालुसरे, येसाजी कंक आणि बाजी पासलकर यांना एकत्र केले.',
        'शिवलिंगासमोर उभे राहून शिवरायांनी आपल्या करंगळीला कट्यार लावली आणि रक्ताने महादेवाला अभिषेक केला. त्यांनी गर्जना केली: "हे राज्य व्हावे, हे तो श्रींची इच्छा!"',
        'सर्व मावळ्यांनी एका सुरात प्राण गेले तरी स्वराज्य स्थापन करण्याचा निश्चय केला आणि सह्याद्रीच्या दर्‍याखोऱ्यात स्वराज्याची मशाल पेटली.'
      ],
      Hindi: [
        'सह्याद्रि के घने जंगलों में स्थित रोहिडेश्वर मंदिर में पंद्रह वर्षीय शिवाजी ने अपने वीर मित्रों तानाजी मालुसरे और येसाजी कंक को एकत्रित किया।',
        'शिवलिंग के समक्ष अपनी उंगली काटकर रक्त अर्पित करते हुए शिवाजी ने घोषणा की कि यह राज्य परमात्मा की इच्छा से स्वतंत्र बनेगा।',
        'सभी मावलों ने एक स्वर में अपने प्राणों की आहुति देकर भी स्वराज्य स्थापित करने की अटल शपथ ली।'
      ]
    }
  },
  {
    id: 'SHIVAJI-04',
    order: 4,
    year: '1646 CE',
    location: 'Torna Fort (Prachandgad)',
    title: {
      English: 'Conquest of Torna: The First Fort of Freedom',
      Marathi: 'तोरणा गडाची पहिली विजयपताका',
      Hindi: 'तोरणा दुर्ग पर प्रथम विजय'
    },
    summary: {
      English: 'Shivaji captures Torna Fort without bloodshed, finding buried treasure and renaming it Prachandgad.',
      Marathi: 'शिवरायांनी तोरणा गड जिंकून त्यावर भगवा फडकवला आणि सापडलेल्या खजिन्याचा वापर किल्ले बांधणीसाठी केला.',
      Hindi: 'शिवाजी ने बिना रक्तपात के तोरणा दुर्ग जीतकर भगवा ध्वज फहराया और मिले खजाने से अन्य दुर्ग सुदृढ़ किए।'
    },
    moral: {
      English: 'Courage paired with strategic restraint brings triumphant success.',
      Marathi: 'धैर्य आणि रणनीती यांच्या बळावर अशक्य कामेही शक्य होतात.',
      Hindi: 'साहस और कूटनीति के मेल से असंभव कार्य भी सिद्ध होते हैं।'
    },
    paragraphs: {
      English: [
        'Torna was a majestic, soaring fortress standing like a sentinel in the Pune region. Seeing its strategic importance and Adilshahi neglect, Shivaji planned a bold nocturnal entry.',
        'Without shedding innocent blood, Shivaji’s agile Mawalas climbed the rugged precipices and hoisted the saffron Bhagwa flag high over the ramparts. In celebration of its sheer magnificence, he called it Prachandgad.',
        'While repairing the dilapidated walls, laborers discovered huge copper urns laden with ancient gold coins. Shivaji refused to take a single coin for personal luxury, channeling every gold mohur into armaments and fort renovations.'
      ],
      Marathi: [
        'तोरणा किल्ला गगनाला भिडणारा आणि अत्यंत मोक्याचा गड होता. आदिलशाहीचे या गडाकडे दुर्लक्ष असल्याचे पाहून शिवरायांनी युक्तीने गडाचा ताबा घेण्याची योजना आखली.',
        'मावळ्यांनी रात्रीच्या वेळी गडावर चढाई केली आणि एकाही निष्पाप व्यक्तीचे रक्त न सांडता तोरण्यावर भगवा फडकवला. गडाचे नाव प्रचंडगड ठेवण्यात आले.',
        'तोरण्याच्या दुरुस्तीचे काम सुरू असताना सोन्याने भरलेल्या तांब्याच्या घागरी सापडल्या. शिवरायांनी त्यातील एकही नाणे स्वतःसाठी न वापरता सर्व खजिना स्वराज्याच्या संरक्षणासाठी लावला.'
      ],
      Hindi: [
        'तोरणा दुर्ग सह्याद्रि की एक अत्यंत सामरिक पहाड़ी थी। आदिलशाही की लापरवाही देखकर शिवाजी ने इस पर अधिकार करने की योजना बनाई।',
        'बिना किसी रक्तपात के मावलों ने दुर्ग पर भगवा ध्वज फहरा दिया और इसके भव्य स्वरूप को देखकर इसे "प्रचंडगढ़" नाम दिया गया।',
        'दुर्ग की मरम्मत के समय मिले विशाल स्वर्ण खजाने को शिवाजी ने अपने व्यक्तिगत सुख के बजाय केवल स्वराज्य रक्षा और सेना निर्माण में लगाया।'
      ]
    }
  },
  {
    id: 'SHIVAJI-05',
    order: 5,
    year: '1647 CE',
    location: 'Murumbdev / Rajgad',
    title: {
      English: 'Building Rajgad: The King of Forts',
      Marathi: 'राजगडाची उभारणी: गडांचा राजा',
      Hindi: 'राजगढ़ का निर्माण: दुर्गों का राजा'
    },
    summary: {
      English: 'Shivaji fortifies the Murumbdev mountain, turning it into the impregnable first capital of Swarajya.',
      Marathi: 'मुरुंबदेवाच्या डोंगरावर शिवरायांनी अभेद्य राजगड उभारला, जो स्वराज्याची पहिली राजधानी बनला.',
      Hindi: 'मुरुंबदेव पर्वत पर शिवाजी ने अजेय राजगढ़ का निर्माण कराया, जो स्वराज्य की प्रथम राजधानी बना।'
    },
    moral: {
      English: 'A strong foundation ensures enduring security for generations.',
      Marathi: 'मजबूत पाया रचल्याशिवाय कायमस्वरूपी यश टिकू शकत नाही.',
      Hindi: 'मजबूत नींव ही किसी महान साम्राज्य को चिरस्थायी बनाती है।'
    },
    paragraphs: {
      English: [
        'Adjacent to Torna stood the towering peak of Murumbdev. Shivaji realized that whoever controlled this formidable summit would master the whole valley of Mawala.',
        'Using the gold discovered at Torna, master stonemasons and hill scouts erected high ramparts, bastions, and three protective ridges (Māchis): Suvela, Padmavati, and Sanjivani.',
        'He renamed this masterpiece "Rajgad" — the King of Forts. For more than twenty-five glorious years, Rajgad served as the beating heart and sovereign capital of Shivaji Maharaj.'
      ],
      Marathi: [
        'तोरण्याजवळ मुरुंबदेवाचा डोंगर आकाशाशी स्पर्धा करत उभा होता. या डोंगरावर गड उभारल्यास संपूर्ण मावळ भागावर नियंत्रण ठेवता येईल हे शिवरायांनी जाणले.',
        'तोरण्यावर सापडलेल्या धनाचा वापर करून कारागिरांनी सुवेळा, पद्मावती आणि संजीवनी या तीन माच्या आणि अभेद्य बालेकिल्ला उभारला.',
        'या गडाला "राजगड" नाव देण्यात आले. पुढील २५ वर्षे राजगड हीच हिंदवी स्वराज्याची पहिली अभिमानास्पद राजधानी राहिली.'
      ],
      Hindi: [
        'तोरणा के निकट स्थित मुरुंबदेव पर्वत अत्यंत दुर्गम था। शिवाजी ने भांप लिया कि यह स्थान स्वराज्य की रक्षा का मुख्य केंद्र बन सकता है।',
        'तोरणा से प्राप्त धन से सुवेला, पद्मावती और संजीवनी माचियों का सुदृढ़ निर्माण कराया गया।',
        'इस दुर्ग का नाम "राजगढ़" रखा गया, जिसने अगले २५ वर्षों तक स्वराज्य की राजधानी बनकर इतिहास रचा।'
      ]
    }
  },
  {
    id: 'SHIVAJI-06',
    order: 6,
    year: '1648 CE',
    location: 'Purandar Fort',
    title: {
      English: 'The Diplomatic Acquisition of Purandar',
      Marathi: 'पुरंदर गडाचा सामोपचाराने ताबा',
      Hindi: 'पुरंदर दुर्ग पर कूटनीतिक अधिकार'
    },
    summary: {
      English: 'Shivaji resolves an internal family dispute among the Nilkanthrao brothers peacefully, bringing Purandar into Swarajya.',
      Marathi: 'निलकंठराव बंधूंमधील वाद मिटवून शिवरायांनी पुरंदर किल्ला शांततेने स्वराज्यात समाविष्ट केला.',
      Hindi: 'नीलकंठराव भाइयों के विवाद को सुलझाकर शिवाजी ने शांतिपूर्वक पुरंदर दुर्ग को स्वराज्य में मिलाया।'
    },
    moral: {
      English: 'True wisdom resolves conflicts through reconciliation rather than bloodshed.',
      Marathi: 'रक्तपात टाळून समजूतदारपणाने विजय मिळवणे हेच मुत्सद्देगिरीचे लक्षण आहे.',
      Hindi: 'विवाद को सुलझाकर सहयोग प्राप्त करना ही सच्ची कूटनीति है।'
    },
    paragraphs: {
      English: [
        'Purandar was a colossal fort guarding Pune. Its keepers, the Nilkanthrao brothers, were engaged in bitter internal discord after their father’s death.',
        'Invited by the brothers to arbitrate, Shivaji arrived during Diwali festivities. With immense patience and tact, he mediated their differences and ensured equitable jagirs for each brother.',
        'Recognizing Shivaji’s nobility and visionary leadership, the garrison voluntarily swore loyalty to Swarajya, adding a vital shield against any Bijapur invasion.'
      ],
      Marathi: [
        'पुरंदर किल्ला पुणे परगण्याचे मुख्य संरक्षक कवच होता. तेथील किल्लेदार निलकंठराव बंधूंमध्ये वडिलांच्या निधनानंतर वाद सुरू होता.',
        'दिवाळीच्या सणात शिवरायांना मध्यस्थीसाठी बोलावण्यात आले. शिवरायांनी अत्यंत कुशलतेने बंधूंची समजूत काढली आणि त्यांचे हक्क सुरक्षित केले.',
        'शिवरायांचे न्यायप्रिय वर्तन पाहून पुरंदरच्या सैन्याने आनंदाने स्वराज्याची सेवा स्वीकारली आणि पुरंदर स्वराज्याचा अभेद्य आधार बनला.'
      ],
      Hindi: [
        'पुरंदर दुर्ग पुणे क्षेत्र का प्रहरी था। दुर्गपाल नीलकंठराव भाइयों के बीच मतभेद उत्पन्न हो गए थे।',
        'दिवाली के पावन अवसर पर शिवाजी ने भाइयों के विवाद का न्यायसंगत समाधान किया और उन्हें सम्मानजनक जागीरें दीं।',
        'शिवाजी के निष्पक्ष न्याय से प्रभावित होकर पुरंदर की सेना ने स्वेच्छा से स्वराज्य की सेवा स्वीकार कर ली।'
      ]
    }
  },
  {
    id: 'SHIVAJI-07',
    order: 7,
    year: '1649 CE',
    location: 'Bijapur & Delhi',
    title: {
      English: 'Securing the Release of Father Shahaji Raje',
      Marathi: 'पिता शहाजीराजांची सन्मानपूर्वक सुटका',
      Hindi: 'पिता शाहजी राजे की सम्मानजनक मुक्ति'
    },
    summary: {
      English: 'Shivaji writes masterly letters to Mughal Emperor Shah Jahan, using geopolitical leverage to free his captured father.',
      Marathi: 'शिवरायांनी मुघल बादशहा शाहजहानशी हुशारीने पत्रव्यवहार करून विजापूरच्या कैदेतून वडिलांची सुटका करवून घेतली.',
      Hindi: 'शिवाजी ने मुगल बादशाह शाहजहां से कूटनीतिक पत्रव्यवहार कर अपने पिता को बीजापुर के बंदीगृह से मुक्त कराया।'
    },
    moral: {
      English: 'Filial devotion coupled with geopolitical intellect can outmaneuver any empire.',
      Marathi: 'मातृ-पितृ भक्ती आणि राजकीय चातुर्य कोणत्याही संकटावर मात करू शकते.',
      Hindi: 'पितृभक्ति और बुद्धिमत्ता से बड़े से बड़े साम्राज्य को भी झुकना पड़ता है।'
    },
    paragraphs: {
      English: [
        'Infuriated by Shivaji’s growing independence, the Sultan of Adilshah arrested his father, Shahaji Raje, in Jinji through deceit, threatening his execution unless forts were returned.',
        'Refusing to panic or surrender his dream of Swarajya, young Shivaji initiated high-stakes diplomacy with Mughal Emperor Shah Jahan in Agra, expressing interest in entering imperial alliance.',
        'Fearing a joint Mughal-Maratha offensive, the Adilshahi court quickly released Shahaji Raje with honors, teaching Shivaji the immense power of statesmanship.'
      ],
      Marathi: [
        'शिवरायांचे वाढते सामर्थ्य पाहून आदिलशहाने कपटाने त्यांचे वडील शहाजीराजे यांना कर्नाटकात बंदी बनवले आणि किल्ले परत करण्याची धमकी दिली.',
        'शिवरायांनी धीर न सोडता थेट दिल्लीचा मुघल बादशहा शाहजहान याच्याशी गुप्त पत्रव्यवहार सुरू केला आणि मुघल सेवेची तयारी दर्शवली.',
        'मुघल हस्तक्षेपामुळे घाबरलेल्या आदिलशहाने शहाजीराजांची सन्मानपूर्वक मुक्तता केली. शिवरायांच्या मुत्सद्देगिरीचा हा मोठा विजय होता.'
      ],
      Hindi: [
        'शिवाजी की बढ़ती शक्ति से भयभीत होकर आदिलशाह ने छल से उनके पिता शाहजी राजे को बंदी बना लिया।',
        'शिवाजी ने घबराने के बजाय आगरा के मुगल बादशाह शाहजहां से कूटनीतिक संपर्क साधा और मित्रता का प्रस्ताव रखा।',
        'मुगलों के दबाव से भयभीत होकर आदिलशाही दरबार ने शाहजी राजे को ससम्मान मुक्त कर दिया।'
      ]
    }
  },
  {
    id: 'SHIVAJI-08',
    order: 8,
    year: '1656 CE',
    location: 'Dense Valley of Javli',
    title: {
      English: 'The Strategic Conquest of Javli',
      Marathi: 'जावळीच्या घनदाट खोऱ्याचा विजय',
      Hindi: 'जावली के सघन वन क्षेत्र की विजय'
    },
    summary: {
      English: 'Shivaji annexes the impenetrable forests of Javli from the hostile More clan, opening the gateway to Konkan.',
      Marathi: 'जावळीच्या घनघोर अरण्यातून चंद्रराव मोरेंचा पराभव करून शिवरायांनी कोकण आणि पश्चिम महाराष्ट्राचा मार्ग मोकळा केला.',
      Hindi: 'जावली के दुर्गम जंगलों पर अधिकार कर शिवाजी ने कोंकण का द्वार खोला।'
    },
    moral: {
      English: 'Obstacles to the collective freedom of the motherland must be overcome decisively.',
      Marathi: 'स्वराज्याच्या आड येणाऱ्या स्वार्थी शक्तींचा वेळीच बंदोबस्त करणे गरजेचे असते.',
      Hindi: 'जनहित और स्वराज्य के मार्ग में बाधक शक्तियों पर कठोर निर्णय लेना आवश्यक होता है।'
    },
    paragraphs: {
      English: [
        'The dense mountain valley of Javli was so thick with bamboo thickets and wild tigers that sunlight could scarcely penetrate the jungle canopy. It was ruled by the Adilshahi loyalist Chandrarao More.',
        'Despite multiple peaceful appeals to unite under Swarajya, More mocked Shivaji and allied with Bijapuri armies to crush the nascent freedom movement.',
        'Shivaji led a swift expedition, defeating the traitorous elements and bringing the entire Javli forest into Swarajya, acquiring immense wealth, hundreds of warriors, and building Pratapgad nearby.'
      ],
      Marathi: [
        'जावळीचे खोरे म्हणजे वाघाची गुहा! तेथे सूर्यकिरणही जमिनीवर पोहोचत नसत. तेथील जहागीरदार चंद्रराव मोरे आदिलशाहीचे मांडलिक होते.',
        'शिवरायांनी त्यांना स्वराज्यात सामील होण्याचे आवाहन केले, परंतु मोरे यांनी उद्धट उत्तर दिले: "तुम्ही उद्याचे राजे आजच कसे झालात?"',
        'अखेर शिवरायांनी जावळीवर मोहीम काढून मोऱ्यांचा पाडाव केला. या विजयामुळे स्वराज्याला अफाट संपत्ती, शूर मावळे मिळाले आणि प्रतापगडाची निर्मिती झाली.'
      ],
      Hindi: [
        'जावली का वन क्षेत्र इतना सघन था कि दिन में भी सूर्य का प्रकाश नहीं दिखता था। वहां के चंद्रराव मोरे आदिलशाह के निष्ठावान थे।',
        'शिवाजी के समझाने के बावजूद मोरे ने अहंकार दिखाया और स्वराज्य विरोधी रुख अपनाया।',
        'शिवाजी ने निर्णायक अभियान चलाकर जावली पर विजय प्राप्त की और प्रतापगढ़ दुर्ग की नींव रखी।'
      ]
    }
  },
  {
    id: 'SHIVAJI-09',
    order: 9,
    year: '1657 CE',
    location: 'Pratapgad Fort',
    title: {
      English: 'Erecting the Citadel of Pratapgad',
      Marathi: 'प्रतापगडाची अभेद्य निर्मिती',
      Hindi: 'प्रतापगढ़ दुर्ग का भव्य निर्माण'
    },
    summary: {
      English: 'On the Bhorpya hill, Shivaji commissions legendary architect Hiroji Indulkar to construct Pratapgad.',
      Marathi: 'भोरप्या डोंगरावर शिवरायांनी हिरोजी इंदुलकर यांच्याकडून प्रतापगड हा अजिंक्य किल्ला बांधून घेतला.',
      Hindi: 'भोरप्या पहाड़ी पर शिवाजी ने शिल्पकार हिरोजी इंदुलकर के मार्गदर्शन में प्रतापगढ़ का निर्माण कराया।'
    },
    moral: {
      English: 'Foresight in engineering fortresses guards liberty against monstrous invasions.',
      Marathi: 'दूरदृष्टी आणि उत्कृष्ट स्थापत्यकला राष्ट्राचे कायमचे रक्षण करते.',
      Hindi: 'दूरदर्शिता और मजबूत किलेबंदी ही संकट काल में राष्ट्र की ढाल बनती है।'
    },
    paragraphs: {
      English: [
        'To seal the western mountain passes towards Konkan, Shivaji selected the majestic conical peak of Bhorpya, overseeing the Mahabaleshwar plateau.',
        'Renowned architect Hiroji Indulkar laid out massive double curtain walls, bastions, concealed escape sally ports, and a sacred temple dedicated to Goddess Bhavani.',
        'Pratapgad would stand as the ultimate symbol of Maratha engineering and within two years would witness the historic trial of strength against Afzal Khan.'
      ],
      Marathi: [
        'कोकण आणि घाटमाथा यांचे रक्षण करण्यासाठी शिवरायांनी भोरप्या डोंगराची निवड केली.',
        'मुख्य वास्तुविशारद हिरोजी इंदुलकर यांनी दुहेरी तटबंदी, चिलखती बुरुज आणि गुप्त वाटा असलेला अजिंक्य गड उभारला. गडावर भवानी मातेचे मंदिर स्थापन केले.',
        'हाच प्रतापगड पुढे जाऊन अफजलखानाच्या संकटात स्वराज्याची अजिंक्य ढाल ठरला.'
      ],
      Hindi: [
        'कोंकण और सह्याद्रि के संगम पर सुरक्षा हेतु शिवाजी ने भोरप्या पहाड़ी पर प्रतापगढ़ का निर्माण कराया।',
        'शिल्पकार हिरोजी इंदुलकर ने अत्यंत वैज्ञानिक पद्धति से दोहरी प्राचीर और भवानी माता का मंदिर बनवाया।',
        'यही प्रतापगढ़ आगे चलकर अफजल खान के विरुद्ध इतिहास का सबसे बड़ा रणक्षेत्र बना।'
      ]
    }
  },
  {
    id: 'SHIVAJI-10',
    order: 10,
    year: '1659 CE',
    location: 'Foot of Pratapgad',
    title: {
      English: 'The Fall of Afzal Khan',
      Marathi: 'अफजलखानाचा वध: प्रतापगडाचा रणसंग्राम',
      Hindi: 'अफजल खान का वध: प्रतापगढ़ का महासंग्राम'
    },
    summary: {
      English: 'Shivaji exposes Afzal Khan’s treacherous embrace at Pratapgad, tearing him down with tiger claws (Wagh Nakh).',
      Marathi: 'भेटीच्या वेळी कपटाने वार करणाऱ्या महाकाय अफजलखानाला शिवरायांनी वाघनखांनी फाडून यमसदनी धाडले.',
      Hindi: 'कपटपूर्ण आलिंगन में छुरा घोंपने वाले विशालकाय अफजल खान को शिवाजी ने वाघ नख से ढेर कर दिया।'
    },
    moral: {
      English: 'Treachery meets its doom when faced with righteous preparedness and unshakeable courage.',
      Marathi: 'धोकेबाज शत्रूवर विश्वास न ठेवता पूर्वतयारी आणि शौर्याने मात करावी.',
      Hindi: 'छल-कपट करने वाले शत्रु का अंत केवल सजगता और वीरता से ही संभव है।'
    },
    paragraphs: {
      English: [
        'The Bijapur court sent its fiercest general, the gigantic Afzal Khan, with 10,000 cavalry and artillery, swearing to bring Shivaji chained in iron. Knowing open plains favored cavalry, Shivaji drew the Khan into the dense ravines of Pratapgad.',
        'Concealing iron chainmail beneath his tunic, a metal helmet under his turban, and tiger claws (Wagh Nakh) in his fist, Shivaji walked calmly into the decorated meeting tent.',
        'As Afzal Khan embraced Shivaji, he gripped his neck and drove a hidden dagger into his ribs. The armor deflected the blow! Instantly, Shivaji disemboweled the traitor with his tiger claws, while faithful bodyguard Jiva Mahala struck down the Khan’s swordsman Bada Sayyad.'
      ],
      Marathi: [
        'विजापूरच्या बडी बेगमने शिवरायांना जिवंत पकडण्यासाठी १० हजार सैन्यासह महाकाय अफजलखानाला पाठवले. शिवरायांनी गनिमी कावा वापरून त्याला प्रतापगडाच्या जंगलात आणले.',
        'भेटीच्या शामियान्यात जाताना शिवरायांनी अंगात चिलखत, डोक्यावर जिरेटोप आणि हातात वाघनखे व बिचवा लपवून ठेवला होता.',
        'खानाने मिठी मारताना शिवरायांच्या पाठीत कट्यार खुपसली, पण चिलखतामुळे शिवराय बचावले! क्षणाचाही विलंब न लावता शिवरायांनी वाघनखांनी खानाचे पोट फाडले. जीवा महालाने सय्यद बंडाला ठार करून शिवरायांचे प्राण वाचवले.'
      ],
      Hindi: [
        'बीजापुर दरबार ने शिवाजी को कुचलने के लिए क्रूर सेनापति अफजल खान को भेजा। शिवाजी ने उसे प्रतापगढ़ की बीहड़ घाटी में आने पर विवश किया।',
        'तंबू में प्रवेश से पूर्व शिवाजी ने वस्त्रों के नीचे कवच और हाथ में गुप्त वाघ नख धारण कर लिए थे।',
        'जैसे ही खान ने कपट से आलिंगन में दबाकर छुरा घोंपा, कवच ने वार रोक लिया। शिवाजी ने तुरंत वाघ नख से खान का वध कर दिया, और जीवा महाला ने बड़क सय्यद को समाप्त किया।'
      ]
    }
  }
];

// Generate stories 11 to 50 systematically covering the complete glorious lifetime of Chhatrapati Shivaji Maharaj
const REMAINING_SHIVAJI_STORIES_DATA = [
  {
    order: 11,
    year: '1660 CE',
    location: 'Panhala Fort',
    title: { English: 'The Siege of Panhala by Siddi Jauhar', Marathi: 'सिद्दी जौहरचा पन्हाळगडास वेढा', Hindi: 'सिद्दी जौहर का पन्हाला दुर्ग पर घेरा' },
    summary: { English: 'Trapped inside Panhala during monsoon, Shivaji plans a legendary escape route.', Marathi: 'पावसाळ्यात पन्हाळगडावर अडकलेल्या शिवरायांनी अद्वितीय सुटकेची रणनीती आखली.', Hindi: 'पन्हाला पर कड़े पहरे के बीच शिवाजी ने ऐतिहासिक मुक्ति की योजना बनाई।' },
    moral: { English: 'Patience and strategic deception turn a trap into victory.', Marathi: 'धैर्य आणि चतुराईने संकटावर विजय मिळवता येतो.', Hindi: 'धैर्य और बुद्धिमानी से बड़ी से बड़ी घेराबंदी तोड़ी जा सकती है।' }
  },
  {
    order: 12,
    year: '1660 CE',
    location: 'Ghodkhind / Pavan Khind',
    title: { English: 'Shiva Kashid’s Supreme Sacrifice', Marathi: 'वीर शिव काशीद यांचे अमर बलिदान', Hindi: 'वीर शिव काशीद का अमर बलिदान' },
    summary: { English: 'Barber Shiva Kashid dresses as Shivaji, deceiving enemies so the King can escape.', Marathi: 'शिवरायांचे रूप घेऊन शिव काशीद यांनी शत्रूला चकवले आणि स्वतःचे बलिदान दिले.', Hindi: 'शिवाजी का वेश धारण कर वीर शिव काशीद ने अपने प्राणों की आहुति दी।' },
    moral: { English: 'Selfless sacrifice for a noble leader lives forever in history.', Marathi: 'स्वराज्यासाठी दिलेले प्राण इतिहासात सुवर्ण अक्षरांनी कोरले जातात.', Hindi: 'राष्ट्र और राजा के लिए आत्मबलिदान इतिहास में अमर रहता है।' }
  },
  {
    order: 13,
    year: '1660 CE',
    location: 'Pavan Khind Pass',
    title: { English: 'Baji Prabhu Deshpande and the Defense of Pavan Khind', Marathi: 'बाजीप्रभू देशपांडे आणि पावनखिंडीचा संग्राम', Hindi: 'बाजीप्रभु देशपांडे और पावनखिंड का भीषण युद्ध' },
    summary: { English: 'Baji Prabhu defends the mountain pass against thousands until cannon fire announces Shivaji reached Vishalgad safely.', Marathi: 'तोफांचे आवाज ऐकेपर्यंत बाजीप्रभूंनी मूठभर मावळ्यांसह खिंड लढवली आणि देह ठेवला.', Hindi: 'विशालगढ़ से तोपों की आवाज आने तक बाजीप्रभु ने अकेले पूरी शत्रु सेना को रोके रखा।' },
    moral: { English: 'Unflinching loyalty to duty is the highest honor.', Marathi: 'कर्तव्यनिष्ठेसाठी दिलेले बलिदान हेच सर्वोच्च जीवनमूल्य आहे.', Hindi: 'कर्तव्य की वेदी पर सर्वस्व न्योछावर करना ही सबसे बड़ा धर्म है।' }
  },
  {
    order: 14,
    year: '1661 CE',
    location: 'Umberkhind Pass',
    title: { English: 'The Battle of Umberkhind', Marathi: 'उंबरखिंडीतील गनिमी कावा', Hindi: 'उंबरखिंड का छापामार युद्ध' },
    summary: { English: 'Kartalab Khan’s entire Mughal army is trapped and disarmed without water in a narrow canyon.', Marathi: 'मुघल सरदार कारतलब खानाच्या सैन्याला उंबरखिंडीत पाणीही न मिळू देता शरणागती पत्करायला लावली.', Hindi: 'मुगल सेनापति करतलब खान की पूरी सेना को संकरी घाटी में घेरकर आत्मसमर्पण कराया।' },
    moral: { English: 'Mastery of local terrain defeats armies ten times larger.', Marathi: 'भौगोलिक परिस्थितीचा योग्य वापर केल्यास मूठभर सैन्यही विजयी होते.', Hindi: 'भूगोल और रणनीति का सही ज्ञान विशाल सेना पर भी भारी पड़ता है।' }
  },
  {
    order: 15,
    year: '1663 CE',
    location: 'Lal Mahal, Pune',
    title: { English: 'Night Raid on Shaista Khan at Lal Mahal', Marathi: 'लाल महालात शाहिस्तेखानाची बोटे छाटली', Hindi: 'लाल महल में शाइस्ता खान की अंगुलियां काटीं' },
    summary: { English: 'Shivaji enters heavily guarded Lal Mahal at midnight, cutting Shaista Khan’s fingers and expelling him from Pune.', Marathi: 'भर मध्यरात्री पहारे भेदून शिवरायांनी शाहिस्तेखानाची तीन बोटे छाटली आणि त्याला पळवून लावले.', Hindi: 'कड़े पहरे के बीच लाल महल में घुसकर शिवाजी ने शाइस्ता खान की अंगुलियां काट दीं।' },
    moral: { English: 'Fearlessness inside enemy headquarters shatters their morale.', Marathi: 'शत्रूच्या घरात घुसून धडा शिकवल्यास त्याचा आत्मविश्वास खचतो.', Hindi: 'शत्रु के गढ़ में घुसकर प्रहार करने से उसका मनोबल टूट जाता है।' }
  },
  {
    order: 16,
    year: '1664 CE',
    location: 'Surat, Gujarat',
    title: { English: 'The First Expedition to Surat', Marathi: 'सुरतेची पहिली यशस्वी मोहीम', Hindi: 'सूरत का प्रथम सफल अभियान' },
    summary: { English: 'Shivaji recovers war indemnities from the wealthiest Mughal port without harming religious places or the poor.', Marathi: 'गरीब आणि धर्मस्थळांना हात न लावता शिवरायांनी सुरतेतील मुघल खजिना हस्तगत केला.', Hindi: 'गरीबों और मंदिरों को छुए बिना मुगलों के समृद्ध बंदरगाह सूरत से युद्ध कर वसूला।' },
    moral: { English: 'Economic warfare can fund liberty while upholding high ethics.', Marathi: 'आर्थिक युद्ध लढतानाही उच्च नैतिक मूल्ये पाळली पाहिजेत.', Hindi: 'युद्ध के समय भी मानवीय संवेदना और उच्च चरित्र बनाए रखना चाहिए।' }
  },
  {
    order: 17,
    year: '1664 CE',
    location: 'Sindhudurg, Malvan',
    title: { English: 'Founding the Maratha Navy at Sindhudurg', Marathi: 'सिंधुदुर्ग आणि मराठा आरमाराची स्थापना', Hindi: 'सिंधुदुर्ग और मराठा नौसेना की नींव' },
    summary: { English: 'Shivaji builds a sea fortress with molten lead foundations, becoming the Father of the Indian Navy.', Marathi: 'सिंधुदुर्ग उभारून शिवरायांनी भारताच्या आधुनिक आरमाराची स्थापना केली.', Hindi: 'समुद्र में अजेय सिंधुदुर्ग बनाकर शिवाजी भारतीय नौसेना के जनक बने।' },
    moral: { English: 'He who commands the sea commands the sovereign destiny of the coast.', Marathi: 'ज्याचे आरमार त्याचा समुद्र, ही शिवरायांची अमूल्य शिकवण होती.', Hindi: 'जिसका समुद्र पर नियंत्रण होता है, वही सीमाओं की सच्ची रक्षा कर सकता है।' }
  },
  {
    order: 18,
    year: '1665 CE',
    location: 'Purandar Fort',
    title: { English: 'Murarbaji’s Heroic Stand at Purandar', Marathi: 'मुरारबाजी देशपांडे यांचे असीम शौर्य', Hindi: 'मुरारबाजी देशपांडे की अद्वितीय वीरता' },
    summary: { English: 'Murarbaji fights Diler Khan fiercely, refusing bribes and dying fighting on the ramparts.', Marathi: 'दिलेरखानाने दिलेल्या जहागिरीला लाथ मारून मुरारबाजींनी पुरंदरासाठी प्राणांचे बलिदान दिले.', Hindi: 'दिलेर खान के प्रलोभन को ठुकराकर मुरारबाजी ने पुरंदर की रक्षा में प्राण दिए।' },
    moral: { English: 'Integrity and patriotism can never be purchased with gold.', Marathi: 'देशप्रेम आणि निष्ठा पैशाने कधीही विकत घेता येत नाही.', Hindi: 'स्वाभिमान और देशभक्ति किसी मूल्य पर खरीदी नहीं जा सकती।' }
  },
  {
    order: 19,
    year: '1665 CE',
    location: 'Purandar Camp',
    title: { English: 'The Treaty of Purandar with Jai Singh', Marathi: 'मिर्झाराजे जयसिंग यांच्याशी पुरंदरचा तह', Hindi: 'मिर्जा राजा जयसिंह के साथ पुरंदर की संधि' },
    summary: { English: 'To save his people and army from devastation, Shivaji signs a tactical peace treaty.', Marathi: 'रयतेचे रक्षण करण्यासाठी शिवरायांनी २३ किल्ले तात्पुरते देऊन तह स्वीकारला.', Hindi: 'प्रजा की रक्षा के लिए शिवाजी ने कूटनीतिक रूप से २३ दुर्ग देकर संधि की।' },
    moral: { English: 'Strategic retreats preserve power for ultimate victory.', Marathi: 'वेळ आल्यास माघार घेणे हा पराभव नसून पुढच्या विजयाची तयारी असते.', Hindi: 'समय आने पर पीछे हटना पराजय नहीं, भविष्य की विजय की तैयारी है।' }
  },
  {
    order: 20,
    year: '1666 CE',
    location: 'Agra Imperial Court',
    title: { English: 'Defiance at the Mughal Court in Agra', Marathi: 'आग्रा दरबारात बादशहा औरंगजेबाचा धिक्कार', Hindi: 'आगरा दरबार में औरंगजेब का विरोध' },
    summary: { English: 'Insulted by Aurangzeb by being placed behind third-rate nobles, Shivaji turns his back and walks out.', Marathi: 'अपमानास्पद वागणूक दिल्याने शिवरायांनी औरंगजेबाच्या दरबारात संतापाने पाठ फिरवली.', Hindi: 'उचित सम्मान न मिलने पर शिवाजी ने भरे दरबार में औरंगजेब को खरी-खरी सुनाई।' },
    moral: { English: 'Never compromise personal and national self-respect for imperial favor.', Marathi: 'स्वाभिमान हा प्राणापेक्षाही अधिक प्रिय असला पाहिजे.', Hindi: 'आत्मसम्मान से बड़ा कोई पद या वैभव नहीं होता।' }
  },
  {
    order: 21,
    year: '1666 CE',
    location: 'Agra Prisoner Camp',
    title: { English: 'The Great Sweet Basket Escape from Agra', Marathi: 'आग्र्याहून गोड मिठाईच्या पेट्यांतून सुटका', Hindi: 'आगरा से मिठाई के टोकरों में ऐतिहासिक मुक्ति' },
    summary: { English: 'Shivaji pretends illness and escapes Mughal house arrest concealed inside sweet gift baskets.', Marathi: 'आजारी असल्याचे भासवून साधू-संतांना वाटल्या जाणाऱ्या मिठाईच्या पेट्यांतून शिवराय बाहेर पडले.', Hindi: 'रोग का बहाना बनाकर संतों को बांटे जाने वाले मिठाई के टोकरों में छिपकर निकले।' },
    moral: { English: 'A calm intellect finds an exit even from the most secure iron cage.', Marathi: 'शांत मन आणि तीव्र बुद्धी लोखंडी पिंजऱ्यातूनही मार्ग काढू शकते.', Hindi: 'धैर्य और तीव्र बुद्धि लोहे के पिंजरे से भी बाहर निकलने का मार्ग ढूंढ लेती है।' }
  },
  {
    order: 22,
    year: '1666 CE',
    location: 'Varanasi to Rajgad',
    title: { English: 'The Return to Rajgad as a Holy Sanyasi', Marathi: 'संन्याशाच्या वेशात राजगडावर पुनरागमन', Hindi: 'संन्यासी वेश में राजगढ़ वापसी' },
    summary: { English: 'Disguised as an ascetic, Shivaji travels 1,000 miles across India, safely reuniting with Mother Jijau.', Marathi: 'साधूच्या वेशात हजारो मैलांचा प्रवास करून शिवराय सुखरूप आई जिजाऊंच्या भेटीस आले.', Hindi: 'संन्यासी बनकर हजारों मील की गुप्त यात्रा कर शिवाजी माता जीजाबाई के पास पहुंचे।' },
    moral: { English: 'Perseverance and humility protect great destinies.', Marathi: 'अथक परिश्रम आणि नम्रता संकटातून रक्षण करते.', Hindi: 'कठिन परिश्रम और धैर्य से हर असंभव यात्रा संभव हो जाती है।' }
  },
  {
    order: 23,
    year: '1670 CE',
    location: 'Kondhana / Sinhagad',
    title: { English: 'Tanaji Malusare and the Battle of Sinhagad', Marathi: 'तानाजी मालुसरे: "आधी लगीन कोंढाण्याचं"', Hindi: 'तानाजी मालुसरे और सिंहगढ़ की अमर विजय' },
    summary: { English: 'Tanaji scales the sheer cliff of Kondhana using a monitor lizard (Ghorpad), reclaiming the fort with his life.', Marathi: 'घोरपडीच्या साहाय्याने कडा चढून तानाजींनी कोंढाणा जिंकला, शिवराय म्हणाले "गड आला पण सिंह गेला!"', Hindi: 'घोरपड़ की सहायता से खड़ी चट्टान चढ़कर तानाजी ने सिंहगढ़ जीता और बलिदान दिया।' },
    moral: { English: 'True patriots put national honor ahead of personal family celebrations.', Marathi: 'स्वराज्याचे कार्य कौटुंबिक सुखापेक्षा मोठे मानणाराच खरा राष्ट्रभक्त.', Hindi: 'राष्ट्रहित को परिवार से ऊपर रखने वाले वीर ही अमर होते हैं।' }
  },
  {
    order: 24,
    year: '1670 CE',
    location: 'Surat',
    title: { English: 'The Second Wealth Recovery at Surat', Marathi: 'सुरतेची दुसरी यशस्वी स्वारी', Hindi: 'सूरत की दूसरी सफल विजय' },
    summary: { English: 'Shivaji recovers funds to rebuild all forts lost in the Treaty of Purandar.', Marathi: 'पुरंदरच्या तहात गेलेले सर्व किल्ले पुन्हा जिंकण्यासाठी शिवरायांनी सुरत जिंकली.', Hindi: 'पुरंदर की संधि में खोए दुर्गों को पुनः प्राप्त करने हेतु संसाधन जुटाए।' },
    moral: { English: 'Resourcefulness allows nations to rebuild stronger after setbacks.', Marathi: 'संकटातून पुन्हा उभे राहण्याची क्षमता हेच नेतृत्वाचे गमक असते.', Hindi: 'विपत्ति के बाद पुनः खड़े होने की क्षमता ही सच्चे नेतृत्व की पहचान है।' }
  },
  {
    order: 25,
    year: '1670 CE',
    location: 'Kandesh & Salher',
    title: { English: 'The Grand Battle of Salher', Marathi: 'साल्हेरची ऐतिहासिक खुल्या मैदानावरील लढाई', Hindi: 'साल्हेर का ऐतिहासिक खुला संग्राम' },
    summary: { English: 'The Maratha army defeats a 40,000-strong imperial Mughal force in an open field pitched battle.', Marathi: 'खुल्या मैदानात मराठ्यांनी ४० हजारांच्या बलाढ्य मुघल सैन्याचा दारुण पराभव केला.', Hindi: 'खुले मैदान में मराठों ने ४० हजार की मुगल सेना को धूल चटाई।' },
    moral: { English: 'Confidence, discipline, and training turn underdogs into champions.', Marathi: 'शिस्त आणि आत्मविश्वासाने कोणत्याही बलाढ्य सैन्याचा पराभव करता येतो.', Hindi: 'अनुशासन और आत्मविश्वास से किसी भी शक्तिशाली शत्रु को परास्त किया जा सकता है।' }
  },
  {
    order: 26,
    year: '1671 CE',
    location: 'Kanhoji Angre’s Bay',
    title: { English: 'The Rise of the Maratha Fleet Commanders', Marathi: 'मराठा आरमाराचे शूर सेनानी', Hindi: 'मराठा नौसेना के पराक्रमी सेनापति' },
    summary: { English: 'Maynak Bhandari and Daryasarang protect coastal fishermen from European pirate galleons.', Marathi: 'मायनाक भंडारी आणि दर्यासारंग यांनी परकीय चाच्यांपासून रयतेचे रक्षण केले.', Hindi: 'मायनाक भंडारी और दरियासारंग ने तटीय नागरिकों की रक्षा की।' },
    moral: { English: 'A strong navy safeguards coastal trade and humble fishermen.', Marathi: 'सागरी सीमेचे रक्षण हेच व्यापाराचे आणि शांततेचे मूळ आहे.', Hindi: 'तटीय सीमाओं की सुरक्षा से ही व्यापार और जनजीवन सुरक्षित रहता है।' }
  },
  {
    order: 27,
    year: '1672 CE',
    location: 'Kalyan Subah',
    title: { English: 'Honor to Women: The Daughter-in-law of Subedar', Marathi: 'कल्याणच्या सुभेदाराच्या सुनेचा सन्मान', Hindi: 'कल्याण के सूबेदार की पुत्रवधू का सम्मान' },
    summary: { English: 'When soldiers present a captured noblewoman as a gift, Shivaji bows and sends her home with silk robes and escort.', Marathi: 'सैनिकांनी आणलेल्या सुभेदाराच्या सुनेला शिवरायांनी आईसमान मानून सन्मानाने परत पाठवले.', Hindi: 'शत्रु की पुत्रवधू को माता समान आदर देकर उपहार सहित ससम्मान लौटाया।' },
    moral: { English: 'A true champion respects every woman regardless of caste or religion.', Marathi: 'स्त्रीचा सन्मान हाच स्वराज्याचा सर्वात मोठा नियम होता.', Hindi: 'नारी का सम्मान ही किसी धर्म और राज्य की सर्वोच्च गरिमा है।' }
  },
  {
    order: 28,
    year: '1673 CE',
    location: 'Panhala Fort',
    title: { English: 'Kondaji Farzand and the Sixty Heroes of Panhala', Marathi: 'कोंडाजी फर्जंद आणि ६० मावळ्यांची पन्हाळा मोहीम', Hindi: 'कोंडाजी फर्जंद और ६० वीरों की पन्हाला विजय' },
    summary: { English: 'Sixty brave climbers scale Panhala in the dead of night, recapturing the impregnable fort.', Marathi: 'केवळ ६० शूरवीरांनी मध्यरात्री दोराच्या साहाय्याने पन्हाळा गड पुन्हा जिंकला.', Hindi: 'मात्र ६० वीर मावलों ने आधी रात को पन्हाला दुर्ग जीतकर इतिहास रचा।' },
    moral: { English: 'A small group of resolute warriors can overturn any giant fortress.', Marathi: 'दृढनिश्चयी मूठभर सैनिकही गडाचे भाग्य बदलू शकतात.', Hindi: 'दृढ़ निश्चयी थोड़े से सैनिक भी बड़े से बड़े दुर्ग को जीत सकते हैं।' }
  },
  {
    order: 29,
    year: '1674 CE',
    location: 'Nesari Pass',
    title: { English: 'Prataprao Gujar: The Six Champions of Nesari', Marathi: 'प्रतापराव गुजर: "वेडात मराठे वीर दौडले सात"', Hindi: 'प्रतापराव गुजर: नेसरी का अमर पराक्रम' },
    summary: { English: 'General Prataprao Gujar attacks Bahlol Khan’s entire army with only six cavalrymen to defend his honor.', Marathi: 'सेनापती प्रतापराव गुजर आणि ६ सरदारांनी बहलोलखानाच्या सैन्यावर अतुलनीय शौर्याने हल्ला चढवला.', Hindi: 'सेनापति प्रतापराव गुजर ने मात्र छह साथियों संग शत्रु सेना पर भीषण प्रहार किया।' },
    moral: { English: 'Valor knows no calculation of numbers.', Marathi: 'शौर्य संख्येवर अवलंबून नसते, तर अंतःकरणातील धैर्यावर असते.', Hindi: 'वीरता संख्याबल की मोहताज नहीं होती, वह आत्मबल पर निर्भर करती है।' }
  },
  {
    order: 30,
    year: '1674 CE',
    location: 'Raigad Fort',
    title: { English: 'The Grand Coronation of Chhatrapati Shivaji', Marathi: 'रायगडावर शिवछत्रपतींचा भव्य राज्याभिषेक', Hindi: 'रायगढ़ पर शिवछत्रपति का भव्य राज्याभिषेक' },
    summary: { English: 'On 6th June 1674, Shivaji Maharaj is crowned Chhatrapati, inaugurating the golden Rajyabhisheka era.', Marathi: '६ जून १६७४ रोजी शिवरायांचा राज्याभिषेक झाला आणि छत्रपतींचा सुवर्णकाळ सुरू झाला.', Hindi: '६ जून १६७४ को शिवाजी महाराज का राज्याभिषेक हुआ और वे छत्रपति बने।' },
    moral: { English: 'Sovereignty is established when moral righteousness ascends the throne.', Marathi: 'न्याय आणि धर्म गादीवर बसतो तेव्हाच खऱ्या स्वराज्याची निर्मिती होते.', Hindi: 'न्याय और धर्म जब सिंहासन पर आसीन होते हैं, तब स्वर्ण युग आता है।' }
  },
  {
    order: 31,
    year: '1674 CE',
    location: 'Raigad Fort',
    title: { English: 'Mother Jijau’s Final Blessing', Marathi: 'राष्ट्रमाता जिजाऊंचे अंतिम आशीर्वाद', Hindi: 'राष्ट्रमाता जीजाबाई का अंतिम आशीर्वाद' },
    summary: { English: 'Twelve days after the coronation, Queen Mother Jijabai peacefully departs, her lifelong dream fulfilled.', Marathi: 'राज्याभिषेकाचे स्वप्न पूर्ण झाल्यानंतर १२ दिवसांनी मातोश्री जिजाऊंनी शांतपणे देह ठेवला.', Hindi: 'स्वराज्य का स्वप्न साकार देखकर राज्याभिषेक के १२ दिन बाद जीजाऊ ने मोक्ष पाया।' },
    moral: { English: 'A mother’s selfless devotion transforms history for all eternity.', Marathi: 'आईचे आशीर्वाद आणि शिकवण देशाला नवी दिशा देते.', Hindi: 'माता का त्याग और आशीर्वाद सम्पूर्ण राष्ट्र को आलोकित करता है।' }
  },
  {
    order: 32,
    year: '1674 CE',
    location: 'Raigad Fort',
    title: { English: 'Hiroji Indulkar and the Stone of Humility', Marathi: 'हिरोजी इंदुलकरांची निस्वार्थी पायरी', Hindi: 'हिरोजी इंदुलकर का निस्वार्थ समर्पण' },
    summary: { English: 'The royal architect Hiroji asks only that his name be engraved on the lowest temple step visited by devotees.', Marathi: 'रायगड उभारणाऱ्या हिरोजींनी फक्त पायरीवर नाव कोरण्याची नम्र मागणी केली.', Hindi: 'रायगढ़ के शिल्पकार हिरोजी ने केवल मंदिर की पायदान पर नाम की इच्छा जताई।' },
    moral: { English: 'Humility in great service is higher than worldly riches.', Marathi: 'महान कार्यात नम्र राहणे हेच सर्वात मोठे वैभव असते.', Hindi: 'महान सेवा में विनम्रता ही सबसे बड़ा पुरस्कार है।' }
  },
  {
    order: 33,
    year: '1675 CE',
    location: 'Deccan Valleys',
    title: { English: 'Protecting the Farmers: The Straw and Grain Decree', Marathi: 'शेतकऱ्यांच्या भाजीच्या देठालाही हात लावू नका!', Hindi: 'किसानों के प्रति संवेदनशील शासकीय आदेश' },
    summary: { English: 'Shivaji issues royal orders that soldiers must buy grain and never touch a single vegetable of a farmer without payment.', Marathi: 'सैन्याने शेतकऱ्यांच्या भाजीच्या देठालाही हात लावू नये, असा कडक हुकूम शिवरायांनी काढला.', Hindi: 'सैनिक किसानों के अनाज और तिनके को भी बिना मूल्य न छुएं, यह कठोर आदेश था।' },
    moral: { English: 'True governance exists solely for the welfare of the poorest farmer.', Marathi: 'शेतकऱ्यांचे रक्षण हीच स्वराज्याची खरी संपत्ती आहे.', Hindi: 'किसानों और निर्धनों की रक्षा ही सच्चे सुशासन का आधार है।' }
  },
  {
    order: 34,
    year: '1675 CE',
    location: 'Gingee / Jinji, Tamil Nadu',
    title: { English: 'The Southern Campaign Begins (Dakshin Digvijay)', Marathi: 'दक्षिणेतील दिग्विजय मोहिमेचा प्रारंभ', Hindi: 'दक्षिण भारत का ऐतिहासिक दिग्विजय' },
    summary: { English: 'Shivaji marches south to unify the subcontinent against oppressive empires.', Marathi: 'महाराष्ट्राच्या सीमा ओलांडून शिवरायांनी दक्षिणेत स्वराज्याचा विस्तार केला.', Hindi: 'महाराष्ट्र से आगे बढ़कर शिवाजी ने दक्षिण भारत में स्वराज्य का ध्वज फहराया।' },
    moral: { English: 'A visionary looks beyond regional borders to unite humanity.', Marathi: 'विशाल दृष्टिकोन प्रांतीय मर्यादा ओलांडून एकात्मता साधतो.', Hindi: 'विशाल दृष्टिकोण संकीर्ण सीमाओं से ऊपर उठकर राष्ट्र को जोड़ता है।' }
  },
  {
    order: 35,
    year: '1676 CE',
    location: 'Bhaganagar (Hyderabad)',
    title: { English: 'Meeting with Qutb Shah at Golconda', Marathi: 'गोवळकोंड्याच्या कुतुबशहाशी सन्माननीय भेट', Hindi: 'गोलकुंडा के कुतुबशाह से सम्मानजनक मिलन' },
    summary: { English: 'Shivaji enters Bhaganagar in majestic procession, forming an honorable diplomatic alliance.', Marathi: 'भव्य मिरवणुकीने प्रवेश करून शिवरायांनी कुतुबशहाशी समसमान मित्रत्वाचा करार केला.', Hindi: 'भव्य शोभायात्रा के साथ शिवाजी ने कुतुबशाह से समानता का मैत्री समझौता किया।' },
    moral: { English: 'Dignified strength commands respect from all neighbours.', Marathi: 'सामर्थ्य आणि प्रतिष्ठा नेहमीच आदर निर्माण करते.', Hindi: 'शक्ति और शालीनता से हर कोई प्रभावित होकर सम्मान देता है।' }
  },
  {
    order: 36,
    year: '1677 CE',
    location: 'Jinji Fort, Tamil Nadu',
    title: { English: 'Capture of Fort Jinji: The Troy of the East', Marathi: 'जिंजीचा अजिंक्य किल्ला स्वराज्यात दाखल', Hindi: 'अजेय जिंजी दुर्ग पर स्वराज्य का अधिकार' },
    summary: { English: 'Shivaji captures the granite hills of Jinji, transforming them into a Southern fortress of refuge.', Marathi: 'दक्षिणेतील जिंजी किल्ला जिंकून शिवरायांनी भविष्यातील संकटांसाठी दुसरी सुरक्षित राजधानी केली.', Hindi: 'जिंजी को जीतकर शिवाजी ने मुगलों से मुकाबले हेतु दक्षिण में अजेय केंद्र बनाया।' },
    moral: { English: 'Foresight builds shelters today for storms arriving decades later.', Marathi: 'भविष्यातील वादळांची चाहूल लागून केलेली पूर्वतयारीच देशाला वाचवते.', Hindi: 'भविष्य के संकटों को भांपकर की गई तैयारी ही राष्ट्र की रक्षा करती है।' }
  },
  {
    order: 37,
    year: '1677 CE',
    location: 'Vellore Fort, Tamil Nadu',
    title: { English: 'The Siege and Fall of Vellore', Marathi: 'वेल्लोरच्या महादुर्गाचा प्रदीर्घ वेढा', Hindi: 'वेल्लोर के विशाल दुर्ग की विजय' },
    summary: { English: 'Surrounded by crocodile-infested moats, Vellore is captured with brilliant military science.', Marathi: 'मगरींच्या खंदकाने वेढलेला वेल्लोर किल्ला मराठ्यांनी कौशल्याने जिंकला.', Hindi: 'मगरमच्छों की खाई से घिरे वेल्लोर दुर्ग को मराठा सेना ने चतुराई से जीता।' },
    moral: { English: 'No obstacle is unassailable to determined scientific siegecraft.', Marathi: 'योग्य नियोजन आणि विज्ञानाच्या जोरावर कोणतीही अडचण पार करता येते.', Hindi: 'वैज्ञानिक योजना और दृढ़ संकल्प से हर बाधा पार हो जाती है।' }
  },
  {
    order: 38,
    year: '1677 CE',
    location: 'Tiruvannamalai & Thanjavur',
    title: { English: 'Reconciliation with Stepbrother Venkoji', Marathi: 'सावत्र भाऊ व्यंकोजींशी सलोख्याचा संवाद', Hindi: 'सौतेले भाई व्यंकोजी के साथ सुलह' },
    summary: { English: 'Shivaji settles family disputes with patience, returning lands to his younger brother.', Marathi: 'भाऊबंदकी टाळून शिवरायांनी व्यंकोजींना समजावले आणि त्यांची जहागीर सुरक्षित ठेवली.', Hindi: 'पारिवारिक कलह मिटाकर शिवाजी ने अपने भाई को उचित सम्मान और अधिकार दिया।' },
    moral: { English: 'Family unity should always be nurtured with generosity.', Marathi: 'कुटुंबातील नातेसंबंध जपणे हे श्रेष्ठ राजाचे लक्षण आहे.', Hindi: 'परिवार में प्रेम और त्याग ही स्थायी सुख और शांति देता है।' }
  },
  {
    order: 39,
    year: '1678 CE',
    location: 'Belwadi Fort, Karnataka',
    title: { English: 'Respecting Queen Mallamma of Belwadi', Marathi: 'बेलवडीच्या राणी मल्लम्माचा सन्मान', Hindi: 'बेलवडी की रानी मल्लम्मा का आदर' },
    summary: { English: 'Queen Mallamma fights like a lioness; Shivaji honours her with silk and returns her estate.', Marathi: 'वीर राणी मल्लम्माचे शौर्य पाहून शिवरायांनी त्यांना साडी-चोळी देऊन मानसन्मान केला.', Hindi: 'रानी मल्लम्मा की वीरता से प्रभावित होकर शिवाजी ने उन्हें उपहार देकर स्वतंत्र किया।' },
    moral: { English: 'Valiant adversaries deserve genuine admiration and dignity.', Marathi: 'शत्रूच्या वीरतेचाही आदर करणे हीच भारतीय संस्कृतीची ओळख आहे.', Hindi: 'शत्रु की वीरता का भी सम्मान करना सच्चे शूरवीर का लक्षण है।' }
  },
  {
    order: 40,
    year: '1678 CE',
    location: 'Raigad Fort',
    title: { English: 'The Council of Eight Ministers (Ashta Pradhan)', Marathi: 'अष्टप्रधान मंडळाची सुशासन व्यवस्था', Hindi: 'अष्टप्रधान मंडल की कुशल शासन प्रणाली' },
    summary: { English: 'Shivaji institutes a merit-based cabinet without hereditary ministerial appointments.', Marathi: 'शिवरायांनी वंशपरंपरेऐवजी गुणवत्तेवर आधारित अष्टप्रधान मंत्रिमंडळ स्थापन केले.', Hindi: 'शिवाजी ने योग्यता पर आधारित अष्टप्रधान मंत्रिमंडल का गठन किया।' },
    moral: { English: 'Good governance relies on merit, accountability, and clear division of responsibilities.', Marathi: 'योग्य व्यक्तीला योग्य जबाबदारी देणे हेच आदर्श प्रशासनाचे रहस्य आहे.', Hindi: 'योग्यता और निष्पक्षता ही कुशल प्रशासन की रीढ़ है।' }
  },
  {
    order: 41,
    year: '1678 CE',
    location: 'Maharashtra',
    title: { English: 'The Land Measurement and Revenue Reforms', Marathi: 'जमीन मोजणी आणि शिवशाही महसूल पद्धत', Hindi: 'भूमि पैमाइश और निष्पक्ष कर व्यवस्था' },
    summary: { English: 'Standardized measuring rods (Kathi) ensure no peasant is cheated by corrupt officials.', Marathi: 'काठीच्या साहाय्याने अचूक मोजणी करून शेतकऱ्यांना भ्रष्टाचारापासून मुक्ती दिली.', Hindi: 'मानक पैमाइश से किसानों को भ्रष्ट अधिकारियों की लूट से बचाया।' },
    moral: { English: 'Transparency in administration is the cornerstone of justice.', Marathi: 'प्रशासनातील पारदर्शकता हीच प्रजेच्या सुखाची हमी असते.', Hindi: 'पारदर्शी व्यवस्था ही निर्धन जनता के अधिकारों की संरक्षक है।' }
  },
  {
    order: 42,
    year: '1679 CE',
    location: 'Khanderi Island, Arabian Sea',
    title: { English: 'The Naval Defense of Khanderi Island', Marathi: 'खांदेरी बेटावरील ब्रिटिशांविरुद्ध नौदल विजय', Hindi: 'खांदेरी द्वीप पर अंग्रेजों के विरुद्ध नौसेना विजय' },
    summary: { English: 'Maratha naval frigates defeat combined British and Siddi fleets near Mumbai.', Marathi: 'खांदेरी बेटावर मराठा आरमाराने ब्रिटिश आणि सिद्दी आरमाराला पाणी पाजले.', Hindi: 'खांदेरी द्वीप पर मराठा नौसेना ने ब्रिटिश जहाजों को पीछे हटने पर विवश किया।' },
    moral: { English: 'Vigilant coastal sovereignty protects the nation from foreign colonizers.', Marathi: 'सागरी सीमांचे संरक्षण परकीय आक्रमकांपासून देशाला सुरक्षित ठेवते.', Hindi: 'तटीय सीमाओं की सजग रक्षा ही विदेशी गुलामी से बचाती है।' }
  },
  {
    order: 43,
    year: '1679 CE',
    location: 'Jalna & Aurangabad',
    title: { English: 'Raid on Jalna and Defeating Ranmast Khan', Marathi: 'जालन्याची स्वारी आणि रणमस्तखानाचा पराभव', Hindi: 'जालना अभियान और रणमस्त खान की पराजय' },
    summary: { English: 'Maratha cavalry sweeps into Mughal territory, extracting resources for Swarajya defenses.', Marathi: 'मुघल आक्रमणाचा प्रतिकार करण्यासाठी मराठ्यांनी जालन्यावर धडक मारली.', Hindi: 'मुगल सेनापति रणमस्त खान को परास्त कर स्वराज्य की रक्षा की।' },
    moral: { English: 'Swift mobility is the greatest weapon of defensive warfare.', Marathi: 'चपळाई आणि वेग हेच युद्धातील सर्वात मोठे अस्त्र असते.', Hindi: 'तीव्र गतिशीलता ही युद्ध का सबसे बड़ा बल है।' }
  },
  {
    order: 44,
    year: '1679 CE',
    location: 'Raigad & Dehu',
    title: { English: 'Saint Tukaram and Shivaji’s Spiritual Devotion', Marathi: 'संत तुकाराम महाराज आणि शिवरायांचे गुरुभक्ती', Hindi: 'संत तुकाराम महाराज और शिवाजी की गुरुभक्ति' },
    summary: { English: 'Shivaji attends Saint Tukaram’s kirtan in enemy territory, protected miraculously by divine will.', Marathi: 'शत्रूच्या वेढ्यातही शिवरायांनी संत तुकाराम महाराजांचे कीर्तन भक्तीभावाने ऐकले.', Hindi: 'शत्रु की घेराबंदी में भी शिवाजी ने संत तुकाराम के कीर्तन में भक्तिभाव दर्शाया।' },
    moral: { English: 'Spiritual grounding provides calmness amidst earthly tempests.', Marathi: 'अध्यात्म आणि संतांचे विचार माणसाला संकटात स्थिर बुद्धी देतात.', Hindi: 'सत्संग और आध्यात्मिक विचार विपत्ति में भी मन को स्थिर रखते हैं।' }
  },
  {
    order: 45,
    year: '1679 CE',
    location: 'Sajjangad, Satara',
    title: { English: 'Samarth Ramdas and the Kingdom as Trust', Marathi: 'समर्थ रामदास स्वामी आणि भगवा ध्वज', Hindi: 'समर्थ रामदास स्वामी और स्वराज्य का भगवा' },
    summary: { English: 'Shivaji offers his entire kingdom to his spiritual guide, who returns it commanding him to rule as a trustee.', Marathi: 'शिवरायांनी संपूर्ण राज्य समर्थांच्या झोळीत टाकले, समर्थांनी ते प्रजेच्या विश्वस्त म्हणून चालवण्यास सांगितले.', Hindi: 'शिवाजी ने अपना संपूर्ण राज्य गुरु चरणों में सौंपा, गुरु ने इसे लोक-कल्याण का न्यास बनाया।' },
    moral: { English: 'A sovereign is merely a humble servant and trustee of the people.', Marathi: 'राजा हा स्वामी नसून जनतेचा नम्र सेवक आणि विश्वस्त असतो.', Hindi: 'शासक स्वामी नहीं, बल्कि जनता की धरोहर का केवल एक विनम्र ट्रस्टी होता है।' }
  },
  {
    order: 46,
    year: '1680 CE',
    location: 'Raigad Fort',
    title: { English: 'Justice Above Kin: Punishing Corrupt Nobles', Marathi: 'नातेसंबंधांपेक्षा न्याय श्रेष्ठ: शिवशाहीचा निवाडा', Hindi: 'संबंधों से ऊपर न्याय: शिवशाही का कठोर विधान' },
    summary: { English: 'Even when relatives violated rules, Shivaji refused leniency, treating all subjects equally.', Marathi: 'जवळचा नातेवाईक असला तरीही गुन्हा केल्यास शिवरायांनी कधीही क्षमा केली नाही.', Hindi: 'सगा सम्बंधी होने पर भी अपराध करने पर शिवाजी ने कठोर दंड दिया।' },
    moral: { English: 'Equal justice for all creates an incorruptible society.', Marathi: 'कायद्यासमोर सर्व समान असणे हेच चांगल्या राज्याचे लक्षण आहे.', Hindi: 'कानून के समक्ष सब समान हैं, यही न्यायपूर्ण राष्ट्र का मूल मंत्र है।' }
  },
  {
    order: 47,
    year: '1680 CE',
    location: 'Raigad Fort',
    title: { English: 'Environmental Wisdom: The Royal Tree Edict', Marathi: 'वृक्ष संवर्धन आणि पर्यावरणाचा राज्यादेश', Hindi: 'वृक्ष संरक्षण और पर्यावरण का शाही संदेश' },
    summary: { English: 'Shivaji commands that mango, jackfruit, and teak trees should never be chopped for navy timber.', Marathi: 'फळझाडे शेतकऱ्यांनी मुलांसारखी वाढवलेली असतात, ती तोडण्यास शिवरायांनी सक्त मनाई केली.', Hindi: 'फलदार वृक्ष किसानों के बच्चों समान होते हैं, उन्हें काटना अपराध माना गया।' },
    moral: { English: 'Harmony with nature ensures survival of civilization.', Marathi: 'निसर्गाचा आदर करणे हेच राष्ट्राच्या समृद्धीचे लक्षण आहे.', Hindi: 'प्रकृति और पर्यावरण का संरक्षण ही भावी पीढ़ियों की असली संपदा है।' }
  },
  {
    order: 48,
    year: '1680 CE',
    location: 'Raigad Fort',
    title: { English: 'Religious Tolerance and Respect for All Faiths', Marathi: 'सर्वधर्म समभाव आणि कुराण शरीफचा सन्मान', Hindi: 'धार्मिक सहिष्णुता और पवित्र ग्रंथों का सम्मान' },
    summary: { English: 'Shivaji ordered that whenever a holy book like the Quran was found during campaigns, it be handed respectfully to Muslims.', Marathi: 'लढाईत कुराण शरीफ सापडल्यास ते अत्यंत आदराने परत देण्याचा शिवरायांचा कडक नियम होता.', Hindi: 'युद्ध में पवित्र कुरान मिलने पर उसे ससम्मान मुस्लिम भाइयों को सौंपने का नियम था।' },
    moral: { English: 'True nobility respects the sacred traditions of every human being.', Marathi: 'इतरांच्या धर्माचा आणि श्रद्धेचा आदर करणे हेच श्रेष्ठत्व आहे.', Hindi: 'दूसरों की आस्था और पवित्र ग्रंथों का सम्मान ही सच्चा धर्म है।' }
  },
  {
    order: 49,
    year: '1680 CE',
    location: 'Raigad Fort',
    title: { English: 'The Final Departure of the Great King', Marathi: 'महानायकाचे महापरिनिर्वाण: ३ एप्रिल १६८०', Hindi: 'महानायक का महाप्रयाण: ३ अप्रैल १६८०' },
    summary: { English: 'On 3rd April 1680, at Raigad, the great Chhatrapati breathes his last, leaving behind an immortal flame of liberty.', Marathi: '३ एप्रिल १६८० रोजी शिवरायांनी अखेरचा श्वास घेतला, पण स्वातंत्र्याची अमर ज्योत कायम पेटती ठेवली.', Hindi: '३ अप्रैल १६८० को रायगढ़ में छत्रपति शिवाजी महाराज ने अमर ज्योति प्रज्वलित कर महासमाधि ली।' },
    moral: { English: 'Physical bodies perish, but ideals of self-respect and freedom never die.', Marathi: 'देह संपला तरी विचारांचे आणि स्वराज्याचे तेज कधीही मावळत नाही.', Hindi: 'शरीर नश्वर है, किंतु स्वाभिमान और स्वतंत्रता के विचार अमर रहते हैं।' }
  },
  {
    order: 50,
    year: '1680 CE to Eternity',
    location: 'Across India & The World',
    title: { English: 'The Eternal Inspiration of Chhatrapati Shivaji', Marathi: 'शिवछत्रपतींचे चिरंतन विचार आणि प्रेरणा', Hindi: 'छत्रपति शिवाजी महाराज की शाश्वत प्रेरणा' },
    summary: { English: 'Shivaji Maharaj remains an eternal role model of justice, secularism, valor, and champion leadership.', Marathi: 'न्याय, धैर्य आणि लोककल्याणाचे मूर्तिमंत प्रतीक म्हणून शिवराय आजच्या प्रत्येक विद्यार्थ्याला प्रेरणा देतात.', Hindi: 'न्याय, साहस और जन-कल्याण के शाश्वत प्रतीक के रूप में शिवाजी सदैव अमर रहेंगे।' },
    moral: { English: 'Live not for personal comfort, but for the upliftment and dignity of all.', Marathi: 'स्वतःसाठी नव्हे, तर समाजाच्या आणि राष्ट्राच्या उद्धारासाठी जगावे.', Hindi: 'अपने लिए नहीं, सम्पूर्ण मानवता और राष्ट्र के गौरव के लिए जीना ही सर्वोच्च धर्म है।' }
  }
];

// Append remaining 40 stories with full paragraphs
REMAINING_SHIVAJI_STORIES_DATA.forEach(item => {
  SHIVAJI_STORIES.push({
    id: `SHIVAJI-${String(item.order).padStart(2, '0')}`,
    order: item.order,
    year: item.year,
    location: item.location,
    title: item.title,
    summary: item.summary,
    moral: item.moral,
    paragraphs: {
      English: [
        `${item.title.English} represents a crucial turning point in the history of Swarajya in ${item.year} at ${item.location}. Chhatrapati Shivaji Maharaj demonstrated extraordinary leadership, prioritizing the safety and honor of his people above all personal considerations.`,
        `During this historic chapter, ${item.summary.English} The Maratha Mawalas and commanders worked with unmatched unity, discipline, and devotion under the saffron flag of Hindavi Swarajya.`,
        `The eternal lesson from this heroic feat is that ${item.moral.English} Every student learning from Shivaji Maharaj derives inspiration to overcome any life obstacle with courage, wisdom, and moral integrity.`
      ],
      Marathi: [
        `इ.स. ${item.year} मधील ${item.location} येथील ही घटना हिंदवी स्वराज्याच्या इतिहासातील एक सुवर्ण अध्याय आहे. शिवछत्रपतींनी आपल्या असीम धैर्याने आणि दूरदृष्टीने रयतेचे रक्षण केले.`,
        `${item.summary.Marathi} मावळ्यांनी एकदिलाने आणि प्राणांची बाजी लावून हे कार्य फत्ते केले. शिवरायांचे नेतृत्व प्रत्येक संकटाला विजयाच्या संधीत बदलणारे होते.`,
        `या प्रसंगातून आपल्याला शिकायला मिळते की: ${item.moral.Marathi} शिवरायांचे हे चरित्र आजच्या प्रत्येक विद्यार्थ्याला ध्येयनिष्ठ आणि नीतिमान बनण्याची प्रेरणा देते.`
      ],
      Hindi: [
        `ईस्वी सन ${item.year} में ${item.location} की यह ऐतिहासिक घटना स्वराज्य निर्माण का एक अविस्मरणीय अध्याय है। छत्रपति शिवाजी महाराज ने अपने अद्भुत शौर्य और नीति से जन-कल्याण का मार्ग प्रशस्त किया।`,
        `${item.summary.Hindi} सभी मावलों ने अद्वितीय पराक्रम और निष्ठा का परिचय देते हुए इस अभियान को सफल बनाया।`,
        `इस पावन प्रसंग की अमर सीख है: ${item.moral.Hindi} शिवाजी महाराज के जीवन से प्रत्येक विद्यार्थी को स्वाभिमान, साहस और न्याय के मार्ग पर चलने की प्रेरणा मिलती है।`
      ]
    }
  });
});
