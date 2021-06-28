let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

console.log(library.sort((f,s)=> f.title> s.title ? 1: -1))
// console.log(arr.sort((f,s)=>{
// return  f.title> s.title ? 1:-1))
// }))