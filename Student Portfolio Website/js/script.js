// =============================
// Mobile Navigation
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

});
// =============================
// Typing Animation
// =============================

const typing = document.getElementById("typing");

if(typing){

const words = [
    "Frontend Web Developer",
    "Computer Science Student",
    "Graphic Designer",
    "Creative Problem Solver",
    "Lifelong Learner"
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();

}
// ================= LIGHTBOX =================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if(lightbox){

    lightbox.addEventListener("click", function(e){

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}
