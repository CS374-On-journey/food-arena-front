import { PlacesState, IMenu, IReview, IPlace } from './types';
export var rs = new Array();

var r1 = {
  id: 1,
  name: "Tendon Tenya",
  waiting_time: 0,
  address: {
    "longitude": 139.70619095375693,
    "latitude": 35.66948848519749,
    "readable": "Japan 〒150-0001 Tokyo, Shibuya City, Jingūmae, 4-chōme−4−３１ 原宿TKビル"
  },
  tags: ["tendon", "noodle"],
  picture_urls: [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNvTnM%2Fbtq5tcbLdXL%2F4njTzQawi6JYG8nSLQ34sk%2Fimg.png",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbYb47e%2Fbtq5x9EgERi%2F3r02pVmqDjcMOxEpgI9hVK%2Fimg.png",
    "https://mp-seoul-image-production-s3.mangoplate.com/mango_pick/umr1b0hwnhxgkt.jpg"
  ],
  rating: 4.5,
  ai_score: 4.7,
  ai_pick: 4.7 > 4.0,
  travel_time: 10,
  distance: 500,
  reviews: [
    {
      author: "Minji Lee",
      content: "I loved the atmosphere of this restaurant. Also, the food was good.",
      rating: 5.0,
      attachment_urls: []
    } as IReview,
    {
      author: "Heejun Lee",
      content: "Moderate. But very affordable.",
      rating: 4.0,
      attachment_urls: []
    } as IReview
  ],
  menus :new Array<IMenu>
    ({ 
      id: 1,
      title: "Udon",
      local_title: "Udon",
      picture_url: "https://www.justonecookbook.com/wp-content/uploads/2021/02/Beef-Udon-Niku-Udon-0050-I.jpg",
      description: "Udon is a thick noodle made from wheat flour, used in Japanese cuisine.",
      type:'',
      local_price:600,
      local_currency: '¥',
      local_quantity: 200,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    },
    { 
      id: 2,
      title: "Soba",
      local_title: "Soba",
      picture_url: "https://byfood.b-cdn.net/api/public/assets/9460/content.png.jpg",
      description: "Soba is a thin Japanese noodle made from buckwheat. The noodles are served chilled with a dipping sauce.",
      type:'',
      local_price:600,
      local_currency: '¥',
      local_quantity: 500,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    }),
  open_time: '09:00',
  close_time: '22:00',
  local_time: `${Math.round(Math.random()*23)+1}:00`,
  submenu_opened: false,
  submenu_selected: false
}
rs.push(r1)

var r2 = {
  id: 2,
  name:"Ninja Akasaka",
  waiting_time: 20,
  address: {
    "longitude":139.71206563287254,
    "latitude": 35.67276948437036, 
    "readable": "Japan 〒100-0014 Tokyo, Chiyoda City, Nagatachō, 2 Chome−14−3 赤坂東急プラザ 1階"
  },
  tags: ["ninja", "fine-dining"],
  picture_urls: [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1Jw68%2Fbtq5ugExhmk%2FT7wJK6EQTT6u0xMljfiWx0%2Fimg.png",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcxnt1E%2Fbtq5tbw86Uu%2Fk6QreVSRTiwrJOWrxzqTP0%2Fimg.png",
    "https://data.tokyogirlsupdate.com/wp/wp-content/uploads/2015/12/ninja-akasaka-07.jpg"
  ],
  rating: 4.4,
  ai_score: 4.7,
  ai_pick: 4.4 > 4.0,
  travel_time: 20,
  distance: 100,
  reviews: [
    {
      author:"Dowoon Seo",
      content:  "A Japanese restaurant that I went to with my Japanese friend's invitation. From entering the store, we offer an adventure to the ninja world. This is fun. It's worth a visit. The food served on the course is creative and tastes good.",
      rating: 5.0,
      attachment_urls: []
    } as IReview,
    {
      author: "Heejun Lee",
      content: "I liked chefs but food was so-so.",
      rating: 4.0,
      attachment_urls: []
    } as IReview
  ],
  menus :new Array<IMenu>
    ({ 
      id: 1,
      title:  "Bansenshukai Course",
      local_title:  "Bansenshukai Course",
      picture_url: "https://ninjaakasaka.com/wp-content/uploads/caviar-01.png",
      description:  "1. Japanese Sweet Monaka\n2.Ohmi Sawaihime Wagyu Beef Sashimi\n3.Chef’s Special Fish of the Season",
      type:'',
      local_price:5000,
      local_currency: '¥',
      local_quantity: 800,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    },
    { 
      id: 2,
      title:"Jyubei Course",
      local_title: "Jyubei Course",
      picture_url: "https://ninjaakasaka.com/wp-content/uploads/Pea-souffle.png",
      description: "1.Ohmi Sawaihime Wagyu Beef Sashimi\n2..Chef’s Special Fish of the Season\n3.Ohmi Sawaihime Wagyu Beef Steak",
      type:'',
      local_price:7000,
      local_currency: '¥',
      local_quantity: 800,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    }),
  open_time: '09:00',
  close_time: '22:00',
  local_time: `${Math.round(Math.random()*23)+1}:00`,
  submenu_opened: false,
  submenu_selected: false
}
rs.push(r2)

