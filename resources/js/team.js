const team_card = document.getElementById('team-card');

team.forEach(member => {
    team_card.innerHTML += '\
        <div class="team-member">\
            <div class="team-member-text">\
                <img src="' + member['picture'] + '" alt="team member">\
                <div>\
                    <h3>' + member['fullName'] + '</h3>\
                    <p>' + member['role'] + '</p>\
                </div>\
            </div>\
            <button onclick="location' + ".href='" + member['url'] + "'" + '">Дунбол кардан</button>\
        </div>\
    ';
});
