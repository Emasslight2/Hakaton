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
    { nickname : 'Lord', level : 10, img : 'images/user.png', alt : 'nice', XP : 49 },
    { nickname : 'Baron', level : 50, img : 'images/userDog.jpg', alt : 'nice', XP : 100 },
    { nickname : 'King', level : 100, img : 'images/user2.jpg', alt : 'nice', XP : 87 }
];
console.log(users[0].alt)

var elem = document.getElementById('user-info');
let d = new Date();
elem.innerHTML = `
<article class="user-main">
    <div class="user-avatar">
        <div class="photo-cage">
            <img src="${users[0].img}" alt="${users[0].alt}" class="photo">
        </div>
        <h2>${users[0].nickname}</h2>
    </div>
    <div class="user-avatar">
        <div class="user-btn-cntr">
            <button class="user-btn" id="edit-btn">Редактировать</button>
            <button class="user-btn" id="sign-out-btn">Выйти</button>
        </div>
    </div>
</article>
<article class="user-additional">
    <section class="user-levels" id="level-words">
        <span>Ваш уровень: ${users[0].level}</span>
        <span>Следущий уровень: ${users[0].level+1}</span>
    </section>
    <section class="user-levels" id="progress-sec">
        <div id="myProgress">
            <div id="myBar"></div>
        </div>
    </section>
    <section class="user-levels" id="level-lower">
        <span>${users[0].XP} XP</span>
    </section>
</article>`;

(function() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= users[0].XP) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  })();