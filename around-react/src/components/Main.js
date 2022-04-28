import PopupWithForm from "./PopupWithForm";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick
}) {
  return (
    <>
      <main>
        <section class="profile">
          <div class="profile__group">
            <div class="profile__image-container">
              <div class="profile__overlay">
                <button
                  onClick={onEditAvatarClick}
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
            <button
              onClick={onEditProfileClick}
              id="edit-button"
              type="button"
              class="edit-button"
            ></button>
            <button
              onClick={onAddPlaceClick}
              type="button"
              class="add-button"
            ></button>
          </div>
        </section>

        <section class="elements"></section>

      </main>
    </>
  );
}

export default Main;
