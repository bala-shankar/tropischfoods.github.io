const submitbutton = document.getElementById("submit-button");
const form = document.getElementsByTagName("form");
const successMessage = document.getElementById("success-message");
const hide1 = document.getElementById("hide1");
const hide2 = document.getElementById("hide2");
const copyright = document.getElementById("copyright");
const appointmentFormSection = document.querySelector('.appointment-form-section'); // Get the form section

const updateState = (message) => {
    submitbutton.innerText = message;
};

const handlesuccess = () => {
    updateState("Success!!!");

    setTimeout(() => {
        // Display success message and hide other elements
        form[0].style.display = "none";
        hide1.style.display = "none";
        hide2.style.display = "none";
        copyright.style.display = "none";

        successMessage.style.display = "flex";
        appointmentFormSection.classList.add('submitted');

        // Start the countdown after showing the success message
        startCountdown();
    }, 1000);
};

let countdownTime = 10;

const startCountdown = () => {
    const countdownInterval = setInterval(function () {
        countdownTime--;
        document.getElementById("countdown").innerText = countdownTime;

        // When the countdown reaches zero, redirect to the home page
        if (countdownTime === 0) {
            clearInterval(countdownInterval);
            window.location.href = "/tropischfoods.github.io/index.html#last";
        }
    }, 1000); // Count down every 1 second (1000ms)
};

const submitform = (event) => {
    event.preventDefault();

    updateState("Submitting ...");

    const formData = new FormData(event.target);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const jsonString = JSON.stringify(formObject);
    console.log(jsonString);

    // Submit to formspark
    fetch("https://submit-form.com/iOi3YmoBf", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: jsonString,
    })
    .then(function (response) {
        if (response.ok) {
            handlesuccess();
        }
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });
};
