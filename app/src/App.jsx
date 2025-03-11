import { useState } from "react";
import "./App.css";

import RenderPage from "./components/widgets/renderPage/renderPage";
import Button from "./components/widgets/Button/Button";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPagesCount = 3;

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
        <Button onClick={changePage}>{currentPage=== 3 ? 'done': 'next'}</Button>
      </div>
    </div>
  );
}

export default App;
