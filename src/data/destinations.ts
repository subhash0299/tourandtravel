export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: 'adventure' | 'beach' | 'city' | 'cultural' | 'mountain';
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
    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
        description: "Welcome to the Pink City! Upon arrival, transfer to your heritage hotel. Evening visit to local markets followed by a welcome dinner."
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Full day exploring Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Evening free for shopping."
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description: "Drive to Jodhpur. En route, visit Pushkar. Evening arrival in Jodhpur."
      },
      {
        day: 4,
        title: "Jodhpur Exploration",
        description: "Visit Mehrangarh Fort, Jaswant Thada, and explore the blue city. Enjoy local cuisine for dinner."
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer",
        description: "Travel to the golden city of Jaisalmer. Evening at leisure."
      },
      {
        day: 6,
        title: "Jaisalmer Desert Experience",
        description: "Morning tour of Jaisalmer Fort and havelis. Afternoon camel safari in the Thar Desert with sunset views and cultural performance."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to airport for your onward journey with wonderful memories of Rajasthan."
      }
    ]
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters Cruise",
    location: "Kerala, India",
    description: "Sail through the serene backwaters of Kerala in a traditional houseboat. A tranquil journey through tropical landscapes.",
    image: "https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
        description: "Welcome to Kerala! Transfer to your hotel and evening Kathakali dance performance."
      },
      {
        day: 2,
        title: "Kochi to Alleppey",
        description: "Morning city tour of Fort Kochi. Afternoon transfer to Alleppey to board your private houseboat."
      },
      {
        day: 3,
        title: "Backwater Cruise",
        description: "Full day cruising through picturesque backwaters, observing village life and enjoying freshly prepared meals."
      },
      {
        day: 4,
        title: "Alleppey to Kumarakom",
        description: "Disembark at Kumarakom. Visit bird sanctuary and enjoy an Ayurvedic massage."
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning at leisure. Transfer to Kochi airport for your departure flight."
      }
    ]
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle Explorer",
    location: "Delhi, India",
    description: "Discover the perfect blend of history and culture through Delhi, Agra, and Jaipur on this classic Indian journey.",
    image: "https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
        description: "Welcome to India's capital! Transfer to your hotel and brief orientation."
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description: "Full day exploring Old and New Delhi including Jama Masjid, Red Fort, Humayun's Tomb and Qutub Minar."
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description: "Drive to Agra. Afternoon visit to Agra Fort and Mehtab Bagh for sunset views of the Taj Mahal."
      },
      {
        day: 4,
        title: "Agra to Jaipur",
        description: "Sunrise visit to the magnificent Taj Mahal. Drive to Jaipur via Fatehpur Sikri."
      },
      {
        day: 5,
        title: "Jaipur Exploration",
        description: "Visit Amber Fort, City Palace, Jantar Mantar and Hawa Mahal. Evening cultural dinner."
      },
      {
        day: 6,
        title: "Departure",
        description: "Morning at leisure for shopping. Afternoon transfer to Delhi airport for your departure."
      }
    ]
  },
  {
    id: "varanasi-spiritual",
    name: "Varanasi Spiritual Journey",
    location: "Varanasi, India",
    description: "Experience the spiritual heart of India with rituals, ancient temples, and dawn boat rides along the sacred Ganges.",
    image: "https://images.pexels.com/photos/7083104/pexels-photo-7083104.jpeg?auto=compress&cs=tinysrgb&w=1260",
    category: "cultural",
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
        description: "Welcome to the spiritual capital of India. Evening visit to witness the spectacular Ganga Aarti ceremony at Dashashwamedh Ghat."
      },
      {
        day: 2,
        title: "Dawn on the Ganges",
        description: "Early morning boat ride on the sacred Ganges to witness the rituals. After breakfast, walking tour through ancient lanes and temples. Evening meditation session."
      },
      {
        day: 3,
        title: "Sarnath Excursion",
        description: "Morning excursion to Sarnath, where Buddha gave his first sermon. Afternoon at leisure. Evening second boat ride to experience different ghats."
      },
      {
        day: 4,
        title: "Departure",
        description: "Transfer to airport for your onward journey, carrying the spiritual essence of Varanasi with you."
      }
    ]
  },
  {
    id: "himalayan-adventure",
    name: "Himalayan Adventure",
    location: "Manali, India",
    description: "Embark on a thrilling journey through the majestic mountains with trekking, camping, and adventure activities.",
    image: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
        description: "Welcome to India! Overnight stay in Delhi before heading to the mountains."
      },
      {
        day: 2,
        title: "Delhi to Manali",
        description: "Fly to Kullu and transfer to Manali. Evening acclimatization walk and briefing."
      },
      {
        day: 3,
        title: "Manali Exploration",
        description: "Visit Hadimba Temple, Old Manali and Vashisht hot springs. Afternoon preparation for trek."
      },
      {
        day: 4,
        title: "Manali to Solang Valley",
        description: "Begin trek to Solang Valley. Afternoon paragliding session if weather permits."
      },
      {
        day: 5,
        title: "Trek to Dhundi",
        description: "Trek through beautiful landscapes to Dhundi. Overnight camping with bonfire."
      },
      {
        day: 6,
        title: "Dhundi to Bakarthach",
        description: "Continue trek to higher altitude at Bakarthach with stunning mountain views."
      },
      {
        day: 7,
        title: "Return to Manali",
        description: "Trek back to Solang and transfer to Manali. Afternoon river rafting in Beas River."
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to Kullu airport for flight to Delhi and your international connection."
      }
    ]
  },
  {
    id: "goa-beach-retreat",
    name: "Goa Beach Retreat",
    location: "Goa, India",
    description: "Relax on golden beaches, enjoy water sports, and experience the unique Portuguese-influenced culture of Goa.",
    image: "https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
        description: "Welcome to India's favorite beach destination! Transfer to your beachfront resort. Evening beach walk and welcome drink at sunset."
      },
      {
        day: 2,
        title: "Beach & Water Sports",
        description: "Morning at leisure on the beach. Afternoon water sports including jet skiing and parasailing. Evening free to explore local shacks and cuisine."
      },
      {
        day: 3,
        title: "Cultural Exploration",
        description: "Half-day tour of Old Goa with Portuguese-era churches and Panjim. Afternoon spice plantation visit with traditional Goan lunch."
      },
      {
        day: 4,
        title: "Beach Relaxation & Cruise",
        description: "Morning yoga session on the beach. Day at leisure. Evening sunset cruise with dinner and music."
      },
      {
        day: 5,
        title: "Departure",
        description: "Last morning to soak up the sun before transfer to airport for your departure flight."
      }
    ]
  },
  {
    id: "andaman-island-escape",
    name: "Andaman Island Escape",
    location: "Port Blair, India",
    description: "Discover pristine beaches, crystal-clear waters, and vibrant marine life in these remote Indian Ocean islands.",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
        description: "Welcome to the Andaman Islands! Afternoon visit to Cellular Jail and attend the Light & Sound show in the evening."
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island",
        description: "Morning ferry to Havelock Island. Afternoon at Radhanagar Beach, consistently rated one of Asia's best beaches."
      },
      {
        day: 3,
        title: "Havelock Island Activities",
        description: "Snorkeling at Elephant Beach and leisure time at Kalapathar Beach. Optional forest trek available."
      },
      {
        day: 4,
        title: "Scuba & Beach Day",
        description: "Introductory scuba diving session for beginners. Afternoon at leisure to enjoy the pristine beaches."
      },
      {
        day: 5,
        title: "Havelock to Neil Island",
        description: "Ferry to Neil Island. Visit Natural Bridge, Bharatpur Beach and Laxmanpur Beach. Sunset at Laxmanpur Beach."
      },
      {
        day: 6,
        title: "Neil Island to Port Blair",
        description: "Morning at leisure. Afternoon ferry back to Port Blair. Evening shopping for souvenirs."
      },
      {
        day: 7,
        title: "Departure",
        description: "Morning visit to Anthropological Museum before transfer to airport for your departure flight."
      }
    ]
  },
  {
    id: "ladakh-wilderness",
    name: "Ladakh Wilderness Expedition",
    location: "Leh, India",
    description: "Journey through high-altitude deserts, ancient monasteries, and breathtaking mountain passes in this Himalayan wonderland.",
    image: "https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
        description: "Welcome to Ladakh! Rest day for acclimatization to the high altitude."
      },
      {
        day: 2,
        title: "Leh Monastery Tour",
        description: "Visit Shey, Thiksey and Hemis monasteries. Evening walk in Leh Market."
      },
      {
        day: 3,
        title: "Leh to Nubra Valley",
        description: "Drive over Khardung La, one of the world's highest motorable passes. Arrive at Nubra Valley and visit Diskit Monastery."
      },
      {
        day: 4,
        title: "Nubra Valley Exploration",
        description: "Bactrian camel safari on sand dunes. Visit Panamik hot springs. Overnight in Nubra."
      },
      {
        day: 5,
        title: "Nubra to Pangong Lake",
        description: "Drive to the magnificent Pangong Lake via Shyok River route. Overnight camping by the lake."
      },
      {
        day: 6,
        title: "Pangong Lake to Leh",
        description: "Morning at leisure by the lake. Return to Leh via Chang La pass."
      },
      {
        day: 7,
        title: "Excursion to Lamayuru",
        description: "Day trip to Lamayuru Monastery via Magnetic Hill and Gurudwara Pathar Sahib. Return to Leh."
      },
      {
        day: 8,
        title: "Rafting & Local Experience",
        description: "Morning rafting in Zanskar River (seasonal). Afternoon visit to SECMOL and Leh Palace."
      },
      {
        day: 9,
        title: "Departure",
        description: "Transfer to Leh airport for your departure flight."
      }
    ]
  },
  {
  id: "agra-mughal-marvels",
  name: "Agra Mughal Marvels",
  location: "Agra, India",
  description: "Step back into the grandeur of the Mughal era with visits to the Taj Mahal, Agra Fort, and more.",
  image: "https://images.pexels.com/photos/62348/pexels-photo-62348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      description: "Arrive in Agra. Afternoon visit to Agra Fort and Mehtab Bagh for a sunset Taj view."
    },
    {
      day: 2,
      title: "Taj Mahal & Fatehpur Sikri",
      description: "Early morning Taj Mahal visit. Later, a guided excursion to Fatehpur Sikri."
    },
    {
      day: 3,
      title: "Shopping & Departure",
      description: "Visit local marble markets before departure."
    }
  ]
},
{
  id: "udaipur-lakes-palaces",
  name: "Udaipur Lakes & Palaces",
  location: "Udaipur, India",
  description: "Discover the romance of Udaipur with serene lakes, royal palaces, and cultural experiences.",
  image: "https://images.pexels.com/photos/31778015/pexels-photo-31778015/free-photo-of-scenic-view-of-lake-pichola-with-city-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "cultural",
  price: 55000,
  rating: 4.8,
  duration: "4 days",
  includes: [
    "3 nights in lakeside hotel",
    "Sunset boat ride on Lake Pichola",
    "Visit to City Palace and Jag Mandir",
    "Folk dance show",
    "Local cuisine tasting",
    "Private guide & transfers"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival & Lake Pichola",
      description: "Arrival in Udaipur followed by a relaxing sunset boat ride on Lake Pichola."
    },
    {
      day: 2,
      title: "City Palace & Jagdish Temple",
      description: "Explore City Palace, Jagdish Temple, and Saheliyon Ki Bari. Evening folk dance show."
    },
    {
      day: 3,
      title: "Monsoon Palace & Market Visit",
      description: "Visit Monsoon Palace and enjoy traditional Rajasthani lunch. Evening at the local markets."
    },
    {
      day: 4,
      title: "Departure",
      description: "Free time for a stroll before airport transfer."
    }
  ]
},
{
  id: "maldives-island-escape",
  name: "Maldives Island Escape",
  location: "Maldives",
  description: "Unwind in the turquoise waters of the Maldives with luxurious villas, coral reefs, and serene beaches.",
  image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "beach",
  price: 45000,
  rating: 4.9,
  duration: "5 days",
  includes: [
    "4 nights in overwater villa",
    "All meals included",
    "Airport speedboat transfers",
    "Snorkeling & water sports",
    "Sunset cruise",
    "Spa session"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Paradise",
      description: "Arrival and transfer to overwater villa. Relax and soak in ocean views."
    },
    {
      day: 2,
      title: "Snorkeling & Beach Time",
      description: "Explore coral reefs and enjoy sunbathing on private beach."
    },
    {
      day: 3,
      title: "Water Adventures",
      description: "Kayaking, paddle boarding, and a romantic sunset cruise."
    },
    {
      day: 4,
      title: "Spa & Leisure",
      description: "Relax with a spa treatment and dine under the stars."
    },
    {
      day: 5,
      title: "Departure",
      description: "Check out and speedboat transfer to airport."
    }
  ]
},
{
  id: "gujarat-heritage-trail",
  name: "Gujarat Heritage Trail",
  location: "Gujarat, India",
  description: "Dive into Gujarat’s culture with stepwells, temples, wildlife safaris, and handicraft villages.",
  image: "https://images.pexels.com/photos/7171320/pexels-photo-7171320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "cultural",
  price: 35500,
  rating: 4.5,
  duration: "6 days",
  includes: [
    "5 nights in heritage hotels",
    "Daily breakfast",
    "Guided sightseeing tours",
    "Visit to Rann of Kutch",
    "Wildlife safari in Gir",
    "Local crafts village tour"
  ],
  itinerary: [
    {
      day: 1,
      title: "Ahmedabad Arrival",
      description: "Visit Sabarmati Ashram and Adalaj Stepwell. Explore night markets."
    },
    {
      day: 2,
      title: "Modhera & Patan",
      description: "Day trip to Sun Temple and Rani ki Vav, a UNESCO heritage stepwell."
    },
    {
      day: 3,
      title: "Kutch Exploration",
      description: "Drive to Rann of Kutch. Visit traditional villages and handicraft centers."
    },
    {
      day: 4,
      title: "White Desert Tour",
      description: "Explore the salt desert and enjoy local cuisine in a tented camp."
    },
    {
      day: 5,
      title: "Gir Safari",
      description: "Visit Gir National Park for lion safari. Evening leisure time."
    },
    {
      day: 6,
      title: "Departure",
      description: "Check-out and return transfer."
    }
  ]
},
{
  id: "nainital-hill-getaway",
  name: "Nainital Hill Getaway",
  location: "Nainital, India",
  description: "Bask in the charm of Nainital’s lakes, scenic viewpoints, and tranquil hill vibes.",
  image: "https://images.pexels.com/photos/16829036/pexels-photo-16829036/free-photo-of-town-and-lake-with-hills-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "adventure",
  price: 32500,
  rating: 4.3,
  duration: "4 days",
  includes: [
    "3 nights in lake-view hotel",
    "Daily breakfast",
    "Boating in Naini Lake",
    "Cable car ride to Snow View",
    "Nainital Zoo visit",
    "Shopping at Mall Road"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Nainital",
      description: "Check in and enjoy the serene views. Evening boat ride in Naini Lake."
    },
    {
      day: 2,
      title: "Local Sightseeing",
      description: "Visit Naina Devi Temple, Snow View Point via cable car, and Nainital Zoo."
    },
    {
      day: 3,
      title: "Leisure Day",
      description: "Relax or explore nearby areas like Bhimtal or Sattal."
    },
    {
      day: 4,
      title: "Departure",
      description: "Check out after breakfast and return journey."
    }
  ]
},
{
  id: "north-east-adventure",
  name: "North East Adventure",
  location: "North East India",
  description: "Explore lush landscapes, vibrant tribes, and pristine wildlife in the enchanting North East.",
  image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "mountain",
  price: 70000,
  rating: 4.7,
  duration: "7 days",
  includes: [
    "6 nights accommodation in eco-resorts",
    "Daily breakfast and select dinners",
    "Guided nature treks",
    "Visit to Kaziranga National Park",
    "Cultural village tours",
    "Boat ride on Umiam Lake"
  ],
  itinerary: [
    {
      day: 1,
      title: "Guwahati Arrival",
      description: "Visit Kamakhya Temple and Assam State Museum. Evening river cruise on Brahmaputra."
    },
    {
      day: 2,
      title: "Kaziranga National Park",
      description: "Jeep safari to spot one-horned rhinoceros, elephants, and diverse birdlife."
    },
    {
      day: 3,
      title: "Shillong & Umiam Lake",
      description: "Explore Shillong city and enjoy a relaxing boat ride on Umiam Lake."
    },
    {
      day: 4,
      title: "Tawang Valley",
      description: "Drive to Tawang. Visit Monasteries and local tribal villages."
    },
    {
      day: 5,
      title: "Dirang & Sangti Valley",
      description: "Explore the scenic valleys, hot springs, and local markets."
    },
    {
      day: 6,
      title: "Back to Guwahati",
      description: "Return journey with stops at scenic spots and local crafts markets."
    },
    {
      day: 7,
      title: "Departure",
      description: "Check-out and transfer to airport."
    }
  ]
},

