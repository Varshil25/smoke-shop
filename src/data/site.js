/* ==========================================================================
   Tacony Smoke — site content
   Everything a store owner normally changes lives in this one file.
   All values below are SAMPLE content. Replace them before going live.
   ========================================================================== */

/* Store hours use a 24-hour clock: [open, close]. 24 = midnight.
   Days: 0 = Sunday, 1 = Monday ... 6 = Saturday.
   These numbers drive both the printed hours and the "Open now" status. */
const DEFAULT_HOURS = {
  0: [10, 22],
  1: [9, 23], 2: [9, 23], 3: [9, 23], 4: [9, 23],
  5: [9, 24], 6: [9, 24],
};

export const site = {
  name: "Tacony Smoke",
  tagline: "A neighborhood smoke shop in Tacony, Northeast Philadelphia.",
  email: "hello@taconysmoke.com",
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Google reviews", href: "#" },
  ],
  openedYears: { first: "20XX", second: "20XX" },

  /* Form endpoints. Leave empty until you connect a service (see README).
     Example: "https://formspree.io/f/abcdwxyz" */
  forms: {
    contactEndpoint: "",
    textClubEndpoint: "",
  },
};

export const stores = [
  {
    id: "torresdale",
    name: "Torresdale Ave",
    street: "1234 Torresdale Ave",
    city: "Philadelphia, PA 19135",
    phone: "(215) 555-0134",
    tel: "+12155550134",
    hours: DEFAULT_HOURS,
    photo: null, // e.g. "/images/torresdale-storefront.jpg"
    photoLabel: "Photo: Torresdale Ave storefront",
  },
  {
    id: "frankford",
    name: "Frankford Ave",
    street: "5678 Frankford Ave",
    city: "Philadelphia, PA 19135",
    phone: "(215) 555-0178",
    tel: "+12155550178",
    hours: DEFAULT_HOURS,
    photo: null,
    photoLabel: "Photo: Frankford Ave storefront",
  },
];

/* Product categories. `group` is the filter chip each one belongs to on the Shop page. */
export const categories = [
  { id: "disposable-vapes", group: "vapes", name: "Disposable vapes",
    short: "Popular brands and flavors, restocked every week.",
    long: "Single-use vapes in the flavors people ask for most. Nicotine strength is printed on every box.",
    items: "Popular brands, zero-nicotine options, new flavors every week",
    image: null, imageLabel: "Photo: disposables wall" },
  { id: "vape-devices", group: "vapes", name: "Vape devices & pods",
    short: "Pod systems, mods, coils and replacement pods.",
    long: "Refillable pod systems and mods, plus the coils and pods that fit them.",
    items: "Pod kits, box mods, coils, replacement pods, tanks",
    image: null, imageLabel: "Photo: device case" },
  { id: "e-liquids", group: "eliquids", name: "E-liquids",
    short: "Freebase and salt nic in the strengths we stock.",
    long: "Freebase and salt nic bottles. Ask to see the strength chart before you buy.",
    items: "Fruit, menthol, tobacco and dessert flavors in 30 ml and 60 ml",
    image: null, imageLabel: "Photo: e-liquid shelf" },
  { id: "glass", group: "glass", name: "Glass",
    short: "Hand pipes, water pipes, rigs and bubblers.",
    long: "Glass from everyday hand pipes to statement pieces.",
    items: "Hand pipes, water pipes, bubblers, rigs, ash catchers",
    image: null, imageLabel: "Photo: glass display" },
  { id: "hookah", group: "hookah", name: "Hookah & shisha",
    short: "Hookahs, coals, hoses and shisha tobacco.",
    long: "Everything for a hookah session, from the base to the coals.",
    items: "Hookahs, bowls, hoses, coals, shisha tobacco",
    image: null, imageLabel: "Photo: hookah shelf" },
  { id: "cigars", group: "cigars", name: "Premium cigars",
    short: "Singles and boxes, kept in our humidor.",
    long: "Singles and boxes, stored in our humidor at the right humidity.",
    items: "Singles, boxes, cutters, travel humidors, cigar lighters",
    image: null, imageLabel: "Photo: humidor" },
  { id: "papers", group: "papers", name: "Papers & wraps",
    short: "Rolling papers, cones, wraps and trays.",
    long: "The papers and wraps people come back for.",
    items: "Rolling papers, cones, wraps, tips, rolling trays",
    image: null, imageLabel: "Photo: papers rack" },
  { id: "accessories", group: "accessories", name: "Accessories",
    short: "Lighters, torches, grinders, batteries and cleaning gear.",
    long: "The small things you run out of.",
    items: "Lighters, torches, grinders, batteries, chargers, cleaning supplies",
    image: null, imageLabel: "Photo: counter display" },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "vapes", label: "Vapes" },
  { id: "eliquids", label: "E-liquids" },
  { id: "glass", label: "Glass" },
  { id: "hookah", label: "Hookah" },
  { id: "cigars", label: "Cigars" },
  { id: "papers", label: "Papers" },
  { id: "accessories", label: "Accessories" },
];

