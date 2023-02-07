import "./MainButton.scss";

const MainButton = ({ text }) => {
  return (
    <div>
      <button className="mainbutton">{text}</button>
    </div>
  );
};

export default MainButton;
