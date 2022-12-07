import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const FORM_DATA_KEY = "feedback-form-state";
let currentFormData = {};

function localStorageCheck() {
    const storageData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));

    if (storageData) {
        for (const key in storageData) {
            formEl[key].value = storageData[key];
            currentFormData[key] = storageData[key];
        };
    };
};

function onFormInput(e) {
    currentFormData[e.target.name] = e.target.value;
    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(currentFormData));
};

function onFormSubmit(e) {
    e.preventDefault();

    if (!currentFormData.email || !currentFormData.message) {
        return alert("⚠️ All form fields must be filled out!");
    };

    console.log(currentFormData);
    localStorage.removeItem(FORM_DATA_KEY);
    formEl.reset();
    currentFormData = {};
};

localStorageCheck();
formEl.addEventListener("input", throttle(onFormInput, 500));
formEl.addEventListener("submit", onFormSubmit);