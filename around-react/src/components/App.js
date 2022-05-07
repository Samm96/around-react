import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteConfirmPopupOpen, setDeleteConfirmPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  const [currentUser, setCurrentUser] = React.useState({name: "", about: "", avatar: ""});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  });
  

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleDeleteConfirmClick() {
    setDeleteConfirmPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onDeleteCardClick={handleDeleteConfirmClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <PopupWithForm
            name="profile pic"
            title="Change profile picture"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText="Save"
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
                required
              />
              <span className="popup-form__error-text profile-pic-error"></span>
          </PopupWithForm>

          <PopupWithForm
            name="edit"
            title="Edit Profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
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

          <PopupWithForm
            name="create"
            title="New place"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText="Create"
            buttonType="submit"
            buttonClassName="submit-button"
            buttonId="create-button"
          >
              <input
                className="popup-form__input"
                id="title"
                name="name"
                placeholder="title"
                minlength="1"
                maxlength="30"
                required
              />
              <span className="popup-form__error-text title-error"></span>
              <input
                className="popup-form__input"
                name="link"
                placeholder="image link"
                id="image-link"
                type="url"
                pattern="https://.*|http://.*"
                required
              />
              <span className="popup-form__error-text image-link-error"></span>
          </PopupWithForm>

          <PopupWithForm
            title="Are you sure?"
            isOpen={isDeleteConfirmPopupOpen}
            onClose={closeAllPopups}
            buttonText="Yes"
            buttonType="button"
            buttonClassName="delete-button delete-button_type_deleteConfirm"
            buttonId="confirmation-button"
          >
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
      </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
