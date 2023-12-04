import React from "react";
import Navbar from "./pages/navbar";
import Hero from "./pages/hero";
import Domain from "./pages/domain";
import Price from "./pages/price";
import Service from "./pages/service";
import Company from "./pages/company";
import Commitment from "./pages/commitment";
import Build from "./pages/build";
import Guaranty from "./pages/guaranty";
import Help from "./pages/help";
import Footer from "./pages/footer";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Domain />
      <Price />
      <Service />
      <Company />
      <Commitment />
      <Build />
      <Guaranty />
      <Help />
      <Footer />
    </>
  );
}

export default Page;
