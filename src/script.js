/**
 * Weight, Distance, Temperature Convertor - CPRG-306-G Assignment 1
 * 
 * 
 * Names: Julien Lam, Tyler Gettle
 * Date: October 8, 2023
 * 
 * 
 * Description:
 * 
 * This is the script for the main convertor website. This script determines the formula 
 * for three main conversions and vice versa:
 *      1. Pounds to Kilograms
 *      2. Kilometers to Miles
 *      3. Celsius to Fahrenheit
 * 
 * This script will also create three tabs for each one of these conversions via buttons
 * and when each one of these buttons are pressed, will take the User to the desired tab.
 * 
 * When the User clicks these buttons, they will automatically hide any content not needed
 * to be shown to the User and will show and content that is.
 * 
 * When the User enters into one of these tabs, they will be prompted with one of the three 
 * conversions depending on the tab chosen. They will then be required to enter a value into
 * the input box and when the input is entered and the User presses the button the convert. 
 * This script will take that value and enter it into the conversion process, where the script
 * will determine the tab the User is on, as well as the conversion rate they have chosen, and
 * then determine the correct formula to use, and then output the resulting conversion.
 */



// Convertor function that determines the conversion formula for each conversion rate
const createConvertor = (fromUnit, toUnit) => {
    let convertor;

    /* Switch statement that goes down the list and determines which conversion rate
    to use and breaks out as soon as it finds the correct statement */
    switch (fromUnit) {
        case "pound":
            if (toUnit === "kilogram") convertor = (value) => value * 0.45359237;
            break;
        case "kilogram":
            if (toUnit === "pound") convertor = (value) => value / 0.45359237;
            break;
        case "mile":
            if (toUnit === "kilometer") convertor = (value) => value * 1.60934;
            break;
        case "kilometer":
            if (toUnit === "mile") convertor = (value) => value / 1.60934;
            break;
        case "celsius":
            if (toUnit === "fahrenheit") convertor = (value) => ((value * (9 / 5)) + 32);
            break;
        case "fahrenheit":
            if (toUnit === "celsius") convertor = (value) => ((value - 32) * (5 / 9));
            break;
    }

    // Checks if the value is an array, and if the value is an array, it will convert that value
    return (value) => Array.isArray(value) ? value.map(convertor) : convertor(value);
};

// This function will show what content is needed for each tab, and will hide whatever content is not needed for that tab
const showTab = (tabId) => {
    // All the different tabs laid out within an array
    const tabArray = ["weightTab", "distanceTab", "tempTab"];

    // If the ID matches the TabId, this if statement will show the content, if it doesn't match, it will not display the content
    tabArray.forEach((id) => {
        if (id === tabId) {
            document.getElementById(id).style.display = "block";
        } else {
            document.getElementById(id).style.display = "none";
        }
    });

    // Buttons that when clicked will change the Tab to the designated tab they are assigned to
    const buttonArray = ["weightButton", "distanceButton", "tempButton"];

    // Loops through the buttonArray and finds the correct the ID required
    buttonArray.forEach((buttonId) => {
        const button = document.getElementById(buttonId);

        /* If the Buttons ID matches the tab the color of the button will change to show the User they are currently on that tab,
        otherwise when changed, the tab will drop that color and return to its default color */
        if (buttonId.startsWith(tabId.split("Tab")[0])) {
            button.classList.add("bg-slate-900");
        }
        else {
            button.classList.remove("bg-slate-900");
            button.classList.add("bg-slate-700");
        }
    });
};

// This function will convert the value from either Pounds to Kilograms or Kilograms to Pounds, it will then display the result of the conversion
const convertWeight = () => {
    // These two variables will take the value from the entered text, and take the rate the User determines
    const weightValue = document.getElementById("weightValue").value;
    const weightRate = document.getElementById("weightRate").value;

    const values = [];
    // Splits the values entered by at the "," and enters them into an array, and then removes any trailing spaces
    const valueArray = weightValue.split(",");
    for (const item of valueArray) {
        values.push(parseFloat(item.trim()));
    }

    /* Determines the rate if its Pounds to Kilograms, or Kilograms to Pounds and then 
    enters them into the createConvertor function to enable the correct conversion */
    let conversion;
    if (weightRate === "poundToKilogram") {
        conversion = createConvertor("pound", "kilogram");
    } else {
        conversion = createConvertor("kilogram", "pound");
    }
    
    // Takes the result from the createConvertor function and puts it into a result variable
    const result = conversion(values);

    // Takes the result and displays it on the page
    document.getElementById("weightResult").innerText = "Result: " + result.join(", ");
};

// This function will convert the value from either Miles to Kilometers or Kilometers to Miles, it will then display the result of the conversion
const convertDistance = () => {
    // These two variables will take the value from the entered text, and take the rate the User determines
    const distanceValue = document.getElementById("distanceValue").value;
    const distanceRate = document.getElementById("distanceRate").value;

    const values = [];
    // Splits the values entered by at the "," and enters them into an array, and then removes any trailing spaces
    const valueArray = distanceValue.split(",");
    for (const item of valueArray) {
        values.push(parseFloat(item.trim()));
    }

    /* Determines the rate if its Miles to Kilometers, or Kilometers to Miles and then 
    enters them into the createConvertor function to enable the correct conversion */
    let conversion;
    if (distanceRate === "mileToKilometer") {
        conversion = createConvertor("mile", "kilometer");
    } 
    else {
        conversion = createConvertor("kilometer", "mile");
    }

    // Takes the result from the createConvertor function and puts it into a result variable
    const result = conversion(values);

    // Takes the result and displays it on the page
    document.getElementById("distanceResult").innerText = "Result: " + result.join(", ");
};

// This function will convert the value from either Celsius to Fahrenheit or Fahrenheit to Celsius, it will then display the result of the conversion
const convertTemp = () => {
    // These two variables will take the value from the entered text, and take the rate the User determines
    const tempValue = document.getElementById("tempValue").value;
    const tempRate = document.getElementById("tempRate").value;

    const values = [];
    // Splits the values entered by at the "," and enters them into an array, and then removes any trailing spaces
    const valueArray = tempValue.split(",");
    for (const item of valueArray) {
        values.push(parseFloat(item.trim()));
    }

    /* Determines the rate if its Miles to Kilometers, or Kilometers to Miles and then 
    enters them into the createConvertor function to enable the correct conversion */
    let conversion;
    if (tempRate === "celsiusToFahrenheit") {
        conversion = createConvertor("celsius", "fahrenheit");
    } 
    else {
        conversion = createConvertor("fahrenheit", "celsius");
    }

    // Takes the result from the createConvertor function and puts it into a result variable
    const result = conversion(values);

    // Takes the result and displays it on the page
    document.getElementById("tempResult").innerText = "Result: " + result.join(", ");
};

// When the HTML is loaded, this function will make the Weight Tab the default tab that shows up
document.addEventListener("DOMContentLoaded", function () {
    showTab("weightTab");
});
