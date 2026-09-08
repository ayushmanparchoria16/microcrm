document.addEventListener("DOMContentLoaded", () => {
    // Scroll effect for Navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.style.background = "rgba(17, 17, 27, 0.95)";
                navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
            } else {
                navbar.style.background = "rgba(17, 17, 27, 0.8)";
                navbar.style.boxShadow = "none";
            }
        });
    }

    // URL Typing Animation Mockup
    const urlBar = document.querySelector(".url-bar");
    if (urlBar) {
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
    }

    // Dynamic Download Link from Google Sheet / Google Apps Script
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwGq0tBS09GYlTDLPqWwI2f0yDRwGb7eznVeCZqDNJT6TMSNptqcE8Xz-SfkgY3zXla/exec";
    let activeDownloadUrl = "https://github.com/ayushmanparchoria16/microcrm/releases/download/v1.0/MicroCRM_Setup.exe";

    function updateDownloadLinks(url) {
        if (!url) return;
        activeDownloadUrl = url;
        document.querySelectorAll(".btn-download").forEach(link => {
            link.href = url;
        });
    }

    // Fetch latest download URL dynamically from Google Sheet backend
    fetch(`${APPS_SCRIPT_URL}?action=check_version`)
        .then(res => res.json())
        .then(data => {
            if (data && data.success && data.download_url) {
                updateDownloadLinks(data.download_url);
            }
        })
        .catch(() => {});

    // Ensure clicking any download button triggers immediate download of activeDownloadUrl
    document.querySelectorAll(".btn-download").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = activeDownloadUrl;
        });
    });

    // Smooth Scroll for Anchor Links (excluding download buttons)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === "#download" || href === "#") return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
