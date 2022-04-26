function App() {
  return (
    <div class="page">
      <header class="header">
        <img
          class="header__logo"
          src="<%=require('./images/logo.svg')%>"
          alt="Around the U.S. Logo"
        />
      </header>

      <main>
        <section class="profile">
          <div class="profile__group">
            <div class="profile__image-container">
              <div class="profile__overlay">
                <button
                  type="button"
                  class="edit-button edit-button_type_profile-image"
                  id="edit-pic-button"
                ></button>
              </div>
              <img
                class="profile__image"
                src="<%=require('./images/21.04.06-Samantha-Horsch-006-2.jpg')%>"
                alt="Profile Picture"
              />
            </div>
            <div class="profile__info">
              <h1 class="profile__name">Samantha Horsch</h1>
              <p class="profile__description">Explorer</p>
            </div>
            <button id="edit-button" type="button" class="edit-button"></button>
            <button type="button" class="add-button"></button>
          </div>
        </section>

        <section class="elements">
        </section>

        <section class="popup-form" id="edit-popup-form">
          <div class="popup-form__container">
            <button type="button" class="close-button"></button>
            <h2 class="popup-form__title">Edit Profile</h2>
            <form class="popup-form__input-container" name="edit" id="edit">
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
            </form>
          </div>
        </section>

        <section class="popup-form" id="create-popup-form">
          <div class="popup-form__container">
            <button type="button" class="close-button"></button>
            <h2 class="popup-form__title">New place</h2>
            <form class="popup-form__input-container" name="create" id="create">
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
            </form>
          </div>
        </section>

        <section class="popup-form" id="image-popup">
          <div class="popup-form__container popup-form__container_type_image">
            <img
              class="popup-form__image"
              id="imgPopupImg"
              src="not_found.jpg"
              alt="image"
            />
            <p class="popup-form__caption"></p>
            <button type="button" class="close-button"></button>
          </div>
        </section>

        <section class="popup-form" id="delete-confirmation-popup">
          <div class="popup-form__container">
            <button type="button" class="close-button"></button>
            <h2 class="popup-form__title popup-form__title_type_deleteConfirm">
              Are you sure?
            </h2>
            <button
              type="button"
              class="delete-button delete-button_type_deleteConfirm"
              id="confirmation-button"
            >
              Yes
            </button>
          </div>
        </section>

        <section class="popup-form" id="profile-picture-popup">
          <div class="popup-form__container">
            <button type="button" class="close-button"></button>
            <h2 class="popup-form__title">Change profile picture</h2>
            <form
              class="popup-form__input-container"
              name="profile pic"
              id="profile-input-container"
            >
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
            </form>
          </div>
        </section>
      </main>

      <footer class="footer">
        <p class="footer__copyright">&copy; 2021 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
