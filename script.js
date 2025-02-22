document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Blue Sword Intelligence! 🚀");

    document.querySelector(".btn").addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    });

    document.querySelector(".btn").addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});
