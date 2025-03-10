import "./Button.css";

function Button({ children = 'next', customColor = 'navButton', onClick }) {
  return (
    <button className={customColor} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
