<template>
  <div class="supports">
    <div class="supports__header">
      <h1 class="supports__title">We want to help</h1>
      <p class="supports__description">
        homeless packs, volunteers, guardians, overstayers, shelters and other
        organisations
      </p>
    </div>
    <div class="supports__list-wrapper">
      <ul class="supports__list">
        <li
          class="supports__item"
          v-for="(support, index) in supportsList"
          :key="index"
        >
          <div class="supports__card">
            <h2 class="supports__name">{{ support.name }}</h2>
          </div>
        </li>
      </ul>
    </div>
    <div class="supports__button-wrapper">
      <btn class="supports__button">
        apply for help
        <img
          src="../assets/images/imgArrowRight.png"
          alt="Arrow right"
          class="supports__icon"
        />
      </btn>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { gsap, ScrollTrigger } from "@/plugins/gsap";

export default {
  name: "SupportsSection",
  data() {
    return {
      supportsList: [
        { name: "Shelter of Victoria Bulbyna" },
        { name: "City of faithful hearts" },
        { name: "Shelter of Natalia Tymoshenko" },
        { name: "Shelter of Jeanne Sass" },
        { name: "Shelter of Victoria Bondarenko" },
        { name: "Sterilization center" },
        { name: "Zoo chance" },
        { name: "Save lives" },
        { name: "City Center for the Treatment of Animals" },
        { name: "Society for the Protection of Animals in Sumy" },
        { name: "The right to life" },
        { name: "4 paws" },
        { name: "The kingdom of cats" },
        { name: "Zvir" },
        { name: "Mercy" },
        { name: "Happy dog" },
        { name: "Give me a paw, friend" },
        { name: "Friend" },
        { name: "Hope" },
        { name: "We are for the right to life" },
        { name: "Planeta" },
        { name: "Second Life" },
        { name: "Happy shore" },
        { name: "Retrieverteam" },
        { name: "Shelter of Irina Dobrolyubova" },
        { name: "Matilda" },
        { name: "Life" },
        { name: "Second chance" },
        { name: "SOS" },
        { name: "Best friends" },
      ],
    };
  },
  mounted() {
    nextTick(() => {
      const animateBatch = (batch) => {
        gsap.fromTo(
          batch,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: { each: 0.1, amount: 0.3 },
            ease: "power2.out",
          }
        );
      };

      ScrollTrigger.batch(".supports__card", {
        onEnter: animateBatch,
        onEnterBack: animateBatch,
        start: "top 90%",
      });

      const buttonWrapper = this.$el.querySelector(".supports__button-wrapper");
      gsap.fromTo(
        buttonWrapper,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonWrapper,
            start: "top 90%",
            toggleActions: "restart none none none",
            once: false,
          },
        }
      );
    });
  },
};
</script>

<style scoped lang="scss">
.supports {
  display: flex;
  flex-direction: column;
  background-color: #ffff00;
  padding: 9rem;
  color: #000000;
  text-align: left;

  &__title {
    font-size: 3.2rem;
  }

  &__description {
    font-size: 2.2rem;
    line-height: 1.5;
    margin-top: 1rem;
  }

  &__list-wrapper {
    margin-top: 4rem;
    margin-bottom: 7rem;
  }

  &__list {
    padding: 0;
    gap: 3.2rem;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
  }

  &__card {
    position: relative;
    background-color: #ffffff;
    padding: 2rem;
    text-align: center;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

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
      z-index: 99;
      cursor: pointer;
    }

    &:hover::after {
      transform: translate(15px, -15px);
    }

    &:hover .supports__name {
      transform: translate(15px, -15px);
      cursor: pointer;
    }
  }

  &__name {
    font-size: 1.25rem;
    font-weight: 500;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 100;
  }

  &__button {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background-color: #ff97d0;
    color: #000000;
    cursor: pointer;
    font-weight: 600;
    border: 3px solid #000000;
    align-items: center;
    transition: background-color 0.3s ease;
  }

  &__icon {
    width: 2rem;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  .supports__button:hover .supports__icon {
    transform: translateX(5px);
  }
}
</style>
