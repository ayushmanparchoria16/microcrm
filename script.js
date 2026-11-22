document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll effect for Navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                navbar.style.background = "rgba(9, 13, 22, 0.95)";
                navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
            } else {
                navbar.style.background = "rgba(9, 13, 22, 0.85)";
                navbar.style.boxShadow = "none";
            }
        });
    }

    // 2. Mobile Nav Toggle
    const mobileToggle = document.getElementById("mobileNavToggle");
    const navLinks = document.getElementById("navLinks");
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            navLinks.classList.toggle("mobile-active");
        });
        navLinks.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => navLinks.classList.remove("mobile-active"));
        });
    }

    // 3. Hero Plot Box Interactive Clicks
    const plotBoxes = document.querySelectorAll(".plot-box");
    const plotSelectedInfo = document.getElementById("heroPlotSelectedInfo");
    if (plotBoxes && plotSelectedInfo) {
        plotBoxes.forEach(box => {
            box.addEventListener("click", function() {
                if (this.classList.contains("plot-sold")) return;
                plotBoxes.forEach(b => b.style.outline = "none");
                this.style.outline = "2px solid #818cf8";
                const num = this.getAttribute("data-num");
                const sqft = this.getAttribute("data-sqft");
                const price = this.getAttribute("data-price");
                plotSelectedInfo.innerHTML = `Selected: <strong>Plot #${num}</strong> (${sqft} sqft) • <span style="color: #6ee7b7; font-weight: 700;">₹${price}</span> &nbsp;<a href="https://app.microcrm.site/book/bbc" target="_blank" style="color: #818cf8; text-decoration: underline; font-size: 0.78rem;">Book Site Visit ↗</a>`;
            });
        });
    }

    // 4. Interactive WhatsApp AI Simulator
    const simChat = document.getElementById("simChatArea");
    window.triggerSimMsg = function(type) {
        if (!simChat) return;

        let userText = "";
        let botText = "";

        if (type === "plot") {
            userText = "What is the plot price in Aahana Residency?";
            botText = "Hi! 😊 Plots in Aahana Residency start at ₹3,750/sqft in Puwarda Junarda, Indore. Would you like me to send you the PDF brochure 📄 or schedule a free site visit this weekend? 🏡";
        } else if (type === "salon") {
            userText = "Show bridal makeup packages & video proof";
            botText = "Hey gorgeous! ✨ Bridal packages start at ₹15,000 including HD makeup, draping & hair. You can watch our real bridal transformation reels directly on our booking link: app.microcrm.site/book/rashmi-r-makeup 💄";
        } else if (type === "quote") {
            userText = "Need quotation for custom CRM development";
            botText = "Hello! 💻 Custom B2B software proposals with itemized milestones are ready within minutes. Shall we schedule a 15-min discovery call or generate a preliminary quote for you? 📊";
        }

        // Add user incoming message
        const userBubble = document.createElement("div");
        userBubble.className = "chat-bubble incoming";
        userBubble.innerText = userText;
        simChat.appendChild(userBubble);
        simChat.scrollTop = simChat.scrollHeight;

        // Show typing indicator
        const typing = document.createElement("div");
        typing.className = "typing-dots";
        typing.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
        simChat.appendChild(typing);
        simChat.scrollTop = simChat.scrollHeight;

        // Reply after 650ms
        setTimeout(() => {
            typing.remove();
            const botBubble = document.createElement("div");
            botBubble.className = "chat-bubble outgoing";
            botBubble.innerText = botText;
            simChat.appendChild(botBubble);
            simChat.scrollTop = simChat.scrollHeight;
        }, 650);
    };

    // 5. Interactive Industry Switcher Logic
    const industryData = {
        realestate: {
            title: "Real Estate Developers & Township Planners",
            desc: "Turn online Meta (FB/IG) ad clicks into confirmed site visits. Replace static brochures with live interactive canvas plot maps.",
            bullets: [
                "<strong>Interactive Canvas Maps:</strong> Buyers inspect live layouts, tap plots for sqft size, facing & status (Available/Sold).",
                "<strong>2-Minute Speed to Lead:</strong> Meta leads receive instant WhatsApp brochures before competitors even notice.",
                "<strong>Site Visit Scheduler:</strong> Automated rep assignments & follow-up tracking with zero lead leakage."
            ],
            badge: "Live Deployment: BBC Real Estate (Aahana Residency)",
            link: "https://app.microcrm.site/book/bbc",
            btnText: "Explore Real Estate Portal ↗",
            visualHtml: `
                <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div>
                            <div style="font-weight: 700; color: #fff;">Aahana Residency Master Plan</div>
                            <div style="font-size: 0.75rem; color: #94a3b8;">Puwarda Junarda, Indore • Phase 1</div>
                        </div>
                        <span style="background: rgba(16,185,129,0.15); color: #6ee7b7; padding: 3px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">Live Canvas</span>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                        <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; padding: 12px; text-align: center;">
                            <div style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7;">Plot 101</div>
                            <div style="font-size: 0.7rem; color: #94a3b8;">1,000 sqft</div>
                            <div style="font-size: 0.75rem; color: #fff; font-weight: 600; margin-top: 4px;">Available</div>
                        </div>
                        <div style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); border-radius: 8px; padding: 12px; text-align: center;">
                            <div style="font-size: 0.8rem; font-weight: 700; color: #fca5a5;">Plot 102</div>
                            <div style="font-size: 0.7rem; color: #94a3b8;">1,200 sqft</div>
                            <div style="font-size: 0.75rem; color: #fca5a5; font-weight: 600; margin-top: 4px;">SOLD</div>
                        </div>
                        <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; padding: 12px; text-align: center;">
                            <div style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7;">Plot 103</div>
                            <div style="font-size: 0.7rem; color: #94a3b8;">1,500 sqft</div>
                            <div style="font-size: 0.75rem; color: #fff; font-weight: 600; margin-top: 4px;">Available</div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding: 10px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25); border-radius: 8px; font-size: 0.8rem; color: #c7d2fe; display: flex; justify-content: space-between; align-items: center;">
                        <span>WhatsApp AI brochure delivery active</span>
                        <span style="color: #6ee7b7; font-weight: 700;">● Online</span>
                    </div>
                </div>
            `
        },
        service: {
            title: "Service Studios, Salons & Tech Diagnostics",
            desc: "Empower beauty salons and tech repair shops with a frictionless self-service storefront. Zero customer app download needed.",
            bullets: [
                "<strong>1-Tap Mobile Drawer:</strong> Customers pick stylists or repair services with instant slot booking.",
                "<strong>Instagram Reel Video Proof:</strong> Embed video proof and transformation clips directly into service cards.",
                "<strong>Automated WhatsApp Confirmations:</strong> Send appointment reminders and ready-for-pickup notices with zero effort."
            ],
            badge: "Live Deployment: Rashmi R Makeup & Shri Ranawat Infotech",
            link: "https://app.microcrm.site/book/rashmi-r-makeup",
            btnText: "Explore Salon & Tech Portals ↗",
            visualHtml: `
                <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div>
                            <div style="font-weight: 700; color: #fff;">Rashmi R Bridal Studio</div>
                            <div style="font-size: 0.75rem; color: #94a3b8;">Vijay Nagar, Indore • ⭐ 4.9 (320 Reviews)</div>
                        </div>
                        <span style="background: rgba(243,139,168,0.15); color: #f472b6; padding: 3px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">Active Store</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-size: 0.85rem; font-weight: 700;">HD Bridal Transformation Package</div>
                            <div style="font-size: 0.75rem; color: #94a3b8;">Includes Hair, Draping & Lashes • 180 min</div>
                        </div>
                        <div style="font-weight: 700; color: #a5b4fc;">₹15,000</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-size: 0.85rem; font-weight: 700;">Laptop Diagnostics & Thermal Paste</div>
                            <div style="font-size: 0.75rem; color: #94a3b8;">Job-Card Tracker • 45 min</div>
                        </div>
                        <div style="font-weight: 700; color: #a5b4fc;">₹499</div>
                    </div>
                </div>
            `
        },
        consulting: {
            title: "Consulting, IT Agencies & B2B Practices",
            desc: "Streamline client inquiries, produce professional GST quotations in seconds, and track milestones with zero paperwork.",
            bullets: [
                "<strong>Instant Quotation Builder:</strong> Generate clean itemized proposals with terms and payment schedules in 30 seconds.",
                "<strong>Inquiry Pipeline:</strong> Track prospective corporate clients from discovery to deal closure.",
                "<strong>Automated WhatsApp Billing:</strong> Send invoice reminders and tax receipts with integrated UPI QR codes."
            ],
            badge: "B2B Agency Architecture: Quotations & Milestone Billing",
            link: "https://app.microcrm.site/book/shri-ranawat-infotech",
            btnText: "See B2B Invoicing Flow ↗",
            visualHtml: `
                <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div>
                            <div style="font-weight: 700; color: #fff;">Quotation #QT-2026-084</div>
                            <div style="font-size: 0.75rem; color: #94a3b8;">Client: Nexa Corp • Status: Sent on WhatsApp</div>
                        </div>
                        <span style="background: rgba(99,102,241,0.15); color: #818cf8; padding: 3px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">GST Invoice</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px;">
                            <span>Custom SaaS Architecture & UI</span>
                            <span style="font-weight: 700;">₹65,000</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px;">
                            <span>WhatsApp AI Gateway Setup</span>
                            <span style="font-weight: 700;">₹18,000</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 800; color: #6ee7b7; padding-top: 6px;">
                            <span>Total (Inc. 18% GST)</span>
                            <span>₹97,940</span>
                        </div>
                    </div>
                </div>
            `
        }
    };

    window.switchIndustry = function(key) {
        document.querySelectorAll(".tab-pill").forEach(pill => pill.classList.remove("active"));
        const activeTab = document.getElementById("tab-" + key);
        if (activeTab) activeTab.classList.add("active");

        const data = industryData[key];
        if (!data) return;

        const title = document.getElementById("switcherTitle");
        const desc = document.getElementById("switcherDesc");
        const bullets = document.getElementById("switcherBullets");
        const badge = document.getElementById("switcherBadge");
        const btn = document.getElementById("switcherBtn");
        const visual = document.getElementById("switcherVisual");

        if (title) title.innerText = data.title;
        if (desc) desc.innerText = data.desc;
        if (badge) badge.innerText = data.badge;
        if (btn) {
            btn.href = data.link;
            btn.innerText = data.btnText;
        }
        if (bullets) {
            bullets.innerHTML = data.bullets.map(b => `<li><i class="fa-solid fa-circle-check"></i> <div>${b}</div></li>`).join("");
        }
        if (visual) {
            visual.style.opacity = 0;
            setTimeout(() => {
                visual.innerHTML = data.visualHtml;
                visual.style.opacity = 1;
            }, 180);
            visual.style.transition = "opacity 0.2s ease";
        }
    };
});
