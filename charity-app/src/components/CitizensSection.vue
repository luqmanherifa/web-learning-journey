<template>
  <div class="citizens">
    <div class="citizens__header">
      <h1 class="citizens__title">Socially active citizens</h1>
      <p class="citizens__subtitle">support us</p>
    </div>
    <div class="citizens__list-wrapper">
      <ul class="citizens__list">
        <li
          class="citizens__item"
          v-for="(citizen, index) in citizensList"
          :key="index"
        >
          <div class="citizens__card">
            <img
              :src="citizen.photo"
              :alt="citizen.alt"
              class="citizens__photo"
            />
            <h2 class="citizens__name">{{ citizen.name }}</h2>
            <p class="citizens__job">{{ citizen.job }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import citizensOleksiy from "@/assets/images/citizensOleksiy.jpg";
import citizensStanislav from "@/assets/images/citizensStanislav.jpg";
import citizensAlexander from "@/assets/images/citizensAlexander.jpg";
import citizensOksana from "@/assets/images/citizensOksana.jpg";
import citizensNatalka from "@/assets/images/citizensNatalka.jpg";
import citizensMaksym from "@/assets/images/citizensMaksym.jpg";
import citizensKateryna from "@/assets/images/citizensKateryna.jpg";
import citizensIrma from "@/assets/images/citizensIrma.jpg";
import citizensIgor from "@/assets/images/citizensIgor.jpg";
import citizensDmytro from "@/assets/images/citizensDmytro.jpg";
import citizensDaria from "@/assets/images/citizensDaria.jpg";
import citizensVera from "@/assets/images/citizensVera.jpg";
import citizensAndriy from "@/assets/images/citizensAndriy.jpg";
import citizensAnastasia from "@/assets/images/citizensAnastasia.jpg";

import { nextTick } from "vue";
import { gsap, ScrollTrigger } from "@/plugins/gsap";

export default {
  name: "CitizensSection",
  data() {
    return {
      citizensList: [
        {
          photo: citizensOleksiy,
          alt: "Oleksiy Tritenko",
          name: "Oleksiy Tritenko",
          job: "theater and film actor",
        },
        {
          photo: citizensStanislav,
          alt: "Stanislav Boklan",
          name: "Stanislav Boklan",
          job: "People's Artist of Ukraine",
        },
        {
          photo: citizensAlexander,
          alt: "Alexander Rudinsky",
          name: "Alexander Rudinsky",
          job: "theater and film actor",
        },
        {
          photo: citizensOksana,
          alt: "Oksana Zhdanova",
          name: "Oksana Zhdanova",
          job: "theater and film actress",
        },
        {
          photo: citizensNatalka,
          alt: "Natalka Denisenko",
          name: "Natalka Denisenko",
          job: "theater and film actress",
        },
        {
          photo: citizensMaksym,
          alt: "Maksym Samchyk",
          name: "Maksym Samchyk",
          job: "theater and film actor",
        },
        {
          photo: citizensKateryna,
          alt: "Kateryna Vyshneva",
          name: "Kateryna Vyshneva",
          job: "theater and film actress",
        },
        {
          photo: citizensIrma,
          alt: "Irma Vitovska",
          name: "Irma Vitovska",
          job: "Honored Actress of Ukraine",
        },
        {
          photo: citizensIgor,
          alt: "Igor Portyanko",
          name: "Igor Portyanko",
          job: "actor of theater and cinema",
        },
        {
          photo: citizensDmytro,
          alt: "Dmytro Surzhikov",
          name: "Dmytro Surzhikov",
          job: "Honored Artist of Ukraine",
        },
        {
          photo: citizensDaria,
          alt: "Daria Barihashvili",
          name: "Daria Barihashvili",
          job: "theater and film actress",
        },
        {
          photo: citizensVera,
          alt: "Vera Kobzar",
          name: "Vera Kobzar",
          job: "theater and film actress",
        },
        {
          photo: citizensAndriy,
          alt: "Andriy Fedynchyk",
          name: "Andriy Fedynchyk",
          job: "theater and film actor",
        },
        {
          photo: citizensAnastasia,
          alt: "Anastasia Nesterenko",
          name: "Anastasia Nesterenko",
          job: "theater and film actress",
        },
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

      ScrollTrigger.batch(".citizens__card", {
        onEnter: animateBatch,
        onEnterBack: animateBatch,
        start: "top 90%",
      });
    });
  },
};
</script>

<style scoped lang="scss">
.citizens {
  display: flex;
  flex-direction: column;
  background-color: #ff97d0;
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
  }

  &__photo {
    width: 227px;
    height: 227px;
    filter: grayscale(100%);
  }

  &__name {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 0.8rem;
    width: 227px;
  }

  &__job {
    font-size: 1rem;
    margin-top: 0.2rem;
    width: 227px;
  }
}
</style>
