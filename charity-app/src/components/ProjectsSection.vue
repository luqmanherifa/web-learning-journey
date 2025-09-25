<template>
  <div class="projects">
    <div class="projects__header">
      <h1 class="projects__title">Our projects</h1>
      <p class="projects__subtitle">
        are very different in terms of priority, scale and complexity of
        implementation
      </p>
    </div>
    <div class="projects__list-wrapper">
      <ul class="projects__list">
        <li
          class="projects__item"
          v-for="(project, index) in projectsList"
          :key="index"
        >
          <div class="projects__card">
            <h2 class="projects__name">{{ project.name }}</h2>
            <p class="projects__description">{{ project.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { gsap, ScrollTrigger } from "@/plugins/gsap";

export default {
  name: "ProjectsSection",
  data() {
    return {
      projectsList: [
        {
          name: "Emergency Aid. WAR 2022.",
          description:
            "providing food and medicine to the shelters and animals which lost their homes and families due to the war",
        },
        {
          name: "Non-commercial feed line",
          description:
            "construction of industrial production base where food for shelters will be produced on a free basis",
        },
        {
          name: "Education and Control",
          description:
            "lectures on communication, organisation and coordination of processes, control over the use of aid",
        },
      ],
    };
  },
  mounted() {
    nextTick(() => {
      const animateCard = (card) => {
        gsap.fromTo(
          card,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      };

      gsap.utils.toArray(".projects__card").forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          onEnter: () => animateCard(card),
          onEnterBack: () => animateCard(card),
        });
      });
    });
  },
};
</script>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  background-color: #3e88ff;
  color: white;
  padding: 9rem;
  text-align: left;

  &__title {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 2.2rem;
    line-height: 1.5;
    margin-bottom: 3.5rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__item {
    position: relative;
    overflow: visible;
    z-index: 10;
  }

  &__card {
    position: relative;
    padding: 3.5rem;
    background-color: inherit;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 3px solid white;
      transition: transform 0.3s ease;
      transform: translate(0, 0);
      z-index: 99;
      cursor: pointer;
    }

    &:hover::after {
      transform: translate(15px, -15px);
    }

    &:hover .projects__name,
    &:hover .projects__description {
      transform: translate(15px, -15px);
      cursor: pointer;
    }
  }

  &__item:nth-child(1) .projects__card {
    background-color: #000000;
  }

  &__item:nth-child(2) .projects__card {
    background-color: #31be32;
  }

  &__item:nth-child(3) .projects__card {
    background-color: #ff97d0;
  }

  &__name,
  &__description {
    transition: transform 0.3s ease;
    position: relative;
    z-index: 100;
  }

  &__name {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  &__description {
    font-size: 1.8rem;
    line-height: 1.3;
  }
}
</style>
