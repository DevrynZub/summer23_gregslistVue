

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl ? data.imgUrl : 'https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80'
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }
}



// {
//   "_id": "645d60f381faf24223ae886b",
//     "bedrooms": 3,
//       "bathrooms": 2,
//         "levels": 2,
//           "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
//             "year": 2003,
//               "price": 230000,
//                 "description": "Super sick house",
//                   "creatorId": "63f7d6202d1cf882287f12e2",
//                     "createdAt": "2023-05-11T21:41:07.979Z",
//                       "updatedAt": "2023-05-11T21:41:07.979Z",
//                         "__v": 0,
//                           "creator": {
//     "_id": "63f7d6202d1cf882287f12e2",
//       "name": "Charles Francis Xavier",
//         "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
//           "id": "63f7d6202d1cf882287f12e2"
//   },
//   "id": "645d60f381faf24223ae886b"
// }