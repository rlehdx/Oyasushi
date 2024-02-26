document.addEventListener("DOMContentLoaded", function() {
   var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
    }
    if (menuIcon && dropdownMenu) {
        menuIcon.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });
    } else {
        console.error('Menu icon or dropdown menu not found!');
    }
});