import React from "react";

export const FormValidationContext = React.createContext();

export const validation = {
    inputSelector: ".popup-form__input",
    submitButtonSelector: ".submit-button",
    inactiveButtonClass: "popup-form__submit-button_type_disabled",
    errorTextSelector: ".popup-form__error-text",
    inputHasError: "popup-form__input_has_error",
    errorTextVisible: "popup-form__error-text_visible",   
}