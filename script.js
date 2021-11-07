var left = document.querySelector('.left');
var right = document.querySelector('.right');

var names = ["quinn emanuel", "aiya america", "wet n wild"];
var images = ["./assets//images/global-force.jpg", "./assets//images/aiya america.jpg", "./assets//images/brush-on-beauty.jpg"];
var svgs = ["./assets/images/best_in_class_2014_round.svg", "./assets/images/celebrating.svg", "./assets/images/best_in_class_2014_round.svg"];

var naam = document.querySelector('.name');
var img = document.querySelector('.third-img-con img');
var svg = document.querySelector('.svg img');

var num = 0;
function load(){
    naam.innerHTML = names[num];
    img.src = images[num];
    svg.src = svgs[num];
}
load(0);

left.addEventListener('click', ()=>{
    num--;
    if(num < 0) num = 2;
    load();
});
right.addEventListener('click', function(){
    num++;
    if(num > 2) num = 0;
    load();
});


const child = document.querySelectorAll('.child');
const info = document.querySelectorAll('.info');
for(let i=0; i< child.length; i++){
    child[i].addEventListener('mouseenter', function(){
        info[i].classList.add('hid');
    });
    child[i].addEventListener('mouseleave', function(){
        info[i].classList.remove('hid');
    });
}



var ffthOne = document.querySelectorAll('.ffth-hvr-con-one');
var ffthtwo = document.querySelectorAll('.ffth-hvr-con-two');

for(let i=0; i<ffthOne.length; i++){
    ffthOne[i].addEventListener('mouseenter', function(){
        ffthtwo[i].classList.add('hid');
    });
    ffthOne[i].addEventListener('mouseleave', function(){
        ffthtwo[i].classList.remove('hid');
    });
}

var iconParent = document.querySelectorAll('.sixth-icon-parent');
var icons = ["./assets/images/tech/icon-dot-net.svg",
             "./assets/images/tech/icon-drupal.svg",
             "./assets/images/tech/icon-java.svg",
             "./assets/images/tech/icon-kentico.svg",
             "./assets/images/tech/icon-magento.svg",
             "./assets/images/tech/icon-nodejs.svg",
             "./assets/images/tech/icon-php.svg",
             "./assets/images/tech/icon-progressistefinity.svg",
             "./assets/images/tech/icon-python.svg",
             "./assets/images/tech/icon-reactjs.svg",
             "./assets/images/tech/icon-shopify.svg",
             "./assets/images/tech/icon-umbraco.svg",
             "./assets/images/tech/icon-wordpress.svg",
             "./assets/images/tech/icon-android.svg",
             "./assets/images/tech/icon-angular.svg",
             "./assets/images/tech/icon-apple.svg",
            ];

var iconName = [
    "microsoft. net",
    "drupal",
    "java",
    "kentico",
    "magento",
    "nodejs",
    "php",
    "progressistefinity",
    "python",
    "reactjs",
    "shopify",
    "umbraco",
    "wordpress",
    "android",
    "angular",
    "apple"
];

var temp = document.querySelector('.sixth-icon-parent');

function sixthIcon(k){
    temp.innerHTML = '';
    if(k<0) k = icons.length -1;
    if(k>icons.length-1) k = 0;
    let i = k;
    var count = 7;
    while(count != 0){
        if(i > icons.length-1) i = 0;
        if(i < 0) i = icons.length - 1;
        temp.innerHTML += `<div><img src=${icons[i]} /> <p>${iconName[i]}</p></div>`;
        i++;
        count--;
    }
    // for(let i = k; i< 7; i++){
    //     temp.innerHTML += `<div><img src=${icons[i]} /> <p>${iconName[i]}</p></div>`
    // }
}


var sxthLeft = document.querySelector('.sxth-left');
var sxthRight = document.querySelector('.sxth-right');
var sxthIndex = 0;

sixthIcon(sxthIndex);
sxthLeft.addEventListener('click', function(){
    sixthIcon(--sxthIndex);
});
sxthRight.addEventListener('click', function(){
    sixthIcon(++sxthIndex);
});

// scroll functions
var nav  = document.querySelector('.dn-nav');

function scr(){
    if(window.pageYOffset == 0){
        nav.classList.remove('black');
        return;
    }

    nav.classList.add('black');
}
window.addEventListener('scroll', function(){
    scr();
});


// navbar function in mobile responsive

var navBars = document.querySelector('.bars');
var twoNav = document.querySelector('.nv-two');
navBars.addEventListener('click', function(){
    twoNav.classList.toggle('op');
});


// fifth section nav bar

const ffthCon = document.querySelectorAll('.ffth-hvr-con');
const ffthLeft = document.querySelector('.ffthleft');
const ffthright = document.querySelector('.ffthright');

var ffthConIndex = 0;

ffthright.addEventListener('click', function(){
    
    for(let i = 0; i< ffthCon.length; i++){
        ffthCon[i].classList.add('ffth-hid');
    }
    if(ffthConIndex > ffthCon.length) ffthConIndex = 0;
    ffthCon[ffthConIndex++].classList.remove('ffth-hid');
});
ffthLeft.addEventListener('click', function(){
    
    for(let i = 0; i< ffthCon.length; i++){
        ffthCon[i].classList.add('ffth-hid');
    }
    if(ffthConIndex < 0) ffthConIndex = ffthCon.length-1;
    ffthCon[ffthConIndex--].classList.remove('ffth-hid');
});

