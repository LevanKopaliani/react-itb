import "./../styles/SectionFour.scss";
import PlayButton from "./../assets/img/playimage.png";
import FourBack from "./../assets/img/fourback.png";

const SectionFour = () => {
  return (
    <section className="SectionFour" id="video">
      <img className="SectionFour-img" src={FourBack} alt="play" />
      <p className="playbutton">
        <img src={PlayButton} alt="p" />
      </p>
      <p className="text">Wonder. Learn. Evolve. </p>
    </section>
  );
};

export default SectionFour;
