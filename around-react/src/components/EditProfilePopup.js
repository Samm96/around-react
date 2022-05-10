import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
}, [currentUser]);
  
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save"
      buttonType="submit"
      buttonClassName="submit-button"
      buttonId="edit-submit"
    >
      <input
        type="text"
        className="popup-form__input"
        id="name"
        name="name"
        placeholder="name"
        minlength="2"
        maxlength="40"
        value={name || ""}
        onChange={handleNameChange}
        required
      />
      <span className="popup-form__error-text name-error"></span>
      <input
        type="text"
        className="popup-form__input"
        name="about"
        placeholder="description"
        id="about"
        minlength="2"
        maxlength="200"
        value={about || ""}
        onChange={handleAboutChange}
        required
      />
      <span className="popup-form__error-text about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;