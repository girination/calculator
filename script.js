const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (button.id === "clear") {
            expression = "";
        } else if (button.id === "backspace") {
            expression = expression.slice(0, -1);
        } else if (button.id === "equals") {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = "Error";
            }
        } else if (value !== null) {
            expression += value;
        }

        display.value = expression;
    });
});
