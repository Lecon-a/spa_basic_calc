const extend_button = document.querySelector(".extend_button");
const extension = document.querySelector(".calculator_wrapper_extension");
const external_controls = document.querySelector(".external_controls");
const extend_button_span = document.querySelector(".extend_button span");
const clear_main_value = document.querySelector(".main_value");
const clear_upper_value = document.querySelector(".upper_value");
const reset_button = document.querySelector(".reset");
const switch_button = document.querySelector(".switch");
const controls_buttons = document.querySelectorAll(".control");


extend_button.addEventListener("click", () => {
    if (!extend_button_span.classList.contains("contrast")) {
        external_controls.style.display = "grid";
        extension.style.gridTemplateColumns = "1.5fr .5fr";
        extend_button_span.classList.remove("expand");
        extend_button_span.classList.add("contrast");
    } else {
        external_controls.style.display = "none";
        extension.style.gridTemplateColumns = ".25fr";
        extend_button_span.classList.remove("contrast");
        extend_button_span.classList.add("expand");
    }
})

reset_button.addEventListener("click", () => { 
    if (clear_main_value.textContent !== "") {
        clear_main_value.textContent = "0";
        clear_upper_value.textContent = "";
    } else {
        alert("Turn on the calculator to clear the display screen.")
    }
})

switch_button.addEventListener("click", () => { 
    if (switch_button.classList.contains("on")) {
        switch_button.classList.remove("on");
        switch_button.classList.add("off");
        switch_button.textContent = "ON";
        clear_main_value.textContent = "";
    } else {
        switch_button.classList.remove("off");
        switch_button.classList.add("on");
        switch_button.textContent = "OFF";
        clear_main_value.textContent = "0";
    }
});

controls_buttons.forEach(control => {
    control.addEventListener("click", (e) => {
        switch (e.target.textContent) {
            case "x":
                // close the calculator
                document.querySelector(".spa_basic").style.display = "none";
                break;
            case "-":
                // minimize the calculator height
                document.querySelector(".spa_basic").style.height = "3rem";
                document.querySelector(".buttons").style.display = "none";
                break;
            case "+":
                // restore the calculator height
                document.querySelector(".spa_basic").style.height = "fit-content";
                document.querySelector(".buttons").style.display = "grid";
                break;
            default:
                break;
        }
    })
});

// Subscribe for more updates => SPa ICT Hub!
// Thank you for watching!!!