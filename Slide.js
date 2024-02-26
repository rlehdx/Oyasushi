document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider .slide");
    slides[currentSlide].style.display = "block"; // 첫 번째 슬라이드를 활성화합니다.

    function changeSlide() {
        // 현재 슬라이드에 페이드아웃 애니메이션 적용
        slides[currentSlide].classList.add('fade-out');
        setTimeout(() => {
            slides[currentSlide].style.display = "none";
            slides[currentSlide].classList.remove('fade-out');

            // 다음 슬라이드로 이동
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = "block";
            slides[currentSlide].classList.add('fade-in');

            setTimeout(() => {
                slides[currentSlide].classList.remove('fade-in');
            }, 1000); // 페이드인 애니메이션이 끝난 후 클래스 제거
        }, 1000); // 페이드아웃 애니메이션이 끝난 후 다음 동작
    }

    // 3초마다 슬라이드 변경
    setInterval(changeSlide, 3000);
});
