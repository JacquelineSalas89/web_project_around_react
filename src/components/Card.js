import React from "react";
import trashCan from "../images/Trash.png";
import likeButton from "../images/Group.png";

export default function Card({ link, name, likes, onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="element">
      <div className="element__card">
        <img
          className="element__image"
          id="image"
          style={{ backgroundImage: `url(${link})` }}
          alt=""
          onClick={handleClick}
        />
        <h3 className="element__text">{name}</h3>
        <span className="element__like-counter">{likes.length}</span>
        <img
          className="element__like-button"
          alt="boton de me gusta"
          src={likeButton}
        />

        <img
          className="element__delete-button"
          alt=" boton de borrar"
          src={trashCan}
        />
      </div>
    </div>
  );
}
