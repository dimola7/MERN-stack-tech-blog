import AboutSvg from "../../images/undraw_Dev_focus.svg";
import "./About.css";

const About = () => {
  return (
    <div className="about-grid-container">
      <div>
        <img src={AboutSvg} alt="" />
      </div>
      <div>
        <h2>What is TechBlog?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolores
          sunt? Molestiae molestias quia ipsum quos!
        </p>
      </div>
      <div>
        <h2>Why TechBlog?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolores
          sunt? Molestiae molestias quia ipsum quos!
        </p>
      </div>
    </div>
  );
};

export default About;
