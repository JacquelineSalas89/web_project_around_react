import closeIcon from "../images/Close-Icon.png";

export default function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_show" : ""
      }`}
    >
      <form className={`popup__form popup__${props.name}`} name={props.name}>
        <img
          className="popup__close-icon"
          src={closeIcon}
          alt="boton de cerrar form"
          id="close-profile-form"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button
          className="popup__button-save"
          type="submit"
          id="profile-button-save"
        >
          {props.buttonText}
        </button>
      </form>
    </div>
  );
}
