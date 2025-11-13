export interface FullEvent {
    id: number
    title: string
    date: Date | string
    location_name: string | null
    location_coords: string | null
    weather: string | null
    image: string
    description: string | null
    participants: Participant[] | null
    type: 'public' | 'private'
    whitelist: number[] | null
    tags: string[] | null
    comments: Comment[] | null
}

export interface Participant {
    id: number
    username: string
    photo_url: string
}

export interface Comment {
    id: number
    username: string
    text: string
    date: string
    photo_url: string
}
// id: 3,
//             title: 'Hiking',
//             date: '2025-05-15T18:00:00.000Z',
//             location_name: 'Nordfjord, Norway',
//             location_coords: '',
//             weather: '15°C',
//             image: 'https://www.grisport.co.uk/blog/wp-content/uploads/2021/07/hiking-1024x684.jpeg',
//             description: 'Experience the beauty of nature on a peaceful hike through breathtaking landscapes. A perfect way to relax and recharge.',
//             participants: [
//                 {
//                     id: 2,
//                     nickname: 'TurboSnail',
//                     avatar: 'https://styles.redditmedia.com/t5_2vttqj/styles/communityIcon_0zrz0e63tub51.png'
//                 },
//                 {
//                     id: 3,
//                     nickname: 'CaptainObvious',
//                     avatar: 'https://www.gravatar.com/avatar/2f5e593b4ed3bdb8aa8059804d4da37d?s=256&d=identicon&r=PG'
//                 },
//                 {
//                     id: 4,
//                     nickname: 'BananaNinja',
//                     avatar: 'https://videothumbs.prod.downloadrave.com/avatar/d75da053-2bc0-453b-a6dd-14d02b567c46-QSPHXGOXCBFA-256.jpeg'
//                 },
//                 {
//                     id: 5,
//                     nickname: 'MrMeowgi',
//                     avatar: 'https://preview.redd.it/unpopular-opinion-people-with-these-mismatched-proportion-v0-y1s5ibl0zrzb1.jpg?width=256&format=pjpg&auto=webp&s=2f03d9310ffec6825574ccf3382f9e17935476cf'
//                 },
//                 {
//                     id: 6,
//                     nickname: 'DuckDestroyer',
//                     avatar: 'https://s.cafebazaar.ir/images/icons/com.appandgames.bobspongegames.squarepantfunny_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
//                 },
//                 {
//                     id: 7,
//                     nickname: 'PineappleKing',
//                     avatar: 'https://www.gravatar.com/avatar/7252bb455d7e2b04459b1cb278e09b59?s=256&d=identicon&r=PG'
//                 }
//             ],
//             type: 'public',
//             whitelist: [],
//             tags: [],
//             comments: [],