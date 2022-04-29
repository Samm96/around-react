import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteConfirmPopupOpen, setDeleteConfirmPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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

  function handleCardClick() {
    setSelectedCard(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteConfirmPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <div class="page">
        <div>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onDeleteCardClick={handleDeleteConfirmClick}
          />
          <Footer />

          <PopupWithForm
            name="profile pic"
            title="Change profile picture"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <div class="popup-form__input-container">
              <input
                class="popup-form__input"
                name="url"
                placeholder="add image..."
                id="profile-pic"
                type="url"
                pattern="https://.*|http://.*"
                required
              />
              <span class="popup-form__error-text profile-pic-error"></span>
              <button
                type="submit"
                class="submit-button"
                id="profile-pic-button"
                name="submit"
                disabled
              >
                Save
              </button>
            </div>
          </PopupWithForm>

          <PopupWithForm
            name="edit"
            title="Edit Profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <div class="popup-form__input-container">
              <input
                class="popup-form__input"
                id="name"
                name="name"
                placeholder="name"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="popup-form__error-text name-error"></span>
              <input
                class="popup-form__input"
                name="about"
                placeholder="description"
                id="about"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="popup-form__error-text about-error"></span>
              <button
                name="submit"
                type="submit"
                class="submit-button"
                id="edit-submit"
              >
                Save
              </button>
            </div>
          </PopupWithForm>

          <PopupWithForm
            name="create"
            title="New place"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <div class="popup-form__input-container">
              <input
                class="popup-form__input"
                id="title"
                name="name"
                placeholder="title"
                minlength="1"
                maxlength="30"
                required
              />
              <span class="popup-form__error-text title-error"></span>
              <input
                class="popup-form__input"
                name="link"
                placeholder="image link"
                id="image-link"
                type="url"
                pattern="https://.*|http://.*"
                required
              />
              <span class="popup-form__error-text image-link-error"></span>
              <button
                type="submit"
                class="submit-button"
                id="create-button"
                name="submit"
                disabled
              >
                Create
              </button>
            </div>
          </PopupWithForm>

          <PopupWithForm
            title="Are you sure?"
            isOpen={isDeleteConfirmPopupOpen}
            onClose={closeAllPopups}
          >
            <div>
              <button
                type="button"
                class="delete-button delete-button_type_deleteConfirm"
                id="confirmation-button"
              >
                Yes
              </button>
            </div>
          </PopupWithForm>

        </div>
        <template id="card-template">
          <article class="element">
            <button
              arial-label="delete"
              type="button"
              class="delete-button"
              id="delete-card-button"
            ></button>
            <img class="element__image" src="not_found.jpg" alt="" />
            <div class="element__card">
              <h2 class="element__title"></h2>
              <div class="element__like-container">
                <button
                  arial-label="like"
                  type="button"
                  class="like-button"
                ></button>
                <p class="like-button__counter">0</p>
              </div>
            </div>
          </article>
        </template>
      </div>
    </>
  );
}

export default App;
