const quotes = [
"You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
"It is during our darkest moments that we must focus to see the light.— Aristotle",
"Believe you can and you're halfway there. — Theodore Roosevelt",
"Life shrinks or expands in proportion to one’s courage. — Anaïs Nin",
"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong - Ella Fitzgeral",
"Try to be a rainbow in someone's cloud. — Maya Angelou",
"If you don't like the road you're walking, start paving another one. — Dolly Parton",
"Real change, enduring change, happens one step at a time.— Ruth Bader Ginsburg",
"All dreams are within reach. All you have to do is keep moving towards them. -Viola Davis",
"It is never too late to be what you might have been.— George Eliot",
"All our dreams can come true, if we have the courage to pursue them.— Walt Disney",
]
/*
const quoteDisplay = document.getElementById('quoteDisplay');
const button = document.getElementById('button');

const shownQuotes = new Set();

function QuoteGenerator(){
    if(shownQuotes.size === quotes.length){
        shownQuotes.clear(); // reset if all quotes have been shown
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (shownQuotes.has(randomIndex));

    shownQuotes.add(randomIndex);
    quoteDisplay.textContent = quotes[randomIndex]
}

button.addEventListener('click', QuoteGenerator)
// if a quote is displayed then that quote should not be coming very soon
// hint is you can use a hashmap or a set to store the index's that have been already displayed
*/
const quoteDisplay = document.getElementById('quoteDisplay');
const button = document.getElementById('button');

const shownQuotes = new Set();

function QuoteGenerator(){
    if(shownQuotes.size === quotes.length){
        shownQuotes.clear()
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length)
    } while (shownQuotes.has(randomIndex));

    shownQuotes.add(randomIndex);
    quoteDisplay.textContent = quotes[randomIndex];
};

button.addEventListener('click', QuoteGenerator);