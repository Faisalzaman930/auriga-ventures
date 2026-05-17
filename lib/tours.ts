export interface Hotel {
  name: string;
  description: string;
  image: string;
}

export interface Tour {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  when: string;
  price: string;
  duration: string;
  difficulty?: string;
  maxAltitude?: string;
  intro: string;
  sections: { heading: string; body: string }[];
  highlights: string[];
  hotels: Hotel[];
  relatedSlugs: string[];
}

export const TOURS: Tour[] = [
  {
    slug: "hunza-valley",
    name: "Hunza Valley",
    region: "Gilgit-Baltistan",
    tagline: "Ancient forts, turquoise lakes, and a sky that never ends.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg",
      "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
    ],
    when: "May – October",
    price: "From $1,300 pp",
    duration: "7–10 nights",
    intro:
      "Hunza sits in a fold of the Karakoram so dramatic it barely seems real — a valley carved by glaciers, framed by peaks that scrape the sky at over 7,000 metres. For centuries it was a kingdom unto itself, its rulers holding court in hilltop forts above terraced apricot orchards. Today it remains one of Pakistan's most extraordinary places: unhurried, deeply hospitable, and hauntingly beautiful. We design your time here around the moments that stay with you long after you've left.",
    sections: [
      {
        heading: "Baltit & Altit — two forts, a thousand years",
        body:
          "Baltit Fort has presided over Karimabad from its granite perch for over 700 years. Your private guide will walk you through rooms where Mir rulers once held court, explaining the politics and poetry of a kingdom that resisted every empire. Altit, older still, hangs over the Hunza River on a near-vertical cliff. Between visits, the old bazaar below offers handwoven woollen shawls, dried mulberries, and the best apricot oil in Asia.",
      },
      {
        heading: "Attabad Lake — a turquoise accident",
        body:
          "Attabad was formed in 2010 when a landslide dammed the Hunza River, creating a 21-kilometre lake of improbable blue-green water. The mountain road tunnels straight through the rock cliffs that created it. We arrange a private boat to cross at dawn, when the light turns the water electric and the silence is complete.",
      },
      {
        heading: "Khunjerab Pass — the roof of the Karakoram Highway",
        body:
          "At 4,693 metres, Khunjerab is the world's highest paved international border crossing. The drive up from Sost passes through landscapes that shift from golden desert to pure Arctic tundra within an hour. Marco Polo sheep graze the plateau. The air is thin, the views absolute. We time your visit for mid-afternoon, when the light flattens the mountains into silhouettes.",
      },
      {
        heading: "Passu Cones — the view you came for",
        body:
          "The Passu Cones are among Pakistan's most photographed landforms: a jagged crown of rock towers rising directly from the valley floor. The classic view is from the suspension bridge below the village — a narrow walkway above the rushing Hunza River that requires nerve and rewards with one of the finest mountain panoramas on earth.",
      },
    ],
    highlights: [
      "Private guided visit to Baltit and Altit forts",
      "Dawn boat crossing on Attabad Lake",
      "Drive to Khunjerab Pass (4,693m)",
      "Passu Cones and suspension bridge walk",
      "Handpicked boutique lodge accommodation throughout",
      "Expert local guide born in Hunza",
      "Traditional Hunzai meals and cultural evenings",
      "Rakaposhi Basecamp day trek (optional)",
    ],
    hotels: [
      {
        name: "Serena Hunza",
        description: "Perched above Karimabad with uninterrupted views of Rakaposhi, Serena blends traditional Hunzai architecture with genuine comfort.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
      },
      {
        name: "Eagle's Nest Hotel",
        description: "Arguably the finest viewpoint in Hunza, Eagle's Nest offers private cottages above the clouds with sunset views across five mountain ranges.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg",
      },
    ],
    relatedSlugs: ["skardu-valley", "rakaposhi-basecamp", "ghizer-valley"],
  },

  {
    slug: "skardu-valley",
    name: "Skardu Valley",
    region: "Gilgit-Baltistan",
    tagline: "Where the Karakoram meets silence.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
    ],
    when: "April – October",
    price: "From $1,300 pp",
    duration: "8–12 nights",
    intro:
      "Skardu sits at the heart of what mountaineers call the 'roof of the world' — a high desert valley surrounded by four of the earth's fourteen eight-thousanders. It is a place of enormous scale and intimate detail: apricot orchards in valley floors, centuries-old Buddhist rock carvings on cliff faces, lakes so still they mirror the sky exactly. Our Skardu journeys are unhurried by design. The valley rewards patience.",
    sections: [
      {
        heading: "Khaplu — a palace at the end of the valley",
        body:
          "Khaplu Palace, restored by the Aga Khan Trust for Culture, stands in the village like a time capsule from the Yabgo sultanate that once ruled this corner of the Karakoram. We arrange private access before the day visitors arrive. Your guide will take you through its intricately carved wooden galleries and painted ceilings, then down to the bazaar where local weavers sell the same geometric-patterned shawls that filled the palace's treasure rooms.",
      },
      {
        heading: "Shigar Fort — sleeping inside history",
        body:
          "The 400-year-old Shigar Fort has been converted into one of Pakistan's finest heritage hotels without losing a single carved wooden beam. Surrounded by fruit orchards and the sound of the Shigar River, it offers the rare experience of genuinely inhabiting a piece of history rather than simply observing it.",
      },
      {
        heading: "Deosai Plains — the world's second-highest plateau",
        body:
          "At 4,114 metres, Deosai is one of the few truly wild plateaus left on earth. The landscape is vast and treeless — a place of high-altitude meadows, glacial streams, and skies that shift from blue to storm grey in minutes. Himalayan brown bears graze here in summer, largely undisturbed. We camp on the plateau for one night, in a setup designed for comfort rather than endurance.",
      },
      {
        heading: "Satpara & Sheosar — lakes the colour of sapphire",
        body:
          "Satpara Lake sits just above Skardu town, fed by glaciers and framed by arid peaks. Sheosar, on the Deosai plateau, is smaller and wilder — a mirror of sky and cloud at the edge of the world. We visit both, timing Sheosar for the hour before sunset when the light turns the water gold.",
      },
    ],
    highlights: [
      "Private visit to Khaplu Palace",
      "Overnight stay in Shigar Fort Heritage Hotel",
      "Camping on Deosai Plains under a billion stars",
      "Satpara and Sheosar lake visits",
      "Buddhist rock carvings at Manthal",
      "Expert Balti-speaking local guide",
      "Private vehicle throughout",
      "Gourmet Balti cuisine at heritage properties",
    ],
    hotels: [
      {
        name: "Shigar Fort Residence",
        description: "A 400-year-old fort converted into Pakistan's most atmospheric heritage hotel. Every room is different; every ceiling tells a story.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      },
      {
        name: "Shangrila Resort",
        description: "The legendary Lower Kachura Lake resort, set beside one of Pakistan's most photographed stretches of water.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
      },
    ],
    relatedSlugs: ["hunza-valley", "astore-valley", "deosai-plains"],
  },

  {
    slug: "chitral",
    name: "Chitral",
    region: "Khyber Pakhtunkhwa",
    tagline: "Ancient kingdoms, mountain passes, and the Hindu Kush.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg",
      "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
    ],
    when: "May – September",
    price: "From $1,900 pp",
    duration: "7–9 nights",
    intro:
      "Chitral is Pakistan's most culturally complex district — a meeting point of the Hindu Kush, the Karakoram, and three of Asia's great civilisations. It was the last independent Muslim kingdom in South Asia before accession in 1969, and its remoteness has preserved customs, languages, and architectural traditions found nowhere else on earth. The Kalash valleys, tucked into its southern folds, are home to one of the world's last surviving pre-Islamic cultures. Chitral demands time and rewards it.",
    sections: [
      {
        heading: "The Kalash Valleys — a world apart",
        body:
          "The Kalash people of Bumburet, Rumbur, and Birir have maintained their polytheistic religion, language, and dress through centuries of pressure from surrounding cultures. Their wooden temples, grape-harvesting festivals, and the walnut-tree graveyards on cliff edges above the valleys are among the most extraordinary sights in South Asia. We arrange culturally sensitive visits with a Kalash guide, timed where possible to coincide with one of their seasonal festivals.",
      },
      {
        heading: "Chitral Fort — five centuries of royal history",
        body:
          "The Mehtar of Chitral held court here for five centuries, defending a mountain kingdom from Mongols, Afghans, and the British Empire in turn. The 1895 Siege of Chitral, when a British garrison held the fort against a winter assault, became one of the great Victorian adventure stories. Your guide will walk you through the towers and courtyards where all of it happened, with a directness that no museum exhibit can replicate.",
      },
      {
        heading: "Shandur Pass — polo at the roof of the world",
        body:
          "At 3,734 metres, Shandur Pass hosts the world's highest polo ground. The annual festival between Chitral and Gilgit teams draws thousands from across the mountains. Even outside festival season, the plateau is extraordinary — a high grassland above the clouds, ringed by glaciated peaks, with a small lake that reflects the sky with absolute fidelity.",
      },
      {
        heading: "Garam Chashma — hot springs in the Hindu Kush",
        body:
          "An hour north of Chitral town, sulphurous hot springs emerge from the hillside above the Lutkho River. The setting is raw and beautiful — a deep gorge of coloured rock, turquoise water, and mountains that close in from every side. Local families have bathed here for centuries; we arrange a private pool session at dawn before the crowds arrive.",
      },
    ],
    highlights: [
      "Culturally sensitive guided visit to Kalash Valleys",
      "Private access to Chitral Fort with historian guide",
      "Shandur Pass (3,734m) — world's highest polo ground",
      "Garam Chashma natural hot springs",
      "Tirich Mir viewpoint (7,708m, highest in Hindu Kush)",
      "Traditional Chitrali music and dance evening",
      "Handpicked heritage lodge accommodation",
      "Expert local guide fluent in Khowar and English",
    ],
    hotels: [
      {
        name: "Hindukush Heights",
        description: "Perched above Chitral town with panoramic views of Tirich Mir, this boutique hotel combines traditional Chitrali wood carving with genuine mountain hospitality.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/org_364545bcd22687ac_1592367926000-2048x1536.jpg",
      },
      {
        name: "Kalash Cultural Retreat",
        description: "A small, sensitively designed guesthouse at the entrance to Bumburet Valley, run by a Kalash family.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
      },
    ],
    relatedSlugs: ["ghizer-valley", "hunza-valley", "skardu-valley"],
  },

  {
    slug: "ghizer-valley",
    name: "Ghizer Valley",
    region: "Gilgit-Baltistan",
    tagline: "Pakistan's most unspoiled valley. Still yours to discover.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Lower-Kachura-Lake-and-Shangrila-Resort-560x460.jpg",
    ],
    when: "June – September",
    price: "From $1,800 pp",
    duration: "6–8 nights",
    intro:
      "Ghizer is the least-visited of Pakistan's major northern valleys, which is precisely why we love it. Where Hunza draws crowds and Skardu has infrastructure, Ghizer has neither — only a long river valley winding between peaks, a series of alpine lakes that barely appear on tourist maps, and a population of Ismaili mountain communities whose hospitality is entirely unrehearsed. The Shandur Pass connects it to Chitral at 3,734 metres; the road in from Gilgit follows the Ghizer River through gorges of coloured rock. It takes effort to get here. It is worth every minute.",
    sections: [
      {
        heading: "Phunder Lake — trout and silence",
        body:
          "Phunder Lake sits in a wide bowl of green valley at 2,900 metres, its crystal water so clear you can see the trout moving on the bottom. There is a small guesthouse on its eastern shore, run by a local family, where dinner is whatever came out of the lake that morning. We arrange fly-fishing with a local guide at dawn, before the light gets too bright and the fish too wise.",
      },
      {
        heading: "Gupis Fort — guarding the confluence",
        body:
          "Gupis Fort stands at the point where the Ghizer and Gilgit rivers meet, on a bluff of rock above the valley floor. The British built it to watch the Russian approach; the Mirs used it before that to control the trade routes. The caretaker will let you onto the roof at sunset if you ask. From there, the view down the valley is one of the finest in Pakistan.",
      },
      {
        heading: "Shandur Pass — the plateau at the top",
        body:
          "The road over Shandur climbs through switchbacks to a high grassland plateau at 3,734 metres, where a small lake sits beside the world's highest polo ground. Even without the annual festival, the plateau is extraordinary: a place of low light and enormous sky, where herders bring their animals up in summer and the silence is so complete you can hear your own heartbeat.",
      },
    ],
    highlights: [
      "Dawn fly-fishing on Phunder Lake",
      "Sunset views from Gupis Fort",
      "Crossing Shandur Pass (3,734m)",
      "Stargazing glamping on alpine meadows",
      "Kayaking on mountain lakes",
      "Traditional Ismaili village cultural exchange",
      "Wild camping with private chef",
      "No tourist crowds — genuine wilderness",
    ],
    hotels: [
      {
        name: "Phunder Lake Guesthouse",
        description: "A family-run lakeside lodge with four rooms, a wood-burning stove, and the best trout dinner in Gilgit-Baltistan.",
        image: "https://aurigaventure.com/wp-content/uploads/2019/01/Dunsa-Valley-Tormik-scaled-e1772014273230-560x460.jpg",
      },
      {
        name: "Ghizer Mountain Camp",
        description: "Our private glamping setup on a meadow above the valley — canvas tents, proper beds, and a sky full of stars that city life makes you forget exists.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      },
    ],
    relatedSlugs: ["chitral", "hunza-valley", "astore-valley"],
  },

  {
    slug: "rakaposhi-basecamp",
    name: "Rakaposhi Basecamp",
    region: "Nagar Valley",
    tagline: "A trek to the foot of one of Pakistan's great mountains.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/IMG_6386-scaled.jpeg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
    ],
    when: "May – October",
    price: "From $1,350 pp",
    duration: "4–5 nights",
    difficulty: "Easy – Moderate",
    maxAltitude: "3,500m",
    intro:
      "Rakaposhi stands at 7,788 metres — the 27th highest mountain in the world — and has one of the greatest vertical rises of any peak on earth, dropping nearly 6,000 metres from summit to valley floor in a single sweep. The trek to its basecamp at Hapakun is one of the finest short walks in the Karakoram: four days through pine forest, alpine meadow, and moraine, with the mountain's ice walls growing larger with every hour. It requires no mountaineering experience, only a willingness to walk.",
    sections: [
      {
        heading: "Day 1–2: Minapin to Hapakun",
        body:
          "The trek begins at Minapin Village in Nagar Valley, where your guide and porters will meet you after breakfast. The first day climbs through pine forest and terraced fields to a campsite at 2,800 metres, with the glacier visible above. Day two continues up through alpine meadows — wildflowers in June, golden grass in September — to Hapakun at 3,200 metres, where the mountain fills half the sky.",
      },
      {
        heading: "Day 3: Basecamp and the ice wall",
        body:
          "Day three is the goal: basecamp at 3,500 metres, directly beneath Rakaposhi's south face. The ice wall above is so vast it creates its own microclimate — cold air pouring off the glacier in waves. We camp here for the night, timing dinner for the last light on the summit. The silence at this altitude is absolute.",
      },
      {
        heading: "The return — a different valley",
        body:
          "We descend via a different route through Nagar Valley, stopping at the village of Nagar to visit the old fort and meet local families. The Mir of Nagar's family still lives here; your guide has known them for years and will introduce you if they're in residence. The contrast between the high mountain world and the warm valley below is one of the pleasures of the descent.",
      },
    ],
    highlights: [
      "4-day guided trek to Rakaposhi Basecamp (3,500m)",
      "Close-up glacier and ice wall views",
      "Alpine meadow camping with mountain backdrop",
      "Nagar Valley village visit and fort",
      "Private porter team and experienced trekking guide",
      "All camping equipment and meals provided",
      "Suitable for beginners and families",
      "Sunrise views of Rakaposhi summit",
    ],
    hotels: [
      {
        name: "Minapin Guesthouse",
        description: "A comfortable family-run guesthouse at the trailhead village, offering warm meals and a genuine introduction to Nagar Valley life.",
        image: "https://aurigaventure.com/wp-content/uploads/2014/10/IMG_9669-560x460.jpg",
      },
      {
        name: "Hapakun Mountain Camp",
        description: "Our private camping setup at 3,200m — proper expedition tents, sleeping bags rated to -15°C, and a camp cook who has been feeding trekkers in these mountains for twenty years.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      },
    ],
    relatedSlugs: ["hunza-valley", "astore-valley", "ghizer-valley"],
  },

  {
    slug: "astore-valley",
    name: "Astore Valley",
    region: "Gilgit-Baltistan",
    tagline: "Remote. Serene. The kind of place you don't forget.",
    heroImage: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
    galleryImages: [
      "https://aurigaventure.com/wp-content/uploads/2026/01/Nanga-Parbat-and-Sheosar-Lake-scaled.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      "https://aurigaventure.com/wp-content/uploads/2026/01/DSC_3514-HDR-1024x683.jpg",
      "https://aurigaventure.com/wp-content/uploads/2014/10/DJI_0122-scaled.jpg",
    ],
    when: "June – September",
    price: "From $1,400 pp",
    duration: "6–9 nights",
    intro:
      "Astore is the valley the world forgot, which is why it remains so extraordinary. It lies in the shadow of Nanga Parbat — at 8,126 metres the ninth-highest mountain on earth and one of the most dangerous — and its sub-valleys contain some of the finest high-altitude landscapes in Pakistan: Rama Lake with its granite cliff backdrop, the Rupal Face (the world's tallest vertical mountain wall), and Minimarg's wildflower meadows at 3,500 metres. The communities here are among the most welcoming in Gilgit-Baltistan. The infrastructure is minimal by design.",
    sections: [
      {
        heading: "Rama Valley — the lake at the end of the pine forest",
        body:
          "Rama Valley climbs above Astore town through a dense pine forest that smells of resin and cold air. At the top, a small lake sits in a bowl of granite cliffs, its water reflecting the sky and the surrounding peaks. We walk up through the forest in the early morning, reaching the lake before the day warms enough to bring the village children up to play. There is nowhere better in Pakistan to read a book.",
      },
      {
        heading: "The Rupal Face — looking up at the impossible",
        body:
          "The south face of Nanga Parbat above the Rupal Valley is the highest vertical mountain wall on earth — 4,600 metres of near-vertical rock and ice. Standing beneath it, the scale defeats comprehension. The Polish-American climber Reinhold Messner described it as 'the killer mountain'; looking up from the valley floor, you understand why. We drive to the Rupal Valley in the afternoon, when the face catches the last sun.",
      },
      {
        heading: "Minimarg — wildflowers at 3,500 metres",
        body:
          "Minimarg sits at the head of Astore Valley on a high plateau above the treeline, where wildflowers bloom in improbable density through July and August. The village is tiny — perhaps forty families — and almost entirely cut off in winter. We spend one night in a small guesthouse here, eating whatever the household is cooking, and walk the meadows at dawn before the mist burns off.",
      },
    ],
    highlights: [
      "Rama Lake at dawn in the pine forest",
      "Rupal Face viewpoint — world's highest vertical mountain wall",
      "Minimarg high-altitude meadows and wildflowers",
      "Overnight glamping on Deosai Plains",
      "Nanga Parbat (8,126m) views from multiple angles",
      "Private vehicle and expert local guide",
      "Authentic village homestay experience (optional)",
      "Completely uncrowded — genuine off-grid Pakistan",
    ],
    hotels: [
      {
        name: "Rama Rest House",
        description: "A simple government rest house above Astore town with a garden terrace facing Nanga Parbat. What it lacks in luxury it makes up for in position.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamp-Pakistan-at-Deosai-scaled-e1769679760930.jpg",
      },
      {
        name: "Deosai Plains Camp",
        description: "Our signature glamping setup on the Deosai Plateau — canvas tents at 4,114m with proper beds, gas heaters, and a night sky that makes you question everything you thought you knew about darkness.",
        image: "https://aurigaventure.com/wp-content/uploads/2026/01/Glamping-at-Deosai-scaled-e1771302772481.jpg",
      },
    ],
    relatedSlugs: ["skardu-valley", "rakaposhi-basecamp", "hunza-valley"],
  },
];

export function getTour(slug: string): Tour | undefined {
  return TOURS.find(t => t.slug === slug);
}
