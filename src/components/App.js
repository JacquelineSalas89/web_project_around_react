import Header from "./Header";
import { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(false);
  }

  function handleAddPlaceClick() {
    document.querySelector("#popup-card").classList.add("popup_show");
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick
      />
      <Footer />
    </div>
  );
}

export default App;
