import Button from "../Button/Button";

const Page01_Click = ({ customColor, message, changeMessage }) => {
  return (
    <Button customColor={customColor} onClick={changeMessage}>
      {message}
    </Button>
  );
};

export default Page01_Click;