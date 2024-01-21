const course_card = document.getElementById("courses");

courses.forEach(course => {
    if (course['visible']) {
        course_card.innerHTML += `
            <a href="${course['url']}">
                <div class="course-card">
                    <img src="${course['picture']}" alt="course">
                    <div>
                        <h2>${course['name']}</h2>
                        <p>${course['text']}</p>
                    </div>
                </div>
            </a>
        `;
    }
});
