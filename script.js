document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
