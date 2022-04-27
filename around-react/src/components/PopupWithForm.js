function PopupWithForm({
  name,
  title,
  children,
  buttonText = "Save",
  buttonId,
  formId,
}) {
  return (
    <>
      <div className={`popup-form ${formId}`}>
        <div className={"popup-form__container"}>
          <button type="button" className="close-button"></button>
          <h2 className="popup-form__title">{title}</h2>
          <form className="popup-form__input-container" name={name}>
            {children}
            <button className="submit-button" id={buttonId}>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
