import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  open({ url, title }) {
    this._popupElement.querySelector(".popup-form__caption").textContent =
      title;
    this._imgElement = this._popupElement.querySelector(".popup-form__image");
    this._imgElement.src = url;
    this._imgElement.alt = title;

    super.open();
  }
}
