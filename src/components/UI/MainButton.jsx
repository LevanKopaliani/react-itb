import "./MainButton.scss";

const MainButton = ({ text, onPress }) => {
  return (
    <div>
      <button className="mainbutton" onClick={onPress}>
        {text}
      </button>
    </div>
  );
};

export default MainButton;
