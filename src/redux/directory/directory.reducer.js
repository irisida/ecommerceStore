const INITIAL_STATE = {
  sections: [
    {
      title: 'accessories',
      imageUrl: 'https://s3-eu-west-1.amazonaws.com/ss15/news/pgch01.jpeg',
      id: 1,
      linkUrl: 'shop/accessories',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://www.prettygreen.com/media/page/khaki-m65-prettygreen.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'footwear',
      imageUrl:
        'https://scontent.fman2-2.fna.fbcdn.net/v/t1.0-9/49837081_10156052934937644_8550911094674161664_o.jpg?_nc_cat=110&_nc_oc=AQm5kbAp_RUjyxZVb6HAe-l15vAe0GHmJDi5zXeIIummR5_uCMSWWc-0HgAm94tZ97w&_nc_ht=scontent.fman2-2.fna&oh=3de56a8a138be8c2264d47e93b6ae60a&oe=5E106E4C',
      id: 3,
      linkUrl: 'shop/footwear',
    },
    {
      title: 'tshirts',
      imageUrl:
        'https://images.atomretro.com/products/1400/pretty-green-beatles-get-back-tee-1-.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/tshirts',
    },
    {
      title: 'specials',
      imageUrl:
        'https://www.prettygreen.com/media/page/black-m65-prettygreen.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/specials',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
