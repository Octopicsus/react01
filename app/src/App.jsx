import { useState } from "react";
import "./App.css";

import RenderPage from "./components/renderPage/renderPage";
import Button from "./components/Button/Button";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPagesCount = 2;

  const changePage = () => {
    if (currentPage === maxPagesCount) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <RenderPage currentPage={currentPage} />
        <Button onClick={changePage}>next</Button>
      </div>
    </div>
  );
}

export default App;