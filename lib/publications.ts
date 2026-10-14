export interface Publication {
  citation: string;
  url?: string;
  linkLabel?: string;

  // Conference-specific fields
  date?: string;
  authors?: string;
  type?: string;
  venue?: string;
}

export interface PublicationCategory {
  id: string;
  title: string;
  publications: Publication[];
}

export const publicationCategories: PublicationCategory[] = [
  {
    id: "journal-articles",
    title: "Journal Articles",
publications: [
  {
    citation:
      "Ratnaparke, S. A. R. V., & Das, M. (2026). Malissa Clark, Never Not Working: Why the Always-On Culture is Bad for Businesses - and How to Fix it. Harvard Business Review Press, 2024. In; NHRD Network journal [Upcoming manuscript].",
  },
  {
    citation:
      "Shah, M., & Das, M. (in press). Hysteria to resistance: Women’s psychological distress in Indian cinema. Sambhashan.",
  },
  {
    citation:
      "Shah, M., & Das, M. (in press). Logged in to belong: Understanding digital presenteeism as organizational identity. NHRD Journal.",
  },
  {
    citation:
      "Das, M., & Palo, S. (2025). Shift work, sleep and well-being: A qualitative study on the experience of rotating shift workers. Management and Labour Studies, 50(2), 148–165.",
    url: "https://doi.org/10.1177/0258042X241286238",
    linkLabel: "DOI",
  },
  {
    citation:
      "Khanna, P., Deshmukh, I., & Das, Dr. M. (2025). Impulsive and Planned Suicide Behaviour through the lens of temporal Decision Making. University of Mumbai.",
    url: "https://mu.ac.in/wp-content/uploads/2025/03/148-160-Impulsive-and-Planned-Suicide-Behaviour-Through-the-Lens-of-Temporal-Decision-Making.pdf",
    linkLabel: "Publication",
  },
  {
    citation:
      "Shah, M., & Das, M. (2025). Intersection of caste and Student Suicide in India: A Scoping Review. Sambhāṣaṇ, 5(3), 72–94.",
    url: "https://mu.ac.in/wp-content/uploads/2025/03/72-94-Intersection-of-Caste-and-Student-Suicide-in-India-A-Scoping-Review.pdf",
    linkLabel: "Publication",
  },
  {
    citation:
      "Palo, S., Swaika, D., & Das, M. (2025). The rainbow after the storm: The power of post-traumatic growth. Frontiers for Young Minds, 13, Article 1476968.",
    url: "https://doi.org/10.3389/frym.2025.1476968",
    linkLabel: "DOI",
  },
  {
    citation:
      "Tripathi, A., & Das, M. (2024). Unpacking the “Bihariness”-Reflections on “Indian Predator: The Butcher of Delhi”. Changing Societies & Personalities, 8(1), 222–238.",
    url: "https://doi.org/10.15826/csp.2024.8.1.272",
    linkLabel: "DOI",
  },
  {
    citation:
      "Singh, A., &, Dr. M. (2024). Loneliness, loss and life: A Scoping Review of Elderly Suicide in Developing Countries. 5(4), 105–126. University of Mumbai.",
  },
  {
    citation:
      "Palo, S., & Das, M. (2021). Sleeping Well: The Gateway to Employee Wellness. NHRD Network Journal, 14(1), 103–114.",
  },
  {
    citation:
      "Das, M. (2021). Richard Chataway, The Behavior Business: How to Apply Behavioural Science for Business Success.",
  },
  {
    citation:
      "Palo, S., & Das, M. (2020). Perfectionist? You Don’t Need to Sleep: An interplay of Daytime Sleepiness and Task Performance. Journal of Rational-Emotive & Cognitive-Behavior Therapy, 1–18.",
  },
  {
    citation:
      "Palo, S., & Das, M. (2019). Prevalence of sleep problems in diverse professions in India and its HR implications. Sleep and Vigilance, 3(1), 65–75.",
  },
  {
    citation:
      "Das, M., & Palo, S. (2018). Sleep and Cognitive Alertness. EPH-International Journal of Business & Management Science (ISSN: 2208-2190), 4(1), 28–36.",
  },
  {
    citation:
      "Das, M. (2017). Understanding the role of trainers in empowering the employees at the workplace. International Journal of Education and Management Studies, 7(4), 522–529.",
  },
  {
    citation:
      "Das, M. (2017). Agility: Understanding the Concept and its Importance at the Workplace. International Journal of Social Sciences, 5(4), 598–602.",
  },
],

  },
  {
    id: "book-chapters",
    title: "Book Chapters",
publications: [
  {
    citation:
      "Swaika, D., Das, M. (2026). Psychotherapeutic Interventions for Work-Related Stress: Pathways to Well-Being in the Modern Workplace. In: Gbadamosi, A., Kuzmanović, V. (eds) Auto-Psychology, Psychological Marketing, Well-Being, and the Workplace. Contributions to Management Science. Springer, Cham.",
    url: "https://doi.org/10.1007/978-3-032-16348-6_4",
    linkLabel: "DOI",
  },
  {
    citation:
      "Dedhia, A. M., Das, M., & Shah, M. (2026). Coping with burnout across cultures. In A. Gbadamosi & V. Kuzmanovic (Eds.), Auto-psychology, psychological marketing, well-being, and the workplace: Implications for theory and practice. Springer Nature Switzerland AG.",
    url: "https://link.springer.com/chapter/10.1007/978-3-032-16348-6_6",
    linkLabel: "Chapter",
  },
  {
    citation:
      "Dedhia, A. M., & Das, M. (2026). Job burnouts and coping mechanisms among culturally diverse workforces. In A. Dubey & A. Shukla (Eds.), Mental health: Psycho-social perspectives (Vol. 8, Mental health at workplace). Concept Publishing Company.",
  },
  {
    citation:
      "Shah, M. & Das, M. (2025). Local Hearts, Global Minds: Using SEL to Prevent Bullying in Resource-Constrained Establishments. In T. Gkatsa & N. Doghonadze (Eds.), Promoting Positive Behaviors and Emotional/Social Wellbeing in School (pp. 259-290). IGI Global Scientific Publishing.",
    url: "https://doi.org/10.4018/979-8-3373-3351-9.ch009",
    linkLabel: "DOI",
  },
  {
    citation:
      "Borah, R., & Das, M. (in press). From profit to purpose: Exploring the psychosocial factors propelling ayahuasca consumption in business leaders in the West. In N. Pant (Ed.), Spiritual psychology: Conventional and modern approaches to well-being.",
  },
  {
    citation:
      "Shah, M., & Das, M. (2026). Reclaiming indigenous healing: Exploring rural India’s folk therapies and community-based practices. In S. Mittal (Ed.), Indian psychology and indigenous knowledge systems: Wisdom traditions in mental health practice. (In press).",
  },
  {
    citation:
      "Shah, M., & Das, M. (2026). Cultural dimensions of rituals: Exploring the role of repetitive rituals in improving psychological well-being. In L. M. Pant, A. K. Saha, S. Kumar, & N. Y. Felles (Eds.), Echoes of the mind: Ritual recitation and psychological well-being. Bentham Books. (In press).",
  },
  {
    citation:
      "Shah, M., Shah, P., & Das, M. (2026). The psychosocial realities of juvenile offenders in India: A critical study of rehabilitation practices and legal safeguards under the Juvenile Justice Act. In M. A. Karim & Z. Parwez (Eds.), Child psychology and the law: Navigating juvenile justice in India. Urania Publishing House. (In press).",
  },
  {
    citation:
      "Ajay, R., Shah, M., & Das, M. (Unpublished manuscript). Building psychological safety using inclusive leadership. In Multicultural teams: A cross cultural multilevel framework. IGI Global.",
  },
  {
    citation:
      "Malhotra, I. & Das, M. (2024). The Digital Self: Self Presentation and Authenticity on Social Media Platforms. In the Edited Book “Mindful Media: Mental Health Challenges in the Digital Age”, (pp. 444-452), BlueRose Publishers Private Limited: India and UK. ISBN: 978-93-6452-363-9.",
  },
  {
    citation:
      "Asad, Z. & Das, M. (2024). Chronic Illnesses and Mental Well-being: Current Trends and Practices in the edited book, “Health Psychology in Integrative Healthcare”, (pp. 232-238), Taylor & Francis Group, London. ISBN: 978-1-032-98049-2.",
  },
  {
    citation:
      "Kumar, Stuti. & Das, M. (2024). Cognitive Diversity in a Neurotypical Space: The Case for Artificial Intelligence in the edited book, “HUMAN COGNITION: In the Digital Era”, (pp. 70-79), Clever Fox Publishing, ISBN: 978-93-5648-586-0.",
  },
  {
    citation:
      "Shah, M. & Das, M. (2024). The Shopping Algorithm: Decoding Cognitive Mechanisms in Online Shopping Behaviour in the edited book, “HUMAN COGNITION: In the Digital Era”, (pp. 126-137), Clever Fox Publishing, ISBN: 978-93-5648-586-0.",
  },
  {
    citation:
      "Grover, M. & Das, M. (2024). Understanding the New Age Reality of Online Identity and Self-Perception in the edited book, “HUMAN COGNITION: In the Digital Era”, (pp. 90-98), Clever Fox Publishing, ISBN: 978-93-5648-586-0.",
  },
  {
    citation:
      "Thombare, N. & Das, M. (2024). Social Responsibility in Indian Organizations: The Way Forward for Sustainable Development in the edited book, “Fresh Perspectives on India's Organizational Dimension”, (pp. 121-138), World Scientific Publishing, ISBN: 978-981-12-9645-1.",
  },
  {
    citation:
      "Natekar, K. & Das, M. (2024). Perspectives on Authenticity and Impression Management on Social Media Platforms. In the Edited Book “Mindful Media: Mental Health Challenges in the Digital Age”, (pp. 407-416), BlueRose Publishers Private Limited: India and UK. ISBN: 978-93-6452-363-9.",
  },
  {
    citation:
      "Bafna, S. & Das, M. (2024). Social Comparison and Body Image in Present Scenario. In the Edited Book “Mindful Media: Mental Health Challenges in the Digital Age”, (pp. 146-156), BlueRose Publishers Private Limited: India and UK. ISBN: 978-93-6452-363-9.",
  },
  {
    citation:
      "George, L. & Das, M. (2024). Consequences of Excessive Media Consumption in Children. In the Edited Book “Mindful Media: Mental Health Challenges in the Digital Age”, (pp. 63-72), BlueRose Publishers Private Limited: India and UK. ISBN: 978-93-6452-363-9.",
  },
  {
    citation:
      "Dedhia, A. & Das, M. (2025). Addressing Job Burnout in Culturally Diverse Workforces as part of the Conference Proceedings of the “International Conference on Innovation, Sustainability, and Applied Sciences” in the book series - Signals and Communications Technology, PP (565-570), Springer Publication, 978-3-031-68951-2.",
  },
  {
    citation:
      "Pasad, S., Swaika, D. & Das, M. (2024). The Role of Self Compassion in fostering Resilience among Adolescents in the edited book, “Mental Health in School Settings”, (pp: 107-139), MLBD Publication, ISBN: 978-93-5966-419-4.",
  },
  {
    citation:
      "Garg, N. & Das, M. (2024). Mandatory Personal Therapy for Aspiring Psychologists in the edited book, “Contemporary Perspectives in Modern Psychology”, (pp. 139-150), Red Shine Publication, ISBN: 978-93-5879-583-7.",
  },
  {
    citation:
      "Asad, Z. & Das, M. (2023). Neuropsychological Correlates Associated with Behavioural Addictions. In the Edited Book, “Process Addiction From the Clinician's Lens” (pp. 270-276), Nikhil Publishers. ISBN: 978-93-5552-905-3.",
  },
  {
    citation:
      "Thampi, G. & Das, M. (2023). Clothing and Self-Consciousness: An Intricate Socio-Psychological Analysis of the Relationship between the two. In the Edited Book, “Body, Clothing, and Identity in Shifting Ideas of Development” (pp. 8-20), Perception Publishers. ISBN: 978-93-95949-13-2.",
},
],

  },
  {
    id: "case-studies",
    title: "Case Studies",
    publications: [
      {
        citation:
          "Chaudhari, S., Palo. S, Das, M. & Gupta, V. (2024). Prologue: Performing for Both Profiting and Development. World Scientific Publishing Company.",
        url: "https://doi.org/10.1142/9789811296444_fmatter",
        linkLabel: "DOI",
      },
      {
        citation:
          "Shah, M., & Das, M. (Accepted, unpublished manuscript). Behind the rating: Emotional labour and gendered pressure in platform service work. In Practical applications of industrial and organizational psychology: Multidisciplinary case studies from the Global South. Routledge.",
      },
      {
        citation:
          "Shah, M., & Das, M. (Accepted, unpublished manuscript). Present but muted: AI monitoring and burnout in remote work environments. In Practical applications of industrial and organizational psychology: Multidisciplinary case studies from the Global South. Routledge.",
      },
    ],
  },

  {
  id: "conference-presentations",
  title: "Conference Presentations",
  publications: [
  {
    date: "July 21, 2026",
    citation:
      "Evaluating the perceived utility of AI-tools among university students: A cross-sectional study",
    authors: "Ratnaparke, S. A. R. V., & Das, M.",
    type: "Upcoming conference presentation",
    venue:
      "International Conference 2026 at Woxsen University, Hyderabad, India.",
  },
  {
    date: "December 10–12, 2026",
    citation:
      "A Normative Policy of Gratitude in Times of Uncertainty, Frustration, and Sorrow",
    authors: "Ratnaparke, S. A. R. V., & Das, M.",
    type: "Upcoming conference",
    venue:
      "GratCon 2026; A global conference, Christ University, Bengaluru, India.",
  },
  {
    date: "December 10–12, 2026",
    citation:
      "Developmental Neurobiology of Gratitude: Role of Early Experiences in Shaping Capacity for Gratitude",
    authors: "Shah, M., & Das, M.",
    type: "Upcoming conference",
    venue:
      "GratCon 2026; A global conference, Christ University, Bengaluru, India.",
  },
  {
    date: "October 26–28, 2026",
    citation:
      "Bridging the bot gap: How generations are adapting to generative AI",
    authors: "Shah, M., & Das, M.",
    type: "Upcoming conference presentation",
    venue:
      "11th International Conference of the Indian Academy of Health Psychology (ICIAHP–2026), Thavorn Palm Beach Resort, Phuket, Thailand.",
  },
  {
    date: "September 18–19, 2026",
    citation:
      "AI mediated work systems: A review of psychological consequences, workplace wellbeing, and managerial decision making",
    authors: "Pandey, A., Shah, M., & Das, M.",
    type: "Upcoming conference presentation",
    venue:
      "IMC International Research Conference (IMC-IRC) 2026, Indian Institute of Management Lucknow, Noida Campus, Delhi NCR, India.",
  },
  {
    date: "September 18–19, 2026",
    citation: "AI paradox in management education: Capability or dependency?",
    authors: "Shah, M., & Das, M.",
    type: "Upcoming conference presentation",
    venue:
      "IMC International Research Conference (IMC-IRC) 2026, Indian Institute of Management Lucknow, Noida Campus, Delhi NCR, India.",
  },
  {
    date: "December 10–11, 2026",
    citation:
      "Developmental Neurobiology of Gratitude: Role of Early Experiences in Shaping Capacity for Gratitude",
    authors: "Shah, M. & Das, M.",
    type: "Upcoming conference presentation",
    venue:
      "The Global Conference on Developing Grateful Communities 2026 (GRATCon), Christ University, Bangalore.",
  },
  {
    date: "March 27–28, 2026",
    citation:
      "Who’s calling the shots?: Is algorithmic decision-making shaping organizational values and psychological safety",
    authors: "Mehra, M., & Das, M.",
    type: "Oral presentation",
    venue:
      "National Conference of Psychology 2026: Bridging Theory and Practice: Psychology at the Workplace, FLAME University, Pune, India.",
  },
  {
    date: "March 27–28, 2026",
    citation: "Awws of the paws: The case of pet-friendly workplaces",
    authors: "Mehra, M., & Das, M.",
    type: "Poster presentation",
    venue:
      "National Conference of Psychology 2026: Bridging Theory and Practice: Psychology at the Workplace, FLAME University, Pune, India.",
  },
  {
    date: "March 14–15, 2026",
    citation:
      "The ontological misplacement of self: From behavioral regulation to ontological discernment in digital well-being",
    authors: "Chaudhari, S. R., & Das, M.",
    type: "Oral presentation",
    venue:
      "13th International Conference on Spirituality: A Tested Paradigm for Global Well-Being, Sustainability and Digital Mindfulness, School of Management Sciences, Varanasi, India.",
  },
  {
    date: "March 14–15, 2026",
    citation:
      "A systematic review of how interfaith harmony reduces prejudice through collective empathy in pursuit for global peace",
    authors: "Abhijeet, S., & Das, M.",
    type: "Conference presentation",
    venue:
      "13th International Conference on Spirituality: A Tested Paradigm for Global Well-Being, Sustainability and Digital Mindfulness, School of Management Sciences, Varanasi, India.",
  },
  {
    date: "March 14–15, 2026",
    citation:
      "Belief or Buffer? Exploring The Role of Intrinsic and Extrinsic Spirituality in Burnout",
    authors: "Shah, M. & Das, M.",
    type: "Conference presentation",
    venue:
      "13th International Conference on Spirituality: A Tested Paradigm for Global Well-Being, Sustainability, and Digital Mindfulness, School of Management Sciences, Varanasi.",
  },

  {
    date: "February 17–20, 2025",
    citation: "The impact of dating apps on self-esteem and body image",
    authors: "Mehra, S., Das, M., Kotbagi, G., & Patki, S.",
    type: "Oral presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP), CHRIST (Deemed to be University), Delhi NCR Campus, India.",
  },
  {
    date: "July 2025",
    citation:
      "Impact of modern dating trends in dating apps on self-esteem and body image",
    authors: "Mehra, S., Das, M., Kotbagi, G., & Patki, S.",
    type: "Oral presentation",
    venue:
      "10th International Conference on Behavioural Addictions (ICBA), Nantes, France.",
  },
  {
    date: "July 10–12, 2025",
    citation: "Polycultural identity and globalization threat: An Indian perspective",
    authors: "Ramanathan, P., Siddiqui, R., & Das, M.",
    type: "Conference presentation",
    venue:
      "16th Biennial Conference of the Asian Association of Social Psychology (AASP 2025), Monash University Malaysia, Kuala Lumpur, Malaysia.",
  },
  {
    date: "February 17–20, 2025",
    citation:
      "Therapy for Therapists: Mental Health Challenges and Help-Seeking Behaviours Among Psychologists in India",
    authors: "Vaid, A., Belavadi, S. & Das, M.",
    type: "Conference presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP) in collaboration with CHRIST (Deemed to be University).",
  },
  {
    date: "February 17–20, 2025",
    citation:
      "Political Apathy or Activism: Understanding Gen Z's Trust in Political Institutions and its Effect on Voter Turnout in India",
    authors: "Khanna, P. & Das, M.",
    type: "Conference presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP) in collaboration with CHRIST (Deemed to be University).",
  },
  {
    date: "February 17–20, 2025",
    citation:
      "Sacrifice and Identity: Exploring Martyrdom in Historical and Contemporary Contexts",
    authors: "Deshmukh, I. & Das, M.",
    type: "Conference presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP) in collaboration with CHRIST (Deemed to be University).",
  },
  {
    date: "February 22–23, 2025",
    citation: "The Impact of Ghosting on Self-Esteem and Body Image Issues",
    authors: "Mehra, S., Patki, S. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Innovation, Sustainability and Applied Sciences (ICISAS 2025), Curtin University Dubai.",
  },
  {
    date: "February 22–23, 2025",
    citation:
      "The Burden of Healing: Understanding Psychologists Mental Health In India",
    authors: "Vaid, A., Belavadi, S. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Innovation, Sustainability and Applied Sciences (ICISAS 2025), Curtin University Dubai.",
  },
  {
    date: "March 28–29, 2025",
    citation:
      "Exploring the Nexus between India's Economic Climate and Inter-cultural perspectives on Happiness",
    authors: "Ratnaparke, S.A. & Das, M.",
    type: "Conference presentation",
    venue:
      "3rd Annual Conference of the National Positive Psychology Association (NPPA).",
  },
  {
    date: "August 6–8, 2025",
    citation:
      "The ‘Empty Stadium’ Problem: Why Fancy Buildings Don’t Fix Boring Classes",
    authors: "Shah, K. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference on Organisational Culture, Work Values and Organisational Performance in Higher Education Institutions (ICOC ‘25), Christ University, Bangalore.",
  },
  {
    date: "August 6–8, 2025",
    citation:
      "Power, Pedagogy, Pressure: A Comparative Review On Student Faculty Relations",
    authors: "Shah, M. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference on Organisational Culture, Work Values and Organisational Performance in Higher Education Institutions (ICOC ’25), Christ University, Bangalore.",
  },

  {
    date: "2024",
    citation: "We Only Rent to Families: Singlehood and Rental Housing",
    authors: "Tripathi, A. & Das, M.",
    type: "Conference presentation",
    venue:
      "7th Annual South Asia Conference at Dublin City University, Dublin, Ireland.",
  },
  {
    date: "August 9, 2024",
    citation: "Understanding the Evaluation Systems for Mental Health Applications",
    authors: "Grover, M. & Das, M.",
    type: "Conference presentation",
    venue:
      "Synod 3.0 Conference held at Surana Educational Institutions in collaboration with Cairnmillar Institute.",
  },
  {
    date: "August 9, 2024",
    citation:
      "Enhancing Adolescent Mental Health: How AI Companions Complement, but Don't Replace Human Therapists",
    authors: "Sam, T. & Das, M.",
    type: "Conference presentation",
    venue:
      "Synod 3.0 Conference held at Surana Educational Institutions in collaboration with Cairnmillar Institute.",
  },
  {
    date: "August 9, 2024",
    citation:
      "Technological Adaptations in Language for Online Psychotherapy: Enhancing Accessibility and Effectiveness",
    authors: "Vaid, A., Bansal, D. & Das, M.",
    type: "Conference presentation",
    venue:
      "Synod 3.0 Conference held at Surana Educational Institutions in collaboration with Cairnmillar Institute.",
  },
  {
    date: "September 17–19, 2024",
    citation:
      "Uncovering the Structural Barriers to Employment and Mental Well-Being for Indian Graduates",
    authors: "Khanna, P. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Holistic Health: Exploring Interconnected Realms of Well-Being (HHERW2024), SGT University.",
  },
  {
    date: "September 17–19, 2024",
    citation:
      "Unseen Scars: Understanding Secondary Trauma from Media Exposure to Violence and Disasters",
    authors: "Deshmukh, I. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Holistic Health: Exploring Interconnected Realms of Well-Being (HHERW2024), SGT University.",
  },
  {
    date: "September 17–19, 2024",
    citation: "How Diversity and Inclusivity Differ and Why Both Matter",
    authors: "Arora, T. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Holistic Health: Exploring Interconnected Realms of Well-Being (HHERW2024), SGT University.",
  },
  {
    date: "2024",
    citation:
      "Women's Bodies and Minds: A Qualitative Analysis of Psychological Implications of Gendered Inequities in Indian Health Care Settings",
    authors: "Smitha, D. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Social Sciences (ICSS), Amity University.",
  },
  {
    date: "2024",
    citation:
      "The Impact of Sleep Apnea and Daytime Sleepiness on the Employee Engagement of the IT sector employees in India",
    authors: "Dhillon, S. & Das, M.",
    type: "Conference presentation",
    venue:
      "Bombay Psychological Association (BPA) Trust's 31st Annual International Multidisciplinary Conference.",
  },
  {
    date: "2024",
    citation:
      "Psychological Responses to Gender-based Violence in Indian Healthcare Settings",
    authors: "Smitha, D. & Das, M.",
    type: "Conference presentation",
    venue:
      "Bombay Psychological Association (BPA) Trust's 31st Annual International Multidisciplinary Conference.",
  },
  {
    date: "2024",
    citation:
      "The Role of CSR, Corporate Governance and Sustainable Development in SMEs: Exploring Interconnection and Benefits",
    authors: "Thombare, N. & Das, M.",
    type: "Conference presentation",
    venue:
      "9th INDAM Conference on Creating Impact through Responsible Leadership & Sustainable Business Practices, Goa Institute of Management.",
  },

  {
    date: "2023",
    citation: "Addressing Job Burnout in Culturally Diverse Workforces",
    authors: "Dedhia, A. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Innovation, Sustainability and Applied Sciences (ICISAS), Curtin University, Dubai.",
  },
  {
    date: "2023",
    citation: "Chronic Illnesses and Mental Wellbeing: Current Trends and Practices",
    authors: "Zaina, A. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Indian Academy of Health Psychology (ICIAHP).",
  },
  {
    date: "2023",
    citation:
      "The Implications of Pain Catastrophizing: A Cognitive Therapy-Based Approach",
    authors: "George, L. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Indian Academy of Health Psychology (ICIAHP).",
  },
  {
    date: "November 2023",
    citation: "Navigating Coping Mechanisms in Culturally Diverse Workforce",
    authors: "Dedhia, A. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference of Indian Academy of Health Psychology (ICIAHP).",
  },
  {
    date: "August 2023",
    citation:
      "Job Burnout and Coping Mechanisms among Culturally Diverse Workforce",
    authors: "Dedhia, A. & Das, M.",
    type: "Conference presentation",
    venue:
      "National Seminar on Positive Psychology for Holistic Development.",
  },
  {
    date: "December 2023",
    citation: "Does Resilience building improve Quality of Life",
    authors: "Mundhra, C. & Das, M.",
    type: "Conference presentation",
    venue:
      "National Seminar on Positive Psychology for Holistic Development, 2023.",
  },
  {
    date: "August 2023",
    citation:
      "The Role of Self Compassion in Fostering Resilience and Recovery from Stress among Youth",
    authors: "Prasad, S., Swaika, D. & Das, M.",
    type: "Conference presentation",
    venue:
      "National Seminar on Positive Psychology for Holistic Development.",
  },
  {
    date: "2023",
    citation:
      "Exploring the Experiences of LGBTQIA + Youth in India: a Descriptive Content Review",
    authors: "Desai, V. Das, M.",
    type: "Conference presentation",
    venue:
      "Virtual Asia-Pacific Mental Health Symposium (VAMHS).",
  },
  {
    date: "2023",
    citation:
      "Pain Perception and Cancer: A Review on Current Day Therapeutic Techniques",
    authors: "George, L. & Das, M.",
    type: "Conference presentation",
    venue:
      "Virtual Asia-Pacific Mental Health Symposium (VAMHS), 2023.",
  },

  {
    date: "2022",
    citation: "Case study on 'Bandhan Bank'",
    authors: "Choudhury, S., Palo, S & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference on Case Development (ICCD), ICFAI Tripura.",
  },
  {
    date: "2022",
    citation: "Security in the Age of Flexibility: The Case of Bandhan Bank",
    authors: "Choudhury, S., Palo, S & Das, M.",
    type: "Conference presentation",
    venue: "INDAM 2023 Conference at SBM-NMIMS Mumbai.",
  },
  {
    date: "2022",
    citation:
      'We Rent Only to Families": Rental Housing and Singlehood in Indian Cities',
    authors: "Tripathi, A. & Das, M.",
    type: "Conference presentation",
    venue: "Web Conference on Law and Singlehood in India.",
  },
  {
    date: "2022",
    citation:
      "Unpacking the 'Bihariness': Reflections on Indian Predator: The Butcher of Delhi",
    authors: "Tripathi, A. & Das, M.",
    type: "Conference presentation",
    venue:
      "International Conference on Migrant Workers, Cultural (Re) Production, and the Culture Industry in South Asia, Tezpur University.",
  },

  {
    date: "2020",
    citation: "Poor Sleep: An Epidemic keeping Indians awake",
    authors: "Das, M.",
    type: "NHRD Event",
    venue: "NHRD Event, Mumbai Chapter.",
  },
  {
    date: "2019",
    citation:
      "Perfectionist? You don’t need to sleep: An interplay of Daytime Sleepiness and Task Performance",
    authors: "Das, M.",
    type: "Doctoral colloquium presentation",
    venue: "13th Annual ISDSI Conference.",
  },
  {
    date: "2018",
    citation:
      "Understanding the sleep inadequacy problem among Research Students",
    authors: "Das, M.",
    type: "Doctoral colloquium presentation",
    venue: "Management Doctoral Colloquium, IIT Kharagpur.",
  },
  {
    date: "2017",
    citation:
      "Understanding the sleep inadequacy among corporate professionals",
    authors: "Das, M.",
    type: "Conference presentation",
    venue: "INDAM Conference, IIM Indore.",
  },
  {
    date: "2017",
    citation: "Poster Presentation on the Poor Sleeping Patterns of the youth",
    authors: "Das, M.",
    type: "Poster presentation",
    venue: "Indian Society for Sleep Research (ISSR).",
  },
],
  },
  {
    id: "opinion-editorials",
    title: "Opinion Editorials",
    publications: [
      {
        citation:
          "Pandey, A., & Das M (2026, July 23). When Adults Call It Wasted Time, Young People Call It Coping. Northeast Now.",
        url: "https://www.nenow.in/opinion/when-adults-call-it-wasted-time-young-people-call-it-coping.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das M (2026, July 17). Swipe Right, Think Twice: What No One Tells You About Online Dating. Northeast Now.",
        url: "https://nenow.in/opinion/swipe-right-think-twice-what-no-one-tells-you-about-online-dating.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., Das M & Shah., M (2026, June 30). When the Workplace Feels Emotionally Empty. Business Manager.",
        url: "https://bmhrmagazine.com/when-the-workplace-feels-emotionally-empty/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das M (2026, June 30). Mental Health in the Age of Algorithms. Northeast Now.",
        url: "https://nenow.in/opinion/mental-health-in-the-age-of-algorithms.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das M (2026, June 22). The Table by the Window: Why Cafe’s have become emotional support spaces for young adults. Northeast Now.",
        url: "https://nenow.in/opinion/the-table-by-the-window-why-cafes-have-become-emotional-support-spaces-for-young-adults.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das M (2026, June 12). The silent heartbreak of outgrowing friends you still love. Northeast Now.",
        url: "https://nenow.in/opinion/the-silent-heartbreak-of-outgrowing-friends-you-still-love.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2026, May 31). Dopamine stacking: Bio-hacking or bombarding? Northeast Now.",
        url: "https://nenow.in/opinion/dopamine-stacking-bio-hacking-or-bombarding.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2026, May 29). Cockroach Janata Party: How humiliation is turning into collective identity. Northeast Now.",
        url: "https://nenow.in/opinion/cockroach-janata-party-how-humiliation-is-turning-into-collective-identity.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das M (2026, July 10). Between Departures and Arrivals: Why Airports Feel Emotionally Significant. Northeast Now.",
        url: "https://nenow.in/opinion/between-departures-and-arrivals-why-airports-feel-emotionally-significant.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Swaika, D., & Das, M. (2026, July 3). Beyond the joke: What the Rs 370 biryani row reveals. Telangana Today.",
        url: "https://telanganatoday.com/opinion-beyond-the-joke-what-the-rs-370-biryani-row-reveals",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2026, July 8). More than companionship: Why female friendships are essential to women’s emotional survival. Northeast Now.",
        url: "https://nenow.in/opinion/more-than-companionship-why-female-friendships-are-essential-to-womens-emotional-survival.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., & Das, M. (2026, May 15). Jobless boom: The human cost of AI revolution. Northeast Now.",
        url: "https://nenow.in/opinion/jobless-boom-the-human-cost-of-ai-revolution.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2026, May 13). Are employees really autonomous? Northeast Now.",
        url: "https://nenow.in/article/opinion/are-employees-really-autonomous/506692",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2026, May 10). Banning the symptom: Boon or bane? Northeast Now.",
        url: "https://nenow.in/opinion/banning-the-symptom-boon-or-bane.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khurana, S., & Das, M. (2026, May 6). From trust to transaction. Northeast Now.",
        url: "https://nenow.in/business/from-trust-to-transaction.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malhotra, M., & Das, M. (2026, May 3). Redefining the “settled-down” individual. Northeast Now.",
        url: "https://nenow.in/opinion/redefining-the-settled-down-individual.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., & Das, M. (2026, May 2). From ladders to lilypads: The Gen Z solution to stagnation. Northeast Now.",
        url: "https://nenow.in/article/from-ladders-to-lilypads-the-gen-z-solution-to-stagnation.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Mantry, V., & Das, M. (2026, April 30). The lily pad life is a luxury, not a movement. Northeast Now.",
        url: "https://nenow.in/opinion/the-lily-pad-life-is-a-luxury-not-a-movement.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2026, April 29). Fur and fear: The rise of safer companionships. Northeast Now.",
        url: "https://nenow.in/article/fur-and-fear-the-rise-of-safer-companionships.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Berani, A., & Das, M. (2026, April 7). Cognitive contamination in the information age. Northeast Now.",
        url: "https://nenow.in/opinion/cognitive-contamination-in-the-information-age.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Arora, S & Das, M.(2026, March 16). Can pain lead to strength? Psychologists explain the surprising power of post-traumatic growth. News18.",
        url: "https://www.news18.com/lifestyle/health-and-fitness/can-pain-lead-to-strength-psychologists-explain-the-surprising-power-of-post-traumatic-growth-ksh-ws-el-9961833.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chaudhary, S., & Das, M. (2026, March 15). When entry-level work disappears: Artificial intelligence and the fragile future of leadership. Northeast Now.",
        url: "https://nenow.in/opinion/when-entry-level-work-disappears-artificial-intelligence-and-the-fragile-future-of-leadership.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Srivastava, R., Das, M., & Chaudhary, S. (2026, March 13). Gen Z dating: How emotional distance is a core element of today’s dating culture. Northeast Now.",
        url: "https://nenow.in/opinion/gen-z-dating-how-emotional-distance-is-a-core-element-of-todays-dating-culture.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., Thombare, N., & Das, M. (2026, March 5). Are we empowering women, or just saying that we are? Northeast Now.",
        url: "https://nenow.in/opinion/are-we-empowering-women-or-just-saying-that-we-are.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chaudhari, S. R., Das, M., & Nibedita, B. (2026, February 28). Walking into the void: When even a penguin appears to withdraw. ETHRWorld.",
        url: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/workplace-ikigai/walking-into-the-void-when-even-a-penguin-appears-to-withdraw/128871354",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., & Das, M. (2026, February 19). The art of appearing productive. Northeast Now.",
        url: "https://nenow.in/opinion/the-art-of-appearing-productive.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Srivastava, R., & Das, M. (2026, February 14). Union Budget 2026–27: Will a new NIMHANS bridge India’s mental health gap? Northeast Now.",
        url: "https://nenow.in/north-east-news/assam/is-new-nimhans-enough-india-mental-health.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Kabra, V., & Das, M. (2026, February 11). Architecture of recovery: Why mental health facilities must treat design as medicine. Northeast Now.",
        url: "https://nenow.in/opinion/architecture-of-recovery-why-mental-health-facilities-must-treat-design-as-medicine.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Mantry, V., & Das, M. (2026, February 6). Psycholinguistic shift: How therapy-speak rewires the modern soul. Northeast Now.",
        url: "https://nenow.in/opinion/the-psycholinguistic-shift-how-therapy-speak-rewires-the-modern-soul.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Vaid, A., & Das, M. (2026, February 9). Before the breakdown: The case for preventive psychology. Northeast Now.",
        url: "https://nenow.in/opinion/before-the-breakdown-the-case-for-preventive-psychology.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, K., & Das, M. (2026, January 31). Psychology of feeling unloved: Why it hurts so deeply and how it shapes us. Northeast Now.",
        url: "https://nenow.in/opinion/when-love-ghosts-you.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, K., & Das, M. (2026, January 28). How do different cultures celebrate mistakes? What can children learn from “failing better”? Northeast Now.",
        url: "https://nenow.in/opinion/how-do-different-cultures-celebrate-mistakes-what-can-children-learn-from-failing-better.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Ratnaparke, S. A. R., Das, M., & Chaudhary, S. (2026, January 25). India’s labour codes: Can reform be both pro-growth and pro-worker? Northeast Now.",
        url: "https://nenow.in/opinion/indias-labour-codes-can-reform-be-both-pro-growth-and-pro-worker.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2026, January 24). Going nuclear: The downfall of joint families in India. Northeast Now.",
        url: "https://nenow.in/entertainment/going-nuclear-the-downfall-of-joint-families-in-india.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shahane, S., & Das, M. (2026, January 21). Hurry sickness in digital age: How social media is rewiring our sense of time. Northeast Now.",
        url: "https://nenow.in/opinion/hurry-sickness-in-digital-age-how-social-media-is-rewiring-our-sense-of-time.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Srivastava, R., & Das, M. (2026, January 19). Psychological safety in classrooms: Why feeling safe matters for student learning. Northeast Now.",
        url: "https://nenow.in/opinion/psychological-safety-in-classrooms-why-feeling-safe-matters-for-student-learning.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Ratnapark, S. A. R. V., Das, M., & Chaudhary, S. (2026, January 12). Missing voices in India’s workplace well-being. Telangana Today.",
        url: "https://telanganatoday.com/opinion-missing-voices-in-indias-workplace-well-being",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2026, January 15). India’s labour transition: From abundance to capability. SightsIn Plus.",
        url: "https://www.sightsinplus.com/insight/culture/indias-labour-transition-from-abundance-to-capability",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., Chaudhari, S., & Das, M. (2026, January 1). Holding it together: Why many men experience loneliness without talking about it. Northeast Now.",
        url: "https://nenow.in/opinion/holding-it-together-why-many-men-experience-loneliness-without-talking-about-it.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, December 16). Logged in, burnt out: Insights into right to disconnect bill. Northeast Now.",
        url: "https://nenow.in/opinion/logged-in-burnt-out-insights-into-the-right-to-disconnect-bill.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., & Das, M. (2025, December 3). Dark side of workplace surveillance: Why datafication needs digital empathy. Northeast Now.",
        url: "https://nenow.in/opinion/dark-side-of-workplace-surveillance-why-datafication-needs-digital-empathy.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, December 2). Why India’s mental health helplines are failing: A deep dive into systemic gaps. Northeast Now.",
        url: "https://nenow.in/opinion/why-indias-mental-health-helplines-are-failing-a-deep-dive-into-systemic-gaps",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, December 1). Dahi, Diyas, and Dopamine: How Traditional Rituals Support Mental Health and Mindfulness. Northeast Now.",
        url: "https://nenow.in/opinion/dahi-diyas-and-dopamine-how-traditional-rituals-support-mental-health-and-mindfulness.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chaudhari, S. R., & Das, M. (2025, December 1). Incubating GenZ managers. Telangana Today.",
        url: "https://telanganatoday.com/opinion-incubating-genz-managers",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malhotra, M., & Das, M. (2025, November 30). Microshifting: New work trend transforming flexibility, productivity, and work-life balance. Northeast Now.",
        url: "https://nenow.in/opinion/microshifting-new-work-trend-transforming-flexibility-productivity-and-work-life-balance.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, November 26). Laughing for longevity: How laughter clubs boost mental and physical health. Northeast Now.",
        url: "https://nenow.in/opinion/laughing-for-longevity-how-laughter-clubs-boost-mental-and-physical-health.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2025, November 24). Quitting life at 9: What does it say about our mental health? India Today.",
        url: "https://www.indiatoday.in/health/story/quitting-life-at-9-what-does-mental-health-student-suicide-india-2825051-2025-11-24",
        linkLabel: "Read article",
      },
      {
        citation:
          "Honrao, P., & Das, M. (2025, November 21). Why real stories matter: Lessons from Marathi films “Jogwa,” “Sairat,” and “Fandry”. Northeast Now.",
        url: "https://nenow.in/opinion/why-real-stories-matter-lessons-from-marathi-films-jogwa-sairat-and-fandry.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chaudhari, S., Das, M., Nibedita, B. (2025, November, 10). Job hugging and the psycho-economics of modern work. ETHR World.",
        url: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/talent-management/job-hugging-and-the-psycho-economics-of-modern-work-why-purpose-is-quietly-leaving-the-building/125230856",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Tuteja, V. (2025, November 9). The badge of burnout: How India’s startup work culture is failing its young professionals. Northeast Now.",
        url: "https://nenow.in/opinion/the-badge-of-burnout-how-indias-startup-work-culture-is-failing-its-young-professionals.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Kumar, S., & Das, M. (2025, November 1). The therapy generation: Living in the age of constant healing. Northeast Now.",
        url: "https://nenow.in/opinion/the-therapy-generation-living-in-the-age-of-constant-healing.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chaudhari, S. R., Das, M., Kumari, A., & Kadu, A. P. (2025, October 21). Is urbanization killing Northeast’s soul? The cost of the “city dream”. Northeast Now.",
        url: "https://nenow.in/opinion/is-urbanization-killing-northeasts-soul-the-cost-of-the-city-dream.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Chaudhari, S. R. (2025, October 12). Reclaiming the rush hour: Why flexible work gives employees their mornings back. Northeast Now.",
        url: "https://nenow.in/opinion/reclaiming-the-rush-hour-why-flexible-work-gives-employees-their-mornings-back.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Swaika, D., & Das, M. (2025, October 10). Beyond self-care: Why your mental health is a collective responsibility. Northeast Now.",
        url: "https://nenow.in/health/beyond-self-care-why-your-mental-health-is-a-collective-responsibility.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malhotra, M., Arora, A., & Das, M. (2025, October 8). Solo dining in India: Why “table for one” is still a spectacle for women. Northeast Now.",
        url: "https://nenow.in/opinion/solo-dining-in-india-why-table-for-one-is-still-a-spectacle-for-women.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shahane, S., & Das, M. (2025, October 6). Animal-assisted therapy for trauma survivors. Northeast Now.",
        url: "https://nenow.in/opinion/animal-assisted-therapy-for-trauma-survivors.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, September 30). Cafes, parks, poetry nights: Gen-Z’s reinvention of third spaces. Northeast Now.",
        url: "https://nenow.in/opinion/cafes-parks-poetry-nights-gen-zs-reinvention-of-third-spaces.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, September 21). Build teams for growth and innovation. Telangana Today.",
        url: "https://telanganatoday.com/opinion-build-teams-for-growth-and-innovation",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., & Das, M. (2025, August 6). Bedrotting or burnout? Blurred lines between rest and avoidance. Telangana Today.",
        url: "https://telanganatoday.com/opinion-bedrotting-or-burnout-blurred-lines-between-rest-and-avoidance",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chandra, T., & Das, M. (2025, August 5). Rise of digital therapists: Can AI close India’s mental healthcare gap? Northeast Now.",
        url: "https://nenow.in/opinion/rise-of-digital-therapists-can-ai-close-indias-mental-healthcare-gap.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., & Das, M. (2025, July 21). Beyond “once a month”: Understanding the full menstrual cycle. Northeast Now.",
        url: "https://nenow.in/opinion/beyond-once-a-month-understanding-the-full-menstrual-cycle.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, July 1). The hidden global asset: Uncovering the power of cultural intelligence. Northeast Now.",
        url: "https://nenow.in/opinion/the-hidden-global-asset-uncovering-the-power-of-cultural-intelligence.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Swaika, D., & Das, M. (2025, June 23). The weight of caring. Telangana Today.",
        url: "https://telanganatoday.com/opinion-the-weight-of-caring",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, June 22). Why people stop trying: The silent impact of unfair workplaces. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/why-people-stop-trying-the-silent-impact-of-unfair-workplaces",
        linkLabel: "Read article",
      },
      {
        citation:
          "Punjabi, S., & Das, M. (2025, June 21). The future of therapy: Is AI the answer for mental health? Northeast Now.",
        url: "https://nenow.in/opinion/the-future-of-therapy-is-ai-the-answer-for-mental-health.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Arora, S., & Das, M. (2025, June 17). Digital exclusion: How “Chapri” and digital aesthetics reinforce caste hierarchies. Northeast Now.",
        url: "https://nenow.in/opinion/digital-exclusion-how-chapri-and-digital-aesthetics-reinforce-caste-hierarchies.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, June 8). Lazy, entitled, or misunderstood? The Gen Z work ethic debate. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/lazy-entitled-or-misunderstood-the-gen-z-work-ethic-debate",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, May 26). Social media influencers & mental health: The hidden toll. Northeast Now.",
        url: "https://nenow.in/opinion/social-media-influencers-mental-health-the-hidden-toll.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, May 15). JOMO: The joy of missing out and why it’s good for you. Northeast Now.",
        url: "https://nenow.in/article/opinion/jomo-the-joy-of-missing-out-and-why-its-good-for-you/430790",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, May 11). Breaking tradition: Why single women are thriving and redefining relationships. Northeast Now.",
        url: "https://nenow.in/article/opinion/breaking-tradition-why-single-women-are-thriving-and-redefining-relationships/429848",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, May 1). Role of male rage & misogyny in media. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/role-of-male-rage-misogyny-in-media",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., Yadav, N., & Das, M. (2025, April 27). Navigating emotional entanglements in workplaces. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/navigating-emotional-entanglements-in-workplaces",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malik, A., & Das, M. (2025, April 24). Fauxductivity and desk bombing. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/fauxductivity-and-desk-bombing",
        linkLabel: "Read article",
      },
      {
        citation:
          "Kanchan, I., & Das, M. (2025, April 23). Beyond “leftover”: The rise of single women in India and fight against stigma. Northeast Now.",
        url: "https://nenow.in/opinion/beyond-leftover-the-rise-of-single-women-in-india-and-fight-against-stigma.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Kapoor, P., & Das, M. (2025, April 20). AI in the workplace: How automation affects employee stress, skills, and job security. Northeast Now.",
        url: "https://nenow.in/opinion/ai-in-the-workplace-how-automation-affects-employee-stress-skills-and-job-security.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, April 19). Doze dose: Resting for a younger brain. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/doze-dose-resting-for-a-younger-brain",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, April 18). Creating space: Supporting neurodivergent employees in the workplace. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/creating-space-supporting-neurodivergent-employees-in-workplace",
        linkLabel: "Read article",
      },
      {
        citation:
          "Grover, M., & Das, M. (2025, April 17). AI in mental health: Can chatbots truly support well-being? Northeast Now.",
        url: "https://nenow.in/opinion/ai-in-mental-health-can-chatbots-truly-support-well-being.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Gupta, M., & Das, M. (2025, April 15). Beyond physical assault: How legal and social norms strip women of reproductive autonomy. Northeast Now.",
        url: "https://nenow.in/opinion/beyond-physical-assault-how-legal-and-social-norms-strip-women-of-reproductive-autonomy.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, March 26). Micro-retirement is reshaping work and well-being. Telangana Today.",
        url: "https://telanganatoday.com/opinion-micro-retirement-is-reshaping-work-and-well-being",
        linkLabel: "Read article",
      },
      {
        citation:
          "Negi, K., & Das, M. (2025, March 25). Desk-bombing in workplace: Pros, cons, and how to manage it. Northeast Now.",
        url: "https://nenow.in/opinion/desk-bombing-in-workplace-pros-cons-and-how-to-manage-it.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Talloo, R., & Das, M. (2025, March 23). Yo Yo Honey Singh: Open fight with bipolar disorder. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/yo-yo-honey-singh-open-fight-with-bipolar-disorder",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, March 22). Loneliness: A never-ending epidemic. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/loneliness-a-never-ending-epidemic",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, March 21). Revenge quitting: Why workers are retaliating & how to stop it. Northeast Now.",
        url: "https://nenow.in/article/opinion/revenge-quitting-why-workers-are-retaliating-how-to-stop-it/418200",
        linkLabel: "Read article",
      },
      {
        citation:
          "Negi, K., & Das, M. (2025, March 20). Beyond the buzzword: Making DEI matter. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/beyond-the-buzzword-making-dei-matter",
        linkLabel: "Read article",
      },
      {
        citation:
          "Jain, S., & Das, M. (2025, March 16). Double duty: How digital workplace boosts (and burdens) moonlighting. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/double-duty-how-digital-workplace-boosts-and-burdens-moonlighting",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Shah, K. (2025, March 15). Toxic productivity: Is hustle culture ruining your productivity? Northeast Now.",
        url: "https://nenow.in/health/toxic-productivity-is-hustle-culture-ruining-your-productivity.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malhotra, M., & Das, M. (2025, March 9). Life through rose-tinted glasses. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/life-through-rose-tinted-glasses",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, K., & Das, M. (2025, March 2). Why humour is our favourite coping mechanism. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/why-humour-is-our-favourite-coping-mechanism",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., & Das, M. (2025, February 28). The rise of conscious unbossing: Why Gen Z is redefining leadership. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/the-rise-of-conscious-unbossing-why-gen-z-is-redefining-leadership",
        linkLabel: "Read article",
      },
      {
        citation:
          "Mantry, V., & Das, M. (2025, February 27). Cultivate real connections. It works. Telangana Today.",
        url: "https://telanganatoday.com/opinion-cultivate-real-connections-it-works",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malik, A., & Das, M. (2025, February 23). Smoke and mirrors: The rise of career catfishing in the age of digital deception. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/smoke-and-mirrors-the-rise-of-career-catfishing-in-the-age-of-digital-deception",
        linkLabel: "Read article",
      },
      {
        citation:
          "Behrani, A., & Das, M. (2025, February 20). Workplace dress codes: Yay or nay? The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/workplace-dress-codes-yay-or-nay",
        linkLabel: "Read article",
      },
      {
        citation:
          "Singh, A., & Das, M. (2025, February 19). Toxicity of body standards. Telangana Today.",
        url: "https://telanganatoday.com/opinion-toxicity-of-body-standards",
        linkLabel: "Read article",
      },
      {
        citation:
          "Kapoor, P., & Das, M. (2025, February 16). Dysmenorrhea: From folklore to pharmacy. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/dysmenorrhea-from-folklore-to-pharmacy",
        linkLabel: "Read article",
      },
      {
        citation:
          "Pandey, A., Kanchan, I., & Das, M. (2025, February 15). The rise of career catfishing among Gen Zs. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/the-rise-of-career-catfishing-among-gen-zs",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, February 11). Academic burnout, new standard of success. Telangana Today.",
        url: "https://telanganatoday.com/opinion-academic-burnout-new-standard-of-success",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, February 9). From awareness to action: SCARF’s 40th anniversary. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/from-awareness-to-action-scarfs-40th-anniversary",
        linkLabel: "Read article",
      },
      {
        citation:
          "Ratnaparke, S. A. R. V., & Das, M. (2025, February 7). A decades-old tale: Once a cartoon, always a cartoon! The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/a-decades-old-tale-once-a-cartoon-always-a-cartoon",
        linkLabel: "Read article",
      },
      {
        citation:
          "Gupta, M., & Das, M. (2025, January 31). The fame game: When the image replaces the individual. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/the-fame-game-when-the-image-replaces-the-individual",
        linkLabel: "Read article",
      },
      {
        citation:
          "Negi, K., & Das, M. (2025, January 19). Same sex? What’s that? Case for opening up marriage legalization in India. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/same-sex-whats-that-case-for-opening-up-marriage-legalization-in-india",
        linkLabel: "Read article",
      },
      {
        citation:
          "Nambiar, S., & Das, M. (2025, January 18). Rewind: 70 vs 90 hours workweek. Telangana Today.",
        url: "https://telanganatoday.com/rewind-70-vs-90-hours-workweek",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., Arora, A., & Das, M. (2025, January 17). The education system uses inclusive language. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/the-education-system-uses-inclusive-language",
        linkLabel: "Read article",
      },
      {
        citation:
          "Khanna, P., & Das, M. (2025, January 17). The chaotic kernels of a popcorn brain. Telangana Today.",
        url: "https://telanganatoday.com/opinion-the-chaotic-kernels-of-a-popcorn-brain",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, M., & Das, M. (2025, January 12). Isolation to integration: Reimagining mental healthcare in India. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/isolation-to-integration-reimagining-mental-healthcare-in-india",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Singh, A. (2025, January 5). The pill culture: Answer to modern-day problems. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/the-pill-culture-answer-to-modern-day-problems",
        linkLabel: "Read article",
      },
      {
        citation:
          "Mantry, V., & Das, M. (2024, November 17). Breaking the silence: The need for awareness and support for postpartum depression in India. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/breaking-the-silence-the-need-for-awareness-and-support-for-postpartum-depression-in-india",
        linkLabel: "Read article",
      },
      {
        citation:
          "Vemaraju, S., & Das, M. (2024, November 10). Navigating new normal: Future of work in post-pandemic world. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/navigating-new-normal-future-of-work-in-post-pandemic-world",
        linkLabel: "Read article",
      },
      {
        citation:
          "Singh, A., & Das, M. (2024, November 1). The new realities of work. Telangana Today.",
        url: "https://telanganatoday.com/opinion-the-new-realities-of-work",
        linkLabel: "Read article",
      },
      {
        citation:
          "Talloo, R., & Das, M. (2024, October 19). Mental healthcare in India. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/mental-healthcare-in-india",
        linkLabel: "Read article",
      },
      {
        citation:
          "Venugopal, R., & Das, M. (2024, October 10). Breaking the silence: The unspoken mental abuse of women at workplaces. The News Minute.",
        url: "https://www.thenewsminute.com/voices/breaking-the-silence-the-unspoken-mental-abuse-of-women-at-workplaces",
        linkLabel: "Read article",
      },
      {
        citation:
          "Suri, T., & Das, M. (2024, October 6). Fostering employee well-being: The strategic impact of chief happiness officers. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/fostering-employee-well-being-the-strategic-impact-of-chief-happiness-officers",
        linkLabel: "Read article",
      },
      {
        citation:
          "Smitha, D., & Das, M. (2024, September 25). Redefining relationships. Telangana Today.",
        url: "https://telanganatoday.com/opinion-redefining-relationships",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, S., & Das, M. (2024, August 18). Love in the time of algorithms: India’s dating app saga. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/love-in-the-time-of-algorithms-indias-dating-app-saga",
        linkLabel: "Read article",
      },
      {
        citation:
          "Mehra, M., & Das, M. (2024, August 4). Awws of the paws: The case of pet-friendly workplaces. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/awws-of-the-paws-the-case-of-pet-friendly-workplaces",
        linkLabel: "Read article",
      },
      {
        citation:
          "Ponugoti, S., & Das, M. (2024, August 9). No baby onboard: The rising trend of child-free couples. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/no-baby-onboard-the-rising-trend-of-child-free-couples",
        linkLabel: "Read article",
      },
      {
        citation:
          "Dhillon, S., & Das, M. (2024, July 26). You don’t snooze, so you lose: Prioritizing sleep in the modern workplace. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/you-dont-snooze-so-you-lose-prioritizing-sleep-in-the-modern-workplace",
        linkLabel: "Read article",
      },
      {
        citation:
          "Deshmukh, I., & Das, M. (2024, July 14). The privilege of quiet quitting. Telangana Today.",
        url: "https://telanganatoday.com/opinion-the-privilege-of-quiet-quitting",
        linkLabel: "Read article",
      },
      {
        citation:
          "Garg, N., & Das, M. (2024, June 29). Post-pandemic investing: Risk or restraint. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/post-pandemic-investing-risk-or-restraint",
        linkLabel: "Read article",
      },
      {
        citation:
          "Deshpande, A., & Das, M. (2023, November 13). Caught in cancel culture. Telangana Today.",
        url: "https://telanganatoday.com/opinion-caught-in-cancel-culture",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Devjani, B. (2023, November 16). Unraveling dark side of self-help culture. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/unraveling-dark-side-of-self-help-culture",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malhotra, I., & Das, M. (2023, November 23). Rest is productive. Telangana Today.",
        url: "https://telanganatoday.com/opinion-rest-is-productive",
        linkLabel: "Read article",
      },
      {
        citation:
          "Natekar, K., & Das, M. (2023, November 25). Humanizing social media: Better late than never. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/humanizing-social-media-better-late-than-never",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, S., Tripathi, A., & Das, M. (2023, December 20). Normalise singlehood for women. Telangana Today.",
        url: "https://telanganatoday.com/opinion-normalise-singlehood-for-women",
        linkLabel: "Read article",
      },
      {
        citation:
          "Anand, A., & Das, M. (2023, December 28). Quest for perfection. Telangana Today.",
        url: "https://telanganatoday.com/opinion-quest-for-perfection",
        linkLabel: "Read article",
      },
      {
        citation:
          "Tripathi, A., & Das, M. (2023, November 8). Impact of implicit bias on classroom dynamics and educational equity. The Hindu.",
        url: "https://www.thehindu.com/education/impact-of-implicit-bias-on-classroom-dynamics-and-educational-equity/article67506079.ece",
        linkLabel: "Read article",
      },
      {
        citation:
          "Suri, T., & Das, M. (2023, October 10). Making workplaces truly welcoming. Telangana Today.",
        url: "https://telanganatoday.com/opinion-making-workplaces-truly-welcoming",
        linkLabel: "Read article",
      },
      {
        citation:
          "Deshpande, A., & Das, M. (2023, October 26). The role of personality in leadership. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/the-role-of-personality-in-leadership",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malhotra, I., & Das, M. (2023, October 26). The overlooked superpower. Telangana Today.",
        url: "https://telanganatoday.com/opinion-the-overlooked-superpower",
        linkLabel: "Read article",
      },
      {
        citation:
          "Malhotra, I., & Das, M. (2023). Perfectionism: A tunnel vision of life and work. Business Manager.",
        url: "https://bmhrmagazine.com/perfectionism-a-tunnel-vision-of-life-and-work/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Gupta, A. (2023, September 24). The many faces of liberal arts education. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/editorial/the-many-faces-of-liberal-arts-education",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, S., & Das, M. (2023, September 17). Rewind: The Kota conundrum. Telangana Today.",
        url: "https://telanganatoday.com/rewind-the-kota-conundrum",
        linkLabel: "Read article",
      },
      {
        citation:
          "Suri, T., & Das, M. (2023, September 7). Going beyond micro-rewards. Telangana Today.",
        url: "https://telanganatoday.com/opinion-going-beyond-micro-rewards",
        linkLabel: "Read article",
      },
      {
        citation:
          "Asad, Z., & Das, M. (2023, August 21). Diabetology management: A psychological perspective. Business Manager.",
        url: "https://bmhrmagazine.com/diabetology-management-a-psychological-perspective/",
        linkLabel: "Read article",
      },
      {
        citation:
          "George, L., & Das, M. (2023, August 15). Memes, minds, musings. Telangana Today.",
        url: "https://telanganatoday.com/opinion-memes-minds-musings",
        linkLabel: "Read article",
      },
      {
        citation:
          "George, L., & Das, M. (2023, August 8). Psychological approach to cancer pain. Deccan Herald.",
        url: "https://www.deccanherald.com/opinion/psychological-approach-to-cancer-pain-2637988",
        linkLabel: "Read article",
      },
      {
        citation:
          "Sethi, T., & Das, M. (2023, August 2). Disconnected in digital era. Telangana Today.",
        url: "https://telanganatoday.com/opinion-disconnected-in-digital-era",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2023, July 21). Social isolation and loneliness. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/social-isolation-and-loneliness",
        linkLabel: "Read article",
      },
      {
        citation:
          "Asad, Z., & Das, M. (2023, July 13). Lack of adherence to insulin medication in Type 1 diabetes mellitus patients: What’s causing it? Business Manager.",
        url: "https://bmhrmagazine.com/lack-of-adherence-to-insulin-medication-in-type-1-diabetes-mellitus-patients-whats-causing-it/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Gupta, A., & Das, M. (2023, July 1). Act it out and be well. Telangana Today.",
        url: "https://telanganatoday.com/opinion-act-it-out-and-be-well",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Swaika, D. (2023, June 1). The new normal: Lessons learnt for educators during COVID-19. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/the-new-normal-lessons-learnt-for-educators-during-covid-19",
        linkLabel: "Read article",
      },
      {
        citation:
          "Mundhra, C., & Das, M. (2023, June 7). Teach mental health in schools. Telangana Today.",
        url: "https://telanganatoday.com/opinion-teach-mental-health-in-schools",
        linkLabel: "Read article",
      },
      {
        citation:
          "Dedhia, A., & Das, M. (2023, June 3). Job burnout: A cultural perspective. Know Your Town.",
        url: "https://knowyourtown.in/job-burnout-a-cultural-perspective/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Srivastava, K., & Das, M. (2023, May 10). Neurodiversity in the workplace. Telangana Today.",
        url: "https://telanganatoday.com/opinion-neurodiversity-in-the-workplace",
        linkLabel: "Read article",
      },
      {
        citation:
          "Dedhia, A., & Das, M. (2023, April 20). Beating job burnout. Telangana Today.",
        url: "https://telanganatoday.com/opinion-beating-job-burnout",
        linkLabel: "Read article",
      },
      {
        citation:
          "Thombare, N., Chaudhary, S. R., & Das, M. (2023). Ageism at workplace. Business Manager.",
        url: "https://www.businessmanager.in/ageism-at-workplace/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Tripathi, A., & Das, M. (2023, April 6). Make room for single women. Telangana Today.",
        url: "https://telanganatoday.com/opinion-make-room-for-single-women",
        linkLabel: "Read article",
      },
      {
        citation:
          "Madhu, P., Tripathi, A., & Das, M. (2023, March 28). HEIs and student suicides. Telangana Today.",
        url: "https://telanganatoday.com/opinion-heis-and-student-suicides",
        linkLabel: "Read article",
      },
      {
        citation:
          "George, L., & Das, M. (2023, March 6). Food for thought: Fat’s not all bad. Deccan Herald.",
        url: "https://www.deccanherald.com/opinion/food-for-thought-fat-s-not-all-bad-1196338.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, S., & Das, M. (2023, February 28). Marx and unpaid internships. Telangana Today.",
        url: "https://telanganatoday.com/opinion-marx-and-unpaid-internships",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chaudhary, S. R., & Das, M. (2023). Feeling lonely at work? You are not alone. Business Manager.",
        url: "https://bmhrmagazine.com/feeling-lonely-at-work-you-are-not-alone/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Sheth, R., & Das, M. (2023, February 9). Craving coffee? Listen to it. Telangana Today.",
        url: "https://telanganatoday.com/opinion-craving-coffee-listen-to-it",
        linkLabel: "Read article",
      },
      {
        citation:
          "Chaudhary, S. R., & Das, M. (2022, November 30). Work calls or work creeps? Telangana Today.",
        url: "https://telanganatoday.com/opinion-work-calls-or-work-creeps",
        linkLabel: "Read article",
      },
      {
        citation:
          "Srivatsav, M., Lalka, F., & Das, M. (2022, November 3). Silent screams behind metallic bars. Telangana Today.",
        url: "https://telanganatoday.com/opinion-silent-screams-behind-metallic-bars",
        linkLabel: "Read article",
      },
      {
        citation:
          "Lalka, F., & Das, M. (2022, October 14). Every day is Mental Health Day. Telangana Today.",
        url: "https://telanganatoday.com/opinion-every-day-is-mental-health-day",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2022, September 15). Time to revamp work culture as people opt for quiet quitting. Deccan Herald.",
        url: "https://www.deccanherald.com/opinion/time-to-revamp-work-culture-as-people-opt-for-quiet-quitting-1145188.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Desai, V., & Das, M. (2022, August 23). Mental health ‘app’solutely matters. Telangana Today.",
        url: "https://telanganatoday.com/opinion-mental-health-appsolutely-matters",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & Verdia, S. (2022, July 18). Inclusive practices in Psychology imperative. Telangana Today.",
        url: "https://telanganatoday.com/opinion-inclusive-practices-in-psychology-imperative",
        linkLabel: "Read article",
      },
      {
        citation:
          "George, L., & Das, M. (2022, July 7). Sleep: An underrated superhero. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/sleep-an-underrated-superhero",
        linkLabel: "Read article",
      },
      {
        citation:
          "Shah, S., & Das, M. (2022, May 30). Social media and trolling: The targeting of women. Deccan Herald.",
        url: "https://www.deccanherald.com/opinion/social-media-and-trolling-the-targeting-of-women-1113588.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Goyal, M., & Das, M. (2022, May 12). Your identity is more than your job! Telangana Today.",
        url: "https://telanganatoday.com/opinion-your-identity-is-more-than-your-job",
        linkLabel: "Read article",
      },
      {
        citation:
          "Desai, V., & Das, M. (2022, March 23). The dangers of romanticising mental illnesses. LiveWire.",
        url: "https://livewire.thewire.in/health/the-dangers-of-romanticising-mental-illnesses/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M., & George, L. (2022, March 24). Mental health application and first aid in schools. Psychology India Magazine.",
        url: "https://psychology.net.in/mental-health-application-and-first-aid-in-schools/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2022, February 19). Mental health: More than just a buzzword. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/mental-health-more-than-just-a-buzzword",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2022, February 8). Living amid mental health crisis. Telangana Today.",
        url: "https://telanganatoday.com/opinion-living-amid-mental-health-crisis",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021, November 19). Why do we need a mental health policy at the workplace? People Matters.",
        url: "https://www.peoplematters.in/article/employee-engagement/why-do-we-need-a-mental-health-policy-at-the-workplace-31673",
        linkLabel: "Read article",
      },
      {
        citation:
          "Goyal, M., & Das, M. (2021, October 15). Time to talk mental health. Telangana Today.",
        url: "https://telanganatoday.com/opinion-time-to-talk-mental-health",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021, July 21). Musical earworms and sleep. Deccan Herald.",
        url: "https://www.deccanherald.com/opinion/musical-earworms-and-sleep-1011049.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021, June 4). ‘Revenge bedtime procrastination’: The story of our lives. LiveWire.",
        url: "https://livewire.thewire.in/out-and-about/revenge-bedtime-procrastination-the-story-of-our-lives/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021, January 5). Covid-somnia. Business Manager.",
        url: "https://bmhrmagazine.com/covid-somnia.php/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021). Millennials Reshaping the Workspace. Business Manager.",
        url: "https://www.businessmanager.in/millennials-reshaping-the-workplace.php",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021, February 24). Dealing with mental-health challenges in 2021. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/dealing-with-mental-health-challenges-in-2021",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021, May 1). Neither Depressed nor Flourished. The Sentinel.",
        url: "https://www.sentinelassam.com/editorial/neither-depressed-nor-flourished-maybe-its-languishing-536356",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2021, February 27). Media and mental health. The Sentinel.",
        url: "https://www.sentinelassam.com/more-news/life/media-and-mental-health",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2020, August 27). Why period leave is an empowering idea. Deccan Herald.",
        url: "https://www.deccanherald.com/opinion/why-period-leave-is-an-empowering-idea",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2020, August 25). Domestic abuse and Covid-19: The rising cases of women fighting multiple battles. NorthEast Now.",
        url: "https://nenow.in/opinion/domestic-abuse-and-covid-19-the-rising-cases-of-women-fighting-multiple-battles-2.html",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2020, May 9). ‘Compassion fatigue’ in times of COVID-19? People Matters.",
        url: "https://www.peoplematters.in/blog/life-at-work/compassion-fatigue-in-times-of-covid-19-25616",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2020, April 18). Faking Wellness at Workplaces. People Matters.",
        url: "https://www.peoplematters.in/blog/life-at-work/faking-wellness-at-workplace-25365",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2020, October 1). Period leaves: Yay or nay? Countercurrents.",
        url: "https://countercurrents.org/2020/10/period-leaves-yay-or-nay/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2019, November 30). Why Are We Guilty of Taking a Break. People Matters.",
        url: "https://www.peoplematters.in/article/life-at-work/why-are-we-guilty-of-taking-a-break-23912",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2019, September 28). How much are your employees sleeping? People Matters.",
        url: "https://www.peoplematters.in/blog/others/how-much-are-your-employees-sleeping-23262",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2019, October 10). Sleep-deprived employees: Organizations must ensure work-life balance. People Matters.",
        url: "https://www.peoplematters.in/article/wellness/sleep-deprived-employees-organizations-must-ensure-work-life-balance-16556",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2019, March 7). Understanding the role of trainers in empowering the employees. People Matters.",
        url: "https://www.peoplematters.in/article/employee-engagement/understanding-the-role-of-trainers-in-empowering-the-employees-16125",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2017, October 23). The connection between ‘sleep’ and ‘leadership’. HRKatha.",
        url: "https://www.hrkatha.com/opinion/the-connection-between-sleep-and-leadership/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2019, September 20). Why do we need the menstrual leave policy in India? Feminism in India.",
        url: "https://feminisminindia.com/2019/09/20/need-menstrual-leave-policy-india/",
        linkLabel: "Read article",
      },
      {
        citation:
          "Das, M. (2019, January 10). Sexism with Karan: Karan Johar and his misogynistic guests. Youth Ki Awaaz.",
        url: "https://www.youthkiawaaz.com/2019/01/karan-johar-and-his-misogynistic-guests-sexism-with-karan/",
        linkLabel: "Read article",
      },
    ],
  },
];