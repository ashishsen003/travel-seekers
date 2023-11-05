import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    "id": "01",
    "title": "Westminster Bridge",
    "city": "London",
    "distance": 300,
    "price": 199,
    "maxGroupSize": 10,
    "desc": "Experience the vibrant Rio Carnival with samba parades and colorful costumes.",
    "reviews": [
      {
        "name": "Michel",
        "rating": 4.6
      },
      {
        "name": "Ashish Kumar",
        "rating": 5
      }
    ],
    "avgRating": 4.5,
    "photo": tourImg01,
    "featured": true
  },
  {
    "id": "02",
    "title": "Bali, Indonesia",
    "city": "Indonesia",
    "distance": 400,
    "price": 149,
    "maxGroupSize": 8,
    "desc": "Explore contemporary art at the prestigious Venice Biennale.",
    "reviews": [
      {
        "name": "John Doe",
        "rating": 4.6
      },
      {
        "name": "Ashish Kumar",
        "rating": 4.1
      }
    ],
    "avgRating": 4.5,
    "photo": tourImg02,
    "featured": true
  },
  {
    "id": "03",
    "title": "Snowy Mountains, Thailand",
    "city": "Thailand",
    "distance": 500,
    "price": 99,
    "maxGroupSize": 8,
    "desc": "Explore the diverse ecosystems of the Amazon rainforest.",
    "reviews": [],
    "avgRating": 4.5,
    "photo": tourImg03,
    "featured": true
  },
  {
    "id": "04",
    "title": "Beautiful Sunrise, Thailand",
    "city": "Thailand",
    "distance": 500,
    "price": 99,
    "maxGroupSize": 8,
    "desc": "Enjoy a scenic cruise along the picturesque canals of Amsterdam.",
    "reviews": [
      {
        "name": "John Doe",
        "rating": 4.6
      }
    ],
    "avgRating": 4.5,
    "photo": tourImg04,
    "featured": true
  },
  {
    "id": "05",
    "title": "Nusa Penida Bali, Indonesia",
    "city": "Indonesia",
    "distance": 500,
    "price": 99,
    "maxGroupSize": 8,
    "desc": "Cruise through the beautiful Mediterranean, visiting multiple ports.",
    "reviews": [
      {
        "name": "John Doe",
        "rating": 4.6
      }
    ],
    "avgRating": 4.5,
    "photo": tourImg05,
    "featured": true
  },
  {
    "id": "06",
    "title": "Cherry Blossoms Spring",
    "city": "Japan",
    "distance": 500,
    "price": 249,
    "maxGroupSize": 8,
    "desc": "Discover the natural wonders of Yellowstone National Park.",
    "reviews": [
      {
        "name": "John Doe",
        "rating": 4.6
      },
      {
        "name": "Ashish Kumar",
        "rating": 4.3
      }
    ],
    "avgRating": 4.5,
    "photo": tourImg06,
    "featured": true
  },
  {
    "id": "07",
    "title": "Holmen Lofoten",
    "city": "France",
    "distance": 500,
    "price": 199,
    "maxGroupSize": 8,
    "desc": "Witness the incredible wildlife of the Serengeti on an African safari.",
    "reviews": [
      {
        "name": "John Doe",
        "rating": 4.6
      },
      {
        "name": "Ashish Kumar",
        "rating": 4.8
      }
    ],
    "avgRating": 4.5,
    "photo": tourImg07,
    "featured": true
  },
  {
    "id": "08",
    "title": "Snowy Mountains, Thailand",
    "city": "Thailand",
    "distance": 500,
    "price": 99,
    "maxGroupSize": 8,
    "desc": "Experience the vibrant Rio Carnival with samba parades and colorful costumes.",
    "reviews": [],
    "avgRating": 4.5,
    "photo": tourImg03,
    "featured": true
  },
  // {
  //   "id": "09",
  //   "title": "Jaflong, Sylhet",
  //   "city": "Sylhet",
  //   "distance": 100,
  //   "price": 99,
  //   "maxGroupSize": 5,
  //   "desc": "Explore the breathtaking landscapes of the Grand Canyon on a thrilling adventure.",
  //   "reviews": [
  //     {
  //       "name": "John Doe",
  //       "rating": 4.5
  //     },
  //     {
  //       "name": "Jane Smith",
  //       "rating": 4.2
  //     }
  //   ],
  //   "avgRating": 4.35,
  //   "photo": tourImg01,
  //   "featured": false
  // },
  // {
  //   "id": "10",
  //   "title": "Cox's Bazar Sea Beach",
  //   "city": "Chittagong",
  //   "distance": 500,
  //   "price": 99,
  //   "maxGroupSize": 8,
  //   "desc": "Explore the breathtaking landscapes of the Grand Canyon on a thrilling adventure.",
  //   "reviews": [
  //     {
  //       "name": "Michael Brown",
  //       "rating": 4.7
  //     },
  //     {
  //       "name": "Emily Wilson",
  //       "rating": 4.6
  //     }
  //   ],
  //   "avgRating": 4.65,
  //   "photo": tourImg2,
  //   "featured": false
  // },
  // {
  //   "id": "11",
  //   "title": "Rio de Janeiro Carnival",
  //   "city": "Rio de Janeiro",
  //   "distance": 10,
  //   "price": 1499,
  //   "maxGroupSize": 6,
  //   "desc": "Experience the vibrant Rio Carnival with samba parades and colorful costumes.",
  //   "reviews": [
  //     {
  //       "name": "Carlos Silva",
  //       "rating": 4.9
  //     },
  //     {
  //       "name": "Maria Garcia",
  //       "rating": 4.8
  //     }
  //   ],
  //   "avgRating": 4.85,
  //   "photo": tourImg3,
  //   "featured": true
  // },
  // {
  //   "id": "12",
  //   "title": "Venice Biennale Art Exhibition",
  //   "city": "Venice",
  //   "distance": 0,
  //   "price": 599,
  //   "maxGroupSize": 8,
  //   "desc": "Explore contemporary art at the prestigious Venice Biennale.",
  //   "reviews": [
  //     {
  //       "name": "Sophia White",
  //       "rating": 4.7
  //     },
  //     {
  //       "name": "David Johnson",
  //       "rating": 4.6
  //     }
  //   ],
  //   "avgRating": 4.65,
  //   "photo": tourImg4,
  //   "featured": true
  // },
  // {
  //   "id": "13",
  //   "title": "Taj Mahal Tour, India",
  //   "city": "Agra",
  //   "distance": 10,
  //   "price": 499,
  //   "maxGroupSize": 15,
  //   "desc": "Visit the iconic Taj Mahal and learn about its history and architecture.",
  //   "reviews": [
  //     {
  //       "name": "Priya Patel",
  //       "rating": 4.8
  //     },
  //     {
  //       "name": "Raj Sharma",
  //       "rating": 4.9
  //     }
  //   ],
  //   "avgRating": 4.85,
  //   "photo": tourImg5,
  //   "featured": true
  // },
  // {
  //   "id": "14",
  //   "title": "Amazon Rainforest Expedition",
  //   "city": "Manaus",
  //   "distance": 500,
  //   "price": 1999,
  //   "maxGroupSize": 10,
  //   "desc": "Explore the diverse ecosystems of the Amazon rainforest.",
  //   "reviews": [
  //     {
  //       "name": "Ana Rodriguez",
  //       "rating": 4.7
  //     },
  //     {
  //       "name": "Lucas Oliveira",
  //       "rating": 4.6
  //     }
  //   ],
  //   "avgRating": 4.65,
  //   "photo": tourImg6,
  //   "featured": true
  // },
  // {
  //   "id": "15",
  //   "title": "Mediterranean Cruise",
  //   "city": "Various Ports",
  //   "distance": 0,
  //   "price": 1899,
  //   "maxGroupSize": 12,
  //   "desc": "Cruise through the beautiful Mediterranean, visiting multiple ports.",
  //   "reviews": [
  //     {
  //       "name": "Elena Gonzalez",
  //       "rating": 4.8
  //     },
  //     {
  //       "name": "Andrea Martinez",
  //       "rating": 4.7
  //     }
  //   ],
  //   "avgRating": 4.75,
  //   "photo": tourImg7,
  //   "featured": true
  // },
  // {
  //   "id": "16",
  //   "title": "Yellowstone National Park Adventure",
  //   "city": "Cody",
  //   "distance": 50,
  //   "price": 899,
  //   "maxGroupSize": 8,
  //   "desc": "Discover the natural wonders of Yellowstone National Park.",
  //   "reviews": [
  //     {
  //       "name": "James Smith",
  //       "rating": 4.9
  //     },
  //     {
  //       "name": "Emily Davis",
  //       "rating": 4.8
  //     }
  //   ],
  //   "avgRating": 4.85,
  //   "photo": tourImg16,
  //   "featured": true
  // },
  // {
  //   "id": "17",
  //   "title": "Amsterdam Canal Cruise",
  //   "city": "Amsterdam",
  //   "distance": 0,
  //   "price": 149,
  //   "maxGroupSize": 20,
  //   "desc": "Enjoy a scenic cruise along the picturesque canals of Amsterdam.",
  //   "reviews": [
  //     {
  //       "name": "Hans Van Der Berg",
  //       "rating": 4.7
  //     },
  //     {
  //       "name": "Anna Schmidt",
  //       "rating": 4.6
  //     }
  //   ],
  //   "avgRating": 4.65,
  //   "photo": tourImg17,
  //   "featured": true
  // },
  // {
  //   "id": "18",
  //   "title": "African Safari, Tanzania",
  //   "city": "Arusha",
  //   "distance": 100,
  //   "price": 1499,
  //   "maxGroupSize": 12,
  //   "desc": "Witness the incredible wildlife of the Serengeti on an African safari.",
  //   "reviews": [
  //     {
  //       "name": "Samuel Kiprotich",
  //       "rating": 4.9
  //     },
  //     {
  //       "name": "Laura Williams",
  //       "rating": 4.7
  //     }
  //   ],
  //   "avgRating": 4.8,
  //   "photo": tourImg17,
  //   "featured": true
  // },
  // {
  //   "id": "19",
  //   "title": "Great Wall of China Trek",
  //   "city": "Beijing",
  //   "distance": 50,
  //   "price": 799,
  //   "maxGroupSize": 15,
  //   "desc": "Embark on an adventurous trek along the iconic Great Wall of China.",
  //   "reviews": [
  //     {
  //       "name": "Li Wei",
  //       "rating": 4.7
  //     },
  //     {
  //       "name": "Sarah Johnson",
  //       "rating": 4.6
  //     }
  //   ],
  //   "avgRating": 4.65,
  //   "photo": tourImg19,
  //   "featured": true
  // },
  // {
  //   "id": "20",
  //   "title": "Santorini Island Getaway, Greece",
  //   "city": "Santorini",
  //   "distance": 0,
  //   "price": 1299,
  //   "maxGroupSize": 10,
  //   "desc": "Experience the beauty and charm of Santorini's stunning island views.",
  //   "reviews": [
  //     {
  //       "name": "Nikos Papadopoulos",
  //       "rating": 4.8
  //     },
  //     {
  //       "name": "Sophia Kouris",
  //       "rating": 4.7
  //     }
  //   ],
  //   "avgRating": 4.75,
  //   "photo": tourImg20,
  //   "featured": true
  // },
  // {
  //   "id": "21",
  //   "title": "Marrakech Souk Exploration",
  //   "city": "Marrakech",
  //   "distance": 0,
  //   "price": 149,
  //   "maxGroupSize": 10,
  //   "desc": "Navigate the vibrant and bustling markets of Marrakech's old town.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg21,
  //   "featured": true
  // },
  // {
  //   "id": "22",
  //   "title": "Iguazu Falls Adventure, Argentina",
  //   "city": "Puerto Iguazu",
  //   "distance": 5,
  //   "price": 799,
  //   "maxGroupSize": 12,
  //   "desc": "Discover the awe-inspiring Iguazu Falls and its surrounding rainforest.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg22,
  //   "featured": true
  // },
  // {
  //   "id": "23",
  //   "title": "Alaskan Wilderness Expedition",
  //   "city": "Anchorage",
  //   "distance": 100,
  //   "price": 1699,
  //   "maxGroupSize": 8,
  //   "desc": "Explore the pristine wilderness of Alaska and its diverse wildlife.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg23,
  //   "featured": true
  // },
  // {
  //   "id": "24",
  //   "title": "Barcelona Gaudi Tour",
  //   "city": "Barcelona",
  //   "distance": 0,
  //   "price": 199,
  //   "maxGroupSize": 15,
  //   "desc": "Visit the architectural masterpieces of Antoni Gaudi in Barcelona.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg24,
  //   "featured": true
  // },
  // {
  //   "id": "25",
  //   "title": "Skiing in Aspen, USA",
  //   "city": "Aspen",
  //   "distance": 10,
  //   "price": 899,
  //   "maxGroupSize": 6,
  //   "desc": "Hit the slopes in the renowned ski resort town of Aspen.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg25,
  //   "featured": true
  // },
  // {
  //   "id": "26",
  //   "title": "Bora Bora Overwater Bungalow",
  //   "city": "Bora Bora",
  //   "distance": 0,
  //   "price": 2499,
  //   "maxGroupSize": 4,
  //   "desc": "Relax in luxurious overwater bungalows in the crystal-clear waters of Bora Bora.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg26,
  //   "featured": true
  // },
  // {
  //   "id": "27",
  //   "title": "Athens Historical Tour, Greece",
  //   "city": "Athens",
  //   "distance": 0,
  //   "price": 149,
  //   "maxGroupSize": 20,
  //   "desc": "Discover the rich history of Athens by visiting its ancient landmarks.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg27,
  //   "featured": true
  // },
  // {
  //   "id": "28",
  //   "title": "Hawaiian Luau Experience",
  //   "city": "Honolulu",
  //   "distance": 0,
  //   "price": 199,
  //   "maxGroupSize": 15,
  //   "desc": "Enjoy a traditional Hawaiian luau with cultural performances and delicious cuisine.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg28,
  //   "featured": true
  // },
  // {
  //   "id": "29",
  //   "title": "Venetian Gondola Ride",
  //   "city": "Venice",
  //   "distance": 0,
  //   "price": 99,
  //   "maxGroupSize": 4,
  //   "desc": "Experience a romantic gondola ride through the enchanting canals of Venice.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg29,
  //   "featured": true
  // },
  // {
  //   "id": "30",
  //   "title": "Machu Picchu Expedition, Peru",
  //   "city": "Aguas Calientes",
  //   "distance": 5,
  //   "price": 699,
  //   "maxGroupSize": 10,
  //   "desc": "Embark on an adventure to explore the ancient ruins of Machu Picchu.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg30,
  //   "featured": true
  // },
  // {
  //   "id": "31",
  //   "title": "Safari in South Africa",
  //   "city": "Johannesburg",
  //   "distance": 100,
  //   "price": 1299,
  //   "maxGroupSize": 12,
  //   "desc": "Encounter the 'Big Five' on an exciting safari adventure in South Africa.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg31,
  //   "featured": true
  // },
  // {
  //   "id": "32",
  //   "title": "New York City Tour",
  //   "city": "New York",
  //   "distance": 0,
  //   "price": 299,
  //   "maxGroupSize": 20,
  //   "desc": "Explore the vibrant city of New York, visiting its famous landmarks.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg32,
  //   "featured": true
  // },
  // {
  //   "id": "33",
  //   "title": "Dubai Desert Safari",
  //   "city": "Dubai",
  //   "distance": 50,
  //   "price": 149,
  //   "maxGroupSize": 10,
  //   "desc": "Experience the thrill of a desert safari in the Dubai desert.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg33,
  //   "featured": true
  // },
  // {
  //   "id": "34",
  //   "title": "Venice Carnival Celebration",
  //   "city": "Venice",
  //   "distance": 0,
  //   "price": 399,
  //   "maxGroupSize": 8,
  //   "desc": "Join the extravagant Venice Carnival and wear beautiful masks and costumes.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg34,
  //   "featured": true
  // },
  // {
  //   "id": "35",
  //   "title": "Santorini Wine Tasting",
  //   "city": "Santorini",
  //   "distance": 5,
  //   "price": 79,
  //   "maxGroupSize": 10,
  //   "desc": "Enjoy a wine tasting experience in the picturesque vineyards of Santorini.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg35,
  //   "featured": true
  // },
  // {
  //   "id": "36",
  //   "title": "Grand Canyon Adventure",
  //   "city": "Grand Canyon",
  //   "distance": 50,
  //   "price": 499,
  //   "maxGroupSize": 12,
  //   "desc": "Explore the breathtaking landscapes of the Grand Canyon on a thrilling adventure.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg36,
  //   "featured": true
  // },
  // {
  //   "id": "37",
  //   "title": "Dublin Pub Crawl, Ireland",
  //   "city": "Dublin",
  //   "distance": 0,
  //   "price": 49,
  //   "maxGroupSize": 15,
  //   "desc": "Experience the lively atmosphere of Dublin's pubs on a fun pub crawl.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg37,
  //   "featured": true
  // },
  // {
  //   "id": "38",
  //   "title": "Hiking in the Swiss Alps",
  //   "city": "Zermatt",
  //   "distance": 10,
  //   "price": 349,
  //   "maxGroupSize": 8,
  //   "desc": "Embark on a breathtaking hike in the stunning Swiss Alps.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg38,
  //   "featured": true
  // },
  // {
  //   "id": "39",
  //   "title": "Victoria Falls Tour, Zambia",
  //   "city": "Livingstone",
  //   "distance": 5,
  //   "price": 299,
  //   "maxGroupSize": 10,
  //   "desc": "Witness the awe-inspiring Victoria Falls and its natural beauty.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg39,
  //   "featured": true
  // },
  // {
  //   "id": "40",
  //   "title": "Havana Vintage Car Tour, Cuba",
  //   "city": "Havana",
  //   "distance": 0,
  //   "price": 69,
  //   "maxGroupSize": 6,
  //   "desc": "Take a vintage car tour through the historic streets of Havana.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg40,
  //   "featured": true
  // },
  // {
  //   "id": "41",
  //   "title": "Ayers Rock Adventure, Australia",
  //   "city": "Yulara",
  //   "distance": 10,
  //   "price": 199,
  //   "maxGroupSize": 12,
  //   "desc": "Explore the iconic Ayers Rock and its surrounding landscapes.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg41,
  //   "featured": true
  // },
  // {
  //   "id": "42",
  //   "title": "Paris Fashion Tour, France",
  //   "city": "Paris",
  //   "distance": 0,
  //   "price": 149,
  //   "maxGroupSize": 8,
  //   "desc": "Discover the world of Parisian fashion and luxury in the fashion capital.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg42,
  //   "featured": true
  // },
  // {
  //   "id": "43",
  //   "title": "Bali Yoga Retreat, Indonesia",
  //   "city": "Ubud",
  //   "distance": 5,
  //   "price": 399,
  //   "maxGroupSize": 15,
  //   "desc": "Rejuvenate your body and mind on a yoga retreat in Bali's serene environment.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg43,
  //   "featured": true
  // },
  // {
  //   "id": "44",
  //   "title": "Safari in Kenya",
  //   "city": "Nairobi",
  //   "distance": 100,
  //   "price": 1199,
  //   "maxGroupSize": 12,
  //   "desc": "Witness the diverse wildlife of the African savannah on a Kenyan safari.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg44,
  //   "featured": true
  // },
  // {
  //   "id": "45",
  //   "title": "New Zealand Road Trip",
  //   "city": "Auckland",
  //   "distance": 50,
  //   "price": 899,
  //   "maxGroupSize": 10,
  //   "desc": "Embark on an adventurous road trip through New Zealand's stunning landscapes.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg45,
  //   "featured": true
  // },
  // {
  //   "id": "46",
  //   "title": "Amalfi Coast Exploration, Italy",
  //   "city": "Amalfi",
  //   "distance": 0,
  //   "price": 499,
  //   "maxGroupSize": 10,
  //   "desc": "Discover the breathtaking beauty of the Amalfi Coast and its charming villages.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg46,
  //   "featured": true
  // },
  // {
  //   "id": "47",
  //   "title": "Cape Town Winery Tour, South Africa",
  //   "city": "Cape Town",
  //   "distance": 10,
  //   "price": 129,
  //   "maxGroupSize": 20,
  //   "desc": "Indulge in wine tasting at picturesque wineries in the Cape Town region.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg4,
  //   "featured": true
  // },
  // {
  //   "id": "48",
  //   "title": "Prague Castle Tour, Czech Republic",
  //   "city": "Prague",
  //   "distance": 0,
  //   "price": 69,
  //   "maxGroupSize": 15,
  //   "desc": "Visit the historic Prague Castle and explore its stunning architecture.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg48,
  //   "featured": true
  // },
  // {
  //   "id": "49",
  //   "title": "Mystical Machu Picchu, Peru",
  //   "city": "Aguas Calientes",
  //   "distance": 5,
  //   "price": 299,
  //   "maxGroupSize": 10,
  //   "desc": "Embark on a mystical journey to the ancient ruins of Machu Picchu.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg49,
  //   "featured": true
  // },
  // {
  //   "id": "50",
  //   "title": "Skiing in the Swiss Alps",
  //   "city": "Zermatt",
  //   "distance": 10,
  //   "price": 399,
  //   "maxGroupSize": 8,
  //   "desc": "Hit the slopes in the stunning Swiss Alps and enjoy winter sports.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg50,
  //   "featured": true
  // },
  // {
  //   "id": "51",
  //   "title": "Dubrovnik Old Town Tour, Croatia",
  //   "city": "Dubrovnik",
  //   "distance": 0,
  //   "price": 149,
  //   "maxGroupSize": 12,
  //   "desc": "Explore the historic and picturesque old town of Dubrovnik, Croatia.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg51,
  //   "featured": true
  // },
  // {
  //   "id": "52",
  //   "title": "Galápagos Islands Expedition, Ecuador",
  //   "city": "Baltra",
  //   "distance": 5,
  //   "price": 1999,
  //   "maxGroupSize": 10,
  //   "desc": "Discover the unique wildlife and natural wonders of the Galápagos Islands.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg52,
  //   "featured": true
  // },
  // {
  //   "id": "53",
  //   "title": "Tokyo Sushi Culinary Tour, Japan",
  //   "city": "Tokyo",
  //   "distance": 0,
  //   "price": 99,
  //   "maxGroupSize": 6,
  //   "desc": "Experience a culinary tour exploring the world of sushi in Tokyo.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg53,
  //   "featured": true
  // },
  // {
  //   "id": "54",
  //   "title": "Norwegian Fjords Cruise",
  //   "city": "Bergen",
  //   "distance": 0,
  //   "price": 1299,
  //   "maxGroupSize": 12,
  //   "desc": "Cruise through the stunning Norwegian fjords and enjoy the scenic beauty.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg54,
  //   "featured": true
  // },
  // {
  //   "id": "55",
  //   "title": "Great Barrier Reef Dive, Australia",
  //   "city": "Cairns",
  //   "distance": 5,
  //   "price": 599,
  //   "maxGroupSize": 8,
  //   "desc": "Dive into the world's largest coral reef system, the Great Barrier Reef.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg55,
  //   "featured": true
  // },
  // {
  //   "id": "56",
  //   "title": "Venice Murano Glass Tour, Italy",
  //   "city": "Venice",
  //   "distance": 0,
  //   "price": 89,
  //   "maxGroupSize": 10,
  //   "desc": "Explore the art of Murano glassmaking in the enchanting city of Venice.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg56,
  //   "featured": true
  // },
  // {
  //   "id": "57",
  //   "title": "Barcelona Tapas Tasting, Spain",
  //   "city": "Barcelona",
  //   "distance": 0,
  //   "price": 59,
  //   "maxGroupSize": 15,
  //   "desc": "Indulge in the flavors of traditional Spanish tapas in Barcelona.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg57,
  //   "featured": true
  // },
  // {
  //   "id": "58",
  //   "title": "Angkor Wat Discovery, Cambodia",
  //   "city": "Siem Reap",
  //   "distance": 5,
  //   "price": 249,
  //   "maxGroupSize": 12,
  //   "desc": "Explore the ancient temples and history of Angkor Wat in Cambodia.",
  //   "reviews": [],
  //   "avgRating": 4.5,
  //   "photo": tourImg58,
  //   "featured": true
  // }  
];

export default tours;
