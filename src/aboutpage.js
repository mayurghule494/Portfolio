import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";

const AboutComponent = () => {
  return (
    <CommonComponent>
      <AboutPage />
    </CommonComponent>
  );
};

const AboutPage = () => {
  return (
    <div className="container mt-3 about-page">
      <h2 className="text-center" data-aos="zoom-in" data-aos-duration="1000">
        About Myself
      </h2>
      <p
        className="mt-4 about-me"
        data-aos="fade-out"
        data-aos-duration="2000"
        data-aos-delay="800"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Myself <a href="https://www.linkedin.com/in/samarpan-dasgupta-4aa1061b0/" target="_blank">Mayur Ghule</a>, Senior Devops Engineer from
                  Nagpur, India. Working with AWS and DevOps technologies with having a great passion for learning
                  new technologies.<br /><br />
  
                  Love to create Infrastructure using Terraform, Experienced with various Deployment statorgies. Having Experience to Work in Product base Projects. 
                  Working as a full-time Senior DevOps Engineer at LTIMindtree. Beside that, working on some of my personal projects and learning new technologies. Also writing blogs on linkedin about various technologies.`
              )
              .start();
          }}
          options={{
            delay: 20,
            typeSpeed: 40,
          }}
        />
      </p>
    </div>
  );
};

export default AboutComponent;
