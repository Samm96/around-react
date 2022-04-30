import React from "react";
import {api} from "../utils/Api";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick
}) {

const [userName, setUserName] = React.useState("");
const [userInfo, setUserDescription] = React.useState("");
const [userAvatar, setUserAvatar] = React.useState("");
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api
    .getAppInfo()
    .then(([user, cardData]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(cardData);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__group">
            <div className="profile__image-container">
              <div className="profile__overlay">
                <button
                  onClick={onEditAvatarClick}
                  type="button"
                  className="edit-button edit-button_type_profile-image"
                  id="edit-pic-button"
                ></button>
              </div>
              <img
                className="profile__image"
                src={userAvatar}
                alt="Profile Picture"
              />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__description">{userInfo}</p>
            </div>
            <button
              onClick={onEditProfileClick}
              id="edit-button"
              type="button"
              className="edit-button"
            ></button>
            <button
              onClick={onAddPlaceClick}
              type="button"
              className="add-button"
            ></button>
          </div>
        </section>

        <section className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
