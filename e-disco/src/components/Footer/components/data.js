let data = {
  cart: [],
  wishlist: [],
  vat: 10, //vat in percentage
  cartTotal: 0,
  orderSuccess: false,
  promoCode: [
    {
      code: "TENPERCENT",
      percentage: 10,
    },
    {
      code: "FIVEPERCENT",
      percentage: 5,
    },
  ],
  usedPromoCode: null,
  deliveryOptions: [
    {
      id: 1,
      name: "standard",
      duration: "24 - 72 hours",
      cost: 10,
    },
    {
      id: 2,
      name: "fastest",
      duration: "1 - 24 hours",
      cost: 20,
    },
  ],
  productMaxShowModal: false,
  modalMessage: null,
  showSideNavigation: false,
  // used currency should load with the default currency name and rate
  //usedCurrency: { KES: 1, symbol: "USD " },
  usedCurrency: { USD: 1, symbol: "USD " },
  // exchange rates can be got from any api source
  exchangeRates: {
    base: "USD",
    date: "2019-01-29",
    rates: {
      KES: 1,
      USD: 0.0099,
      GBP: 0.0075,
      EUR: 0.0087,
      TZS: 22.92,
      UGX: 36.33,
      NGN: 3.59,
      INR: 0.71,
    },
  },
  // overkill but doing it for fun
  currencySymbols: {
    KES: "Ksh ",
    USD: "$",
    GBP: "£",
    EUR: "€",
    TZS: "TSh ",
    UGX: "USh ",
    NGN: "₦",
    INR: "₹",
  },
  priceFilter: {
    min: 0,
    max: 3700,
    pricerange: 3700,
  },
  products: [
    {
      id: 1,
      name: "men's Joggers",
      slug: "Men_item5-547383",
      price: 50,
      discount_price: 80,
      category: "men",
      color: "black",
      subcategory: "",
      sale: true,
      article: "Joggers",
      quantity: 5,
      img: "Men_item5.jpg",
      options: [1, 2, 3],
      fulfilled_by_gap: true,
      shipped_from_abroad: false,
      gap_approved: true,
      vendor: {
        id: 1,
        name: "gap",
      },
      ratings: {
        star_ratings: 4.8,
        votes: 350,
      },
    },
    {
      id: 2,
      name: "women-Tshirt",
      slug: "women-Tshirt-647483",
      price: 60,
      discount_price: 80,
      category: "women",
      color: "gray",
      subcategory: "",
      sale: false,
      article: "T-shirt",
      quantity: 8,
      img: "women-Tshirt.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: true,
      gap_approved: false,
      vendor: {
        id: 2,
        name: "gap",
      },
      ratings: {
        star_ratings: 3.6,
        votes: 200,
      },
    },
    {
      id: 3,
      name: "Boys gray boxer set",
      slug: "boys-gray-boxer-set-546488",
      price: 900,
      discount_price: 1200,
      category: "kids",
      color: "blue",
      sizes: ["S", "L", "M"],
      subcategory: "boys",
      sale: true,
      article: "boxer",
      quantity: 3,
      img: "boy_boxers.jpg",
      options: [2],
      fulfilled_by_gap: false,
      shipped_from_abroad: false,
      gap_approved: true,
      vendor: {
        id: 3,
        name: "gap",
      },
      ratings: {
        star_ratings: 2.5,
        votes: 150,
      },
    },
    {
      id: 4,
      name: "Men leather belt",
      slug: "Men-leather-belt-238192",
      price: 30,
      discount_price: 45,
      category: "men",
      color: "brown",
      subcategory: "",
      sale: false,
      article: "belt",
      quantity: 10,
      img: "belt.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: true,
      gap_approved: false,
      vendor: {
        id: 4,
        name: "gap",
      },
      ratings: {
        star_ratings: 3.8,
        votes: 20,
      },
    },
    {
      id: 5,
      name: "women-Hoodie",
      slug: "women-Hoodie-987426",
      price: 1720,
      discount_price: 5160,
      category: "women",
      color: "Pink",
      sizes: ["S", "M", "L"],
      subcategory: "",
      sale: true,
      article: "Hoodie",
      quantity: 0,
      img: "vwomen-Hoodie.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: false,
      gap_approved: true,
      vendor: {
        id: 5,
        name: "gap",
      },
      ratings: {
        star_ratings: 4.0,
        votes: 130,
      },
    },
    {
      id: 6,
      name: "capped sleeves red cotton dress",
      slug: "capped-sleeves-red-cotton-dress-349824",
      price: 1100,
      discount_price: 1650,
      category: "kids",
      color: "Red",
      sizes: ["S", "M"],
      subcategory: "girls",
      sale: true,
      article: "dress",
      quantity: 2,
      img: "cotton-dress.jpg",
      options: [],
      fulfilled_by_gap: true,
      shipped_from_abroad: true,
      gap_approved: true,
      vendor: {
        id: 1,
        name: "gap",
      },
      ratings: {
        star_ratings: 2.1,
        votes: 268,
      },
    },
    {
      id: 7,
      name: "Men Shoes",
      slug: "Men_Shoes-459123",
      price: 3020,
      discount_price: 3580,
      category: "men",
      color: "black",
      sizes: ["39", "40", "42"],
      subcategory: "",
      sale: false,
      article: "shoes",
      quantity: 6,
      img: "Men_Shoes.jpg",
      options: [],
      fulfilled_by_gap: true,
      shipped_from_abroad: true,
      gap_approved: true,
      vendor: {
        id: 2,
        name: "gap",
      },
      ratings: {
        star_ratings: 4,
        votes: 250,
      },
    },
    {
      id: 8,
      name: "Boho printed floral dress",
      slug: "boho-printed-floral-dress-656623",
      price: 1999,
      discount_price: 2199,
      category: "women",
      color: "skyblue",
      sizes: ["M", "L", "XL"],
      subcategory: "",
      sale: true,
      article: "dress",
      quantity: 10,
      img: "floral-dress.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: false,
      gap_approved: false,
      vendor: {
        id: 3,
        name: "gap",
      },
      ratings: {
        star_ratings: 3.6,
        votes: 129,
      },
    },
    /*
    {
      id: 9,
      name: "Baby girl bowknot leather shoes",
      slug: "baby-girl-bowknot-leather-shoes-312947",
      price: 493,
      discount_price: 502,
      category: "kids",
      color: "Silver",
      sizes: ["S"],
      subcategory: "girls",
      sale: false,
      article: "dress",
      quantity: 9,
      img: "leather-shoes.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: true,
      gap_approved: false,
      vendor: {
        id: 4,
        name: "gap",
      },
      ratings: {
        star_ratings: 4.1,
        votes: 50,
      },
    },*/}
    {
      id: 10,
      name: "men khaki trouser - navy blue",
      slug: "men-khaki-trouser-navy-blue-537329",
      price: 1346,
      discount_price: 1347,
      category: "men",
      color: "Navy Blue",
      sizes: ["M", "L"],
      subcategory: "",
      sale: false,
      article: "shoes",
      quantity: 0,
      img: "gsoft-khaki.jpg",
      options: [],
      fulfilled_by_gap: true,
      shipped_from_abroad: true,
      gap_approved: false,
      vendor: {
        id: 5,
        name: "gap",
      },
      ratings: {
        star_ratings: 2.0,
        votes: 35,
      },
    },
    {
      id: 11,
      name: "Women printed bodycon dress",
      slug: "women-printed-bodycon-dress-439618",
      price: 1554,
      discount_price: 1640,
      category: "women",
      sizes: ["M", "L", "XL"],
      subcategory: "",
      sale: false,
      article: "dress",
      quantity: 7,
      img: "bodycon-dress.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: false,
      gap_approved: true,
      vendor: {
        id: 1,
        name: "gap",
      },
      ratings: {
        star_ratings: 3.2,
        votes: 240,
      },
    },
    {
      id: 12,
      name: "girl princess lace dress",
      slug: "girl-princess-lace-dress-123567",
      price: 1808,
      discount_price: 2350,
      category: "kids",
      color: "White",
      sizes: ["S", "M", "L"],
      subcategory: "girls",
      sale: true,
      article: "dress",
      quantity: 4,
      img: "princes-dress.jpg",
      options: [],
      fulfilled_by_gap: true,
      shipped_from_abroad: true,
      gap_approved: false,
      vendor: {
        id: 2,
        name: "gap",
      },
      ratings: {
        star_ratings: 3.6,
        votes: 70,
      },
    },
    {
      id: 13,
      name: "men's formal slim fit suit",
      slug: "gap_formal_suit-345987",
      price: 3627,
      discount_price: 6045,
      category: "men",
      color: "Dark Blue",
      sizes: ["M", "L", "XL"],
      subcategory: "",
      sale: true,
      article: "suit",
      quantity: 3,
      img: "gap_formal_suit.jpg",
      options: [],
      fulfilled_by_gap: true,
      shipped_from_abroad: false,
      gap_approved: false,
      vendor: {
        id: 3,
        name: "gap",
      },
      ratings: {
        star_ratings: 5.0,
        votes: 210,
      },
    },
    {
      id: 14,
      name: "Women's rome strappy gladiator loe flat flip",
      slug: "womens-rome-strappy-gladiator-loe-flat-flip-230978",
      price: 876,
      discount_price: 987,
      category: "women",
      sizes: ["25", "35", "40"],
      subcategory: "",
      sale: true,
      article: "sandals",
      quantity: 2,
      img: "gladiator-flat-flip.jpg",
      options: [],
      fulfilled_by_gap: true,
      shipped_from_abroad: false,
      gap_approved: true,
      vendor: {
        id: 4,
        name: "gap",
      },
      ratings: {
        star_ratings: 1.5,
        votes: 3,
      },
    },
    {
      id: 15,
      name: "navy long sleeved boys t-shirt",
      slug: "navy-long-sleeved-boys-tshirt-786534",
      price: 960,
      discount_price: 1200,
      category: "kids",
      color: "black",
      sizes: ["M", "L"],
      subcategory: "boys",
      sale: false,
      article: "dress",
      quantity: 0,
      img: "boys-t-shirt.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: true,
      gap_approved: false,
      vendor: {
        id: 5,
        name: "gap five",
      },
      ratings: {
        star_ratings: 2.9,
        votes: 65,
      },
    },
    {
      id: 16,
      name: "3 piece men's vest - white",
      slug: "3-piece-mens-vest-white-891267",
      price: 899,
      discount_price: 1800,
      category: "men",
      color: "White",
      sizes: ["M", "L"],
      subcategory: "",
      sale: true,
      article: "suit",
      quantity: 8,
      img: "vest.jpg",
      options: [],
      fulfilled_by_gap: true,
      shipped_from_abroad: true,
      gap_approved: false,
      vendor: {
        id: 1,
        name: "gap",
      },
      ratings: {
        star_ratings: 3.0,
        votes: 289,
      },
    },
    {
      id: 17,
      name: "checkers faix leather wrist watch",
      slug: "checkers-faix-leather-wrist-watch-120934",
      price: 341,
      discount_price: 443,
      category: "women",
      color: "Gold",
      subcategory: "",
      sale: true,
      article: "watch",
      quantity: 4,
      img: "quartz-wrist-watch.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: true,
      gap_approved: true,
      vendor: {
        id: 2,
        name: "gap",
      },
      ratings: {
        star_ratings: 4.0,
        votes: 200,
      },
    },
    {
      id: 18,
      name: "boys black crew neck t-shirt",
      slug: "boys-black-crew-neck-tshirt-784301",
      price: 890,
      discount_price: 1200,
      category: "kids",
      color: "Black",
      sizes: ["S", "M"],
      subcategory: "boys",
      sale: true,
      article: "dress",
      quantity: 7,
      img: "crew-neck-tshirt.jpg",
      options: [],
      fulfilled_by_gap: false,
      shipped_from_abroad: false,
      gap_approved: false,
      vendor: {
        id: 3,
        name: "gap three",
      },
      ratings: {
        star_ratings: 4.7,
        votes: 130,
      },
    },
  ],
};

export default data;
