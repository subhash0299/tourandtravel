export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: 'adventure' | 'beach' | 'city' | 'cultural' | 'mountain' | 'spiritual';
  price: number;
  rating: number;
  duration: string;
  includes: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export const destinations: Destination[] = [
  {
    id: "rajasthan-heritage",
    name: "Rajasthan Heritage Tour",
    location: "Jaipur, India",
    description: "Experience the royal heritage of Rajasthan with this cultural journey through ancient palaces, markets and desert landscapes.",
    image: "/destpics/rajasthan.jpeg",
    category: "cultural",
    price: 85000,
    rating: 4.7,
    duration: "7 days",
    includes: [
      "Accommodation in heritage hotels",
      "Daily breakfast and dinner",
      "Private air-conditioned vehicle",
      "English-speaking guide",
      "Monument entrance fees",
      "Camel safari in Jaisalmer",
      "Cultural performances",
      "Airport transfers"
    ],
    itinerary: [
        {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Welcome to the Pink City! Upon arrival, transfer to your charming heritage hotel located in the heart of Jaipur. Spend your evening strolling through the bustling local markets, experiencing the vibrant colors, spices, and handicrafts. End the day with a delicious welcome dinner featuring traditional Rajasthani cuisine, setting the perfect tone for your cultural adventure."
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Spend a full day exploring Jaipur’s iconic landmarks starting with the majestic Amber Fort where you can enjoy panoramic views of the surrounding hills. Next, visit the grand City Palace, home to the royal family, followed by the fascinating astronomical instruments at Jantar Mantar. Capture the beauty of Hawa Mahal’s intricate facade. The evening is free for you to explore Jaipur’s markets or relax at your hotel."
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description: "Depart from Jaipur and head towards Jodhpur, known as the Blue City. En route, stop at Pushkar, a sacred town famous for its serene lake and the vibrant Brahma temple. Explore the spiritual vibes and local bazaars before continuing your journey. Arrive in Jodhpur by evening and check into your hotel, soaking in the city’s historic charm."
      },
      {
        day: 4,
        title: "Jodhpur Exploration",
        description: "Discover the majestic Mehrangarh Fort, perched high on a hill, offering sweeping views of the blue-hued city below. Wander through the ornate palaces and museums within the fort. Visit the serene Jaswant Thada memorial, known for its intricate marble work. In the evening, savor authentic Marwari cuisine at a local eatery, immersing yourself in the region’s flavors."
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer",
        description: "Travel to the enchanting city of Jaisalmer, famed for its golden sandstone architecture. Upon arrival, check into your hotel and enjoy some leisure time to relax or explore the lively streets lined with shops selling traditional textiles and jewelry. The evening is yours to soak in the tranquil desert town ambiance."
      },
      {
        day: 6,
        title: "Jaisalmer Desert Experience",
        description: "Begin your day with a guided tour of the stunning Jaisalmer Fort and its beautiful havelis, rich in history and craftsmanship. In the afternoon, embark on an unforgettable camel safari across the vast Thar Desert. Experience the serene beauty of the sunset as you traverse the dunes, followed by a lively cultural performance around a desert campfire, complete with folk music and traditional dance."
      },
      {
        day: 7,
        title: "Departure",
        description: "After breakfast, transfer to the airport for your onward journey. Carry with you the unforgettable memories of Rajasthan’s royal heritage, vibrant culture, and breathtaking landscapes."
      }
    ]
  }
  ,
{
  "id": "mumbai-city-explorer",
  "name": "Mumbai City Explorer",
  "location": "Mumbai, Maharashtra, India",
  "description": "Discover the fast-paced charm of Mumbai – from iconic landmarks to Bollywood vibes.",
  "image": "/destpics/mumbai.jpg",
  "category": "city",
  "price": 22000,
  "rating": 4.5,
  "duration": "4 days",
  "includes": [
    "3 nights hotel stay",
    "City tour with guide",
    "Gateway of India and Marine Drive",
    "Bollywood studio visit",
    "Street food walk"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & Marine Drive",
      "description": "Arrive in Mumbai and enjoy a relaxing evening stroll along Marine Drive. Capture views of the Queen's Necklace and taste street food at Chowpatty Beach."
    },
    {
      "day": 2,
      "title": "City Tour & Heritage",
      "description": "Visit iconic spots like Gateway of India, CST Station, Colaba Causeway, and Hanging Gardens. End the day at Bandra Fort with views of the Bandra-Worli Sea Link."
    },
    {
      "day": 3,
      "title": "Bollywood & Dharavi Walk",
      "description": "Experience a guided tour of a Bollywood studio and learn about India's film industry. Optional Dharavi slum tour for cultural insight and local craft shopping."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "After breakfast, check out and transfer to the airport or station, taking unforgettable Mumbai moments with you."
    }
  ]
},
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters Cruise",
    location: "Kerala, India",
    description: "Sail through the serene backwaters of Kerala in a traditional houseboat. A tranquil journey through tropical landscapes.",
    image: "/destpics/kerala.jpeg",
    category: "adventure",
    price: 74000,
    rating: 4.8,
    duration: "5 days",
    includes: [
      "4 nights accommodation (2 in hotel, 2 in houseboat)",
      "All meals during houseboat stay",
      "Daily breakfast at hotels",
      "Private transfers",
      "Kathakali dance show",
      "Ayurvedic massage session",
      "Spice plantation tour",
      "Airport transfers"
    ],
    itinerary: [
      {
    day: 1,
    title: "Arrival in Kochi",
    description: "Welcome to the beautiful state of Kerala! Upon arrival, transfer to your comfortable hotel located in the heart of Kochi. In the evening, immerse yourself in the mesmerizing world of Kathakali, a traditional dance drama famous for its elaborate costumes, intricate facial makeup, and expressive storytelling. This cultural performance offers a perfect introduction to Kerala’s rich heritage."
  },
  {
    day: 2,
    title: "Kochi to Alleppey",
    description: "Start your day with a guided city tour of historic Fort Kochi, exploring colonial architecture, charming streets, and the iconic Chinese fishing nets. After lunch, transfer to Alleppey, known as the 'Venice of the East,' where you will board your private houseboat. Settle in and prepare for a unique experience cruising through Kerala’s tranquil backwaters."
  },
  {
    day: 3,
    title: "Backwater Cruise",
    description: "Enjoy a full day cruising along the serene backwaters on your houseboat. Watch daily village life unfold on the banks — farmers working the fields, children playing, and fishermen casting their nets. Relish delicious, freshly prepared traditional Kerala meals served onboard, all while soaking in the lush greenery and peaceful surroundings."
  },
  {
    day: 4,
    title: "Alleppey to Kumarakom",
    description: "Disembark from the houseboat in the morning and transfer to Kumarakom. Visit the renowned Kumarakom Bird Sanctuary, home to a variety of migratory birds and rich biodiversity. Later, indulge in a rejuvenating Ayurvedic massage at a local wellness center, an ancient practice designed to refresh your body and mind with natural therapies."
  },
  {
    day: 5,
    title: "Departure",
    description: "Enjoy a leisurely morning at your hotel, perhaps taking a final stroll or relaxing by the water. When ready, transfer to Kochi airport for your onward departure, carrying fond memories of Kerala’s natural beauty and cultural treasures."
  }
    ]
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle Explorer",
    location: "Delhi, India",
    description: "Discover the perfect blend of history and culture through Delhi, Agra, and Jaipur on this classic Indian journey.",
    image: "/destpics/golden-temple.jpeg",
    category: "cultural",
    price: 45000,
    rating: 4.5,
    duration: "6 days",
    includes: [
      "5 nights accommodation in 4-star hotels",
      "Daily breakfast",
      "Private air-conditioned vehicle",
      "Professional English-speaking guide",
      "Monument entrance fees",
      "Sunrise Taj Mahal visit",
      "Elephant ride at Amber Fort (subject to availability)",
      "Airport transfers"
    ],
    itinerary: [
      {
    day: 1,
    title: "Arrival in Delhi",
    description: "Welcome to India's vibrant capital city! Upon arrival, transfer to your centrally located hotel where you’ll receive a brief orientation to prepare you for the exciting days ahead. Take some time to relax and absorb the city’s energy, getting ready for your cultural journey."
  },
  {
    day: 2,
    title: "Delhi Sightseeing",
    description: "Spend a full day exploring both Old and New Delhi’s historic and architectural gems. Start with Jama Masjid, one of the largest mosques in India, then wander through the imposing Red Fort complex. Visit Humayun's Tomb, an exquisite example of Mughal architecture, and conclude with the towering Qutub Minar, a UNESCO World Heritage site. Along the way, enjoy glimpses of Delhi’s bustling street life and vibrant markets."
  },
  {
    day: 3,
    title: "Delhi to Agra",
    description: "Drive to the historic city of Agra in the morning. In the afternoon, visit the imposing Agra Fort, a UNESCO World Heritage site showcasing Mughal splendor. Later, head to Mehtab Bagh, a garden complex directly opposite the Taj Mahal, perfect for capturing breathtaking sunset views of the iconic monument."
  },
  {
    day: 4,
    title: "Agra to Jaipur",
    description: "Rise early for a magical sunrise visit to the Taj Mahal, witnessing the monument bathed in soft morning light. Afterward, begin your drive to Jaipur, the Pink City, stopping en route at Fatehpur Sikri, the abandoned Mughal capital renowned for its stunning red sandstone architecture and rich history."
  },
  {
    day: 5,
    title: "Jaipur Exploration",
    description: "Explore Jaipur’s top attractions, starting with the majestic Amber Fort where you can enjoy panoramic views and learn about royal history. Visit the City Palace, an architectural marvel blending Mughal and Rajput styles, followed by Jantar Mantar, an ancient astronomical observatory. Don’t miss the iconic Hawa Mahal, famed for its intricate facade. In the evening, enjoy a cultural dinner featuring traditional Rajasthani music and dance."
  },
  {
    day: 6,
    title: "Departure",
    description: "Spend a leisurely morning for some last-minute shopping or sightseeing at your own pace. In the afternoon, transfer back to Delhi airport for your departure, taking with you memories of India’s rich heritage and vibrant culture."
  }
    ]
  },
  {
    id: "varanasi-spiritual",
    name: "Varanasi Spiritual Journey",
    location: "Varanasi, India",
    description: "Experience the spiritual heart of India with rituals, ancient temples, and dawn boat rides along the sacred Ganges.",
    image: "/destpics/varansi.jpg",
    category: "spiritual",
    price: 60000,
    rating: 4.4,
    duration: "4 days",
    includes: [
      "3 nights accommodation in riverside hotel",
      "Daily breakfast",
      "Private transfers",
      "Dawn and dusk boat rides on the Ganges",
      "Walking tour of ancient lanes",
      "Sarnath excursion",
      "Evening Ganga Aarti ceremony",
      "Meditation session",
      "Airport transfers"
    ],
    itinerary: [
      {
    day: 1,
    title: "Arrival in Varanasi",
    description: "Welcome to the spiritual heart of India. Upon arrival, settle into your hotel before heading out in the evening to witness the mesmerizing Ganga Aarti ceremony at Dashashwamedh Ghat. Experience the rhythmic chanting, flickering oil lamps, and spiritual energy as priests perform this sacred ritual on the banks of the Ganges."
  },
  {
    day: 2,
    title: "Dawn on the Ganges",
    description: "Start your day early with a serene boat ride on the sacred Ganges River to observe the morning rituals and prayers along the ghats. After a traditional breakfast, embark on a walking tour through Varanasi’s ancient labyrinthine lanes, exploring historic temples, vibrant markets, and local life. Conclude your day with a calming evening meditation session, connecting deeper with the city’s spiritual vibe."
  },
  {
    day: 3,
    title: "Sarnath Excursion",
    description: "Take a morning trip to Sarnath, a short drive from Varanasi, where Lord Buddha delivered his first sermon after enlightenment. Explore the archaeological sites, peaceful gardens, and the impressive Dhamek Stupa. Return to Varanasi for a leisurely afternoon. In the evening, enjoy a second boat ride to view different ghats illuminated by soft lights, offering a fresh perspective on the sacred river’s timeless beauty."
  },
  {
    day: 4,
    title: "Departure",
    description: "After breakfast, transfer to the airport for your onward journey, carrying with you the profound spiritual essence and memories of Varanasi’s timeless traditions."
  }
    ]
  },
  {
  id: "seven-sisters-mawlynnong",
  name: "Seven Sisters Horizons with Mawlynnong Stay",
  location: "Shillong, Cherrapunjee & Mawlynnong, Meghalaya, India",
  description: "Discover the serene beauty of Meghalaya with stays in Shillong, misty Cherrapunjee, and Asia’s cleanest village, Mawlynnong. This immersive journey through Northeast India includes waterfalls, sacred groves, living root bridges, and panoramic views of the valleys.",
  image: "/destpics/sevensisters.jpg",
  category: "adventure",
  price: 72000,
  rating: 4.6,
  duration: "7 days",
  includes: [
    "Round-trip flights (IndiGo Flight 6E-2038 & SpiceJet SG-8169)",
    "6 nights accommodation in 3-star hotels and eco camp",
    "Private car for all intercity transfers",
    "Daily breakfast at all hotels",
    "Airport pickup and drop",
    "Sightseeing in Shillong, Cherrapunjee, Mawlynnong, and Guwahati",
    "Visit to living root bridge and Mawlynnong village walk"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Shillong",
      description: "Arrive at Guwahati via IndiGo Flight 6E-2038. Transfer by private car to Shillong with a scenic stop at Umiam Lake. Check in to Hotel Nirvana Orchid (3 Star) and explore Ward’s Lake and Lady Hydari Park."
    },
    {
      day: 2,
      title: "Shillong Local Sightseeing",
      description: "Explore the lush green Shillong Golf Course, the Botanical Garden, and end the day with the cascading beauty of Elephant Falls. Private sedan provided for the day. Breakfast included at Nirvana Orchid."
    },
    {
      day: 3,
      title: "Transfer to Cherrapunjee",
      description: "Check out from the hotel after breakfast. Travel to Cherrapunjee and check in to Royal View Resort (3 Star). Visit Seven Sisters Falls, Nohkalikai Waterfalls, and Thangkharang Park before resting for the night."
    },
    {
      day: 4,
      title: "Living Root Bridge & Mawlynnong Stay",
      description: "Have breakfast and check out from Cherrapunjee. Visit the iconic Living Root Bridge near Riwai. Proceed to Mawlynnong and check in to Shnongpdeng Riverview Campsite. Explore Asia’s cleanest village on foot."
    },
    {
      day: 5,
      title: "Back to Shillong",
      description: "Post breakfast, travel back to Shillong and check in again at Hotel Nirvana Orchid. Spend your evening visiting local cafés, shopping for handicrafts, or simply relaxing in the charming hill town."
    },
    {
      day: 6,
      title: "Shillong to Guwahati",
      description: "After breakfast, check out and drive to Guwahati. Check in to The Guwahati Address (3 Star). Enjoy sightseeing around Guwahati city, such as the Brahmaputra riverside and local temples."
    },
    {
      day: 7,
      title: "Departure from Guwahati",
      description: "Enjoy your final breakfast at The Guwahati Address. Later, transfer to the airport for departure via SpiceJet Flight SG-8169 at 2:45 PM, concluding your beautiful Meghalaya adventure."
    }
  ]
}
,
  {
    id: "himalayan-adventure",
    name: "Himalayan Adventure",
    location: "Manali, India",
    description: "Embark on a thrilling journey through the majestic mountains with trekking, camping, and adventure activities.",
    image: "/destpics/himalayan.jpeg",
    category: "mountain",
    price: 120000,
    rating: 4.6,
    duration: "8 days",
    includes: [
      "7 nights accommodation (hotels and camping)",
      "All meals during trek",
      "Breakfast at hotels",
      "Professional trekking guide",
      "Camping equipment",
      "Paragliding session (weather permitting)",
      "River rafting",
      "Transportation throughout",
      "Airport transfers"
    ],
    itinerary: [
      {
    day: 1,
    title: "Arrival in Delhi",
    description: "Welcome to India! Arrive in Delhi and transfer to your hotel for an overnight stay. Take this time to rest and prepare for your upcoming mountain adventure."
  },
  {
    day: 2,
    title: "Delhi to Manali",
    description: "Fly from Delhi to Kullu Airport, followed by a scenic transfer to the picturesque hill station of Manali. In the evening, enjoy a gentle acclimatization walk through the town and attend a briefing session about the upcoming trek."
  },
  {
    day: 3,
    title: "Manali Exploration",
    description: "Spend the day exploring Manali’s highlights including the serene Hadimba Temple nestled amidst cedar forests, the charming Old Manali with its quaint cafes and shops, and the rejuvenating Vashisht hot springs. Use the afternoon to rest and prepare your gear for the trek ahead."
  },
  {
    day: 4,
    title: "Manali to Solang Valley",
    description: "Begin your trek to the scenic Solang Valley, surrounded by snow-capped peaks and alpine meadows. Weather permitting, experience an exhilarating paragliding session, soaring above the valley with breathtaking views."
  },
  {
    day: 5,
    title: "Trek to Dhundi",
    description: "Trek through pristine landscapes of pine forests and rolling hills to the peaceful village of Dhundi. Set up camp for the night and enjoy a cozy bonfire under the starry mountain sky."
  },
  {
    day: 6,
    title: "Dhundi to Bakarthach",
    description: "Continue ascending to Bakarthach, reaching higher altitudes with stunning panoramic views of the Himalayan peaks. Experience the tranquility of this remote area as you camp overnight."
  },
  {
    day: 7,
    title: "Return to Manali",
    description: "Trek back to Solang Valley and transfer to Manali town. In the afternoon, enjoy an adventurous river rafting session on the lively Beas River, perfect for adrenaline seekers and nature lovers alike."
  },
  {
    day: 8,
    title: "Departure",
    description: "Transfer to Kullu airport for your flight back to Delhi, connecting with your international journey home. Take with you unforgettable memories of your Himalayan trek and mountain experiences."
  }
    ]
  },
  {
  id: "divine-shirdi-trip",
  name: "2N Divine Trip to Shirdi",
  location: "Shirdi & Shani Shingnapur, Maharashtra, India",
  description: "Embark on a spiritually enriching journey to Shirdi, the home of Sai Baba, and experience peace and devotion at sacred temples like Khandoba Mandir and Baba’s Chavadi. Conclude with a divine visit to the powerful shrine of Shani Shingnapur.",
  image: "/destpics/shirdi.jpg",
  category: "spiritual",
  price: 25491,
  rating: 4.4,
  duration: "3 days",
  includes: [
    "Round-trip flights",
    "2 nights accommodation in a 3-star hotel",
    "Private airport transfers",
    "Daily breakfast and selected meals",
    "Sightseeing in Shirdi and Shani Shingnapur",
    "Visit to Sai Baba Temple, Khandoba Mandir, and Baba's Chavadi"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Shirdi & Temple Visit",
      description: "Arrive in Shirdi and transfer to your 3-star hotel. In the evening, visit the revered Sai Baba Temple, followed by a spiritual walk to Khandoba Mandir and Baba’s Chavadi – places deeply associated with Sai Baba’s life."
    },
    {
      day: 2,
      title: "Excursion to Shani Shingnapur",
      description: "After breakfast, take a day trip to the sacred village of Shani Shingnapur, known for its temple dedicated to Lord Shani. Return to Shirdi in the evening for leisure or optional temple darshan."
    },
    {
      day: 3,
      title: "Departure from Shirdi",
      description: "Check out after breakfast and transfer to the airport for your return flight, carrying with you the blessings and tranquility of this divine pilgrimage."
    }
  ]
}
,
  {
    id: "goa-beach-retreat",
    name: "Goa Beach Retreat",
    location: "Goa, India",
    description: "Relax on golden beaches, enjoy water sports, and experience the unique Portuguese-influenced culture of Goa.",
    image: "/destpics/goa.jpg",
    category: "beach",
    price: 65000,
    rating: 4.3,
    duration: "5 days",
    includes: [
      "4 nights beachfront resort accommodation",
      "Daily breakfast",
      "One sunset cruise with dinner",
      "Water sports package (jetski, parasailing)",
      "Half-day Old Goa heritage tour",
      "Spice plantation visit with lunch",
      "Beach yoga session",
      "Airport transfers"
    ],
    itinerary: [
      {
    day: 1,
    title: "Arrival in Goa",
    description: "Welcome to India's favorite beach destination! Upon arrival, transfer to your beautiful beachfront resort where you can unwind and soak in the tropical atmosphere. In the evening, take a peaceful walk along the sandy shores and enjoy a refreshing welcome drink while watching the stunning sunset over the Arabian Sea."
  },
  {
    day: 2,
    title: "Beach & Water Sports",
    description: "Spend a leisurely morning relaxing on the pristine beaches, enjoying the sun and sea breeze. In the afternoon, get your adrenaline pumping with thrilling water sports like jet skiing and parasailing. As evening falls, explore vibrant beach shacks and savor authentic Goan cuisine infused with Portuguese flavors."
  },
  {
    day: 3,
    title: "Cultural Exploration",
    description: "Embark on a half-day guided tour of Old Goa, visiting magnificent Portuguese-era churches such as Basilica of Bom Jesus and Se Cathedral, rich with history and stunning architecture. In the afternoon, visit a local spice plantation to learn about exotic spices and enjoy a traditional Goan lunch amidst lush greenery."
  },
  {
    day: 4,
    title: "Beach Relaxation & Cruise",
    description: "Start your day with a calming yoga session on the beach, connecting with nature. Spend the rest of the day at your leisure—whether lounging by the pool, shopping, or exploring. In the evening, set sail on a scenic sunset cruise complete with delicious dinner and live music, creating unforgettable memories on the water."
  },
  {
    day: 5,
    title: "Departure",
    description: "Enjoy your last morning in Goa soaking up the sun or taking a final stroll on the beach. Later, transfer to the airport for your departure flight, carrying the warm memories of your Goan getaway."
  }
    ]
  },
  {
  id: "kasol-adventure",
  name: "Kasol Nature & Adventure Retreat",
  location: "Kasol, Himachal Pradesh, India",
  description: "Escape to the serene Himalayan village of Kasol, nestled in the Parvati Valley. Enjoy breathtaking views, riverside camping, forest walks, and the rich culture of the mountains.",
  image: "/destpics/kasol.jpg",
  category: "mountain",
  price: 45000,
  rating: 4.6,
  duration: "5 days",
  includes: [
    "4 nights accommodation in riverside cottages",
    "Daily breakfast and dinner",
    "Trek to Kheerganga with guide",
    "Visit to Manikaran Sahib",
    "Local village walk in Tosh and Chalal",
    "Bonfire and music evening",
    "Private transfers from Bhuntar Airport"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Kasol",
      description: "Arrive at Bhuntar and transfer to Kasol. Check in to your riverside cottage and unwind amidst pine trees and mountain air. In the evening, take a stroll to Chalal village and enjoy the calm vibes of the Parvati River."
    },
    {
      day: 2,
      title: "Exploring Local Villages",
      description: "After breakfast, embark on a guided hike to Tosh village, known for its breathtaking views and cozy cafes. Experience Himachali hospitality and local culture. Return to Kasol in the evening for a relaxing bonfire and music night."
    },
    {
      day: 3,
      title: "Kheerganga Trek",
      description: "Early morning departure for the Kheerganga trek – a scenic trail through dense forests and waterfalls. Reach the top and soak in the natural hot springs surrounded by snow-clad peaks. Overnight stay in camp or return based on preference."
    },
    {
      day: 4,
      title: "Manikaran Sahib & Chill Day",
      description: "Take a short trip to the spiritual town of Manikaran, famous for its hot springs and the Gurudwara. Return to Kasol and spend the rest of the day at leisure – explore cafes, shop local, or relax by the river."
    },
    {
      day: 5,
      title: "Departure",
      description: "After breakfast, check out and head to Bhuntar for your return journey, refreshed and reconnected with nature."
    }
  ]
},

  {
    id: "andaman-island-escape",
    name: "Andaman Island Escape",
    location: "Port Blair, India",
    description: "Discover pristine beaches, crystal-clear waters, and vibrant marine life in these remote Indian Ocean islands.",
    image: "/destpics/andaman.jpeg",
    category: "beach",
    price: 125000,
    rating: 4.9,
    duration: "7 days",
    includes: [
      "6 nights accommodation across islands",
      "Daily breakfast and dinner",
      "Ferry tickets between islands",
      "Snorkeling equipment",
      "Glass-bottom boat ride",
      "Scuba diving session for beginners",
      "Cellular Jail light & sound show",
      "All transfers"
    ],
    itinerary: [
      {
    day: 1,
    title: "Arrival in Port Blair",
    description: "Welcome to the tropical paradise of the Andaman Islands! After arriving, transfer to your hotel and relax. In the afternoon, visit the historic Cellular Jail, a poignant reminder of India’s freedom struggle. As evening falls, attend the captivating Light & Sound show that narrates the jail’s stories through an immersive experience."
  },
  {
    day: 2,
    title: "Port Blair to Havelock Island",
    description: "Take a morning ferry to Havelock Island, known for its stunning beaches and crystal-clear waters. Spend the afternoon at Radhanagar Beach, frequently ranked among Asia’s best beaches, perfect for swimming, sunbathing, or simply enjoying the breathtaking sunset."
  },
  {
    day: 3,
    title: "Havelock Island Activities",
    description: "Start your day with snorkeling at Elephant Beach, exploring vibrant coral reefs and marine life. Later, unwind at the tranquil Kalapathar Beach with its striking black rocks and turquoise waters. For the adventurous, there’s an optional forest trek through the island’s lush greenery."
  },
  {
    day: 4,
    title: "Scuba & Beach Day",
    description: "Experience the thrill of an introductory scuba diving session designed for beginners, discovering underwater wonders of the Andaman Sea. Spend the afternoon at leisure, enjoying the pristine beaches, swimming, or relaxing by the shore."
  },
  {
    day: 5,
    title: "Havelock to Neil Island",
    description: "Catch a ferry to Neil Island. Explore the unique Natural Bridge, a fascinating rock formation shaped by the sea. Visit Bharatpur Beach, known for its calm waters, and Laxmanpur Beach where you can watch a spectacular sunset painting the sky with colors."
  },
  {
    day: 6,
    title: "Neil Island to Port Blair",
    description: "Enjoy a leisurely morning soaking in the island’s peaceful ambiance. In the afternoon, ferry back to Port Blair. Spend your evening shopping for souvenirs and local handicrafts to remember your trip."
  },
  {
    day: 7,
    title: "Departure",
    description: "Before your flight, visit the Anthropological Museum to learn about the indigenous tribes and culture of the Andaman Islands. Then transfer to the airport for your onward journey."
  }
    ]
  }
  ,
{
  "id": "delhi-heritage-and-modern-tour",
  "name": "Delhi Heritage and Modern Tour",
  "location": "Delhi, India",
  "description": "Uncover Delhi’s mix of Mughal history, colonial charm, and urban buzz in this cultural capital.",
  "image": "/destpics/delhi.jpeg",
  "category": "city",
  "price": 20000,
  "rating": 4.6,
  "duration": "4 days",
  "includes": [
    "3 nights stay",
    "Old and New Delhi city tour",
    "Qutub Minar & Red Fort visit",
    "Rickshaw ride in Chandni Chowk",
    "Local food tasting"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & India Gate",
      "description": "Arrive and visit India Gate, Connaught Place, and enjoy dinner at a classic Delhi dhaba."
    },
    {
      "day": 2,
      "title": "Old Delhi Tour",
      "description": "Explore Red Fort, Jama Masjid, and Raj Ghat. Take a rickshaw ride through Chandni Chowk and taste local chaats and parathas."
    },
    {
      "day": 3,
      "title": "New Delhi Highlights",
      "description": "Visit Humayun’s Tomb, Lotus Temple, Qutub Minar, and drive past the Rashtrapati Bhavan and Parliament House."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "After breakfast, check out and leave for your onward journey filled with Delhi’s vibrant memories."
    }
  ]
},
  {
    id: "ladakh-wilderness",
    name: "Ladakh Wilderness Expedition",
    location: "Leh, India",
    description: "Journey through high-altitude deserts, ancient monasteries, and breathtaking mountain passes in this Himalayan wonderland.",
    image: "/destpics/laddakh.jpeg",
    category: "adventure",
    price: 90000,
    rating: 4.7,
    duration: "9 days",
    includes: [
      "8 nights accommodation",
      "Daily breakfast and dinner",
      "Oxygen cylinders for emergencies",
      "Experienced high-altitude guide",
      "4x4 vehicle with driver",
      "Monastery entrance fees",
      "Camel safari at Nubra Valley",
      "Pangong Lake camping experience",
      "All permits and transfers"
    ],
    itinerary: [
      {
    day: 1,
    title: "Arrival in Leh",
    description: "Welcome to the breathtaking high-altitude desert of Ladakh! Upon arrival, take it easy to acclimatize to the thin mountain air. Rest well to prepare for the adventures ahead, and enjoy the serene Himalayan landscape surrounding Leh."
  },
  {
    day: 2,
    title: "Leh Monastery Tour",
    description: "Explore the spiritual heart of Ladakh with visits to iconic monasteries: Shey, the ancient summer palace of Ladakhi kings; Thiksey, resembling the Potala Palace of Lhasa; and Hemis, the largest and richest monastery in the region. End your day with a leisurely stroll through the bustling Leh Market, soaking in local culture and crafts."
  },
  {
    day: 3,
    title: "Leh to Nubra Valley",
    description: "Embark on a scenic drive crossing Khardung La, one of the highest motorable passes in the world at over 5,300 meters. Descend into the stunning Nubra Valley and visit Diskit Monastery, famous for its giant statue of Maitreya Buddha overlooking the valley."
  },
  {
    day: 4,
    title: "Nubra Valley Exploration",
    description: "Experience a unique Bactrian camel safari across the golden sand dunes of Hunder. Afterwards, relax in the rejuvenating Panamik hot springs, known for their healing properties. Spend the night under the stars in Nubra’s tranquil environment."
  },
  {
    day: 5,
    title: "Nubra to Pangong Lake",
    description: "Drive to the mesmerizing Pangong Lake, following the rugged Shyok River route. Enjoy breathtaking vistas of the shimmering blue lake nestled amidst barren mountains. Set up camp by the lakeshore and relish a magical night under the Himalayan sky."
  },
  {
    day: 6,
    title: "Pangong Lake to Leh",
    description: "Spend a peaceful morning soaking in the stunning views and serene atmosphere by the lake. Journey back to Leh crossing Chang La pass, witnessing more of Ladakh’s raw and dramatic landscapes."
  },
  {
    day: 7,
    title: "Excursion to Lamayuru",
    description: "Take a full-day excursion to Lamayuru Monastery, known as the 'Moonland' for its surreal lunar-like terrain. En route, stop at the mystical Magnetic Hill where vehicles appear to defy gravity, and visit the sacred Sikh Gurudwara Pathar Sahib. Return to Leh for the evening."
  },
  {
    day: 8,
    title: "Rafting & Local Experience",
    description: "If in season, enjoy an exhilarating morning rafting on the fast-flowing Zanskar River. Afterwards, visit SECMOL (Students' Educational and Cultural Movement of Ladakh), an inspiring grassroots educational initiative, and explore the historic Leh Palace with its panoramic views."
  },
  {
    day: 9,
    title: "Departure",
    description: "After a memorable journey, transfer to Leh airport for your onward flight, carrying the unique spirit and stunning memories of Ladakh with you."
  }
    ]
  },
  {
  id: "agra-mughal-marvels",
  name: "Agra Mughal Marvels",
  location: "Agra, India",
  description: "Step back into the grandeur of the Mughal era with visits to the Taj Mahal, Agra Fort, and more.",
  image: "/destpics/agra.jpg",
  category: "cultural",
  price: 48000,
  rating: 4.7,
  duration: "3 days",
  includes: [
    "2 nights hotel stay",
    "Guided Taj Mahal sunrise tour",
    "Visit to Agra Fort & Mehtab Bagh",
    "Fatehpur Sikri day trip",
    "Daily breakfast",
    "Private transfers"
  ],
  itinerary: [
    {
    day: 1,
    title: "Arrival & Agra Fort",
    description: "Arrive in the historic city of Agra, home to the iconic Taj Mahal. After settling into your hotel, enjoy an afternoon visit to the majestic Agra Fort, a UNESCO World Heritage Site showcasing impressive Mughal architecture. Later, stroll through Mehtab Bagh, a beautiful garden complex across the Yamuna River, offering a spectacular sunset view of the Taj Mahal bathed in golden light."
  },
  {
    day: 2,
    title: "Taj Mahal & Fatehpur Sikri",
    description: "Begin your day early with a mesmerizing sunrise visit to the Taj Mahal, witnessing the monument’s ethereal beauty in the soft morning light. Afterwards, embark on a guided excursion to Fatehpur Sikri, the abandoned Mughal capital, where you’ll explore grand palaces, mosques, and courtyards that tell stories of the empire’s glorious past."
  },
  {
    day: 3,
    title: "Shopping & Departure",
    description: "Spend your final morning exploring Agra’s famous marble markets, where you can shop for exquisite marble handicrafts, jewelry, and souvenirs. Afterward, transfer to your onward destination, taking with you unforgettable memories of your time in Agra."
  }
  ]
}
,
{
  "id": "bangalore-tech-and-green-tour",
  "name": "Bangalore Tech & Green Tour",
  "location": "Bangalore, Karnataka, India",
  "description": "Experience the silicon valley of India with its gardens, temples, and booming tech scene.",
  "image": "/destpics/bengaluru.jpeg",
  "category": "city",
  "price": 19000,
  "rating": 4.4,
  "duration": "3 days",
  "includes": [
    "2 nights stay",
    "City tour with guide",
    "Lalbagh and Cubbon Park visit",
    "Vidhana Soudha and Bull Temple",
    "Tech hub drive-through"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & Parks",
      "description": "Check in and visit Lalbagh Botanical Garden and Cubbon Park. Spend your evening at MG Road and Brigade Road shopping streets."
    },
    {
      "day": 2,
      "title": "Historical and Tech Tour",
      "description": "Explore Vidhana Soudha, ISKCON Temple, Bull Temple, and pass by the tech parks and start-up hubs of Whitefield and Electronic City."
    },
    {
      "day": 3,
      "title": "Departure",
      "description": "Check out after breakfast and head to the airport or station. Optional visit to Bangalore Palace if time permits."
    }
  ]
},
{
  id: "kedarnath-group-yatra",
  name: "Kedarnath Yatra - Group Tour",
  location: "Uttarakhand, India",
  description: "Embark on a spiritually uplifting group tour to Kedarnath, visiting sacred sites such as Ram Jhula, Gauri Kund, and the divine Kedarnath Temple. Experience the serenity of the Himalayas, holy rivers, and the vibrant spiritual energy of Haridwar and Rishikesh.",
  image: "/destpics/kedarnath.jpg",
  category: "spiritual",
  price: 31022,
  rating: 4.6,
  duration: "6 days",
  includes: [
    "Intercity car transfers (AC)",
    "5 nights accommodation (3-star & 4-star hotels)",
    "Airport pickup and drop from Delhi",
    "Daily breakfast and dinner",
    "Group trek to Kedarnath Temple",
    "Sightseeing in Rishikesh, Gauri Kund, Haridwar"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Rishikesh",
      description: "Arrive at Hotel Arch near Delhi Airport and travel to Rishikesh by AC vehicle. Visit the famous Ram Jhula, enjoy the scenic beauty, and settle in at Regenta Inn On The Ganges or similar. Dinner included."
    },
    {
      day: 2,
      title: "Travel to Guptkashi",
      description: "After breakfast, head to Guptkashi, a sacred town near Kedarnath. Enjoy a scenic drive and check into Regenta Resort Madhuganga or similar. Dinner included."
    },
    {
      day: 3,
      title: "Trek to Kedarnath",
      description: "After breakfast, drive to Sonprayag and then take a local vehicle to Gaurikund. Begin your 19-20 km trek to Kedarnath. Witness the Mandakini River and chants of 'Jai Bholenath.' Reach Kedarnath, check in at Behl Ashram or similar shared accommodation. Attend evening Aarti and have dinner."
    },
    {
      day: 4,
      title: "Darshan & Return to Guptkashi",
      description: "Early morning Abhishek Puja at Kedarnath Temple. Visit Bhairavnath Temple and Rudra Cave (optional). Trek back to Gaurikund and drive to Guptkashi. Check back into Regenta Resort Madhuganga. Dinner included."
    },
    {
      day: 5,
      title: "Drive to Haridwar",
      description: "Drive to Haridwar via Rudraprayag Sangam. Visit Har Ki Pauri for the enchanting Ganga Aarti. Check in at Regenta Orkos Haridwar. Dinner included."
    },
    {
      day: 6,
      title: "Departure to Delhi",
      description: "After breakfast, check out and head back to Delhi. Reach by approximately 6:00 PM. Plan return travel accordingly."
    }
  ]
}
,
{
  "id": "udaipur-lakes-palaces",
  "name": "Udaipur Lakes & Palaces",
  "location": "Udaipur, India",
  "description": "Discover the romance of Udaipur with serene lakes, royal palaces, and cultural experiences.",
  "image": "/destpics/udaipur.jpeg",
  "category": "cultural",
  "price": 55000,
  "rating": 4.8,
  "duration": "4 days",
  "includes": [
    "3 nights in lakeside hotel",
    "Sunset boat ride on Lake Pichola",
    "Visit to City Palace and Jag Mandir",
    "Folk dance show",
    "Local cuisine tasting",
    "Private guide & transfers"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & Lake Pichola",
      "description": "Arrive in romantic Udaipur and settle into your lakeside hotel overlooking the shimmering waters of Lake Pichola. In the evening, unwind with a picturesque sunset boat ride on the lake, absorbing stunning views of the City Palace and surrounding hills as the sky turns golden."
    },
    {
      "day": 2,
      "title": "City Palace & Jagdish Temple",
      "description": "Spend your day exploring the majestic City Palace complex, admiring its intricate architecture, museums, and courtyards. Visit the nearby Jagdish Temple, a beautiful example of Indo-Aryan architecture. Later, stroll through the fragrant gardens of Saheliyon Ki Bari. Conclude your day with an immersive folk dance performance showcasing Rajasthani culture and traditions."
    },
    {
      "day": 3,
      "title": "Monsoon Palace & Market Visit",
      "description": "Head to the Monsoon Palace perched atop a hill for panoramic views of Udaipur and its lakes. Enjoy a traditional Rajasthani lunch with authentic flavors. In the evening, explore Udaipur’s lively local markets, perfect for picking up handicrafts, textiles, and souvenirs."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "Spend a leisurely morning with a final stroll along the lakeside promenade before checking out from your hotel and transferring to the airport or railway station for your onward journey."
    }
  ]
},
{
  id: "lansdowne-escape",
  name: "Lansdowne Tranquil Hills Escape",
  location: "Lansdowne, Uttarakhand, India",
  description: "Rejuvenate in the quiet charm of Lansdowne – a peaceful hill station surrounded by oak and pine forests. Perfect for nature lovers, couples, and anyone seeking serenity away from crowds.",
  image: "/destpics/lansdowne.jpg",
  category: "mountain",
  price: 65000,
  rating: 4.3,
  duration: "7 days",
  includes: [
    "6 nights accommodation in heritage hotel",
    "Daily breakfast and dinner",
    "Nature walks and scenic drives",
    "Visit to Bhulla Tal, War Memorial, and Darwan Singh Museum",
    "Excursions to Durga Devi Temple and Kanvashram",
    "Evening bonfires and stargazing",
    "Private transfers from Kotdwar Railway Station"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Lansdowne",
      description: "Arrive at Kotdwar and drive through scenic pine forests to reach Lansdowne. Check into your heritage hotel and relax. In the evening, take a leisurely walk around the town or enjoy the sunset at Tip-in-Top viewpoint."
    },
    {
      day: 2,
      title: "Bhulla Tal & Lakeside Picnic",
      description: "Spend your day at Bhulla Tal – a serene man-made lake with boating, fountains, a children’s play area, and walking paths. Enjoy a relaxed lakeside picnic and visit the nearby café surrounded by lush greenery."
    },
    {
      day: 3,
      title: "Darwan Singh Museum & War Memorial",
      description: "Explore the Darwan Singh Museum, honoring the first Indian Victoria Cross recipient. Discover military archives and stroll through its rose garden. Later, visit the historic Garhwal Rifles Regimental War Memorial, built in 1923, to pay tribute to the brave soldiers of the region."
    },
    {
      day: 4,
      title: "Durga Devi Temple Excursion",
      description: "Head out for a scenic drive to Dugadda and visit the Durga Devi Temple, situated on the banks of River Khoh. This ancient temple, partially housed in a cave, offers a peaceful spiritual experience amidst natural surroundings."
    },
    {
      day: 5,
      title: "Trip to Kanvashram",
      description: "Today’s excursion takes you to the legendary Kanvashram near the River Malini. Believed to be the birthplace of King Bharata, this ashram is surrounded by forests and tranquil landscapes – ideal for reflection and nature walks."
    },
    {
      day: 6,
      title: "Leisure and Local Exploration",
      description: "Enjoy a slow morning followed by local exploration – shop for handmade woolens and souvenirs or visit hidden cafés around the hill station. In the evening, gather around for a bonfire and stargazing session."
    },
    {
      day: 7,
      title: "Departure",
      description: "After breakfast, check out from your hotel and drive back to Kotdwar Railway Station with peaceful memories and a heart full of mountain calm."
    }
  ]
}
,
{
  id: "ayodhya-ram-mandir-trip",
  name: "2N Ayodhya Spiritual Trip - Ram Mandir & Temples",
  location: "Ayodhya, Uttar Pradesh, India",
  description: "Experience the divine aura of Ayodhya, the birthplace of Lord Ram. This 2-day spiritual journey includes a visit to the iconic Ram Mandir, Hanuman Garhi, Kanak Bhawan, and serene ghats along the Sarayu River. Immerse yourself in rich history, architecture, and vibrant local culture.",
  image: "/destpics/ayodhya.jpg",
  category: "spiritual",
  price: 15000,
  rating: 4.5,
  duration: "2 days",
  includes: [
    "Round-trip transfers from Lucknow or nearby airport/railway station",
    "2 nights accommodation in a 3-star hotel",
    "Daily breakfast and one dinner",
    "Guided temple visits including Ram Mandir, Hanuman Garhi, Kanak Bhawan",
    "Sarayu River Ghat visit and boat ride",
    "Local cultural experience and shopping time"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival and Ram Mandir Visit",
      description: "Arrive at Ayodhya by road or rail. Check into your hotel and freshen up. Start your spiritual journey with a visit to the grand Ram Mandir. Explore the temple complex and learn about its history. Later, visit Hanuman Garhi, dedicated to Lord Hanuman, and spend some time soaking in the peaceful vibes. Enjoy a traditional dinner and overnight stay at the hotel."
    },
    {
      day: 2,
      title: "Kanak Bhawan and Sarayu River Ghats",
      description: "After breakfast, visit Kanak Bhawan, the palace of Lord Ram and Sita. Explore nearby temples and stroll along the holy Sarayu River ghats. Experience a serene boat ride on the river. Spend some time in local markets for souvenirs and handicrafts. After lunch, prepare for your return journey with fond memories of this sacred city."
    }
  ]
}
,
{
  "id": "maldives-island-escape",
  "name": "Maldives Island Escape",
  "location": "Maldives",
  "description": "Unwind in the turquoise waters of the Maldives with luxurious villas, coral reefs, and serene beaches.",
  "image": "/destpics/maldives.jpeg",
  "category": "beach",
  "price": 225000,
  "rating": 4.9,
  "duration": "5 days",
  "includes": [
    "4 nights in overwater villa",
    "All meals included",
    "Airport speedboat transfers",
    "Snorkeling & water sports",
    "Sunset cruise",
    "Spa session"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Paradise",
      "description": "Arrive in the Maldives and take a scenic speedboat transfer to your luxurious overwater villa. Settle in and spend the day relaxing, soaking in breathtaking ocean views and the soothing sounds of the sea."
    },
    {
      "day": 2,
      "title": "Snorkeling & Beach Time",
      "description": "Discover vibrant coral reefs teeming with colorful marine life on a guided snorkeling excursion. Later, unwind on your private beach, sunbathing or enjoying a refreshing swim in crystal-clear waters."
    },
    {
      "day": 3,
      "title": "Water Adventures",
      "description": "Engage in thrilling water activities including kayaking and paddleboarding over calm lagoons. In the evening, enjoy a romantic sunset cruise, with stunning hues lighting up the sky and sea."
    },
    {
      "day": 4,
      "title": "Spa & Leisure",
      "description": "Indulge in a rejuvenating spa treatment designed to relax and refresh. Spend the rest of the day at your leisure, dining under the stars and savoring exquisite Maldivian cuisine."
    },
    {
      "day": 5,
      "title": "Departure",
      "description": "After a leisurely breakfast, check out and transfer by speedboat to the airport, bidding farewell to your island paradise."
    }
  ]
}
,
{
  "id": "jaipur-royal-palace-tour",
  "name": "Jaipur Royal Palace Tour",
  "location": "Jaipur, Rajasthan, India",
  "description": "Explore the Pink City's grand palaces, majestic forts, and vibrant bazaars, all while indulging in royal hospitality and rich cultural heritage.",
  "image": "/destpics/jaipur.jpeg",
  "category": "city",
  "price": 23000,
  "rating": 4.8,
  "duration": "4 days",
  "includes": [
    "3 nights royal stay",
    "Amber Fort & Hawa Mahal visit",
    "Guided city palace tour",
    "Bazaar shopping walk",
    "Cultural folk dance dinner"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & Markets",
      "description": "Arrive in Jaipur and check into your heritage hotel, where you’ll be welcomed with a traditional aarti and refreshing drink. After settling in, begin your journey with a relaxed evening stroll through the iconic Johari and Bapu Bazaars. These bustling markets are famous for their colorful textiles, intricate jewelry, and handcrafted souvenirs. Watch artisans at work and soak in the local vibe before enjoying dinner at a nearby Rajasthani eatery."
    },
    {
      "day": 2,
      "title": "Amber Fort & Jal Mahal",
      "description": "Start your day with a hearty breakfast before heading out to the historic Amber Fort. Ride an elephant or jeep up the cobbled path to the fort entrance and explore its stunning courtyards, mirror palace (Sheesh Mahal), and panoramic views. Later, stop at the scenic Jal Mahal (Water Palace) for photography and lakeside relaxation. In the evening, return to your hotel or take an optional visit to a local art studio to see miniature painting demonstrations."
    },
    {
      "day": 3,
      "title": "City Palace & Cultural Show",
      "description": "Embark on a guided tour of the City Palace complex, home to museums, courtyards, and royal artifacts. Continue to Jantar Mantar, a UNESCO World Heritage Site known for its ancient astronomical instruments. Then, admire the stunning façade of Hawa Mahal, also called the Palace of Winds. In the evening, attend a traditional Rajasthani cultural show with live folk music, dance performances, and a royal-style dinner served under the stars in an ornate courtyard."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "Enjoy a leisurely breakfast at your hotel before checking out. Depending on your departure time, you may have the option for a quick visit to a local café or handicraft store. You’ll be transferred to the airport or railway station, carrying unforgettable memories of royal grandeur, cultural warmth, and the vibrant soul of Jaipur."
    }
  ]
},
{
  id: "dwarka-somnath-sasan-gir",
  name: "Dwarka, Somnath & Sasan Gir Holiday",
  location: "Dwarka, Somnath & Sasan Gir, Gujarat, India",
  description: "Embark on a spiritual and wildlife journey through Gujarat’s most iconic destinations – Dwarka, Somnath, and Sasan Gir. Visit ancient temples dedicated to Lord Krishna and Lord Shiva, and experience thrilling wildlife safaris in Gir National Park, home to the majestic Asiatic Lions.",
  image: "/destpics/dwarka.jpg",
  category: "spiritual",
  price: 28499,
  rating: 4.5,
  duration: "5 days",
  includes: [
    "Round-trip transfers from Ahmedabad/Rajkot",
    "4 nights accommodation in 3-star hotels",
    "AC private car for intercity and local sightseeing",
    "Daily breakfast and selected dinners",
    "Dwarka and Somnath temple darshan",
    "Jeep safari at Gir National Park",
    "All applicable taxes"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Dwarka",
      description: "Arrive in Ahmedabad or Rajkot and proceed to Dwarka by private car (approx. 6–7 hours). Check into your hotel and later visit the Dwarkadhish Temple for evening aarti. Take a leisurely walk along Gomti Ghat before dinner."
    },
    {
      day: 2,
      title: "Dwarka Sightseeing & Transfer to Somnath",
      description: "Post breakfast, visit Bet Dwarka by ferry, Nageshwar Jyotirlinga Temple, Rukmini Devi Temple, and Gopi Talav. Later, drive to Somnath (approx. 5 hours). On arrival, attend the mesmerizing light & sound show at the Somnath Temple and witness the evening aarti."
    },
    {
      day: 3,
      title: "Somnath Sightseeing & Transfer to Sasan Gir",
      description: "Visit the sacred Somnath Temple again in the morning. Explore Bhalka Tirth and Triveni Sangam. After breakfast, depart for Sasan Gir (approx. 2.5 hours). Check into a jungle resort or hotel and enjoy an evening nature walk or relax amidst nature."
    },
    {
      day: 4,
      title: "Gir Jungle Safari & Leisure",
      description: "Wake up early for an adventurous Jeep Safari at Gir National Park (permit included). Spot Asiatic lions, leopards, deer, and many bird species. Return to your hotel for breakfast and spend the rest of the day at leisure or visit nearby tribal villages."
    },
    {
      day: 5,
      title: "Departure",
      description: "After breakfast, check out and drive back to Ahmedabad or Rajkot for your onward journey, filled with spiritual energy and thrilling memories of Gujarat."
    }
  ]
}
,
{
  id: "mysore-wayanad-magical",
  name: "Magical Vacay in Mysore & Wayanad",
  location: "Mysore & Wayanad, India",
  description: "Explore the royal grandeur of Mysore and the lush green beauty of Wayanad on this magical 4-day getaway. Experience historical palaces, serene lakes, misty hills, and vibrant culture with smooth intercity transfers and curated activities.",
  image: "/destpics/wayanad.jpg",
  category: "adventure",
  price: 52000,
  rating: 4.5,
  duration: "4 days",
  includes: [
    "Round-trip flights",
    "3 nights accommodation in 3-star hotels",
    "Airport and intercity transfers by private car",
    "Daily breakfast and 2 selected dinners",
    "Visit to Tipu Sultan's Summer Palace and Brindavan Gardens",
    "Visit to Chamundi Hills and Mysore Palace",
    "Excursion to Banasura Sagar Dam and Wayanad Heritage Museum",
    "Visit to Pookode Lake and Edakkal Caves"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Mysore",
      description: "Fly into Mysore and check into your hotel. Begin your journey with a visit to Tipu Sultan’s Summer Palace – an Indo-Islamic architectural gem. Later, unwind at the beautifully lit Brindavan Gardens with musical fountains. Enjoy your evening at leisure."
    },
    {
      day: 2,
      title: "Mysore Sights & Drive to Wayanad",
      description: "After breakfast, explore the iconic Mysore Palace – a marvel of royal heritage. Then visit Chamundi Hills to take in panoramic views and the temple. By noon, head to Wayanad via a scenic drive. Check in and relax at your resort in the hills."
    },
    {
      day: 3,
      title: "Explore Wayanad",
      description: "Spend the day exploring Wayanad’s natural and cultural gems. Visit the majestic Banasura Sagar Dam and the Wayanad Heritage Museum. Post-lunch, explore Pookode Lake – a calm freshwater lake surrounded by forests. Wrap up with a short trek to the ancient Edakkal Caves, famous for prehistoric carvings."
    },
    {
      day: 4,
      title: "Departure",
      description: "After breakfast, check out and transfer to the airport for your return flight, carrying with you memories of palaces, hills, and cultural wonders."
    }
  ]
}
,
{
  "id": "gujarat-heritage-trail",
  "name": "Gujarat Heritage Trail",
  "location": "Gujarat, India",
  "description": "Dive into Gujarat’s culture with stepwells, temples, wildlife safaris, and handicraft villages.",
  "image": "/destpics/gujarat.jpeg",
  "category": "cultural",
  "price": 35500,
  "rating": 4.5,
  "duration": "6 days",
  "includes": [
    "5 nights in heritage hotels",
    "Daily breakfast",
    "Guided sightseeing tours",
    "Visit to Rann of Kutch",
    "Wildlife safari in Gir",
    "Local crafts village tour"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Ahmedabad Arrival",
      "description": "Arrive in Ahmedabad, a vibrant city blending tradition and modernity. Visit Sabarmati Ashram, the home of Mahatma Gandhi and a symbol of India’s freedom struggle. Explore the intricately carved Adalaj Stepwell, an architectural marvel. In the evening, wander through the bustling night markets, soaking in local flavors and handicrafts."
    },
    {
      "day": 2,
      "title": "Modhera & Patan",
      "description": "Take a day trip to Modhera to witness the stunning Sun Temple, renowned for its intricate carvings and alignment with the sun. Next, explore Patan, home to Rani ki Vav, a UNESCO World Heritage stepwell famous for its exquisite sculptures and engineering brilliance."
    },
    {
      "day": 3,
      "title": "Kutch Exploration",
      "description": "Drive to the Rann of Kutch, known for its vast white salt desert. Visit traditional Kutchi villages and handicraft centers, where local artisans create beautiful textiles, embroidery, and pottery, offering a glimpse into the region’s vibrant culture."
    },
    {
      "day": 4,
      "title": "White Desert Tour",
      "description": "Explore the surreal white salt desert of the Rann, an otherworldly landscape especially stunning at sunrise or sunset. Experience local cuisine in a tented camp, enjoying folk music and dance performances under the starry sky."
    },
    {
      "day": 5,
      "title": "Gir Safari",
      "description": "Visit Gir National Park, the only natural habitat of the Asiatic lions. Embark on a thrilling safari to spot lions, leopards, deer, and various bird species. Spend the evening at leisure, perhaps exploring local markets or relaxing at your heritage hotel."
    },
    {
      "day": 6,
      "title": "Departure",
      "description": "After breakfast, check out from your hotel and transfer to the airport or railway station for your onward journey, carrying rich memories of Gujarat’s heritage and wildlife."
    }
  ]
},
{
  "id": "nainital-hill-getaway",
  "name": "Nainital Hill Getaway",
  "location": "Nainital, India",
  "description": "Bask in the charm of Nainital’s lakes, scenic viewpoints, and tranquil hill vibes.",
  "image": "/destpics/nainital.jpeg",
  "category": "adventure",
  "price": 32500,
  "rating": 4.3,
  "duration": "4 days",
  "includes": [
    "3 nights in lake-view hotel",
    "Daily breakfast",
    "Boating in Naini Lake",
    "Cable car ride to Snow View",
    "Nainital Zoo visit",
    "Shopping at Mall Road"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nainital",
      "description": "Arrive and check in at your lake-view hotel, offering breathtaking views of Naini Lake. Spend a relaxing evening enjoying a serene boat ride on the calm waters of the lake, watching the sunset and the reflection of the surrounding hills."
    },
    {
      "day": 2,
      "title": "Local Sightseeing",
      "description": "Begin the day with a visit to the sacred Naina Devi Temple, perched overlooking the lake. Take a scenic cable car ride to Snow View Point for panoramic views of the snow-capped Himalayan peaks. Explore the Nainital Zoo, home to rare Himalayan species like the snow leopard and the Himalayan black bear."
    },
    {
      "day": 3,
      "title": "Leisure Day",
      "description": "Enjoy a free day to relax or take optional excursions to nearby destinations like Bhimtal or Sattal, known for their beautiful lakes and peaceful surroundings. Alternatively, explore local cafes and shops at your own pace."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "After breakfast, check out from your hotel and begin your return journey with fond memories of the tranquil hills and scenic beauty of Nainital."
    }
  ]
}
,
{
  "id": "kolkata-heritage-walk",
  "name": "Kolkata Heritage Walk",
  "location": "Kolkata, West Bengal, India",
  "description": "Take a cultural stroll through colonial architecture, temples, and Bengali flavors.",
  "image": "/destpics/kolkata.jpeg",
  "category": "city",
  "price": 18000,
  "rating": 4.5,
  "duration": "4 days",
  "includes": [
    "3 nights stay",
    "Victoria Memorial & Howrah Bridge visit",
    "Heritage tram ride",
    "Kumartuli artist walk",
    "Street food tour"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & Riverfront",
      "description": "Arrive and walk along the Hooghly riverfront near Prinsep Ghat. Enjoy the lit-up Howrah Bridge at night."
    },
    {
      "day": 2,
      "title": "Colonial Kolkata",
      "description": "Visit Victoria Memorial, St. Paul’s Cathedral, and take a tram ride through colonial streets."
    },
    {
      "day": 3,
      "title": "Culture & Cuisine",
      "description": "Tour the Indian Museum, visit Kumartuli to see idol-making, and enjoy street food at Park Street and New Market."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "Check out and depart with the soulful essence of Kolkata."
    }
  ]
},
{
  "id": "north-east-adventure",
  "name": "North East Adventure",
  "location": "North East India",
  "description": "Explore lush landscapes, vibrant tribes, and pristine wildlife in the enchanting North East.",
  "image": "/destpics/northeast.jpeg",
  "category": "mountain",
  "price": 70000,
  "rating": 4.7,
  "duration": "7 days",
  "includes": [
    "6 nights accommodation in eco-resorts",
    "Daily breakfast and select dinners",
    "Guided nature treks",
    "Visit to Kaziranga National Park",
    "Cultural village tours",
    "Boat ride on Umiam Lake"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Guwahati Arrival",
      "description": "Arrive in Guwahati and visit the revered Kamakhya Temple, a significant pilgrimage site blending natural beauty with spiritual aura. Explore the Assam State Museum to learn about the region’s rich history and culture. In the evening, enjoy a serene river cruise on the Brahmaputra River, soaking in the panoramic views and tranquil atmosphere."
    },
    {
      "day": 2,
      "title": "Kaziranga National Park",
      "description": "Embark on an exciting jeep safari in Kaziranga National Park, a UNESCO World Heritage Site famed for its population of the endangered one-horned rhinoceros. Spot elephants, wild buffalo, and a variety of bird species as you traverse the lush grasslands and wetlands of this protected sanctuary."
    },
    {
      "day": 3,
      "title": "Shillong & Umiam Lake",
      "description": "Travel to Shillong, known as the 'Scotland of the East' for its rolling hills and pleasant climate. Explore the lively city markets and local attractions before enjoying a peaceful boat ride on Umiam Lake, surrounded by verdant hills and beautiful scenery."
    },
    {
      "day": 4,
      "title": "Tawang Valley",
      "description": "Drive to the mystical Tawang Valley nestled in Arunachal Pradesh. Visit ancient Buddhist monasteries like Tawang Monastery, one of the largest in India, and interact with local tribal communities to experience their unique customs and traditions."
    },
    {
      "day": 5,
      "title": "Dirang & Sangti Valley",
      "description": "Explore the picturesque Dirang and Sangti Valleys, known for their scenic beauty and tranquil hot springs. Visit local markets to discover handcrafted goods and experience the warm hospitality of the region’s inhabitants."
    },
    {
      "day": 6,
      "title": "Back to Guwahati",
      "description": "Return journey to Guwahati with stops at scenic viewpoints and handicraft markets. Take time to purchase authentic local crafts and souvenirs as a memory of your North East adventure."
    },
    {
      "day": 7,
      "title": "Departure",
      "description": "After breakfast, check out and transfer to the airport for your onward journey, carrying beautiful memories of North East India’s natural and cultural richness."
    }
  ]
},
{
  "id": "orissa-cultural-heritage",
  "name": "Orissa Cultural Heritage",
  "location": "Orissa (Odisha), India",
  "description": "Immerse yourself in Odisha’s rich temple architecture, classical dance, and tranquil beaches.",
  "image": "/destpics/orissa.jpeg",
  "category": "cultural",
  "price": 44000,
  "rating": 4.4,
  "duration": "5 days",
  "includes": [
    "4 nights hotel stay",
    "Daily breakfast",
    "Guided tours of temples and museums",
    "Visit to Puri Beach and Konark Sun Temple",
    "Traditional Odissi dance performance"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Bhubaneswar Arrival",
      "description": "Arrive in Bhubaneswar, the temple city of India. Visit the magnificent Lingaraj Temple, a classic example of Kalinga architecture dedicated to Lord Shiva. Explore the Odisha State Museum to get an overview of the region’s history, art, and culture."
    },
    {
      "day": 2,
      "title": "Konark Sun Temple",
      "description": "Visit the iconic UNESCO World Heritage Site, the Sun Temple at Konark, known for its exquisite stone carvings and chariot-like structure. Explore the nearby crafts village, famous for traditional appliqué work and handloom textiles."
    },
    {
      "day": 3,
      "title": "Puri Beach & Jagannath Temple",
      "description": "Travel to Puri, a sacred pilgrimage town. Visit the famous Jagannath Temple, one of the Char Dham pilgrimage sites, and witness the devotional rituals. Spend the afternoon relaxing on the golden sands of Puri Beach, soaking up the coastal charm."
    },
    {
      "day": 4,
      "title": "Chilika Lake",
      "description": "Enjoy a boat ride on Chilika Lake, Asia’s largest brackish water lagoon, renowned for its diverse birdlife including migratory flamingos and spot dolphins in the clear waters. Experience the tranquil natural surroundings and rich biodiversity."
    },
    {
      "day": 5,
      "title": "Departure",
      "description": "After breakfast, check out and transfer to the airport for your onward journey, taking home the peaceful and cultural essence of Odisha."
    }
  ]
},
{
  "id": "tirupati-rameswaram-spiritual-tour",
  "name": "Tirupati & Rameswaram Spiritual Tour",
  "location": "Andhra Pradesh & Tamil Nadu, India",
  "description": "A sacred journey through South India’s most revered pilgrimage destinations – Tirupati and Rameswaram.",
  "image": "/destpics/rameshwaram.jpeg",
  "category": "spiritual",
  "price": 27000,
  "rating": 4.7,
  "duration": "5 days",
  "includes": [
    "4 nights hotel accommodation",
    "VIP Darshan at Tirumala",
    "Ramanathaswamy Temple visit",
    "Local transportation and transfers",
    "Guided tours and spiritual rituals"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Tirupati",
      "description": "Arrive in Tirupati and check into your hotel. In the evening, visit the Padmavathi Temple and relax to prepare for the Tirumala darshan the next day."
    },
    {
      "day": 2,
      "title": "Tirumala Temple Visit",
      "description": "Begin early for a VIP darshan of Lord Venkateswara at Tirumala. After darshan, visit nearby sacred spots like Akasa Ganga and Papavinasam."
    },
    {
      "day": 3,
      "title": "Travel to Rameswaram",
      "description": "Depart from Tirupati and head to Rameswaram. Enjoy scenic views during your journey. Check in to your hotel and rest for the night."
    },
    {
      "day": 4,
      "title": "Ramanathaswamy Temple & Dhanushkodi",
      "description": "Perform rituals and darshan at the Ramanathaswamy Temple. Later, explore Dhanushkodi, the ghost town where the land ends and the ocean begins."
    },
    {
      "day": 5,
      "title": "Pamban Bridge & Departure",
      "description": "On your final day, visit the iconic Pamban Bridge for amazing views. Shop for seashell crafts before heading to your onward destination."
    }
  ]
}
,

