export interface NavItem {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface NavMenu {
  title: string;
  items: NavItem[];
}

export const TEMPLE_INFO = {
  name: "Shri Omkareshwar Jyotirlinga",
  trustName: "Shri Omkareshwar Mandir Trust",
  helpline: "8989998686",
  email: "info@shriomkareshwar.org",
  address: "Mandhata Island, Omkareshwar, District Khandwa, Madhya Pradesh - 450535",
  youtubeLiveChannel: "UCsIZ3yYwCW4316fPX3V-4lg",
  liveStreamEmbed: "https://www.youtube.com/embed/live_stream?channel=UCsIZ3yYwCW4316fPX3V-4lg&autoplay=1",
};

export const NAVIGATION_MENUS: NavMenu[] = [
  {
    title: "Booking",
    items: [
      { label: "Shighra Darshan", href: "/darshan/vishesh-darshan" },
      { label: "Prasadalaya Coupon", href: "/booking/prasadalaya" },
      { label: "Vishramalaya", href: "/booking/vishramalaya" },
      { label: "Mahaprasad", href: "/prasad/laddu-mahaprasad" },
      { label: "Heritage Walk", href: "/services/heritage-walk", isNew: true },
      { label: "Track Order", href: "/prasad/track-order" },
      { label: "Find Booking", href: "/booking/find-booking" },
      { label: "Ticket Reprint", href: "/booking/ticket-reprint" },
      { label: "Ticket Availability", href: "/booking/availability" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Abhishek Puja", href: "/services/abhishek-puja" },
      { label: "Partheshwar", href: "/services/partheshwar-puja" },
      { label: "Navgrah Shanti", href: "/services/navgrah-shanti" },
      { label: "Kalsarp Dosh", href: "/services/kalsarp-dosh" },
      { label: "Narmada Pujan", href: "/services/narmada-pujan" },
      { label: "Maha Mrityunjaya", href: "/services/maha-mrityunjaya" },
      { label: "Somwar Sawari", href: "/services/somwar-sawari" },
      { label: "E-Aradhana", href: "/services/e-aradhana" },
    ],
  },
  {
    title: "Donation",
    items: [
      { label: "Donations", href: "/donation" },
      { label: "Shringar", href: "/donation/shringar" },
      { label: "Naivedya", href: "/donation/naivedya" },
      { label: "Ann Kshetra", href: "/donation/ann-kshetra" },
      { label: "Khichdi Sewa", href: "/donation/khichdi" },
      { label: "Shayan Shringar", href: "/donation/shayan-daan" },
      { label: "Nanda Deepak", href: "/donation/nanda-deepak" },
      { label: "Room Donation", href: "/donation/room-construction" },
      { label: "Claim 80G Receipt", href: "/donation/claim-80g" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "Main Temple", href: "/about/main-temple" },
      { label: "Festivals", href: "/about/festivals" },
      { label: "Town", href: "/about/town-info" },
      { label: "Parikrama", href: "/about/parikrama" },
      { label: "Narmada", href: "/about/narmada" },
      { label: "Other Temples", href: "/about/other-temples" },
      { label: "Bridges", href: "/about/bridges" },
      { label: "Dam Project", href: "/about/dam-project" },
      { label: "Ghats", href: "/about/ghats" },
      { label: "Nearby Places", href: "/about/nearby-places" },
    ],
  },
  {
    title: "Admin",
    items: [
      { label: "Administration", href: "/admin-info/administration" },
      { label: "Trust", href: "/admin-info/trustees" },
      { label: "Proposed Work", href: "/admin-info/proposed-work" },
      { label: "Rules", href: "/admin-info/rules" },
      { label: "Parva Panchang", href: "/admin-info/parva-panchang" },
      { label: "Time Table", href: "/admin-info/schedules" },
      { label: "Activities", href: "/admin-info/activities" },
    ],
  },
  {
    title: "Facility",
    items: [
      { label: "Accomodation", href: "/facility/accommodation" },
      { label: "Medical", href: "/facility/medical" },
      { label: "Parking", href: "/facility/parking" },
      { label: "Helicopter Ride", href: "/facility/helicopter" },
      { label: "Vishramalaya", href: "/booking/vishramalaya" },
      { label: "Prasadalaya", href: "/booking/prasadalaya" },
      { label: "Wheel Chair", href: "/facility/wheelchair" },
      { label: "Wristband Points", href: "/facility/wristband-points" },
      { label: "Dining", href: "/facility/dining" },
    ],
  },
  {
    title: "Media",
    items: [
      { label: "News", href: "/media/news" },
      { label: "Daily Darshan", href: "/darshan/daily-darshan" },
      { label: "Live Darshan", href: "/darshan/live" },
      { label: "Images", href: "/media/images" },
      { label: "Video", href: "/media/videos" },
      { label: "Downloads", href: "/media/downloads" },
      { label: "Om Sandesh", href: "/media/om-sandesh" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Feedback", href: "/feedback" },
      { label: "How To Reach", href: "/how-to-reach" },
      { label: "Helpline", href: "/helpline" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Shipping Policy", href: "/policies/shipping" },
  { label: "Copyright Policy", href: "/policies/copyright" },
  { label: "Refund Policy", href: "/policies/refund" },
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Disclaimer", href: "/policies/disclaimer" },
  { label: "Child Safety Policy", href: "/policies/child-safety" },
  { label: "FAQ", href: "/faq" },
  { label: "Rules", href: "/admin-info/rules" },
  { label: "News", href: "/media/news" },
  { label: "Time Table", href: "/admin-info/schedules" },
  { label: "Reference", href: "/policies/reference" },
  { label: "Helpline", href: "/helpline" },
];

export const DARSHAN_SLOTS = [
  { id: "slot-1", name: "7:00 AM to 9:00 AM", startTime: "07:00", endTime: "09:00", quota: 500 },
  { id: "slot-2", name: "10:00 AM to 12:00 PM", startTime: "10:00", endTime: "12:00", quota: 500 },
  { id: "slot-3", name: "2:00 PM to 4:00 PM", startTime: "14:00", endTime: "16:00", quota: 500 },
  { id: "slot-4", name: "6:00 PM to 8:00 PM", startTime: "18:00", endTime: "20:00", quota: 500 },
];
