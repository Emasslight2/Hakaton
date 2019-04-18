<<<<<<< HEAD
<<<<<<< HEAD
// let users = [
//     { nickname : 'Lord', level : 10, img : 'images/user.png', alt : 'nice', XP : 49 },
//     { nickname : 'Baron', level : 47, img : 'images/userDog.jpg', alt : 'nice', XP : 99 },
//     { nickname : 'King', level : 100, img : 'images/user2.jpg', alt : 'nice', XP : 87 }
// ];
=======
let users = [
    { nickname : 'Lord', level : 10, img : 'images/user.png', alt : 'nice', XP : 49 },
    { nickname : 'Baron', level : 47, img : 'images/userDog.jpg', alt : 'nice', XP : 99 },
    { nickname : 'King', level : 100, img : 'images/user2.jpg', alt : 'nice', XP : 87 }
];
>>>>>>> parent of 539b11e... html css improved

var elem = document.getElementById('user-info');
let d = new Date();
elem.innerHTML = `
<article class="user-main">
    <div class="user-avatar">
        <div class="photo-cage">
            <img src="${users[2].img}" alt="${users[2].alt}" class="photo">
        </div>
        <h2>${users[2].nickname}</h2>
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
        <span>Ваш уровень: ${users[2].level}</span>
        <span>Следущий уровень: ${users[2].level+1}</span>
    </section>
    <section class="user-levels" id="progress-sec">
        <div id="myProgress">
            <div id="myBar"></div>
        </div>
    </section>
    <section class="user-levels" id="level-lower">
        <span>${users[2].XP} XP</span>
    </section>
</article>`;

(function() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= users[2].XP) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  })();


for(let i = 1; i <= users[2].level;i++){
    (function() {
        var elem = document.createElement("div");
            elem.classList.add('icon');
            elem.innerHTML = i;
            if(i<=20) {
                elem.style.background = 'url(levels/seed.png) top/cover';
            }
            else if(i<=40) {
                elem.style.background = 'url(levels/seed2.png) top/cover';
            }
            else if(i<=60) {
                elem.style.background = 'url(levels/plant.png) top/cover';
            }
            else if(i<=80) {
                elem.style.background = 'url(levels/biggerplant.png) top/cover';
            }
            else {
                elem.style.background = 'url(levels/tree.png) top/cover';
            }
            
            if(i%10==1){
                elem.style.border = '4px solid rgb(119, 0, 0)';
            }
            else if(i%10==2){
                elem.style.border = '4px solid rgb(119, 45, 0)';
            }
            else if(i%10==3){
                elem.style.border = '4px solid rgb(119, 91, 0)';
            }
            else if(i%10==4){
                elem.style.border = '4px solid rgb(119, 119, 0)';
            }
            else if(i%10==5){
                elem.style.border = '4px solid rgb(101, 119, 0)';
            }
            else if(i%10==6){
                elem.style.border = '4px solid rgb(81, 119, 0)';
            }
            else if(i%10==7){
                elem.style.border = '4px solid rgb(61, 119, 0)';
            }
            else if(i%10==8){
                elem.style.border = '4px solid rgb(41, 119, 0)';
            }
            else if(i%10==9){
                elem.style.border = '4px solid rgb(29, 119, 0)';
            }
            else {
                elem.style.border = '4px solid rgb(0, 119, 9)';
                elem.style.color = 'white';
            }


<<<<<<< HEAD
//         var icon = document.getElementById("levels-cntr");
=======
let users = [
    { nickname : 'Lord', level : 10, img : 'images/user.png', alt : 'nice', XP : 49 },
    { nickname : 'Baron', level : 50, img : 'images/userDog.jpg', alt : 'nice', XP : 100 },
    { nickname : 'King', level : 100, img : 'images/user2.jpg', alt : 'nice', XP : 87 }
];

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


for(let i = 1; i <= users[0].level;i++){
    (function() {
        var elem = document.createElement("div");
            elem.classList.add('icon');
            elem.innerHTML = i;
            if(i<=20) {
                elem.style.background = 'url(levels/seed.png) top/cover';
            }
            else if(i<=40) {
                elem.style.background = 'url(levels/seed2.png) top/cover';
            }
            else if(i<=60) {
                elem.style.background = 'url(levels/plant.png) top/cover';
            }
            else if(i<=80) {
                elem.style.background = 'url(levels/biggerplant.png) top/cover';
            }
            else {
                elem.style.background = 'url(levels/tree.png) top/cover';
            }
            
            if(i%10==1){
                elem.style.border = '3px solid blue';
            }
            else if(i%10==2){
                elem.style.border = '3px solid red';
            }
            else if(i%10==3){
                elem.style.border = '3px solid brown';
            }
            else if(i%10==4){
                elem.style.border = '3px solid lightblue';
            }
            else if(i%10==5){
                elem.style.border = '3px solid navy';
            }
            else if(i%10==6){
                elem.style.border = '3px solid orange';
            }
            else if(i%10==7){
                elem.style.border = '3px solid purple';
            }
            else if(i%10==8){
                elem.style.border = '3px solid pink';
            }
            else if(i%10==9){
                elem.style.border = '3px solid magenta';
            }
            else {
                elem.style.border = '3px solid green';
            }


            console.log(i%10);
        var icon = document.getElementById("levels-cntr");
>>>>>>> parent of 53fc96d... nice
=======
        var icon = document.getElementById("levels-cntr");
>>>>>>> parent of 539b11e... html css improved

        
            icon.appendChild(elem);
    })();
}