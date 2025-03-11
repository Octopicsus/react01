import Page01_Click from "../../Pages/Page01_Click";
import Page02_Input from "../../Pages/Page02_Input";
import Page03_Loader from "../../Pages/Page03_Loader";

import "./renderPage.css";

function RenderPage({ currentPage }) {
  switch (currentPage) {
    case 1:
      return <Page01_Click />;
    case 2:
      return <Page02_Input />;

    case 3:
      return <Page03_Loader />;

    default:
      return <div className="discr">Page not found</div>;
  }
}

export default RenderPage;
