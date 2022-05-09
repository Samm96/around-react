import React from "react";
import PopupWithForm from "./PopupWithForm";

export function EditProfilePopup({ 
    isOpen, 
    onClose 
}) {
  return (
    <PopupWithForm
      name="edit"
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Save"
      buttonType="submit"
      buttonClassName="submit-button"
      buttonId="edit-submit"
    >
      <input
        className="popup-form__input"
        id="name"
        name="name"
        placeholder="name"
        minlength="2"
        maxlength="40"
        required
      />
      <span className="popup-form__error-text name-error"></span>
      <input
        className="popup-form__input"
        name="about"
        placeholder="description"
        id="about"
        minlength="2"
        maxlength="200"
        required
      />
      <span className="popup-form__error-text about-error"></span>
    </PopupWithForm>
  );
}
