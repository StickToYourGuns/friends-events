import type { FullEvent } from '@/types'

export const mockEvents: FullEvent[] = [
    {
        id: 1,
        title: 'MTB party',
        date: '2025-04-15T14:00:00.000Z',
        location_name: 'Virgin, USA',
        location_coords: '',
        weather: '22°C',
        image: 'https://img.redbull.com/images/c_crop,x_0,y_0,h_2133,w_2844/c_fill,w_900,h_643/q_auto:low,f_auto/redbullcom/2014/09/25/1331680992695_2/are-you-ready-to-rampage',
        description: `Присоединяйтесь к нашему захватывающему мероприятию MTB Party, где вас ждут адреналиновые поездки на горных велосипедах по живописным тропам и горным склонам. Это идеальная возможность для любителей активного отдыха и природы испытать свои навыки катания, насладиться чистым воздухом и великолепными видами. На протяжении маршрута вас ждут разнообразные препятствия и интересные повороты, которые подарят ощущение настоящего приключения. Помимо экстремальных маршрутов, мероприятие предусматривает дружелюбную атмосферу, где можно познакомиться с единомышленниками, обменяться опытом и обсудить лучшие техники катания. После катания — отдых на свежем воздухе, легкие закуски и фото на память о незабываемом дне. Не упустите шанс провести время активно, с пользой для здоровья и в компании энергичных людей, разделяющих вашу страсть к горным велосипедам.`,
        participants: [
            {
                id: 2,
                username: 'TurboSnail',
                photo_url: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
            },
            {
                id: 3,
                username: 'CaptainObvious',
                photo_url: 'https://www.meme-arsenal.com/memes/8601c957e6cacd7ed715bd57239c3b1a.jpg'
            },
            {
                id: 4,
                username: 'BananaNinja',
                photo_url: 'https://avatarfiles.alphacoders.com/285/thumb-1920-285015.png'
            },
            {
                id: 5,
                username: 'MrMeowgi',
                photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f7UJj8JdFLHqrqgJm1P57SU1KxnqoGCFng&s'
            },
            {
                id: 6,
                username: 'DuckDestroyer',
                photo_url: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
            },
            {
                id: 7,
                username: 'PineappleKing',
                photo_url: 'https://media.tenor.com/sTW9KoM9Lv0AAAAm/avatar-the-last-airbender-avatar.webp'
            }
        ],
        type: 'public',
        whitelist: [],
        tags: [],
        comments: [
            {
                id: 123,
                username: 'CaptainObvious',
                text: 'Тебя еще отчим ебет',
                date: '2025-10-31T00:40:15.257Z',
                photo_url: 'https://www.meme-arsenal.com/memes/8601c957e6cacd7ed715bd57239c3b1a.jpg'
            },
            {
                id: 187,
                username: 'DuckDestroyer',
                text: 'Моя мать шлюха. Я вася тупой',
                date: '2025-10-30T22:32:16.257Z',
                photo_url: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
            },
            {
                id: 289,
                username: 'MrMeowgi',
                text: 'Ах, это, безусловно, очаровательное мероприятие — собраться ранним утром на окраине города, где росы ещё не высохли, и, утопая в ароматах сосновой хвои, неторопливо катить по извилистым дорожкам, чувствуя, как в каждом повороте оживает забытая поэзия тела. Велопрогулка ведь — не просто физическая активность, а своего рода акт внутренней элегантности, почти ритуал сопричастности к гармонии мира, в котором механика встречается с метафизикой. Здесь неважно, насколько дорог твой байк — важно, насколько утончён твой взгляд, когда солнце преломляется на спицах. И, конечно же, лишь истинно понимающие оценят ту особую тишину, что наступает после каждого подъёма, — тишину, в которой слышно, как бьётся сердце города',
                date: '2025-10-30T22:32:16.257Z',
                photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f7UJj8JdFLHqrqgJm1P57SU1KxnqoGCFng&s'
            },
        ],
    },
    {
        id: 2,
        title: 'Paintball w/ guys',
        date: '2025-05-08T18:00:00.000Z',
        location_name: 'Prypiat, Ukraine',
        location_coords: '',
        weather: '18°C',
        image: 'https://eu-assets.simpleview-europe.com/lillehammer/imageresizer/?image=%2Fdmsimgs%2FOlympiaparken_paintball_foto_daniel_nrodby-263_1335521767.jpg&action=ProductDetail2020',
        description: 'Gear up for an intense paintball match with your friends. Strategy, teamwork, and fun guaranteed!',
        participants: [
            {
                id: 2,
                username: 'TurboSnail',
                photo_url: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
            },
            {
                id: 3,
                username: 'CaptainObvious',
                photo_url: 'https://preview.redd.it/wtc3gq9qhe041.jpg?auto=webp&s=59263396dfaccee7362a7d5dce235c2d1810a4cf'
            },
            {
                id: 4,
                username: 'BananaNinja',
                photo_url: 'https://i.pinimg.com/originals/61/fd/1c/61fd1cc8e5178dedceade1c3da05e45a.jpg'
            },
            {
                id: 5,
                username: 'MrMeowgi',
                photo_url: 'https://preview.redd.it/unpopular-opinion-people-with-these-mismatched-proportion-v0-y1s5ibl0zrzb1.jpg?width=256&format=pjpg&auto=webp&s=2f03d9310ffec6825574ccf3382f9e17935476cf'
            },
            {
                id: 6,
                username: 'DuckDestroyer',
                photo_url: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
            },
            {
                id: 7,
                username: 'PineappleKing',
                photo_url: 'https://wallpapers.com/images/hd/funny-roblox-pictures-7et2vu9scjlutvxl.jpg'
            }
        ],
        type: 'public',
        whitelist: [],
        tags: [],
        comments: [],
    },
    {
        id: 3,
        title: 'Hiking',
        date: '2025-05-15T18:00:00.000Z',
        location_name: 'Nordfjord, Norway',
        location_coords: '',
        weather: '15°C',
        image: 'https://www.grisport.co.uk/blog/wp-content/uploads/2021/07/hiking-1024x684.jpeg',
        description: 'Experience the beauty of nature on a peaceful hike through breathtaking landscapes. A perfect way to relax and recharge.',
        participants: [
            {
                id: 2,
                username: 'TurboSnail',
                photo_url: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
            },
            {
                id: 3,
                username: 'CaptainObvious',
                photo_url: 'https://preview.redd.it/wtc3gq9qhe041.jpg?auto=webp&s=59263396dfaccee7362a7d5dce235c2d1810a4cf'
            },
            {
                id: 4,
                username: 'BananaNinja',
                photo_url: 'https://i.pinimg.com/originals/61/fd/1c/61fd1cc8e5178dedceade1c3da05e45a.jpg'
            },
            {
                id: 5,
                username: 'MrMeowgi',
                photo_url: 'https://preview.redd.it/unpopular-opinion-people-with-these-mismatched-proportion-v0-y1s5ibl0zrzb1.jpg?width=256&format=pjpg&auto=webp&s=2f03d9310ffec6825574ccf3382f9e17935476cf'
            },
            {
                id: 6,
                username: 'DuckDestroyer',
                photo_url: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
            },
            {
                id: 7,
                username: 'PineappleKing',
                photo_url: 'https://wallpapers.com/images/hd/funny-roblox-pictures-7et2vu9scjlutvxl.jpg'
            }
        ],
        type: 'public',
        whitelist: [],
        tags: [],
        comments: [],
    },
    {
        id: 4,
        title: 'Awesome carting',
        date: '2025-06-01T18:00:00.000Z',
        location_name: 'Nurburgring, Germany',
        location_coords: '',
        weather: '20°C',
        image: 'https://kartings.ru/wp-content/uploads/2020/01/sitw2.jpg',
        description: 'Feel the rush of speed and competition on the karting track. A thrilling experience for all racing enthusiasts!',
        participants: [
            {
                id: 2,
                username: 'TurboSnail',
                photo_url: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
            },
            {
                id: 3,
                username: 'CaptainObvious',
                photo_url: 'https://preview.redd.it/wtc3gq9qhe041.jpg?auto=webp&s=59263396dfaccee7362a7d5dce235c2d1810a4cf'
            },
            {
                id: 4,
                username: 'BananaNinja',
                photo_url: 'https://i.pinimg.com/originals/61/fd/1c/61fd1cc8e5178dedceade1c3da05e45a.jpg'
            },
            {
                id: 5,
                username: 'MrMeowgi',
                photo_url: 'https://preview.redd.it/unpopular-opinion-people-with-these-mismatched-proportion-v0-y1s5ibl0zrzb1.jpg?width=256&format=pjpg&auto=webp&s=2f03d9310ffec6825574ccf3382f9e17935476cf'
            },
            {
                id: 6,
                username: 'DuckDestroyer',
                photo_url: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
            },
            {
                id: 7,
                username: 'PineappleKing',
                photo_url: 'https://wallpapers.com/images/hd/funny-roblox-pictures-7et2vu9scjlutvxl.jpg'
            }
        ],
        type: 'public',
        whitelist: [],
        tags: [],
        comments: [],
    },
]