// aparaitre div scroll

const timing = .55
const option = {
    root: null,
    rootMargin: '0px',
    threshold: timing
};

const HandleIntersect = function (entries , observer) {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > timing){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
};

const observer = new IntersectionObserver(HandleIntersect, option);
document.querySelectorAll('.reveal').forEach(function (reveal) {
    observer.observe(reveal)
});

//slide

var i = 0;
var images = ['images/t-coach.png','images/t-coach1.png','images/t-coach2.png','images/t-coach3.png'];
var time = 3000; 
var slide = document.querySelector('.slider');

function changeImg(){

    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++
    }   else {
        i = 0
    }
    setTimeout("changeImg()", time);
    }

window.onload=changeImg;
