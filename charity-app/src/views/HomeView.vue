<template>
  <div class="home">
    <div>
      <button class="home__fixed-button">
        <p>donate</p>
      </button>
    </div>

    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SupportsSection />
    <TeamSection />
    <CitizensSection />
    <PartnersSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import SupportsSection from "@/components/SupportsSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import CitizensSection from "@/components/CitizensSection.vue";
import PartnersSection from "@/components/PartnersSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
    SupportsSection,
    TeamSection,
    CitizensSection,
    PartnersSection,
    ContactSection,
  },
};
</script>

<style scoped lang="scss">
.home__fixed-button {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background-color: #ffffff;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  z-index: 1000;
  font-size: 1.8rem;
  font-weight: 500;
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #000000;
    transition: transform 0.3s ease;
    transform: translate(0, 0);
    z-index: -1;
  }

  p {
    margin: 0;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  &:hover p {
    transform: translate(8px, -8px);
    color: #000000;
  }

  &:hover::after {
    transform: translate(8px, -8px);
  }
}
</style>
