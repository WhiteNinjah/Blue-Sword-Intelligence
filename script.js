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