{
  id: "orissa-cultural-heritage",
  name: "Orissa Cultural Heritage",
  location: "Orissa (Odisha), India",
  description: "Immerse yourself in Odisha’s rich temple architecture, classical dance, and tranquil beaches.",
  image: "https://images.pexels.com/photos/12871861/pexels-photo-12871861.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  category: "cultural",
  price: 44000,
  rating: 4.4,
  duration: "5 days",
  includes: [
    "4 nights hotel stay",
    "Daily breakfast",
    "Guided tours of temples and museums",
    "Visit to Puri Beach and Konark Sun Temple",
    "Traditional Odissi dance performance"
  ],
  itinerary: [
    {
      day: 1,
      title: "Bhubaneswar Arrival",
      description: "Visit Lingaraj Temple and Odisha State Museum."
    },
    {
      day: 2,
      title: "Konark Sun Temple",
      description: "Explore the UNESCO World Heritage Site and local crafts village."
    },
    {
      day: 3,
      title: "Puri Beach & Jagannath Temple",
      description: "Visit the sacred temple and relax on Puri’s golden beaches."
    },
    {
      day: 4,
      title: "Chilika Lake",
      description: "Boat ride on Asia’s largest brackish water lagoon; bird watching and dolphin spotting."
    },
    {
      day: 5,
      title: "Departure",
      description: "Check-out and airport transfer."
    }
  ]
},