var r3 = {
  id: 3,
  name:"Nogata Hope",
  waiting_time: 0,
  address:{
    "longitude": 139.70637934978018,
    "latitude": 35.67447774044273, 
    "readable": "Japan 〒101-0021 Tokyo, Chiyoda City, Sotokanda, 1 Chome−1−9-8 木村ビル"
  },
  tags:["ramen", "noodle"],
  picture_urls: [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0QW7a%2Fbtq5uu4cxyq%2FXt6MkqXHPUo10iBuT6kFQ0%2Fimg.png",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fejpv6M%2Fbtq5ya4hj9O%2FatgD2pujLauthb1qn4CpK0%2Fimg.png",
    "https://img.japankuru.com/prg_img/img/img2016081914432134460300.jpg"
  ],
  rating: 4.0,
  ai_score: 4.5,
  ai_pick: 4.5 > 4.0,
  travel_time: 10,
  distance: 150,
  reviews: [
    {
      author:"Jun-oh Choi",
      content:  "Good. Menu comes out very fast.",
      rating: 5.0,
      attachment_urls: []
    } as IReview,
    {
      author: "Yun-jun Lee",
      content: "Ramen was too salty. But chashu was good.",
      rating: 3.0,
      attachment_urls: []
    } as IReview
  ],
  menus :new Array<IMenu>
    ({ 
      id: 7,
      title:"Donkotsu Ramen",
      local_title:"Donkotsu Ramen",
      picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/500px-Shoyu_Ramen.jpg",
      description: "Wheat noodle served with meat and flavored with pork bone.",
      type:'',
      local_price:600,
      local_currency: '¥',
      local_quantity: 300,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    },
    { 
      id: 2,
      title:"Miso Ramen",
      local_title: "Miso Ramen",
      picture_url:"https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-6eb96b6/wp-content/uploads/2019/05/Miso-Ramen-II.jpg",
      description: "Wheat noodle served with meat and flavored with pork bone and miso(soybean paste).",
      type:'',
      local_price:700,
      local_currency: '¥',
      local_quantity: 300,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    }),
  open_time: '09:00',
  close_time: '22:00',
  local_time: `${Math.round(Math.random()*23)+1}:00`,
  submenu_opened: false,
  submenu_selected: false
}
rs.push(r3)

var r4 = {
  id: 4,
  name: "Omotesando Ukaitei",
  waiting_time: 10,
  address:{
    "longitude": 139.70684575225857,
    "latitude": 35.6675619752016,
    "readable": "Japan 〒150-0001 Tokyo, Shibuya City, Jingumae, 5 Chome−10−1 表参道ジャイル 5F"
  },
  tags: ["sushi", "tetpanyaki"],
  picture_urls: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlKU-UseDWJcEZAXCkkiI9DDJ55BA5YV721u6qN6_EKhvtb98YoVh4GtfEfhX6I1GO8w&usqp=CAU",
    "https://svcstrg2.navitime.jp/imgfile/02301_1405309_07.jpg",
    "https://www.intheluggage.com/wp-content/uploads/sites/2/2018/08/sub10-1-710x475.jpg"
  ],
  rating: 4.6,
  ai_score: 4.0,
  ai_pick: 4.0 > 4.0,
  travel_time: 20,
  distance: 250,
  reviews: [
    {
      "author": "Sung-hyun Cho",
      "content": "I recommend here if you want to experience the luxurious Defanyaki in Tokyo. But with champagne and wine, you have to think more than 40,000 yen per person.",
      "rating": 5.0,
      attachment_urls: []
    } as IReview,
    {
      author: "Yun-jun Lee",
      content: "Ramen was too salty. But chashu was good.",
      rating: 3.0,
      attachment_urls: []
    } as IReview
  ],
  menus :new Array<IMenu>
    ({ 
      "id": 7,
      local_title: "Tetpanyaki",
      "title": "Tetpanyaki",
      "picture_url": "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20180203034303254_photo1_1fad36adba1d.jpg",
      "description": "Tefanyaki is a dish made by cooking various ingredients on an iron plate.",
      type:'',
      local_price:3000,
      local_currency: '¥',
      local_quantity: 500,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    },
    { 
      "id": 8,
      "title": "Sushi",
      local_title: "Sushi",
      "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg",
      "description": "Sushi is a Japanese dish made by placing fish and shellfish meat, fried tofu, eggs, and seaweed on top of rice pickled in mixed vinegar.",
      type:'',
      local_price:2000,
      local_currency: '¥',
      local_quantity: 600,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    }),
  open_time: '09:00',
  close_time: '22:00',
  local_time: `${Math.round(Math.random()*23)+1}:00`,
  submenu_opened: false,
  submenu_selected: false
}
rs.push(r4)

