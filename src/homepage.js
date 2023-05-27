import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";
import samarpan_dasgupta_pic from "./images/mayur_ghule.png";
import { getAllProjectCategory } from "./project/helper/api_call";

const HomeComponent = () => {
  return <CommonComponent>{<MiddleSection />}</CommonComponent>;
};

const MiddleSection = () => {
  // As backend sometime sleeps, that's for trigger so that Projects and Certificate section loads faster
  useEffect(() => {
    fetchAllProjectCategory();
  }, []);

  const fetchAllProjectCategory = () => {
    getAllProjectCategory();
  };

  return (
    <div className="container bg-home-section" align="center">
      <img
        src={samarpan_dasgupta_pic}
        alt="Mayur Ghule Logo"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1000"
        className="h-25 img-fluid"
      />
      <h3
        className="display-5 fw-bold home-page-my-name mt-2 aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Samarpan Dasgupta
      </h3>
      <h6
        className="home-page-status aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        What you seek is seeking you
      </h6>
      <AutoTypingHelper />
    </div>
  );
};

const AutoTypingHelper = () => {
  return (
    <div
      className="auto-typing aos-removal-class"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="1000"
      style={{ color: "#000000" }}
    >
      <Typewriter
        options={{
          strings: [
            "DevOps Engineer From India",
            "I am a full-time DevOps Engineer",
            "Love to play with DevOps tools",
            "Also works AWS Services",
            "Love to learn new technologies",
            "Collaborate with developers",
            "Techical blogger",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
          typeSpeed: 40,
        }}
      />
    </div>
  );
};

export default HomeComponent;
