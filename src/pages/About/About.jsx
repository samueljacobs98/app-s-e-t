import AboutContent from "../../components/AboutContent/AboutContent";
import Layout from "../../components/Layout/Layout";
import "./About.scss";

const About = () => {
  return (
    <Layout>
      <div className="container-about">
        <AboutContent />
      </div>
    </Layout>
  );
};

export default About;
