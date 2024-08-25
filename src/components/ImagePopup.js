import closeIcon from "../images/Close-Icon.png";

export default function ImagePopup({ link, title, onClose, isOpen }) {
  return (
    <div className={`popup  ${isOpen ? "popup_show" : ""}`}>
      <form className="popup__image-container" id="popup-show-image">
        <img
          className="popup__image-full"
          id="popup-image-full"
          src={link}
          alt={title}
        />
        <p className="popup__image-title" id="popup-image-title">
          {title}
        </p>
        <img
          alt="button close image"
          src={closeIcon}
          onClick={onClose}
          className="popup__image-close"
          id="close-popup-image"
        />
      </form>
    </div>
  );
}
