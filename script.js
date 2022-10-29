const timing = .4
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
