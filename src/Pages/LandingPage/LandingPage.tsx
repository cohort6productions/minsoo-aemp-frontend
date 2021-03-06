// Importing modules
import * as React from "react";
// Importing styling and static assets
// Importing reduc and friends
// Importing react routering

// Importing UI elements
import CreatorProjectGridDisplay from "src/Components/CreatorProjectGridDisplay/CreatorProjectGridDisplay";
import Footer from "src/Components/Footer/Footer";
import HeroSection from "src/Components/HeroSection/HeroSection";
import HowToSection from "src/Components/HowToSection/HowToSection";
import PartnersCard from "src/Components/PartnersCard/ParntersCard";
import Subscribe from "src/Components/Subscribe/Subscribe";
import Team from "src/Components/Team/Team";
// Importing interfaces

export default class LandingPage extends React.Component {
  public render() {
    return (
      <div className="landingPage">
        <HeroSection />
        <CreatorProjectGridDisplay />
        <HowToSection />
        <PartnersCard />
        <Team />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
