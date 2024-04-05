const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function() {
    // Toggle the visibility of the contact information
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
});
