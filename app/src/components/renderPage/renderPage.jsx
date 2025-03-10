import Page01_Click from "../Pages/Page01_Click";
import Page02_Input from "../Pages/Page02_Input";

function RenderPage({ customColor, message, changeMessage, currentPage }) {
  switch (currentPage) {
    case 1:
      return (
        <Page01_Click
          customColor={customColor}
          message={message}
          changeMessage={changeMessage}
        />
      );

    case 2:
      return <Page02_Input />;
  }
}

export default RenderPage;