{
  id: "punjab-heritage-experience",
  name: "Punjab Heritage Experience",
  location: "Punjab, India",
  description: "Discover Punjab’s vibrant culture, golden fields, historic forts, and delicious cuisine.",
  image: "https://ihplb.b-cdn.net/wp-content/uploads/2024/04/Best-Places-to-Visit-in-Punjab-in-April.jpg",
  category: "cultural",
  price: 33000,
  rating: 4.6,
  duration: "4 days",
  includes: [
    "3 nights hotel accommodation",
    "Daily breakfast",
    "Guided city tours",
    "Visit to Golden Temple",
    "Traditional Punjabi meal",
    "Wagah Border ceremony"
  ],
  itinerary: [
    {
      day: 1,
      title: "Amritsar Arrival",
      description: "Visit the Golden Temple and Jallianwala Bagh."
    },
    {
      day: 2,
      title: "Wagah Border & Local Markets",
      description: "Witness the Wagah border ceremony and explore Amritsar bazaars."
    },
    {
      day: 3,
      title: "Patiala Day Trip",
      description: "Explore Qila Mubarak fort and royal gardens."
    },
    {
      day: 4,
      title: "Departure",
      description: "Check-out and transfer."
    }
  ]
},

{
  id: "sikkim-darjeeling-mountain-retreat",
  name: "Sikkim & Darjeeling Mountain Retreat",
  location: "Sikkim & Darjeeling, India",
  description: "Experience serene Himalayan views, tea gardens, and Buddhist monasteries in Sikkim and Darjeeling.",
  image: "https://images.pexels.com/photos/3275010/pexels-photo-3275010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "mountain",
  price: 68000,
  rating: 4.8,
  duration: "6 days",
  includes: [
    "5 nights mountain lodge stays",
    "Daily breakfast and lunch",
    "Guided monastery tours",
    "Visit to Tiger Hill sunrise",
    "Tea garden visit and tasting"
  ],
  itinerary: [
    {
      day: 1,
      title: "Gangtok Arrival",
      description: "Explore MG Road and visit Enchey Monastery."
    },
    {
      day: 2,
      title: "Tsomgo Lake & Baba Mandir",
      description: "Visit high-altitude lake and spiritual sites."
    },
    {
      day: 3,
      title: "Darjeeling Drive",
      description: "Travel to Darjeeling. Visit Peace Pagoda and local markets."
    },
    {
      day: 4,
      title: "Tiger Hill Sunrise",
      description: "Early morning visit to Tiger Hill for Himalayan sunrise views."
    },
    {
      day: 5,
      title: "Tea Gardens & Batasia Loop",
      description: "Tour famous tea estates and scenic railway loop."
    },
    {
      day: 6,
      title: "Departure",
      description: "Check-out and transfer to airport/railway station."
    }
  ]
},

