import Feature from "../../components/Feature";
import Footer from "../../components/LandingPage/Footer";
import Header from "../../components/Header/";
import Testimonial from "../../components/LandingPage/Testimonial";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero";

const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Feature />
      <Testimonial />
      <Footer />
    </Layout>
  );
};

export default LandingPage;
