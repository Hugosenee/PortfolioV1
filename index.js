const nom = document.querySelector('#nom');
const mdp = document.querySelector('#mdp');


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
