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
})

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



