import Feature from "../../components/LandingPage/Feature";
import Footer from "../../components/LandingPage/Footer";
import Header from "../../components/LandingPage/Header";
import Hero from "../../components/LandingPage/Hero";
import Testimonial from "../../components/LandingPage/Testimonial";
import Layout from "../../layout/Layout";

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