{
  "id": "punjab-heritage-experience",
  "name": "Punjab Heritage Experience",
  "location": "Punjab, India",
  "description": "Discover Punjab’s vibrant culture, golden fields, historic forts, and delicious cuisine.",
  "image": "/destpics/punjab.jpg",
  "category": "cultural",
  "price": 33000,
  "rating": 4.6,
  "duration": "4 days",
  "includes": [
    "3 nights hotel accommodation",
    "Daily breakfast",
    "Guided city tours",
    "Visit to Golden Temple",
    "Traditional Punjabi meal",
    "Wagah Border ceremony"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Amritsar Arrival",
      "description": "Arrive in Amritsar and visit the magnificent Golden Temple, the spiritual heart of Sikhism, where you can witness the serene holy rituals and community kitchen. Later, explore the historic Jallianwala Bagh memorial, a poignant reminder of India’s struggle for independence."
    },
    {
      "day": 2,
      "title": "Wagah Border & Local Markets",
      "description": "Experience the electrifying Wagah Border ceremony, a daily military parade symbolizing the India-Pakistan border spirit. In the afternoon, stroll through the bustling Amritsar bazaars, famous for vibrant textiles, traditional phulkari embroidery, and delicious street food."
    },
    {
      "day": 3,
      "title": "Patiala Day Trip",
      "description": "Take a day trip to Patiala, known for its royal heritage. Visit Qila Mubarak, a majestic fort blending Mughal and Rajput architecture, and relax in the beautifully landscaped royal gardens. Don’t miss tasting the local delicacies and traditional Punjabi hospitality."
    },
    {
      "day": 4,
      "title": "Departure",
      "description": "Enjoy a final breakfast before checking out and transferring to your onward destination, taking with you rich memories of Punjab’s heritage and warmth."
    }
  ]
},

