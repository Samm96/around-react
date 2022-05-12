function DeleteConfirmPopup({ 
    isOpen, 
    onClose, 
    title, 
    onCardDelete,
    buttonId,
    buttonClassName,
    buttonType,
    buttonText,
 }) {

  return (
    <div className={`popup-form ${isOpen ? "popup-form_open" : ""}`}>
      <div className="popup-form__container">
        <button
          type="button"
          className="close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup-form__title">{title}</h2>
            <button
              type={buttonType}
              className={buttonClassName}
              id={buttonId}
              onClick={onCardDelete}
            >
              {buttonText}
            </button>
          </div>
      </div>
  )
}

export default DeleteConfirmPopup;
