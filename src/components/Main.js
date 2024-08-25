import avatar from "../images/gira.jpg";
import editButton from "../images/edit-button.svg";
import addButton from "../images/add_button.png";
import api from "../utils/api";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      const response = await api.getUserInfo();
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <img
            className="profile__avatar"
            src={avatar}
            alt="Imagen de perfil"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div className="profile__avatar-container"></div>
          <button
            className="profile__avatar-icon"
            id="edit-avatar-button"
            type="button"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfileClick}
          >
            <img src={editButton} alt="button-edit" />
          </button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        >
          <img src={addButton} alt="add-button" />
        </button>
      </section>
      <div className="elements">
        {cards.map((card) => (
          <Card
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
            name={card.name}
            likes={card.likes}
            link={card.link}
          />
        ))}
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
    </main>
  );
}