{
  "id": "sikkim-darjeeling-mountain-retreat",
  "name": "Sikkim & Darjeeling Mountain Retreat",
  "location": "Sikkim & Darjeeling, India",
  "description": "Experience serene Himalayan views, tea gardens, and Buddhist monasteries in Sikkim and Darjeeling.",
  "image": "/destpics/sikkim.jpeg",
  "category": "mountain",
  "price": 68000,
  "rating": 4.8,
  "duration": "6 days",
  "includes": [
    "5 nights mountain lodge stays",
    "Daily breakfast and lunch",
    "Guided monastery tours",
    "Visit to Tiger Hill sunrise",
    "Tea garden visit and tasting"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Gangtok Arrival",
      "description": "Arrive in Gangtok, the vibrant capital of Sikkim. Explore MG Road’s lively markets filled with local handicrafts and savor authentic Sikkimese cuisine. Visit Enchey Monastery, a serene Buddhist site offering insight into local spiritual practices."
    },
    {
      "day": 2,
      "title": "Tsomgo Lake & Baba Mandir",
      "description": "Journey to the stunning high-altitude Tsomgo Lake, surrounded by snow-capped mountains. Experience the tranquil beauty of the glacial lake, then visit Baba Mandir, a revered shrine dedicated to a brave Indian soldier, offering breathtaking views and cultural significance."
    },
    {
      "day": 3,
      "title": "Darjeeling Drive",
      "description": "Travel to the charming hill station of Darjeeling, known for its cool climate and colonial architecture. Visit the Peace Pagoda, a symbol of harmony, and browse the bustling local markets for exquisite teas and souvenirs."
    },
    {
      "day": 4,
      "title": "Tiger Hill Sunrise",
      "description": "Wake up early for an unforgettable sunrise at Tiger Hill, where you can witness panoramic views of the majestic Kanchenjunga and other Himalayan peaks. Return to Darjeeling to relax and explore the town’s quaint cafes."
    },
    {
      "day": 5,
      "title": "Tea Gardens & Batasia Loop",
      "description": "Spend the day touring the lush tea estates that produce some of the world’s finest teas. Enjoy a tea tasting session to appreciate the unique flavors. Visit Batasia Loop, a scenic railway loop offering beautiful views and a war memorial commemorating Gorkha soldiers."
    },
    {
      "day": 6,
      "title": "Departure",
      "description": "After breakfast, check out and transfer to the airport or railway station, carrying with you the serene memories of the Himalayan mountain retreat."
    }
  ]
},


