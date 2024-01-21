const topics_card = document.getElementById("topics");

function addTopics(topics) {
    for(var i = 0; i < topics.length; i++) {
        if (i == 0) {
            topics_card.innerHTML += `
                <a href="${topics[i]['url']}">
                    <div class="lesson-card first-lesson-card">
                        <p>${topics[i]['title']}</p>
                    </div>
                </a>`
            ;
        } else if (i == topics.length - 1) {
            topics_card.innerHTML += `
                <a href="${topics[i]['url']}">
                    <div class="lesson-card last-lesson-card">
                        <p>${topics[i]['title']}</p>
                    </div>
                </a>`
            ;
        } else {
            topics_card.innerHTML += `
                <a href="${topics[i]['url']}">
                    <div class="lesson-card">
                        <p>${topics[i]['title']}</p>
                    </div>
                </a>`
            ;
        }
    }
}

addTopics(topics);


