import { useState } from "react";
import "./App.css";

import RenderPage from "./components/renderPage/renderPage";
import Button from "./components/Button/Button";

function App() {
  const [switcher, setSwitcher] = useState(false);
  const [customColor, setNewColor] = useState("customBTN");
  const [message, setNewMessage] = useState("Click");
  const [currentPage, setCurrentPage] = useState(1);

  const maxPagesCount = 2;

  const switcherBtn = () => {
    setSwitcher(!switcher);
    return !switcher;
  };

  const changeMessage = () => {
    if (switcherBtn()) {
      setNewMessage("Ahoj!");
      setNewColor("placeholder");
    } else {
      setNewMessage("Click");
      setNewColor("customBTN");
    }
  };

  const changePage = () => {
    if (currentPage === maxPagesCount) {
      setCurrentPage(1);
    } else if (currentPage < maxPagesCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <RenderPage
          customColor={customColor}
          message={message}
          changeMessage={changeMessage}
          currentPage={currentPage}
        />

        <Button onClick={changePage} />
      </div>
    </div>
  );
}

export default App;
