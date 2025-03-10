import Page01_Click from "../Pages/Page01_Click";
import Page02_Input from "../Pages/Page02_Input";

function RenderPage({ currentPage }) {
  switch (currentPage) {
    case 1:
      return <Page01_Click />;
    case 2:
      return <Page02_Input />;
    default:
      return <div>Page not found</div>;
  }
}

export default RenderPage;
