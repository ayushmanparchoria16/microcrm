document.addEventListener("DOMContentLoaded", () => {
    // Scroll effect for Navbar
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(17, 17, 27, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(17, 17, 27, 0.8)";
            navbar.style.boxShadow = "none";
        }
    });

    // URL Typing Animation Mockup
    const urlBar = document.querySelector(".url-bar");
    const urls = [
        "https://shoes-shop.microcrm.site",
        "https://miami-pizza.microcrm.site",
        "https://dr-smith.microcrm.site",
        "https://local-gym.microcrm.site"
    ];
    let urlIndex = 0;
    
    setInterval(() => {
        urlBar.style.opacity = 0;
        setTimeout(() => {
            urlIndex = (urlIndex + 1) % urls.length;
            urlBar.innerText = urls[urlIndex];
            urlBar.style.opacity = 1;
        }, 500);
    }, 4000);
    urlBar.style.transition = "opacity 0.5s ease";

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
