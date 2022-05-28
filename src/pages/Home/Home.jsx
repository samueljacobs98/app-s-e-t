import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import Layout from "../../components/Layout/Layout";
import LearnBanner from "../../components/LearnBanner/LearnBanner";
import LogInBanner from "../../components/LogInBanner/LogInBanner";

const Home = () => {
  return (
    <Layout>
      <CarouselBanner />
      <LearnBanner />
      <LogInBanner />
      <ContactBanner />
    </Layout>
  );
};

export default Home;
