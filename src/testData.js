const testData = [
  {
    key: 1,
    src:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: "Pepe's Mexican Restaurant Newmarket",
    address: '2 Mason St, North Lakes QLD 4509',
    score: 4.9,
    scoreAmount: 1000,
    time: '20-35',
    deliveryFee: 9.5,
    distance: 2.7,
    category: 'Mexican',
    menu: [
      {
        title: 'houseSpecials',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
      {
        title: 'mainDishes',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
    ],
  },
  {
    key: 2,
    src:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: "Pepe's Mexican Restaurant Newmarket",
    address: '2 Mason St, North Lakes QLD 4509',
    score: 4.9,
    scoreAmount: 1000,
    time: '20-35',
    deliveryFee: 9.5,
    distance: 2.7,
    category: 'Mexican',
    menu: [
      {
        title: 'houseSpecials',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
      {
        title: 'mainDishes',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
    ],
  },
  {
    key: 3,
    src:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: "Pepe's Mexican Restaurant Newmarket",
    address: '2 Mason St, North Lakes QLD 4509',
    score: 4.9,
    scoreAmount: 1000,
    time: '20-35',
    deliveryFee: 9.5,
    distance: 2.7,
    category: 'Mexican',
    menu: [
      {
        title: 'houseSpecials',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
      {
        title: 'mainDishes',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
    ],
  },
  {
    key: 4,
    src:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: "Pepe's Mexican Restaurant Newmarket",
    address: '2 Mason St, North Lakes QLD 4509',
    score: 4.9,
    scoreAmount: 1000,
    time: '20-35',
    deliveryFee: 9.5,
    distance: 2.7,
    category: 'Mexican',
    menu: [
      {
        title: 'houseSpecials',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
      {
        title: 'mainDishes',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
    ],
  },
  {
    key: 5,
    src:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: "Pepe's Mexican Restaurant Newmarket",
    address: '2 Mason St, North Lakes QLD 4509',
    score: 4.9,
    scoreAmount: 1000,
    time: '20-35',
    deliveryFee: 9.5,
    distance: 2.7,
    category: 'Mexican',
    menu: [
      {
        title: 'houseSpecials',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
      {
        title: 'mainDishes',
        data: [
          {
            title: 'Shredded Duck Noodles',
            description: 'Shredded roast Duck with Thin Eggs',
            price: '23.00',
            photo:
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          },
          {
            title: 'Mexican Burger(GFO)',
            description: 'A Sweet and Smoky Mongolian Sauce',
            price: '15.90',
            photo:
              'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          },
          {
            title: 'Roasted Chicken',
            description: 'Slow-roast Chicken with a Crispy Cracker',
            price: '30.00',
            photo:
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ],
      },
    ],
  },
];

export default testData;
