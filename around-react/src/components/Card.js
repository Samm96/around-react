import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
      <article className="element">
        <button
          arial-label="delete"
          type="button"
          className="delete-button"
          id="delete-card-button"
        ></button>
        <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
        <div className="element__card">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
            <button
              arial-label="like"
              type="button"
              className="like-button"
            ></button>
            <p className="like-button__counter">{card.likes.length}</p>
          </div>
        </div>
      </article>
  );
}

export default Card;