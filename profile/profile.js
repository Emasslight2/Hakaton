// for(let i = 0; i < 11;i++){
//     (function() {
//         var elem = document.createElement("div");
//             elem.innerHTML = "nice";
//         var wrappedP = document.getElementById("wrapped");

        
//             wrappedP.appendChild(elem);
//         console.log(elem);
//     })();
// }


let users = [
    {"nickname" : 'Lord', "level" : 10, "img" : 'user.png', "alt" : 'nice'}
];
console.log(users[0].alt)

var elem = document.getElementById('user-info');
let d = new Date();
elem.innerHTML = `<img src="${users[0].img}" alt="${users[0].alt}" class="photo">`;

