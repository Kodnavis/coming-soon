var quote_card = document.getElementById("quote-card");
var randomQuote = Math.floor(Math.random() * (quotes.length - 0) + 0);

quote_card.innerHTML = '\
    <h2>Ангеза</h2>\
    <p>' + quotes[randomQuote]['text'] + '</p>\
    <hr>\
    <div class="author">\
        <img src="' + quotes[randomQuote]['picture'] + '" alt="author">\
        <p>' + quotes[randomQuote]['writer'] + '</p>\
    </div>\
';