{
  "id": "tamil-nadu-temples-and-beaches",
  "name": "Tamil Nadu Temples and Beaches",
  "location": "Tamil Nadu, India",
  "description": "Explore ancient temples, vibrant culture, and beautiful beaches of Tamil Nadu.",
  "image": "/destpics/tamilnadu.jpeg",
  "category": "cultural",
  "price": 26000,
  "rating": 4.5,
  "duration": "6 days",
  "includes": [
    "5 nights hotel accommodation",
    "Daily breakfast",
    "Temple tours with expert guides",
    "Beach day at Mahabalipuram",
    "Cultural dance show"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Chennai Arrival",
      "description": "Arrive in Chennai and start your journey with a visit to the iconic Kapaleeshwarar Temple, a stunning example of Dravidian architecture with its vibrant gopuram. Later, unwind at Marina Beach, the longest urban beach in India, where you can enjoy the sunset and local street food."
    },
    {
      "day": 2,
      "title": "Mahabalipuram",
      "description": "Spend the day exploring the UNESCO World Heritage Site of Mahabalipuram. Discover the intricate carvings of the Shore Temple and marvel at the impressive rock reliefs depicting stories from ancient Indian mythology. Enjoy some leisure time on the beautiful beach, soaking in the serene atmosphere."
    },
    {
      "day": 3,
      "title": "Pondicherry",
      "description": "Travel to the charming town of Pondicherry, famous for its French colonial heritage. Wander through the quaint streets of the French Quarter, visit the spiritual community of Auroville, and relax on the peaceful beaches. Savor delicious French and Tamil fusion cuisine at local cafes."
    },
    {
      "day": 4,
      "title": "Thanjavur",
      "description": "Explore Thanjavur, known as the cultural capital of Tamil Nadu. Visit the majestic Brihadeeswarar Temple, a masterpiece of Chola architecture with its towering vimana. Explore bustling local markets for traditional handicrafts and experience the rich cultural heritage through local art and music."
    },
    {
      "day": 5,
      "title": "Madurai",
      "description": "Visit Madurai, one of the oldest continuously inhabited cities in the world. Tour the magnificent Meenakshi Temple, renowned for its stunning sculptures and vibrant festivals. Attend the evening aarti, a devotional ritual filled with music and lights that offers a unique spiritual experience."
    },
    {
      "day": 6,
      "title": "Departure",
      "description": "After breakfast, check out from the hotel and proceed with your transfer to the airport or railway station, taking with you unforgettable memories of Tamil Nadu’s temples and beaches."
    }
  ]
},
{
  "id": "uttarakhand-nature-and-spirituality",
  "name": "Uttarakhand Nature and Spirituality",
  "location": "Uttarakhand, India",
  "description": "Discover the spiritual towns and scenic beauty of Uttarakhand, from the Ganges ghats to the Himalayas.",
  "image": "/destpics/uttarakhand.jpeg",
  "category": "mountain",
  "price": 25000,
  "rating": 4.6,
  "duration": "6 days",
  "includes": [
    "5 nights accommodation",
    "Daily breakfast",
    "Ganga Aarti in Haridwar",
    "Trekking and local transport",
    "Temple visits with guide"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Haridwar Arrival",
      "description": "Arrive in Haridwar and attend the mesmerizing Ganga Aarti at Har Ki Pauri. Stroll along the ghats and enjoy the spiritual ambiance."
    },
    {
      "day": 2,
      "title": "Rishikesh",
      "description": "Explore Rishikesh, visit Laxman Jhula, and enjoy yoga or river rafting. Visit the Beatles Ashram for a spiritual and artistic vibe."
    },
    {
      "day": 3,
      "title": "Mussoorie",
      "description": "Travel to Mussoorie, the ‘Queen of Hills.’ Enjoy a walk on Mall Road and visit Kempty Falls for a refreshing day out."
    },
    {
      "day": 4,
      "title": "Dhanaulti",
      "description": "Head to Dhanaulti for peaceful forest walks and panoramic mountain views. Visit the Eco Park and relax in the crisp mountain air."
    },
    {
      "day": 5,
      "title": "Dehradun",
      "description": "Explore Dehradun’s attractions including Robber’s Cave and the Mindrolling Monastery. Enjoy some shopping at the local bazaar."
    },
    {
      "day": 6,
      "title": "Departure",
      "description": "After breakfast, check out and proceed to the airport or railway station with memories of Uttarakhand’s serenity and devotion."
    }
  ]
},
{
  "id": "ooty-hill-station-retreat",
  "name": "Ooty Hill Station Retreat",
  "location": "Ooty, Tamil Nadu, India",
  "description": "Relax in the cool hills of Ooty, surrounded by tea gardens, lakes, and colonial charm. Perfect for a refreshing break with scenic views, peaceful nature walks, and a touch of heritage.",
  "image": "/destpics/ooty.jpeg",
  "category": "adventure",
  "price": 21000,
  "rating": 4.4,
  "duration": "5 days",
  "includes": [
    "4 nights hotel stay",
    "Daily breakfast",
    "Toy train ride",
    "Tea estate tour",
    "Botanical garden entry"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Ooty Arrival",
      "description": "Arrive in Ooty via a scenic mountain drive or train journey. Check into your charming hilltop hotel nestled among eucalyptus trees. After a refreshing welcome drink, take a relaxed stroll around Ooty Lake, where you can optionally rent a paddle boat or simply enjoy the cool breeze and peaceful views. Wind down your day with a warm dinner and cozy evening by the fireplace."
    },
    {
      "day": 2,
      "title": "Botanical Gardens and Doddabetta",
      "description": "Start your day with a hearty breakfast, then head to the Government Botanical Gardens—home to thousands of plant species, including rare orchids and ancient trees. Stroll through its terraced lawns and flower beds. Later, drive up to Doddabetta Peak, the highest point in the Nilgiris, for stunning 360-degree views and a chance to click memorable photos amid the clouds."
    },
    {
      "day": 3,
      "title": "Tea Estate and Museum",
      "description": "Visit one of Ooty’s famous tea estates nestled on rolling hills. Walk through lush plantations, watch tea leaves being hand-picked, and visit the Tea Factory and Museum to learn about the entire process from leaf to cup. Enjoy a tea-tasting session featuring locally grown blends, and maybe pick up a few souvenirs from the plantation shop. The aroma and scenery will linger with you long after."
    },
    {
      "day": 4,
      "title": "Toy Train and Coonoor",
      "description": "Board the iconic Nilgiri Mountain Railway—a UNESCO World Heritage toy train—for a delightful ride through tunnels, bridges, and tea-covered hills to the nearby town of Coonoor. Visit the charming Sim’s Park with its wide variety of exotic plants, then explore local cafés or relax in a serene garden. Return to Ooty in the evening, watching the sun dip below the Nilgiri slopes."
    },
    {
      "day": 5,
      "title": "Departure",
      "description": "Enjoy a leisurely breakfast and take in the last views of misty mountains. Depending on your departure time, you may explore a local chocolate factory or craft shop before checking out. Depart with your heart full of calm, fresh mountain air, and a suitcase full of memories from Ooty's enchanting hills."
    }
  ]
},
{
  "id": "mysuru-palace-and-heritage-tour",
  "name": "Mysuru Palace & Heritage Tour",
  "location": "Mysuru, Karnataka, India",
  "description": "Uncover the royal heritage of Mysuru through its palace, temples, and local crafts.",
  "image": "/destpics/mysuru.jpeg",
  "category": "city",
  "price": 17000,
  "rating": 4.6,
  "duration": "3 days",
  "includes": [
    "2 nights stay",
    "Mysore Palace guided tour",
    "Chamundi Hill temple visit",
    "Mysore Zoo entry",
    "Silk factory visit"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival & Palace",
      "description": "Arrive and explore the grand Mysore Palace with a guided history walk. Enjoy evening illumination on weekends."
    },
    {
      "day": 2,
      "title": "Chamundi Hills & Markets",
      "description": "Climb Chamundi Hills to visit the temple and Nandi statue. Shop for Mysore silk and sandalwood products at Devaraja Market."
    },
    {
      "day": 3,
      "title": "Zoo & Departure",
      "description": "Visit the Mysore Zoo, one of the oldest in India. Depart after breakfast with royal impressions of Mysuru."
    }
  ]
}

];