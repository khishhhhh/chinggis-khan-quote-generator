const quotes = ['A leader can never be happy until his people are happy.', 
                'There is no good in anything until it is finished.', 
                'An action committed in anger is an action doomed to failure.', 
                "If God wanted you alive he wouldn't have sent me.", 
                "If you're afraid - don't do it - if you're doing it don't be afraid.", 
                "Remember, you have no companions but your shadow.", 
                "Come and sip from the cup of destruction.", 
                "Conquering the world on horseback is easy' it is dismounting and governing that is hard.", 
                "The merit in action lies in finishing it to the end.", 
                "If my body dies, let my body die, but do not let my country die."];

const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const img = document.getElementById('image');


btn.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random()*quotes.length)
    quote.textContent = quotes[randomNum];
    randomNum = Math.floor(Math.random()*10)
    img.src = `./imgs/chinggis-img-${randomNum}.jpg`;

})
