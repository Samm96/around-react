import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick
}) {

const currentUser = React.useContext(CurrentUserContext);

const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api
    .getInitialCardList()
    .then((cardData) => {
      setCards(cardData);
    })
    .catch((err) => console.log(err));
}, []);

function handleCardLike(card) {
  const isLiked = card.likes.some(user => user._id === currentUser._id);
  api
    .toggleLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    })
    .catch((err) => console.log(err));
}

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
                src={currentUser.avatar}
                alt="Profile Picture"
              />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__description">{currentUser.about}</p>
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
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike}/>
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
