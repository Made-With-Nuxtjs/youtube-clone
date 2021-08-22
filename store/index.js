
export const state = () => {
    return{
     posts : [
         {
             _id:'1',
             title: 'My 1st post',
             subtitle: 'This is my Post 1st subtitleggggggg.',
             createdAt: new Date(),
             isRead: true,
         },
         {
             _id:'2',
             title: 'My 2st post',
             subtitle: 'This is my Post 2st subtitle.',
             createdAt: new Date(),
             isRead: false,
         },
         {
             _id:'3',
             title: 'My 3rd post',
             subtitle: 'This is my Post 3rd subtitle.',
             createdAt: new Date(),
             isRead: true,
         },
         {
             _id:'4',
             title: 'My 4th post',
             subtitle: 'This is my Post 4th subtitle.',
             createdAt: new Date(),
             isRead: false,
         }
     ]
    }
}