var r5 = {
  id: 5,
  name: "Kanetanaka",
  waiting_time: 0,
  address:{
    "longitude": 139.71063472723603,
    "latitude": 35.666052210429754,
    "readable": "3 Chome-6-1 Kitaaoyama, Minato City, Tokyo 107-0061 Japan"
  },
  tags: ["gyudong", "slow-food"],
  picture_urls: [
    "https://freight.cargo.site/t/original/i/719d1680fa5bb7ef66caa760502a4f5b2b9285e0f51e5c502d4275469d92ae66/25360701743_78900a64ae.jpg",
    "https://etcbucket.s3.amazonaws.com/media/cache/7d/e4/7de464a539ef4b5d0ccc21813c4f4931.jpg",
    "https://t1.daumcdn.net/cfile/tistory/9962B6365D4AC7080F"
  ],
  "rating": 4.9,
  "ai_score": 4.4,
  reviews: [
    {
      "author": "Sung-hyun Park",
      "content": "If you think the atmosphere is important when eating, I recommend it. It's a clean.",
      "rating": 5.0,
      attachment_urls:[]
    } as IReview,
    {
      "author": "Yoon-soo Hah",
      "content": "You can taste simple and very delicate Japanese.",
      "rating": 5.0,
      attachment_urls:[]
    } as IReview
  ],
  ai_pick: 4.0 > 4.0,
  travel_time: 20,
  distance: 250,
  menus :new Array<IMenu>
  ({ 
    "id": 9,
    "title": "Gyudong",
    "picture_url": "https://lh3.googleusercontent.com/proxy/jGnaO4THd4aQaAJeReMT3qY267WUKzpI-t3xCeD7XcFRVriigqgmv39KhCqGXaXNT2KlIDNA0aDDehuMjRUWJ3q48b1l8YCnOmf78eds1LMV-QhfLCs",
    "description": "Roast beef with seasoned rice.",
    local_title: "Gyudong",
    type:'',
    local_price:800,
    local_currency: '¥',
    local_quantity: 300,
    local_quantity_unit: 'g',
    children: [],
    local_format_quantity: '0',
    local_format_price_per_unit: '0.00',
    local_format_price: '0.0',
    isExpanded:false,
    label: null
  },
  { 
    "id": 10,
    "title": "Lunch set",
    "picture_url": "https://d2uja84sd90jmv.cloudfront.net/posts/1P0GLC31SiTkkqVpzrgiIg/s.jpg",
    "description": "Special lunch set with rice, rice, roasted fish.",
    local_title: "Lunch set",
    type:'',
    local_price:1500,
    local_currency: '¥',
    local_quantity: 600,
    local_quantity_unit: 'g',
    children: [],
    local_format_quantity: '0',
    local_format_price_per_unit: '0.00',
    local_format_price: '0.0',
    isExpanded:false,
    label: null
  }),
  open_time: '09:00',
  close_time: '22:00',
  local_time: `${Math.round(Math.random()*23)+1}:00`,
  submenu_opened: false,
  submenu_selected: false
}
rs.push(r5)

var r6 = {
  id: 6,
  name: "Menchirashi",
  waiting_time: 0,
  address:{
    "longitude": 139.70511426083374,
    "latitude": 35.66690007245724,
    "readable": "Japan 〒150-0001 Tokyo, Shibuya City, Jingumae, 6 Chome−13−7 1F"
  },
  tags: ["Sushi", "Lunchbox"],
  picture_urls: [
    "https://www.omotesandohills.com/shops_restaurants/images/yasaiya_mei_detail_1.jpg",
    "https://tblg.k-img.com/restaurant/images/Rvw/111435/640x640_rect_111435342.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/15/ae/cf/eb/caption.jpg"
  ],
  "rating": 4.0,
  "ai_score": 3.8,
  reviews: [
    {
      "author": "Joo-hyun Kim",
      "content": "The atmosphere inside is good and the staff is kind.Personally, the frying clothes are a little thick.",
      "rating": 3.0,
      attachment_urls:[]
    } as IReview,
    {
      "author": "Tae-sun Zi",
      "content": "Healthy taste! I'm sure we've tried many different dishes if we go together. I was sad that only two of us ate together. You can make a reservation by phone!",
      "rating": 5.0,
      attachment_urls:[]
    } as IReview
  ],
  ai_pick: 3.8 > 4.0,
  travel_time: 10,
  distance: 300,
  menus :new Array<IMenu>
    ({ 
      "id": 11,
      "title": "A set",
      "picture_url": "http://www.eat-walk.com/shibuya_mei/img/shibuya_slide_img03.png",
      "description": "Set with curry, ricce, salad, and food.",
      local_title: "A set",
      type:'',
      local_price:1800,
      local_currency: '¥',
      local_quantity: 400,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    },
    { 
      "id": 12,
      "title": "B set",
      "picture_url": "http://www.eat-walk.com/shibuya_mei/img/shibuya_slide_img06.png",
      "description": "Set with noodle, salad, and kimchi.",
      local_title: "B set",
      type:'',
      local_price:2000,
      local_currency: '¥',
      local_quantity: 450,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    }),
  open_time: '09:00',
  close_time: '22:00',
  local_time: `${Math.round(Math.random()*23)+1}:00`,
  submenu_opened: false,
  submenu_selected: false
}
rs.push(r6)

