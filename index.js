const main_value = document.querySelector(".main_value");
const upper_value = document.querySelector(".upper_value");
const buttons = document.querySelectorAll(".button");
const options = document.querySelectorAll(".option");
const equal_button = document.querySelector(".equal_button");
let input_value;
let isDot = false;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.dataset.value) {
            if (main_value.textContent === '0' && e.target.dataset.value !== ".") {
                main_value.textContent = e.target.dataset.value;
            } else {
                if (e.target.dataset.value === "." && !isDot) {
                    main_value.textContent += e.target.dataset.value;
                    isDot = true
                } else if (e.target.dataset.value !== ".") {
                    main_value.textContent += e.target.dataset.value;
                }
            }
        }
    });
})

options.forEach(option => { 
    option.addEventListener("click", (e) => { 
        if (upper_value.textContent === "") {
            input_value = main_value.textContent;
            upper_value.textContent = input_value + " " + e.target.dataset.option;
            main_value.textContent = '0';
        } else if (upper_value.textContent !== "" && main_value.textContent === '0') {
            upper_value.textContent = input_value + " " + e.target.dataset.option; 
        } else {
            alert("You can't change the option again")
        }
        isDot = false;
    })
})

equal_button.addEventListener("click", (e) => {
    if (upper_value.textContent !== "" && main_value.textContent !== '0') { 

        // this to get all values needed for the operation
        let firstValue = parseFloat(upper_value.textContent.split(" ")[0]);
        let opt = upper_value.textContent.split(" ")[1];
        upper_value.textContent = '';
        let secondValue = parseFloat(main_value.textContent);
        let result = 0;

        switch (opt) {
            case '/':
                result = firstValue / secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '+':
                result = firstValue + secondValue;
                break;
            default:
                break;
        }

        main_value.textContent = ""+result

    } else if (upper_value.textContent === "") {
        alert("You have not selected any option yet")
    } else {
        alert("Enter the two oprands")
    }
 })