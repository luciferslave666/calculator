const inputValue = document.getElementById("user-input");

// Handle number button clicks
document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "Error") {
            inputValue.innerText = "";
        }
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerText.trim();
    });
});

// Handle operation button clicks
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const currentText = inputValue.innerText;
        const lastChar = currentText.substring(currentText.length - 1);
        const operation = e.target.innerText;
        
        if (operation === "=") {
            if (!isNaN(lastChar)) {
                try {
                    // Safer alternative to eval - only allow basic math operations
                    const result = Function('"use strict"; return (' + currentText + ')')();
                    inputValue.innerText = result;
                } catch (error) {
                    inputValue.innerText = "Error";
                }
            }
        } else if (operation === "AC") {
            inputValue.innerText = "0";
        } else if (operation === "DEL") {
            const newText = currentText.substring(0, currentText.length - 1);
            inputValue.innerText = newText.length === 0 ? "0" : newText;
        } else {
            // Add operator only if last character is a number
            if (!isNaN(lastChar)) {
                inputValue.innerText += operation;
            }
        }
    });
});