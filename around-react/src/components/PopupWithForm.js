function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonText,
  buttonType,
  buttonClassName,
  buttonId,
}) {
  return (
    <>
      <div className={`popup-form ${isOpen ? "popup-form_open" : ""}`}>
        <div className="popup-form__container">
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          ></button>
          <h2 className="popup-form__title">{title}</h2>
          <div className="popup-form__input-container">
            <form name={name}>
              {children}
              <button
                type={buttonType}
                className={buttonClassName}
                id={buttonId}
                disabled
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
