import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const [avatar, setAvatar] = React.useState(null);
  const previousAvatar = React.useRef(avatar);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: (previousAvatar.current = avatar),
    });
  }

  return (
    <PopupWithForm
      name="profile pic"
      title="Change profile picture"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      buttonType="submit"
      buttonClassName="submit-button"
      buttonId="profile-pic-button"
    >
      <input
        className="popup-form__input"
        name="url"
        placeholder="add image..."
        id="profile-pic"
        type="url"
        pattern="https://.*|http://.*"
        value={avatar || ""}
        onChange={handleAvatarChange}
        required
      />
      <span className="popup-form__error-text profile-pic-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
