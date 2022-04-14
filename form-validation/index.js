window.onload = () => {
    addEventListeners();
};

/**
 * Adds the click event listeners to the submit buttons
 */
const addEventListeners = () => {
    const submitButtons = document.getElementsByName('submitBtn');

    for (const button of submitButtons) {
        button.addEventListener('click', validateForm);
    }
}

/**
 * Clears previous, then writes new error messages to the appropriate place
 * @param {string []} errorMessages 
 * @param {HTMLElement} errorContainer error div
 */
const displayErrors = (errorMessages, errorContainer) => {
    let errorList = document.createElement("ul");

    while (errorContainer.firstChild) {
        errorContainer.removeChild(errorContainer.firstChild);
    }

    for (const message of errorMessages) {
        let li = document.createElement("li");
        li.innerText = message;
        errorList.appendChild(li);
    }

    errorContainer.appendChild(errorList);
};

/**
 * Handles validate click
 * @param {MouseEvent} event click
 */
const validateForm = (event) => {
    //Get the Parent form for the submit button that was clicked.
    const form = event.target.form;
    const errorMessages = [];

    //Get the container for the errors.
    const errorContainer = form.parentElement.getElementsByClassName("errors")[0];

    //For each input
    for (const input of form) {
        if (input.type !== 'text') {
            continue;
        }
        //For each class
        for (const className of input.classList) {
            let classErrorMessages = [];
            switch (className) {
                case 'required':
                    if (!isValidRequired(input.value)) {
                        classErrorMessages.push('Required fields must have a value that is not empty or whitespace.');
                    }
                    break;
                case 'numeric':
                    if (!isValidNumeric(input.value)) {
                        classErrorMessages.push('Numeric fields must be a series of numbers.');
                    }
                    break;
                case 'required_size':
                    if (!isValidRequiredSize(input)) {
                        classErrorMessages.push('Required_size field lengths must exactly match the minlength attribute of that field.');
                    }
                    break;
                case 'username':
                    if (!isValidUsernameLength(input.value)) {
                        classErrorMessages.push('Username fields must contain at least 8 characters.');
                    }
                    if (!isValidUsernameAlphanumeric(input.value)) {
                        classErrorMessages.push('Username fields must contain only alphanumeric characters.');
                    }
                    break;
                case 'password':
                    if (!isValidPassword(input.value)) {
                        classErrorMessages.push('Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.');
                    }
                    break;
                case 'date':
                    if (!isValidDate(input.value)) {
                        classErrorMessages.push('Date fields must match the format of XX/XX/XXXX.');
                    }
                    break;
                case 'phone':
                    if (!isValidPhone(input.value)) {
                        classErrorMessages.push('Phone fields must match the format of XXX-XXX-XXXX.');

                    }
                    break;
                case 'alphabetic':
                    if (!isValidAlphabetic(input.value)) {
                        classErrorMessages.push('Alphabetic fields must be a series of alphabetic characters.');
                    }
                    break;
                default:
                    break;
            }

            //In most cases, there is only one message per class, but username could have two error messages.
            for (const errorMessage of classErrorMessages) {
                if (!errorMessages.includes(errorMessage)) {
                    errorMessages.push(errorMessage);
                }
            }
        }
    }

    //Add any errors to the error container.
    displayErrors(errorMessages, errorContainer);

    //Prevent form submission if there were errors
    if (errorMessages.length) {
        event.preventDefault();
    }
};

/**
 * returns true if text is not empty or only whitespace
 * @param {string} text 
 * @returns {boolean}
 */
const isValidRequired = (text) => {
    return text.trim().length > 0;
};

/**
 * returns true if the input value length is 0 matches the minlength attribute
 * @param {HTMLElement} input 
 * @returns {boolean}
 */
const isValidRequiredSize = (input) => {
    return Number(input.getAttribute('minlength')) === input.value.length || input.value.length === 0;
};

/**
 * returns true if text is numeric
 * @param {string} text 
 * @returns {boolean}
 */
const isValidNumeric = (text) => {
    const numericRegex = /^$|^\d+$/;
    return numericRegex.test(text);
};

/**
 * returns true if text is alphanumeric
 * @param {string} text 
 * @returns {boolean}
 */
const isValidUsernameAlphanumeric = (text) => {
    const alphanumericRegex = /^$|^[a-z0-9]+$/i
    return alphanumericRegex.test(text);
};

/**
 * returns true if text is blank or >=8 characters long
 * @param {string} text 
 * @returns {boolean}
 */
const isValidUsernameLength = (text) => {
    return text.length >= 8 || text.length === 0;
};

/**
 * returns true if text meets date requirements
 * @param {string} text 
 * @returns {boolean}
 */
const isValidDate = (text) => {
    const dateRegex = /^$|^\d{2}\/\d{2}\/\d{4}$/;

    return dateRegex.test(text);
};

/**
 * returns true if text meets phone requirements
 * @param {string} text 
 * @returns {boolean}
 */
const isValidPhone = (text) => {
    const phoneRegex = /^$|^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(text);
};

/**
 * returns true if text meets password requirements
 * @param {string} text 
 * @returns {boolean}
 */
const isValidPassword = (text) => {
    const hasLowerCase = /[a-z]/.test(text);
    const hasCapital = /[A-Z]/.test(text);
    const hasDigit = /[0-9]/.test(text);
    const hasSpecial = /[~!@#$%^&*()_+=\-`]/.test(text);

    return text.length === 0 || (hasLowerCase && hasCapital && hasDigit && hasSpecial);
};

/**
 * returns true if text is alphabetic
 * @param {string} text 
 * @returns {boolean}
 */
const isValidAlphabetic = (text) => {
    const alphabeticRegex = /^$|^[a-z]+$/i;

    return alphabeticRegex.test(text);
};
