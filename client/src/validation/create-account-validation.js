// front-end create-account validation

const Validator = require("validator");
const isEmpty = require("is-empty");

const MIN_USERNAME_LENGTH = 4;
const MAX_USERNAME_LENGTH = 24;
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 30;

export function validateCreateAccountInput(data) {
    const errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Name checks
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }
    else if (!Validator.isLength(data.username, { min: MIN_USERNAME_LENGTH, max: MAX_USERNAME_LENGTH })) {
        errors.username = `Username length must be between ${MIN_USERNAME_LENGTH} and ${MAX_USERNAME_LENGTH} characters`;
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    else if (!Validator.isLength(data.password, { min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH })) {
        errors.password = `Password length must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters`;
    }

    /* Email not supported - but validation is made easy!
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    */

    return {
        errors,
        isValid: isEmpty(errors)
    };
};