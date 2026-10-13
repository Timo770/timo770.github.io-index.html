function generateTicket() {
    // 1. Retrieve input values from the HTML page
    const name = document.getElementById('name').value.trim();
    const ageInput = document.getElementById('age').value;
    const resultDiv = document.getElementById('result');


    if (name === "" || ageInput === "") {
        resultDiv.innerHTML = "Please enter your information.";
        return;
    }

    const age = parseInt(ageInput);
    if (age < 0) {
        resultDiv.innerHTML = "";
        return;
    }


    let priceMessage;

    if (age <= 3) {
        priceMessage = "is free";
    } else if (4 <= 12) {
        priceMessage = "is $10";
    } else if (13 <= 64) {
        priceMessage = "is $20";
    } else if (age => 65) {
        priceMessage = "is $12";
    }


    resultDiv.innerHTML = `${name}, your ticket ${priceMessage}.`;
}
