import React from "react";
import {api} from "../utils/Api";
import PopupWithForm from "./PopupWithForm";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick
}) {

const [userName, setUserName] = React.useState("");
const [userInfo, setUserDescription] = React.useState("");
const [userAvatar, setUserAvatar] = React.useState("");
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api
    .getAppInfo()
    .then(([user, card]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(card);
    })
    .catch((err) => console.log(err));
}, []);

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
                src={userAvatar}
                alt="Profile Picture"
              />
            </div>
            <div class="profile__info">
              <h1 class="profile__name">{userName}</h1>
              <p class="profile__description">{userInfo}</p>
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
