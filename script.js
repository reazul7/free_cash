// Script for footer nav menu
function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    menu.classList.toggle("hidden");
}

// Script for Password filed
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});


// Script for GSAP animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".card", {
    y: -200,
    opacity: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true
    }
});

ScrollTrigger.create({
    trigger: "section",
    pin: ".sticky",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false
});
