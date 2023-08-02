// Função para scroll suave
function smoothScroll(target, duration) {
    const element = document.querySelector(target);
    const targetPosition = element.getBoundingClientRect().top -60;
    const startPosition = window.scrollY;
    const distance = targetPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        // Easing function (easeInOutQuad)
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Animação suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do clique
        const target = this.getAttribute('href');
        const duration = 1000; // Duração da animação em milissegundos
        smoothScroll(target, duration);
    });
});
