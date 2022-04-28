function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose
}) {

  return (
    <>
      <div className={`popup-form ${isOpen ? "popup-form_open" : ""}`}>
        <div className="popup-form__container">
          <button type="button" className="close-button" onClick={onClose}></button>
          <h2 className="popup-form__title">{title}</h2>
          <form name={name}>
            {children}
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
