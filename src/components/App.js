import Header from "./Header";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Cambiar foto de perfil"
        name="avatar"
        buttonText="Guardar"
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          type="url"
          name="url"
          value=""
          id="input-url-avatar"
          placeholder="Enlace de la imagen"
          required
        />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Editar Perfi"
        name="profile"
        buttonText="Guardar"
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Nuevo lugar"
        name="place"
        buttonText="Crear"
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <ImagePopup
        isOpen={isImagePopupOpen}
        link={selectedCard.link}
        title={selectedCard.title}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
