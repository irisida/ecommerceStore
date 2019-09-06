const SHOP_DATA = {
  accessories: {
    id: 1,
    title: 'accessories',
    routeName: 'accessories',
    items: [
      {
        id: 1,
        name: 'Reversible Paisley',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A7AMU0498A340-VINTAG-REVERSIBLE-PAISLEY-PRINT-BUCKET-HAT-01-thumbnail-1216x1216-70.jpg',
        price: 25,
      },
      {
        id: 2,
        name: 'Black Reverible Paisley',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A7AMU0556A395-BLACK-REVERSIBLE-PAISLEY-PRINT-BUCKET-HAT-01-thumbnail-540x540-70.jpg',
        price: 18,
      },
      {
        id: 3,
        name: 'Black Suede',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A7AMU0493A335-BLACK-SUEDE-HAT-01-thumbnail-1216x1216-70.jpg',
        price: 35,
      },
      {
        id: 4,
        name: 'Smiley',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/S9AMU25000102-WHITE-SMILEY-SMOKE-PRINT-BUCKET-HAT-01_new-thumbnail-1216x1216-70.jpg',
        price: 25,
      },
    ],
  },
  footwear: {
    id: 2,
    title: 'footwear',
    routeName: 'footwear',
    items: [
      {
        id: 10,
        name: 'Brown Leathers',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/F7GMU2580F055-TAN-LEATHER-DESERT-BOOT-02-thumbnail-1560x1560-70.jpg',
        price: 220,
      },
      {
        id: 11,
        name: 'Black Desert',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/FJXG2057F007-BLACK-DESERT-BOOT-011490714979-thumbnail-1560x1560-70.jpg',
        price: 280,
      },
      {
        id: 12,
        name: 'Brown Suedes',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A9GMU30000249-TAN-SUEDE-BOOT-04-thumbnail-1560x1560-70.jpg',
        price: 160,
      },
      {
        id: 13,
        name: 'Black X Veras',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A9GMU30000251-BLACK-SUEDE-SHOE-04-thumbnail-1216x1216-70.jpg',
        price: 160,
      },
    ],
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Harrington',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/C7GMU13319144-BLACK-COTTON-HARRINGTON-JACKET-01-thumbnail-1216x1216-70.jpg',
        price: 125,
      },
      {
        id: 19,
        name: 'Green Harrington',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/C7GMU13319144-KHAKI-COTTON-HARRINGTON-JACKET-01-thumbnail-1560x1560-70.jpg',
        price: 90,
      },
      {
        id: 20,
        name: 'Blue button up Mac',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/C7GMU13329146-NAVY-BUTTON-UP-MAC-01-thumbnail-1216x1216-70.jpg',
        price: 90,
      },
      {
        id: 21,
        name: 'Balck Smiley',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/S9GMU11000136-BLACK-SMILEY-COTTON-PARKA-01-thumbnail-1216x1216-70.jpg',
        price: 165,
      },
    ],
  },
  tshirts: {
    id: 4,
    title: 'tshirts',
    routeName: 'tshirts',
    items: [
      {
        id: 23,
        name: 'Colour block zip neck',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A9GMU15000032-NAVY-COLOUR-BLOCK-ZIP-NECK-T-SHIRT-01-thumbnail-1216x1216-70.jpg',
        price: 25,
      },
      {
        id: 24,
        name: 'Printed Logo',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A9GMU15000140-GREEN-PRINTED-LOGO-T-SHIRT-01-thumbnail-1216x1216-70.jpg',
        price: 20,
      },
      {
        id: 25,
        name: 'Black Paisley',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/C7GMU95729107-BLKVIN-PAISLEY-PRINT-LOGO-T-SHIRT-01-thumbnail-1216x1216-70.jpg',
        price: 80,
      },
      {
        id: 26,
        name: 'Off White and Green',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A9GMU15000143-OFFWHI-PRETTY-GREEN-PRINTED-T-SHIRT-01-thumbnail-1216x1216-70.jpg',
        price: 80,
      },
    ],
  },
  specials: {
    id: 5,
    title: 'specials',
    routeName: 'specials',
    items: [
      {
        id: 30,
        name: 'WL01 M65 dyed',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A8WMU14789764KHAKI-thumbnail-1216x1216-70.jpg',
        price: 325,
      },
      {
        id: 31,
        name: 'WL02 M65 dyed',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A8WMU14789764PURPLE-thumbnail-1560x1560-70.jpg',
        price: 300,
      },
      {
        id: 32,
        name: 'WL03 M65 dyed',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A8WMU14789764BLACK-thumbnail-1560x1560-70.jpg',
        price: 325,
      },
      {
        id: 33,
        name: 'WL04 M65 dyed',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A8WMU14789764NAVY-thumbnail-1560x1560-70.jpg',
        price: 325,
      },
      {
        id: 34,
        name: 'WL05 Black overhead',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A8WMU1480976NAVY-thumbnail-1216x1216-70.jpg',
        price: 340,
      },
      {
        id: 35,
        name: 'WL06 Green overhead',
        imageUrl:
          'https://www.prettygreen.com/media/__sized__/products/A8WMU1480976KHAKI-thumbnail-1216x1216-70.jpg',
        price: 325,
      },
    ],
  },
};

export default SHOP_DATA;
