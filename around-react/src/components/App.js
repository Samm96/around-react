import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
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
          />
          <Footer />

          <PopupWithForm
            name="profile pic"
            title="Change profile picture"
            buttonText="Save"
            buttonId="profile-pic-button"
            formContainer="profile__image-container"
            isOpen={isEditAvatarPopupOpen}
          >
            <div>
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
            </div>
          </PopupWithForm>

          <PopupWithForm
            name="edit"
            title="Edit Profile"
            buttonText="Save"
            buttonId="edit-submit"
            formContainer="popup-form__container"
            isOpen={isEditProfilePopupOpen}
          >
            <div>
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
            </div>
          </PopupWithForm>

          <PopupWithForm
            name="create"
            title="New place"
            buttonText="Create"
            buttonId="create-button"
            formContainer="popup-form__container"
            isOpen={isAddPlacePopupOpen}
          >
            <div>
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