/* Brands shown on the Shop page. Leave empty to show placeholder boxes.
   Example: { name: "Brand name", logo: "/images/brands/brand.png" } */
export const brands = [];

/* Check Pennsylvania and Philadelphia rules on tobacco and vape promotions before publishing deals. */
export const deals = [
  { tag: "This week", title: "20% off all hand pipes", details: "Every glass hand pipe on the wall, any size or color.", fine: "In store only. Ends Sunday. While supplies last." },
  { tag: "This week", title: "Buy 2 e-liquids, get the 3rd half off", details: "Mix and match any 30 ml or 60 ml bottle.", fine: "Lowest-priced bottle is discounted. In store only." },
  { tag: "Every Tuesday", title: "Double points", details: "Earn 2 points for every $1 you spend, all day.", fine: "Rewards members only." },
  { tag: "This week", title: "Free lighter with any hookah", details: "Pick any refillable lighter from the counter.", fine: "One per hookah. While supplies last." },
  { tag: "Weekends", title: "10% off cigar boxes", details: "Any full box from the humidor, Friday through Sunday.", fine: "Excludes limited releases." },
  { tag: "Members", title: "$5 off at 100 points", details: "Your points turn into money off at the register.", fine: "Points have no cash value." },
];

export const rewardSteps = [
  "Give your phone number at the register",
  "Earn 1 point for every $1 you spend",
  "Take $5 off when you reach 100 points",
];

export const whyPoints = [
  { title: "Prices you can check", body: "Every shelf has a price tag. No surprise markups at the register." },
  { title: "Real products only", body: "We buy from authorized distributors, so what you see is the real thing." },
  { title: "Staff who know the gear", body: "Ask which coil fits, how to clean your glass or which cigar to start with." },
  { title: "7-day device exchange", body: "If a device fails within 7 days, bring it back with your receipt and we swap it." },
];

export const visitPoints = [
  { title: "Bring your ID", body: "We check ID for every purchase. A driver’s license, state ID or passport works. No ID, no sale." },
  { title: "Parking", body: "Street parking on both blocks. The Frankford Ave store also has a few spots out back." },
  { title: "Paying", body: "Cash, debit and all major credit cards. Rewards points work at both stores." },
  { title: "Holiday hours", body: "We post holiday hours on Google and Instagram the week before." },
];

export const values = [
  { title: "We check ID every time", body: "Selling to anyone under 21 is against the law, and it's not who we are. We card everyone who looks under 40." },
  { title: "We keep it honest", body: "If a cheaper option works just as well, we'll tell you. We'd rather you come back than overspend once." },
  { title: "We hire from the neighborhood", body: "Most of our staff live a few blocks from the store, so you will see familiar faces at the counter." },
];

export const rewardsFaq = [
  { q: "Do my points expire?", a: "Points stay on your account as long as you make a purchase at least once every 12 months." },
  { q: "Can I use points at both stores?", a: "Yes. Your account works at Torresdale Ave and Frankford Ave." },
  { q: "Can I use points on a deal?", a: "Yes. You can use points on top of any deal unless the deal says otherwise." },
  { q: "How do I check my balance?", a: "Ask at the register, or look at the bottom of your receipt." },
];

export const contactFaq = [
  { q: "Do you check ID?", a: "Yes, for every purchase. You must be 21 or older with a valid government-issued photo ID." },
  { q: "Do you sell online?", a: "Not right now. Everything is sold in store so we can check ID in person." },
  { q: "Can I return a device?", a: "Devices that fail within 7 days can be exchanged with your receipt. Opened e-liquids, disposables and glass can’t be returned." },
  { q: "What payment do you take?", a: "Cash, debit and all major credit cards." },
  { q: "Can you hold an item for me?", a: "Call the store and we'll hold it at the counter until closing that day." },
];

export const nav = [
  { label: "Shop", to: "/shop" },
  { label: "Locations", to: "/locations" },
  { label: "Deals & rewards", to: "/deals" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
