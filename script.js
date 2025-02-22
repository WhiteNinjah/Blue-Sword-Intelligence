document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Blue Sword Intelligence! 🚀");

    // Matrix Hacker Effect
    const matrixContainer = document.createElement("div");
    matrixContainer.classList.add("matrix-background");
    document.body.appendChild(matrixContainer);


function checkPassword() {
    const input = document.getElementById("hacker-input").value;
    const result = document.getElementById("result");

    if (input === "blueSword42") {
        result.innerHTML = "✅ Access Granted! You are now in the system.";
        result.style.color = "lime";
    } else {
        result.innerHTML = "❌ Access Denied. Try again.";
        result.style.color = "red";
    }
}



    
    const matrixSymbols = "0123456789ABCDEF";
    for (let i = 0; i < 200; i++) {
        let symbol = document.createElement("div");
        symbol.classList.add("matrix-text");
        symbol.innerText = matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];
        symbol.style.left = `${Math.random() * 100}vw`;
        symbol.style.top = `${Math.random() * -100}vh`;
        symbol.style.animationDuration = `${Math.random() * 5 + 2}s`;
        matrixContainer.appendChild(symbol);
    }
});



