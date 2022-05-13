function DeleteConfirmPopup({ 
    isOpen, 
    onClose, 
    title, 
    buttonId,
    buttonClassName,
    buttonType,
    buttonText,
    onDeleteCardSubmit
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
              onClick={onDeleteCardSubmit}
            >
              {buttonText}
            </button>
          </div>
      </div>
  )
}

export default DeleteConfirmPopup;