{
  id: "tamil-nadu-temples-and-beaches",
  name: "Tamil Nadu Temples and Beaches",
  location: "Tamil Nadu, India",
  description: "Explore ancient temples, vibrant culture, and beautiful beaches of Tamil Nadu.",
  image: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "cultural",
  price: 26000,
  rating: 4.5,
  duration: "6 days",
  includes: [
    "5 nights hotel accommodation",
    "Daily breakfast",
    "Temple tours with expert guides",
    "Beach day at Mahabalipuram",
    "Cultural dance show"
  ],
  itinerary: [
    {
      day: 1,
      title: "Chennai Arrival",
      description: "Visit Kapaleeshwarar Temple and Marina Beach."
    },
    {
      day: 2,
      title: "Mahabalipuram",
      description: "Explore Shore Temple and beachside rock carvings."
    },
    {
      day: 3,
      title: "Pondicherry",
      description: "Visit French Quarter, Auroville, and serene beaches."
    },
    {
      day: 4,
      title: "Thanjavur",
      description: "Explore Brihadeeswarar Temple and local markets."
    },
    {
      day: 5,
      title: "Madurai",
      description: "Visit Meenakshi Temple and attend evening aarti."
    },
    {
      day: 6,
      title: "Departure",
      description: "Check-out and transfer."
    }
  ]
}



];