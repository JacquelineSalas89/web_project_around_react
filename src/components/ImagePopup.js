import closeIcon from "../images/Close-Icon.png";

export default function ImagePopup() {
  return (
    <div className="popup" id="popup-image">
      <form className="popup__image-container" id="popup-show-image">
        <img
          className="popup__image-full"
          id="popup-image-full"
          src=" "
          alt=" "
        />
        <span className="popup__image-title" id="popup-image-title"></span>
        <img
          alt="button close image"
          src={closeIcon}
          className="popup__image-close"
          id="close-popup-image"
        />
      </form>
    </div>
  );
}
