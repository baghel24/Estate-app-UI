
import { instagram, facebook, linkedin, twitter, bookicon,bulbicon,
  chessicon,
  communityicon,
  processicon,
  dooricon,
  gamesicon, 
  securityicon,
  supporticon,
  locationicon,
  measurementicon,
} from "../assets";

export const navigtion = [
    {
        id: "home",
        title: "Home",
        url: "/"
    },
    {
        id: "services",
        title: "Service",
        url: "/services"
    },
    {
        id: "agents",
        title: "Agents",
        url: "agents"
    },
    {
        id: "contact",
        title: "Contact",
        url: "/contact"
    }
    
];

export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];

  export const services = [
    {
      id:"Expert guidance",
      icon: bookicon,
      description:"Benefit from our team's seasoned expertise for a smooth buying experience"
    },
    {
      id:"Personalized Services",
      icon: communityicon,
      description:"Our services adapt to your unique needs, making your journey stress-free"
    },
    {
      id:"Transparent Process",
      icon: processicon,
      description:"Stay informed with our clear and honest approach to buying your home"
    },
    {
      id:"Extra Security",
      icon: securityicon,
      description:"We provide good security when you purchase our home connect with us."
    },
    {
      id:"Good Location",
      icon: locationicon,
      description:"Located in very good areas surrounded by education centers , office centers and all requiered facilities."
    },
    {
      id:"Exceptional support",
      icon: supporticon,
      description:"Providing peace of mind with our responsive and attentive customer service"
    }
  ]

  export const houseCardDetails =[
    {
      id:"1",
      houseName:"Great 8 BHK Villa",
      houseImage:"src/assets/2.png",
      locationIcon:locationicon,
      location:"Mumbai",
      roomsIcon:dooricon,
      rooms:"7",
      sizeIcon:measurementicon,
      Size: "5,000",
      price:"3,0000"
    },
    {
      id:"2",
      houseName:"Great 6 BHK Villa",
      houseImage:"src/assets/4.png",
      locationIcon:locationicon,
      location:"Goa",
      roomsIcon:dooricon,
      rooms:"5",
      sizeIcon:measurementicon,
      Size: "1,000",
      price:"1,2000"
    },
    {
      id:"3",
      houseName:"Great 6 BHK Villa",
      houseImage:"src/assets/6.png",
      locationIcon:locationicon,
      location:"Delhi",
      roomsIcon:dooricon,
      rooms:"5",
      sizeIcon:measurementicon,
      Size: "3,000",
      price:"2,0000"
    },
    {
      id:"4",
      houseName:"Great 4 BHK Villa",
      houseImage:"src/assets/5.png",
      locationIcon:locationicon,
      location:"Noida",
      roomsIcon:dooricon,
      rooms:"3",
      sizeIcon:measurementicon,
      Size: "1,000",
      price:"1,5000"
    },
    // {
    //   id:"5",
    //   houseName:"Great 4 BHK Villa",
    //   houseImage:"src/assets/5.png",
    //   locationIcon:"src/assets/icons8-location-64 (1).png",
    //   location:"Noida",
    //   roomsIcon:"src/assets/icons8-door-50.png",
    //   rooms:"3",
    //   sizeIcon:"src/assets/icons8-measurement-32.png",
    //   Size: "1,000",
    //   priceIcon:"src/assets/icons8-dollar-24.png",
    //   price:"1,5000"
    // },
    // {
    //   id:"6",
    //   houseName:"Great 4 BHK Villa",
    //   houseImage:"src/assets/5.png",
    //   locationIcon:"src/assets/icons8-location-64 (1).png",
    //   location:"Noida",
    //   roomsIcon:"src/assets/icons8-door-50.png",
    //   rooms:"3",
    //   sizeIcon:"src/assets/icons8-measurement-32.png",
    //   Size: "1,000",
    //   priceIcon:"src/assets/icons8-dollar-24.png",
    //   price:"1,5000"
    // },
    
  ]

  export const cards = [
    {
      id: 1,
      image: 'src/assets/7.png',
      profile: 'src/assets/p2.png',
      name: 'Sarah Nguyen',
      location: 'San Francisco',
      rating: 4.2,
      review: 'Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.',
    },
    {
      id: 2,
      image: 'src/assets/9.png',
      profile: 'src/assets/p2.png',
      name: 'Michael Rodriguez',
      location: 'San Francisco',
      rating: 4.5,
      review: 'I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!',
    },
    {
      id: 3,
      image: 'src/assets/8.png',
      profile: 'src/assets/p1.png',
      name: 'Emily Johnson',
      location: 'Los Angeles',
      rating: 4.4,
      review: 'Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn\'t be happier with my new home!',
    },
    {
      id: 4,
      image: 'src/assets/10.png', // Add your new image source here
      profile: 'src/assets/p3.png', // Add your new profile image source here
      name: 'John Doe',
      location: 'New York',
      rating: 4.7,
      review: 'Working with Dwello was a pleasure. They helped me find the perfect apartment in New York and made the whole process seamless and enjoyable. I highly recommend their services!',
    }
    
  ]

 export const HouseRatingBar = [
  {
    id:"1",
    label: "Environment",
    rate:"8.8",
    widthPercentage:"88%"
  },
  {
    id:"2",
    label: "Neighbourhood",
    rate:"6.8",
    widthPercentage:"68%"
  },
  {
    id:"3",
    label: "Safety",
    rate:"8.0",
    widthPercentage:"80%"
  },
  {
    id:"4",
    label: "Cleanliness",
    rate:"7.8",
    widthPercentage:"78%"
  },
  {
    id:"5",
    label: "Roads",
    rate:"7.2",
    widthPercentage:"72%"
  },
  {
    id:"6",
    label: "Commuting",
    rate:"7.5",
    widthPercentage:"75%"
  },
  {
    id:"7",
    label: "Public Transport",
    rate:"7.0",
    widthPercentage:"70%"
  },
  {
    id:"8",
    label: "Markets",
    rate:"9.0",
    widthPercentage:"90%"
  },
  {
    id:"9",
    label: "Restaurants",
    rate:"9.2",
    widthPercentage:"92%"
  },
  {
    id:"10",
    label: "Hospitals",
    rate:"9.8",
    widthPercentage:"98%"
  },
  {
    id:"11",
    label: "Schools",
    rate:"8.9",
    widthPercentage:"89%"
  },
  {
    id:"12",
    label: "Parking",
    rate:"8.8",
    widthPercentage:"88%"
  },

 ]

 export const Landmark = [
  {
    id:"1",
    label: "Educational Institute",
    icon:"src/assets/icons8-school-48.png",
    l1:"Sahayadri Vidya Mandir",
    l2:"Dg Khetan International School ",
  },
  {
    id:"2",
    label: "Shopping Centre",
    icon:"src/assets/icons8-shopping-mall-66.png",
    l1:"Oberoi Mall",
    l2:"Magnet Mal  ",
  },
  {
    id:"3",
    label: "Transportation Hub",
    icon:"src/assets/icons8-transportation-60.png",
    l1:"Kandivali Railway Station",
    l2:"Nahur Railway Station ",
  },
  {
    id:"4",
    label: "Hospital",
    icon:"src/assets/icons8-hospital-48.png",
    l1:"Badwik Hospital",
    l2:" ",
  },
 ]