import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteConfirmPopup from "./DeleteConfirmPopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteConfirmPopupOpen, setDeleteConfirmPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  const [isLoading, setIsLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
  });

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

  function handleCardAdd(data) {
    setIsLoading(true);
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }
  
  function handleCardDelete(card) {
    api
      .removeCard(card)
      .then(() => {
        setCards((cardData) => cardData.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDeleteSubmit(card) {
    handleCardDelete(card);
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleUpdateUser(userUpdate) {
    setIsLoading(true);
    api
      .setUserInfo(userUpdate)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleUpdateAvatar(avatarUpdate) {
    setIsLoading(true);
    api
      .updateProfilePicture(avatarUpdate)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
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
              onCardLike={handleCardLike}
              onCardDelete={setDeleteConfirmPopupOpen}
              cards={cards}
            />
            <Footer />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              buttonText={isLoading ? "Saving..." : "Save"}
            />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              buttonText={isLoading ? "Saving..." : "Save"}
            />

            <AddPlacePopup 
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onCardAdd={handleCardAdd}
              buttonText={isLoading ? "Creating..." : "Create"}
            />

            <DeleteConfirmPopup
              title="Are you sure?"
              isOpen={isDeleteConfirmPopupOpen}
              onClose={closeAllPopups}
              onDeleteCardSubmit={handleCardDeleteSubmit}
              buttonText="Yes"
              buttonType="button"
              buttonClassName="delete-button delete-button_type_deleteConfirm"
              buttonId="confirmation-button"
            ></DeleteConfirmPopup>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
