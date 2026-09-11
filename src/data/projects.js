export const projects = [
  {
    id: 'reachymini',
    title: 'Combating Procrastination with Reachy Mini',
    subtitle: 'Evaluating Persuasive Communication Modalities',
    categories: ['Human-Robot Interaction', 'UX Design'],
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Reachy Mini', 'HRI', 'Persuasive Technology', 'User Study'],
    year: 2026,
    date: '2026-07-18',
    cover: '/projects/reachymini/cover.jpg',
    description: `Combating Procrastination with Reachy Mini is a research project on human-robot interaction that evaluates the desktop robot Reachy Mini as a persuasive intervention against smartphone distraction. Digital blockers are easily bypassed; a physical robot on the desk offers a persistent, off-screen trigger for behavior change.

The system detects when a smartphone is picked up from the desk and lets Reachy Mini react with one of three behavioral modes: tech, humanoid, and human. In an online, within-subjects video study (N = 21), participants rated the robot's persuasive appeal and social presence.

The results indicate that the tech and human modes were often perceived as too alarming or overly intrusive, leading users to favor the non-verbal, emotional humanoid mode as a non-disruptive companion. Persuasive robots seem most effective when their social cues are carefully balanced, using organic movements and expressive non-verbal sounds to gently steer attention away from distraction.`,
    role: `RESEARCH | SYSTEM DEVELOPMENT | USER STUDY | SOUND DESIGN

Within the project, I designed and implemented the three persuasive interaction modes of Reachy Mini, shaping how the robot signals, suggests, and emotionally reacts to the user's smartphone behavior. I developed the smartphone detection pipeline using YOLOv8 and OpenCV and coupled it with the robot's responsive behavior logic.

Beyond the system, I designed the study and recruited participants for the online, within-subjects video evaluation, analyzing perceived persuasiveness and personality across modalities — showing that a carefully balanced, humanoid companion is preferred over neither alarm nor intrusiveness.`,
    tools: ['Python', 'YOLOv8', 'OpenCV', 'Reachy Mini', 'ElevenLabs', 'DaVinci Resolve'],
    images: [
      '/projects/reachymini/SmartphoneDetection.png',
      '/projects/reachymini/communication.png',
      '/projects/reachymini/ocean_boxplot.png',
      '/projects/reachymini/HRIES.png',
    ],
    videos: [
      { url: '/projects/reachymini/Tech.mp4', label: 'Tech Mode – systematic, utilitarian, no social cues' },
      { url: '/projects/reachymini/Humanoid.MP4', label: 'Humanoid Mode – organic movements and expressive non-verbal sounds' },
      { url: '/projects/reachymini/Human.MP4', label: 'Human Mode – verbal communication, natural language' },
    ],
    status: 'Student Research Project',
    behanceUrl: '',
    externalLinks: [],
  },
  {
    id: 'social-design',
    title: 'The Timeline Optimizer',
    subtitle: 'Design Fiction – Family Planning as a State Algorithmic Service',
    categories: ['Web Design', 'UX Design'],
    tags: ['Design Fiction', 'React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'UI Design', 'Prototyping', 'Interaction Design'],
    year: 2026,
    date: '2026-02-18',
    cover: '/projects/social-design/cover.png',
    description: `The Timeline Optimizer is a design fiction project that reimagines family planning as a state algorithmic service. Against the backdrop of Germany's declining birth rate, the project's fictional "Richtlinie DFR-38" turns the most private decision of life into a data-driven application process — complete with identity checks, funding scores and binding contracts.

Developed in the Social Design lecture at Hochschule der Medien (HdM Stuttgart), the project consists of two interactive tools that build on each other.

The first tool, "Die Rush-Hour des Lebens" (The Rush Hour of Life), is an intervention and self-reflection instrument. Users compose their current and desired life situation from cards covering education, career, housing, relationships and travel. Every choice directly moves an "internal age", making visible how much of the fertile life phase is consumed by milestones that usually precede starting a family. A closing reflection step asks whether the visualization changed the user's original family planning.

The second tool is delivered as a critical, dystopian showcase. Its story opens on the front page of a fictional business newspaper in the year 2038 that reports on the new federal funding directive. The newspaper serves as the opener embedded below — follow its button to jump straight to the exclusive instance of the "Antrags-Assistent DFR-38" at the bottom of the page. There, users can experience family planning as a biometric application workflow: connecting eID, health data and bank accounts, computing a funding score with algorithmic recommendations, and ultimately issuing a binding "Zuteilungsbescheid" with conditions such as fertility proof, salary caps and drug screening.

Both tools are fully interactive — the intervention and the newspaper opener are embedded directly on this page, while the complete application flow awaits you in the "Exclusive Access" section below. Exaggerated to the extreme, the project is a critical commentary on autonomy, surveillance and the economization of the most intimate decision of life.`,
    role: `CONCEPT | DESIGN FICTION | INTERACTION DESIGN | PROTOTYPING

Within the project I developed both tools. "Die Rush-Hour des Lebens" distills the mechanisms of family planning into a card-based interaction with real-time age computation; the collected responses were exported as structured data and analyzed for the accompanying discussion of utopia and dystopia.

"Antrags-Assistent DFR-38" explores how such interventions might be institutionalized: a multi-step application flow, an allocation algorithm with funding score, and an automatically generated contract. I implemented both as fully client-side prototypes — the intervention as plain HTML/CSS/JS, the prototype as a React application — so they can be embedded and tested directly in the browser.`,
    tools: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Prototyping', 'UI Design'],
    images: [],
    videos: [],
    embeds: [
      {
        src: '/projects/social-design/intervention/index.html',
        label: 'Intervention – Die Rush-Hour des Lebens (German)',
        height: 680,
      },
      {
        src: '/projects/social-design/timeline-optimizer.html',
        label: 'Prototype – the opener: WIRTSCHAFTSBLATT & the DFR-38 story (German)',
        height: 640,
      },
    ],
    exclusiveEmbed: {
      src: '/projects/social-design/wizard.html',
      label: 'Exclusive Access – Antrags-Assistent DFR-38',
      height: 740,
    },
    status: 'University Project – HdM, Social Design',
    behanceUrl: '',
    externalLinks: [],
  },
  {
    id: 'ambienceai',
    title: 'Ambience AI',
    subtitle: 'AI-Driven Soundscape Application',
    categories: ['App Design', 'UX Design', 'Sound Design'],
    tags: ['Android Studio', 'Kotlin', 'Google Gemini', 'FMOD', 'UI/UX', 'Sound Design'],
    year: 2026,
    date: '2026-02-18',
    cover: '/projects/ambienceai/cover.webp',
    description: `AMBIENCE AI is an AI-driven soundscape application that translates descriptive storytelling into immersive, real-time audio environments.

In a world where digital storytelling meets artificial intelligence, AmbienceAI acts as a bridge between imagination and auditory reality. By transforming spoken or written narratives into complex, layered soundscapes, the app allows users to breathe life into their stories, creating a dynamic background that reacts instantly to the unfolding plot.`,
    role: `ANDROID DEVELOPMENT | KOTLIN | GOOGLE GEMINI | FMOD

For the AmbienceAI project, I am creating the entire technical architecture and implementation, merging advanced AI logic with native audio processing. I developed a central 'Sound Registry' to serve as a Single Source of Truth, ensuring seamless synchronization between Google Gemini's interpretations and the FMOD sound engine.

My role involved creating an Android application that handles real-time speech-to-text, JSON parsing, and smooth audio transitions through FMOD. Currently, the project is in active development, with a focus on refining the AI's contextual awareness and expanding the procedural sound library to offer even deeper immersion for storytellers and tabletop gamers.`,
    tools: ['Android Studio', 'FMOD', 'Google Gemini', 'Kotlin'],
    images: [

    ],
    videos: [{ url: '/projects/ambienceai/ambience.mp4', label: 'Ambience AI - Prototyp' },],
    status: 'Work in Progress',
    behanceUrl: 'https://www.behance.net/gallery/244348741/AmbienceAI',
    externalLinks: [],
  },
  {
    id: 'zeit-mit-wunden',
    title: "Zeit mit Wunden",
    subtitle: 'Audiobook – Personal Testimony',
    categories: ['Sound Design'],
    tags: ['Pro Tools', 'Audiobook', 'Sound Design', 'Mixing', 'Recording'],
    year: 2025,
    date: '2025-12-02',
    cover: '/projects/zeit-mit-wunden/cover.png',
    description: `Zeit mit Wunden is an autobiographical audio project created together with my cousins, based on my grandfather's written recollections of growing up in Ludwigsburg during the National Socialist era.

The recordings follow his experiences in school, his memories of everyday life, and his time as a young soldier at the front, giving voice to a personal perspective on a dark chapter of history.`,
    role: `RECORDING | EDITING | SOUND DESIGN | MIXING

I was responsible for the audio recording, mixing and sound design. Crafting this project was deeply meaningful, as it allowed me to help preserve and share my grandfather's story. Especially in today's times, this kind of personal testimony feels like a valuable and important resource — a reminder of the responsibility that comes with memory and storytelling.`,
    tools: ['Pro Tools'],
    images: ['/projects/zeit-mit-wunden/bookcover.jpg'],
    videos: [
      'https://www.youtube.com/embed/MpG8U5bUxZc?si=AvFSpYWEV0fjXhfX&start=957',
    ],
    externalLinks: [
      { label: 'YouTube Playlist', url: 'https://www.youtube.com/playlist?list=PLRKysHwy-7MnSLdpuAN5r4BPTloHIMN-4' },
    ],
    behanceUrl: 'https://www.behance.net/gallery/239704703/Sound-for-Zeit-mit-Wunden',
  },
  {
    id: 'symblings',
    title: "Symblings",
    subtitle: '2D Side-Scroller Game',
    categories: ['Game Audio'],
    tags: ['Unity', 'FMOD', 'Sound Design', 'Mixing', 'Foley', '2D Game'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/symblings/cover.png',
    description: `SYMBLINGS is a 2D side-scroller game created in collaboration with students from Filmakademie Baden-Württemberg.

In a world out of balance, where poisoned mushrooms consume the last plants, the fateful symbiosis between a young chestnut and a small mushroom takes on a journey through the dark and toxic wasteland to find a better place to live and restore balance.`,
    role: `SOUND DESIGN | MIXING | FOLEY | FMOD | UNITY

For the game Symblings, I was responsible for foleys, sound design and mixing, helping to create the unique auditory experience that supports the gameplay and narrative. This project was an exciting challenge, as I got to craft sounds that added depth and immersion to the game world. A continuation of this project is planned, and I look forward to further developing the audio landscape as the game evolves. Additionally, I had the opportunity to collaborate with sound designer Stefan Erschig on the game's trailer, where we worked together to compose and design the soundtrack and sound effects, ensuring that the trailer perfectly captured the atmosphere and tone of the game.`,
    tools: ['Unity', 'FMOD'],
    images: [
      '/projects/symblings/img-1.jpg',
      '/projects/symblings/img-2.png',
      '/projects/symblings/img-3.png',
    ],
    videos: [
      'https://www.youtube.com/embed/2ssBubA8zgk?si=dKWtVhfr0617vWOK',
      'https://www.youtube.com/embed/_R6bu1aZ6PM?si=RpiJOupglAvCe_LH',
      'https://www.youtube.com/embed/nJb1JqrTq0c?si=pVktC6vYnf1kjrrZ',
    ],
    externalLinks: [
      { label: 'The Rookies', url: 'https://www.therookies.co/entries/27977' },
    ],
    behanceUrl: 'https://www.behance.net/gallery/234331919/Sound-for-Symblings',
  },
  {
    id: 'empathize',
    title: "Empathize",
    subtitle: 'ADHD Awareness App',
    categories: ['App Design', 'UX Design'],
    tags: ['Figma', 'Illustrator', 'App Design', 'UX Design', 'UI Design'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/empathize/cover.jpg',
    description: `Empathize is an app concept designed to help people understand and interact better with individuals who have ADHD. The app encourages users to empathize with daily situations faced by those with ADHD, offering a playful and educational experience. With a focus on beautiful designs, it provides users with deeper insights and awareness, making the learning process engaging and enjoyable.`,
    role: `CONCEPT | DESIGN | FIGMA | UI

In this project, I worked with a team using Figma to create the app's design and functionality. We invested a lot of time exploring the issue that ADHD is often mentioned, but many people don't fully understand what it is or the real challenges that individuals with ADHD face. Through iterative processes and collaboration, we worked to ensure the app accurately reflects these struggles while keeping the experience intuitive and informative.`,
    tools: ['Figma', 'Adobe Illustrator CC'],
    images: [
      '/projects/empathize/img-2.jpg',
      '/projects/empathize/img-3.jpg',
      '/projects/empathize/img-4.jpg',
      '/projects/empathize/img-5.jpg',
      '/projects/empathize/img-6.jpg',
      '/projects/empathize/img-7.jpg',
      '/projects/empathize/img-8.jpg',
      '/projects/empathize/img-9.jpg',
      '/projects/empathize/img-10.jpg',
    ],
    videos: [],
    externalLinks: [
      { label: 'Figma Prototype', url: 'https://www.figma.com/proto/HyGQKmn688sw8WYRsn1gXo/Empathize?page-id=0%3A1&node-id=19-50&starting-point-node-id=19%3A50' },
    ],
    behanceUrl: 'https://www.behance.net/gallery/234345271/App-Concept-for-Empathize',
  },
  {
    id: 'anymane',
    title: "anymane",
    subtitle: "Men's Grooming Brand",
    categories: ['Brand Design', 'Web Design'],
    tags: ['Illustrator', 'Photoshop', 'Dimension', 'Firefly', 'Blender 3D', 'Figma', 'Brand Identity'],
    year: 2025,
    date: '2025-05-13',
    cover: '/projects/anymane/cover.png',
    description: `Anymane is a modern men's grooming brand that emphasizes minimalism, individuality, and authenticity rather than traditional masculinity. Inspired by the four elements — Water, Fire, Wind, and Earth — its products represent different hair types. The design and packaging combine natural textures, symbolic colors, and premium materials, created with both hand-drawn sketches and digital tools, including AI.

The packaging design is a modular artwork. Each individual product box is part of a larger set that, when placed together, reveals the full elemental symbol on the spine. It is a collectible, visual composition that transforms functional design into a unified bigger picture.

This Figma prototype gives a glimpse into how the website might feel. The user interface focuses on clean structure with dynamic hover effects, highlighting each hair model's unique color story. The experience emphasizes individuality, motion, and an immersive connection to the brand's identity.`,
    role: `BRAND DESIGN | PACKAGING | WEBSITE DESIGN | ILLUSTRATION | 3D RENDERING

I developed the complete brand identity including logo, typography, color palette, and packaging system. The modular packaging concept brings together individual products into a unified visual composition.`,
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Dimension', 'Adobe Firefly', 'Blender 3D', 'Figma'],
    imageRows: [
      [
        '/projects/anymane/img-2.gif',
        '/projects/anymane/img-3.gif',
        '/projects/anymane/img-4.gif',
        '/projects/anymane/img-5.gif',
      ],
      [
        '/projects/anymane/img-6.png',
        '/projects/anymane/img-7.png',
        '/projects/anymane/img-8.png',
        '/projects/anymane/img-9.png',
      ],
      [
        '/projects/anymane/img-10.png',
        '/projects/anymane/img-11.png',
        '/projects/anymane/img-12.png',
        '/projects/anymane/img-13.png',
        '/projects/anymane/img-14.png',
        '/projects/anymane/img-15.png',
        '/projects/anymane/img-16.png',
      ],
    ],
    videos: ['/projects/anymane/anymane_oneline.mp4'],
    externalLinks: [
      { label: 'Figma Website Prototype', url: 'https://www.figma.com/proto/AbhAdGL0r4PxFPx36Wvflf/anymane' },
    ],
    behanceUrl: 'https://www.behance.net/gallery/225355943/Brand-identity-for-anymane',
  },
  {
    id: 'corvus-sanctum',
    title: "Corvus Sanctum",
    subtitle: 'VR Escape Room Game',
    categories: ['Game Audio'],
    tags: ['Unity', 'C#', 'VR', 'FMOD', 'Blender', 'Pro Tools', 'Reaper', 'Meta Quest 3'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/corvus-sanctum/cover.jpg',
    description: `A VR escape room game set in a medical environment, where the player must follow certain clues to escape and win. Development tools include Unity, Blender, and FMOD.`,
    role: `UNITY | C# | VR | SOUND DESIGN | FMOD

In the VR game project, I was primarily responsible for sound organization, overseeing everything from brainstorming to sound design, recording, and mixing. Alongside Callum Baird, we created many sounds using the Soundly sound library, our own foley recordings, and voice recordings. We used ProTools and Reaper as the chosen DAWs. For game integration, I set up an FMOD project, where my main task was organizing and mixing the sounds within FMOD, as well as managing events in Unity. This also involved creating C# scripts myself, but I also utilized predefined FMOD sound event scripts.`,
    tools: ['Unity', 'C#', 'FMOD', 'Blender', 'Pro Tools', 'Reaper', 'Soundly', 'Meta Quest 3'],
    images: [
      '/projects/corvus-sanctum/img-1.jpg',
      '/projects/corvus-sanctum/img-2.jpg',
      '/projects/corvus-sanctum/img-3.jpg',
    ],
    videos: ['/projects/corvus-sanctum/trailer.mp4'],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234329779/Sound-Code-for-Corvus-Sanctum',
  },
  {
    id: 'williweb',
    title: "WilliWeb",
    subtitle: 'Digital Marketplace for HdM',
    categories: ['Web Design', 'UX Design'],
    tags: ['Vue.js', 'Bootstrap', 'Figma', 'MongoDB', 'VS Code', 'Frontend', 'UI Design'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/williweb/cover.jpg',
    description: `WilliWeb is a digital marketplace for HdM students, alumni, and staff to list, give away, search, or rent items. It allows limiting contact visibility and includes a comment section for questions and answers.`,
    role: `FRONTEND | DESIGN | FIGMA

I was jointly responsible for the frontend and design development of the WilliWeb project. Starting with Figma prototypes, we later implemented the frontend using Vue.js. In collaboration with the backend department, which worked with Deno, we developed a small eBay-like marketplace for internal use at HdM over the course of one semester.`,
    tools: ['Visual Studio Code', 'Figma', 'Vue.js', 'Bootstrap', 'MongoDB'],
    images: [
      '/projects/williweb/img-1.jpg',
      '/projects/williweb/img-2.jpeg',
      '/projects/williweb/img-3.jpeg',
      '/projects/williweb/img-4.jpeg',
      '/projects/williweb/img-5.jpeg',
      '/projects/williweb/img-6.jpeg',
      '/projects/williweb/img-7.png',
    ],
    videos: [],
    externalLinks: [
      { label: 'HdM Project Page', url: 'https://hdm-stuttgart.de/mediathek/projectpage/4320/details' },
    ],
    behanceUrl: 'https://www.behance.net/gallery/234326621/Design-Frontend-for-WilliWeb',
  },
  {
    id: 'maertyrer-der-strebsamkeit',
    title: "Märtyrer der Strebsamkeit",
    subtitle: 'Short Film – Dark Comedy',
    categories: ['Sound Design'],
    tags: ['Pro Tools', 'Sound Design', 'Foley', 'Mixing', 'Film'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/maertyrer-der-strebsamkeit/cover.jpg',
    description: `When Death attempts to bring the plague to Württemberg in 1349, he encounters a challenge he didn't expect. The two guards, Volckel and Utz, engage him in a heated debate about plague regulations and entry policies. A darkly humorous commentary on the confusions and contradictions of global COVID-19 policies, and a passionate plea for more solidarity and empathy during times of crisis.`,
    role: `SOUND DESIGN | MIXING | FOLEY

I was responsible for foley, sound design, and mixing on this project at Filmakademie Baden-Württemberg. I had a great time enhancing the comical situations with a slapstick-inspired approach to the sound, bringing the humor to life through audio. Additionally, working with the Vienna-based director Alexander Peskador was a great experience and a truly enjoyable collaboration.`,
    tools: ['Avid Pro Tools'],
    images: [
      '/projects/maertyrer-der-strebsamkeit/img-1.jpg',
      '/projects/maertyrer-der-strebsamkeit/img-2.jpg',
      '/projects/maertyrer-der-strebsamkeit/img-3.jpg',
      '/projects/maertyrer-der-strebsamkeit/img-4.jpg',
    ],
    videos: [
      'https://www.youtube.com/embed/0fxnmI4kTzc?si=8xAFR3Tt548gxxiz',
    ],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234346319/Sound-for-Maertyrer-der-Strebsamkeit',
  },
  {
    id: 'chicco',
    title: "chicco",
    subtitle: 'Responsive Coffee Brand Logo',
    categories: ['Brand Design'],
    tags: ['Adobe Illustrator', 'Logo Design', 'Responsive Design', 'Brand Identity'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/chicco/cover.png',
    description: `Developed during my exchange semester in Sweden, this little project explores a responsive logo system for a coffee brand. The design ranges from a detailed label with warm colors and coffee bean illustrations to a minimal typographic mark and compact icon.`,
    role: `LOGO DESIGN | RESPONSIVE DESIGN | BRANDING

I created a responsive logo system that adapts from a detailed illustrated label to a minimal icon, exploring the full range of brand expression.`,
    tools: ['Adobe Illustrator'],
    images: [
      '/projects/chicco/img-1.gif',
      '/projects/chicco/img-2.png',
      '/projects/chicco/img-3.png',
      '/projects/chicco/img-4.png',
      '/projects/chicco/img-5.png',
    ],
    videos: ['/projects/chicco/Chicco_CCC.mp4'],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234349273/Logo-Design-for-chicco',
  },
  {
    id: 'nyke',
    title: "NYKE",
    subtitle: 'Documentary Film',
    categories: ['Sound Design'],
    tags: ['Onset Sound', 'Boom Operator', 'Film', 'Mixing', 'Documentary'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/nyke/cover.png',
    description: `NYKE is the inspiring portrait of Nyke Slawik, one of Germany's youngest Bundestag members and the first openly trans woman to represent the Greens in Parliament. Directed by Jannika Quaas and produced by Eikon Film in cooperation with SWR, the documentary follows Nyke's early days in the Bundestag starting in 2021 — where she passionately advocates for climate protection, bodily autonomy, and improved public transport systems. The film premiered on 9 November 2023 in the SWR series "Junger Dokumentarfilm" and is available in the ARD Mediathek and on YouTube.`,
    role: `ONSET | SOUND

This film is a collaboration between the Filmakademie Ludwigsburg and the Suedwestrundfunk. As part of the sound team, I worked on sections of the onset sound.`,
    tools: [],
    images: [],
    videos: [
      'https://www.youtube.com/embed/TcUfk83EFSA',
    ],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234336359/Sound-for-NYKE',
  },
  {
    id: 'beruehr-mich',
    title: "Berühr' Mich",
    subtitle: 'Documentary Film',
    categories: ['Sound Design'],
    tags: ['Filmakademie', 'Onset Sound', 'Postproduction', 'Documentary', 'Ludwigsburg'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/beruehr-mich/cover.jpg',
    description: `For a long time, Christine was dissatisfied. Yet she has accomplished more than many who can walk. Still, something is missing. She hires the sex worker Thomas.

This film was created during my time at the Filmakademie Baden-Wuerttemberg.`,
    role: `ONSET | SOUND DESIGN | MIXING

This film was one of the first projects I had the opportunity to work on at the Film Academy, and it remains one of the most impactful to this day. The work was not only technically challenging but also incredibly inspiring on a personal level. It was a completely new experience to be so close to the characters' emotions and intimacy. As a crew, I believe we managed to portray this intimacy in a respectful and yet beautiful way. It was an experience that taught me a lot, both as a filmmaker and as a person.`,
    tools: [],
    images: [
      '/projects/beruehr-mich/img-1.jpg',
      '/projects/beruehr-mich/img-2.jpg',
      '/projects/beruehr-mich/img-3.jpg',
    ],
    videos: [
      'https://www.youtube.com/embed/7kiUE6bwIXw?si=UUOY0L0VCxt2w5En',
    ],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234339405/Sound-for-Beruehr-Mich',
  },
  {
    id: 'spoonergy',
    title: "Spoonergy",
    subtitle: 'ME/CFS Energy Management App',
    categories: ['App Design', 'UX Design'],
    tags: ['Figma', 'UX Research', 'App Design', 'Healthcare', 'ME/CFS'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/spoonergy/cover.png',
    description: `Spoonergy is an app designed to assist people with myalgic encephalomyelitis/chronic fatigue syndrome (ME/CFS) in managing their energy levels. Based on the spoon theory, the app helps users visualize their daily energy, prioritize tasks, and avoid overexertion, offering features like an energy tracker, task prioritization tools, and an AI assistant for real-time support.`,
    role: `DESIGN | FIGMA | UX RESEARCH

In the development of Spoonergy, I conducted extensive user research, including interviews with ME/CFS patients, to ensure the app met their needs. Adopting a user-centered design approach, I focused on minimizing cognitive load and maximizing usability. This process involved gathering feedback from potential users to create a more intuitive and supportive tool for managing energy. The goal was to develop an app that empowers individuals with ME/CFS to better manage their condition while emphasizing the importance of further features such as integrated symptom tracking for holistic care.`,
    tools: ['Figma'],
    images: [
      '/projects/spoonergy/img-1.jpg',
      '/projects/spoonergy/img-2.jpg',
    ],
    videos: ['/projects/spoonergy/ConceptVideo_Spoonergy_DanielKling_1.mp4'],
    externalLinks: [
      { label: 'Figma Prototype', url: 'https://www.figma.com/proto/9tDLx9Oi4w5VVDd4zsiZCp/Spoonergy?page-id=0%3A1&node-id=3-536&starting-point-node-id=3%3A536' },
    ],
    behanceUrl: 'https://www.behance.net/gallery/234333565/App-Concept-for-Spoonergy',
  },
  {
    id: 'borzaya',
    title: "BORZAYA",
    subtitle: 'Short Film – Dialogue, Sound Design, Mixing',
    categories: ['Sound Design'],
    tags: ['Pro Tools', 'Dialogue Editing', 'Sound Design', 'Mixing', 'Film'],
    year: 2025,
    date: '2025-10-29',
    cover: '/projects/borzaya/cover.jpg',
    description: `BORZAYA is a student short film produced at the Filmakademie Baden-Württemberg. The film combines powerful imagery of rural Eastern Europe with a tense, atmospheric soundscape.`,
    role: `DIALOG | SOUNDDESIGN | MIXING

Working on BORZAYA was especially challenging during the dialogue editing phase because the film was in Ukrainian. My focus was on building a raw, sound world that supports the tension and emotional weight of the story.`,
    tools: ['Avid Pro Tools'],
    images: [],
    videos: ['https://www.youtube.com/embed/oPVA7aUtVB8?si=5SzwWhcDRwdZ_FNW'],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234352757/Sound-for-BORZAYA',
  },
  {
    id: 'stoerenfrieda',
    title: "Störenfrieda",
    subtitle: 'Short Film – Sound Design, Foley Edit',
    categories: ['Sound Design'],
    tags: ['Pro Tools', 'Sound Design', 'Foley', 'Film'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/stoerenfrieda/cover.jpg',
    description: `In the Ruhrpott, the couple AVA and SASCHA run the pub STÖRENFRIDA — a safer space for the community and a home for the couple. Into this closed world suddenly enters Ava's father GUNTER, a former miner who needs a place to stay. Based on this loaded constellation, the film depicts the inclusivity and exclusivity of safer spaces and critically examines supposedly feminine and masculine spaces.`,
    role: `SOUNDDESIGN | FOLEY EDIT

This film is a collaboration between the Filmakademie Ludwigsburg and the Südwestrundfunk. As part of the postproduction sound team, I worked on the sounddesign and foley edit.`,
    tools: ['Avid Pro Tools'],
    images: [],
    videos: ['https://www.youtube.com/embed/g7x0c09noR0?si=AWWrvcaNrOJk1Y4B'],
    externalLinks: [
      { label: 'Amazon Prime Video', url: 'https://www.amazon.de/gp/video/detail/B0CGKM3ZY3' },
    ],
    behanceUrl: 'https://www.behance.net/gallery/234350825/Sound-for-Stoerenfrieda',
  },
  {
    id: 'die-artenschuetzer',
    title: "Die Artenschützer",
    subtitle: 'Documentary Film – Dialog, Sound Design, Foley, Mixing',
    categories: ['Sound Design'],
    tags: ['Pro Tools', 'Sound Design', 'Foley', 'Mixing', 'Dialogue', 'Film'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/die-artenschuetzer/cover.png',
    description: `Can intensive farming and biodiversity coexist? The mass media say no. Science and practice say yes. But how do we spread this message to the public? By producing a film with Germany's most famous farmer, Marie Hoffmann, about the causes of the crisis and possible solutions.

Collaboration with Waidsicht Media GmbH.`,
    role: `DIALOGEDIT | SOUNDDESIGN | FOLEYS | MIXING

This production was very close to my heart, as I believe biodiversity is incredibly important, especially today. I also thoroughly enjoyed working with natural landscapes and various animal sounds.`,
    tools: [],
    images: [
      '/projects/die-artenschuetzer/img-1.png',
      '/projects/die-artenschuetzer/img-2.png',
    ],
    videos: ['https://www.youtube.com/embed/rtOSv1tohlk?si=_EBGjhIe-0eRhhpm'],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234338997/Sound-for-Die-Artenschuetzer',
  },
  {
    id: 'audiogram-apps',
    title: 'Audiogram-Apps',
    subtitle: 'Usability Comparison – Mimi vs Sennheiser Hearing',
    categories: ['App Design', 'UX Design'],
    tags: ['UX Research', 'Usability Testing', 'PowerPoint', 'Excel', 'Audiogram'],
    year: 2025,
    date: '2025-09-10',
    cover: '/projects/audiogram-apps/cover.png',
    description: `Our study examines the usability of the Mimi and Sennheiser Hearing Test apps. 15 participants completed a hearing test — the Sennheiser app performed slightly better overall, particularly in usability and result presentation.`,
    role: `UX RESEARCH | STUDY

We combined observations, questionnaires, and interviews. After completing the hearing test, participants described their experiences using the Think Aloud method and evaluated the apps with the User Experience Questionnaire (UEQ). To avoid bias, we alternated the app order. Finally, we conducted interviews for an in-depth analysis of the user experience.`,
    tools: ['Microsoft PowerPoint', 'Microsoft Excel'],
    images: [],
    videos: ['https://www.youtube.com/embed/Wnqw-yt5JZY?si=UAS2EkZVkhX5qQaO'],
    externalLinks: [],
    behanceUrl: 'https://www.behance.net/gallery/234343959/UX-study-on-Audiogram-Apps',
  },
  {
    id: 'hellish-management',
    title: "Hellish Management",
    subtitle: 'Mobile Game – Sound Design, FMOD',
    categories: ['Game Audio', 'App Design', 'UX Design'],
    tags: ['Unity', 'FMOD', 'Android', 'Pixel Art', 'Game Design'],
    year: 2025,
    date: '2025-07-15',
    description: `"Hellish Management" is a darkly comedic management simulation for mobile Android devices, developed as part of multiple Game Design assignments by Elia Baisch, Caroline Cobus, Chrissy Fezer, Daniel Kling and Samuel Possemeyer.

The player takes on the role of Hell's Facility Manager, dragging and dropping incoming human souls into the appropriate torture chambers to satisfy Satan's ever-growing hunger. The game combines a macabre yet comedic atmosphere with stylized pixel-art from a top-down perspective.

My role involved designing and implementing the game's audio using FMOD, creating a soundscape that blends dark synthwave with 8-bit chiptunes. Demons have deep voices, sinners have high-pitched ones — the audio reinforces the quirky, hellish tone.`,
    role: `SOUND DESIGN | FMOD | UNITY

I was responsible for the entire audio pipeline of the game. Working with FMOD allowed me to create dynamic, layered soundscapes that respond to gameplay events. The challenge was designing audio that feels dark and oppressive yet simultaneously humorous — matching the game's "macabre yet comedic" tone. The FMOD integration into Unity worked smoothly, though fine-tuning audio assets without direct engine access proved challenging and led to delayed feedback cycles.`,
    tools: ['Unity', 'FMOD', 'Android Studio'],
    images: [
      '/projects/hellish-management/img-1.jpeg',
      '/projects/hellish-management/img-2.jpeg',
      '/projects/hellish-management/img-3.png',
      '/projects/hellish-management/img-4.png',
      '/projects/hellish-management/img-5.png',
      '/projects/hellish-management/WhatsApp%20Image%202026-09-09%20at%2016.09.13.jpeg',
      '/projects/hellish-management/WhatsApp%20Image%202026-09-09%20at%2016.09.13%20(1).jpeg',
      '/projects/hellish-management/WhatsApp%20Image%202026-09-09%20at%2016.09.13%20(2).jpeg',
    ],
    videos: ['/projects/hellish-management/WhatsApp%20Video%202026-09-09%20at%2013.12.59.mp4'],
    externalLinks: [],
  },
  {
    id: 'convecho',
    title: "Convecho",
    subtitle: 'Research Through Design – Smartwatch Assistenzsystem',
    categories: ['UX Design', 'App Design'],
    tags: ['UX Research', 'Wearables', 'Smartwatch', 'Haptisches Feedback', 'KI', 'Android', 'Figma'],
    year: 2025,
    date: '2025-07-15',
    description: `Convecho is an assistive system for communication therapy that addresses destructive conflict behavior through haptic real-time feedback via smartwatch and asynchronous reflection through a companion app.

Developed as part of a Research Through Design thesis at Hochschule der Medien Stuttgart, the system couples a smartwatch application that delivers discreet vibration signals during potentially escalating conversations with a smartphone app for detailed post-conversation analysis. The evaluation (n=10) suggests that tactile signals must intuitively mirror conflict dynamics (Mirroring). Additionally, users demand strictly neutral AI during data reflection, as psychoanalyzing outputs trigger reactance.

The project resulted in a published paper at an IEEE conference, providing concrete design implications for haptic assistive systems in conflict communication.`,
    role: `SOUND DESIGN | UX RESEARCH | PROTOTYPING

I contributed to the research methodology, prototyping, and evaluation of Convecho. My role involved conducting user interviews, designing and running the quantitative study (N=26), performing the card sorting evaluation with vibration patterns, and conducting Think-Aloud user tests with the high-fidelity app prototype. I also contributed to the paper writing, specifically the evaluation methodology and results sections.`,
    tools: ['Figma', 'Android Studio', 'Wear OS', 'Qualtrics', 'LaTeX'],
    images: [
      '/projects/convecho/wearable.png',
      '/projects/convecho/screen_main.PNG',
      '/projects/convecho/screen_score%20(1).PNG',
      '/projects/convecho/screen_improve.PNG',
    ],
    videos: ['/projects/convecho/Convecho.mp4'],
    externalLinks: [],
  },
]

export const categories = [
  'All',
  ...new Set(projects.flatMap(p => p.categories)),
]

export const coverSrcs = (project) => {
  const base = `/projects/${project.id}/cover`
  const fallbacks = ['.png', '.jpg', '.jpeg', '.webp'].map(ext => base + ext)
  if (project.cover) return [project.cover, ...fallbacks]
  return fallbacks
}
