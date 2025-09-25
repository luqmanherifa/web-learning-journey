import List from "../Layouts/Home/List";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import Hero from "../Layouts/Home/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <List />
      <Footer />
    </>
  );
}

export default Home;
