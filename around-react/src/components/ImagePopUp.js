function ImagePopup({
  card,
  onClose
}) {

  return (
      <div className={`popup-form ${card ? "popup-form_open" : ""}`}>
        <div className="popup-form__container popup-form__container_type_image">
          <button type="button" className="close-button" onClick={onClose}></button>
          <p className="popup-form__caption">{card.name}</p>
          <button type="button" class="close-button"></button>
        </div>
      </div>
  );
}

export default ImagePopup;