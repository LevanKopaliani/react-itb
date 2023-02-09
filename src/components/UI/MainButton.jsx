import "./MainButton.scss";

const MainButton = ({ text, onPress }) => {
  return (
    <div className="button-container">
      <button className="mainbutton" onClick={onPress}>
        {text}
      </button>
    </div>
  );
};

export default MainButton;
