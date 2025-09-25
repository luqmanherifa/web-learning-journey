<template>
  <div class="partners">
    <div class="partners__header">
      <h1 class="partners__title">Our partners</h1>
      <p class="partners__subtitle">
        are take care of our fund and help us with many questions
      </p>
    </div>
    <div class="partners__list-wrapper">
      <ul class="partners__list">
        <li
          class="partners__item"
          v-for="(partner, index) in partnersList"
          :key="index"
        >
          <div class="partners__card">
            <img
              :src="partner.image"
              :alt="partner.alt"
              class="partners__logo"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import partnersAdviRes from "@/assets/images/partnersAdviRes.jpg";
import partnersOvidWind from "@/assets/images/partnersOvidWind.png";
import partnersTbsIndustry from "@/assets/images/partnersTbsIndustry.png";
import partnersAccurl from "@/assets/images/partnersAccurl.png";
import partnersLaudisAccountancy from "@/assets/images/partnersLaudisAccountancy.png";
import partnersKickBite from "@/assets/images/partnersKickBite.jpeg";

import { nextTick } from "vue";
import { gsap, ScrollTrigger } from "@/plugins/gsap";

export default {
  name: "PartnersSection",
  data() {
    return {
      partnersList: [
        { image: partnersAdviRes, alt: "Logo AdviRES" },
        { image: partnersOvidWind, alt: "Logo Ovid Wind" },
        { image: partnersTbsIndustry, alt: "Logo TBS Industry" },
        { image: partnersAccurl, alt: "Logo Accurl" },
        { image: partnersLaudisAccountancy, alt: "Logo Laudis Accountancy" },
        { image: partnersKickBite, alt: "Logo Kick Bite" },
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

      ScrollTrigger.batch(".partners__card", {
        onEnter: animateBatch,
        onEnterBack: animateBatch,
        start: "top 90%",
      });
    });
  },
};
</script>

<style scoped lang="scss">
.partners {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 9rem;
  text-align: left;
  color: #000000;
  gap: 3rem;

  &__title {
    font-size: 3.2rem;
  }

  &__subtitle {
    font-size: 2.2rem;
    line-height: 1.5;
    margin-top: 1rem;
  }

  &__list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__list {
    padding: 0;
    gap: 3.2rem;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    justify-content: center;
  }

  &__card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__logo {
    width: 227px;
    height: auto;
    filter: grayscale(100%);
  }
}
</style>
