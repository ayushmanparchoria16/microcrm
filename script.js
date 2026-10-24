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
            "https://app.microcrm.site/book/rashmi-r-makeup",
            "https://app.microcrm.site/book/shri-ranawat-infotech",
            "https://app.microcrm.site/book/bbc"
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

// Interactive Google Map Mockup Shop Switcher
const mapShopData = {
    salon: {
        title: "Rashmi R Makeup & Bridal Studio",
        meta: "⭐ 4.9 (320 Google Reviews) • Vijay Nagar, Indore • <strong style='color: #a6e3a1;'>0% Aggregator Commission</strong>",
        icon: "💄",
        color: "#f472b6",
        url: "https://app.microcrm.site/book/rashmi-r-makeup",
        btnText: "Book Salon Direct"
    },
    tech: {
        title: "Shri Ranawat Infotech - Laptop & PC Repair",
        meta: "⭐ 4.8 (185 Google Reviews) • Bhawarkua, Indore • <strong style='color: #a6e3a1;'>0% Aggregator Commission</strong>",
        icon: "💻",
        color: "#60a5fa",
        url: "https://app.microcrm.site/book/shri-ranawat-infotech",
        btnText: "Book Diagnostic Direct"
    },
    realestate: {
        title: "BBC Real Estate - Aahana Residency",
        meta: "⭐ 5.0 (94 Google Reviews) • Puwarda Junarda, Indore • <strong style='color: #a6e3a1;'>0% Broker Commission</strong>",
        icon: "🏘️",
        color: "#a6e3a1",
        url: "https://app.microcrm.site/book/bbc",
        btnText: "Explore Plot Map Direct"
    }
};

window.selectMapShop = function(key) {
    document.querySelectorAll('.map-pin').forEach(el => el.classList.remove('active'));
    const pin = document.getElementById('pin-' + key);
    if (pin) pin.classList.add('active');

    const data = mapShopData[key];
    if (!data) return;

    const title = document.getElementById('drawerTitle');
    const meta = document.getElementById('drawerMeta');
    const icon = document.getElementById('drawerIcon');
    const btn = document.getElementById('drawerBtn');

    if (title) title.innerText = data.title;
    if (meta) meta.innerHTML = data.meta;
    if (icon) {
        icon.innerText = data.icon;
        icon.style.color = data.color;
    }
    if (btn) {
        btn.href = data.url;
        const span = btn.querySelector('span');
        if (span) span.innerText = data.btnText;
    }
};

