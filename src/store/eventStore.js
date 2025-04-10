import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEventStore = defineStore('eventStore', () => {
    const friendsEvents = ref([
        {
            id: 1,
            title: 'MTB party',
            date: '2025-04-15T14:00:00.000Z',
            location: 'Virgin, USA',
            weather: '22°C',
            image: 'https://media.trekbikes.com/image/upload/w_1200/b300_mtbMarqueeImage',
            description: 'Join us for an adrenaline-filled mountain biking adventure through scenic trails. Perfect for thrill-seekers and nature lovers alike!',
            participants: [
                {
                    id: 1,
                    nickname: 'TurboSnail',
                    avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
                },
                {
                    id: 2,
                    nickname: 'CaptainObvious',
                    avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
                },
                {
                    id: 3,
                    nickname: 'BananaNinja',
                    avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
                },
                {
                    id: 4,
                    nickname: 'MrMeowgi',
                    avatar: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
                },
                {
                    id: 5,
                    nickname: 'DuckDestroyer',
                    avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
                },
                {
                    id: 6,
                    nickname: 'PineappleKing',
                    avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
                }
            ]
        },
        {
            id: 2,
            title: 'Paintball w/ guys',
            date: '2025-05-08T18:00:00.000Z',
            location: 'Prypiat, Ukraine',
            weather: '18°C',
            image: 'https://eu-assets.simpleview-europe.com/lillehammer/imageresizer/?image=%2Fdmsimgs%2FOlympiaparken_paintball_foto_daniel_nrodby-263_1335521767.jpg&action=ProductDetail2020',
            description: 'Gear up for an intense paintball match with your friends. Strategy, teamwork, and fun guaranteed!',
            participants: [
                {
                    id: 1,
                    nickname: 'TurboSnail',
                    avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
                },
                {
                    id: 2,
                    nickname: 'CaptainObvious',
                    avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
                },
                {
                    id: 3,
                    nickname: 'BananaNinja',
                    avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
                },
                {
                    id: 4,
                    nickname: 'MrMeowgi',
                    avatar: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
                },
                {
                    id: 5,
                    nickname: 'DuckDestroyer',
                    avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
                },
                {
                    id: 6,
                    nickname: 'PineappleKing',
                    avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
                }
            ]
        },
        {
            id: 3,
            title: 'Hiking',
            date: '2025-05-15T18:00:00.000Z',
            location: 'Nordfjord, Norway',
            weather: '15°C',
            image: 'https://www.grisport.co.uk/blog/wp-content/uploads/2021/07/hiking-1024x684.jpeg',
            description: 'Experience the beauty of nature on a peaceful hike through breathtaking landscapes. A perfect way to relax and recharge.',
            participants: [
                {
                    id: 1,
                    nickname: 'TurboSnail',
                    avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
                },
                {
                    id: 2,
                    nickname: 'CaptainObvious',
                    avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
                },
                {
                    id: 3,
                    nickname: 'BananaNinja',
                    avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
                },
                {
                    id: 4,
                    nickname: 'MrMeowgi',
                    avatar: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
                },
                {
                    id: 5,
                    nickname: 'DuckDestroyer',
                    avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
                },
                {
                    id: 6,
                    nickname: 'PineappleKing',
                    avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
                }
            ]
        },
        {
            id: 4,
            title: 'Awesome carting',
            date: '2025-06-01T18:00:00.000Z',
            location: 'Nurburgring, Germany',
            weather: '20°C',
            image: 'https://kartings.ru/wp-content/uploads/2020/01/sitw2.jpg',
            description: 'Feel the rush of speed and competition on the karting track. A thrilling experience for all racing enthusiasts!',
            participants: [
                {
                    id: 1,
                    nickname: 'TurboSnail',
                    avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
                },
                {
                    id: 2,
                    nickname: 'CaptainObvious',
                    avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
                },
                {
                    id: 3,
                    nickname: 'BananaNinja',
                    avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
                },
                {
                    id: 4,
                    nickname: 'MrMeowgi',
                    avatar: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
                },
                {
                    id: 5,
                    nickname: 'DuckDestroyer',
                    avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
                },
                {
                    id: 6,
                    nickname: 'PineappleKing',
                    avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
                }
            ]
        },
    ])

    const myEvents = ref([
        {
            id: 5,
            title: 'garage barbeque',
            date: '2025-05-02T18:00:00.000Z',
            location: 'Fryazino, Russia',
            weather: '24°C',
            image: 'https://nauglax.ru/wp-content/uploads/2022/10/5.jpg',
            description: 'Relax with friends over delicious grilled food and great conversations. A cozy evening awaits!',
            participants: [
                {
                    id: 1,
                    nickname: 'TurboSnail',
                    avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
                },
                {
                    id: 2,
                    nickname: 'CaptainObvious',
                    avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
                },
                {
                    id: 3,
                    nickname: 'BananaNinja',
                    avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
                },
                {
                    id: 4,
                    nickname: 'MrMeowgi',
                    avatar: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
                },
                {
                    id: 5,
                    nickname: 'DuckDestroyer',
                    avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
                },
                {
                    id: 6,
                    nickname: 'PineappleKing',
                    avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
                }
            ]
        },
        {
            id: 6,
            title: 'Parkour training',
            date: '2025-05-17T18:00:00.000Z',
            location: 'Shelkovo, Russia',
            weather: '17°C',
            image: 'https://media.foodspring.com/magazine/public/uploads/2022/06/parkour.gif',
            description: 'Learn the art of parkour with professional trainers. Improve your agility, strength, and confidence in this dynamic session.',
            participants: [
                {
                    id: 1,
                    nickname: 'TurboSnail',
                    avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
                },
                {
                    id: 2,
                    nickname: 'CaptainObvious',
                    avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
                },
                {
                    id: 3,
                    nickname: 'BananaNinja',
                    avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
                },
                {
                    id: 4,
                    nickname: 'MrMeowgi',
                    avatar: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
                },
                {
                    id: 5,
                    nickname: 'DuckDestroyer',
                    avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
                },
                {
                    id: 6,
                    nickname: 'PineappleKing',
                    avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
                }
            ]
        },
        {
            id: 1,
            title: 'MTB party',
            date: '2025-04-15T14:00:00.000Z',
            location: 'Virgin, USA',
            weather: '22°C',
            image: 'https://media.trekbikes.com/image/upload/w_1200/b300_mtbMarqueeImage',
            description: 'Join us for an adrenaline-filled mountain biking adventure through scenic trails. Perfect for thrill-seekers and nature lovers alike!',
            participants: [
                {
                    id: 1,
                    nickname: 'TurboSnail',
                    avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
                },
                {
                    id: 2,
                    nickname: 'CaptainObvious',
                    avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
                },
                {
                    id: 3,
                    nickname: 'BananaNinja',
                    avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
                },
                {
                    id: 4,
                    nickname: 'MrMeowgi',
                    avatar: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
                },
                {
                    id: 5,
                    nickname: 'DuckDestroyer',
                    avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
                },
                {
                    id: 6,
                    nickname: 'PineappleKing',
                    avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
                }
            ]
        },
    ])

    return {
        friendsEvents,
        myEvents,
    };
});