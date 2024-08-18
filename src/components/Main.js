import avatar from "../images/gira.jpg";
import editButton from "../images/edit-button.svg";
import addButton from "../images/add_button.png";

export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content" onClick={props.onEditAvatarClick}>
          <img
            className="profile__avatar"
            src={avatar}
            alt="Imagen Jacques Cousteau"
          />
          <div className="profile__avatar-container"></div>
          <button
            className="profile__avatar-icon"
            id="edit-avatar-button"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Jacqueline Salas</h1>
          <button className="profile__edit-button" type="button">
            <img
              src={editButton}
              onClick={props.onEditProfileClick}
              alt="button-edit"
            />
          </button>
          <p className="profile__about">Viajera</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        >
          <img src={addButton} alt="add-button" />
        </button>
      </section>

      <div className="popup" id="popup-profile">
        <form className="popup__form" id="form-profile">
          <img
            className="popup__close-icon"
            src="<%require('./images/Close-Icon.png')%>"
            alt="boton de cerrar form"
            id="close-profile-form"
          />
          <h2 className="popup__title">Editar Perfil</h2>
          <input
            className="popup__input"
            type="text"
            name="name"
            id="input-name"
            minLength="2"
            maxLength="40"
            //value=""
            placeholder="Nombre"
            required
          />
          <span className="popup__input-error input-name-error"></span>
          <input
            className="popup__input"
            type="text"
            name="about"
            id="input-about"
            minLength="2"
            maxLength="200"
            //value=""
            placeholder="Acerca de mi"
            required
          />
          <span className="popup__input-error input-about-error"></span>
          <button
            className="popup__button-save"
            type="submit"
            id="profile-button-save"
          >
            Guardar
          </button>
        </form>
      </div>

      <div className="popup" id="popup-card">
        <form className="popup__form" id="form-card">
          <img
            className="popup__close-icon"
            src="<%=require('./images/Close-Icon.png')%>"
            alt="close button"
            id="close-card-form"
          />
          <h2 className="popup__title">Nuevo lugar</h2>
          <input
            className="popup__input"
            id="input-card"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            value=""
            placeholder="Título"
            required
          />
          <span className="popup__input-error input-card-error"></span>
          <input
            className="popup__input"
            type="url"
            name="link"
            id="input-link"
            value=""
            placeholder="Enlace de la imagen"
            required
          />
          <span className="popup__input-error input-link-error"></span>
          <button className="popup__button-save" type="submit" id="close-card">
            crear
          </button>
        </form>
      </div>
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
            src="<%=require('./images/Close-Icon.png')%>"
            className="popup__image-close"
            id="close-popup-image"
          />
        </form>
      </div>

      <div className="popup" id="popup-delete-card">
        <form className="popup__form-remove" id="form-card-delete">
          <img
            className="popup__close-icon"
            src="<%=require('./images/Close-Icon.png')%>"
            alt="close button"
            id="close-form-delete-card"
          />
          <h2 className="popup__title">¿Estás seguro?</h2>
          <button
            className="popup__button-delete"
            type="submit"
            id="delete-card-button"
          >
            Si
          </button>
        </form>
      </div>
      <div className="popup" id="popup-avatar">
        <form className="popup__form" id="form-change-avatar">
          <img
            className="popup__close-icon"
            src="<%=require('./images/Close-Icon.png')%>"
            alt="close button"
            id="close-form-avatar"
          />
          <h2 className="popup__title">Cambiar foto de perfil</h2>
          <input
            className="popup__input"
            type="url"
            name="url"
            value=""
            id="input-url-avatar"
            placeholder="Enlace de la imagen"
            required
          />
          <span className="popup__input-error input-link-error"> </span>
          <button
            className="popup__button-save"
            type="submit"
            id="change-avatar-button"
          >
            Guardar
          </button>
        </form>
      </div>

      <div className="elements"></div>

      <template className="template__card">
        <div className="element">
          <div className="element__card">
            <img className="element__image" id="image" src=" " alt=" " />
            <h3 className="element__text"></h3>
            <span className="element__like-counter"></span>
            <img
              className="element__like-button"
              alt="boton de me gusta"
              src="<%=require('./images/Group.png')%>"
            />

            <img
              className="element__delete-button"
              alt=" boton de borrar"
              src="<%=require('./images/Trash.png')%>"
            />
          </div>
        </div>
      </template>
    </main>
  );
}
