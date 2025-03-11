import { useState } from "react";
import Button from "../widgets/Button/Button";

const Page01_Click = () => {
  const [switcher, setSwitcher] = useState(false);
  const [customColor, setNewColor] = useState("customBTN");
  const [message, setNewMessage] = useState("CLICK");

  const switcherBtn = () => {
    setSwitcher(!switcher);
    return !switcher;
  };

  const changeMessage = () => {
    if (switcherBtn()) {
      setNewMessage("Ahoj!");
      setNewColor("placeholder");
    } else {
      setNewMessage("CLICK");
      setNewColor("customBTN");
    }
  };

  return (
    <Button customColor={customColor} onClick={changeMessage}>
      {message}
    </Button>
  );
};

export default Page01_Click;
