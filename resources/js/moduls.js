const moduls_card = document.getElementById("moduls");

moduls.forEach(modul => {
    moduls_card.innerHTML += `
    <a href="${modul['url']}">
        <div class="lesson-card first-lesson-card">
            <p>${modul['title']}</p>
        </div>
    </a>`;
});
