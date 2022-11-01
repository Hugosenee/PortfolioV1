// couleurs hugo developpeur

const hugo = document.querySelector('.hugo')
const developeur = document.querySelector('.developpeur')

hugo.addEventListener('mouseover', function() {
    developeur.style.color ='#232C36'
    hugo.style.color = 'white'
})

developeur.addEventListener('mouseover', function() {
    developeur.style.color ='white'
    hugo.style.color = '#232C36'
})


// apparaitre div scroll

const timing = .55
const options = {
    root: null,
    rootMargin: '0px',
    threshold: timing
}

const HandleIntersect = function (entries , observer) {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > timing){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(HandleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (reveal) {
    observer.observe(reveal)
});







//loading...

const loading = document.querySelector('#troispoints');

new Typewriter(loading, {
    loop : true ,
    delay : 300,
    deletespeed : 5,
})

.typeString('<span style="color:#95BCE6">.</span>')
.pauseFor('100')
.typeString('<span style="color:#232C36">.</span>')
.pauseFor('100')
.typeString('<span style="color:#95BCE6">.</span>')
.start()


// slide

var i = 0;
var images = ['images/t-coach.png', 'images/t-coach1.png', 'images/t-coach2.png', 'images/t-coach3.png'];
var time = 2000; 

function changeImg(){

    document.slide.src = images[i];

    if(i > images.length - 1) {
        i++;
    }   else {
        i = 0
    }
    setTimeout("changeImg()", time);
}

window.onload=changeImg;


const nom = document.querySelector('#nom');
const mdp = document.querySelector('#mdp');


//connexion

new Typewriter(nom, {
    loop : false
})

.typeString('Hugo Senée')
.start()

new Typewriter(mdp, {
    loop : false
})

.typeString('***********')
.start()