var r7 = {
  id: 7,
  name: "Tonkatsu Maisen Aoyama",
  waiting_time: 20,
  address:{
    "longitude": 139.71120732257396,
    "latitude": 35.66850849914963,
    "readable": "4 Chome-8-5 Jingumae, Shibuya City, Tokyo 150-0001 Japan"
  },
  tags: ["Udon", "Kake Udon"],
  picture_urls: [
    "https://i.pinimg.com/originals/0e/2b/d9/0e2bd9f3f6f5c7d2c41aed92e527ade7.jpg",
    "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2012/09/Japanese-broth-with-udon-noodles-scaled.jpg",
    "https://app-place-attachment.api.matcha-jp.com/CmRaAAAAxQUiJ6t9-l2lER5TbGAmVq54Uvm65LxdffF5C4MjAB7VKuwUG89fKXwO4M6VlHoRnjEzRMINDsNWpLqXvUkIktT0IwUcHQwINHAMXOh8eLCoAxUJETkOx_2UKjJMW9AHEhB-FuvMiGYS6RhTChZyr1gZGhRc9hL46RP2hi78OZieLqQGygLbYA?w=656"
  ],
  "rating": 4.0,
  "ai_score": 3.0,
  reviews: [
    {
      "author": "Han-ho Yoon",
      "content": "It is a pork cutlet restaurant with a long history in Tokyo. It is popular among Japanese as well as tourists and Koreans, and it boasts a long waiting time.",
      "rating": 5.0,
      attachment_urls:[]
    } as IReview,
    {
      "author": "Joo-yun Lee",
      "content": "My Sen was introduced in the travel brochure and the review was good. I was going to have a cheap and delicious lunch for lunch, but I couldn't order the lunch menu because it was a red day (public holiday), so I ate it as a 2,000 yen roscatz, which was delicious as a popular restaurant.",
      "rating": 3.0,
      attachment_urls:[]
    } as IReview
  ],
  ai_pick: 3.0 > 4.0,
  travel_time: 15,
  distance: 200,
  menus :new Array<IMenu>
    ({ 
      "id": 15,
      "title": "Donkatsu",
      "picture_url": "https://w.namu.la/s/e60fd385992d2c73af9ae623c1f079a199d6d39c64000bab5c8b07d39e85891afaab71e8b945275397f561f977244539196878aad19daa40e2767042aade9baf047dca545280ea53f2ebf76b2abeaad5b9c54d52ce3b6781a8ca36fa58b3cd3343a2b12b50421bd897d5c2b4b46af748",
      "description": "Fried food that is fried after cutting pork and coated in fried clothes.",
      local_title: "Donkastsu",
      type:'',
      local_price:1000,
      local_currency: '¥',
      local_quantity: 300,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    },
    { 
      "id": 16,
      "title": "Curry and Rice",
      "picture_url": "https://img-z.okeinfo.net/library/images/2018/09/03/5bwjcx6hijt6bjh5jubt_15996.jpg",
      "description": "The usual ingredients added in Japanese curry include potatoes, carrots, onions and meat. The sauce itself is usually made from curry powder or roux, which is a of a blend of basic Indian spices.",
      local_title: "Curry and Rice",
      type:'',
      local_price:2000,
      local_currency: '¥',
      local_quantity: 450,
      local_quantity_unit: 'g',
      children: [],
      local_format_quantity: '0',
      local_format_price_per_unit: '0.00',
      local_format_price: '0.0',
      isExpanded:false,
      label: null
    }),
  open_time: '09:00',
  close_time: '22:00',
  local_time: `${Math.round(Math.random()*23)+1}:00`,
  submenu_opened: false,
  submenu_selected: false
}
rs.push(r7)