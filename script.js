document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');

    scrollContainer.addEventListener('wheel', function(event) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
    });
});
