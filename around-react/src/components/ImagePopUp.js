import React from "react";

function ImagePopup({
  card,
  onClose
}) {

  return (
      <div className={`popup-form ${card ? "popup-form_open" : ""}`}>
        <div className="popup-form__container popup-form__container_type_image">
        <img
              class="popup-form__image"
              id="imgPopupImg"
              src={card ? card.link : ""}
              alt={card ? card.name : ""}
            />
          <p className="popup-form__caption">{card ? card.title: ""}</p>
          <button type="button" class="close-button" onClick={onClose}></button>
        </div>
      </div>
  );
}

export default ImagePopup;