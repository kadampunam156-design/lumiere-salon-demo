
// =========================
// MOBILE MENU
// =========================

const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".navbar nav");

const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";

menuButton.classList.add("menu-button");

navbar.insertBefore(menuButton, nav);

menuButton.addEventListener("click", () => {
    nav.classList.toggle("mobile-nav");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-nav");

    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".service-card, .about-content, .about-image, .gallery-item, .review-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// =========================
// GALLERY POPUP
// =========================

function openGallery(element) {

    const modal = document.getElementById("galleryModal");
    const preview = document.getElementById("galleryPreview");
    const title = document.getElementById("galleryTitle");

    const titleText =
        element.querySelector("span").textContent;

    preview.className = "";

    preview.style.backgroundImage =
        window.getComputedStyle(element).backgroundImage;

    preview.classList.add("gallery-preview");

    title.textContent = titleText;

    modal.classList.add("active");
}


function closeGallery() {

    const modal =
        document.getElementById("galleryModal");

    modal.classList.remove("active");
}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeGallery();

    }

});

// =========================
// APPOINTMENT FORM
// =========================

const appointmentForm =
    document.getElementById("appointmentForm");


appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        `Hello Lumière Beauty Studio!

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}

Additional Message:
${message}`;


    const whatsappNumber =
        "919999999999";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});