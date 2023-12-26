const quotes = ['A leader can never be happy until his people are happy.', 
                'There is no good in anything until it is finished.', 
                'An action committed in anger is an action doomed to failure.', 
                "If God wanted you alive he wouldn't have sent me.", 
                "If you're afraid - don't do it - if you're doing it don't be afraid.", 
                "Remember, you have no companions but your shadow.", 
                "Come and sip from the cup of destruction.", 
                "Conquering the world on horseback is easy it is dismounting and governing that is hard.", 
                "The merit in action lies in finishing it to the end.", 
                "If my body dies, let my body die, but do not let my country die.",
                "The strength of wall is neither greater nor less than the courage of the men who defend it.",
                "I will rule the world by the law of the sword",
                "Do not despise an enemy who is small; do not belittle a friend who is poor",
                "I am the son of war. My heart beats only for victory.",
                "A man's greatest strength is his will to survive.",
                "The greatest treasures are those invisible to the eye but felt by the heart.",
                "Conquer your fears before they conquer you.",
                "A true leader is one who leads by example, not by force.",
                "The strength of a nation lies in the unity of its people.",
                "Do not grieve over the past, for it is gone. Focus on the present and conquer the future",
                "A successful warrior is one who can adapt to any situations.",
                "Wisdom is not found in knowledge alone but in the application of that knowledge.",
                "Never underestimate the power of a united and determined people.",
                "Strength and power come from unity, not from division.",
                "Every setback is an opportunity for a comeback."
                ];

const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const img = document.getElementById('image');


btn.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random()*quotes.length)
    quote.textContent = quotes[randomNum];
    randomNum = Math.floor(Math.random()*10);
    img.src = `./imgs/chinggis-img-${randomNum}.jpg`;
})
