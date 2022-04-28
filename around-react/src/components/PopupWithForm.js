function PopupWithForm({
  name,
  title,
  children,
  isOpen,
}) {

  return (
    <>
      <div className={`popup-form ${isOpen ? "popup-form_open" : ""}`}>
        <div className="popup-form__container">
          <button type="button" className="close-button"></button>
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
