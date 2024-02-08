import Feature from "../../components/Feature";
import Footer from "../../components/LandingPage/Footer";
import Header from "../../components/Header/";
import FAQ from "../../components/FAQ";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero";

const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </Layout>
  );
};

export default LandingPage;
