// Scroll Reveal

// ScrollReveal({ reset: true });
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".reveal-profile", {});
sr.reveal(".IconLinks", { interval: 100 });
sr.reveal(".reveal-headline", { delay: 200 });

sr.reveal(".about-text", { interval: 100 });
sr.reveal(".reveal-button-general", { delay: 200 });
sr.reveal(".about-photos-container", { delay: 400 });

sr.reveal(".portfolio-box", { interval: 200 });

sr.reveal(".contact-address-heading", { interval: 100 });
sr.reveal(".contact-form", { delay: 200 });

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

// Smooth Scrolling

$(".nav-link").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top,
            },
            800
        );
    }
});
